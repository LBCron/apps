// The kind of one update (update.yml, job `classify`; plan .vibe/development-plan-feat-serve-copies.md, KD-10): what
// `lernapps update` would have made of the entry's commit, compared with the app's new commit (scripts/update-kind.mjs).
// When the new commit pins another @lernapps/tooling than the entry's commit, this installs that tooling, runs its
// `lernapps update` on a checkout of the entry's commit and compares the tree it leaves with the new commit; otherwise
// it compares the two commits. So an update a creator made with `lernapps update` alone merges without a review, as
// does one that changed only text or versions of npm dependencies.
//
// The tooling must be ours: either a commit on main of lernapps/tooling (GitHub serves commits of forks under the
// parent's name, and a fork's tooling could print any verdict), or a version of the package @lernapps/tooling on npm,
// which only the organisation publishes (trusted publishing, with provenance). Its install runs its own scripts (it is
// our code); the app's dependencies are installed with npm_config_ignore_scripts, so no code of the app runs. The job
// that runs this holds no secret.
//
//   node scripts/update-replay.mjs <id> <source> <from> <to>
//
// Prints one JSON object { "id", "source", "from", "to", "kind", "reasons", "tooling" }; tooling is the commit whose
// update was replayed, or null. Exit code 0 either way, 2 on wrong usage.
import { spawnSync } from "node:child_process";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { toolingPinOf } from "./tooling-pin.mjs";
import { updateKind } from "./update-kind.mjs";

const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const SHA = /^[0-9a-f]{40}$/;
const TOOLING = "https://github.com/lernapps/tooling";

const [id, source, from, to] = process.argv.slice(2);
if (!ID.test(id ?? "") || !/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+$/.test(source ?? "") || !SHA.test(from ?? "") || !SHA.test(to ?? "")) {
  process.stderr.write("Usage: node scripts/update-replay.mjs <id> <source> <from> <to>\n");
  process.exit(2);
}

const run = (command, args, options = {}) =>
  spawnSync(command, args, {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
    ...options,
    env: { ...process.env, GIT_TERMINAL_PROMPT: "0", ...options.env },
  });
const git = (dir, ...args) => run("git", ["-C", dir, ...args]);
const temp = mkdtempSync(join(tmpdir(), `update-${id}-`));
const verdict = (kind, reasons, tooling = null) => ({ id, source, from, to, kind, reasons, tooling });

/** The commit or the exact version of @lernapps/tooling the app's package.json pins at `commit`, its spec if it is no pin, or undefined. */
function toolingPin(dir, commit) {
  const shown = git(dir, "show", `${commit}:package.json`);
  if (shown.status !== 0) return undefined;
  try {
    const { dependencies, devDependencies } = JSON.parse(shown.stdout);
    const spec = devDependencies?.["@lernapps/tooling"] ?? dependencies?.["@lernapps/tooling"];
    return spec === undefined ? undefined : toolingPinOf(spec).value;
  } catch {
    return undefined;
  }
}

function classify() {
  const app = join(temp, "app");
  const clone = git(temp, "clone", "--quiet", "--filter=blob:none", "--no-checkout", source, app);
  if (clone.status !== 0) return verdict("review", [`git clone ${source}: ${clone.stderr.trim()}`]);
  if (git(app, "merge-base", "--is-ancestor", from, to).status !== 0) {
    return verdict("review", [`${from.slice(0, 7)} is not an ancestor of ${to.slice(0, 7)}: the history was rewritten`]);
  }
  const before = toolingPin(app, from);
  const after = toolingPin(app, to);
  if (after === undefined || after === before) {
    const { kind, reasons } = updateKind(app, from, to);
    return verdict(kind, reasons);
  }
  const pin = toolingPinOf(after);
  // a commit is named by its first seven characters, a version whole
  const name = pin.kind === "commit" ? after.slice(0, 7) : after;
  if (pin.kind === "other") {
    return verdict("review", [`package.json: @lernapps/tooling is "${after}", neither a commit of ${TOOLING} nor a version of the package`]);
  }

  if (pin.kind === "commit") {
    const tooling = join(temp, "tooling");
    const fetched = git(temp, "clone", "--quiet", "--bare", "--filter=blob:none", "--single-branch", "--branch", "main", TOOLING, tooling);
    if (fetched.status !== 0) return verdict("review", [`git clone ${TOOLING}: ${fetched.stderr.trim()}`]);
    if (git(tooling, "merge-base", "--is-ancestor", after, "main").status !== 0) {
      return verdict("review", [`package.json: @lernapps/tooling ${name} is not a commit on main of ${TOOLING}`]);
    }
  }

  const bin = join(temp, "bin");
  run("mkdir", ["-p", bin]);
  writeFileSync(join(bin, "package.json"), "{}\n");
  const spec = pin.kind === "commit" ? `github:lernapps/tooling#${after}` : `@lernapps/tooling@${after}`;
  const install = run("npm", ["install", "--no-audit", "--no-fund", spec], { cwd: bin });
  if (install.status !== 0) return verdict("review", [`npm install of the tooling ${name} failed`], after);

  const tree = join(temp, "replay");
  const checkout = git(app, "worktree", "add", "--quiet", "--detach", tree, from);
  if (checkout.status !== 0) return verdict("review", [`git worktree add ${from}: ${checkout.stderr.trim()}`], after);
  const update = run(join(bin, "node_modules", ".bin", "lernapps"), ["update"], {
    cwd: tree,
    env: { npm_config_ignore_scripts: "true", npm_config_audit: "false", npm_config_fund: "false" },
  });
  process.stderr.write(update.stdout + update.stderr);
  if (update.status !== 0) return verdict("review", [`lernapps update (tooling ${name}) failed on ${from.slice(0, 7)}`], after);
  git(tree, "add", "-A");
  const written = git(tree, "write-tree");
  if (written.status !== 0) return verdict("review", [`git write-tree: ${written.stderr.trim()}`], after);
  const { kind, reasons } = updateKind(app, written.stdout.trim(), to);
  return verdict(kind, reasons, after);
}

try {
  process.stdout.write(`${JSON.stringify(classify())}\n`);
} finally {
  rmSync(temp, { recursive: true, force: true });
}
