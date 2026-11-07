# Development Plan: apps (feat/map-politik-wirtschaft branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Politik und Wirtschaft für das Gymnasium Sek I (Jahrgang 5–10): `map/politik-wirtschaft.yaml` nach dem
Skill `map-research`. Keine KMK-Bildungsstandards; Quellen: Hessen (Lehrplan G9 und Kerncurriculum), Bayern
(LehrplanPLUS: Politik und Gesellschaft 10, Wirtschaft und Recht 10, politische Anteile von Geographie und
Geschichte), NRW (Kernlehrplan Wirtschaft-Politik). Teil der Reihe „alle Sek-I-Fächer“ (siehe
`development-plan-feat-map-biologie.md`).

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den PR legt die aufrufende Sitzung an.
- Architektur: nur eine neue Datei `map/politik-wirtschaft.yaml`; `lib/map.js` lädt alle Dateien in `map/`. Kein Code,
  kein neues Konzept, keine Änderung an Plattform-Design oder arc42-Doku. Keine `curricula/`.
- `source`: Kerncurriculum Hessen Politik und Wirtschaft (das Fach mit genau diesem Namen), wie bei Musik.
- Bayern zählt mit den Fächern für alle Ausbildungsrichtungen (PuG10, WR10, Geo7/Geo10, G10). PuG 8/9 (nur SWG) und
  WR 8/9 (nur WWG) stehen als Hinweis.
- Hessen stimmt mit dem Jahrgang des Lehrplans G9 ab (7.1–10.3); nennt nur das KC den Inhalt, zählt „7-10“.
  Fakultative Inhalte zählen nicht.
- 11 Stränge (Begründung in `research-politik-wirtschaft.md` 3.1): gesellschaft, teilhabe, politisches-system, recht,
  wirtschaft, arbeitswelt, sozialstaat, nachhaltigkeit, europa, internationale-politik, medien.
- Gleichstand, den requires nicht entscheidet: früheste der gleich starken Stufen (44 Bausteine; offener Punkt).

## Notes
- Rohdaten und Generator im Scratchpad (`tools-pw/data.py`, `gen.py`, `tables.py`), nicht im Repository.
- Vorbilder: `map/physik.yaml`, `map/musik.yaml`.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder gelesen
- [x] Quellen gelesen: HE Lehrplan G9 (PDF 2016) und KC (2011); BY LehrplanPLUS online (PuG 8/9/10, WR 8/9/10,
      Geo 5/7/10, Geschichte 7–10); NRW KLP Wirtschaft-Politik Heft 3429 (2019) und SiLP (2020)
- [x] Stränge aus den geteilten Inhaltsbereichen bestimmt

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstelle und Stimme je Land) → Skript stimmt ab, prüft und schreibt YAML und
      Tabellen der Recherche

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Abstimmungsregel stehen fest.

### Tasks

### Completed
- [x] 144 Bausteine mit Fundstellen, Stimmen und requires erfasst
- [x] `map/politik-wirtschaft.yaml` erzeugt; Prüfung per Skript (ids, „Ich kann“, requires, Richtstufen, Zyklen,
      mindestens zwei Länder)
- [x] `.vibe/research-politik-wirtschaft.md` geschrieben
- [x] `npm run build` (Seite `_site/map/politik-wirtschaft/` entsteht) und `npm test` laufen durch

## Commit
### Entrance Criteria
- `map/politik-wirtschaft.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Ein Commit mit Plan und Recherche, Push auf `feat/map-politik-wirtschaft`
- [x] Bericht für den PR im Scratchpad (`reports/politik-wirtschaft.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
