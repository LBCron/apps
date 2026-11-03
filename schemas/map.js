// The formats of the learning map (docs/learning-map-contract.md): a subject, map/<subject>.yaml, with its strands and
// their competencies nested, and a curriculum, map/<subject>/curricula/<id>.yaml, with its placements. The single
// source for the build's check (lib/map.js) and for the published JSON Schemas (npm run schema). What spans files (ids
// that refer to another file, cycles of "requires") is checked by lib/map.js.
import { z } from "zod";
import { Text, Id } from "./entry.js";

const https = z.url({ protocol: /^https$/ });

const Source = z
  .strictObject({
    title: z.string().min(1).describe("Title of the document, with its edition"),
    url: https.optional().describe("Where to read it, when it is online"),
  })
  .describe("Where the strands and competencies come from");

export const GRADE_BANDS = ["5-6", "7-8", "9-10"];

const Competency = z
  .strictObject({
    id: Id.describe("Stable id, unique in the subject; never renamed once published"),
    iCan: Text.refine((t) => (typeof t === "string" ? t : t.de).startsWith("Ich kann"), {
      message: 'starts with "Ich kann"',
    }).describe('What a learner can do, in plain German: "Ich kann …"'),
    gradeBand: z
      .enum(GRADE_BANDS)
      .describe("Roughly in which two school years it is taught; shown where no curriculum places it"),
    requires: z.array(Id).optional().describe("Competencies of the same subject a learner needs first, any strand"),
  })
  .describe("A competency (Baustein): one thing a learner can learn");

const Strand = z
  .strictObject({
    id: Id.describe("Stable id, unique in the subject"),
    name: Text,
    competencies: z.array(Competency).min(1),
  })
  .describe("A strand (Strang): a part of the subject that runs over several school years and builds on itself");

export const Subject = z
  .strictObject({
    name: Text.describe("Name of the subject, e.g. Mathematik; the file name is its id"),
    source: Source,
    strands: z.array(Strand).min(1),
  })
  .describe("A subject of the learning map: map/<subject>.yaml");

export const LANDS = ["BW", "BY", "BE", "BB", "HB", "HH", "HE", "MV", "NI", "NW", "RP", "SL", "SN", "ST", "SH", "TH"];

const Placement = z
  .strictObject({
    competency: Id.describe("A competency of the subject"),
    grades: z
      .array(z.int().min(1).max(13))
      .min(1)
      .refine((g) => g.every((v, i) => i === 0 || g[i - 1] < v), { message: "ascending, each grade once" })
      .describe("The grades in which the curriculum places it"),
    unit: z.string().min(1).optional().describe("The curriculum's own name of the unit, e.g. 7.4"),
  })
  .describe("A placement (Einordnung)");

export const Curriculum = z
  .strictObject({
    land: z.enum(LANDS).describe("The Land, ISO 3166-2:DE without DE-"),
    schoolType: Text.describe("The school type, e.g. Gymnasium (G9)"),
    version: z.string().min(1).describe("Which document, which edition"),
    source: Source,
    placements: z.array(Placement).describe("May place only some competencies; at most one placement per competency"),
  })
  .describe("A curriculum (Lehrplan) of one Land and school type for a subject: map/<subject>/curricula/<id>.yaml");

export const SUBJECT_SCHEMA_ID = "https://lernapps.net/apps/schemas/subject.v1.schema.json";
export const CURRICULUM_SCHEMA_ID = "https://lernapps.net/apps/schemas/curriculum.v1.schema.json";
