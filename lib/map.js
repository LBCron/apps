// The learning map (docs/learning-map-contract.md): reads map/<subject>.yaml and map/<subject>/curricula/*.yaml,
// checks each file against schemas/map.js and everything that spans files, and computes what the pages show: which
// apps practise a competency, the rows of a subject for a curriculum, the state of a curriculum. A broken file throws,
// so the build fails and nothing unchecked is published (concept-checked-not-declared).
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { load } from "js-yaml";
import { Subject, Curriculum, GRADE_BANDS } from "../schemas/map.js";

const ID = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const de = (text) => (typeof text === "string" ? text : text.de);

function parse(schema, raw, file, errors) {
  const result = schema.safeParse(raw);
  if (!result.success) {
    for (const issue of result.error.issues) errors.push(`${file}: ${issue.path.join(".") || "(file)"}: ${issue.message}`);
    return undefined;
  }
  return result.data;
}

/** The cycles of "requires" in a subject, each as a list of ids. */
function cycles(competencies) {
  const found = [];
  const state = new Map(); // id → "open" | "done"
  const visit = (id, path) => {
    if (state.get(id) === "done") return;
    if (state.get(id) === "open") {
      found.push([...path.slice(path.indexOf(id)), id]);
      return;
    }
    state.set(id, "open");
    for (const next of competencies.get(id)?.requires ?? []) if (competencies.has(next)) visit(next, [...path, id]);
    state.set(id, "done");
  };
  for (const id of competencies.keys()) visit(id, []);
  return found;
}

/** One subject from its YAML, with its curricula; pushes every problem to errors. */
function loadSubject(dir, file, errors) {
  const id = file.replace(/\.yaml$/, "");
  const path = join(dir, file);
  if (!ID.test(id)) errors.push(`${path}: the file name is the subject's id: lower-case letters, digits and hyphens`);
  const data = parse(Subject, load(readFileSync(path, "utf8")), path, errors);
  if (!data) return undefined;

  const competencies = new Map();
  const strandIds = new Set();
  for (const strand of data.strands) {
    if (strandIds.has(strand.id)) errors.push(`${path}: strand ${strand.id} twice`);
    strandIds.add(strand.id);
    for (const c of strand.competencies) {
      if (competencies.has(c.id)) errors.push(`${path}: competency ${c.id} twice (ids are unique in the subject)`);
      competencies.set(c.id, { ...c, requires: c.requires ?? [], strand: strand.id });
    }
  }
  for (const c of competencies.values()) {
    for (const r of c.requires) {
      if (r === c.id) errors.push(`${path}: ${c.id} requires itself`);
      else if (!competencies.has(r)) errors.push(`${path}: ${c.id} requires ${r}, which is no competency of ${id}`);
    }
  }
  for (const cycle of cycles(competencies)) errors.push(`${path}: requires goes round in a circle: ${cycle.join(" → ")}`);

  // Who needs a competency: the reverse of requires.
  const requiredBy = new Map([...competencies.keys()].map((k) => [k, []]));
  for (const c of competencies.values()) for (const r of c.requires) requiredBy.get(r)?.push(c.id);

  const curricula = [];
  const curriculaDir = join(dir, id, "curricula");
  if (existsSync(curriculaDir)) {
    for (const cfile of readdirSync(curriculaDir).filter((f) => f.endsWith(".yaml")).sort()) {
      const cid = cfile.replace(/\.yaml$/, "");
      const cpath = join(curriculaDir, cfile);
      if (!ID.test(cid)) errors.push(`${cpath}: the file name is the curriculum's id: <land>-<school type>, lower-case`);
      const cdata = parse(Curriculum, load(readFileSync(cpath, "utf8")), cpath, errors);
      if (!cdata) continue;
      if (!cid.startsWith(`${cdata.land.toLowerCase()}-`)) errors.push(`${cpath}: the file name starts with the land: ${cdata.land.toLowerCase()}-…`);
      const placements = new Map();
      for (const p of cdata.placements) {
        if (!competencies.has(p.competency)) errors.push(`${cpath}: ${p.competency} is no competency of ${id}`);
        if (placements.has(p.competency)) errors.push(`${cpath}: ${p.competency} placed twice`);
        placements.set(p.competency, p);
      }
      curricula.push({ ...cdata, id: cid, placements });
    }
  }

  return {
    id,
    name: data.name,
    source: data.source,
    strands: data.strands.map((s) => ({ id: s.id, name: s.name, competencies: s.competencies.map((c) => c.id) })),
    competencies,
    requiredBy,
    curricula,
  };
}

/** All subjects of the map in dir, sorted by German name; throws with every problem when a file is broken. */
export function loadMap(dir = "map") {
  if (!existsSync(dir)) return [];
  const errors = [];
  const subjects = readdirSync(dir)
    .filter((f) => f.endsWith(".yaml"))
    .sort()
    .map((f) => loadSubject(dir, f, errors))
    .filter(Boolean);
  if (errors.length) throw new Error(`learning map:\n  - ${errors.join("\n  - ")}`);
  return subjects.sort((a, b) => de(a.name).localeCompare(de(b.name), "de"));
}

/**
 * Checks the strand, the competencies and the recaps an app names against the map. Returns errors (an unknown subject,
 * strand, competency or recap; a recap of a competency the app practises) and hints (a competency of another strand: one app,
 * one strand; the listing treats them as errors).
 */
export function checkApp(subjects, { strand, competencies = [], recaps = [] }) {
  const errors = [];
  const hints = [];
  if (!strand || strand === "none") {
    if (competencies.length) errors.push("competencies need a strand");
    return { errors, hints };
  }
  const [sid, stid] = strand.split("/");
  const subject = subjects.find((s) => s.id === sid);
  if (!subject) {
    errors.push(`strand ${strand}: the learning map has no subject ${sid}`);
    return { errors, hints };
  }
  if (!subject.strands.some((s) => s.id === stid)) errors.push(`strand ${strand}: ${sid} has no strand ${stid}`);
  for (const c of competencies) {
    const found = subject.competencies.get(c);
    if (!found) errors.push(`competency ${c}: no competency of ${sid}`);
    else if (found.strand !== stid) hints.push(`competency ${c} belongs to the strand ${sid}/${found.strand}, not ${strand}: an app stays in one strand`);
  }
  // A recap page repeats a competency the app does not practise itself, of any strand, "<subject>/<id>" (KD-26,
  // variant C); recapping one the app also practises is an error.
  for (const r of recaps) {
    const [rs, rid] = r.split("/");
    const rsubject = subjects.find((s) => s.id === rs);
    const found = rsubject?.competencies.get(rid);
    if (!found) errors.push(`recap ${r}: no competency of the learning map`);
    else if (rs === sid && competencies.includes(rid)) errors.push(`recap ${r}: the app practises it on a page of its own; a recap is only for what it does not practise`);
  }
  return { errors, hints };
}

/**
 * Which apps practise which competency of a subject. apps: the catalog's apps, each with strand, competencies (its own
 * or its pages') and pages ({ title, url, competencies }). Returns competency id → [{ app, pages }].
 */
export function coverage(subject, apps) {
  const by = new Map([...subject.competencies.keys()].map((k) => [k, []]));
  for (const app of apps) {
    if (!app.strand || !app.strand.startsWith(`${subject.id}/`)) continue;
    const ids = new Set([...(app.competencies ?? []), ...(app.pages ?? []).flatMap((p) => p.competencies ?? [])]);
    for (const id of ids) {
      if (!by.has(id)) continue;
      by.get(id).push({ app, pages: (app.pages ?? []).filter((p) => (p.competencies ?? []).includes(id)) });
    }
  }
  return by;
}

/**
 * The rows of a subject's grid (KD-06). Without a curriculum, one row per grade band. With one: per band, the first
 * grade, the band (competencies the curriculum does not place, "noch ohne Klasse") and the second grade; a placed
 * competency stands in its first grade, with the others as "again".
 * Each row: { key, label, band (true for an unplaced band row), cells: per strand, the competencies { id, again } }.
 */
export function rows(subject, curriculum) {
  const keys = curriculum
    ? GRADE_BANDS.flatMap((b) => {
        const [lo, hi] = b.split("-").map(Number);
        return [lo, b, hi];
      })
    : GRADE_BANDS;
  return keys.map((key) => ({
    key,
    label: typeof key === "number" ? String(key) : key.replace("-", "/"),
    band: Boolean(curriculum) && typeof key === "string",
    cells: subject.strands.map((strand) => ({
      strand: strand.id,
      competencies: strand.competencies
        .map((id) => subject.competencies.get(id))
        .filter((c) => {
          // A grade outside 5–10 has no row of its own: the competency stays in its band.
          const first = curriculum?.placements.get(c.id)?.grades[0];
          return first >= 5 && first <= 10 ? first === key : c.gradeBand === key;
        })
        .map((c) => ({ id: c.id, again: curriculum?.placements.get(c.id)?.grades.slice(1) ?? [] })),
    })),
  }));
}

/** How many of a subject's competencies a curriculum places. */
export function placedCount(subject, curriculum) {
  return [...subject.competencies.keys()].filter((id) => curriculum.placements.has(id)).length;
}
