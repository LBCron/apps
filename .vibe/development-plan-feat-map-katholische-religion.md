# Development Plan: apps (feat/map-katholische-religion branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Katholische Religion für das Gymnasium Sek I (Jahrgang 5–10): `map/katholische-religion.yaml` nach dem
Skill `map-research`. Keine KMK-Standards; gemeinsamer Bezug sind die Kirchlichen Richtlinien der Deutschen
Bischofskonferenz; Länder: Hessen, Bayern, NRW. Teil der Reihe aus `feat/map-biologie` (ein Fach je Branch).

## Key Decisions
- Autonom (Nutzer/in, 2026-11-07): keine Stopps an Phasengrenzen, bis zum Push; den PR legt die aufrufende Sitzung an.
- Architektur: ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; `lib/map.js` lädt alle Dateien in `map/`.
  Kein Code, kein neues Konzept, also keine Änderung an Plattform-Design oder arc42-Doku.
- Quelle: DBK Nr. 116 (24.06.2025) statt Nr. 78 (2004), weil sie die Fassung 2004 fortschreibt (neueste Fassung).
  Die Länderpläne folgen noch 2004; Fundstellen nennen beide.
- Stränge = die sechs Bereiche der DBK 2025; NRW IF6 und IF7 zusammen im Strang `religionen`.
- Nacharbeit (Nutzer/in nach Sichtung aller Karten, 2026-11-07): Strang-ids nach der Ontologie der Religionslehren
  (`mensch`, `gott`, `bibel`, `jesus-christus`, `kirche`, `religionen`, `ethik`), deutsche Namen nach DBK bleiben.
  Neuer Strang `ethik` („Ethik und Verantwortung“): alle drei Länder nennen Inhalte zum Handeln (HE Mensch und Welt,
  BY KR9 LB1/KR10 LB1, NW IF1); zehn Bausteine aus `mensch` verschoben. Gleichstand → frühere Stufe (geprüft, 18 Fälle).
  Baustein-ids bleiben; 86 Kommentare `# Siehe auch: evangelische-religion/<id>`.
- Sprache neutral: Wissen über Glauben und Praxis, kein Bekenntnis (Abstimmung mit Evangelischer Religion).
- Gleichstand ohne zwingendes requires: die frühere Stufe (Recherche 4.3).
- Kein Lehrplan (`curricula/`): HE und NW nennen nur Doppelstufen bzw. Spannen.

## Notes
- Vorbilder: `map/physik.yaml`, `map/musik.yaml` (Fach ohne KMK-Standards).
- Recherche: `.vibe/research-katholische-religion.md`. Generator (data.py, render.py) bleibt im Scratchpad.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Quellen im Original gelesen: DBK Nr. 116 (2025) und Nr. 78 (2004); KC Hessen Kath. Religion Gymnasium
      (Ausgabe 2026, Inhalt wie 2011); LehrplanPLUS Bayern KR5–KR10 (online); KLP NRW Kath. Religionslehre G9
      Heft 3403 (2019) mit SiLP (2020)
- [x] Stränge festgelegt: sechs DBK-Bereiche
- [x] Kandidaten für Bausteine mit Fundstellen und Stimmen notiert

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie: Rohdaten (data.py) → Generator (render.py) prüft ids, „Ich kann“, requires, Richtstufen, Zyklen und
      schreibt YAML und Tabellen der Recherche
- [x] Abstimmungsregel umgesetzt: Mehrheit; drei verschiedene → Mitte; Gleichstand → requires, sonst frühere Stufe

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] `map/katholische-religion.yaml` erzeugt: 121 Bausteine (mensch-und-welt 20, frage-nach-gott 14,
      bibel-und-tradition 16, jesus-christus 20, kirche-und-gemeinde 29, religionen 22)
- [x] `.vibe/research-katholische-religion.md` mit Quellen, Tabellen, Entscheidungen, offenen Punkten
- [x] `npm run build` (Seite `_site/map/katholische-religion/` mit 121 Bausteinseiten) und `npm test`

## Commit
### Entrance Criteria
- `map/katholische-religion.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur Karte, Recherche und Plan; keine Modellbezeichnung
- [x] Commit auf `feat/map-katholische-religion` und Push
- [x] Bericht für den PR im Scratchpad (`reports/katholische-religion.md`)
- [x] Nacharbeit: Strang-ids umbenannt, Strang `ethik` angelegt, Gleichstände geprüft, Querverweise auf Evangelische
      Religion; Recherche und Karte neu erzeugt; `npm run build` und `npm test`; Commit und Push;
      Abschnitt „Nacharbeit“ (`reports/katholische-religion-update.md`)

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
