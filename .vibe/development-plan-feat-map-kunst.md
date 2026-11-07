# Development Plan: apps (feat/map-kunst branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Kunst für das Gymnasium Sek I (Jahrgang 5–10): `map/kunst.yaml` nach dem Skill `map-research`.
Keine KMK-Bildungsstandards; Stränge aus den Inhaltsbereichen, die Hessen, Bayern und NRW teilen. Teil der Reihe aus
`development-plan-feat-map-biologie.md` (ein Fach je Branch).

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den PR legt die aufrufende Sitzung an.
- Workflow epcc. Architektur: ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; kein Code, keine Änderung an
  Plattform-Design oder arc42-Doku.
- Quelle wie bei Musik (KD-17): Kerncurriculum Hessen, mit Lehrplan Kunst G9 Hessen. Stränge nach den gemeinsamen
  Inhaltsbereichen der drei Länder (Recherche Abschnitt 2): zehn Stränge.
- Hessen stimmt mit dem Lehrplan G9 (Jahrgänge 5, 6, 7, 9), wo er den Inhalt nennt, sonst mit dem KC (Ende 6 /
  Ende 9/10 = „7-10“). Kunst hat in Hessen in Jg 8 und 10 keinen Unterricht.
- Gleichstand ohne Entscheidung durch requires: die frühere Stufe (Praxis aus Biologie, offener Punkt).
- Kunstgeschichte: die Epochen als direkte Voraussetzungen von `epochen-ueberblick` (von allen drei Ländern belegt);
  nur von BY belegte Epochen sind „schwach“.
- Keine Lehrpläne (`curricula/`).

## Notes
- Vorbilder: `map/physik.yaml` (Kommentare je Baustein), `map/musik.yaml` (Fach ohne KMK).
- Rohdaten und Generator im Scratchpad (`gen-kunst/data.py`, `gen.py`), nicht im Repository.
- Recherche: `.vibe/research-kunst.md`.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder Physik und Musik, Recherche Biologie gelesen
- [x] Quellen geladen und gelesen: KC Hessen Kunst Gymnasium (2011), Lehrplan Kunst G9 Hessen (PDF 2016),
      LehrplanPLUS Bayern Ku5–Ku10 (online), KLP NRW Kunst Heft 3405 (2019); SiLP NRW nur als Hinweis
- [x] Gemeinsame Inhaltsbereiche bestimmt → zehn Stränge

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen, Stimme je Land, requires) → Generator schreibt YAML und
      Tabellen, prüft ids, „Ich kann“, requires, Zyklen und Richtstufen
- [x] Abstimmungsregel festgelegt (Skill; Gleichstand → requires → frühere Stufe; Vorschläge zählen nicht)

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] Rohdaten: 136 Bausteine; farbe 18, form-flaeche 9, raum 14, zeichnung-druck 14, plastik 10, foto-film 14,
      architektur-design 14, bildstrategien 8, bildanalyse 19, kunstgeschichte 16
- [x] `map/kunst.yaml` erzeugt; Richtstufen 59 × 5-6, 37 × 7-8, 40 × 9-10; 15 schwach belegt
- [x] Geprüft: Generator-Checks OK, `npm run build` (Seite `/map/kunst/` mit 136 Bausteinseiten), `npm test`
      (93 bestanden, 1 übersprungen, 0 Fehler)
- [x] `.vibe/research-kunst.md` (Quellen, Stränge, Tabellen, Entscheidungen, offene Punkte)

## Commit
### Entrance Criteria
- `map/kunst.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur `map/kunst.yaml`, Recherche und Plan; keine Modellbezeichnung
- [x] Commit auf `feat/map-kunst` und Push

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
