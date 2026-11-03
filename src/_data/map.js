// The learning map for the pages: the subjects of map/ (checked by lib/map.js; a broken file fails the build), which
// apps of the catalog practise which competency, and one entry per page the map has (src/map-*.njk paginate over them).
import { loadMap, checkApp, coverage, rows, placedCount } from "../../lib/map.js";
import { LANDS, GRADE_BANDS } from "../../schemas/map.js";
import catalog from "./catalog.js";
import languages from "./languages.js";

export default async function () {
  const { apps } = await catalog();
  const subjects = loadMap();

  // An app that names an unknown subject, strand or competency fails the build like a broken entry.
  const errors = [];
  for (const app of apps) {
    const competencies = [...(app.competencies ?? []), ...(app.pages ?? []).flatMap((p) => p.competencies ?? [])];
    if (!app.strand && !competencies.length) continue;
    const recaps = (app.pages ?? []).map((p) => p.recap).filter(Boolean);
    for (const e of checkApp(subjects, { strand: app.strand, competencies, recaps }).errors) errors.push(`${app.id}: ${e}`);
  }
  if (errors.length) throw new Error(`apps and the learning map:\n  - ${errors.join("\n  - ")}`);

  const views = subjects.map((subject) => {
    const covered = coverage(subject, apps);
    const appsOf = apps.filter((a) => a.strand?.startsWith(`${subject.id}/`));
    const competencies = [...subject.competencies.values()].map((c) => ({
      ...c,
      requiredBy: subject.requiredBy.get(c.id),
      practisedBy: covered.get(c.id),
      placements: subject.curricula
        .filter((cu) => cu.placements.has(c.id))
        .map((cu) => ({ curriculum: cu.id, ...cu.placements.get(c.id) })),
    }));
    const byId = new Map(competencies.map((c) => [c.id, c]));
    const strands = subject.strands.map((s) => {
      const list = s.competencies.map((id) => byId.get(id));
      const strandApps = appsOf.filter((a) => a.strand === `${subject.id}/${s.id}`);
      // The strand page: its competencies by grade band, and each app as a bar from the first to the last band it
      // practises (indices into GRADE_BANDS); a band no app practises is a gap.
      const bands = GRADE_BANDS.map((band) => ({ band, competencies: list.filter((c) => c.gradeBand === band).map((c) => c.id) }));
      const bars = strandApps
        .map((app) => {
          const mine = list.filter((c) => c.practisedBy.some((p) => p.app.id === app.id));
          const at = mine.map((c) => GRADE_BANDS.indexOf(c.gradeBand));
          return { app, count: mine.length, from: Math.min(...at), to: Math.max(...at) };
        })
        .filter((bar) => bar.count > 0);
      const gaps = GRADE_BANDS.map((_, i) => i).filter((i) => !bars.some((b) => b.from <= i && i <= b.to));
      return {
        ...s,
        total: list.length,
        covered: list.filter((c) => c.practisedBy.length).length,
        apps: strandApps,
        bands,
        bars,
        gaps,
      };
    });
    // A strand and a curriculum share the address /map/<subject>/<id>/, and c/ holds the competencies.
    for (const s of strands) {
      if (s.id === "c" || subject.curricula.some((cu) => cu.id === s.id)) {
        throw new Error(`learning map: ${subject.id}: the strand ${s.id} has the address of a curriculum or of c/; rename one`);
      }
    }
    const curricula = subject.curricula.map((cu) => ({
      id: cu.id,
      land: cu.land,
      schoolType: cu.schoolType,
      version: cu.version,
      source: cu.source,
      placed: placedCount(subject, cu),
      rows: rows(subject, cu),
      placements: Object.fromEntries(cu.placements),
    }));
    return {
      id: subject.id,
      name: subject.name,
      source: subject.source,
      strands,
      competencies,
      curricula,
      rows: rows(subject),
      // How many competencies an app practises (the cards of /map/, the filter of the subject page).
      covered: competencies.filter((c) => c.practisedBy.length).length,
      // Every Land in the drop-down; one without a captured curriculum is shown, but cannot be chosen.
      lands: LANDS.map((land) => ({ land, curricula: curricula.filter((c) => c.land === land).map((c) => c.id) })),
    };
  });

  // The pages, once per language (src/map-*.njk): a subject with or without a curriculum, a strand, a competency.
  const each = (list) => list.flatMap((item) => languages.map((l) => ({ ...item, l })));
  const subjectPages = each(
    views.flatMap((s) => [{ subject: s, curriculum: undefined }, ...s.curricula.map((c) => ({ subject: s, curriculum: c }))]),
  );
  const strandPages = each(views.flatMap((s) => s.strands.map((strand) => ({ subject: s, strand }))));
  const competencyPages = each(views.flatMap((s) => s.competencies.map((competency) => ({ subject: s, competency }))));

  // The data an assistant reads at /apps/map/<subject>.json (contract, section 5).
  const json = views.map((s) => ({
    subject: s.id,
    data: {
      id: s.id,
      name: s.name,
      source: s.source,
      strands: s.strands.map((st) => ({
        id: st.id,
        name: st.name,
        competencies: st.competencies.map((id) => {
          const c = s.competencies.find((x) => x.id === id);
          return {
            id: c.id,
            iCan: c.iCan,
            gradeBand: c.gradeBand,
            requires: c.requires,
            practisedBy: c.practisedBy.map((p) => ({ app: p.app.id, url: p.app.url, pages: p.pages.map((pg) => pg.url) })),
          };
        }),
      })),
      curricula: s.curricula.map((c) => ({
        id: c.id,
        land: c.land,
        schoolType: c.schoolType,
        version: c.version,
        source: c.source,
        placements: Object.values(c.placements),
      })),
    },
  }));

  // What the page of an app shows of the map: its strand and the competencies it practises.
  const byApp = {};
  for (const s of views) {
    for (const strand of s.strands) {
      for (const app of strand.apps) {
        const ids = s.competencies.filter((c) => c.practisedBy.some((p) => p.app.id === app.id)).map((c) => c.id);
        byApp[app.id] = { subject: s.id, strand: strand.id, competencies: ids };
      }
    }
  }

  return { subjects: views, subjectPages, strandPages, competencyPages, json, termsPages: languages, byApp };
}
