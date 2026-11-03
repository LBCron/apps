// Reads and checks the app entries in entries/*.yaml against schemas/entry.js. A broken entry fails the
// build, so nothing unchecked gets published (platform design D5 ch-listing: "automatic check and
// publication"). The format is explained in src/llms.njk, served to people and agents as /apps/llms.txt.
//
// lernapps.net serves a copy of every listed app at https://lernapps.net/apps/start/<id>/ (publish.yml). The catalog
// links an app's copy (button, link, topics, QR code) only when start/copies.txt lists it at its entry's commit, so
// it never links a copy that is not live; otherwise it links the entry's url. LERNAPPS_COPIES names another list (a
// URL or a file, for the tests); without network the catalog links the entries' urls.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { load } from "js-yaml";
import QRCode from "qrcode";
import { Entry } from "../../schemas/entry.js";
import { reserved } from "../../schemas/reserved.js";
import languages from "./languages.js";
import site from "./site.js";

const DIR = "entries";
const START = `${site.origin}/apps/start`;
const COPIES = process.env.LERNAPPS_COPIES ?? `${START}/copies.txt`;

/** id → commit of the copies lernapps.net serves; empty when the list cannot be read. */
async function liveCopies() {
  let text = "";
  try {
    if (/^https?:/.test(COPIES)) {
      const response = await fetch(COPIES, { signal: AbortSignal.timeout(10_000) });
      if (response.ok) text = await response.text();
    } else {
      text = readFileSync(COPIES, "utf8");
    }
  } catch {
    // no list: the entries' urls
  }
  return new Map(text.split("\n").map((line) => line.trim().split(/\s+/)).filter((pair) => pair.length === 2));
}
function check(id, raw) {
  const errors = [];
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) errors.push("file name must be kebab-case: <id>.yaml");
  const taken = reserved(id);
  if (taken) errors.push(`${taken}: choose another id`);
  const result = Entry.safeParse(raw);
  if (!result.success) {
    for (const issue of result.error.issues) errors.push(`${issue.path.join(".") || "(entry)"}: ${issue.message}`);
  }
  if (errors.length) throw new Error(`entries/${id}.yaml:\n  - ${errors.join("\n  - ")}`);
  return result.data;
}

export default async function () {
  const apps = [];
  const live = await liveCopies();
  for (const file of readdirSync(DIR).filter((f) => f.endsWith(".yaml")).sort()) {
    const id = file.replace(/\.yaml$/, "");
    const entry = check(id, load(readFileSync(join(DIR, file), "utf8")));
    const copy = live.get(id) === entry.commit ? `${START}/${id}/` : undefined;
    const url = copy ?? entry.url;
    const base = url.endsWith("/") ? url : url + "/";
    apps.push({
      ...entry,
      url,
      home: entry.url,
      copy: copy !== undefined,
      id,
      keywords: entry.keywords ?? [],
      topics: (entry.topics ?? []).map((t) => ({ ...t, url: new URL(t.path, base).href })),
      qr: await QRCode.toString(url, { type: "svg", margin: 0, errorCorrectionLevel: "M", color: { dark: "#0f172a", light: "#ffffff" } }),
    });
  }

  // Order and filter keys are German; the pages show the text of their language (filter "tx" in eleventy.config.js).
  const de = (text) => (typeof text === "string" ? text : text.de);
  apps.sort((a, b) => de(a.subject).localeCompare(de(b.subject), "de") || de(a.title).localeCompare(de(b.title), "de"));
  const subjects = [...new Set(apps.map((a) => a.subject))]
    .filter((s, i, all) => all.findIndex((o) => de(o) === de(s)) === i)
    .sort((a, b) => de(a).localeCompare(de(b), "de"));
  // Every grade of the schema (1 to 13), also those without an app: a search for them shows that something is
  // missing, and how to build it (find.empty).
  const grades = Array.from({ length: 13 }, (_, i) => i + 1);
  // One page per app and language, for the pagination of src/app.njk.
  const pages = apps.flatMap((app) => languages.map((l) => ({ app, l })));
  return { apps, subjects, grades, pages };
}
