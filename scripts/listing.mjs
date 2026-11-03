// The listing validation of lernapps/apps (tooling docs/arc42 ch. 5, building block "Listing validation"): checks
// each entry against its deployed app and prints the listing results comment. The workflow listing.yml runs exactly
// this; a creator's assistant runs it in its clone, with the same result:
//
//   npm run --silent listing -- [--out <dir>] entries/<id>.yaml ...
//
// Per entry it runs `lernapps check --entry <file>` of @lernapps/tooling: the checks of the built app on the entry's
// url, the url and every topic link resolve, the fitness values match the measured ones. One rule is the catalog's
// own: fitness.checked may be true only when the check passes; the strand and competencies exist on the learning map. The reports go to <dir>, one <id>.yaml each
// (default node_modules/.cache/lernapps/listing/). Exit code 0 when every entry passes, 1 when one fails, 2 on wrong
// usage.
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { dump, load } from "js-yaml";
import { render } from "./listing-comment.mjs";
import { reserved } from "../schemas/reserved.js";
import { loadMap, checkApp } from "../lib/map.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const LERNAPPS = join(root, "node_modules", ".bin", "lernapps");
const CACHE = join(root, "node_modules", ".cache", "lernapps", "listing");
const RULE_PAGE = "https://lernapps.net/tooling/rules/#";
const USAGE = "Usage: npm run --silent listing -- [--out <dir>] entries/<id>.yaml ...\n";

const finding = (rule, where, found, fix) => ({ rule, severity: "error", where, found, fix, link: `${RULE_PAGE}${rule}` });
const byPlace = (a, b) => a.rule.localeCompare(b.rule) || a.where.localeCompare(b.where) || a.found.localeCompare(b.found);

function usage(message) {
  process.stderr.write(`listing: ${message}\n\n${USAGE}`);
  process.exit(2);
}

const BROWSER_NOTICE = /^lernapps check: (Playwright's Chromium is not installed|no usable Chromium)/;

/**
 * The message of an uncaught error in Node's output: its first line after Node's own header. The notices of the
 * browser start (`lernapps check` says which Chromium it uses when Playwright's own is missing) are not the error.
 */
const crash = (stderr) =>
  stderr
    .replace(/\u001b\[[0-9;]*m/g, "")
    .split("\n")
    .map((line) => line.trim())
    .find((line) => line !== "" && line !== "^" && !BROWSER_NOTICE.test(line) && !line.startsWith("node:internal") && !line.startsWith("triggerUncaughtException"));

/** The report of one entry: from `lernapps check`, or one finding when the check could not run. */
function check(file, out) {
  const report = join(out, `${basename(file, ".yaml")}.yaml`);
  const result = spawnSync(LERNAPPS, ["check", "--entry", file, "--report", report], {
    encoding: "utf8",
    stdio: ["ignore", "pipe", "pipe"],
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stderr) process.stderr.write(result.stderr);
  if ((result.status === 0 || result.status === 1) && existsSync(report)) return load(readFileSync(report, "utf8"));
  // Exit code 2: the entry cannot be read (lernapps names why). Anything else: the check stopped on an error.
  const usage = result.status === 2;
  const why = usage
    ? (result.stderr.split("\n\n")[0] ?? "").replace(/^lernapps: /, "").trim()
    : (result.error?.message ?? crash(result.stderr) ?? `exit code ${result.status}`).trim();
  // An entry that cannot be read is the entry's fault (entry-from-schema); a check that stopped means the app could
  // not be checked at all (app-checkable).
  const rule = usage ? "entry-from-schema" : "app-checkable";
  return {
    checked: { directory: process.cwd() },
    rules: [rule],
    findings: [
      finding(
        rule,
        file,
        usage ? `lernapps check cannot read the entry: ${why}` : `lernapps check stopped: ${why}`,
        usage
          ? "Make the entry valid YAML with a url (format: https://lernapps.net/apps/schemas/entry.v1.schema.json), then check again"
          : "Make the app open at the entry's url in a browser, then check again. If the app opens but the check stops again, open an issue in lernapps/tooling with this message",
      ),
    ],
    suppressions: [],
  };
}

/** The catalog's own rule: fitness.checked: true only from a passing report. */
function checkedFromPassing(file, report) {
  let entry;
  try {
    entry = load(readFileSync(file, "utf8"));
  } catch {
    return;
  }
  const errors = report.findings.filter((f) => f.severity === "error").length;
  if (entry?.fitness?.checked !== true || errors === 0) return;
  report.findings.push(
    finding(
      "entry-fitness-matches",
      `${file}: fitness.checked`,
      `the entry says checked: true, but the check fails (${errors} error${errors === 1 ? "" : "s"})`,
      "Set fitness.checked to false. lernapps.net sets it to true once the check passes",
    ),
  );
  report.findings.sort(byPlace);
  if (!report.rules.includes("entry-fitness-matches")) report.rules = [...report.rules, "entry-fitness-matches"].sort();
}

/** The catalog's own rule: the id is not another path of the catalog (schemas/reserved.js). */
function freeId(file, report) {
  const taken = reserved(basename(file, ".yaml"));
  if (!taken) return;
  report.findings.push(
    finding("entry-from-schema", file, taken, "Rename the entry to another id, entries/<id>.yaml"),
  );
  report.findings.sort(byPlace);
  if (!report.rules.includes("entry-from-schema")) report.rules = [...report.rules, "entry-from-schema"].sort();
}

/**
 * The catalog's own rule entry-learning-map (docs/learning-map-contract.md, section 4): the strand and the competencies
 * an app names exist on the learning map, and they belong to one strand. An explainer of format 2 says them in
 * lernapps-pages.json beside its index.html; another app in its entry. An unknown competency and one of another strand
 * are errors (KD-19); an app without a strand is listed, only not on the map.
 */
async function learningMap(file, report) {
  let entry;
  try {
    entry = load(readFileSync(file, "utf8"));
  } catch {
    return;
  }
  if (typeof entry?.url !== "string") return;
  const add = (severity, where, found, fix) => report.findings.push({ ...finding("entry-learning-map", where, found, fix), severity });
  let pages;
  try {
    const base = entry.url.endsWith("/") ? entry.url : `${entry.url}/`;
    const response = await fetch(new URL("lernapps-pages.json", base), { signal: AbortSignal.timeout(15_000) });
    if (response.ok) pages = await response.json();
  } catch {
    // no page list: not an explainer of format 2, or not reachable; the app's own check reports an unreachable url
  }
  let strand = entry.strand;
  let competencies = entry.competencies ?? [];
  let recaps = [];
  if (pages && pages.format === 1 && Array.isArray(pages.pages)) {
    if (entry.competencies) {
      add("error", `${file}: competencies`, "the app is an explainer of format 2: its pages name their competencies", "Remove competencies from the entry");
    }
    if (entry.strand && entry.strand !== pages.strand) {
      add("error", `${file}: strand`, `the entry says ${entry.strand}, the app's src/app.yaml says ${pages.strand}`, "Remove strand from the entry or make it match src/app.yaml");
    }
    strand = pages.strand;
    competencies = [...new Set(pages.pages.flatMap((p) => p.competencies ?? []))];
    recaps = [...new Set(pages.pages.map((p) => p.recap).filter(Boolean))];
  }
  if ((!strand || strand === "none") && competencies.length === 0) return;
  let subjects;
  try {
    subjects = loadMap(join(root, "map"));
  } catch (error) {
    add("error", "map/", `the learning map of the catalog is broken: ${error.message}`, "Fix the files in map/ (lernapps/apps)");
    return;
  }
  const { errors, hints } = checkApp(subjects, { strand, competencies, recaps });
  const fixError = "Use a strand and competency ids of https://lernapps.net/apps/map/ ; a missing competency is proposed to lernapps/apps (map/<subject>.yaml)";
  for (const e of errors) add("error", file, e, fixError);
  // With a strand, an app practises only the competencies of that strand (KD-19): another strand is an error too.
  for (const h of hints) add("error", file, h, "Keep the app in its strand: move these pages to an app of their strand, or give the app strand: none");
  report.findings.sort(byPlace);
  if (report.findings.some((f) => f.rule === "entry-learning-map") && !report.rules.includes("entry-learning-map")) {
    report.rules = [...report.rules, "entry-learning-map"].sort();
  }
}

const args = process.argv.slice(2);
let out = CACHE;
const at = args.indexOf("--out");
if (at >= 0) {
  out = resolve(args[at + 1] ?? usage("--out needs a directory"));
  args.splice(at, 2);
  if (existsSync(out) && readdirSync(out).length > 0) usage(`--out ${out}: the directory must be new or empty`);
}
if (args.length === 0) usage("name at least one entry");
for (const file of args) {
  if (file.startsWith("-")) usage(`unknown option ${file}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*\.yaml$/.test(basename(file))) usage(`${file}: an entry is entries/<id>.yaml, <id> in kebab-case`);
  if (!existsSync(file)) usage(`${file}: no such file`);
}

if (out === CACHE) rmSync(CACHE, { recursive: true, force: true });
mkdirSync(out, { recursive: true });
for (const file of args) {
  const report = check(file, out);
  checkedFromPassing(file, report);
  freeId(file, report);
  await learningMap(file, report);
  writeFileSync(join(out, `${basename(file, ".yaml")}.yaml`), dump(report, { lineWidth: -1, noRefs: true }));
}

const { text, passed } = render(out);
process.stdout.write(text);
process.exitCode = passed ? 0 : 1;
