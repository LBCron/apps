// The creator's entry points as a creator and their assistant meet them: /apps/build/ (build an app), /apps/enter/
// (list it) and /apps/llms.txt, built from this repo.
//   - every link on them resolves: links into this site against the build, every other link on the web (test/links.mjs:
//     our own hosts strict, an outside host's passing 5xx or 429 retried, then only a note);
//   - the command /apps/build/ gives to start an app (`npx --yes @lernapps/tooling init <name>`), taken from the built
//     page, run in an empty folder writes the plan template; with the plan confirmed (its archetype set, in the phase
//     code), `lernapps create` gives, for every archetype of the tooling, an app that passes `lernapps check`, the check
//     of its git hooks and CI. The archetypes' installs and checks run at the same time, each in its own folder and on
//     its own preview port.
// Needs the network (the npm registry, github.com, lernapps.net). Behind a proxy, Node's fetch
// uses it with NODE_USE_ENV_PROXY=1.
import { spawn } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createServer } from "node:net";
import { availableParallelism, tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { after, before, describe, test } from "node:test";
import assert from "node:assert/strict";
import { fetchLink } from "./links.mjs";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = "/apps/";
const ORIGIN = "https://lernapps.net";

/** Runs a command and collects its output. */
function run(command, args, cwd, env = process.env) {
  return new Promise((done, fail) => {
    const child = spawn(command, args, { cwd, env });
    let output = "";
    child.stdout.on("data", (chunk) => (output += chunk));
    child.stderr.on("data", (chunk) => (output += chunk));
    child.on("error", fail);
    child.on("close", (code) => done({ code, output }));
  });
}

async function ok(command, args, cwd, env) {
  const result = await run(command, args, cwd, env);
  assert.equal(result.code, 0, `${command} ${args.join(" ")} in ${cwd}:\n${result.output}`);
  return result.output;
}

const decode = (html) =>
  html
    .replace(/<[^>]+>/g, "")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&amp;", "&");

const temp = mkdtempSync(join(tmpdir(), "lernapps-entry-point-"));
after(() => rmSync(temp, { recursive: true, force: true }));

const out = join(temp, "site");
let page = "";
let enter = "";
let llms = "";

before(async () => {
  // The site as `npm run build` writes it for production (no preview prefix), into a folder of its own.
  const { SITE_PATH_PREFIX: _prefix, SITE_PREVIEW: _preview, ...env } = process.env;
  await ok(join(repo, "node_modules/.bin/eleventy"), ["--quiet", "--output", out], repo, env);
  await ok(join(repo, "node_modules/.bin/unocss"), [`${out}/**/*.html`, "--out-file", join(out, "uno.css")], repo);
  page = readFileSync(join(out, "build", "index.html"), "utf8");
  enter = readFileSync(join(out, "enter", "index.html"), "utf8");
  llms = readFileSync(join(out, "llms.txt"), "utf8");
});

/** Whether a link resolves: into this site against the build, anything else on the web (fetchLink). */
async function resolves(url) {
  const own = url.startsWith(SITE) ? url : url.startsWith(`${ORIGIN}${SITE}`) ? url.slice(ORIGIN.length) : undefined;
  if (own !== undefined) {
    const path = decodeURIComponent(new URL(own, ORIGIN).pathname).slice(SITE.length);
    try {
      readFileSync(join(out, path.endsWith("/") || path === "" ? join(path, "index.html") : path));
      return { result: "ok" };
    } catch {
      return { result: "broken", why: "not in the build" };
    }
  }
  return fetchLink(new URL(url, ORIGIN).href);
}

/** The broken links; a note (an outside host that kept answering 5xx or 429) goes to the test's output. */
async function brokenLinks(t, urls) {
  const broken = [];
  for (const url of new Set(urls)) {
    const { result, why } = await resolves(url);
    if (result === "broken") broken.push(`${url} ${why}`);
    if (result === "note") t.diagnostic(`note: ${url} ${why}`);
  }
  return broken;
}

const LINKS = { timeout: 180_000 };

/** The links of a page that lead somewhere else: no anchors on the page itself, no e-mail. */
const hrefs = (html) =>
  [...html.matchAll(/\bhref="([^"]*)"/g)]
    .map((m) => m[1].replaceAll("&amp;", "&"))
    .filter((href) => href !== "" && !href.startsWith("#") && !href.startsWith("mailto:"));

describe("the creator's entry points", () => {
  test("every link on /apps/build/ resolves", LINKS, async (t) => {
    assert.ok(hrefs(page).length > 0);
    assert.deepEqual(await brokenLinks(t, hrefs(page)), []);
  });

  test("every link on /apps/enter/ resolves", LINKS, async (t) => {
    assert.ok(hrefs(enter).length > 0);
    assert.deepEqual(await brokenLinks(t, hrefs(enter)), []);
  });

  test("every link in /apps/llms.txt resolves", LINKS, async (t) => {
    const links = [...llms.matchAll(/\]\((https:\/\/[^)\s]+)\)/g)].map((m) => m[1]);
    assert.ok(links.length > 0);
    assert.deepEqual(await brokenLinks(t, links), []);
  });

  test("building points the assistant to the tooling's llms.txt (the quick path) and leads on to listing; listing leads back", () => {
    for (const text of [page, llms]) assert.match(text, /lernapps\.net\/tooling\/llms\.txt/);
    assert.match(page, /skills\/tooling\/lernapps-cli\/references\/platform-rules\.md/, "free builders get the platform rules");
    assert.match(page, /href="\/apps\/enter\/"/, "/apps/build/ leads on to listing");
    assert.match(enter, /href="\/apps\/build\/"/, "/apps/enter/ leads to building for those without an app");
    const build = llms.indexOf("## Eine App bauen");
    const list = llms.indexOf("## Eine App eintragen");
    assert.ok(build >= 0 && build < list, "llms.txt has building, then listing");
    assert.ok(llms.slice(build, list).includes("https://lernapps.net/apps/build/"));
    assert.ok(llms.slice(list).includes("https://lernapps.net/apps/enter/"));
  });

  test("listing promotes the skill lernapps-listing; e-mail only as the fallback at the end", () => {
    const skill = /skills\/process\/lernapps-listing\/SKILL\.md/;
    const first = enter.search(skill);
    assert.ok(first >= 0, "/apps/enter/ gives the skill lernapps-listing (in the prompt)");
    const prompt = decode(enter.match(/<textarea\b[^>]*id="auftrag"[^>]*>([\s\S]*?)<\/textarea>/)?.[1] ?? "");
    assert.match(prompt, /lernapps-listing/, "the prompt to copy names the skill");
    const mails = [...enter.matchAll(/mailto:/g)];
    assert.equal(mails.length, 1, "one mailto on /apps/enter/");
    assert.ok(first < mails[0].index, "the skill comes before the e-mail");
    const fallback = enter.match(/<[^>]*\bid="notfalls"[^>]*>[\s\S]*?<\/section>/)?.[0] ?? "";
    assert.match(fallback, /mailto:/, "the mailto is in the fallback");
    assert.ok(enter.indexOf('id="notfalls"') > enter.indexOf('id="wege"'), "the fallback comes after the ways");
    const list = llms.slice(llms.indexOf("## Eine App eintragen"));
    assert.match(list, /\]\(https:\/\/raw\.githubusercontent\.com\/lernapps\/tooling\/main\/skills\/process\/lernapps-listing\/SKILL\.md\)/);
  });
});

/** Ports nobody listens on now, all different: each server stays open until every port is chosen. */
async function freePorts(count) {
  const servers = await Promise.all(
    Array.from({ length: count }, () => new Promise((done, fail) => {
      const server = createServer();
      server.on("error", fail);
      server.listen(0, "127.0.0.1", () => done(server));
    })),
  );
  const ports = servers.map((server) => server.address().port);
  await Promise.all(servers.map((server) => new Promise((done) => server.close(done))));
  return ports;
}

/** The command to start an app, as the built page /apps/build/ shows it: the one `<code>` that runs `npx … init`. */
function startCommand() {
  // The page shows the command only inside the prompt to copy (the quick path is in llms.txt).
  const prompt = decode(page.match(/<textarea\b[^>]*id="bauen-auftrag"[^>]*>([\s\S]*?)<\/textarea>/)?.[1] ?? "");
  const commands = new Set([...prompt.matchAll(/npx [^\s]+ [^\s]+ init <name>/g)].map((m) => m[0]));
  assert.equal(commands.size, 1, `one command to start an app on the page, found: ${[...commands].join(" | ")}`);
  return [...commands][0];
}

describe("the command /apps/build/ gives to start an app", () => {
  test("is the same in the prompt the creator copies", () => {
    const command = startCommand();
    const prompt = decode(page.match(/<textarea\b[^>]*id="bauen-auftrag"[^>]*>([\s\S]*?)<\/textarea>/)?.[1] ?? "");
    assert.ok(prompt.includes(command), `the prompt to copy contains ${command}:\n${prompt}`);
  });

  test("run in an empty folder writes the plan; then it gives an app that passes lernapps check, for every archetype", { timeout: 20 * 60_000 }, async () => {
    const command = startCommand();
    const words = command.split(/\s+/);
    assert.equal(words[0], "npx");
    const spec = words.find((word) => word.startsWith("@lernapps/"));
    assert.ok(spec, `the command installs the tooling from the npm registry: ${command}`);

    // The command first in a folder, one archetype after the other: npx installs the tooling into one shared folder of
    // its cache (~/.npm/_npx/<hash>), and two installs into it at the same time leave a half-installed tree to one of
    // them (CI saw playwright-core missing). The archetypes are those of the runtime package it installs.
    const apps = [];
    let archetypes;
    for (let index = 0; index === 0 || index < archetypes.length; index++) {
      const app = join(temp, `app-${index}`);
      mkdirSync(app, { recursive: true });
      const args = words.slice(1).map((word) => (word === "<name>" ? "first-version" : word));
      assert.ok(!args.some((word) => word.includes("<")), `no placeholder left but the name: ${command}`);
      await ok("npx", args, app);
      const plan = join(app, ".vibe/plans/01-first-version.md");
      const template = readFileSync(plan, "utf8");
      assert.match(template, /^archetype: null$/m, "init wrote the plan template, not yet worked through");
      archetypes ??= JSON.parse(readFileSync(join(app, "node_modules/@lernapps/app-templates/package.json"), "utf8")).lernapps.archetypes;
      assert.ok(archetypes.length > 0);
      const archetype = archetypes[index];
      // the plan as the creator confirmed it: its archetype set, in the phase code; then the skills of the archetype
      writeFileSync(plan, template.replace(/^archetype: null$/m, `archetype: ${archetype}`).replace(/^phase: explore$/m, "phase: code"));
      await ok("npx", ["--no", "--", "lernapps", "skills", "--archetype", archetype], app);
      apps.push({ archetype, app });
    }
    const ports = await freePorts(apps.length);
    const workers = String(Math.max(1, Math.floor((availableParallelism() * 0.75) / apps.length)));
    await Promise.all(apps.map(async ({ archetype, app }, index) => {
      const env = { ...process.env, LERNAPPS_PREVIEW_PORT: String(ports[index]), LERNAPPS_PLAYWRIGHT_WORKERS: workers };
      // What the plan says next: create the app in the folder, git init, npm install (installs the hooks), then the check of hooks and CI.
      await ok("npx", ["--no", "--", "lernapps", "create", "--archetype", archetype], app, env);
      await ok("git", ["init", "--quiet", "--initial-branch=main"], app, env);
      await ok("npm", ["install", "--no-audit", "--no-fund"], app, env);
      const checked = await ok("npx", ["--no", "--", "lernapps", "check"], app, env);
      assert.match(checked, /lernapps check: ok/, `${archetype}: ${checked}`);
    }));
  });
});
