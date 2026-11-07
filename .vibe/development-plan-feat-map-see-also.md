# Development Plan: apps (feat/map-see-also branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Issue #220: Querverweise zwischen Fächern der Lernlandkarte als Feld `seeAlso: [<fach>/<id>]` am Baustein statt als
Kommentar `# Siehe auch: <fach>/<id>`. Geprüft von `lib/map.js`, angezeigt in der Ansicht eines Bausteins.

## Key Decisions
- (Nutzer/in, vorab) Feld `seeAlso` am Baustein; jedes Ziel in einem anderen Fach.
- (Nutzer/in, vorab) `lib/map.js` prüft nach dem Laden aller Fächer, dass jedes Ziel existiert; ein Fehler bricht den Build ab.
- (Nutzer/in, vorab) Nur eine Richtung in den Daten; die Gegenrichtung berechnet der Code (wie `requiredBy`).
- (Nutzer/in, vorab) Anzeige: Block „Siehe auch“ in der Ansicht eines Bausteins, mit Links ins andere Fach.
- (Nutzer/in, vorab) Vertrag, Skill `map-research`, Tests anpassen.
- Architektur: Erweiterung des bestehenden Vertrags der Lernlandkarte (Schema `subject.v1`, Prüfung in `lib/map.js`,
  Seiten in `src/`); kein neuer Baustein der Plattform, keine neue Abhängigkeit.

## Notes
- Bestand (Skript in scratchpad `pairs.mjs`): 202 Verweise in 7 Karten, alle Ziele existieren, alle 202 stehen auf
  beiden Seiten → 101 Paare. evangelische ↔ katholische Religion 86, geschichte ↔ latein 9, geschichte ↔ franzoesisch 3,
  biologie ↔ erdkunde 2, erdkunde ↔ franzoesisch 1.
- Drei Kommentare tragen eine Erläuterung in Klammern (biologie 578, erdkunde 391/398); katholische-religion.yaml Zeile 10
  erklärt die Kommentare im Kopf.
- Seiten: `src/map-competency.njk` (Abschnitt „Lernweg“), `src/_data/map.js` (Ansicht, JSON), Texte in `src/_data/de.js`/`en.js`.
- Schema: `schemas/map.js` (zod) → `schemas/subject.v1.schema.json` per `npm run schema`.

- (Nutzer/in, 2026-11-07) Zwei getrennte Begriffe, getrennt modelliert: **Querverweis** (verwandter Inhalt, eigener
  Aspekt je Fach, z. B. Biologie ↔ Erdkunde) und **Wiederverwendung** (derselbe Baustein in zwei Fächern, Annahme:
  Evangelische ↔ Katholische Religion). Issue #220 deckt nur den Querverweis ab.
- Auswertung gleicher ids in mehreren Fächern (ohne Religion): meist fachgebunden, keine Doppelung (Grammatik und
  Themen der Sprachen, Textsorten Deutsch/Fremdsprachen). Kandidaten für echte Doppelung: `sucht`, `pubertaet`
  (Biologie/Ethik), `nachhaltigkeit` (Biologie/Erdkunde/Ethik), `energieerhaltung` (Chemie/Physik),
  `eigene-mediennutzung` (Deutsch/Ethik). Keiner davon hat heute einen Kommentar.

## Explore
### Tasks
- [ ] Mit Nutzer/in klären: Religion = Wiederverwendung? Kandidaten oben = Doppelung oder Querverweis?
- [ ] Offene Fragen mit Nutzer/in klären (Ziel in fehlendem Fach; Apps; Seite je Paar; JSON)

### Completed
- [x] Created development plan file
- [x] Issue, Vertrag, Schema, `lib/map.js`, `src/_data/map.js`, `src/map-competency.njk`, Skill und Tests gelesen
- [x] Bestand der Verweise ausgewertet (Notes)

## Plan
### Entrance Criteria
- Offene Fragen sind von der Nutzerin / dem Nutzer entschieden und unter Key Decisions notiert.

### Tasks
- [ ] *To be added when this phase becomes active*

### Completed
*None yet*

## Code
### Entrance Criteria
- Der Plan nennt Schema, Prüfung, Ansicht, JSON, Texte, Umstellung der Karten, Doku und Tests.

### Tasks
- [ ] *To be added when this phase becomes active*

### Completed
*None yet*

## Commit
### Entrance Criteria
- Umsetzung fertig; `npm test` und Build grün.

### Tasks
- [ ] *To be added when this phase becomes active*

### Completed
*None yet*



---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
