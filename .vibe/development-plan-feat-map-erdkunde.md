# Development Plan: apps (feat/map-erdkunde branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Erdkunde für das Gymnasium Sek I (Jahrgang 5–10): `map/erdkunde.yaml` nach dem Skill `map-research`.
Keine KMK-Standards; gemeinsamer Bezug: DGfG-Bildungsstandards Geographie (MSA, 10. Aufl. 2020); Länder: KC und
Lehrplan G9 Hessen, LehrplanPLUS Bayern Geographie, KLP NRW Erdkunde G9. Teil der Reihe der Sek-I-Fächer
(siehe `development-plan-feat-map-biologie.md`).

## Key Decisions
- Autonom bis zum Push (Nutzer/in, 2026-11-07); den PR legt die aufrufende Sitzung an.
- Architektur: nur eine neue Datei `map/erdkunde.yaml`; kein Code, kein neues Konzept, keine Änderung an
  Plattform-Design oder arc42-Doku. Kein Lehrplan (`curricula/`).
- `source` = DGfG-Standards: einziger bundesweiter Standard des Fachs, Grundlage des KC Hessen. Sie nennen Inhalte nur
  als Beispiele und sind nicht verbindlich; daher keine Stimme und kein Aufnahmegrund, nur Bezug (Spalte DG).
- Stränge = die Inhaltsbereiche, die die drei Länder teilen: `orientierung`, `erde`, `klima`, `landwirtschaft`,
  `wirtschaft`, `siedlung`, `entwicklung`.
- Zählweise: KC Hessen nur „Ende 9/10“ → Spanne 5-10; LP Hessen G9 mit Jahrgängen (5, 6, 8, 9); BY Geo5/7/10
  (Geo11 nach Jg 10 zählt nicht); NW Stufe 1 = 5-6, Stufe 2 = 7-10.
- Gleichstand (erste Fassung): requires, dann SiLP-Hinweis (NRW-Umsetzungsbeispiel), dann die frühere Stufe; Stimmen
  5-6 und 9-10 oder drei verschiedene → die mittlere.
- Nacharbeit nach der Sichtung aller Karten (Nutzer/in, 2026-11-07, verbindlich): Gleichstand → die frühere Stufe,
  außer requires erzwingt die spätere; das SiLP stimmt nie mit und entscheidet nie. Neu abgestimmt: die 15 bisher
  über das SiLP entschiedenen Bausteine. Geändert: `schalenbau` 7-8 → 5-6; `bevoelkerungswachstum`, `altersstruktur`
  9-10 → 7-8; daraus `tragfaehigkeit` 9-10 → 7-8 (Mehrheit, die Begründung über requires entfällt). Die übrigen 12
  bleiben 7-8, nur mit neuer Begründung.
- Nacharbeit: Querverweis `# Siehe auch: biologie/klimawandel` über `klimawandel-ursachen` und `klimawandel-folgen`
  (Biologie verweist zurück). Regel 2 (Fremdsprachen) gilt nicht; gemeinsame Strang-ids betreffen Erdkunde nicht.
  Ids bleiben.

## Notes
- Vorbilder: `map/physik.yaml` (Kommentare), `map/musik.yaml` (Fach ohne KMK-Standards).
- Recherche mit Quellen, Tabellen, Entscheidungen und offenen Punkten: `.vibe/research-erdkunde.md`.
- DGfG-PDF nur als Kopie beim IQSH erreichbar (geographie.de 404, dgfg.org Cloudflare-Sperre).

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Branch `feat/map-erdkunde` von `origin/main`
- [x] Quellen gelesen: DGfG MSA (2020); KC Hessen Erdkunde Gymnasium (2011) und Lehrplan Erdkunde G9 Hessen;
      LehrplanPLUS Geo5, Geo7, Geo10 (Geo11 als Hinweis; Geo6, 8, 9 gibt es nicht); KLP NRW Erdkunde Heft 3408
      (2019) und SiLP (2020)
- [x] Prüfung: DGfG als `source` geeignet (Begründung in der Recherche, 1.1)
- [x] Stränge festgelegt (Recherche 1.2)

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Rohdaten je Baustein (Fundstellen, Stimmen, requires) als Skript im Scratchpad (`gen-erdkunde/data.py`)
- [x] Prüfskript (ids, „Ich kann“, mindestens zwei Länder, requires, Richtstufen, Zyklen) und Generator für YAML und
      Recherche-Tabellen

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] 128 Bausteine: orientierung 23, erde 19, klima 24, landwirtschaft 18, wirtschaft 15, siedlung 13,
      entwicklung 16 (51 × 5-6, 53 × 7-8, 24 × 9-10; 7 schwach belegt); nach der Nacharbeit 52 × 5-6, 55 × 7-8, 21 × 9-10
- [x] `map/erdkunde.yaml` erzeugt; `.vibe/research-erdkunde.md` erzeugt
- [x] `npm run build` (Seite `_site/map/erdkunde/` entsteht) und `npm test` laufen durch

## Commit
### Entrance Criteria
- `map/erdkunde.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Ein Commit `feat(map): the learning map Erdkunde`, Push nach `origin/feat/map-erdkunde`
- [x] Bericht für den PR im Scratchpad (`reports/erdkunde.md`)
- [x] Nacharbeit: Gleichstände ohne SiLP neu abgestimmt, Kommentare angepasst, Querverweis Biologie; `npm run build`
      und `npm test` laufen durch; Commit `fix(map): Erdkunde after the review of all maps`, Push
- [x] Abschnitt „Nacharbeit“ für den PR im Scratchpad (`reports/erdkunde-update.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
