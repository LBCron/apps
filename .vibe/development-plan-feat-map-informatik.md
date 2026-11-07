# Development Plan: apps (feat/map-informatik branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Informatik für das Gymnasium Sek I (Jahrgang 5–10): `map/informatik.yaml` nach dem Skill `map-research`.
Ohne KMK-Standards: gemeinsamer Bezug sind die GI-Bildungsstandards Informatik Sek I (2025); Länder Hessen, Bayern, NRW.
Teil der Reihe „ein Fach je Branch“ (siehe `development-plan-feat-map-biologie.md`).

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den PR legt die aufrufende Sitzung an. Keine Stopps an Phasengrenzen.
- Architektur: Ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; `lib/map.js` lädt alle Dateien in `map/`.
  Kein Code, kein neues Konzept, keine Änderung an Plattform-Design oder arc42-Doku.
- Keine KMK-Bildungsstandards Informatik (KMK-Seite geprüft, Stand 11/2026). `source` = GI-Bildungsstandards Sek I,
  Januar 2025 (ersetzen die Fassung 2008). Die GI gibt die Stränge und darf mit einem Land die Aufnahme tragen
  („schwach“); sie gibt keine Stimme für die Richtstufe.
- Stränge = die fünf GI-Inhaltsbereiche: `daten`, `algorithmen`, `sprachen-automaten`, `informatiksysteme`,
  `gesellschaft`. KI kein eigener Strang (GI verteilt sie; nur NRW führt sie als Inhaltsfeld).
- Hessen: KC Informatik Wahlunterricht Sek I (2021, ab Jg 7, Ende 9/10) zählt als „7-10“; das KC „KI und Digitale Welt“
  Jg 5/6 ist ein Entwurf (Oktober 2026) und nur Hinweis.
- Bayern: NT6, NT7 (alle), Informatik 9/10 (NTG). NRW: KLP Klasse 5/6 (Pflicht, → 5-6) und WP Informatik (2023, → 9-10).
- Gleichstand: früheste der gleichauf liegenden Stufen, die die `requires` erlauben.
- Objektorientierung (nur Bayern) nicht aufgenommen; Liste der Ein-Land-Inhalte in der Recherche (offene Punkte).
- Kein Lehrplan (`curricula/`).

## Notes
- Recherche mit Quellen, Tabellen je Strang, Entscheidungen und offenen Punkten: `.vibe/research-informatik.md`.
- Rohdaten und Generator im Scratchpad (`gen-informatik/data.py`, `gen.py`), nicht im Repository (wie Biologie).
- Ergebnis: 96 Bausteine; daten 36, algorithmen 18, sprachen-automaten 8, informatiksysteme 19, gesellschaft 15;
  28 × 5-6, 29 × 7-8, 39 × 9-10; 20 schwach belegt.

## Explore
### Entrance Criteria
- Auftrag und Regeln des Fachs liegen vor.

### Completed
- [x] Created development plan file
- [x] Skill `map-research`, Vertrag, Vorbilder (physik, musik, Recherche Biologie) gelesen
- [x] KMK geprüft: keine Bildungsstandards Informatik
- [x] Quellen im Original gelesen: GI 2025; HE KC Wahlunterricht 2021 und Entwurf KI und Digitale Welt (10/2026);
      BY LehrplanPLUS NT6, NT7, Inf9, Inf10; NRW KLP 5/6 (2021) und WP (2023)
- [x] Stränge und Kandidaten notiert

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Completed
- [x] Strategie: Rohdaten je Baustein (Fundstellen, Stimmen, requires) → Generator für YAML und Tabellen;
      Abstimmung und Prüfungen (ids, „Ich kann“, requires, Stufen, Zyklen) im Generator
- [x] Aufnahme- und Abstimmungsregeln festgelegt (siehe Key Decisions)

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Regeln für Richtstufen sind festgelegt.

### Completed
- [x] Rohdaten erfasst (96 Bausteine) und `map/informatik.yaml` erzeugt
- [x] `.vibe/research-informatik.md` geschrieben
- [x] `npm run build` und `npm test` laufen durch; `_site/map/informatik/` entsteht

## Commit
### Entrance Criteria
- `map/informatik.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Completed
- [x] Ein Commit mit `.vibe`, Push nach `origin/feat/map-informatik`
- [x] Bericht für den PR im Scratchpad (`reports/informatik.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
