# Development Plan: apps (feat/map-ethik branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Ethik für das Gymnasium Sek I (Jahrgang 5–10): `map/ethik.yaml` nach dem Skill `map-research`. Es gibt
keine KMK-Bildungsstandards; Grundlage sind die Inhaltsbereiche, die Hessen, Bayern und NRW teilen. Teil der Reihe
„alle übrigen Sek-I-Fächer“ (siehe `development-plan-feat-map-biologie.md`).

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den PR legt die aufrufende Sitzung an.
- Architektur: ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; kein Code, kein neues Konzept, keine Änderung
  an Plattform-Design oder arc42-Doku.
- Quellen: KC Hessen Ethik Gymnasium (2011) mit Lehrplan Ethik G9 Hessen (Jahrgänge), LehrplanPLUS Bayern Ethik
  (Eth5–Eth10, online), KLP Praktische Philosophie NRW (Heft 5017, 2008) als Ersatzfach für Ethik in NRW.
- Stränge = die sieben Inhaltsbereiche, die NRW (Fragenkreise) und Hessen (Inhaltsfelder) fast gleich führen; Bayerns
  vier Gegenstandsbereiche verteilen sich darauf. „Freiheit und Würde“ (HE) geteilt: Freiheit → `ich-und-identitaet`,
  Würde → `recht-und-gerechtigkeit`.
- Hessen-Stimme: Jahrgang im Lehrplan G9; nur wo er nichts nennt, die Stufe des KC (wie bei Musik).
- NRW-Stimme: „5/6“ oder „7–9“ (Kap. 4, Gymnasium) = Spanne „7-10“, zählt für 7-8 und 9-10.
- Gleichstand: früheste Stufe, die requires zulässt (wie Biologie, offener Punkt dort).
- Kant und Utilitarismus aufgenommen (Wunsch des Auftrags), als schwach belegt markiert.
- `source` = KC Hessen Ethik (wichtigster gemeinsamer Bezug, wie bei Musik).
- Kein Lehrplan (`curricula/`).

## Notes
- Vorbilder: `map/physik.yaml`, `map/musik.yaml`; Format: `docs/learning-map-contract.md`.
- Recherche mit Quellen, Tabellen, Entscheidungen und offenen Punkten: `.vibe/research-ethik.md`.
- Rohdaten und Generator im Scratchpad (`gen-ethik/data.py`, `gen.py`), nicht im Repository.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Repository erkundet: Vertrag, Skill `map-research`, Vorbilder Physik, Musik, Biologie
- [x] Quellen gelesen: KC Hessen Ethik Gymnasium (2011), Lehrplan Ethik G9 Hessen, LehrplanPLUS Bayern Ethik 5–10
      (online), KLP Praktische Philosophie NRW (2008, Kap. 4 Gymnasium)
- [x] Stränge festgelegt: `ich-und-identitaet`, `zusammenleben`, `gutes-handeln`, `recht-und-gerechtigkeit`,
      `natur-und-technik`, `wahrheit-und-medien`, `religionen-und-sinn`

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen HE/BY/NW, Stimmen, requires) in `data.py`; `gen.py` stimmt ab,
      prüft (ids, „Ich kann“, requires, Zyklen, keine spätere Stufe) und schreibt `map/ethik.yaml` und die Tabellen
- [x] Aufnahme: KMK fehlt, also zwei von drei Ländern oder direkte Voraussetzung; was nur ein Land nennt, steht in der
      Recherche (3.3)

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] 141 Bausteine erfasst und abgestimmt: ich-und-identitaet 16, zusammenleben 22, gutes-handeln 17,
      recht-und-gerechtigkeit 24, natur-und-technik 15, wahrheit-und-medien 22, religionen-und-sinn 25
      (48 × 5-6, 50 × 7-8, 43 × 9-10; 7 schwach belegt)
- [x] `map/ethik.yaml` erzeugt, Kommentar je Baustein mit Fundstellen und Abstimmung
- [x] Geprüft: `gen.py` ohne Fehler; `npm run build` (Seite `/map/ethik/` mit 141 Bausteinseiten); `npm test`
      (93 bestanden, 1 übersprungen, 0 Fehler)
- [x] `.vibe/research-ethik.md` geschrieben; Bericht für den PR im Scratchpad (`reports/ethik.md`)

## Commit
### Entrance Criteria
- `map/ethik.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur `map/ethik.yaml`, Recherche und Plan; keine Modellbezeichnung, keine Debug-Reste
- [x] Commit auf `feat/map-ethik` (conventional, Body mit Intent / Key changes) und Push

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
