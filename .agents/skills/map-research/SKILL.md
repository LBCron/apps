---
name: map-research
description: Use when a subject of the learning map is new or reworked (map/<subject>.yaml) or a curriculum is added (map/<subject>/curricula/<land>-<schoolType>.yaml) - the method and the sources for strands, competencies, grade bands, requires and placements.
---

# Researching a learning map

The format is `docs/learning-map-contract.md`; the reasons are the KD-xx of `.vibe/development-plan-feat-learning-map.md`.

## Sources, in this order

1. **KMK-Bildungsstandards** of the subject (ESA/MSA, latest edition): the strands and the binding content. Where none
   exist (Musik, Kunst, Religion …): the content areas the Länder share.
2. **Three Länder plans** for the grades, e.g. Hessen, Bayern, NRW (Gymnasium G9). Read the binding text, not a school
   example; an example may only hint at a grade.
3. Nothing else for the model: no textbook, no wiki. Open every source in the original and cite it with edition and
   page.

## Method

- **Strands:** the KMK areas as they are. Split or merge one only with a reason in the report; a strand needs at least
  as many competencies as one app can cover in several school years.
- **A competency** belongs in the map if the KMK names it, or two of the three Länder do, or it is a prerequisite of
  one of those. Fine-grained: one competency is what one page of an app can teach. `iCan` starts with "Ich kann",
  plain German; the id is stable once published.
- **gradeBand:** vote per Land; two of three decide, with three different votes the middle one.
- **requires:** only what is needed directly; never a later grade band; across strands allowed; no cycles.
- **A curriculum** places only what its document places (`grades`, `unit` as it names it). Leave the rest out; never
  guess a grade.
- **Ids used by apps** stay. A change of an id is a migration of every app that uses it.

## Result

- `map/<subject>.yaml` with a comment per competency naming its sources; weakly covered ones marked so.
- A short report in the pull request: sources (title, edition, URL), the decisions and the open points.
- `npm run build` and `npm test` pass (`lib/map.js` checks ids, cycles and placements).
