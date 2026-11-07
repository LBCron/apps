# Development Plan: apps (feat/map-geschichte branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Geschichte für das Gymnasium Sek I (Jahrgang 5–10): `map/geschichte.yaml` nach dem Skill
`map-research`. Es gibt keine KMK-Bildungsstandards Geschichte; Grundlage sind die Inhaltsbereiche, die Hessen
(KC und Lehrplan G9), Bayern (LehrplanPLUS) und NRW (KLP G9) teilen. Teil der Reihe aus
`development-plan-feat-map-biologie.md`.

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den PR legt die aufrufende Sitzung an.
- Architektur: nur eine neue Datei `map/geschichte.yaml`; `lib/map.js` lädt sie. Kein Code, keine Änderung an
  Plattform-Design oder arc42-Doku. Keine `curricula/`.
- Quellen: HE KC (2011) für die Inhaltsbereiche, HE Lehrplan G9 (Jg 6, 8, 9, 10) für die HE-Stimme; BY LehrplanPLUS
  online G6–G10; NW KLP Heft 3407 (2019). Kein Schulbuch, kein Wiki.
- Stränge: neun Epochen-Stränge, die alle drei Länder teilen, dazu `grundlagen` (Zeitrechnung, Epochen, Quellen) als
  lehrbarer Inhalt in Jg 5/6. Prozesskompetenzen nicht modelliert.
- Richtstufe: eine Stimme je Land; KC-only zählt für jede Stufe („5-10“), NW Stufe 2 für 7-8 und 9-10; Gleichstand
  über requires, sonst die frühere Stufe (wie Biologie).

## Notes
- Recherche mit Quellen, Tabellen, Entscheidungen und offenen Punkten: `.vibe/research-geschichte.md`.
- Rohdaten und Skripte (nicht im Repository): Scratchpad `gen-geschichte/` (`data.py`, `check.py`, `render_*.py`).

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder (`physik.yaml`, `musik.yaml`, Recherche Biologie) gelesen
- [x] Quellen geladen und gelesen: HE KC Geschichte Gymnasium, HE Lehrplan G9 Geschichte, BY LehrplanPLUS G6–G10,
      NW KLP Geschichte G9 (und SiLP nur als Hinweis)
- [x] Geprüft: Grundbegriffe (Zeitrechnung, Epochen, Quellenarten, Quelle/Darstellung, Überrest/Überlieferung,
      Archäologie) sind in allen drei Ländern Inhalt in Jg 5/6 → eigener Strang `grundlagen`

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Stränge festgelegt (Recherche 3.1)
- [x] Bausteinliste mit Fundstellen und Stimmen je Land (Rohdaten `data.py`)
- [x] Abstimmungsregel für HE (KC ohne Jahrgang, Lehrplan G9 mit Jahrgang) festgelegt

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] Prüfskript: ids, „Ich kann“, mindestens zwei Länder, requires, Richtstufen, Zyklen → OK
- [x] `map/geschichte.yaml` erzeugt: 195 Bausteine (grundlagen 10, urgeschichte 12, antike 20, mittelalter 29,
      fruehe-neuzeit 21, revolutionen 33, weltkrieg-weimar 25, nationalsozialismus 21, nachkriegszeit 24);
      50 × 5-6, 86 × 7-8, 59 × 9-10; 4 schwach belegt
- [x] `.vibe/research-geschichte.md` geschrieben
- [x] `npm run build` (Fachseite `_site/map/geschichte/` mit 195 Baustein-Seiten) und `npm test` (93 bestanden) laufen durch

## Commit
### Entrance Criteria
- `map/geschichte.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Ein Commit mit `.vibe` und Karte, Push auf `feat/map-geschichte`
- [x] Bericht für den PR im Scratchpad (`reports/geschichte.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
