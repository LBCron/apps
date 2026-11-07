# Development Plan: apps (feat/map-franzoesisch branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Französisch für das Gymnasium Sek I (Jahrgang 5–10): `map/franzoesisch.yaml` nach dem Skill
`map-research` (KMK-Bildungsstandards erste Fremdsprache ESA/MSA 2023; Hessen, Bayern, NRW). Teil der Reihe aus
`feat/map-biologie`; ein Fach je Branch.

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07, siehe Plan `feat/map-biologie`); den PR legt die aufrufende Sitzung an.
- Architektur: ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; `lib/map.js` lädt alle Dateien in `map/`.
  Kein Code, kein neues Konzept, also keine Änderung an Plattform-Design oder arc42-Doku.
- Kein Lehrplan (`curricula/`), nur `map/franzoesisch.yaml`.
- Quelle (`source`): KMK-Bildungsstandards für die erste Fremdsprache (Englisch/Französisch), ESA/MSA, i. d. F. vom
  22.06.2023. Die KMK nennt keine einzelnen sprachlichen Mittel; die Bausteine kommen aus zwei von drei Ländern.
- Länderpläne für Französisch als **zweite Fremdsprache**: HE Lehrplan G9 Teil B 2 (Jg 7–10) mit KC Moderne
  Fremdsprachen 2023; BY LehrplanPLUS F2 (Jg 6–10); NW KLP Heft 3410 (2019), Kap. 2.2 (erste/zweite Stufe).
  Grund: häufiger Fall am Gymnasium, Stufen der Länder vergleichbar. (Folge „keine Richtstufe 5-6“: durch die
  Nacharbeit ersetzt, siehe unten.)
- Erste Runde (ersetzt): Stränge `aussprache-orthografie` und `soziokulturelles`; NW-Stimme S1 → 7-8, S2 → 9-10;
  Gleichstand 5-6/7-8 → 7-8. Ergebnis war 0 / 127 / 32 Bausteine in 5-6 / 7-8 / 9-10.
- **Nacharbeit nach der Durchsicht aller 15 Karten** (Nutzer/in, verbindlich, 2026-11-07):
  - Stränge nach der Ontologie: `grammatik`, `wortschatz`, `aussprache` (Aussprache und Rechtschreibung),
    `landeskunde` (Länder und Kulturen), `texte` (Texte und Medien). `texte` ist neu: KMK 2.3, HE Textverstehen/
    Texterstellen, BY LB 3 und NW TMK tragen den Bereich und nennen Textsorten; 27 neue Bausteine,
    `bande-dessinee` wechselt aus `landeskunde` (id bleibt).
  - Richtstufe = Lernjahr-Drittel ⌊3·(y − ½)/n⌋ + 1: HE ab Jg 7 (n = 4), BY ab Jg 6 (n = 5), NW ab Jg 7 mit zwei
    Stufen ohne Jahrgang (S1 → 5-6 und 7-8, S2 → 7-8 und 9-10); HE-KC Ende Jg 8 → 5-6 und 7-8, Ende Jg 10 → alle.
    Das SiLP stimmt nicht mit.
  - Gleichstand → frühere Stufe, außer requires erzwingt die spätere.
  - Klumpen: hält eine Stufe mehr als die Hälfte eines Strangs, wandern Bausteine entlang requires in die nächste
    Stufe (Kriterien: Stimme für die nächste Stufe, kleinster Abstand, Ende der Kette, längste Kette); 22 Bausteine,
    Begründung je Baustein im Kommentar.
  - Querverweise `# Siehe auch:` zu Erdkunde und Geschichte.

## Notes
- Vorbild: `map/physik.yaml`, `map/musik.yaml`; Recherche nach `.vibe/research-biologie.md`.
- Rohdaten und Generator im Scratchpad (`gen-franzoesisch/data.py`, `gen.py`; Nacharbeit: `gen2-franzoesisch/`
  `texte.py`, `core.py`, `gen2.py`), nicht im Repository.
- Recherche mit Quellen, Tabellen, Entscheidungen, offenen Punkten: `.vibe/research-franzoesisch.md`.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder gelesen
- [x] Quellen geladen und gelesen: KMK erste Fremdsprache 2023; HE Lehrplan G9 Französisch und KC Moderne
      Fremdsprachen 2023; BY LehrplanPLUS F2 6–10 (Adressen für 8 und 10 über die Suche gefunden); NW KLP 3410 und
      SiLP 2020
- [x] Stränge aus den KMK-Bereichen der sprachlichen Mittel und der interkulturellen Kompetenz abgeleitet

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen, Stimmen, requires, Stichentscheid) → Generator schreibt YAML und
      Tabellen der Recherche; Prüfskript im Generator (ids, „Ich kann“, requires, Richtstufen, Zyklen)
- [x] Zählweise der Stimmen und Regeln für Gleichstand festgelegt (Key Decisions)

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] `map/franzoesisch.yaml` erzeugt: 159 Bausteine (grammatik 88, wortschatz 35, aussprache-orthografie 15,
      soziokulturelles 21); 127 × 7-8, 32 × 9-10; 10 schwach belegt
- [x] Nur von einem Land genannte Inhalte ohne Voraussetzungsrolle entfernt (Liste in der Recherche, Abschnitt 4)
- [x] Geprüft: Prüfskript OK, `npm run build` (Seite `/map/franzoesisch/` mit 159 Bausteinseiten), `npm test`
      (93 bestanden, 1 übersprungen, 0 Fehler)
- [x] `.vibe/research-franzoesisch.md` und Bericht für den PR geschrieben
- [x] Nacharbeit: Strang-ids `aussprache`, `landeskunde`; Strang `texte` (28 Bausteine) aus KMK 2.3, HE, BY LB 3, NW TMK
- [x] Nacharbeit: Richtstufen nach Lernjahr-Dritteln neu berechnet, Klumpen verteilt: 84 / 75 / 27 in 5-6 / 7-8 / 9-10
- [x] Nacharbeit: Recherche (Abschnitte 2–5, Tabellen) und Bericht „Nacharbeit“ für den PR
- [x] Nacharbeit geprüft: `npm run build` (186 Bausteinseiten), `npm test` (93 bestanden, 1 übersprungen, 0 Fehler)

## Commit
### Entrance Criteria
- `map/franzoesisch.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur `map/franzoesisch.yaml`, Recherche und Plan; keine Modellbezeichnung, keine Debug-Reste
- [x] Commit auf `feat/map-franzoesisch` (conventional, Body mit Intent / Key changes) und Push
- [x] Nacharbeit: neuer Commit `fix(map): Französisch after the review of all maps` und Push (kein amend)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
