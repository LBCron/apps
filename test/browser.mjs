// Helpers of the browser tests: the built site served from a folder under /apps/, and Chromium started with
// Playwright (from @lernapps/tooling). Where Playwright's own Chromium is missing, another one in its browser folder
// (a sandbox with a preinstalled browser), else Playwright's own, downloaded once (CI), as `lernapps check` does.
import { spawnSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { createRequire } from "node:module";
import { homedir } from "node:os";
import { dirname, extname, join, normalize } from "node:path";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const TYPES = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml", ".txt": "text/plain; charset=utf-8" };

/** Serves dir at http://127.0.0.1:<port>/apps/; resolves to { url, close }. */
export function serve(dir, prefix = "/apps/") {
  const server = createServer((request, response) => {
    const path = decodeURIComponent(new URL(request.url, "http://x").pathname);
    if (!path.startsWith(prefix)) return response.writeHead(404).end();
    let file = normalize(join(dir, path.slice(prefix.length)));
    if (!file.startsWith(normalize(dir))) return response.writeHead(403).end();
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, "index.html");
    if (!existsSync(file)) return response.writeHead(404).end();
    response.writeHead(200, { "content-type": TYPES[extname(file)] ?? "application/octet-stream" }).end(readFileSync(file));
  });
  return new Promise((done) =>
    server.listen(0, "127.0.0.1", () =>
      done({ url: `http://127.0.0.1:${server.address().port}${prefix}`, close: () => new Promise((d) => server.close(d)) }),
    ),
  );
}

function installed() {
  const folder = process.env.PLAYWRIGHT_BROWSERS_PATH || join(process.env.XDG_CACHE_HOME ?? join(homedir(), ".cache"), "ms-playwright");
  if (!existsSync(folder)) return [];
  return readdirSync(folder)
    .filter((name) => /^chromium(_headless_shell)?-\d+$/.test(name))
    .sort()
    .reverse()
    .flatMap((name) =>
      readdirSync(join(folder, name)).flatMap((sub) =>
        ["chrome-headless-shell", "headless_shell", "chrome"].map((file) => join(folder, name, sub, file)),
      ),
    )
    .filter((file) => existsSync(file));
}

/** Chromium, headless. */
export async function launch() {
  const missing = (error) => /Executable doesn't exist|playwright install/i.test(String(error));
  try {
    return await chromium.launch();
  } catch (error) {
    if (!missing(error)) throw error;
  }
  for (const executablePath of installed()) {
    try {
      return await chromium.launch({ executablePath });
    } catch {
      // the next one
    }
  }
  const cli = join(dirname(require.resolve("playwright/package.json")), "cli.js");
  const result = spawnSync(process.execPath, [cli, "install", "chromium"], { stdio: "inherit" });
  if (result.status !== 0) throw new Error("no Chromium: `npx playwright install chromium` failed");
  return chromium.launch();
}
