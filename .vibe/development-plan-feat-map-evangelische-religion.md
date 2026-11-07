# Development Plan: apps (feat/map-evangelische-religion branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Evangelische Religion für das Gymnasium Sek I (Jahrgang 5–10): `map/evangelische-religion.yaml` nach dem
Skill `map-research`. Ohne KMK-Bildungsstandards (die KMK hat nur EPA für das Abitur); Grundlage sind die
Inhaltsbereiche, die Hessen, Bayern und NRW teilen. Teil der Reihe „alle Sek-I-Fächer, ein Branch je Fach“
(siehe `.vibe/development-plan-feat-map-biologie.md`).

## Key Decisions
- Auftrag und Regeln (Nutzer/in, 2026-11-07): wie beim Pilotfach Biologie; autonom bis zum Push, den PR legt die
  aufrufende Sitzung an. Workflow epcc.
- Architektur: nur eine neue Datei `map/evangelische-religion.yaml`; `lib/map.js` lädt alle Dateien in `map/`. Kein
  Code, kein neues Konzept, keine Änderung an Plattform-Design oder arc42-Doku.
- Keine `curricula/` (Regel 6 des Auftrags).
- Quellen: KC Hessen Evangelische Religion Gymnasium, Ausgabe 2026 (drei Stufen 6, 8, 9/10); LehrplanPLUS Bayern
  Evangelische Religionslehre ER5–ER10; KLP NRW Evangelische Religionslehre G9, Heft 3414 (2019).
- `source` der Karte = KC Hessen 2026 (wichtigster gemeinsamer Bezug, wie in `musik.yaml`; HE und NW teilen dieselben
  sechs Inhaltsbereiche).
- Stränge (7): `mensch`, `gott`, `bibel`, `jesus-christus`, `kirche`, `religionen`, `ethik`. Bibel als eigener Strang
  (NW IF5, BY ER5 LB2); NW IF7 „Religion in Alltag und Kultur“ auf `kirche`, `mensch` und `religionen` verteilt.
- Neutral formuliert: Die Karte lehrt Wissen über Inhalte, kein Bekenntnis („Ich kann erklären, was Christen unter …
  verstehen“). Gilt ebenso für die parallel entstehende Karte Katholische Religion.
- Gleichstand bei der Richtstufe: früheste der gleichauf liegenden Stufen, die nicht vor einer Voraussetzung liegt.

- Nacharbeit (Nutzer/in, 2026-11-07): gleicher Inhalt in zwei Fächern bleibt in beiden, mit Querverweis. 85 Bausteine
  verweisen jetzt mit `# Siehe auch: katholische-religion/<id>` auf die Karte Katholische Religion (Gegenrichtung zu #207).
  Strang-ids entsprechen schon der Ontologie im Skill.

## Notes
- Vorbilder: `map/physik.yaml` (Kommentar je Baustein), `map/musik.yaml` (Fach ohne KMK-Standards).
- Rohdaten und Generator im Scratchpad (`gen-evangelische-religion/data.py`, `gen.py`), nicht im Repository.
- Recherche mit allen Fundstellen und Stimmen: `.vibe/research-evangelische-religion.md`.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Branch `feat/map-evangelische-religion` von `origin/main`
- [x] Skill `map-research`, Vertrag, Vorbilder physik/musik und Recherche Biologie gelesen
- [x] Quellen im Original gelesen: KC Hessen 2026 (PDF), LehrplanPLUS Bayern ER5–ER10 und Fachprofil (HTML),
      KLP NRW Heft 3414 (PDF)
- [x] Stränge aus den gemeinsamen Inhaltsbereichen bestimmt (Recherche 3.1)

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen, Stimmen, requires) in `data.py`; Generator berechnet Richtstufe
      nach der Regel des Skills, prüft ids, iCan, requires, Stufenfolge und Zyklen und schreibt YAML und Tabellen
- [x] Aufnahmeregel: KMK entfällt; zwei von drei Ländern oder direkte Voraussetzung; sonst Liste „nicht aufgenommen“

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] 150 Bausteine erfasst: mensch 15, gott 19, bibel 13, jesus-christus 19, kirche 32, religionen 27, ethik 25
- [x] Richtstufen: 67 × 5-6, 45 × 7-8, 38 × 9-10 (137 Mehrheit, 2 Mitte, 10 Gleichstand über requires, 1 Einzelstimme)
- [x] `map/evangelische-religion.yaml` erzeugt (Kopfkommentar mit Quellenkürzeln, Kommentar je Baustein)
- [x] `.vibe/research-evangelische-religion.md` geschrieben (Quellen, Tabellen, Entscheidungen, offene Punkte)
- [x] Geprüft: Generator-Prüfungen OK; `npm run build` (Seite `/map/evangelische-religion/` mit 150 Bausteinseiten);
      `npm test` (93 bestanden, 1 übersprungen, 0 Fehler)

## Commit
### Entrance Criteria
- `map/evangelische-religion.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur Karte, Recherche und Plan; keine Modellbezeichnung, keine Debug-Reste
- [x] Bericht für den Pull Request im Scratchpad (`reports/evangelische-religion.md`)
- [x] Commit auf `feat/map-evangelische-religion` (conventional, Body mit Intent / Key changes) und Push

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
