// Writes the published JSON Schemas from their Zod sources: schemas/entry.v1.schema.json (schemas/entry.js), and
// schemas/subject.v1.schema.json and schemas/curriculum.v1.schema.json (schemas/map.js). With --check, fails if one is
// out of date.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { z } from "zod";
import { Entry, SCHEMA_ID } from "../schemas/entry.js";
import { Subject, Curriculum, SUBJECT_SCHEMA_ID, CURRICULUM_SCHEMA_ID } from "../schemas/map.js";

const SCHEMAS = [
  {
    file: "schemas/entry.v1.schema.json",
    id: SCHEMA_ID,
    title: "lernapps.net app entry",
    description: "One app on https://lernapps.net/apps/. File: entries/<id>.yaml in https://github.com/lernapps/apps",
    zod: Entry,
  },
  {
    file: "schemas/subject.v1.schema.json",
    id: SUBJECT_SCHEMA_ID,
    title: "lernapps.net learning map: subject",
    description:
      "A subject of the learning map https://lernapps.net/apps/map/. File: map/<subject>.yaml in https://github.com/lernapps/apps",
    zod: Subject,
  },
  {
    file: "schemas/curriculum.v1.schema.json",
    id: CURRICULUM_SCHEMA_ID,
    title: "lernapps.net learning map: curriculum",
    description:
      "A curriculum of the learning map https://lernapps.net/apps/map/. File: map/<subject>/curricula/<land>-<school type>.yaml in https://github.com/lernapps/apps",
    zod: Curriculum,
  },
];

const check = process.argv.includes("--check");
let stale = false;
for (const { file, id, title, description, zod } of SCHEMAS) {
  const text = JSON.stringify({ $id: id, title, description, ...z.toJSONSchema(zod, { target: "draft-2020-12" }) }, null, 2) + "\n";
  if (check) {
    if (!existsSync(file) || readFileSync(file, "utf8") !== text) {
      console.error(`${file} is out of date: run npm run schema`);
      stale = true;
    } else {
      console.log(`${file} up to date`);
    }
  } else {
    writeFileSync(file, text);
    console.log(`wrote ${file}`);
  }
}
if (stale) process.exit(1);
