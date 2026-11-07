# Development Plan: apps (feat/map-deutsch branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Deutsch für das Gymnasium Sek I (Jahrgang 5–10): `map/deutsch.yaml` nach dem Skill `map-research`
(KMK-Bildungsstandards Deutsch ESA/MSA i. d. F. vom 23.06.2022; Hessen, Bayern, NRW). Teil der Reihe aus
`feat/map-biologie`: ein Fach je Branch.

## Key Decisions
- Autonom (Nutzer/in, 2026-11-07): keine Stopps an Phasengrenzen, bis zum Push; den PR legt die aufrufende Sitzung an.
- Architektur: Ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; `lib/map.js` lädt alle Dateien in `map/`.
  Kein Code, kein neues Konzept, also keine Änderung an Plattform-Design oder arc42-Doku.
- Kein Lehrplan (`curricula/`), wie bei den anderen Fächern der Reihe.
- Stränge = die fünf KMK-Kompetenzbereiche: `sprechen-zuhoeren`, `schreiben`, `lesen`, `texte-medien`, `sprache`.
  Rechtschreibung und Zeichensetzung in `schreiben` (KMK 4.2 „Orthografisch schreiben“).
- Aus den prozessbezogenen Bereichen nur lehrbare Inhalte (Gesprächsformen, Textsorten, Regeln, Techniken), keine
  Haltungen.
- Quellen HE: G9-Lehrplan Deutsch (nennt Jahrgänge) und Kerncurriculum 2011; Stimme = Jahrgang des Lehrplans, sonst
  KC (Kapitel bzw. hervorgehobener Schwerpunkt der Doppelstufe). NW: Erprobungsstufe / erste / zweite Stufe = 5-6 /
  7-8 / 9-10.
- Gleichstand (zwei verschiedene Stimmen, drittes Land schweigt): frühere Stufe, außer eine direkte Voraussetzung
  liegt in derselben oder einer späteren Stufe; dann die spätere.
- Umfang: keine Zielgröße (Regel der Nutzerin / des Nutzers); Ergebnis 206 Bausteine.

## Notes
- Vorbild: `map/physik.yaml` (Kopfkommentar mit Quellenkürzeln, ein Kommentar je Baustein).
- Recherche mit Quellen, Tabellen, Entscheidungen und offenen Punkten: `.vibe/research-deutsch.md`.
- Rohdaten und Generator (nicht im Repository): Scratchpad `gen-deutsch/data.py`, `gen-deutsch/gen.py`.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder (Physik, Musik, Recherche Biologie) gelesen
- [x] Quellen im Original gelesen: KMK Deutsch ESA/MSA (2022), HE G9-Lehrplan Deutsch und KC Deutsch Gymnasium
      (2011, Hervorhebungen per `pdftohtml`), LehrplanPLUS Deutsch D5–D10 (online), KLP NRW Deutsch G9 Heft 3409 (2019)
- [x] Stränge = die fünf KMK-Kompetenzbereiche

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen, Stimmen, requires) in `data.py`; `gen.py` berechnet die
      Richtstufe, prüft ids, „Ich kann“, requires, Stufenfolge, Zyklen und schreibt YAML und Tabellen
- [x] Feinkörnig trennen, wo eine Seite besser lehrt (Liste in der Recherche, 3.3)

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] `map/deutsch.yaml` erzeugt: 206 Bausteine (sprechen-zuhoeren 19, schreiben 61, lesen 11, texte-medien 60,
      sprache 55; 106 × 5-6, 59 × 7-8, 41 × 9-10; 12 schwach belegt)
- [x] `.vibe/research-deutsch.md` geschrieben
- [x] `npm run build` läuft durch, Fachseite `_site/map/deutsch/` und `_site/map/deutsch.json` entstehen
- [x] `npm test` läuft durch

## Commit
### Entrance Criteria
- `map/deutsch.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Ein Commit `feat(map): the learning map Deutsch` mit Plan und Recherche
- [x] Push nach `origin/feat/map-deutsch`
- [x] Bericht für den Pull Request im Scratchpad (`reports/deutsch.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
