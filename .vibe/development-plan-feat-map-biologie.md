# Development Plan: apps (feat/map-biologie branch)

*Generated on 2026-11-07 by Vibe Feature MCP*
*Workflow: [epcc](https://codemcp.github.io/workflows/workflows/epcc)*

## Goal
Lernlandkarte Biologie für das Gymnasium Sek I (Jahrgang 5–10): `map/biologie.yaml` nach dem Skill `map-research`
(KMK-Bildungsstandards Biologie MSA 2024; Hessen, Bayern, NRW). Pilotfach einer Reihe: Danach folgen je eigener Branch
Deutsch, Englisch, Geschichte, Erdkunde, Politik/Wirtschaft, Französisch, Latein, Spanisch, Kunst, Sport, Informatik,
ev. Religion, kath. Religion, Ethik.

## Key Decisions
- Wunsch der Nutzerin / des Nutzers (2026-11-07): alle übrigen Sek-I-Fächer; ein Fach je Branch (`feat/map-<fach>`).
- Biologie zuerst, weil es wie Physik und Chemie KMK-Standards (MSA 2024) gibt.
- Workflow epcc.
- Architektur: Ein neues Fach ist nur eine neue Datei `map/<fach>.yaml`; `lib/map.js` lädt alle Dateien in `map/`.
  Kein Code, kein neues Konzept, also keine Änderung an Plattform-Design oder arc42-Doku.
- Kein Lehrplan (`curricula/`) im ersten Schritt, wie bei Physik, Chemie und Musik.
- Umfang (Nutzer/in, 2026-11-07): keine Zielgröße. Maßstab ist, den Inhalt möglichst gut lehren zu können. Regel im
  Skill `map-research` ergänzt. Folge für Biologie: Die Zusammenlegungen aus Recherche 3.3, die nur der Größe dienten,
  werden wieder getrennt, wo zwei Seiten besser lehren.
- Richtstufe (Nutzer/in, 2026-11-07): fein zuordnen, genau eine je Baustein. Nennt ein Land nur „7-10“, zählt die
  Stimme für 7-8 und 9-10; Gleichstand entscheidet die logische Struktur (`requires`). Gilt für alle neuen Karten;
  Physik und Chemie bleiben unverändert. Regel im Skill ergänzt.
- Lehrpläne: keine `curricula/` für Pläne, die nur Doppelstufen nennen (HE, NW). Vorerst geht es nur um Inhalte und
  ihre logische Struktur. Regel im Skill ergänzt.
- Verhalten (`tierkommunikation`, `verhalten-und-lernen`) kommt in den Strang `umwelt` (Nutzer/in; HE und BY nennen es).

- Autonom (Nutzer/in, 2026-11-07): keine Stopps an Phasengrenzen. Die übrigen 14 Fächer laufen parallel, je Fach
  ein Branch `feat/map-<fach>` von `main`, eigener Plan `.vibe/development-plan-feat-map-<fach>.md`, ein PR je Fach.
  Die neuen Regeln des Skills kommen mit diesem Branch; die anderen Branches folgen ihnen bereits.

- Nacharbeit (Nutzer/in, 2026-11-07, nach den 15 PRs): Gleichstand → frühere Stufe, für alle Fächer; Fremdsprachen
  nach Lernjahr-Dritteln statt Jahrgang (Sprachen beginnen als 1., 2. oder 3. Fremdsprache), Reihenfolge wichtig,
  Stufen sollen nicht klumpen; Bausteine gegen die Aufnahmeregel bleiben, solange sie passen; gemeinsame Strang-ids
  (Ontologie) im Skill; gleicher Inhalt in zwei Fächern bleibt in beiden, mit Querverweis `Siehe auch:` im
  Kommentar (kein neues Feld im Vertrag, damit kein Code nötig ist).
- Verteilung der Fremdsprachen (Nutzer/in, 2026-11-07): so, wie sie jetzt ist, erst einmal in Ordnung (Latein
  gleichmäßige Drittel, Englisch/Französisch/Spanisch „keine Stufe über die Hälfte“). Kann später vereinheitlicht werden.
- CI rot in allen PRs: Ursache außerhalb dieses Repos (`@lernapps/tooling` 0.6.3, `skills` mit `--frozen-lockfile`
  unter `CI=true`); nicht durch die Karten.
- Querverweise (Nutzer/in, 2026-11-07, Variante B): Das Schema kennt keine Querverweise; bis alle Karten gemergt
  sind, bleiben sie Kommentare `# Siehe auch:`. Danach eigener Branch: Feld `seeAlso: [<fach>/<id>]` am Baustein
  (Schema subject.v1, Vertrag, `lib/map.js` prüft Ziele über Fächer, Gegenrichtung berechnet, Anzeige „Siehe auch“,
  Skill, Tests) und alle Kommentare in einem Schritt umstellen.

## Notes
- Vorbild: `map/physik.yaml` (Kopfkommentar mit Quellenkürzeln, ein Kommentar je Baustein).
- Format: `docs/learning-map-contract.md`; Prüfung: `npm run build`, `npm test`.
- Bericht (Quellen, Entscheidungen, offene Punkte) kommt in den Pull Request.

## Explore
### Tasks

### Completed
- [x] Created development plan file
- [x] Repository erkundet: vorhandene Fächer, Vertrag, Skill `map-research`
- [x] Quellen gelesen: KMK Biologie MSA (13.06.2024); KC Hessen Biologie Gymnasium (2011); LehrplanPLUS Bayern
      online (NT 5, NT 6, Biologie 8–10; PDF-Gesamtlehrplan derzeit nicht abrufbar); KLP NRW Biologie G9 Heft 3413
      (2019, über lehrplannavigator.nrw.de)
- [x] Stränge = die vier KMK-Inhaltsbereiche: `zellen`, `vielfalt`, `mensch`, `umwelt`
- [x] 92 Bausteine mit Fundstellen, Stimmen und requires (Rohdaten: scratchpad `research-biologie.md`, `gen/data.py`)
      zellen 17, vielfalt 27, mensch 32, umwelt 16

- [x] Offene Punkte geklärt (siehe Key Decisions)

### Findings / open points
1. Zählweise Hessen (nur „5/6“ und „nach 9/10“) und NRW (nur Stufe 7–10): Recherche zählte „7-10“ als Stimme für beide;
   Physik/Chemie zählen die zweite Stufe Hessens als 9-10. Betrifft 3 Bausteine.
2. In 7–10 entscheidet praktisch Bayern die Reihenfolge (Bayern: Nerven/Hormone 8, Genetik/Evolution 9, Immun 10).
   Strang `vielfalt` hat daher keinen Baustein in 7-8.
3. Mendel-Genetik fehlt in Bayern; Richtstufe 9-10 per Stichentscheid.
4. Klimawandel nur KMK; 9-10 gesetzt (wegen `kohlenstoffkreislauf`).
5. Verhalten (`tierkommunikation`, `verhalten-und-lernen`): weder KMK noch NRW; vorläufig in `umwelt`.
6. ~~92 Bausteine leicht über dem Ziel 60–90~~ (überholt: keine Zielgröße; nach dem Trennen 113 Bausteine).

## Plan
### Entrance Criteria
- Quellen sind gelesen, Stränge und Kandidaten für Bausteine sind notiert.

### Tasks

### Completed
- [x] Strategie festgelegt (siehe unten)
- [x] Freigabe (2026-11-07): Nutzer/in erlaubt, alles autonom umzusetzen, für alle Fächer, bis zum PR

### Strategy
1. **Daten:** Die Rohdaten der Recherche (`gen/data.py`, je Baustein Fundstellen und Stimmen) sind die Quelle; ein
   Skript erzeugt daraus `map/biologie.yaml`. Generator bleibt im Scratchpad, nicht im Repository (es gibt keinen
   Generator für andere Fächer). Die Recherche liegt als `.vibe/research-biologie.md` bei.
2. **Trennen** (Recherche 3.3; je Teil eine eigene App-Seite, Fundstellen je Teil aus der Recherche):
   Skelett | Gelenke · Energiebedarf | ausgewogene Ernährung · Nährstoffe | Nährstoffnachweise · Blut | Herz und
   Kreislauf · Nervenzelle | Synapse · Hormone | Hormon- und Nervensystem vergleichen · Blutzuckerregulation | Diabetes ·
   spezifische Abwehr | Allergie · Infektionskrankheiten | Hygiene · Geschlechtsorgane | Menstruationszyklus ·
   Befruchtung | Schwangerschaft und Geburt · Artbegriff | Artbildung · natürliches System | Stammbaum ·
   Proteinbiosynthese | Gen-Merkmal-Beziehung · Karyogramm | Trisomie 21 | Pränataldiagnostik · Wirbellose | Insekten ·
   Züchtung | Nutztierhaltung · angeborenes Verhalten | Konditionierung · Bakterienzelle | Vermehrung der Bakterien ·
   Enzyme | Enzymaktivität (Temperatur, pH). Nicht getrennt: Fotosynthese mit ihrer Bedeutung (eine Seite).
3. **Richtstufe neu abstimmen** nach der Regel im Skill („7-10“ zählt für beide Stufen; Gleichstand über `requires`);
   jeder Teil bekommt eigene Stimmen. Overrides der Recherche nur behalten, wo die Regel keine Mehrheit ergibt.
4. **requires prüfen:** nur direkte Voraussetzungen; nach dem Trennen die Kanten auf den passenden Teil setzen
   (z. B. `synapse` → `nervenzelle`; `diabetes` → `blutzuckerregulation`).
5. **Datei schreiben** im Stil von `map/physik.yaml`: Kopfkommentar mit Quellenkürzeln (KMK, HE, BY, NW), je Baustein
   ein Kommentar mit Fundstellen und Abstimmung, „schwach belegt“ markiert; `name` und Strang-Namen `{ de, en }`.
6. **Prüfen:** Skript `check.py` (ids, „Ich kann“, requires, Richtstufen, Zyklen), dann `npm run build`, `npm test`;
   Fachseite `/map/biologie/` im Build ansehen.
7. **Bericht** für den Pull Request: Quellen, Entscheidungen, offene Punkte (aus der Recherche, aktualisiert).

### Risks
- Bayern entscheidet faktisch 7-8 gegen 9-10; im Bericht offen benennen.
- Sensible Themen (sexuelle Vielfalt, Schwangerschaftsabbruch) stehen verbindlich in allen drei Ländern und kommen
  in die Karte; ob eine App sie behandelt, ist eine spätere Entscheidung.

## Code
### Entrance Criteria
- Stränge, Bausteinliste und Richtstufen sind abgestimmt.

### Tasks

### Completed
- [x] Bausteine trennen (Strategie 2) in den Rohdaten: 20 Zusammenlegungen getrennt (Karyogramm, Trisomie 21 und
      Pränataldiagnostik in drei Teile); Fundstellen und Stimmen je Teil aus den Quellen in `src-bio`; 92 → 113
- [x] Richtstufen neu abgestimmt, requires angepasst (Strategie 3, 4): Overrides bei Mendel-Genetik entfallen
      (requires entscheidet); `klimawandel` 9-10 → 7-8 (Abstimmung), requires jetzt `fotosynthese-und-zellatmung`,
      `nachhaltigkeit`; `hygiene` 5-6 (alle drei Länder in Stufe 1); einziger Override `enzymaktivitaet` (nur BY)
- [x] `map/biologie.yaml` erzeugt (Strategie 5): zellen 19, vielfalt 34, mensch 43, umwelt 17
- [x] Geprüft (Strategie 6): check.py OK, `npm run build` (Seite `/map/biologie/` mit 113 Bausteinseiten), `npm test`
      (93 bestanden, 1 übersprungen, 0 Fehler)
- [x] Bericht für den Pull Request (Strategie 7); `.vibe/research-biologie.md` auf Stand 2

## Commit
### Entrance Criteria
- `map/biologie.yaml` ist fertig; `npm run build` und `npm test` laufen durch.

### Tasks

### Completed
- [x] Diff geprüft: nur `map/biologie.yaml`, Recherche und Plan; keine Modellbezeichnung, keine Debug-Reste
- [x] Offene Punkte für den PR gesammelt (Recherche Abschnitt 4)
- [x] Commit auf `feat/map-biologie` (conventional, Body mit Intent / Key changes) und Push
- [x] Pull Request #199 angelegt; vor dem Merge squashen

---
*This plan is maintained by the LLM. Tool responses provide guidance on which section to focus on and what tasks to work on.*
