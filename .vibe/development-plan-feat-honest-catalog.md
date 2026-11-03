# Development Plan: apps (feat/honest-catalog branch)

*Generated on 2026-11-02 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Besucherinnen und Besuchern charmant und ehrlich erklären: Die Apps auf lernapps.net bauen Menschen, denen digitale Bildung wichtig ist. Es gibt kein Unternehmen und keine Redaktion, darum fehlen Inhalte. Wer nichts findet, kann mit KI und unseren Bauhilfen selbst eine App bauen, für eine Prüfung oder einen ganzen Lehrplan, auch ohne Technikwissen.
## Key Decisions
- Ablauf: epcc. Erste Phase liefert Mockups zur Abstimmung, noch kein Code.
- Position der Einladung: Mockup 3b. Bei gesetztem Filter oder Eingabe mit Treffern eine Zeile unter der Trefferzahl („Nichts Passendes dabei? Bau dir selbst eine →“, Link mit Thema und Klasse). Der ausführliche Kasten bleibt am Ende der Liste. Kein Treffer: Kasten aus Mockup 2. Verworfen: Kasten zwischen den Treffern (wirkt wie Werbung, unterbricht, springt).
- Umfang: Mockups 1, 2, 3 (Texte), 3b und 4. Mockup 5 (Variante bauen) später als eigenes Feature.
- Rückmeldung zum PR (Seite „Bauen“): Zielgruppe sind Menschen, die für den Katalog bauen. Anlässe-Kästen („nächste Arbeit“, „Lehrplan“) entfernt; „Wer was mitbringt“ ohne Kästen; npx-Befehl und Skill-Hinweis unter dem Auftrag entfernt (Schnellweg steht in llms.txt, der Befehl bleibt im Auftrag); unter dem Kopieren Hinweis auf /practice/ („Üben“) für Üben mit eigenem Material. Test `entry-point.e2e` liest den Befehl jetzt aus dem Auftrag.
- Rückmeldung 2: „Direkt zum Eintragen“ verlinkt /enter/ statt nach unten zu springen. Auf /enter/ kommen die Wege vor „Deine App bleibt deine“ (der Notfall-Weg per E-Mail bleibt direkt bei den Wegen). Der Skill wird den Menschen nicht genannt (Detail für den Assistenten, steht nur im Auftrag); ungenutztes `site.tooling.skill` entfernt. Tests in `entry-point.e2e` angepasst (Skill-Link auf /build/ wurde schon in Rückmeldung 1 entfernt und brach den Test; der Pre-Push-Hook führt ihn nicht aus).
- Rückmeldung 3 (Seite „Finden“): Bauen heißt Bauen für den Katalog. Kasten am Ende und Kasten „kein Treffer“ ohne „Übung für die nächste Arbeit“ bzw. „dein Kind“; beide mit Hinweis auf /practice/ („Üben“). Im Kasten „kein Treffer“ kein Link „Eintragen“ mehr (Nutzer: ohne). Seite „Bauen“: „Dann bau es, für dich und alle, die danach suchen.“
- Texte wie in den Mockups (vom Nutzer bestätigt). Keine Zeitangabe. „Wir verdienen nichts an dir“ bleibt.
- Die Erklärung steht dort, wo jemand nichts findet (leeres Suchergebnis), nicht als Banner auf jeder Seite und nicht im Abschnitt „Darfst du sie einsetzen?“ (x-app-in-minutes: Lehrkraft unter Zeitdruck).

## Notes
- Umsetzung: Ohne Treffer wird der Kasten am Ende ausgeblendet (sonst doppelt). Die Zeile hat keinen Trennpunkt, weil sie auf dem Handy umbricht. Ersetzungen mit Werten aus der Adresse nutzen Funktionen (`replace(x, () => v)`), damit `$&` u. Ä. nicht als Muster wirken. Der Browser-Test setzt die Sprache des Browsers, weil der Seitenrahmen sonst auf Englisch umleitet; er sucht Chromium über `CHROMIUM_PATH`, `/opt/pw-browsers/chromium`, Google Chrome (CI: ubuntu-latest) oder den Browser von Playwright.
- Klassen-Auswahl zeigt nur Klassen mit Apps (`src/_data/catalog.js:77`): Lücken sind unsichtbar.
- `find.empty` verweist nur auf „App eintragen“, nicht auf „Bauen“.
- `find.build` nutzt Fachsprache („Tooling“) und verspricht „ganz einfach“.
- Keine Stelle sagt, wer hinter lernapps.net steht.
- Mockups: https://claude.ai/artifact/2HghwbCaHCy9A2EcBgvG49 (1 Klassen 1–13, 2 kein Treffer, 3 Kasten + „Wer dahintersteht“, 4 Bauen mit Suche im Auftrag, 5 Variante bauen = später)
- Offen für die Planung: Anzahl je Klasse in der Auswahl (im Mockup gezeigt, nicht ausdrücklich bestätigt).

## Explore
### Phase Entrance Criteria
- Der Nutzer hat ein Ziel genannt; ein Feature-Branch existiert.
### Tasks
- [x] Nutzer gibt Rückmeldung zu den Mockups (Ton, Umfang, offene Fragen)
- [x] Mockups: leeres Suchergebnis, Kasten „Nichts gefunden?“, „Wer dahintersteht“, Einleitung der Seite „Bauen“, Klassen-Auswahl 1–13
- [x] Nutzer wählt aus, welche Vorschläge umgesetzt werden, und bestätigt die Texte

### Completed
- [x] Created development plan file

## Plan
### Phase Entrance Criteria
- Der Nutzer hat Mockups und Texte bestätigt und den Umfang gewählt.
### Tasks
- [x] Einordnung ins Plattform-Design festhalten
- [x] Umsetzung je Mockup planen (Dateien, Texte, Verhalten, Randfälle)
- [x] Prüfungen planen
- [x] Plan vom Nutzer bestätigen lassen

### Einordnung ins Plattform-Design
- Betrifft die Erfahrungen `x-app-in-minutes` und `x-child-struggles` im Schritt `s-finding` (Seite „Finden“) und verbindet sie mit dem Einstieg der Bauenden (Seite „Bauen“, `x-list-and-hear-back`, `s-listing-help`). Kein neuer Kanal, keine neue Seite.
- Architektur unverändert: statische Seiten (Eleventy), alle Texte in `de.js`/`en.js`, Vorlagen ohne eigene Texte, jede Seite ohne JavaScript lesbar, kleine Skripte ergänzen. Nichts wird gespeichert oder gesendet.
- Das Repository lernapps/docs (Skill `pdt`) ist in dieser Sitzung nicht ausgecheckt; die Einordnung stützt sich auf die Tabelle im README und die Kommentare in `de.js`.

### Umsetzung
1. **Klassen 1–13 (Mockup 1)** – `src/_data/catalog.js`: `grades` = 1 bis 13 (Grenzen wie im Schema `schemas/entry.js`). Ohne Anzahl in Klammern: Die Zahl gälte nur ohne die anderen Filter und würde bei gesetztem Fach irreführen.
2. **Kein Treffer (Mockup 2)** – `de.js`/`en.js` `find.empty`: neue Überschrift (mit Thema und Klasse, falls gesetzt, sonst allgemein), zwei Absätze, Hauptknopf „Bauen“, Link „Eintragen“. `index.njk`: Knopf und Link; Überschrift mit Platzhaltern `{thema}`/`{klasse}` als data-Attribute (wie `data-many` mit `{n}`), `finden.js` füllt sie.
3. **Kasten am Ende und „Wer dahintersteht“ (Mockup 3)** – `find.build` neu (ohne „Tooling“, ohne „ganz einfach“, mit den beiden Anlässen), `find.trust` um Überschrift und Absatz „Wer hinter lernapps.net steht“ ergänzt; `index.njk` rendert sie.
4. **Kompakte Zeile (Mockup 3b)** – `index.njk`: Element neben `data-count` (`data-hint`, `hidden`), Text aus `find.hint`. `finden.js`: sichtbar, wenn Thema, Fach oder Klasse gesetzt und Treffer > 0; bei 0 Treffern versteckt (dann Kasten aus 2).
5. **Suche wird Auftrag (Mockup 4)** – Links auf „Bauen“ aus Zeile, leerem Kasten und Kasten am Ende tragen `?thema=&fach=&klasse=` (gesetzt in `finden.js`; ohne JavaScript der Link ohne Parameter). `build.njk`: Einleitungssatz `build.searched` (versteckt) und Auftrag mit Platzhalter für die Suche; neues kleines Skript `src/assets/bauen.js` liest die Parameter, kürzt das Thema auf 80 Zeichen, setzt Text nur über `textContent`/`value` (keine HTML-Einschleusung) und füllt Einleitung und Auftrag. Ohne Parameter oder ohne JavaScript: heutiger Auftrag. Neue Abschnitte „Du / die KI / lernapps.net bringen mit“ und „Für die nächste Arbeit / Für deinen Lehrplan“ unter der Einleitung (`build.contributions`, `build.cases`).
6. **Englisch** – alle neuen Texte in `en.js` in gleicher Struktur.
7. **Dunkler Modus** – neue Farben nur über vorhandene Klassen/Tokens oder mit dunklem Wert am Ende von `apps.css`.
8. **README** – Tabelle „Page“: Zeile `/apps/` und `/apps/build/` um die Einladung bzw. die übernommene Suche ergänzen.

### Randfälle
- Thema mit Sonderzeichen oder sehr lang: nur als Text gesetzt, gekürzt.
- Nur Klasse oder nur Fach gesetzt: Satzbausteine ohne leere Anführungszeichen.
- Fach in der Adresse ist der deutsche Schlüssel; auf der englischen Seite wird der Name der Seitensprache gezeigt.
- `history.replaceState` in `finden.js` bleibt; die Links auf „Bauen“ werden bei jeder Eingabe neu gesetzt.

### Prüfungen
- `npm run build`, `npm run check` (keine externen Ressourcen, keine kaputten Links), `npm test`.
- Neuer Test `test/find.e2e.test.mjs` mit Playwright gegen `_site`: Zeile erscheint nur mit Filter und Treffern; 0 Treffer zeigt den Kasten mit Thema; Link trägt die Parameter; Seite „Bauen“ übernimmt Thema und Klasse in den Auftrag; Thema mit `<script>` erscheint nur als Text.
- Sichtprüfung in Hell und Dunkel, 360 px und Desktop (Screenshot).

## Code
### Phase Entrance Criteria
- Der Plan nennt Dateien, Texte (de/en) und Prüfungen (`npm run check`, Tests).
### Tasks
- [x] 1 Klassen 1–13 (`catalog.js`)
- [x] 2 Kasten „kein Treffer“ (`de.js`, `en.js`, `index.njk`, `finden.js`)
- [x] 3 Kasten am Ende und „Wer dahintersteht“ (`de.js`, `en.js`, `index.njk`)
- [x] 4 Kompakte Zeile (`index.njk`, `finden.js`, Texte)
- [x] 5 Seite „Bauen“: Suche im Auftrag, neue Abschnitte (`build.njk`, `bauen.js`, Texte)
- [x] 6 Englische Texte vollständig
- [x] 7 Dunkler Modus geprüft
- [x] 8 README ergänzt
- [x] Test `test/find.e2e.test.mjs`; `npm run build`, `npm run check`, `npm test` grün

### Completed
*None yet*

## Commit
### Phase Entrance Criteria
- Umsetzung fertig, `npm test` und `npm run check` grün.
### Tasks
- [x] Aufräumen: keine Debug-Ausgaben, keine TODOs im Diff
- [x] Dokumentation: README (Tabelle der Seiten), Kommentare in `index.njk`, `build.njk`, `finden.js`, `bauen.js`
- [x] Pull Request öffnen (Nutzer möchte die Vorschau ansehen)
- [x] Rückmeldung zur Seite „Bauen“ umgesetzt
- [x] Rückmeldung 2 (Eintragen) umgesetzt
- [x] Rückmeldung 3 (Texte Finden) umgesetzt
- [x] Commits zusammenfassen: beim Mergen mit „Squash and merge“ (Force-Push ist in dieser Sitzung nicht erlaubt); CI grün, vom Nutzer freigegeben

### Completed
*None yet*



---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
