# Development Plan: apps (feat/map-sport branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Sport für das Gymnasium Sek I (Jahrgang 5–10): `map/sport.yaml` nach dem Skill `map-research`.
Keine KMK-Bildungsstandards; Grundlage sind die Bewegungs- und Inhaltsfelder, die Hessen (KC Sport Gymnasium),
Bayern (LehrplanPLUS Basissport 5–10) und NRW (KLP Sport Gymnasium G9) teilen. Teil der Reihe „ein Fach je Branch“
(siehe `development-plan-feat-map-biologie.md`).

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den Pull Request legt die aufrufende Sitzung an.
- Workflow epcc. Architektur: ein neues Fach ist nur eine Datei `map/<fach>.yaml`; kein Code, keine Änderung an
  Plattform-Design oder arc42-Doku.
- Kein Lehrplan (`curricula/`): HE und NW nennen nur Doppel- bzw. Mehrfachstufen.
- Stränge: acht gemeinsame Bewegungsfelder (Fitness, Leichtathletik, Schwimmen, Turnen, Gestalten/Tanzen, Spielen,
  Fahren-Rollen-Gleiten mit Sport in der Natur, Kämpfen) und drei Wissensstränge aus den bewegungsfeldübergreifenden
  Inhalten (Gesundheit und Wagnis, Fairness und Regeln, Bewegungslernen und Leistung).
- `source`: Kernlehrplan NRW Sport (2019), weil seine Bewegungs- und Inhaltsfelder den Strängen am nächsten sind.
- Motorische Inhalte: Wissen (Regeln, Training, Puls, Aufwärmen, Ernährung, Baderegeln, Technikmerkmale) bekommt eigene
  Bausteine. Eine Fertigkeit wird Baustein, wenn zwei Länder sie nennen; ihr iCan verbindet Können und lehrbaren Kern.
- Richtstufe: Mehrheit; „7-10“ zählt für 7-8 und 9-10, „5-10“ für alle; Gleichstand: früheste Stufe nach requires.
- Bayern: nur Basissport zählt, nicht der Differenzierte Sportunterricht.

## Notes
- Quellen in `scratchpad/src-sport` (he.pdf, nw.pdf, nw-silp.pdf, by5–by10.html); Rohdaten und Generator in
  `scratchpad/gen-sport` (data.py, gen.py), nicht im Repository.
- Recherche mit Fundstellen und Stimmen: `.vibe/research-sport.md`.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder (physik, musik) und Biologie-Recherche gelesen
- [x] Quellen im Original geöffnet: KC Hessen Sport Gymnasium (2011), LehrplanPLUS Bayern Basissport 5–10 (online),
      KLP NRW Sport G9 Heft 3426 (2019), dazu SiLP NRW (nur Hinweis)
- [x] Gemeinsame Bewegungs- und Inhaltsfelder bestimmt; 11 Stränge

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen HE/BY/NW, Stimmen, requires) in `data.py`; `gen.py` stimmt ab,
      prüft ids, iCan, Zwei-Länder-Regel, requires, Zyklen und schreibt `map/sport.yaml` und die Tabellen der Recherche
- [x] Regel für motorische Inhalte festgelegt (Key Decisions)

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] `map/sport.yaml` erzeugt: 151 Bausteine (92 × 5-6, 46 × 7-8, 13 × 9-10); fitness 21, gesundheit 17,
      leichtathletik 16, schwimmen 12, turnen 19, gestalten-tanzen 11, spielen 24, fairness 9, bewegungslernen 8,
      fahren-natur 7, kaempfen 7; 7 schwach belegt
- [x] Geprüft: `npm run build` (Seite `/map/sport/` mit 151 Bausteinseiten), `npm test` (93 bestanden, 1 übersprungen,
      0 Fehler)
- [x] `.vibe/research-sport.md` geschrieben (Quellen, Tabellen, Entscheidungen, offene Punkte)

## Commit
### Entrance Criteria
- `map/sport.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur `map/sport.yaml`, Recherche und Plan; keine Modellbezeichnung, keine Debug-Reste
- [x] Bericht für den Pull Request im Scratchpad (`reports/sport.md`)
- [x] Commit auf `feat/map-sport` (conventional, Body mit Intent / Key changes) und Push

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
