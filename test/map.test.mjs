// The learning map's loader and what it computes (lib/map.js), on the subjects in test/fixtures/map/: the checks
// across files (an unknown id, a cycle of requires, a double placement), the rows of a subject's grid with and without
// a curriculum (KD-06), the coverage by apps and the strand rule of an app.
import { test } from "node:test";
import assert from "node:assert/strict";
import { fileURLToPath } from "node:url";
import { loadMap, checkApp, coverage, rows, placedCount } from "../lib/map.js";

const fixture = (name) => fileURLToPath(new URL(`fixtures/map/${name}`, import.meta.url));
const [subject] = loadMap(fixture("ok"));
const curriculum = subject.curricula[0];

/** A row as { key: { strand: [ids with "again"] } }, to compare at a glance. */
const shape = (list) =>
  Object.fromEntries(
    list.map((row) => [
      row.key,
      Object.fromEntries(row.cells.map((cell) => [cell.strand, cell.competencies.map((c) => c.id + (c.again.length ? `+${c.again}` : ""))])),
    ]),
  );

test("a valid subject loads with its strands, competencies, requires in reverse and curricula", () => {
  assert.equal(subject.id, "fach");
  assert.deepEqual(subject.strands.map((s) => s.id), ["alpha", "beta"]);
  assert.equal(subject.competencies.get("b1").strand, "beta");
  assert.deepEqual(subject.requiredBy.get("a2"), ["a3", "b1"]);
  assert.equal(curriculum.id, "he-gymnasium");
  assert.equal(placedCount(subject, curriculum), 4);
});

test("a requires that names no competency fails the load", () => {
  assert.throws(() => loadMap(fixture("broken-id")), /a2 requires gibt-es-nicht, which is no competency of fach/);
});

test("a cycle of requires fails the load and names the circle", () => {
  assert.throws(() => loadMap(fixture("cycle")), /requires goes round in a circle: a1 → a3 → a2 → a1/);
});

test("a competency placed twice by one curriculum, or an unknown one, fails the load", () => {
  assert.throws(() => loadMap(fixture("double-placement")), (error) => {
    assert.match(error.message, /a1 placed twice/);
    assert.match(error.message, /unbekannt is no competency of fach/);
    return true;
  });
});

test("without a curriculum, one row per grade band", () => {
  assert.deepEqual(shape(rows(subject)), {
    "5-6": { alpha: ["a1"], beta: ["b1"] },
    "7-8": { alpha: ["a2"], beta: ["b2"] },
    "9-10": { alpha: ["a3"], beta: [] },
  });
  assert.ok(rows(subject).every((row) => !row.band));
});

test("with a curriculum: a competency in its first grade, the others as again; unplaced ones in their band row", () => {
  const list = rows(subject, curriculum);
  assert.deepEqual(list.map((r) => r.label), ["5", "5/6", "6", "7", "7/8", "8", "9", "9/10", "10"]);
  assert.deepEqual(list.filter((r) => r.band).map((r) => r.key), ["5-6", "7-8", "9-10"]);
  assert.deepEqual(shape(list), {
    5: { alpha: ["a1"], beta: [] },
    "5-6": { alpha: [], beta: [] },
    6: { alpha: [], beta: ["b1+9"] },
    7: { alpha: ["a2+8"], beta: [] },
    // b2 is placed in grade 11, outside the rows: it stays in its band
    "7-8": { alpha: [], beta: ["b2"] },
    8: { alpha: [], beta: [] },
    9: { alpha: [], beta: [] },
    // a3 is not placed: the striped row of its band, "noch ohne Klasse"
    "9-10": { alpha: ["a3"], beta: [] },
    10: { alpha: [], beta: [] },
  });
});

test("coverage: the competencies of an app in the subject, with the pages that practise them", () => {
  const apps = [
    { id: "explainer", strand: "fach/alpha", pages: [{ title: "Eins", competencies: ["a1"] }, { title: "Zwei", competencies: ["a1", "a2"] }] },
    { id: "quiz", strand: "fach/beta", competencies: ["b2"] },
    { id: "elsewhere", strand: "anderes/alpha", competencies: ["a3"] },
    { id: "none" },
  ];
  const by = coverage(subject, apps);
  assert.deepEqual(by.get("a1").map((p) => [p.app.id, p.pages.map((pg) => pg.title)]), [["explainer", ["Eins", "Zwei"]]]);
  assert.deepEqual(by.get("a2").map((p) => p.app.id), ["explainer"]);
  assert.deepEqual(by.get("b2").map((p) => [p.app.id, p.pages]), [["quiz", []]]);
  assert.deepEqual(by.get("a3"), []);
  assert.deepEqual(by.get("b1"), []);
});

test("an app: an unknown strand or competency is an error, a competency of another strand a hint", () => {
  const subjects = [subject];
  assert.deepEqual(checkApp(subjects, { strand: "fach/alpha", competencies: ["a1"] }), { errors: [], hints: [] });
  assert.match(checkApp(subjects, { strand: "fach/gamma" }).errors[0], /fach has no strand gamma/);
  assert.match(checkApp(subjects, { strand: "nix/alpha" }).errors[0], /no subject nix/);
  assert.match(checkApp(subjects, { strand: "fach/alpha", competencies: ["zz"] }).errors[0], /competency zz: no competency of fach/);
  assert.match(checkApp(subjects, { strand: "fach/alpha", competencies: ["b1"] }).hints[0], /an app stays in one strand/);
  assert.match(checkApp(subjects, { competencies: ["a1"] }).errors[0], /competencies need a strand/);
});
