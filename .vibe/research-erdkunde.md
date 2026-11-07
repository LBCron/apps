# Recherche Lernlandkarte Erdkunde, Gymnasium Sekundarstufe I (Jg 5–10)

Grundlage für `map/erdkunde.yaml`. Methode: Skill `map-research`, Format: `docs/learning-map-contract.md`.
Abgerufen am 07.11.2026.

**Ergebnis in Kürze:** 128 Bausteine in sieben Strängen: `orientierung` 23, `erde` 19, `klima` 24,
`landwirtschaft` 18, `wirtschaft` 15, `siedlung` 13, `entwicklung` 16. Richtstufen: 51 × 5-6, 53 × 7-8, 24 × 9-10.
Sieben Bausteine sind schwach belegt. Geprüft per Skript: ids eindeutig und im Format des Vertrags, jedes iCan beginnt
mit „Ich kann“, jeder Baustein hat mindestens zwei Länder, alle requires verweisen auf vorhandene ids, keine späteren
Richtstufen, keine Zyklen.

## 1. Quellen

Alle Quellen habe ich im Original geöffnet (PDF per `pdftotext`, LehrplanPLUS als HTML-Seite).

| Kürzel | Titel | Ausgabe | URL (genau so geöffnet) | Fundstellen |
|---|---|---|---|---|
| DG | Deutsche Gesellschaft für Geographie (DGfG): Bildungsstandards im Fach Geographie für den Mittleren Schulabschluss – mit Aufgabenbeispielen | 10., aktualisierte und überarbeitete Auflage, Juli 2020; 108 S. | https://fachportal.lernnetz.de/files/Inhalte%20der%20Unterrichtsf%C3%A4cher/Geographie/Download%20Center/Bildungsstandards%20SI%20Geographie%202020%20Web.pdf (Kopie beim IQSH Schleswig-Holstein; die DGfG-Seiten geographie.de und dgfg.org waren nicht abrufbar, siehe 5) | Kap. 3.1 Fachwissen F1–F5 (S. 13–16), Kap. 3.2 Räumliche Orientierung O1–O5 (S. 17–18) |
| HE (KC) | Hessisches Kultusministerium: Bildungsstandards und Inhaltsfelder – Das neue Kerncurriculum für Hessen, Sekundarstufe I – Gymnasium, Erdkunde | ohne Jahr (PDF erstellt 28.02.2011, auf der Website seit 06/2021); 35 S. | https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-06/kerncurriculum_erdkunde_gymnasium.pdf | Kap. 6 Kompetenzerwartungen Ende 9/10 (S. 21–23), Inhaltsfelder (S. 24–26); Kap. 7: „entfällt“ (S. 27); Fußnote 1 S. 11: auf Basis der DGfG-Standards entwickelt |
| HE (LP) | Hessisches Kultusministerium: Lehrplan Erdkunde, Gymnasialer Bildungsgang, Jahrgangsstufen 5 bis 13 (G9) | ohne Jahr (PDF erstellt 08.02.2016); 20 S. | https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-06/g9-erdkunde.pdf | Teil B: Jg 5 (S. 7–8), 6.1 (S. 9–10), 6.2 (S. 11), 8 (S. 13–14), 9 (S. 15–17), Übergangsprofil (S. 18). Erdkunde hat in Jg 7 und 10 keinen Unterricht |
| BY | ISB Bayern: LehrplanPLUS Gymnasium, Fachlehrpläne Geographie | Online-Fassung, abgerufen 07.11.2026 | Geo5: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/5/geographie · Geo7: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/7/geographie · Geo10: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/10/geographie · Geo11 (nur Hinweis): https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/11/geographie · Fachprofil: https://www.lehrplanplus.bayern.de/fachprofil/gymnasium/geographie | Geo5 LB1–LB5, Geo7 LB1–LB6, Geo10 LB1–LB7. Geographie 6, 8 und 9 gibt es nicht (die Adressen leiten auf die Startseite um); Geo11 liegt nach Jg 10 |
| NW | MSB NRW: Kernlehrplan für die Sekundarstufe I Gymnasium in Nordrhein-Westfalen, Erdkunde | Heft 3408, 2019 (RdErl. v. 23.06.2019); 35 S. | https://lehrplannavigator.nrw.de/system/files/media/document/file/g9_ek_klp_3408_2019_06_23.pdf (gefunden über https://lehrplannavigator.nrw.de/sekundarstufe-i/kernlehrplaene-fuer-das-gymnasium-ab-sj-20192020/erdkunde-gymnasium) | Kap. 2.2 Ende Erprobungsstufe: MK S. 17 f., IF1 S. 19, IF2 S. 20, IF3 S. 21 f.; Kap. 2.3 Ende Sek I: MK S. 23 f., IF4 S. 26, IF5 S. 27, IF6 S. 28, IF7 S. 29 f., IF8 S. 30, IF9 S. 31, IF10 S. 32 |
| SiLP (keine Stimme) | QUA-LiS NRW: Beispiel für einen schulinternen Lehrplan, Gymnasium Sek I, Erdkunde | Fassung vom 31.01.2020 | https://lehrplannavigator.nrw.de/system/files/media/document/file/g9_ek_silp_2020_01_31.pdf | UV I–V Jg 5/6; UV VI–XI Jg 7/8 (Klima, Regenwald, Trockenräume, Landwirtschaft, Klimawandel, endogene Kräfte); UV XII–XVIII Jg 9/10 (Entwicklung, Bevölkerung, Migration, Stadt, Globalisierung, Digitalisierung) |

### 1.1 Taugen die DGfG-Standards als gemeinsamer Bezug (`source`)?

Ja, als **Bezug**, nicht als Ersatz für KMK-Standards. Gründe:

- Es gibt keine KMK-Bildungsstandards für Geographie. Die DGfG-Standards sind die einzigen bundesweiten Standards des
  Fachs für den MSA. Sie stehen neben den KMK-Standards der Nachbarfächer und gliedern wie diese nach
  Kompetenzbereichen.
- Hessen hat sein Kerncurriculum ausdrücklich „auf Basis der Bildungsstandards … der DGfG“ entwickelt (KC S. 11,
  Fn. 1); seine sechs Inhaltsfelder entsprechen F1–F5 und O der DGfG. Bayern und NRW nennen die DGfG nicht, ihre
  Inhalte liegen aber alle im Rahmen von F1–F5 und O1–O5.
- **Aber:** Die DGfG nennt Inhalte nur als Beispiele („z. B.“). Sie ist ein Fachverband, kein KMK-Beschluss, und für
  kein Land verbindlich. Sie entscheidet deshalb weder über die Aufnahme eines Bausteins noch über die Richtstufe.
  Aufnahme nach Regel 3 also nur, wenn zwei der drei Länder einen Inhalt nennen (oder er direkte Voraussetzung ist).
  Die DGfG-Fundstelle steht in jedem Kommentar als Bezug (Spalte DG).
- Die **Stränge** sind die Inhaltsbereiche, die die drei Länder teilen (2. Regel), nicht die DGfG-Kompetenzen F1–F5:
  F2 bis F4 sind Denkweisen (naturgeographisches System, humangeographisches System, Mensch-Umwelt), quer zu den
  Themen; eine App für „F4“ ließe sich nicht abgrenzen.

### 1.2 Stränge

Die Länder teilen diese Inhaltsbereiche (Hessen nach Inhaltsfeldern und LP-Themen, Bayern nach Lernbereichen, NRW
nach Inhaltsfeldern):

| Strang | DG | HE | BY | NW |
|---|---|---|---|---|
| `orientierung` Orientierung und Karten | O1–O5 | KC Räumliches Orientierungswissen; LP 5, 6.2 | Geo5 LB1, LB2; Geo7 LB1 | MK1, MK3 und die Orientierungsraster der IF |
| `erde` Planet Erde und Relief | F1; F2 | KC Erde als Planet, Natur/Umwelt; LP 5, 8 | Geo5 LB2, LB3; Geo7 LB3 | IF4; IF5 (Himmelskörper Erde) |
| `klima` Wetter, Klima und Landschaftszonen | F2; F4 S18 | KC Natur/Umwelt; LP 6.1, 8 | Geo7 LB3; Geo10 LB3, LB4 | IF5; IF6 (Landschaftszonen) |
| `landwirtschaft` Landwirtschaft und Ernährung | F4 S17–S20 | LP 5, 8 | Geo5 LB4; Geo7 LB4; Geo10 | IF3; IF6 |
| `wirtschaft` Wirtschaft, Verkehr und Tourismus | F3; F4 S17 | LP 5, 6.1, 9 | Geo5 LB3; Geo7 LB5, LB6 | IF2; IF3; IF10 (Digitalisierung) |
| `siedlung` Siedlungen und Städte | F3 | KC Mensch/Gesellschaft; LP 5 | Geo5 LB4, LB5; Geo7 LB5; Geo10 LB7 | IF1; IF9 |
| `entwicklung` Bevölkerung, Entwicklung und globale Verflechtung | F3; F5 S25 | KC Umwelt-Gesellschaft, Mensch/Gesellschaft; LP 8, 9 | Geo7 LB4, LB5; Geo10 LB2, LB5–LB7 | IF7; IF8; IF10 |

Landwirtschaft ist ein eigener Strang, weil alle drei Länder sie in jeder Doppelstufe behandeln (von der Landwirtschaft
im Heimatraum bis zu den Landschaftszonen) und sie für eine App über mehrere Jahre reicht. Globalisierung steht bei
Entwicklung, weil Welthandel ihre direkte Voraussetzung ist.

### 1.3 Zählweise der Stimmen

- **HE:** Das KC nennt nur „Ende 9/10“ und keine Jahrgänge (Kap. 7 entfällt). Eine KC-Fundstelle zählt daher als
  Spanne „5-10“ für alle drei Stufen. Wo der Lehrplan G9 den Inhalt einem Jahrgang zuweist, gilt der Jahrgang
  (5 und 6 → 5-6, 8 → 7-8, 9 → 9-10). Fakultative Inhalte des LP zählen nicht.
- **BY:** eine Stimme für den Jahrgang, in dem der Lernbereich den Inhalt verbindlich nennt (Geo5 → 5-6, Geo7 → 7-8,
  Geo10 → 9-10). „Regionaler Rückblick/globale Erweiterung, z. B. …“ ist ein Beispiel und zählt nur als Hinweis.
  Geo11 liegt nach Jg 10 und zählt nicht.
- **NW:** Stufe 1 (IF1–IF3) → 5-6; Stufe 2 (IF4–IF10) → „7-10“, zählt für 7-8 und 9-10.
- **Gleichstand:** die frühere Stufe, außer `requires` erzwingt die spätere (der Baustein braucht einen Baustein der
  späteren Stufe). Das NRW-Umsetzungsbeispiel (SiLP) stimmt nicht mit und entscheidet keinen Gleichstand. Liegen
  zwei Stimmen bei 5-6 und 9-10, oder gibt es drei verschiedene, gilt die mittlere.


## 2. Bausteine je Strang

Lesehilfe: **Stimmen** = HE / BY / NW. „5-10“ = nur KC Hessen (Ende 9/10, zählt für alle drei Stufen); „7-10“ = NRW-Stufe 2 (zählt für 7-8 und 9-10). „–“ = nicht genannt. **(schwach)** = schwach belegt (Grund in der Spalte NW als Hinweis). DG = DGfG-Standard (nur Bezug, keine Stimme).

### Strang `orientierung`: Orientierung und Karten (Spatial orientation and maps) – 23 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 1 | `himmelsrichtungen` | Ich kann die Himmelsrichtungen bestimmen, auch mit einem Kompass und mit dem Stand der Sonne. | O4 S11, S13 | LP 5 (Windrose, Kompass) | Geo5 LB1, LB2 (Himmelsrichtungen) | Stufe 1 MK1 (orientieren sich vor Ort und mit Karten) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 2 | `globus-und-karte` | Ich kann erklären, wie eine Karte die Erde verkleinert, vereinfacht und von oben zeigt, und Globus und Karte vergleichen. | O3 S5 | LP 5 (Globus, Karte/Atlas) | Geo5 LB2 (Orientierung mit Globus und Karten) | Stufe 1 MK1 (mit Karten) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 3 | `legende` | Ich kann eine Karte mit Hilfe der Legende lesen und die Kartenzeichen deuten. | O3 S5, S6 | LP 5 (Maßstab und Legende) | Geo5 LB1 (Einzelzeichen) | Stufe 1 MK4 (einfache diskontinuierliche Texte auswerten) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `globus-und-karte` |
| 4 | `massstab` | Ich kann mit dem Maßstab einer Karte Entfernungen messen und berechnen. | O3 S5 | LP 5 (Messen und Zeichnen, Maßstab) | Geo5 LB1, LB2 (Maßstab und Distanzen) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `globus-und-karte` |
| 5 | `hoehendarstellung` | Ich kann Höhen auf einer Karte an Höhenlinien und Höhenschichtfarben ablesen. | O3 S5 (Verebnung des Reliefs) | LP 5 (Höhenprofil) | Geo5 LB1 (Landhöhen), LB2 (Höhendarstellungen) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `legende` |
| 6 | `hoehenprofil` | Ich kann aus einer Karte ein einfaches Höhenprofil zeichnen. | O3 S8 | LP 5 (Profilzeichnung Alpen, Höhenprofil) | Geo5 LB1 (Profilzeichnungen), LB3 (Profile) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `hoehendarstellung`, `massstab` |
| 7 | `kartenarten` | Ich kann physische, thematische und topografische Karten unterscheiden und für eine Frage die passende Karte wählen. | O3 S6 | KC Kap. 6 (topographische, physische, thematische Karten auswerten) | Geo5 LB1, LB2 (unterscheiden topografische, physische und thematische Karten) | – | 5-10 / 5-6 / – → **5-6** (Mehrheit) | `legende` |
| 8 | `atlas` | Ich kann mit Inhaltsverzeichnis, Register und Planquadraten im Atlas einen Ort finden. | O3 S6 | LP 5 (Globus, Karte/Atlas) | Geo5 LB2 (Einführung in die Atlasarbeit) | Stufe 1 MK3 (Inhaltsverzeichnis, Register, Planquadrate) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `kartenarten` |
| 9 | `kartenskizze` | Ich kann eine einfache Kartenskizze zeichnen, zum Beispiel von meinem Schulweg. | O3 S8 | LP 5 (Schulwegeskizze, Handskizzen) | Geo5 LB1, LB2 (Kartenskizze) | Stufe 1 MK6 (Skizzen) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `legende`, `himmelsrichtungen` |
| 10 | `kartierung` | Ich kann bei einem Gang durch den Ort kartieren, wie Gebäude und Flächen genutzt werden. | O3 S9 | LP 5 (Feldbeobachtungen und -kartierungen) | Geo5 LB1 (Nutzungskartierungen), LB5 (einfache Formen der Kartierung) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `kartenskizze`, `stadtviertel` |
| 11 | `standort-und-weg` | Ich kann mit einer Karte, Landmarken und einem Smartphone (GPS) meinen Standort bestimmen und einen Weg finden. | O4 S11–S13 | KC Kap. 6 (Standort bestimmen, zielgerichtet bewegen) | Geo5 LB1 (digitale Geomedien), LB5 (orientieren sich mit Karten in städtischen Räumen) | Stufe 1 MK1 (vor Ort, GPS-basierte Anwendungen) | 5-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | `himmelsrichtungen`, `legende` |
| 12 | `kontinente-und-ozeane` | Ich kann die Kontinente und Ozeane benennen und auf dem Globus und der Weltkarte zeigen. | O1 S1 | LP 5 (Kontinente/Ozeane); KC Räumliches Orientierungswissen | Geo5 LB2 (Ozeane und Kontinente) | Stufe 1 SK4 (Orientierungsraster) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `globus-und-karte` |
| 13 | `bundeslaender` | Ich kann die Bundesländer und ihre Hauptstädte auf einer Karte zeigen. | O1 S1 | LP 5 (Bundesländer, Hauptstädte) | Geo5 LB5 (administrative Gliederung) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `atlas` |
| 14 | `grosslandschaften-deutschland` | Ich kann Deutschland in Norddeutsches Tiefland, Mittelgebirge, Alpenvorland und Alpen gliedern und die großen Flüsse zeigen. | O1 S1 | LP 5 (Flüsse, Gebirge, Tiefländer, Becken) | Geo5 LB3 (naturräumliche Gliederung) | IF2 (Großlandschaften Deutschlands) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `hoehendarstellung` |
| 15 | `topographie-europa` | Ich kann Europa in Teilräume gliedern und seine Staaten, Hauptstädte, Gebirge, Flüsse und Meere auf einer Karte zeigen. | O1 S1 | LP 6.1 (Großräume Europas, Grundkenntnisse über Europa) | Geo7 LB2, LB3 (Staaten, Teilräume, Großlandschaften) | IF2 (Großlandschaften Europas) | 5-6 / 7-8 / 5-6 → **5-6** (Mehrheit) | `kontinente-und-ozeane` |
| 16 | `topographie-welt` | Ich kann wichtige Staaten, Gebirge, Flüsse und Wüsten der anderen Kontinente auf einer Karte zeigen. | O1 S1 | LP 9 (weltweites Orientierungsraster, Übergangsprofil); LP 6.2, 8 je ein Kontinent | Geo10 LB5–LB7 (topografischer Überblick) | Stufe 2 Orientierungsraster der IF | 9-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `topographie-europa` |
| 17 | `gradnetz` | Ich kann das Gradnetz der Erde mit Äquator, Nullmeridian, Breitenkreisen und Längenkreisen beschreiben. | O1 S2 | LP 6.2 (Pole, Äquator, 0- und 180-Meridian) | Geo5 LB1, LB2 (Gradnetz) | Stufe 2 MK1 (Gradnetzangaben) | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `globus-und-karte` |
| 18 | `koordinaten` | Ich kann die Lage eines Ortes mit geographischer Breite und Länge angeben und einen Ort zu gegebenen Koordinaten finden. | O2 S4 | LP 6.2 (Bestimmung von Standortkoordinaten) | Geo5 LB1 (bestimmen Lage im Gradnetz) | Stufe 2 MK1 (Gradnetzangaben) | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `gradnetz`, `atlas` |
| 19 | `lage-beschreiben` | Ich kann die Lage eines Ortes genau beschreiben: im Gradnetz, auf dem Kontinent und zu Flüssen, Gebirgen und Nachbarländern. | O2 S3, S4 | KC Kap. 6 (Lage zu Bezugseinheiten und Orientierungsrastern in Beziehung setzen) | Geo7 LB3 (Lage im Gradnetz Europas) | Stufe 2 SK5 (in Orientierungsraster einordnen) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `koordinaten`, `topographie-europa` |
| 20 | `thematische-karte` | Ich kann eine thematische Karte zu einer Frage auswerten, zum Beispiel zur Bevölkerungsdichte. | O3 S6 | KC Kap. 6 (thematische Karten auswerten) | Geo7 LB1 (werten physische und thematische Karten aus) | Stufe 2 MK4 (diskontinuierliche Texte auswerten) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `kartenarten` |
| 21 | `digitale-karten` | Ich kann digitale Karten und Satellitenbilder nutzen, um Orte zu finden und Informationen abzulesen. | O3 S6 | KC Kap. 6 (Karten konventionell oder Web-GIS) | Geo7 LB1 (Satellitenbilder, digitale Geomedien) | Stufe 1 MK3 (digitale Kartenanwendungen); Stufe 2 MK12 (GIS) | 5-10 / 7-8 / 5-6 → **5-6** (Gleichstand 5-6/7-8, requires entscheidet nicht; nach der Regel die frühere Stufe) | `kartenarten` |
| 22 | `karten-sind-gemacht` | Ich kann an Beispielen zeigen, dass Karten die Welt immer aus einem Blickwinkel darstellen, etwa durch Kartennetz, Ausschnitt oder Farbwahl. | O3 S7; O5 S16 | KC Kap. 6 (Raumdarstellungen stets konstruiert; Manipulationsmöglichkeiten) | Geo7 LB1 (kritisch mit Darstellungen auseinandersetzen) | Stufe 2 UK4, UK5 (Wirkungsabsicht von Quellen, Raumwahrnehmungen in Medien) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `thematische-karte` |
| 23 | `mental-maps` **(schwach)** | Ich kann an Kopfkarten (Mental Maps) zeigen, dass Menschen denselben Raum verschieden wahrnehmen. | O5 S15 | KC Kap. 6 (kognitive Karten/mental maps) | – | Stufe 2 UK5 (von Raumwahrnehmungen geleitete Setzung von Themen)<br>Hinweis: NW nennt die Wahrnehmung, nicht die Kopfkarte | 5-10 / – / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `kartenskizze` |

### Strang `erde`: Planet Erde und Relief (Planet Earth and its landforms) – 19 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 24 | `sonnensystem` | Ich kann die Planeten unseres Sonnensystems ordnen und erklären, warum es Leben nur auf der Erde gibt. | F1 S1, S2 | LP 5 (Planetennatur der Erde); KC Erde als Planet | Geo5 LB2 (Sonnensystem, Einzigartigkeit der Erde) | IF5 (Himmelskörper Erde) | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | – |
| 25 | `gestalt-der-erde` | Ich kann Form und Größe der Erde beschreiben und sagen, wie viel ihrer Oberfläche Land und wie viel Meer ist. | F1 S1 | LP 5 (Planetennatur, Globus) | Geo5 LB2 (Aufbau und Gestalt der Erde) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `sonnensystem` |
| 26 | `tag-und-nacht` | Ich kann mit der Drehung der Erde um ihre Achse erklären, wie Tag und Nacht entstehen. | F1 S2 (Tag und Nacht) | LP 8 (Rotation, Tellurium); KC Erde als Planet (Rotation) | – | IF5 (Himmelskörper Erde) | 7-8 / – / 7-10 → **7-8** (Mehrheit) | `gestalt-der-erde` |
| 27 | `jahreszeiten` | Ich kann mit der Neigung der Erdachse und dem Umlauf der Erde um die Sonne erklären, wie die Jahreszeiten entstehen. | F1 S2 (Jahreszeiten) | LP 8 (Erdachse, Umlaufbahn, Jahreszeiten); KC Erde als Planet | – | IF5 (Schrägstellung der Erdachse, Jahreszeiten)<br>Hinweis: BY Geo10 LB3 nennt nur das Jahreszeitenklima der Tropen | 7-8 / – / 7-10 → **7-8** (Mehrheit) | `tag-und-nacht` |
| 28 | `beleuchtungszonen` | Ich kann Wendekreise und Polarkreise erklären und die Beleuchtungszonen der Erde unterscheiden. | F1 S2 | LP 8 (Zenit, Polarkreise, Wendekreise) | Geo10 LB3 (globale Strahlungsverhältnisse, Sonneneinstrahlung) | IF5 (Beleuchtungszonen, Temperaturzonen) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `jahreszeiten`, `gradnetz` |
| 29 | `schalenbau` | Ich kann den Schalenbau der Erde mit Kruste, Mantel und Kern beschreiben. | F1 S1 (Aufbau) | KC Erde als Planet (Aufbau der Erde) | Geo5 LB2 (Schalenbau) | IF4 (Schalenbau der Erde) | 5-10 / 5-6 / 7-10 → **5-6** (Gleichstand 5-6/7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `gestalt-der-erde` |
| 30 | `plattentektonik` | Ich kann erklären, dass die Erdkruste aus Platten besteht, die sich langsam bewegen, und warum sich die Lage der Kontinente verändert hat. | F2 S5 (Lageveränderung der Platten) | LP 8 (Plattentektonik) | Geo7 LB3 (Plattengrenzen) | IF4 (Plattentektonik) | 7-8 / 7-8 / 7-10 → **7-8** (Mehrheit) | `schalenbau` |
| 31 | `plattengrenzen` | Ich kann an Plattengrenzen unterscheiden, ob Platten auseinanderdriften, aufeinander zustoßen und abtauchen (Subduktion) oder aneinander vorbeigleiten. | F2 S5, S7 | LP 8 (Plattentektonik) | Geo7 LB3 (Zusammenhang zwischen Plattengrenzen, Vulkanismus und Erdbeben) | IF4 (Konvergenz, Divergenz, Subduktion) | 7-8 / 7-8 / 7-10 → **7-8** (Mehrheit) | `plattentektonik` |
| 32 | `vulkanismus` | Ich kann den Aufbau eines Vulkans beschreiben und erklären, warum es vor allem an Plattengrenzen Vulkane gibt. | F2 S4 (Vulkane) | LP 8 (Vulkanismus) | Geo7 LB3 (Vulkanismus: Vorkommen und Ursachen) | IF4 (Vulkanismus) | 7-8 / 7-8 / 7-10 → **7-8** (Mehrheit) | `plattengrenzen` |
| 33 | `erdbeben` | Ich kann erklären, wie Erdbeben und Seebeben entstehen, wie man ihre Stärke misst und wie ein Tsunami entsteht. | F2 S4 (Erdbeben) | LP 8 (Erdbeben) | Geo7 LB3 (Erdbeben: Vorkommen und Ursachen) | IF4 (Erd- und Seebeben)<br>Hinweis: Tsunami nur NW (Seebeben) | 7-8 / 7-8 / 7-10 → **7-8** (Mehrheit) | `plattengrenzen` |
| 34 | `gebirgsbildung` | Ich kann erklären, wie Faltengebirge wie die Alpen entstehen, wenn Platten zusammenstoßen. | F2 S7 (Gebirgsbildung) | LP 8 (Gebirgsbildung) | Geo5 LB3 (Alpen: Entstehung) | – | 7-8 / 5-6 / – → **7-8** (Gleichstand 5-6/7-8; requires plattengrenzen (7-8) schließt 5-6 aus) | `plattengrenzen` |
| 35 | `leben-in-risikoraeumen` | Ich kann erklären, warum Menschen trotz der Gefahr an Vulkanen und in Erdbebengebieten leben, zum Beispiel wegen fruchtbarer Böden, Rohstoffen, Energie und Tourismus. | F4 S18 (Naturrisiken) | KC Umwelt-Gesellschaft (naturgeographische Prozesse als Gefahr) | Geo7 LB3 (Vor- und Nachteile des Lebens in bedrohten Siedlungsräumen) | IF4 (Leben und Wirtschaften in Risikoräumen) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `vulkanismus`, `erdbeben` |
| 36 | `katastrophenvorsorge` | Ich kann Maßnahmen beschreiben, mit denen sich Menschen vor Erdbeben und Vulkanausbrüchen schützen, zum Beispiel Frühwarnung, Überwachung und erdbebensicheres Bauen. | F4 S20 | – | Geo7 LB3 (Monitoring aktueller Erdbeben und Vulkanaktivitäten) | IF4 UK (Katastrophenvorsorge, Eindämmung von Naturrisiken) | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `leben-in-risikoraeumen` |
| 37 | `exogene-kraefte` | Ich kann erklären, wie Verwitterung, Abtragung und Ablagerung durch Wasser, Wind und Eis die Erdoberfläche formen. | F2 S7 (Verwitterung) | LP 8 (Verwitterung, Erosion, Sedimentation) | Geo5 LB3 (endogene und exogene Prozesse bei der Entstehung von Oberflächenformen) | – | 7-8 / 5-6 / – → **5-6** (Gleichstand 5-6/7-8; requires: Grundlage von kuestenformen und boden (beide 5-6)) | – |
| 38 | `boden` | Ich kann erklären, wie aus Gestein durch Verwitterung Boden entsteht und woran man einen fruchtbaren Boden erkennt. | F2 S6 (Bedeutung des Gesteins für den Boden) | KC Natur/Umwelt (Faktor Boden) | Geo5 LB1 (Bodenbestimmung), LB4 (Bodeneigenschaft) | IF3 (Standortfaktor Boden) | 5-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | `exogene-kraefte` |
| 39 | `gezeiten-und-watt` | Ich kann Ebbe und Flut erklären und beschreiben, wie das Wattenmeer entsteht und warum es geschützt wird. | F2 S4 | LP 5 (Gezeiten, Watt, Marsch) | Geo5 LB3 (Gefährdung des Ökosystems Wattenmeer) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `grosslandschaften-deutschland` |
| 40 | `kuestenformen` **(schwach)** | Ich kann Steilküste und Flachküste unterscheiden und erklären, wie Meer und Wind die Küste formen. | F2 S4, S7 | LP 5 (Küste am Meer) | Geo5 LB3 (Küste: Entstehung, Küstenformen); Geo7 LB6 (natürliche Küstenformung) | –<br>Hinweis: HE nennt die Küste, nicht die Küstenformen | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `exogene-kraefte` |
| 41 | `kuestenschutz` | Ich kann Maßnahmen des Küstenschutzes wie Deiche und Landgewinnung beschreiben. | F4 S20 | LP 5 (Küstenschutz, Landgewinnung) | Geo5 LB3 (Maßnahmen zum Küstenschutz); Geo7 LB6 (anthropogene Küstenformung) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `kuestenformen`, `gezeiten-und-watt` |
| 42 | `naturgefahren-alpen` | Ich kann Naturgefahren in den Alpen wie Lawinen, Muren und Hochwasser beschreiben und Schutzmaßnahmen wie den Bannwald nennen. | F4 S18 | LP 5 (Lawine, Bannwald) | Geo5 LB3 (Alpen: Naturgefahren, Schutzmaßnahmen) | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `grosslandschaften-deutschland` |

### Strang `klima`: Wetter, Klima und Landschaftszonen (Weather, climate and natural zones) – 24 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 43 | `wetter-und-klima` | Ich kann Wetter und Klima unterscheiden und die Wetterelemente Temperatur, Niederschlag, Luftdruck und Wind nennen. | F2 S7 (Wettergeschehen) | LP 6.1, 6.2 (Klimazonen Europas; einfache Messwerterfassung Klimadaten) | Geo5 LB1, LB4 (Messungen zu Wetterelementen) | IF2 (Temperatur und Niederschlag); IF5 (Klimaelemente) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 44 | `wetter-messen` | Ich kann Temperatur und Niederschlag messen, die Werte in eine Tabelle eintragen und als Diagramm darstellen. | – | LP 6.2 (einfache Messwerterfassung) | Geo5 LB1 (Messungen zu Temperatur und Niederschlag, Säulendiagramme), LB4 | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `wetter-und-klima` |
| 45 | `klimadiagramm-lesen` | Ich kann ein Klimadiagramm lesen und damit das Klima eines Ortes beschreiben. | – | LP 6.1 (Klimadiagramme bestimmen, lesen und erläutern) | Geo7 LB1, LB3 (Klimadiagramme analysieren und versprachlichen) | IF5 (Klimaelemente)<br>Hinweis: NW nennt das Klimadiagramm nicht ausdrücklich | 5-6 / 7-8 / 7-10 → **7-8** (Mehrheit) | `wetter-messen` |
| 46 | `klimadiagramm-zeichnen` | Ich kann aus einer Klimatabelle ein Klimadiagramm zeichnen. | – | LP 8 (Klimadiagramm zeichnen) | Geo7 LB1, LB3 (setzen Messdaten aus Klimatabellen in Klimadiagramme um) | – | 7-8 / 7-8 / – → **7-8** (Mehrheit) | `klimadiagramm-lesen` |
| 47 | `wasserkreislauf` | Ich kann den Wasserkreislauf mit Verdunstung, Kondensation, Niederschlag und Abfluss beschreiben. | F2 S8 (Wasserkreislauf) | LP 8 (Gesteins- und Wasserkreislauf) | – | IF5 (Wasserkreislauf) | 7-8 / – / 7-10 → **7-8** (Mehrheit) | `wetter-und-klima` |
| 48 | `luftdruck-und-wind` | Ich kann erklären, wie durch Erwärmung Hoch- und Tiefdruckgebiete entstehen und warum der Wind vom Hoch zum Tief weht. | F2 S7 (Wettergeschehen) | LP 8 (atmosphärische Zirkulation) | Geo10 LB3 (thermische Entstehung von Hoch- und Tiefdruckgebieten) | IF5 (Luftbewegungen) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10; requires: Grundlage von steigungsregen-und-foehn (7-8)) | `wetter-und-klima` |
| 49 | `steigungsregen-und-foehn` | Ich kann erklären, warum es auf der dem Wind zugewandten Seite eines Gebirges viel regnet und auf der anderen Seite ein warmer, trockener Fallwind (Föhn) weht. | F2 S7 | – | Geo7 LB3 (Steigungsregen und Föhn) | IF5 (klimatologische Prozesse und Wetterphänomene) | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `luftdruck-und-wind`, `wasserkreislauf` |
| 50 | `seeklima-landklima` | Ich kann erklären, warum es in Westeuropa milde Winter und kühle Sommer gibt und im Osten kalte Winter und heiße Sommer, auch mit dem Golfstrom. | F2 S8 (Meeresströmungen und Klima) | LP 6.1 (Klimazonen Europas) | Geo7 LB3 (Maritimität und Kontinentalität, Einfluss des Golfstroms) | – | 5-6 / 7-8 / – → **7-8** (Gleichstand 5-6/7-8; requires klimadiagramm-lesen (7-8) schließt 5-6 aus) | `klimadiagramm-lesen` |
| 51 | `klimazonen-europas` | Ich kann die Klima- und Vegetationszonen Europas nennen und auf einer Karte zeigen. | O1 S2 | LP 6.1 (Klimazonen Europas) | Geo7 LB3 (Grundzüge des Klimas, Vegetationszonen Europas) | – | 5-6 / 7-8 / – → **7-8** (Gleichstand 5-6/7-8; requires seeklima-landklima (7-8) schließt 5-6 aus) | `seeklima-landklima`, `topographie-europa` |
| 52 | `klimazonen-der-erde` | Ich kann die Klimazonen der Erde von den Tropen bis zu den Polen nennen und mit der Sonneneinstrahlung erklären. | O1 S2; F2 S6 | LP 8 (Klima- und Vegetationszonen, zonale Anordnung) | Geo10 LB3 (Klima- und Vegetationszonen der Erde im Überblick) | IF5 (Zusammenhang solare Einstrahlung und Klimazonen) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `beleuchtungszonen`, `klimazonen-europas` |
| 53 | `klima-boden-vegetation` | Ich kann an einer Landschaftszone zeigen, wie Klima, Boden und Vegetation zusammenwirken. | F2 S6, S8 | KC Natur/Umwelt (Klima, Boden und Oberflächenformen beeinflussen die Vegetation) | Geo7 LB3 (Zusammenschau Klima, Boden, Vegetation in einer Landschaftszone) | IF6 (Landschaftszonen als Zusammenwirken von Geofaktoren) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `klimazonen-europas`, `boden` |
| 54 | `landschaftszonen-der-erde` | Ich kann die Landschaftszonen der Erde auf einer Karte zeigen und ihre Vegetation beschreiben, auch wo sie von der zonalen Anordnung abweichen. | O1 S2 | LP 8 (Klima- und Vegetationszonen und ihre Abweichungen) | Geo10 LB3, LB6, LB7 (Verlauf der Klima- und Vegetationszonen) | IF6 (Landschaftszonen der Erde) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `klimazonen-der-erde`, `klima-boden-vegetation` |
| 55 | `passatkreislauf` | Ich kann mit dem Passatkreislauf erklären, warum es am Äquator fast täglich regnet und an den Wendekreisen große Wüsten liegen. | F2 S8 | LP 8 (Passatkreislauf) | Geo10 LB3 (Modell der Passatzirkulation) | IF5 (planetarische Zirkulation) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `luftdruck-und-wind`, `beleuchtungszonen` |
| 56 | `regenzeit-trockenzeit` **(schwach)** | Ich kann erklären, warum es in den wechselfeuchten Tropen eine Regenzeit und eine Trockenzeit gibt. | F2 S8 | LP 8 (Passatkreislauf, Klima- und Vegetationszonen) | Geo10 LB3 (Zenitalregen, jahreszeitliche Verlagerung, hygrische Jahreszeiten) | IF6 (naturräumliche Bedingungen in den Tropen)<br>Hinweis: die Verlagerung der Passatzirkulation nennt nur BY ausdrücklich | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `passatkreislauf` |
| 57 | `tropischer-regenwald` | Ich kann das Ökosystem tropischer Regenwald mit seinem Stockwerkbau und seinem kurzen Nährstoffkreislauf beschreiben. | F2 S8 (Ökosystem tropischer Regenwald) | LP 8 (Problembereich tropischer Regenwald) | Geo10 LB3 (Merkmale tropischer Ökosysteme: Regenwald) | IF6 (Tropen) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `landschaftszonen-der-erde` |
| 58 | `savanne` | Ich kann Feucht-, Trocken- und Dornsavanne unterscheiden und mit der Länge der Regenzeit erklären. | F2 S8 | LP 8 (Klima- und Vegetationszonen; Raumbeispiel Sahelzone) | Geo10 LB3 (Merkmale der Savannen) | IF6 (Tropen) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `regenzeit-trockenzeit` |
| 59 | `wueste` | Ich kann erklären, wie Wüsten an den Wendekreisen entstehen und wie Pflanzen und Tiere an die Trockenheit angepasst sind. | F2 S8 | LP 8 (Klima- und Vegetationszonen) | Geo10 LB3 (Merkmale der Wüsten) | IF6 (Subtropen) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `passatkreislauf` |
| 60 | `hoehenstufen` | Ich kann die Höhenstufen der Vegetation im Hochgebirge beschreiben und erklären, warum es mit zunehmender Höhe kälter wird. | F2 S8 (Höhenstufen der Vegetation) | LP 5 (Höhenstufen) | Geo10 LB7 (horizontale und vertikale Verbreitung der Vegetation in Südamerika) | – | 5-6 / 9-10 / – → **7-8** (keine Mehrheit (5-6/9-10), requires entscheidet nicht; die mittlere Stufe) | `grosslandschaften-deutschland`, `wetter-und-klima` |
| 61 | `treibhauseffekt` | Ich kann den natürlichen Treibhauseffekt erklären und wie der Mensch ihn durch Treibhausgase verstärkt. | F4 S18 (Klimawandel) | – | Geo10 LB4 (Ursachen des anthropogenen Treibhauseffekts) | IF5 (Treibhauseffekt) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `klimazonen-der-erde` |
| 62 | `klimawandel-ursachen` | Ich kann natürliche und vom Menschen verursachte Gründe für Klimaänderungen unterscheiden und mit Messdaten belegen. | F4 S18 | – | Geo10 LB4 (extraterrestrische und terrestrische Antriebskräfte, wissenschaftliche Erkenntnisse) | IF5 (natürliche und anthropogen bedingte Klimaveränderungen) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `treibhauseffekt` |
| 63 | `klimawandel-folgen` | Ich kann Folgen des Klimawandels wie Meeresspiegelanstieg, Dürren und Wetterextreme beschreiben und erklären, warum sie Regionen verschieden treffen. | F4 S18, S21 | – | Geo10 LB4 (Folgen, regionale Unterschiede); Geo7 LB3 (Folgen in Europa) | IF5 (Meeresspiegelanstieg, Wetterextreme; regionale Auswirkungen)<br>Hinweis: BY nennt Folgen in Europa schon in Geo7; die Stimme zählt für Geo10, wo die Ursachen behandelt werden | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `klimawandel-ursachen` |
| 64 | `tropischer-wirbelsturm` | Ich kann erklären, wie ein tropischer Wirbelsturm entsteht und warum manche Regionen besonders verwundbar sind. | F4 S18 (Naturrisiken) | – | Geo10 LB7 (Vulnerabilität am Beispiel eines Hurrikans) | IF5 (Wetterphänomene, Wetterextreme) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `luftdruck-und-wind`, `klimazonen-der-erde` |
| 65 | `klimaschutz` | Ich kann Maßnahmen zum Klimaschutz wie erneuerbare Energien beurteilen und begründen, was ich selbst beitragen kann. | F4 S20 | – | Geo10 LB4 (Klimaschutz, Fachprofil) | IF5 UK (Maßnahmen zur Verlangsamung der Erwärmung, Energieversorgung) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `klimawandel-ursachen`, `energietraeger` |
| 66 | `klimaanpassung` | Ich kann Maßnahmen zur Anpassung an den Klimawandel beschreiben, zum Beispiel höhere Deiche oder mehr Grün gegen Hitze in der Stadt. | F4 S20 | – | Geo10 LB4 (Anpassungsstrategien) | IF5 UK (Anpassung an Extremwetterereignisse) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `klimawandel-folgen` |

### Strang `landwirtschaft`: Landwirtschaft und Ernährung (Agriculture and food) – 18 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 67 | `naturfaktoren-landwirtschaft` | Ich kann erklären, wie Boden, Temperatur, Niederschlag und Relief bestimmen, was auf einem Feld wachsen kann. | F4 S17 (Landwirtschaft) | LP 5 (Abhängigkeiten von der Natur) | Geo5 LB4 (Temperatur, Niederschlag, Bodeneigenschaft) | IF3 (Standortfaktoren des primären Sektors: Boden, Klima) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `boden`, `wetter-und-klima` |
| 68 | `bauernhof` | Ich kann an einem Bauernhof Betriebsformen wie Ackerbau, Viehhaltung und Sonderkulturen unterscheiden. | F4 S17 | LP 5 (landwirtschaftlicher Betrieb: Nutzungs- und Betriebsformen) | Geo5 LB4 (Landnutzung in einem Agrarraum) | IF3 (Spezialisierung) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `naturfaktoren-landwirtschaft` |
| 69 | `agrarraeume-deutschland` | Ich kann Räume unterschiedlicher landwirtschaftlicher Nutzung in Deutschland auf einer Karte zeigen, zum Beispiel Börden, Grünland und Weinbau. | O1 S1 | – | Geo5 LB4 (verorten Räume unterschiedlicher landwirtschaftlicher Nutzung) | IF3 (Orientierungsraster Wirtschaftsräume in Deutschland) | – / 5-6 / 5-6 → **5-6** (Mehrheit) | `bauernhof`, `grosslandschaften-deutschland` |
| 70 | `wandel-der-landwirtschaft` | Ich kann erklären, wie sich die Landwirtschaft durch Maschinen, Spezialisierung und Massentierhaltung verändert hat. | F3 S12 (Strukturwandel) | LP 5 (Massentierhaltung) | Geo5 LB4 (Merkmale und Wandel des ländlichen Raums) | IF3 (Intensivierung, Spezialisierung) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `bauernhof` |
| 71 | `oekologische-landwirtschaft` | Ich kann konventionelle und ökologische Landwirtschaft vergleichen. | F4 S20 | LP 5 (ökologische und traditionelle Landwirtschaft) | Geo5 LB4 (konventionelle und ökologische Landwirtschaft) | IF3 (nachhaltiges Wirtschaften in der Landwirtschaft) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `wandel-der-landwirtschaft` |
| 72 | `weg-der-lebensmittel` | Ich kann den Weg eines Lebensmittels vom Feld über Verarbeitung, Transport und Handel bis in den Supermarkt beschreiben. | F4 S17 | – | Geo7 LB4 (Nachhaltigkeit von Lebensmitteln: Produktion, Transport, Konsum); Geo5 LB4 (Beispiel) | IF3 (Produktionskette von Nahrungsmitteln) | – / 7-8 / 5-6 → **5-6** (Gleichstand 5-6/7-8, requires entscheidet nicht; nach der Regel die frühere Stufe (BY nennt das Beispiel schon in Geo5)) | `bauernhof` |
| 73 | `regionale-lebensmittel` | Ich kann regionale und importierte Lebensmittel nach Transportweg, Umweltwirkung und Preis vergleichen und begründet einkaufen. | F4 S20 | – | Geo7 LB4 (Vor- und Nachteile regionaler und importierter Produkte) | IF3 UK (eigenes Konsumverhalten) | – / 7-8 / 5-6 → **5-6** (Gleichstand 5-6/7-8, requires entscheidet nicht; nach der Regel die frühere Stufe) | `weg-der-lebensmittel`, `nachhaltigkeit` |
| 74 | `bewaesserung-und-gewaechshaus` | Ich kann am Beispiel von Bewässerung und Gewächshäusern erklären, wie Menschen natürliche Grenzen der Landwirtschaft überwinden und welche Probleme dabei entstehen. | F4 S17, S18 | LP 6.2 (klimatische Abhängigkeiten der Landwirtschaft, Aralsee) | Geo7 LB4 (Bewässerungslandwirtschaft, Glashauskulturen) | IF6 (Bewässerung, Treibhauskulturen) | 5-6 / 7-8 / 7-10 → **7-8** (Mehrheit) | `naturfaktoren-landwirtschaft`, `klimazonen-europas` |
| 75 | `bodenversalzung` | Ich kann erklären, wie falsche Bewässerung zur Versalzung von Böden führt. | F4 S18 (Bodenversalzung) | LP 8 (Versalzung, Grundwasserabsenkung) | Geo10 LB5 (Degradation von Nutzflächen) | IF6 (Bodenversalzung) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `bewaesserung-und-gewaechshaus` |
| 76 | `wassermangel` | Ich kann Ursachen von Wassermangel in Trockenräumen erklären und Konflikte um Wasser beschreiben. | F4 S18 (Wassermangel); F4 S19 (Ressourcenkonflikte) | LP 8 (Grundwasserabsenkung); LP 6.2 (Wassernotstand) | Geo10 LB5 (Wassermangel und -konflikte) | – | 7-8 / 9-10 / – → **7-8** (keine Mehrheit (7-8/9-10), requires entscheidet nicht; nach der Regel die frühere Stufe) | `bewaesserung-und-gewaechshaus`, `wueste` |
| 77 | `subsistenz-und-markt` | Ich kann Landwirtschaft für die eigene Versorgung (Subsistenz) und Landwirtschaft für den Markt unterscheiden. | F4 S17 | – | Geo7 LB4 (Naturfaktoren und wirtschaftliche Rahmenbedingungen) | IF6 (Subsistenzwirtschaft, marktorientierte Produktion) | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `bauernhof` |
| 78 | `weidewirtschaft` | Ich kann extensive Weidewirtschaft und Nomadismus in Trockenräumen beschreiben und erklären, warum sie sich verändern. | F4 S17 | LP 8 (Überweidung) | Geo7 LB4 (extensive Weidewirtschaft); Geo10 LB5 (Nomadismus und Oasenwirtschaft im Wandel) | IF6 (Viehwirtschaft) | 7-8 / 7-8 / 7-10 → **7-8** (Mehrheit) | `subsistenz-und-markt` |
| 79 | `wanderfeldbau` | Ich kann den Brandrodungswanderfeldbau beschreiben und erklären, warum er nur mit wenigen Menschen nachhaltig ist. | F4 S17 | LP 8 (Brandrodungswanderfeldbau) | Geo10 LB3 (landwirtschaftliche Nutzungsformen im Regenwald) | IF6 (Subsistenzwirtschaft) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `tropischer-regenwald`, `subsistenz-und-markt` |
| 80 | `plantagenwirtschaft` | Ich kann die Plantagenwirtschaft beschreiben und ihre Chancen und Probleme für ein tropisches Land beurteilen. | F4 S17 | – | Geo10 LB7 (Plantagenwirtschaft als Entwicklungsimpuls) | IF6 (Plantagenwirtschaft) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `tropischer-regenwald`, `subsistenz-und-markt` |
| 81 | `regenwaldzerstoerung` | Ich kann Ursachen und Folgen der Abholzung des tropischen Regenwaldes erklären. | F4 S18 (Rodung) | LP 8 (Raubbau, Bevölkerungsdruck) | Geo10 LB7 (Amazonien: Ursachen und Folgen der Abholzung) | IF6 (Regenwaldzerstörung) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `tropischer-regenwald` |
| 82 | `regenwald-nachhaltig-nutzen` | Ich kann Beispiele beschreiben, wie man den Regenwald nachhaltig nutzen kann, etwa durch Agroforstwirtschaft. | F4 S20 | – | Geo10 LB7 (ein Beispiel nachhaltiger Nutzung) | IF6 (Agroforstwirtschaft, nachhaltiges Wirtschaften) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `regenwaldzerstoerung`, `wanderfeldbau` |
| 83 | `bodenerosion` | Ich kann erklären, wie Bodenerosion durch Wind und Wasser entsteht und wie man sie verhindern kann. | F4 S18 (Bodenerosion) | LP 8 (Bodenerosion) | – | IF6 (Erosion) | 7-8 / – / 7-10 → **7-8** (Mehrheit) | `exogene-kraefte`, `boden` |
| 84 | `desertifikation` | Ich kann am Beispiel der Sahelzone erklären, wie Überweidung, Abholzung und Dürren zur Desertifikation führen, und Gegenmaßnahmen nennen. | F4 S19 (Desertifikation) | LP 8 (Desertifikation, Raumbeispiel Sahelzone) | Geo10 LB6 (Desertifikation in der Sahelzone) | IF6 (Desertifikation) | 7-8 / 9-10 / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `savanne`, `weidewirtschaft`, `bodenerosion` |

### Strang `wirtschaft`: Wirtschaft, Verkehr und Tourismus (Economy, transport and tourism) – 15 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 85 | `wirtschaftssektoren` | Ich kann Betriebe und Berufe dem primären, sekundären und tertiären Wirtschaftssektor zuordnen. | F3 S10 (wirtschaftliche Raumstrukturen) | LP 9 (Wirtschaftsstruktur) | Geo7 LB5 (Standortfaktoren unterschiedlicher Branchen) | IF3 (primärer, sekundärer, tertiärer Sektor) | 9-10 / 7-8 / 5-6 → **7-8** (drei verschiedene Stimmen: die mittlere) | – |
| 86 | `standortfaktoren` | Ich kann erklären, warum sich ein Betrieb an einem bestimmten Ort ansiedelt, zum Beispiel wegen Rohstoffen, Arbeitskräften, Verkehrswegen oder Kunden. | F4 S17 (Standortwahl von Betrieben) | LP 9 (Standortfaktoren) | Geo7 LB5 (erklären und vergleichen die Bedeutung von Standortfaktoren) | IF3 (Standortfaktoren des sekundären Sektors) | 9-10 / 7-8 / 5-6 → **7-8** (drei verschiedene Stimmen: die mittlere) | `wirtschaftssektoren` |
| 87 | `strukturwandel` | Ich kann am Beispiel eines alten Industriegebiets wie dem Ruhrgebiet erklären, warum Industrien schrumpfen und was an ihre Stelle tritt. | F3 S12 (Strukturwandel) | LP 9 (Region im Wandel; alte und neue Industriegebiete der USA) | – | IF3 (Strukturwandel industriell geprägter Räume) | 9-10 / – / 5-6 → **7-8** (keine Mehrheit (5-6/9-10); requires standortfaktoren (7-8) schließt 5-6 aus; die mittlere Stufe) | `standortfaktoren` |
| 88 | `dienstleistungen` | Ich kann Standorte des Dienstleistungssektors beschreiben, zum Beispiel Banken und Handel in der Innenstadt oder einen Flughafen. | F3 S10 | LP 9 (Rhein-Main-Gebiet: Arbeitsplatzangebot); LP 6.1 (London als Finanzzentrum) | Geo7 LB5 (Metropolen als Wirtschaftsstandorte, Wachstumsbranchen) | IF3 (Standorte und Branchen des tertiären Sektors) | 9-10 / 7-8 / 5-6 → **7-8** (drei verschiedene Stimmen: die mittlere) | `standortfaktoren` |
| 89 | `energietraeger` | Ich kann fossile und erneuerbare Energieträger unterscheiden und erklären, warum fossile Rohstoffe begrenzt sind. | F4 S17 (Bergbau, Energiegewinnung) | LP 6.1 (Rohstoffe und Energiequellen: fossile und regenerative Energien) | Geo7 LB6 (Erdöl und Erdgas aus dem Meer), LB5 (Energieverbund) | IF4 (Rohstoffe, Energie); IF5 (Energieversorgung) | 5-6 / 7-8 / 7-10 → **7-8** (Mehrheit) | – |
| 90 | `verkehr` | Ich kann Verkehrsmittel und Verkehrsnetze vergleichen und beschreiben, wie sie Räume verbinden und die Umwelt belasten. | F3 S11 (Erschließung durch Verkehrswege); O4 S14 | LP 6.1 (Verkehrsströme und Verkehrsnetze); LP 5 (Verkehr) | Geo5 LB5 (Verkehr); Geo7 LB5 (Infrastrukturprojekte) | IF1 (Verkehrswege, Mobilität) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 91 | `seehafen` | Ich kann erklären, warum ein Seehafen eine Drehscheibe für Handel und Verkehr ist. | F3 S11 | LP 5 (Hafen); LP 6.1 (Flug- und Seehäfen) | Geo7 LB6 (Seehäfen als Verkehrs- und Handelsdrehscheiben) | – | 5-6 / 7-8 / – → **5-6** (keine Mehrheit (5-6/7-8), requires entscheidet nicht; nach der Regel die frühere Stufe) | `verkehr` |
| 92 | `fischerei` | Ich kann beschreiben, wie Fischerei und Aquakultur das Meer nutzen, und erklären, warum Überfischung ein Problem ist. | F4 S17 | LP 5 (Fischereiwirtschaft) | Geo7 LB6 (Fischereiwirtschaft und Aquakulturen) | – | 5-6 / 7-8 / – → **5-6** (keine Mehrheit (5-6/7-8), requires entscheidet nicht; nach der Regel die frühere Stufe) | – |
| 93 | `meeresschutz` | Ich kann Ursachen der Meeresverschmutzung wie Plastikmüll nennen und Maßnahmen zum Schutz der Meere vorschlagen. | F4 S19 (Meeresverschmutzung) | LP 5 (Meeresverschmutzung) | Geo7 LB6 (ökologische Belastungen, Schutz der Meere) | – | 5-6 / 7-8 / – → **5-6** (keine Mehrheit (5-6/7-8), requires entscheidet nicht; nach der Regel die frühere Stufe) | `fischerei` |
| 94 | `tourismus-voraussetzungen` | Ich kann erklären, welche Natur und welche Einrichtungen einen Ort an der Küste oder im Gebirge für Urlauber anziehend machen. | F4 S17 (Tourismus) | LP 5 (Nutzungswandel Freizeitverhalten am Meer und im Hochgebirge); LP 6.1 (Fremdenverkehr Südeuropa) | Geo5 LB3 (Naturpotenzial und touristische Nutzung der Alpen) | IF2 (touristisches Potenzial) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `grosslandschaften-deutschland` |
| 95 | `tourismusformen` **(schwach)** | Ich kann Formen des Tourismus wie Erholungs-, Städte- und Ökotourismus unterscheiden. | F4 S17 | LP 6.1 (Fremdenverkehr) | Geo7 LB6 (Tourismus an Europas Küsten: Formen) | IF2 (Formen des Tourismus)<br>Hinweis: HE nennt nur den Fremdenverkehr | 5-6 / 7-8 / 5-6 → **5-6** (Mehrheit) | `tourismus-voraussetzungen` |
| 96 | `tourismus-folgen` | Ich kann beschreiben, wie der Tourismus einen Ort wirtschaftlich, sozial und für die Umwelt verändert. | F4 S18 | LP 5 (Nutzungswandel) | Geo5 LB3 (Problematik menschlicher Eingriffe); Geo7 LB6 (Auswirkungen) | IF2 (Veränderungen eines Ortes durch den Tourismus) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `tourismus-voraussetzungen` |
| 97 | `nachhaltigkeit` | Ich kann an einem Beispiel erklären, was nachhaltig heißt: Umwelt, Wirtschaft und Gesellschaft werden zugleich berücksichtigt. | F4 S20, S21 (nachhaltige Entwicklung) | KC Umwelt-Gesellschaft (Prinzipien der Nachhaltigkeit) | Geo7 LB4 (ökonomische, soziale und ökologische Folgewirkungen); Fachprofil (Nachhaltigkeitsviereck) | IF2 UK (ökonomisches Wachstum und nachhaltige Entwicklung); IF3 (nachhaltiges Wirtschaften) | 5-10 / 7-8 / 5-6 → **5-6** (Gleichstand 5-6/7-8, requires entscheidet nicht; nach der Regel die frühere Stufe) | – |
| 98 | `sanfter-tourismus` | Ich kann Merkmale des sanften Tourismus nennen und begründen, warum er Natur und Menschen eines Ortes schont. | F4 S20 (Tourismusförderung) | – | Geo10 LB7 (Handlungsrichtlinien für eigene Reisen) | IF2 (Merkmale des sanften Tourismus) | – / 9-10 / 5-6 → **7-8** (keine Mehrheit (5-6/9-10), requires entscheidet nicht; die mittlere Stufe) | `tourismus-folgen`, `nachhaltigkeit` |
| 99 | `digitalisierung` **(schwach)** | Ich kann erklären, wie Onlinehandel und schnelles Internet Standorte, Arbeitsplätze und Verkehr verändern. | F3 S12 | – | Geo7 LB5 (Vernetzung durch Datennetze) | IF10 (Raumwirksamkeit von Digitalisierung); IF3 (Digitalisierung)<br>Hinweis: BY nennt nur Datennetze als Infrastruktur | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `standortfaktoren` |

### Strang `siedlung`: Siedlungen und Städte (Settlements and cities) – 13 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 100 | `stadt-und-land` | Ich kann Stadt und Dorf an Bebauung, Größe und Einrichtungen unterscheiden. | F3 S15 (Stadt – Land) | LP 5 (Leben und Arbeiten im ländlichen und städtischen Raum) | Geo5 LB4, LB5 (Merkmale ländlicher und städtischer Räume) | IF1 (physiognomische Merkmale; städtische und ländliche Siedlungen vergleichen) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 101 | `daseinsgrundfunktionen` | Ich kann an meinem Wohnort zeigen, wo Menschen wohnen, arbeiten, einkaufen, lernen, sich erholen und unterwegs sind. | F3 S11 | LP 5 (Heimatgemeinde: Wohnviertel, Gewerbe, Verkehr) | Geo5 LB5 (Funktionen innerhalb einer Stadt) | IF1 (Daseinsgrundfunktionen) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `stadt-und-land` |
| 102 | `stadtviertel` | Ich kann eine Stadt in Viertel wie Innenstadt (City), Wohngebiete, Gewerbegebiete und Naherholungsgebiete gliedern. | F3 S10 | LP 5 (Wohnviertel, Gewerbe- und Industriegebiete) | Geo5 LB5 (Merkmale und funktionale Gliederung) | IF1 (funktionsräumliche Gliederung städtischer Teilräume) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `daseinsgrundfunktionen` |
| 103 | `stadt-umland` **(schwach)** | Ich kann erklären, warum Menschen zwischen Stadt und Umland pendeln, etwa zur Arbeit, zum Einkaufen oder in der Freizeit. | F3 S15 (Stadt – Land) | LP 5 (Verkehr: öffentliche und individuelle Verkehrsmittel) | Geo5 LB5 (Stadt-Umland-Beziehungen, Pendlerströme) | IF1 (Stadt-Umlandbeziehungen: Pendler)<br>Hinweis: HE nennt nur den Verkehr | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `stadtviertel` |
| 104 | `stadtentwicklung` | Ich kann an einem Beispiel beschreiben, wie eine Stadt von ihrem alten Kern aus gewachsen ist. | F3 S10 (vergangene und gegenwärtige Strukturen) | LP 5 (Stadtentwicklung) | Geo5 LB5 (Stadtentwicklung: historische Grundlagen) | IF9 (genetische Merkmale, Wandel von Städten) | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `stadtviertel` |
| 105 | `suburbanisierung` | Ich kann erklären, warum Menschen und Betriebe aus der Stadt ins Umland ziehen und welche Folgen das hat. | F3 S12 | – | Geo5 LB5 (Suburbanisierung) | IF1 (suburbane Siedlungen, Veränderung) | – / 5-6 / 5-6 → **5-6** (Mehrheit) | `stadt-umland` |
| 106 | `laendlicher-raum` | Ich kann beschreiben, wie sich Dörfer verändern, zum Beispiel durch Zuzug, Abwanderung oder weniger Bauernhöfe. | F3 S12 | LP 5 (Leben und Arbeiten im ländlichen Raum) | Geo5 LB4 (Merkmale und Wandel des ländlichen Raums) | IF1 (Veränderung ländlicher Siedlungen) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `stadt-und-land`, `wandel-der-landwirtschaft` |
| 107 | `verdichtungsraeume` | Ich kann Verdichtungsräume und ländliche Räume in Deutschland und Europa auf einer Karte zeigen. | F5 S25 (Verdichtungs- und Peripherräume) | LP 5 (Ballungsräume) | Geo5 LB5 (verorten Verdichtungsräume); Geo7 LB5 | IF1 (Orientierungsraster: Verdichtungsräume und ländliche Regionen) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `stadt-und-land`, `bundeslaender` |
| 108 | `metropolen` | Ich kann Merkmale einer Metropole nennen und Herausforderungen wie Verkehr und Wohnungsmangel beschreiben. | F3 S13 (Megastädte) | LP 6.1 (London, Paris: Übergewicht der Metropole) | Geo7 LB5 (Leben in Metropolen: Kennzeichen, Herausforderungen) | IF9 (Metropolisierung; Mobilität, Wohnraumverfügbarkeit) | 5-6 / 7-8 / 7-10 → **7-8** (Mehrheit) | `verdichtungsraeume` |
| 109 | `nachhaltige-stadt` | Ich kann Maßnahmen für eine nachhaltige Stadt beurteilen, zum Beispiel beim Verkehr, beim Wohnen und bei Grünflächen. | F4 S17 (Stadtökologie), S20 | – | Geo5 LB5 (Umbau der Städte als Beitrag zur nachhaltigen Entwicklung); Geo10 LB7 | IF9 UK (Stadtumbaumaßnahmen) | – / 5-6 / 7-10 → **7-8** (keine Mehrheit (je eine Stimme 5-6, 7-8, 9-10): die mittlere Stufe) | `stadtentwicklung`, `nachhaltigkeit` |
| 110 | `verstaedterung` | Ich kann erklären, warum weltweit immer mehr Menschen in Städten leben (Verstädterung, Landflucht). | F3 S12 (Verstädterung) | KC Mensch/Gesellschaft (Metropolisierung, städtisches Wachstum) | Geo10 LB7 (Metropolisierung) | IF9 (Urbanisierung) | 5-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `metropolen` |
| 111 | `megastaedte` | Ich kann Merkmale und Probleme von Megastädten in Entwicklungs- und Schwellenländern beschreiben. | F3 S13 (Megastädte) | KC Mensch/Gesellschaft (Metropolisierung) | Geo10 LB7 (lateinamerikanische Megastädte) | IF9 (Herausbildung von Megacities) | 5-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `verstaedterung`, `laendergruppen` |
| 112 | `marginalsiedlungen` | Ich kann erklären, wie in großen Städten arme und reiche Viertel getrennt entstehen, etwa Marginalsiedlungen und bewachte Wohnanlagen. | F3 S13 | – | Geo10 LB7 (Marginalsiedlungen und Gated Communities, informeller Sektor) | IF9 (Segregation) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `megastaedte` |

### Strang `entwicklung`: Bevölkerung, Entwicklung und globale Verflechtung (Population, development and global links) – 16 Bausteine

| # | id | iCan | DG | HE | BY | NW | Stimmen → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 113 | `entwicklungsindikatoren` | Ich kann den Entwicklungsstand eines Landes mit Merkmalen wie Einkommen, Lebenserwartung und Bildung beschreiben, auch mit dem HDI. | O1 S2 (Regionen unterschiedlichen Entwicklungsstandes); F5 S25 | KC Umwelt-Gesellschaft (globale Disparitäten) | Geo10 LB2 (Indikatoren zur Klassifizierung nach dem Entwicklungsstand) | IF7 (Entwicklungsindikatoren, HDI) | 5-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `thematische-karte` |
| 114 | `laendergruppen` | Ich kann Entwicklungs-, Schwellen- und Industrieländer unterscheiden und Beispiele auf einer Karte zeigen. | F5 S25 (Entwicklungsländer – Industrieländer) | LP 9 (asiatische Schwellenländer); KC (globale Disparitäten) | Geo10 LB2 (Regionen unterschiedlichen Entwicklungsstandes) | IF7 (Entwicklungs-, Schwellen- und Industrieländer) | 9-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `entwicklungsindikatoren` |
| 115 | `begriffe-pruefen` | Ich kann begründen, warum Begriffe wie „Entwicklungsland“ und einzelne Indikatoren die Wirklichkeit nur zum Teil beschreiben. | O5 S16 | – | Geo10 LB2 (kritisch Stellung zu gängigen Indikatoren) | IF7 (Problematisierung gängiger Begriffe und Einteilungen) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `laendergruppen` |
| 116 | `ursachen-ungleicher-entwicklung` | Ich kann Ursachen dafür erklären, dass sich Länder unterschiedlich entwickeln, zum Beispiel Naturraum, Rohstoffe, Infrastruktur, Bildung und Handel. | F3 S15 (Entwicklungsländer – Industrieländer) | KC Umwelt-Gesellschaft (globale Disparitäten) | Geo10 LB6 (endogene Faktoren als Entwicklungshemmnis) | IF7 (Disparitäten vor dem Hintergrund von Ressourcen, Infrastruktur, Austauschbeziehungen) | 5-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `laendergruppen` |
| 117 | `welthandel` | Ich kann erklären, warum der Tausch von Rohstoffen gegen Industriewaren für viele ärmere Länder ungünstig ist, und fairen Handel beurteilen. | F3 S13 (Welthandel) | – | Geo10 LB6 (globalisierte Weltwirtschaft, Direktinvestitionen); LB7 (Integration in den globalen Markt) | IF7 (Austausch von Rohstoffen und Industriewaren, Handelsabkommen, WTO) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `ursachen-ungleicher-entwicklung` |
| 118 | `entwicklungszusammenarbeit` | Ich kann ein Projekt der Entwicklungszusammenarbeit beschreiben und beurteilen, ob es den Menschen dauerhaft hilft. | F4 S20 | LP 8 (Hilfe zur Selbsthilfe) | Geo10 LB2, LB6 (Entwicklungszusammenarbeit, Entwicklungsprojekt) | IF7 (Projekte der Entwicklungszusammenarbeit) | 7-8 / 9-10 / 7-10 → **9-10** (Gleichstand 7-8/9-10; requires ursachen-ungleicher-entwicklung (9-10) schließt 7-8 aus) | `ursachen-ungleicher-entwicklung`, `nachhaltigkeit` |
| 119 | `ferntourismus` | Ich kann Chancen und Risiken des Ferntourismus für ein Entwicklungsland beurteilen. | F4 S20 (Tourismusförderung) | – | Geo10 LB7 (Ferntourismus als Entwicklungsimpuls, Folgen des Massentourismus) | IF7 (Ausbau von Tourismus; UK Chancen und Risiken des Tourismus) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `tourismus-folgen`, `laendergruppen` |
| 120 | `disparitaeten-europa` | Ich kann wirtschaftlich starke und schwache Räume in Europa unterscheiden und Maßnahmen nennen, die die Unterschiede verringern. | F5 S25 (Verdichtungs- und Peripherräume in Europa) | LP 9 (Aktiv- und Passivraum) | Geo7 LB4 (periphere ländliche Räume: regionale Disparitäten und ihr Abbau) | IF7 (strukturstarke und strukturschwache Räume in Europa) | 9-10 / 7-8 / 7-10 → **7-8** (Gleichstand 7-8/9-10; requires: Grundlage von migration-ursachen (7-8)) | `standortfaktoren`, `verdichtungsraeume` |
| 121 | `bevoelkerungsverteilung` | Ich kann die Verteilung der Bevölkerung auf der Erde beschreiben und erklären, warum manche Räume dicht und andere dünn besiedelt sind. | F3 S10 (Bevölkerungsverteilungen) | LP 8 (Problembeispiel Bevölkerungsdichte); KC (demographische Entwicklung) | – | IF8 (räumliche Verteilung, Bevölkerungsdichte) | 7-8 / – / 7-10 → **7-8** (Mehrheit) | `thematische-karte`, `klimazonen-der-erde` |
| 122 | `bevoelkerungswachstum` | Ich kann beschreiben, wie die Weltbevölkerung wächst, und das Wachstum mit Geburtenrate und Sterberate erklären. | F3 S10 (Vorhersagen zu Bevölkerungsverteilungen) | KC Mensch/Gesellschaft (demographische Entwicklung) | – | IF8 (Bevölkerungswachstum, Geburten-, Sterbe-, Wachstumsrate, Prognose) | 5-10 / – / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `bevoelkerungsverteilung` |
| 123 | `altersstruktur` **(schwach)** | Ich kann eine Bevölkerungspyramide lesen und daraus Schlüsse für die Zukunft eines Landes ziehen. | F3 S10 | KC Mensch/Gesellschaft (demographische Entwicklung) | – | IF8 (Altersstruktur)<br>Hinweis: HE nennt nur allgemein die demographische Entwicklung; BY erst Geo11 (Pyramidendiagramme) | 5-10 / – / 7-10 → **7-8** (Gleichstand 7-8/9-10, requires entscheidet nicht; nach der Regel die frühere Stufe) | `bevoelkerungswachstum` |
| 124 | `tragfaehigkeit` | Ich kann erklären, was Tragfähigkeit eines Raumes bedeutet und warum Hunger oft andere Ursachen hat als zu wenig Nahrung. | F4 S21 (Tragfähigkeit der Erde) | LP 8 (Bevölkerungsdruck; Überbevölkerung?) | – | IF7, IF8 (Tragfähigkeit, Ernährungssicherung) | 7-8 / – / 7-10 → **7-8** (Mehrheit) | `bevoelkerungswachstum`, `naturfaktoren-landwirtschaft` |
| 125 | `migration-ursachen` | Ich kann Ursachen von Migration mit Push- und Pull-Faktoren erklären. | F3 S14 (Migration) | KC Mensch/Gesellschaft (Migration) | Geo7 LB4, LB5 (Arbeitsmigration in und nach Europa); Geo10 LB5 (Ursachen von Migration) | IF8 (Migration: Ursachen, Push- und Pull-Faktoren) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `disparitaeten-europa` |
| 126 | `migration-folgen` | Ich kann Folgen von Migration für die Herkunftsgebiete und die Zielgebiete beschreiben. | F3 S14; F4 S19 (Migration) | KC Umwelt-Gesellschaft (Migration) | Geo7 LB4, LB5 (Folgen für Herkunfts- und Zielgebiete) | IF8 (Folgen in Herkunfts- und Zielgebieten) | 5-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `migration-ursachen` |
| 127 | `globalisierung` | Ich kann an Beispielen aus meinem Alltag erklären, was Globalisierung bedeutet. | F3 S12 (wirtschaftliche Globalisierung); F4 S21 | LP 9 (regionale Auswirkung von Globalisierung); KC (wirtschaftliche Globalisierung) | – (erst Geo11 LB2) | IF10 (Merkmale von Globalisierung) | 9-10 / – / 7-10 → **9-10** (Mehrheit) | `welthandel` |
| 128 | `weltweite-produktion` | Ich kann am Beispiel eines Produkts und eines weltweit tätigen Konzerns zeigen, wie die Herstellung auf viele Länder verteilt ist. | F5 S23 (Globalisierung der Industrie) | LP 9 (verlängerte Werkbank) | – (erst Geo11 LB2) | IF10 (Produktionskette, multinationale Konzerne, veränderte Standortgefüge) | 9-10 / – / 7-10 → **9-10** (Mehrheit) | `globalisierung`, `standortfaktoren` |

## 3. Entscheidungen

### 3.1 Richtstufen, die nicht aus einer Mehrheit folgen

- **Über `requires` entschieden (7):** `gebirgsbildung`, `seeklima-landklima`, `klimazonen-europas` und
  `entwicklungszusammenarbeit` brauchen einen Baustein der höheren Stufe; `exogene-kraefte`, `luftdruck-und-wind` und
  `disparitaeten-europa` sind Voraussetzung eines Bausteins der früheren Stufe. Dazu `strukturwandel` (mittlere
  Stufe, braucht `standortfaktoren`, 7-8).
- **Gleichstand ohne Entscheidung durch `requires`, also die frühere Stufe (15, Nacharbeit):** Das ganze Klima- und
  Zonenthema (`beleuchtungszonen`, `klimazonen-der-erde`, `landschaftszonen-der-erde`, `passatkreislauf`,
  `regenzeit-trockenzeit`, `tropischer-regenwald`, `savanne`, `wueste`) und die Landnutzung in den Zonen
  (`bodenversalzung`, `wanderfeldbau`, `regenwaldzerstoerung`, `desertifikation`): HE Jg 8, BY Geo10, NW Stufe 2
  → 7-8. Dazu `schalenbau` (HE 5-10, BY Geo5, NW 7-10 → 5-6, bisher 7-8) sowie `bevoelkerungswachstum` und
  `altersstruktur` (HE 5-10, NW 7-10 → 7-8, bisher 9-10). Damit hat `tragfaehigkeit` wieder seine Mehrheit 7-8
  (bisher 9-10 wegen `bevoelkerungswachstum`).
- **Mittlere Stufe (7):** `wirtschaftssektoren`, `standortfaktoren`, `dienstleistungen` (HE 9, BY 7, NW 5-6);
  `strukturwandel`, `sanfter-tourismus`, `hoehenstufen` (Stimmen 5-6 und 9-10); `nachhaltige-stadt` (je eine Stimme).
- **Frühere Stufe bei Gleichstand oder ohne Mehrheit, schon in der ersten Fassung (9):** `digitale-karten`, `mental-maps`, `weg-der-lebensmittel`, `regionale-lebensmittel`,
  `wassermangel`, `seehafen`, `fischerei`, `meeresschutz`, `nachhaltigkeit`.

### 3.2 Bausteine getrennt (je eine App-Seite)

Plattentektonik | Plattengrenzen · Vulkanismus | Erdbeben · Leben in Risikoräumen | Katastrophenvorsorge ·
Küstenformen | Küstenschutz | Gezeiten und Watt · Klimadiagramm lesen | zeichnen · Klimazonen Europas | der Erde ·
Klimazonen | Landschaftszonen | Zusammenwirken von Klima, Boden und Vegetation · Treibhauseffekt | Ursachen | Folgen |
Klimaschutz | Klimaanpassung · Regenwald | Regenwaldzerstörung | nachhaltige Nutzung · Bundesländer | Großlandschaften ·
Gradnetz | Koordinaten | Lage beschreiben · Tourismus: Voraussetzungen | Formen | Folgen | sanfter Tourismus |
Ferntourismus · Weg der Lebensmittel | regionale Lebensmittel · Migration: Ursachen | Folgen · Globalisierung | weltweite
Produktion.

### 3.3 Nicht aufgenommen (nur ein Land, und keine direkte Voraussetzung)

| Inhalt | nur in |
|---|---|
| Zeitzonen | HE (LP 6.2; KC Erde als Planet) |
| Gesteinskreislauf, Gesteins- und Bodenbestimmung | HE LP 8; BY Geo5 LB1 (Arbeitstechnik) |
| Aufbau der Atmosphäre (Stockwerkbau) | NW IF5 |
| Entstehung der Alpen durch Eis (glaziale Überformung), Mittelgebirge als Bruchschollen- oder Stufenland, Naturparks | BY Geo5 LB3 |
| Europäische Union, europäische Idee, Einheit und Vielfalt Europas | BY Geo7 LB2 (HE 6.1 nur in der Einleitung) |
| Infrastrukturprojekte über Grenzen, Energieverbund | BY Geo7 LB5 |
| Großbritannien/Frankreich, Nordasien/Russland, Japan, USA als Länderthemen | HE LP 6.1, 6.2, 9 (Regionalgeographie; die allgemeinen Inhalte stecken in den Bausteinen) |
| Orient, orientalische Stadt, Erdöl als Entwicklungsfaktor, Geopolitik | BY Geo10 LB5 |
| Lebenswirklichkeit von Kindern in armen Ländern | BY Geo10 LB2 (HE 5 nur fakultativ) |
| Bevölkerungspolitik | NW IF8 |
| Global Cities, Just-in-time, Outsourcing | NW IF10 |
| Schrumpfende Städte | NW IF9 |
| Raumplanung, Flächennutzungsplan | HE LP 9 fakultativ |
| Polargebiete | HE LP 8 fakultativ |
| Arbeitsweisen ohne eigenen Inhalt (Diagramme, Statistik, Präsentation, Raumanalyse, Exkursion, GIS-Analyse) | alle; Prozesskompetenzen. Aufgenommen nur, wo sie an einen Inhalt gebunden sind: Kartenarbeit, `wetter-messen`, Klimadiagramm, `kartierung` |

### 3.4 Schwach belegt

- `mental-maps`: HE nur im KC; NW nennt die Raumwahrnehmung, nicht die Kopfkarte; BY nichts.
- `kuestenformen`: HE nennt die Küste, nicht die Küstenformen.
- `regenzeit-trockenzeit`: die jahreszeitliche Verlagerung der Passatzirkulation nennt nur BY ausdrücklich.
- `tourismusformen`: HE nennt nur den Fremdenverkehr.
- `digitalisierung`: BY nennt nur Datennetze als Infrastruktur.
- `stadt-umland`: HE nennt nur den Verkehr, nicht die Pendler.
- `altersstruktur`: HE nennt nur allgemein die demographische Entwicklung; BY erst in Geo11.

## 4. Offene Punkte

1. **Klima und Landschaftszonen 7-8 oder 9-10?** HE (Jg 8) steht gegen Bayern (Geo10); NRW nennt nur Stufe 2. Nach
   der Regel gilt bei Gleichstand die frühere Stufe (12 Bausteine in 7-8). Für Bayern liegen diese Bausteine eine
   Stufe zu früh.
2. **Bayern: Globalisierung erst in Geo11.** `globalisierung` und `weltweite-produktion` stehen nur auf HE und NW.
   Der Bayern-Lehrplan der Jg 5–10 nennt Weltbevölkerung, Altersstruktur und Bevölkerungswachstum gar nicht.
3. **HE-Lehrplan G9 ist alt.** Das PDF stammt von 2016, der Inhalt ist älter (G9-Plan vor dem KC; er nennt kein
   Klimawandel-Thema). Das KC von 2011 gilt daneben, nennt aber keine Jahrgänge. Neuere Hessen-Pläne habe ich nicht
   gefunden. Klimawandel steht deshalb nur auf BY und NW.
4. **Mittlere Stufe bei der Wirtschaft:** HE (Jg 9), BY (Geo7) und NW (Stufe 1) liegen bei Sektoren und
   Standortfaktoren weit auseinander; 7-8 ist ein Kompromiss nach der Regel.
5. **DGfG-Quelle:** Die URL zeigt auf eine Kopie beim IQSH Schleswig-Holstein. Wenn eine Adresse der DGfG selbst
   erreichbar ist, sollte `source.url` darauf zeigen.
6. **Überschneidung mit Biologie (geklärt):** Beide Fächer behalten den Klimawandel mit ihrem eigenen Aspekt.
   Über `klimawandel-ursachen` und `klimawandel-folgen` steht `# Siehe auch: biologie/klimawandel`; Biologie verweist
   zurück.

## 5. Quellen, die ich nicht öffnen konnte

- **DGfG direkt:** https://geographie.de/wp-content/uploads/2020/09/Bildungsstandards_Geographie_2020_Web.pdf gibt 404;
  geographie.de ist jetzt die Kongress-Seite. https://www.dgfg.org/ antwortet mit einer Cloudflare-Sperre (403). Ich
  habe stattdessen die Kopie beim IQSH gelesen (Impressum: DGfG, 10. Auflage Juli 2020).
- **LehrplanPLUS:** Geographie 6, 8 und 9 gibt es am Gymnasium nicht (Umleitung auf die Startseite).
- Sonst fehlte keine Quelle.

Downloads: `/tmp/claude-0/-home-user-apps/1c2b2c5a-27bd-5db5-a715-10acdfd55efc/scratchpad/src-erdkunde/`.
Daten und Skripte: `/tmp/claude-0/-home-user-apps/1c2b2c5a-27bd-5db5-a715-10acdfd55efc/scratchpad/gen-erdkunde/`
(`data.py`, `check.py`, `yaml_out.py`, `render.py`).
