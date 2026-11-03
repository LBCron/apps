// Builds src/ into _site/, served as https://lernapps.net/apps/ (GitHub Pages project site).
// Templates are Nunjucks; reusable parts are macros in src/_includes/components.njk.
// App entries come from entries/*.yaml via src/_data/catalog.js, which also checks them.
// Header, footer and the deploy check are shared by every lernapps.net site (@lernapps/site, from
// lernapps.github.io; Renovate keeps it current).
import siteFrame from "@lernapps/site/eleventy";
import { pathIn } from "@lernapps/site/frame";
import languages from "./src/_data/languages.js";

const textsOf = (lang) => (languages.find((l) => l.code === lang) ?? languages[0]).t;

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(siteFrame, { site: "/apps/", source: "https://github.com/lernapps/apps" });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "schemas/entry.v1.schema.json": "schemas/entry.v1.schema.json" });
  eleventyConfig.addPassthroughCopy({ "schemas/subject.v1.schema.json": "schemas/subject.v1.schema.json" });
  eleventyConfig.addPassthroughCopy({ "schemas/curriculum.v1.schema.json": "schemas/curriculum.v1.schema.json" });
  // Without .nojekyll at the root of gh-pages, Pages runs Jekyll over the whole branch, the copies in start/ too: a
  // "{{" in one of their Markdown files (the tutor page of an explainer) fails the build, and nothing is deployed.
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });
  eleventyConfig.addWatchTarget("schemas/");
  eleventyConfig.addWatchTarget("entries/");
  eleventyConfig.addWatchTarget("map/");
  eleventyConfig.addWatchTarget("lib/");
  eleventyConfig.setServerOptions({ watch: ["_site/uno.css"] });

  // "Klasse 8", "Klasse 7 und 8", "Klasse 5 bis 7"; "Grade 8", "Grades 7 and 8", "Grades 5 to 7"
  eleventyConfig.addFilter("gradeLabel", (grades, lang = "de") => {
    const { grades: words } = textsOf(lang);
    const g = [...grades].sort((a, b) => a - b);
    if (g.length === 1) return words.one(g[0]);
    if (g.length === 2 && g[1] === g[0] + 1) return words.two(g[0], g[1]);
    return words.range(g[0], g[g.length - 1]);
  });

  // A text of an entry in a language: a plain string is German, a map has the languages it has. A language
  // without a translation shows the German text.
  const tx = (text, lang = "de") => (typeof text === "string" ? text : (text[lang] ?? text.de));
  eleventyConfig.addFilter("tx", tx);
  eleventyConfig.addFilter("txAll", (list, lang = "de") => list.map((text) => tx(text, lang)));
  // ' lang="de"' for a text that is shown in German on a page in another language, else nothing.
  eleventyConfig.addFilter("fallbackLang", (text, lang = "de") =>
    lang !== "de" && (typeof text === "string" || !(lang in text)) ? ' lang="de"' : "",
  );
  // The address of a page in a language: "/enter/" → "/en/enter/" (then the filter "url" adds the prefix).
  eleventyConfig.addFilter("inLang", (path, lang = "de") => (lang === "de" ? path : `/${lang}${path}`));
  // The address of a page of another site in a language: "/tooling/github/" → "/tooling/en/github/" (pathIn of the
  // site frame: a site without a tree in that language keeps the address).
  eleventyConfig.addFilter("otherSiteIn", (path, lang = "de") => pathIn(path, lang));

  // The learning map (src/map*.njk): an item of a list by its id (a subject, strand, competency or curriculum).
  eleventyConfig.addFilter("byId", (list, id) => list.find((item) => item.id === id));
  // The short name of a competency in the grid: its "Ich kann …" without "Ich kann" and the full stop,
  // "Ich kann den Prozentwert berechnen." → "Den Prozentwert berechnen".
  eleventyConfig.addFilter("canLabel", (text, lang = "de") => {
    const short = tx(text, lang).replace(/^(Ich kann|I can)\s+/, "").replace(/\.$/, "");
    return short.charAt(0).toUpperCase() + short.slice(1);
  });
  // A grade band as people write it: "7-8" → "7/8".
  eleventyConfig.addFilter("band", (band) => String(band).replace("-", "/"));

  // A mailto link with subject and body (thanks and feedback for the MVP).
  eleventyConfig.addFilter("mailto", (address, subject, body) =>
    `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  );

  return {
    dir: { input: "src", output: "_site" },
    // /apps/ in production; /apps/pr-preview/pr-<number>/ for a pull request preview (pr-preview.yml).
    pathPrefix: process.env.SITE_PATH_PREFIX ?? "/apps/",
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
}
