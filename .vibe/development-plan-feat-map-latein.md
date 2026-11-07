# Development Plan: apps (feat/map-latein branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Latein für das Gymnasium Sek I: `map/latein.yaml` nach dem Skill `map-research`. Teil der Reihe der
Sek-I-Fächer (Pilot: `feat/map-biologie`), ein Fach je Branch.

## Key Decisions
- Autonom (Nutzer/in, 2026-11-07): keine Stopps an Phasengrenzen, bis zum Push; den PR legt die aufrufende Sitzung an.
- Architektur: Ein neues Fach ist nur eine neue Datei `map/latein.yaml`; kein Code, kein neues Konzept, daher keine
  Änderung an Plattform-Design oder arc42-Doku. Kein Lehrplan (`curricula/`).
- Es gibt keine KMK-Bildungsstandards Latein, auch nicht für das Abitur (nur EPA 1980/2005). `source` ist die
  KMK-Vereinbarung über das Latinum (2005), der gemeinsame Bezug der Länder.
- Basis ist Latein als 2. Fremdsprache: HE Lehrplan G9 (Jg 7–10) mit KC 2011, BY LehrplanPLUS (L2 Jg 6–8, Latein 9/10),
  NW KLP 2019 Kap. 2.2 (zwei Stufen ohne Jahrgang).
- Stränge: `wortschatz`, `formenlehre`, `satzlehre`, `texte`, `antike-kultur` (gemeinsame Inhaltsbereiche der Länder
  und der Latinum-Vereinbarung).
- Gleichstand: früheste der gleich starken Stufen, die `requires` erlaubt.
- Nacharbeit nach der Sichtung aller Karten (Nutzer/in, 2026-11-07, verbindlich):
  - Richtstufe = Drittel des Lehrgangs (Regel 2): HE L2 ab Jg 7 (n = 4), BY L2 ab Jg 6 (n = 5), NW L2 ab Jg 7 mit
    Stufe 1 = Lernjahre 1–2 (5-6/7-8) und Stufe 2 = Lernjahre 3–4 (7-8/9-10); KC Spracherwerb = Lernjahre 1–3,
    Latinum = Lernjahr 4. Das SiLP stimmt nicht mit. Gleichstand → frühere Stufe, außer `requires` erzwingt die spätere.
  - Klumpen: Nach den Stimmen lägen 107 von 176 in 5-6; `wortschatz`, `formenlehre`, `satzlehre` und `antike-kultur`
    hätten mehr als die Hälfte in einer Stufe. Diese Stränge sind entlang `requires` in Drittel geteilt (Reihenfolge:
    requires, Stufe der Stimmen, Median der Lage im Lehrgang, Datei). Ergebnis 61 / 55 / 60.
  - Strang-ids geprüft: genau die Ontologie für alte Sprachen; keine Umbenennung nötig. Baustein-ids unverändert.

## Notes
- Vorbilder: `map/physik.yaml`, `map/musik.yaml`; Format: `docs/learning-map-contract.md`.
- Recherche mit Quellen, Tabellen, Entscheidungen und offenen Punkten: `.vibe/research-latein.md`.
- Rohdaten und Generator im Scratchpad (`gen-latein/data.py`, `gen.py`), nicht im Repository.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] KMK geprüft: keine Bildungsstandards Latein; EPA Latein und Latinum-Vereinbarung geladen
- [x] Quellen gelesen: HE KC Latein (2011) und Lehrplan Latein G9; BY LehrplanPLUS Latein online (L1 5–8, L2 6–8, 9, 10);
      NW KLP Latein Heft 3402 (2019), SiLP als Hinweis
- [x] Stränge festgelegt; Kandidaten für Bausteine mit Fundstellen notiert

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen, Stimmen, requires) in `data.py`; Skript berechnet die Richtstufe nach
      der Regel, prüft ids, iCan, requires, Stufenfolge und Zyklen und schreibt YAML und Tabellen

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Abstimmungsregel stehen fest.

### Tasks

### Completed
- [x] 176 Bausteine erfasst: wortschatz 15, formenlehre 54, satzlehre 49, texte 22, antike-kultur 36
- [x] `map/latein.yaml` erzeugt (Richtstufen 2 × 5-6, 139 × 7-8, 35 × 9-10; 9 schwach belegt)
- [x] `.vibe/research-latein.md` geschrieben
- [x] `npm run build` (Seite `_site/map/latein/` entsteht) und `npm test` laufen durch

## Commit
### Entrance Criteria
- `map/latein.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Ein Commit mit `map/latein.yaml` und `.vibe/`; Push auf `feat/map-latein`
- [x] Bericht für den PR im Scratchpad (`reports/latein.md`)
- [x] Nacharbeit: Richtstufen nach Regel 2 neu berechnet, Klumpen in Drittel verteilt, Kommentare und Recherche
      nachgezogen, Strang-ids gegen die Ontologie geprüft; `npm run build` und `npm test` laufen durch
- [x] Nacharbeit: neuer Commit und Push auf `feat/map-latein`; Abschnitt „Nacharbeit“ im Scratchpad
      (`reports/latein-update.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
