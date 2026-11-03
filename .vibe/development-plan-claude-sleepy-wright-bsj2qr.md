# Development Plan: apps (claude/sleepy-wright-bsj2qr branch)

*Generated on 2026-11-03 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Layout der Lernlandkarte überarbeiten:
1. Startseite `/map/`: Die Lernlandkarten stehen im Vordergrund, nicht das Modelldiagramm. Reihenfolge: kurz „Was ist eine Lernlandkarte?“ → erfasste Karten → Zusammenhang mit den Apps → ehrlicher Block zur eigenen Methodik (Lehrpläne = Lehr-Reihenfolgen je Land; KMK-Kompetenzen nicht für jedes Fach) → Modell-Erklärung.
2. Fachkarte `/map/<fach>/`: „So liest du die Karte“ nicht mehr oben. Die Seite beginnt optisch mit der Karte; Erklärungen gibt es bei Bedarf.

## Key Decisions
- Workflow epcc. Deutsch und Englisch werden gleich angepasst.
- Das Modelldiagramm selbst bleibt unverändert, es rückt nur nach unten.
- Überschrift der Startseite: „Lernlandkarten“ (Mehrzahl), englisch „Learning maps“.
- „Sag uns Bescheid“ führt zu einem neuen GitHub-Issue in diesem Repository (`site.repo`/issues/new, mit Titel vorbelegt), wie bei den App-Seiten.
- Es gibt keinen dritten Punkt.
- Kein Tooltip im Diagramm (nach Test auf dem Handy verworfen): Ein Klick auf ein Kästchen öffnet den Dialog, das reicht.
- Zuerst ein Mockup (Wunsch der Nutzerin / des Nutzers), danach planen.

## Notes
- Startseite: `src/map.njk`; Fachkarte: `src/map-subject.njk`; Texte: `src/_data/de.js`, `src/_data/en.js` (`map.terms`, `map.subject`).

### Mockup (abgestimmt bis auf Tooltip)
- Startseite: H1 „Lernlandkarten“ + 1 Satz → Karten als große, ganz klickbare Kacheln mit Mini-Raster (Anteil geübter Bausteine) → „Karte und Apps“ in 3 Schritten + Link „App für eine Lücke bauen“ → Block „Ehrlich gesagt: Die Karte ist unsere eigene Methode“ → Trennlinie → Modell, Begriffe, Regeln wie bisher.
- Fachkarte: Untertitel entfällt; „So liest du die Karte“ wird ein Knopf (`<details>`) rechts in der Zeile mit der Legende; die lange Modus-Erklärung und die Liste der fehlenden Länder wandern in die Hilfe; oben bleibt nur ein Satz zur Richtstufe.
- Filter (Feedback): Die Checkbox „Nur Lücken zeigen“ entfällt. Die beiden Legenden-Einträge werden Filter-Knöpfe mit Anzahl („Eine App übt ihn 16“, „Lücke: noch keine App 111“). Klick = nur diese Art zeigen, die andere wird blass; nochmal klicken = alle. `aria-pressed`, Gruppe mit Namen. Ohne JS bleibt es eine reine Legende (wie heute: Filter nur mit JS, `src/assets/map.js`).
- Begriffe (Feedback, Tooltip später verworfen): Zeigen oder Fokus auf einen Knoten im Diagramm blendet die Erklärung ein (Tooltip, mit Hinweis „Klicken für Beispiel und Zusammenhänge“). Klick/Tippen öffnet wie bisher den Dialog. Die Liste „Die Begriffe“ wird eingeklappt („Alle Begriffe als Liste“, `<details>`); sie bleibt im HTML für Anker (`#strang` …) und ohne JS. Bei Aufruf mit Anker eines Begriffs klappt sie auf. Satz über dem Bild: „Zeige auf ein Kästchen oder tippe es an.“
- Achtung Umsetzung: Das Diagramm liegt in einem waagrecht scrollbaren Rahmen; der Tooltip darf dort nicht abgeschnitten werden (Popover-API oder Platzierung prüfen). „Richtstufe“ hat keinen Knoten, steht also nur in der Liste und auf der Fachkarte in der Hilfe.

## Entrance Criteria
- Plan: Mockup ist abgestimmt, offene Fragen sind geklärt.
- Code: Plan mit Aufgaben steht und ist bestätigt.
- Commit: Umsetzung fertig, Build und Tests grün, Seiten im Browser geprüft.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Betroffene Dateien gefunden
- [x] Mockup Startseite und Fachkarte erstellt (gebaute Seiten im Scratchpad umgeschrieben, Screenshots gezeigt)
- [x] Rückmeldung eingearbeitet: Filter-Knöpfe, Tooltip im Diagramm, offene Fragen geklärt

## Plan
### Umsetzungsstrategie
Nur Darstellung: Templates, Texte, `map.js`, CSS. Datenmodell (`lib/map.js`, `map/*.yaml`, JSON) bleibt unverändert. Ohne JS funktioniert weiter alles als Link (Grundsatz der Karte, siehe `map.js`-Kopf).

**Startseite `src/map.njk`** (Reihenfolge):
1. H1 `terms.headline` = „Lernlandkarten“ / „Learning maps“; Lead neu, ein Satz.
2. „Diese Karten gibt es schon“: Kacheln, ganze Kachel ein Link. Inhalt: Name, Mini-Raster, „N Stränge · M Bausteine“, „K davon übt schon eine App“, ggf. „1 Lehrplan erfasst“, „Karte öffnen →“. Zahlen aus `map.subjects` (Summe `strands[].covered/total`). Mini-Raster: 32 Zellen, Anteil gerundet, `aria-hidden` (die Zahl steht als Text da). Darunter „Weitere Fächer folgen.“
3. „Karte und Apps“: drei Schritte (`<ol>`), Link „Eine App für eine Lücke bauen“ → `/build/`.
4. „Ehrlich gesagt: Die Karte ist unsere eigene Methode“ (`id="methode"`): Text wie im Mockup; Link „Sag uns Bescheid“ → `{{ site.repo }}/issues/new?title=…` (Titel vorbelegt, urlencode).
5. Trennlinie, dann „Wie die Karte aufgebaut ist“ (Diagramm unverändert), Satz „Zeige auf ein Kästchen oder tippe es an.“
6. „Alle Begriffe als Liste“ in `<details>` (`id="begriffe"` bleibt). Regeln und JSON-Hinweis wie bisher.

**Tooltip im Diagramm** (`map.js`, `apps.css`) – später verworfen, siehe Code-Notizen:
- Ein gemeinsames Element `<div role="tooltip" data-map-tip hidden>` auf der Seite; `map.js` füllt es aus der Definition (`[data-dialog-body] p:first-child`) und setzt es `position: fixed` an den Knoten (unter dem Knoten, im Fenster gehalten) → wird nicht vom Scroll-Rahmen abgeschnitten.
- Zeigen: `pointerenter` (nur `pointerType` mouse/pen) und `focus` per Tastatur; verbergen: `pointerleave` (mit kurzer Verzögerung, Tooltip selbst überfahrbar), `blur`, `Escape`, Scrollen. WCAG 1.4.13 (dismissible, hoverable, persistent). `aria-describedby` am Knoten, solange sichtbar.
- Klick/Enter öffnet wie bisher den Dialog; Tooltip verschwindet dabei.
- Ruft man `/map/#<begriff>` auf (oder klickt einen Anker darauf), öffnet `map.js` das `<details>` und scrollt hin. Ohne JS: `<details>` öffnet sich in aktuellen Browsern bei Fragment-Navigation nicht überall → Liste ohne JS offen lassen? Entscheidung: `<details open>` im HTML, `map.js` schließt sie beim Laden, außer der Anker zeigt in die Liste.

**Fachkarte `src/map-subject.njk`**:
- Untertitel (`S.description` als `<p>`) entfällt; `description` bleibt als Meta.
- Panel „So liest du die Karte“ entfällt oben.
- Lehrplanwahl wie bisher (Dropdown mit JS, Links ohne JS); Liste „Noch nicht erfasst“ wandert in die Hilfe.
- Modus-Zeile kurz (`S.mode.richtstufeShort` bzw. kurze Lehrplan-Fassung „Du siehst den Lehrplan X: N von M Bausteinen eingeordnet.“); lange Fassung in die Hilfe.
- Eine Zeile: Filter-Knöpfe links, Knopf „? So liest du die Karte“ rechts (`<details>`/`<summary>`; Inhalt: die vier Begriffe, lange Modus-Erklärung, fehlende Länder, Links „Alle Begriffe…“ und „Warum diese Methode?“ → `/map/#methode`).
- Filter: Ohne JS eine reine Legende (zwei `<p>` wie heute). Mit JS ersetzt `map.js` sie durch zwei Knöpfe `aria-pressed` in `role="group"` mit Namen („Bausteine zeigen“). Zustand `all | covered | gap`; Klick = nur diese Art, nochmal = alle. Zahlen: Anzahl Bausteine der Art im Fach (aus den Daten ins HTML, `data-count`). Checkbox `data-map-gaps` und Text `onlyGaps` entfallen.

**Texte** `src/_data/de.js` und `en.js` (`map.terms`, `map.subject`): neue Schlüssel für Lead, Kacheln, Schritte, Methodik, Issue-Titel, Tooltip-Hinweis, Liste, Filter-Gruppe, kurze Modus-Zeile, Hilfe-Knopf; entfallende Schlüssel löschen (`onlyGaps`, `subjects`, `definitions` → umbenannt). Sprache nach ISO 24495 (kurze Sätze, du-Form wie bisher).

**Tests** `test/map.e2e.test.mjs`:
- „Nur Lücken zeigen“ → Filter-Knöpfe: Klick „Lücke“ verbirgt geübte, zeigt Lücken, `aria-pressed`; zweiter Klick zeigt alle; Klick „Eine App übt ihn“ verbirgt Lücken.
- Tooltip: Hover und Tastatur-Fokus auf Knoten zeigen Text, Escape verbirgt; Enter öffnet weiter den Dialog (bestehender Test).
- `/map/#strang` öffnet die Begriffsliste.
- Startseite: Reihenfolge der Abschnitte (Karten vor Diagramm), Issue-Link zeigt auf `site.repo`.
- Fachkarte: Hilfe zu, nach Klick offen; ohne JS Legende sichtbar.
- Kopfkommentare in `map.njk`, `map-subject.njk`, `map.js`, Test anpassen.

**Risiken / Randfälle**
- Fach ohne geübte Bausteine (Musik: 0): Raster leer, Text „0 davon …“ → ok, ehrlich.
- Filter „nur geübte“ bei 0 → Knopf deaktivieren, wenn Anzahl 0.
- Lehrplan-Ansicht: Bausteine kommen ggf. mehrfach vor („wieder in Klasse …“); Filter wirkt auf alle `li`, Zählung bleibt pro Baustein.
- Englische Seiten: gleiche Struktur, `en.js` vollständig.

### Tasks
- [x] Plan mit Nutzer abgestimmt (Begriffsliste ohne JS offen, mit JS zu)

### Completed
- [x] Betroffene Stellen und Tests gesichtet (`src/map.njk`, `src/map-subject.njk`, `src/assets/map.js`, `src/assets/apps.css`, `src/_data/{de,en}.js`, `test/map.e2e.test.mjs`)

## Code
### Notizen aus der Umsetzung
- `covered` (Anzahl geübter Bausteine) kommt neu aus `src/_data/map.js` in die Fach-Ansicht; das JSON für Assistenten bleibt unverändert.
- Namenskonflikt: `.map-bar` ist schon der Fortschrittsbalken der Stränge → Leiste heißt `.map-toolbar`. `.map-mode` entfällt (nicht mehr benutzt).
- Tooltip folgt beim Scrollen dem Knoten statt zu verschwinden (ein Scroll direkt nach dem Zeigen hätte ihn sonst sofort versteckt).
- Begriffsliste: mit JS zu, außer der Anker zeigt hinein; ein späterer Anker-Wechsel öffnet sie, schließt sie aber nie.

- Feedback nach der ersten Umsetzung: Der aufklappende Hilfe-Knopf sprang und trennte die Filter; zu viele Arten von Elementen unter der Überschrift. Neu: „So liest du die Karte“ steht als Link rechts neben der Überschrift (bricht auf schmalen Bildschirmen unter sie) und öffnet die Hilfe als Dialog (vorhandener Dialog-Mechanismus, `data-opens`). Ohne JS springt der Link zur Hilfe am Seitenende. Der Lehrplan ist eine Anzeige-Option in derselben Zeile wie die Filter-Knöpfe; die Beschriftung „Wann ist was dran?“ ist nur noch für Screenreader da. Die Modus-Zeile fällt weg, ihr langer Text steht in der Hilfe (`#modus`, weiter per `aria-describedby` am Auswahlfeld).

### Tasks
- [x] Hilfe neben die Überschrift, als Dialog; Lehrplan und Filter in einer Zeile; Tests angepasst
- [x] Tooltip im Diagramm wieder entfernt: Auf dem Handy kamen beim Antippen Tooltip und Dialog zugleich; der Dialog reicht. Satz über dem Bild wieder „Klicke auf ein Kästchen im Bild …“.
- [x] Legende/Filter kurz: „Abgedeckt“ / „Lücke“ (en: „Covered“ / „Gap“); die Hilfe erklärt die Farben mit diesen Wörtern
- [x] Texte de/en: neue Schlüssel, alte entfernen
- [x] Startseite `map.njk`: neue Reihenfolge, Kacheln mit Zahlen, Schritte, Methodik-Block mit Issue-Link, Begriffsliste in `<details>`
- [x] Tooltip für Diagramm-Knoten (`map.js`, `apps.css`) und Öffnen der Liste bei Anker
- [x] Fachkarte `map-subject.njk`: Untertitel und Panel raus, kurze Modus-Zeile, Hilfe-`<details>`
- [x] Filter-Knöpfe statt Checkbox (`map.js`, `apps.css`, Zahlen im HTML)
- [x] Kommentare in Templates und `map.js` nachziehen
- [x] E2E-Tests anpassen und ergänzen; `npm test` (94 grün, 0 rot), `npm run build`, `npm run check` ok
- [x] Sichtprüfung im Browser: Desktop, Handy, hell/dunkel, ohne JS, englisch

### Completed
*None yet*

## Commit
### Tasks

### Completed
- [x] Aufräumen: keine Debug-Ausgaben, keine TODO/FIXME im Diff
- [x] Doku geprüft: `docs/learning-map-contract.md` beschreibt das Datenformat, das unverändert ist; die Kopfkommentare von `map.njk`, `map-subject.njk`, `map.js` und dem E2E-Test beschreiben den Endstand
- [x] Tests: `npm test`, `npm run check`, Pre-Push (Build, Check, Offline-E2E) grün
- [x] Commits des Branches zu einem zusammengefasst, Pull Request geöffnet



---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
