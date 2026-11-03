// An entry's limits (schemas/entry.js, `limits`): what an app does not offer of the platform's rules (WCAG 2.1 AA,
// usable at 360 px), as the catalog takes it: the schema accepts it, and the app's page shows it in plain German (or in a map by language).
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { load } from "js-yaml";
import nunjucks from "nunjucks";
import { Entry } from "../schemas/entry.js";
import de from "../src/_data/de.js";

const entry = load(readFileSync(new URL("../entries/mathe-arithmetik.yaml", import.meta.url), "utf8"));
const LIMITS = "Nicht mit Screenreader bedienbar; auf dem Handy nicht sinnvoll, weil eine Tastatur nötig ist.";

/** The fitness panel of the app's page (components.njk, macro fitness). */
function fitness(app, lang = "de") {
  const env = new nunjucks.Environment(new nunjucks.FileSystemLoader(new URL("../src/_includes", import.meta.url).pathname));
  env.addFilter("tx", (text, lang = "de") => (typeof text === "string" ? text : (text[lang] ?? text.de)));
  env.addFilter("fallbackLang", (text, lang = "de") =>
    lang !== "de" && (typeof text === "string" || !(lang in text)) ? ' lang="de"' : "",
  );
  return env.renderString('{% import "components.njk" as c with context %}{{ c.fitness(app) }}', { t: de, lang, app });
}

test("an entry without limits stays valid, and its page says nothing about limits", () => {
  assert.equal(Entry.safeParse(entry).success, true);
  assert.doesNotMatch(fitness(entry), /bietet die App nicht/);
});

test("an entry with limits is valid, and its page shows them", () => {
  const result = Entry.safeParse({ ...entry, limits: LIMITS });
  assert.equal(result.success, true);
  assert.match(fitness(result.data), new RegExp(`Das bietet die App nicht:</strong> ${LIMITS}`));
});

test("limits in a map by language: the page shows the one of its language, else the German text", () => {
  const limits = { de: LIMITS, en: "Not usable with a screen reader." };
  const result = Entry.safeParse({ ...entry, limits });
  assert.equal(result.success, true);
  assert.match(fitness(result.data, "en"), /Not usable with a screen reader\./);
  assert.match(fitness({ ...result.data, limits: { de: LIMITS } }, "en"), new RegExp(`<span lang="de">${LIMITS}</span>`));
});

test("empty limits are not valid: leave the field out instead", () => {
  assert.equal(Entry.safeParse({ ...entry, limits: " " }).success, false);
});
