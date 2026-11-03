// The invitation to build an app yourself, in a browser, on the site built from this repo:
//   - /apps/ without a search shows no hint line; with a search and matches one line under the count, whose link
//     carries the search to /apps/build/; without a match the box that says why so much is missing, with the search
//     in its headline, and not the box under the results;
//   - every grade (1 to 13) can be chosen, also those without an app;
//   - /apps/build/ puts the search into a line under the lead and into the task for the assistant, only ever as text.
// Needs a Chromium for Playwright (the package comes with @lernapps/tooling): CHROMIUM_PATH, else Google Chrome, else
// the browser Playwright installed itself. The browser language matches the page (the site frame follows it).
import { createReadStream, existsSync, mkdtempSync, rmSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import { dirname, extname, join, resolve } from "node:path";
import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import { after, before, describe, test } from "node:test";
import assert from "node:assert/strict";
import { chromium } from "playwright";

const repo = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const temp = mkdtempSync(join(tmpdir(), "lernapps-find-"));
const out = join(temp, "site");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml" };

let server;
let browser;
let base;

function run(command, args, env) {
  return new Promise((done, fail) => {
    const child = spawn(command, args, { cwd: repo, env });
    let output = "";
    child.stdout.on("data", (chunk) => (output += chunk));
    child.stderr.on("data", (chunk) => (output += chunk));
    child.on("error", fail);
    child.on("close", (code) => (code === 0 ? done() : fail(new Error(`${command} ${args.join(" ")}:\n${output}`))));
  });
}

async function launch() {
  const tries = [
    process.env.CHROMIUM_PATH && { executablePath: process.env.CHROMIUM_PATH },
    existsSync("/opt/pw-browsers/chromium") && { executablePath: "/opt/pw-browsers/chromium" },
    { channel: "chrome" },
    {},
  ].filter(Boolean);
  let error;
  for (const options of tries) {
    try {
      return await chromium.launch(options);
    } catch (e) {
      error = e;
    }
  }
  throw error;
}

before(async () => {
  // The site as `npm run build` writes it for production, into a folder of its own, served below /apps/.
  const { SITE_PATH_PREFIX: _prefix, SITE_PREVIEW: _preview, ...env } = process.env;
  await run(join(repo, "node_modules/.bin/eleventy"), ["--quiet", "--output", out], env);
  await run(join(repo, "node_modules/.bin/unocss"), [`${out}/**/*.html`, "--out-file", join(out, "uno.css")], env);
  server = createServer((request, response) => {
    const path = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
    let file = path.startsWith("/apps/") ? join(out, path.slice("/apps/".length)) : "";
    if (file && existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!file || !existsSync(file)) {
      response.writeHead(404).end();
      return;
    }
    response.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" });
    createReadStream(file).pipe(response);
  });
  await new Promise((done) => server.listen(0, "127.0.0.1", done));
  base = `http://127.0.0.1:${server.address().port}/apps/`;
  browser = await launch();
});

after(async () => {
  await browser?.close();
  server?.close();
  rmSync(temp, { recursive: true, force: true });
});

async function open(path, width = 1280) {
  const page = await browser.newPage({ viewport: { width, height: 800 }, locale: path.startsWith("en/") ? "en-US" : "de-DE" });
  await page.goto(base + path);
  return page;
}

describe("the find page invites to build", () => {
  test("without a search there is no hint line, the box under the results is there", async () => {
    const page = await open("");
    assert.equal(await page.isVisible("[data-hint]"), false);
    assert.equal(await page.isVisible("[data-empty]"), false);
    assert.equal(await page.isVisible("[data-build]"), true);
    await page.close();
  });

  test("every grade can be chosen", async () => {
    const page = await open("");
    const grades = await page.$$eval("#klasse option", (options) => options.map((o) => o.value).filter(Boolean));
    assert.deepEqual(grades, Array.from({ length: 13 }, (_, i) => String(i + 1)));
    await page.close();
  });

  test("with a search and matches: one line on the first screen, its link carries the search", async () => {
    const page = await open("", 360);
    await page.selectOption("#klasse", "6");
    assert.equal(await page.isVisible("[data-hint]"), true);
    assert.equal(await page.isVisible("[data-empty]"), false);
    const box = await page.locator("[data-hint]").boundingBox();
    assert.ok(box.y + box.height <= 800, `the line is on the first screen (bottom at ${box.y + box.height}px)`);
    const href = await page.getAttribute("[data-hint] a", "href");
    assert.equal(new URL(href).pathname, "/apps/build/");
    assert.equal(new URL(href).searchParams.get("klasse"), "6");
    await page.close();
  });

  test("without a match: the honest box with the search in its headline, links to build", async () => {
    const page = await open("?thema=Bruchrechnung&klasse=3");
    assert.equal(await page.isVisible("[data-empty]"), true);
    assert.equal(await page.isVisible("[data-hint]"), false);
    assert.equal(await page.isVisible("[data-build]"), false);
    assert.equal(
      await page.textContent("[data-empty-headline]"),
      "Zu „Bruchrechnung“ für Klasse 3 gibt es noch keine App. Noch nicht.",
    );
    const href = await page.getAttribute("[data-empty] a[data-build-link]", "href");
    assert.equal(new URL(href).searchParams.get("thema"), "Bruchrechnung");
    assert.equal(await page.locator('[data-empty] a[href="/practice/"]').count(), 1, "points to practising with one's own material");
    assert.equal(await page.locator('[data-empty] a[href$="/enter/"]').count(), 0, "no listing link: building is the way");
    await page.close();
  });

  test("the English page words the search in English", async () => {
    const page = await open("en/?thema=fractions&klasse=3");
    assert.equal(await page.textContent("[data-empty-headline]"), "There is no app on “fractions” for grade 3 yet. Not yet.");
    await page.close();
  });
});

describe("the build page takes the search", () => {
  test("into a line under the lead and into the task", async () => {
    const page = await open("build/?thema=Bruchrechnung&fach=Mathematik&klasse=3");
    assert.equal(await page.textContent("[data-searched]"), "Du suchst etwas zu „Bruchrechnung“ in Mathematik für Klasse 3? Dann bau es, für dich und alle, die danach suchen.");
    const task = await page.inputValue("#bauen-auftrag");
    assert.match(task, /^Bau mit mir eine Lern-App für lernapps\.net zu „Bruchrechnung“ in Mathematik für Klasse 3\. Lies zuerst /);
    await page.close();
  });

  test("without a search the page stays as it is", async () => {
    const page = await open("build/");
    assert.equal(await page.isVisible("[data-searched]"), false);
    assert.match(await page.inputValue("#bauen-auftrag"), /^Bau mit mir eine Lern-App für lernapps\.net\. Lies zuerst /);
    await page.close();
  });

  test("values from the address stay text, a grade must be one, a long topic is cut", async () => {
    const topic = `<img src=x onerror="window.injected=1">$&${"x".repeat(100)}`;
    const page = await open(`build/?thema=${encodeURIComponent(topic)}&klasse=99`);
    assert.equal(await page.evaluate(() => window.injected), undefined);
    assert.equal(await page.locator("[data-searched] img").count(), 0);
    const line = await page.textContent("[data-searched]");
    assert.ok(line.includes(topic.slice(0, 80)), line);
    assert.ok(!line.includes(topic.slice(0, 81)), "the topic is cut to 80 characters");
    assert.ok(!line.includes("99"), "no grade 99");
    await page.close();
  });
});
