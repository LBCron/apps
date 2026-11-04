// The pre-push hook of this repo (.githooks/pre-push). It first asks the change scope of the pushed commits: the
// classifier of lernapps/tooling at TOOLING_REF (changes/main.ts), the same one CI's job `changes` runs. Then:
//   none  (only the plan, .vibe/**)  nothing, one line
//   docs  (only docs/**/*.md)        the site's build and check, the commands of CI's job `build`
//   all   (anything else)            the same, and the offline end-to-end tests (TESTS below)
// CI runs every test on every change of scope all, so it catches what the hook leaves out.
//
//   node scripts/pre-push.mjs [<remote> [<url>]]   reads git's lines "<local ref> <local sha> <remote ref> <remote sha>"
//
// Quiet like the pre-commit hook: what the steps print goes to node_modules/.cache/lernapps/pre-push.log; the hook
// prints one line saying what it checked, or on a failure one line naming the step and the log. Without lines on
// standard input (run by hand) the changed paths are not known: scope all.
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * The commit of lernapps/tooling whose classifier the hook runs. Only its folders changes/ and src/ are fetched, once
 * per commit into .git/lernapps/, and run with node: the classifier needs only Node's own modules (and node does not
 * run TypeScript below node_modules/, so not the installed @lernapps/tooling). The same commit as `tooling-ref` and
 * changes.yml@ in .github/workflows/ and the pin of @lernapps/tooling in package.json (test/pre-push.test.mjs).
 */
export const TOOLING_REF = "88d8290b3f198919a89673db1225c01c89aa380b";

/**
 * The end-to-end tests of a push of scope all: those that need no network and no Docker. Left to CI: the creator's
 * entry point (test/entry-point.e2e.test.mjs: every link it names on github.com and lernapps.net, and an app started
 * with its command; a minute or more, and it fails on a passing hiccup of a remote, a 503) and the review input built
 * in the workflow's container (it needs a Docker daemon).
 */
export const TESTS = {
  files: ["test/listing.e2e.test.mjs", "test/review.e2e.test.mjs", "test/pre-push.test.mjs", "test/links.test.mjs"],
  skip: "built in the container the workflow names",
};

/** The steps of a scope: [name, command]; each runs after the one before has passed. */
export function steps(scope) {
  if (scope === "none") return [];
  const site = [
    ["npm run build", ["npm", "run", "--silent", "build"]],
    ["npm run check", ["npm", "run", "--silent", "check"]],
  ];
  if (scope === "docs") return site;
  const tests = ["node", "--test", "--test-concurrency=1", `--test-skip-pattern=${TESTS.skip}`, ...TESTS.files];
  return [...site, ["the offline end-to-end tests", tests]];
}

const ZERO = /^0+$/;

/** git's lines on standard input: one [local sha, remote sha] per pushed ref. */
const refs = (lines) =>
  lines
    .split("\n")
    .map((line) => line.trim().split(/\s+/))
    .filter((fields) => fields.length === 4)
    .map(([, local, , remote]) => [local, remote]);

/**
 * The files a push changes, as the tooling's classifier reads them: what each pushed ref adds to the remote's commit;
 * for a new branch, what it adds to its merge base with origin/main. Undefined when that cannot be known: no lines
 * (run by hand), an unknown commit, no origin/main.
 */
export function pushedFiles(lines, cwd) {
  const git = (...args) => spawnSync("git", args, { cwd, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const pushed = refs(lines);
  if (pushed.length === 0) return undefined;
  const paths = new Set();
  for (const [local, remote] of pushed) {
    if (ZERO.test(local)) continue; // a deleted branch
    const base = ZERO.test(remote) ? git("merge-base", local, "origin/main").stdout.trim() : remote;
    if (base === "" || git("cat-file", "-e", `${base}^{commit}`).status !== 0) return undefined;
    const diff = git("diff", "--name-only", "--no-renames", "-z", base, local);
    if (diff.error || diff.status !== 0) return undefined;
    for (const path of diff.stdout.split("\0")) if (path !== "") paths.add(path);
  }
  return [...paths];
}

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LOG = "node_modules/.cache/lernapps/pre-push.log";

/** The classifier's entry point at TOOLING_REF, fetched on first use (changes/ and src/ only); undefined if it cannot be. */
export function classifier() {
  // in the clone's git folder: node refuses TypeScript below node_modules/, and npm ci would delete it
  const gitDir = spawnSync("git", ["rev-parse", "--git-common-dir"], { cwd: ROOT, encoding: "utf8" }).stdout.trim();
  if (gitDir === "") return undefined;
  const dir = resolve(ROOT, gitDir, "lernapps", `tooling-${TOOLING_REF}`);
  const main = join(dir, "changes", "main.ts");
  if (existsSync(main)) return main;
  const temp = `${dir}.${process.pid}`;
  rmSync(temp, { recursive: true, force: true });
  mkdirSync(temp, { recursive: true });
  const git = (...args) => spawnSync("git", args, { cwd: temp, stdio: "ignore" }).status === 0;
  const fetched =
    git("init", "--quiet") &&
    git("sparse-checkout", "set", "--no-cone", "/changes/", "/src/") &&
    git("fetch", "--quiet", "--depth", "1", "--filter=blob:none", "https://github.com/lernapps/tooling.git", TOOLING_REF) &&
    git("checkout", "--quiet", "FETCH_HEAD");
  if (fetched) {
    try {
      renameSync(temp, dir);
    } catch {
      // another push fetched it at the same time
    }
  }
  rmSync(temp, { recursive: true, force: true });
  return existsSync(main) ? main : undefined;
}

/**
 * The environment of the steps: without git's GIT_* variables. A hook gets GIT_DIR and others; a step that runs git in
 * a folder of its own, like the end-to-end tests' `git init`, would otherwise act on this repository.
 */
const STEP_ENV = Object.fromEntries(Object.entries(process.env).filter(([key]) => !key.startsWith("GIT_")));

/** Runs the steps one after the other, their output into the log; the step that failed and its exit code. */
function runLogged(cwd, log) {
  return (all) => {
    for (const [name, [program, ...args]] of all) {
      writeFileSync(log, `$ ${[program, ...args].join(" ")}\n`, { flag: "a" });
      // stdin ignored: a step never sees git's lines
      const result = spawnSync(program, args, { cwd, env: STEP_ENV, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], maxBuffer: 256 * 1024 * 1024 });
      writeFileSync(log, `${result.stdout ?? ""}${result.stderr ?? ""}${result.error ? `${result.error.message}\n` : ""}`, { flag: "a" });
      if (result.status !== 0) return { name, code: result.status ?? 1 };
    }
    return undefined;
  };
}

/** The hook: the exit code of the push. `run` runs the steps (a test passes its own). */
export function prePush(lines, { cwd, write, run }) {
  const say = (message) => write(`lernapps pre-push: ${message}\n`);
  const pushed = refs(lines);
  if (pushed.length > 0 && pushed.every(([local]) => ZERO.test(local))) {
    say("nothing to check, the push only deletes");
    return 0;
  }
  const files = pushedFiles(lines, cwd);
  let scope = "all";
  let reason = "the changed paths are not known";
  if (files !== undefined) {
    const main = classifier();
    if (main === undefined) {
      say(`cannot fetch the classifier of lernapps/tooling at ${TOOLING_REF} (offline?)`);
      return 1;
    }
    const result = spawnSync(process.execPath, [main, "--", ...files], { cwd, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
    if (result.status !== 0) {
      say(`lernapps changes failed (exit ${result.status ?? 1}): ${result.stderr.trim()}`);
      return result.status ?? 1;
    }
    scope = result.stdout.trim();
    reason = /^lernapps changes: \S+ in a repo of kind \S+: (.*)$/m.exec(result.stderr)?.[1] ?? reason;
  }
  const plan = steps(scope);
  if (plan.length === 0) {
    say(`nothing to check, the push changes only the plan (${reason})`);
    return 0;
  }
  const log = join(cwd, LOG);
  mkdirSync(dirname(log), { recursive: true });
  writeFileSync(log, `lernapps pre-push: scope ${scope} (${reason})\n`);
  const failure = (run ?? runLogged(cwd, log))(plan);
  if (failure !== undefined) {
    say(`${failure.name} failed (exit ${failure.code}); the full output is in ${LOG}`);
    return failure.code;
  }
  say(`scope ${scope}: ${plan.map(([name]) => name).join(", ")} passed (CI runs the rest)`);
  return 0;
}

if (process.argv[1] !== undefined && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  let lines = "";
  try {
    lines = process.stdin.isTTY ? "" : readFileSync(0, "utf8");
  } catch {
    // no standard input: run by hand
  }
  process.exitCode = prePush(lines, { cwd: process.cwd(), write: (text) => process.stdout.write(text) });
}
