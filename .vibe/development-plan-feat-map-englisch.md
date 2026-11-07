# Development Plan: apps (feat/map-englisch branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Englisch (erste Fremdsprache ab Klasse 5) für das Gymnasium Sek I (Jahrgang 5–10): `map/englisch.yaml`
nach dem Skill `map-research` (KMK-Bildungsstandards erste Fremdsprache ESA/MSA i. d. F. 2023; Hessen, Bayern, NRW).
Teil der Reihe aus `feat/map-biologie`: ein Fach je Branch.

## Key Decisions
- Vorgaben aus `feat/map-biologie` gelten (Nutzer/in, 2026-11-07): autonom bis zum Push, keine Zielgröße, genau eine
  Richtstufe je Baustein, keine `curricula/`, Prozesskompetenzen nicht modelliert.
- Architektur: Ein neues Fach ist nur eine neue Datei `map/englisch.yaml`; `lib/map.js` lädt alle Dateien in `map/`.
  Kein Code, kein neues Konzept, also keine Änderung an Plattform-Design oder arc42-Doku.
- Stränge (Begründung in `.vibe/research-englisch.md`, Abschnitt 1a): Die KMK gliedert nach Kompetenzen, nicht nach
  Inhalten. Lehrbare Inhalte stecken in „Verfügen über sprachliche Mittel“, „Interkulturelle Kompetenz“ und „Text-
  und Medienkompetenz“. Daraus fünf Stränge: `grammatik`, `wortschatz`, `aussprache` (Aussprache und Rechtschreibung),
  `landeskunde` (Länder und Kulturen), `texte` (Texte und Medien). Lexiko-Grammatik geteilt, weil alle drei Länder
  Wortschatz und Grammatik trennen.
- Hessen: Das KC 2023 (Moderne Fremdsprachen) nennt sprachliche Mittel nur als Funktionen. Abgestimmt wird mit dem
  Lehrplan Englisch G9 (Jg 5–13), der Strukturen je Jahrgang nennt; das KC ergänzt (wie bei Musik).
- NRW nennt drei Stufen (Ende 6, 8, 10), die den Richtstufen entsprechen; daher keine Stimme „7-10“.
- ~~Zwei verschiedene Stimmen ohne dritte: die spätere Stufe~~ (erste Runde; ersetzt durch die Nacharbeit).
- Nacharbeit nach Sichtung aller Karten (Nutzer/in, 2026-11-07, verbindlich):
  - Gleichstand → frühere Stufe, außer `requires` erzwingt die spätere. 15 der 16 Bausteine rücken eine Stufe vor;
    `schwache-formen` bleibt 7-8 (requires `wortbetonung` 7-8).
  - Fremdsprache: Richtstufe = Stufe im Lehrgang. Englisch beginnt in HE, BY, NW in Jg 5 (n = 6), die Drittel sind die
    Jahrgangsstufen; keine Stimme ändert sich.
  - Klumpen: 5-6 hielt mehr als die Hälfte von `grammatik` (52/94), `wortschatz` (19/33), `aussprache` (12/21).
    Verteilt nach 7-8 nur Bausteine am Ende einer requires-Kette, die die Länder im 2. Lernjahr oder später nennen
    (10 Bausteine, Grund je Baustein im Kommentar). Danach 47/94, 16/33, 10/21. `check.py` prüft das Klumpen.
  - Strang-ids entsprechen der Ontologie (Modern languages); nichts umbenannt.

## Notes
- Vorbild: `map/physik.yaml` (Kopfkommentar mit Quellenkürzeln, ein Kommentar je Baustein).
- Rohdaten und Generator im Scratchpad (`gen-englisch/data.py`, `check.py`, `render_yaml.py`, `render_md.py`), nicht
  im Repository.
- Bericht (Quellen, Entscheidungen, offene Punkte) kommt in den Pull Request.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder (physik, musik) und Recherche Biologie gelesen
- [x] Quellen gelesen: KMK erste Fremdsprache (22.06.2023); HE Lehrplan Englisch G9 und KC Moderne Fremdsprachen
      (07/2023); LehrplanPLUS Bayern E5–E10 online (E6–E9 unter `…/englisch/1-fremdsprache`); KLP NRW Englisch
      Heft 3417 (2019)
- [x] Stränge bestimmt und begründet

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Bausteine mit Fundstellen und Stimmen als Daten; Skript prüft und erzeugt YAML und Recherche
- [x] Aufnahme nach Regel 3 (KMK oder zwei Länder oder direkte Voraussetzung); Ausschlüsse in Recherche 3.5

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] 223 Bausteine erfasst: grammatik 94, wortschatz 33, aussprache 21, landeskunde 33, texte 42
- [x] Prüfskript: ids, „Ich kann“, requires, keine späteren Richtstufen, keine Zyklen – OK
- [x] `map/englisch.yaml` und `.vibe/research-englisch.md` erzeugt
- [x] `npm run build` (Seite `_site/map/englisch/` mit 223 Bausteinseiten) und `npm test` laufen durch

## Commit
### Entrance Criteria
- `map/englisch.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Ein Commit `feat(map): the learning map Englisch` mit `.vibe`
- [x] Push `feat/map-englisch`; Bericht für den PR im Scratchpad (`reports/englisch.md`)
- [x] Nacharbeit: Gleichstand → frühere Stufe; Klumpen verteilt; Ontologie geprüft; YAML und Recherche neu erzeugt
- [x] `npm run build` und `npm test` laufen durch
- [x] Commit `fix(map): Englisch after the review of all maps`, Push; Abschnitt „Nacharbeit“ in `reports/englisch-update.md`

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
