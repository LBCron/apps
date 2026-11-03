// The format of an app entry (entries/<id>.yaml): the single source for the build's check
// (src/_data/catalog.js) and for the published JSON Schema (schemas/entry.v1.schema.json, served at
// https://lernapps.net/apps/schemas/entry.v1.schema.json; regenerate with `npm run schema`).
// The conditions for listing an app (src/_data/de.js, list.criteria) are enforced here where they can be.
import { z } from "zod";

const https = z.url({ protocol: /^https$/ });

// A text for readers: a plain string (German, the language of the catalog) or a map of texts by language,
// { de: …, en: … }, as in the app templates (runtime/shared/languages.ts). German is required, other languages are
// optional: a page in a language without a translation shows the German text.
export const Text = z.union([
  z.string().min(1),
  z.strictObject({
    de: z.string().min(1).describe("German"),
    en: z.string().min(1).optional().describe("English"),
  }),
]);

// The same, for a text that is trimmed and may not be blank (the limits).
const TrimmedText = z.union([
  z.string().trim().min(1),
  z.strictObject({
    de: z.string().trim().min(1).describe("German"),
    en: z.string().trim().min(1).optional().describe("English"),
  }),
]);

// An id of the learning map: lower-case letters, digits and hyphens; a strand is addressed as "<subject>/<strand>".
export const Id = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, "lower-case letters, digits and hyphens");
export const StrandRef = z
  .string()
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*\/[a-z0-9]+(-[a-z0-9]+)*$/, "\"<subject>/<strand>\", e.g. mathematik/stochastik");

export const Entry = z
  .object({
    title: Text.describe("Name of the app, or a map by language { de, en }"),
    subject: Text.describe("Subject, in German (or a map by language), e.g. Mathematik"),
    grades: z.array(z.int().min(1).max(13)).min(1).describe("Grades the app fits, e.g. [5, 6]"),
    summary: Text.describe("2–3 sentences in plain German (or a map by language): what do learners do?"),
    url: https.describe("Link to the app at the creator's own address, where the listing check opens it"),
    topics: z
      .array(
        z.strictObject({
          title: Text.describe("Topic, in German (or a map by language)"),
          path: z.string().min(1).describe("Path of the topic, relative to url"),
        }),
      )
      .optional()
      .describe("Single topics with a deep link into the app"),
    keywords: z.array(Text).optional().describe("More words people search for"),
    strand: StrandRef.optional().describe(
      "The strand of the learning map the app stays in, \"<subject>/<strand>\" (https://lernapps.net/apps/map/). " +
        "Leave it out when the app has none. An explainer of format 2 says its strand in src/app.yaml; give it here only to match",
    ),
    competencies: z
      .array(Id)
      .min(1)
      .optional()
      .describe(
        "Only for apps that are not explainers: the competencies of the strand's subject the app practises, by id. " +
          "An explainer of format 2 names them on its pages",
      ),
    creator: z
      .strictObject({
        name: z.string().min(1).describe("Name thanks are addressed to"),
        url: https.optional(),
      })
      .describe("Who built the app"),
    source: z
      .string()
      .regex(/^https:\/\/github\.com\/[A-Za-z0-9-]+\/[A-Za-z0-9._-]+$/, "a repository on GitHub: https://github.com/<owner>/<repo>")
      .describe("Source code: the app's repository on GitHub, https://github.com/<owner>/<repo>. lernapps.net builds its copy of the app from it"),
    commit: z
      .string()
      .regex(/^[0-9a-f]{40}$/, "the full id of a commit: 40 characters 0-9 and a-f")
      .describe(
        "The full id of the commit of source that lernapps.net builds and serves at https://lernapps.net/apps/start/<id>/. " +
          "A new commit is an update of the app",
      ),
    limits: TrimmedText.optional()
      .describe(
        "Only when the app deviates from a rule of the platform because its idea needs it: WCAG 2.1 AA or usable at 360 px wide. " +
          "Say in plain German what the app does not offer, and why, e.g. \"Nicht mit Screenreader bedienbar; auf dem Handy nicht sinnvoll, weil eine Tastatur nötig ist.\" " +
          "Shown to teachers and parents on the app's page in the catalog. With it, lernapps check reports the findings of these rules as warnings instead of errors. " +
          "Leave it out when the app meets the rules.",
      ),
    fitness: z
      .strictObject({
        account: z.literal(false).describe("Nobody needs an account (required)"),
        install: z.literal(false).describe("Runs in the browser, no installation (required)"),
        storage: z
          .enum(["none", "device"])
          .describe("What the app stores: none, or only on the device (apps storing on a server are not listed)"),
        thirdParty: z
          .enum(["none", "on-click"])
          .describe("Requests to third-party servers: none, or only after a click (others are not listed)"),
        thirdPartyNote: Text.optional().describe("For on-click: which servers, and when"),
        checked: z.boolean().describe("Set by lernapps.net once the fitness was checked automatically"),
      })
      .describe("Signal of fitness for use (platform design D5 ch-fitness-signal)"),
  })
  .strict()
  .refine((e) => e.fitness.thirdParty === "none" || e.fitness.thirdPartyNote, {
    message: "fitness.thirdPartyNote: say which servers, and when",
    path: ["fitness", "thirdPartyNote"],
  })
  .refine((e) => !e.competencies || e.strand, {
    message: "competencies need a strand: say which strand of the learning map the app stays in",
    path: ["strand"],
  });

export const SCHEMA_ID = "https://lernapps.net/apps/schemas/entry.v1.schema.json";
