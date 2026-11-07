# Recherche Lernlandkarte Biologie, Gymnasium Sekundarstufe I (Jg 5–10)

Grundlage für `map/biologie.yaml`. Methode: `.agents/skills/map-research/SKILL.md`,
Format: `docs/learning-map-contract.md`. Abgerufen am 07.11.2026.

**Ergebnis in Kürze:** 113 Bausteine in den vier KMK-Strängen: `zellen` 19, `vielfalt` 34, `mensch` 43, `umwelt` 17.
Richtstufen: 47 × 5-6, 23 × 7-8, 43 × 9-10. Fünf Bausteine sind schwach belegt. Geprüft per Skript (`check.py`): ids
eindeutig und im Format des Vertrags, jedes iCan beginnt mit „Ich kann“, alle requires verweisen auf vorhandene ids,
keine späteren Richtstufen, keine Zyklen.

**Stand 2 (07.11.2026):** Die 20 Zusammenlegungen der ersten Fassung sind getrennt (3.3); aus 92 wurden 113 Bausteine.
Jeder Teil hat eigene Fundstellen und Stimmen. Die Richtstufen sind nach der Regel des Skills `map-research` neu
abgestimmt (3.1).

## 1. Quellen

Kürzel wie in `map/physik.yaml` und `map/chemie.yaml`. Alle Quellen habe ich im Original geöffnet (PDF per
`pdftotext`, LehrplanPLUS als HTML-Seite).

| Kürzel | Titel | Ausgabe | URL (genau so geöffnet) | Fundstellen |
|---|---|---|---|---|
| KMK | KMK: Weiterentwickelte Bildungsstandards in den Naturwissenschaften für das Fach Biologie (MSA) | Beschluss vom 16.12.2004 i. d. F. vom 13.06.2024 (PDF vom 17.12.2024, 16 S.) | https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2024/2024_06_13-WeBiS_Biologie_MSA.pdf (die Datei ist bytegleich mit der vorab geladenen `src-bio/kmk-bio.pdf`, gleiche MD5-Summe) | „Verbindliche inhaltliche Aspekte“, S. 15 |
| HE | Hessisches Kultusministerium: Bildungsstandards und Inhaltsfelder – Das neue Kerncurriculum für Hessen, Sekundarstufe I – Gymnasium, Biologie | Fassung 2011 (Jahr nicht im Dokument; PDF erstellt am 28.02.2011, auf der Website seit 06/2021); 58 S. | https://kultus.hessen.de/sites/kultus.hessen.de/files/2021-06/kerncurriculum_biologie_gymnasium.pdf (gefunden über https://kultus.hessen.de//Unterricht/Sekundarstufe-I-Kerncurricula) | Kap. 6 Inhaltsfelder bis Ende Jg 9/10, S. 28–32; Kap. 7.1 bis Ende Jg 6, S. 36–39; Kap. 7.2 Jg 8 „entfällt“, S. 40; Kap. 7.3 Übersicht der Schwerpunkte „Jahrgangsstufe 5/6“ und „zusätzlich nach Abschluss der Jahrgangsstufe 9/10“, S. 41–48 |
| BY | ISB Bayern: LehrplanPLUS Gymnasium, Fachlehrpläne | Online-Fassung, abgerufen am 07.11.2026. Die PDF-Gesamtlehrpläne sind laut https://www.lehrplanplus.bayern.de/gesamtlehrplaene derzeit in Überarbeitung (voraussichtlich Q4 2026), daher die Online-Fassung | NT5: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/5/nt_gym · NT6: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/6/nt_gym · NT7: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/7/nt_gym · B8: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/8/biologie · B9: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/9/biologie · B10: https://www.lehrplanplus.bayern.de/fachlehrplan/gymnasium/10/biologie | NT5 „2 Schwerpunkt Biologie“ (2.1–2.5); NT6 „1 Schwerpunkt Biologie“ (1.1–1.5); NT7 hat keinen Biologie-Anteil (Physik und Informatik); Biologie 8 LB 1–6, Biologie 9 LB 1–6, Biologie 10 LB 1–4. Ein Fach Biologie 6 oder 7 gibt es nicht |
| NW | MSB NRW: Kernlehrplan für die Sekundarstufe I Gymnasium in Nordrhein-Westfalen, Biologie | Heft 3413, 1. Auflage 2019 (RdErl. v. 23.06.2019, in Kraft ab 01.08.2019, aufsteigend ab Kl. 5); 42 S. | https://lehrplannavigator.nrw.de/system/files/media/document/file/g9_bi_klp_-3413_2019_06_23.pdf (gefunden über https://lehrplannavigator.nrw.de/sekundarstufe-i/kernlehrplaene-fuer-das-gymnasium-ab-sj-20192020/biologie-gymnasium) | Kap. 2.2 bis Ende Erprobungsstufe: IF1 S. 22 f., IF2 S. 24 f., IF3 S. 25 f.; Kap. 2.3 bis Ende Sek I: IF4 S. 30 f., IF5 S. 32, IF6 S. 33 f., IF7 S. 35 f., IF8 S. 37 (Seiten der PDF) |
| SiLP (nur Hinweis) | QUA-LiS NRW: Beispiel für einen schulinternen Lehrplan, Gymnasium Sek I, Biologie | Fassung vom 31.01.2020 | https://lehrplannavigator.nrw.de/system/files/media/document/file/g9_bi_silp_2020_01_31-1.pdf | Übersicht der Unterrichtsvorhaben: IF1–3 in Jg 5/6; IF4, IF5 und Teile von IF8 in Jg 8; IF6, IF7, IF8 in Jg 10 |

Hinweis zur Stufung in HE und NW: Beide Dokumente nennen für Biologie nur zwei Stufen. HE: „Jahrgangsstufe 5/6“
und „zusätzlich dazu nach Abschluss der Jahrgangsstufe 9/10“ (Kap. 7.3); Kap. 7.2 (Ende Jg 8) „entfällt“, weil sich
nach der Stundentafel keine Erwartungen für Jg 8 formulieren lassen (S. 40). NW: „bis zum Ende der Erprobungsstufe“
(IF1–3) und „bis zum Ende der Sekundarstufe I“ (IF4–8). Jahrgänge nennt nur das NRW-Schulbeispiel (SiLP). Ich
verwende es nur als Hinweis, so wie in den Spalten unten angegeben.

## 2. Bausteine je Strang

Lesehilfe: **Stimmen** = HE / BY / NW. „7-10“ heißt: zweite Stufe des Landes ohne Jahrgang (zählt für 7-8 und 9-10, siehe 3.1). „–“ = nicht genannt. **(schwach)** = schwach belegt (weniger als zwei Länder oder nur ein Teil des Bausteins belegt, Grund in der Spalte). KMK-Kürzel: Z/V/M/U = Inhaltsbereich, Ziffer = Zeile der Liste auf S. 15 (z. B. Z3 = „Fotosynthese und Zellatmung“).

### Strang `zellen`: Lebewesen bestehen aus Zellen (Cells) – 19 Bausteine

| # | id | iCan | KMK | HE | BY | NW | Stimmen HE/BY/NW → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 1 | `kennzeichen-des-lebendigen` | Ich kann an den Kennzeichen des Lebendigen erklären, ob etwas ein Lebewesen ist. | Z1 Kennzeichen des Lebendigen | – | NT5 2.2 (Jg 5): grundlegende Anforderungen an Lebewesen | IF1 (Stufe 1): Kennzeichen des Lebendigen | – / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 2 | `mikroskopieren` | Ich kann die Teile eines Lichtmikroskops benennen und ein Präparat damit scharf einstellen. | Z2 Zellen (Erkenntnisgewinnung) | 9/10: Mikroskopieren und Zeichnen (KC 7.3, S. 41) | NT5 2.1 (Jg 5): Mikroskopieren, Teile des Lichtmikroskops | IF1 (Stufe 1): Präparate mikroskopisch untersuchen | 7-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 3 | `praeparat-und-zeichnung` | Ich kann ein einfaches Frischpräparat herstellen und davon eine beschriftete Zeichnung anfertigen. | Z2 Zellen | 9/10: Anfertigen von Präparaten, Zeichnen von Zellen (S. 41) | NT5 2.1 (Jg 5): einfache Präparate, beschriftete Zeichnungen | IF1 (Stufe 1): Zellen nach Vorgaben zeichnen | 7-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | `mikroskopieren` |
| 4 | `tierzelle-pflanzenzelle` | Ich kann Tier- und Pflanzenzellen an Zellmembran, Zellplasma, Zellkern, Zellwand, Vakuole und Chloroplasten unterscheiden. | Z2 Zellen | 9/10: Zellaufbau ausgewählter Zellen (S. 41) | NT5 2.2 (Jg 5): tierische und pflanzliche Zellen, Zellbestandteile | IF1 (Stufe 1): Zellen anhand lichtmikroskopischer Strukturen unterscheiden | 7-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | `kennzeichen-des-lebendigen`, `praeparat-und-zeichnung` |
| 5 | `organisationsebenen` | Ich kann an einem Beispiel die Ebenen Zelle, Gewebe, Organ, Organsystem und Organismus ordnen. | Z2 Zellen; M1 Organsysteme | 5/6: Aufgabenteilung im Organismus; 9/10: Gewebe, Vernetzung zum System (S. 43) | NT5 2.2 (Jg 5): Gewebe mikroskopieren; NT5 2.3: Organisationsebenen | IF1/IF2 (Stufe 1), Basiskonzept System: Zelle – Gewebe – Organ – Organismus | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `tierzelle-pflanzenzelle` |
| 6 | `fotosynthese` | Ich kann die Fotosynthese als Wortgleichung angeben und erklären, warum Pflanzen, Tiere und Menschen auf sie angewiesen sind. | Z3 Fotosynthese | 5/6: grundlegende phänomenologische Aspekte der Fotosynthese (S. 44) | NT6 1.2 (Jg 6): Photosynthese, Bedeutung für das Leben auf der Erde | IF1 (Stufe 1): Fotosynthese als Reaktionsschema in Worten, Bedeutung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `tierzelle-pflanzenzelle`, `pflanzenorgane` |
| 7 | `zellatmung` | Ich kann die Zellatmung als Wortgleichung angeben und erklären, wozu Zellen Sauerstoff und Nährstoffe brauchen. | Z3 Zellatmung | 5/6: grundlegende phänomenologische Aspekte zur Atmung (S. 44) | NT5 2.3 (Jg 5): Zellatmung, einfaches Reaktionsschema | IF4 (Stufe 2; SiLP 8.8): Grundprinzip der Zellatmung | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `tierzelle-pflanzenzelle` |
| 8 | `fotosynthese-und-zellatmung` | Ich kann Fotosynthese und Zellatmung als Stoff- und Energieumwandlungen vergleichen und erklären, wie sie zusammenhängen. | Z3 Fotosynthese und Zellatmung | 9/10: Vernetzung zu auf- und abbauenden Stoffwechselprozessen (S. 44) | NT6 1.2 (Jg 6): Zusammenhang stofflich und energetisch | IF4 (Stufe 2; SiLP 8.8): Fotosynthese der Zellatmung gegenüberstellen | 7-10 / 5-6 / 7-10 → **7-8** (Gleichstand 7-8/9-10; requires entscheidet (klimawandel)) | `fotosynthese`, `zellatmung` |
| 9 | `zellatmung-energie` | Ich kann erklären, wie Zellen bei der Zellatmung Energie aus Glucose für Bewegung, Wachstum und Körperwärme bereitstellen. | Z3 Zellatmung | 9/10: Stoff- und Energieumwandlung (S. 30) | B10 3.4 (Jg 10): Glucoseabbau, ATP, aerob/anaerob | IF7 (Stufe 2; SiLP 10.2): Bedeutung der Glucose für den Energiehaushalt der Zelle | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `fotosynthese-und-zellatmung`, `naehrstoffe` |
| 10 | `proteine` | Ich kann beschreiben, dass Proteine aus Aminosäuren bestehen und im Körper als Baustoffe, Enzyme, Hormone oder Antikörper viele Aufgaben haben. | Z4 Enzymreaktion (Voraussetzung) | – | B9 3.1 (Jg 9): Vielfalt der Proteine; B10 3.1: Aufbau aus Aminosäuren | IF6 (Stufe 2; SiLP 10.4): funktionelle Vielfalt der Proteine | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `naehrstoffe` |
| 11 | `enzyme` | Ich kann mit dem Schlüssel-Schloss-Modell erklären, wie ein Enzym einen bestimmten Stoff umsetzt. | Z4 Enzymreaktion | 9/10: Schlüssel-Schloss-Prinzip (S. 41) | B10 3.2 (Jg 10): Enzyme als Biokatalysatoren, Schlüssel-Schloss-Modell, Substrat- und Wirkungsspezifität | IF2 (Stufe 1): Wirkungsweise von Verdauungsenzymen mit einfachen Modellvorstellungen; IF6/IF7 (Stufe 2): Schlüssel-Schloss-Modell<br>Hinweis: NW führt das Enzymmodell schon in Stufe 1 ein | 7-10 / 9-10 / 5-6 → **9-10** (Mehrheit) | `proteine`, `verdauungsorgane` |
| 12 | `enzymaktivitaet` **(schwach)** | Ich kann an einem Versuch erklären, wie Temperatur und pH-Wert die Aktivität eines Enzyms beeinflussen. | Z4 Enzymreaktion | – | B10 3.2 (Jg 10): Abhängigkeit der Enzymaktivität von Substratkonzentration, pH-Wert und Temperatur, Denaturierung | –<br>Hinweis: nur BY; aufgenommen, weil die KMK die Enzymreaktion verbindlich nennt | – / 9-10 / – → **9-10** (festgelegt: nur BY stimmt (Jg 10), keine Mehrheit; requires enzyme (9-10)) | `enzyme` |
| 13 | `bakterienzelle` | Ich kann den Bau einer Bakterienzelle beschreiben und sie von Tier- und Pflanzenzellen abgrenzen. | Z2 Zellen | 9/10: Zellaufbau ausgewählter Zellen (allgemein, S. 41) | B9 LB2 (Jg 9): Bau einer prokaryotischen Zelle, Abgrenzung zu eukaryotischen Mikroorganismen | IF7 (Stufe 2; SiLP 10.1): Bau der Bakterienzelle | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `tierzelle-pflanzenzelle` |
| 14 | `vermehrung-der-bakterien` | Ich kann erklären, wie sich Bakterien durch Zweiteilung vermehren und warum ihre Zahl dabei sehr schnell wächst. | (Z2 Zellen) | 9/10: Vermehrung bei Bakterien und Viren (S. 45) | B9 LB2 (Jg 9): ungeschlechtliche Fortpflanzung durch Zweiteilung, exponentielles Populationswachstum | IF7 (Stufe 2; SiLP 10.1): Bau und Vermehrung von Bakterien | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `bakterienzelle` |
| 15 | `viren` | Ich kann den Bau eines Virus beschreiben und erklären, warum sich Viren nur in Wirtszellen vermehren können. | Z1 Kennzeichen des Lebendigen (Grenzfall); M2 | 9/10: Vermehrung bei Viren (S. 45) | B10 LB2 (Jg 10): Bau und lytischer Vermehrungszyklus | IF7 (Stufe 2; SiLP 10.1): Aufbau und Vermehrung von Viren | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `bakterienzelle`, `kennzeichen-des-lebendigen` |
| 16 | `dna-modell` | Ich kann mit einem einfachen DNA-Modell erklären, wie die Erbinformation in der DNA gespeichert ist. | Z2 Zellen; V2 Vererbung | 9/10: vereinfachtes DNA-Modell (S. 41, 45) | B9 3.1 (Jg 9): einfaches DNA-Modell | IF6 (Stufe 2; SiLP 10.4): DNA | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `tierzelle-pflanzenzelle` |
| 17 | `chromosomen` | Ich kann den Bau eines Chromosoms beschreiben und Ein-Chromatid-, Zwei-Chromatid- und homologe Chromosomen unterscheiden. | Z2 Mitose, Meiose (Voraussetzung) | 9/10: Chromosomenmodell (S. 41) | B9 3.2 (Jg 9): Chromosomen, Replikation, Ein-/Zwei-Chromatid-Chromosomen | IF6 (Stufe 2; SiLP 10.4): Chromosomen | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `dna-modell` |
| 18 | `mitose` | Ich kann den Zellzyklus mit der Mitose beschreiben und erklären, warum dabei erbgleiche Tochterzellen entstehen. | Z2 Mitose | 9/10: Zellteilungsprozesse, Mitose (S. 45) | B9 3.2 (Jg 9): Zellzyklus, Mitose | IF6 (Stufe 2; SiLP 10.4): Zellzyklus, Mitose | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `chromosomen` |
| 19 | `meiose` | Ich kann das Prinzip der Meiose beschreiben und erklären, warum Keimzellen einen einfachen Chromosomensatz haben und Geschwister verschieden sind. | Z2 Meiose; V2 genetische Variabilität | 9/10: Keimzellbildung, Meiose (S. 45) | B9 3.3 (Jg 9): Meiose, Neukombination | IF6 (Stufe 2; SiLP 10.4): Meiose und Befruchtung | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `mitose`, `befruchtung` |

### Strang `vielfalt`: Vielfalt und Veränderung von Lebewesen (Diversity and change of living things) – 34 Bausteine

| # | id | iCan | KMK | HE | BY | NW | Stimmen HE/BY/NW → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 20 | `wirbeltierklassen` | Ich kann die fünf Wirbeltierklassen an Körperbedeckung, Atmung, Körpertemperatur und Fortpflanzung unterscheiden und ein Tier einer Klasse zuordnen. | V3 Verwandtschaft; U2 Artenkenntnis | 5/6: Bau und Funktion von Organen von Wirbeltieren, Körperformen (S. 41) | NT6 1.4 (Jg 6): charakteristische Eigenschaften der Wirbeltierklassen | IF1 (Stufe 1): Wirbeltierklassen vergleichen und zuordnen | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 21 | `angepasstheit-fortbewegung` | Ich kann an Beispielen erklären, wie der Körperbau von Fischen, Vögeln und Säugetieren an die Fortbewegung im Wasser, in der Luft oder an Land angepasst ist. | V3 Angepasstheit | 5/6: Körperbau, Lebensweise und Lebensraum (S. 47) | NT6 1.3 (Jg 6): Fortbewegung im Wasser, an Land, in der Luft | IF1 (Stufe 1): Angepasstheit von Säugetieren und Vögeln (Skelett, Fortbewegung) | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `wirbeltierklassen` |
| 22 | `angepasstheit-ernaehrung` | Ich kann an Gebiss und Verdauung von Pflanzenfressern und Fleischfressern erklären, wie Tiere an ihre Nahrung angepasst sind. | V3 Angepasstheit | 5/6: Körperbau und artspezifische Lebensweise (S. 47) | NT6 1.3 (Jg 6): Fleisch- und Pflanzenfresser, Nahrungserwerb | IF1 (Stufe 1): Angepasstheit beim Nahrungserwerb | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `wirbeltierklassen` |
| 23 | `ueberwinterung` | Ich kann erklären, wie wechselwarme und gleichwarme Tiere mit Kältestarre, Winterschlaf, Winterruhe oder Vogelzug den Winter überstehen. | V3 Angepasstheit | 5/6: Regelung der Körpertemperatur (S. 44) | NT6 1.3 (Jg 6): Temperaturregulation, Winterschlaf, Winterruhe, Vogelzug | IF4 (Stufe 2): Einfluss der Jahreszeiten | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `wirbeltierklassen` |
| 24 | `fortpflanzung-wirbeltiere` | Ich kann Fortpflanzung und Entwicklung von Wirbeltieren vergleichen, zum Beispiel äußere und innere Befruchtung, Metamorphose, Nesthocker und Nestflüchter. | V3 Angepasstheit | 5/6: Fortpflanzungsstrategien bei Wirbeltieren (S. 45) | NT6 1.3 (Jg 6): Fortpflanzung im Wasser/an Land, Metamorphose, Nesthocker | IF1 (Stufe 1): Fortpflanzung oder Individualentwicklung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `wirbeltierklassen` |
| 25 | `zuechtung` | Ich kann erklären, wie der Mensch aus Wildtieren durch Züchtung Haus- und Nutztiere mit gewünschten Merkmalen gemacht hat. | V3 Verwandtschaft (Beispiel) | 5/6: Abstammung und Züchtung, Wild- und Nutzformen (S. 47) | NT6 1.4 (Jg 6): Züchtungsvorgänge, Nutz- und Heimtiere | IF1 (Stufe 1): Wild- und Nutztiere durch gezielte Züchtung, Rückführung auf Vererbung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `wirbeltierklassen` |
| 26 | `nutztierhaltung` | Ich kann Formen der Nutztierhaltung beschreiben und danach bewerten, ob sie tiergerecht sind. | – | 5/6: Recherche zur artgerechten Haltung; Bewertung von Züchtung, Haltung und Nutzung (S. 47) | NT6 1.4 (Jg 6): verantwortliche und tiergerechte Haltung; NT6 1.1: Tierschutz bei Heim- und Nutztieren | IF1 (Stufe 1): Formen der Nutztierhaltung erörtern, Tierschutz | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `zuechtung` |
| 27 | `pflanzenorgane` | Ich kann Wurzel, Sprossachse und Blatt einer Samenpflanze benennen und ihre Aufgaben erklären. | M1 Organsysteme (übertragen); Z3 | 5/6: Körperformen von Blütenpflanzen, Struktur und Zusammenspiel der Elemente (S. 36, 41) | NT6 1.2 (Jg 6): Aufgaben der Pflanzenteile | IF1 (Stufe 1): Zusammenwirken der Organe einer Samenpflanze | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 28 | `bluete-und-bestaeubung` | Ich kann den Aufbau einer Blüte beschreiben und erklären, wie es durch Bestäubung zur Befruchtung kommt. | V3 Angepasstheit | 5/6: Fortpflanzungsstrategien bei Blütenpflanzen (S. 45) | NT5 2.4 (Jg 5): Blütenbau, Bestäubung und Befruchtung | IF1 (Stufe 1): Blüten präparieren, Fortpflanzung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `pflanzenorgane` |
| 29 | `fruechte-und-samen` | Ich kann erklären, wie Früchte und Samen durch Wind, Wasser oder Tiere verbreitet werden. | V3 Angepasstheit | 5/6: Fortpflanzungsstrategien bei Blütenpflanzen (allgemein, S. 45) | NT6 1.2 (Jg 6): Frucht als Ausbreitungseinheit | IF1 (Stufe 1): Struktur und Funktion von Früchten und Samen | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `bluete-und-bestaeubung` |
| 30 | `keimung-experiment` | Ich kann ein Experiment zur Keimung planen, bei dem ich nur einen Faktor wie Wasser, Licht oder Temperatur verändere. | (Erkenntnisgewinnung) | – | NT6 1.2 (Jg 6): Einfluss von Außenfaktoren auf Keimung und Wachstum | IF1 (Stufe 1): Experiment nach Variablenkontrolle zu Keimung und Wachstum | – / 5-6 / 5-6 → **5-6** (Mehrheit) | `fruechte-und-samen` |
| 31 | `ungeschlechtliche-vermehrung` | Ich kann geschlechtliche Fortpflanzung und ungeschlechtliche Vermehrung bei Pflanzen, zum Beispiel durch Ausläufer, unterscheiden. | (V2 genetische Variabilität, Voraussetzung) | 5/6: geschlechtliche und ungeschlechtliche Vermehrung (S. 45) | NT6 1.2 (Jg 6): ungeschlechtliche Fortpflanzung, Ausläufer | IF1 (Stufe 1), Basiskonzept Entwicklung: ungeschlechtliche Vermehrung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `bluete-und-bestaeubung` |
| 32 | `wirbellose` | Ich kann wichtige Gruppen der Wirbellosen wie Insekten, Spinnen, Weichtiere und Ringelwürmer am Körperbau unterscheiden und Tiere zuordnen. | U2 Artenkenntnis | – | B9 LB5 (Jg 9): ausgewählte Vertreter der Wirbellosen, Formenkenntnis | IF4 (Stufe 2; SiLP 8.1): Merkmale im äußeren Körperbau ausgewählter Wirbellosen-Taxa | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `wirbeltierklassen` |
| 33 | `insekten` | Ich kann Körperbau, Atmung und Verwandlung (Metamorphose) von Insekten beschreiben. | U2 Artenkenntnis | – | B9 LB5 (Jg 9): Außenskelett aus Chitin, Tracheensystem, Metamorphoseformen | IF4 (Stufe 2; SiLP 8.1): Entwicklungsstadien von Insekten; Eingriffe in Lebensräume am Beispiel der Insekten | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `wirbellose` |
| 34 | `evolutionstheorie-darwin` | Ich kann die Grundgedanken von Darwins Evolutionstheorie wiedergeben: Vielfalt, Überproduktion, natürliche Selektion und Fortpflanzungserfolg. | V1 Evolutionstheorie | 9/10: Evolutionsmechanismen (S. 47) | B9 LB4 (Jg 9): erweiterte Evolutionstheorie; vereinfacht schon NT6 1.4 | IF5 (Stufe 2; SiLP 8.4): Darwin'sche Evolutionstheorie | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `zuechtung` |
| 35 | `angepasstheit-selektion` | Ich kann Angepasstheiten von Lebewesen als Ergebnis natürlicher Selektion erklären. | V3 Angepasstheit | 9/10: Angepasstheit als Resultat der Evolutionsmechanismen (S. 32) | B9 LB4 (Jg 9): Angepasstheiten als Selektionsvorteil | IF5 (Stufe 2; SiLP 8.4): Angepasstheit vor dem Hintergrund der Selektionstheorie | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `evolutionstheorie-darwin`, `angepasstheit-fortbewegung` |
| 36 | `mutation-und-modifikation` **(schwach)** | Ich kann an Beispielen unterscheiden, ob ein Merkmal durch eine Mutation (erblich) oder durch Umwelteinflüsse (Modifikation, nicht erblich) verändert ist. | V2 genetische Variabilität | 9/10: Mutation und Modifikation (S. 31, 47); 5/6: individuelle Veränderungen durch äußere Einflüsse | B9 3.3 (Jg 9): nur Genommutation | IF6 (Stufe 2): nur Genommutation<br>Hinweis: Modifikation nennt nur HE; BY und NW nennen nur Mutationen | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `dna-modell` |
| 37 | `evolutionsfaktoren` | Ich kann erklären, wie Mutation, Rekombination, Selektion und Isolation zusammen Arten verändern. | V1 Evolutionstheorie; V2 genetische Variabilität | 9/10: Mutation, Rekombination, Selektion (S. 47) | B9 LB4 (Jg 9): genetische Variabilität, Selektion, Isolation | IF5 (Stufe 2; SiLP 8.4): Variabilität, natürliche Selektion | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `angepasstheit-selektion`, `meiose`, `mutation-und-modifikation` |
| 38 | `artbegriff` | Ich kann mit dem biologischen Artbegriff entscheiden, ob zwei Lebewesen zur selben Art gehören. | V3 Artbildung | 9/10: Erläuterung des Artbegriffs (S. 47) | – | IF5 (Stufe 2; SiLP 8.5): biologischen Artbegriff anwenden | 7-10 / – / 7-10 → **7-8** (Gleichstand 7-8/9-10; requires lassen beide zu: frühere Stufe) | `fortpflanzung-wirbeltiere` |
| 39 | `artbildung` | Ich kann erklären, wie aus einer Art durch geografische Isolation und Selektion neue Arten entstehen können. | V3 Artbildung | 9/10: Veränderung von Arten über längere Zeiträume (S. 47) | B9 LB4 (Jg 9): Isolation (geographische Isolation), Entstehung der biologischen Vielfalt | IF5 (Stufe 2; SiLP 8.4): Artenwandel durch natürliche Selektion (allgemein)<br>Hinweis: Isolation nennt nur BY; HE und NW nennen den Artenwandel allgemein | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `artbegriff`, `evolutionsfaktoren` |
| 40 | `fossilien` | Ich kann erklären, wie Fossilien entstehen und wie sie, zum Beispiel als Brückentiere, die Evolution belegen. | V1 Evolutionstheorie | 9/10: Forschungsmethoden zur Evolution (S. 47) | B9 LB4 (Jg 9): fossile Abstammungsreihe, Brückentiere | IF5 (Stufe 2; SiLP 8.5): Fossilfunde, Leitfossilien | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `evolutionstheorie-darwin` |
| 41 | `erdzeitalter` | Ich kann die Geschichte des Lebens auf einer Zeitleiste der Erdzeitalter darstellen, auch den Übergang vom Leben im Wasser zum Leben an Land. | V4 Stammesgeschichte (Voraussetzung) | 9/10: Eroberung von Wasser, Land oder Luft als Lebensraum (S. 47) | B10 LB4 (Jg 10): Verlauf der Geschichte des Lebens | IF5 (Stufe 2; SiLP 8.5): Erdzeitalter, Evolution der Landwirbeltiere | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `fossilien` |
| 42 | `stammbaum` | Ich kann aus abgestuften Ähnlichkeiten im Körperbau auf Verwandtschaft schließen und sie in einem Stammbaum darstellen. | V3 Verwandtschaft | 9/10: Stammbäume; Darstellung der Abstammung mit phylogenetischen Stammbäumen (S. 47) | – | IF5 (Stufe 2; SiLP 8.5): abgestufte Ähnlichkeit und Verwandtschaft; Hypothesen zur stammesgeschichtlichen Verwandtschaft | 7-10 / – / 7-10 → **9-10** (Gleichstand 7-8/9-10; requires entscheidet (evolutionstheorie-darwin)) | `evolutionstheorie-darwin`, `wirbeltierklassen` |
| 43 | `natuerliches-system` | Ich kann Lebewesen in die Gruppen des natürlichen Systems wie Reich, Stamm und Klasse einordnen und erklären, dass das System Verwandtschaft abbildet. | V3 Verwandtschaft | – | B10 LB4 (Jg 10): systematische Gruppen des natürlichen Systems: Reich, Stamm, Klasse | IF5 (Stufe 2; SiLP 8.5): natürliches System der Lebewesen | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `stammbaum` |
| 44 | `evolution-des-menschen` | Ich kann anhand von Fossilfunden beschreiben, wie sich Merkmale in der Evolution des Menschen verändert haben. | V4 Stammesgeschichte des Menschen | 9/10: Abstammung des Menschen (S. 47) | B10 LB4 (Jg 10): Fossilfunde, Einordnung des Homo sapiens | IF5 (Stufe 2; SiLP 8.6): Hominidenevolution | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `natuerliches-system`, `fossilien` |
| 45 | `gen-und-allel` | Ich kann die Begriffe Gen, Allel, dominant, rezessiv, Genotyp und Phänotyp an einem Beispiel erklären. | V2 Vererbung | 9/10: Grundlagen der Vererbung, Ausprägung von Merkmalen, klassische Genetik (S. 31, 45) | – | IF6 (Stufe 2; SiLP 10.5): Gen- und Allelbegriff | 7-10 / – / 7-10 → **9-10** (Gleichstand 7-8/9-10; requires entscheidet (meiose)) | `meiose` |
| 46 | `erbgaenge` | Ich kann mit einem Kreuzungsschema vorhersagen, wie ein Merkmal nach den mendelschen Regeln vererbt wird. | V2 Vererbung | 9/10: klassische Genetik (S. 31) | – | IF6 (Stufe 2; SiLP 10.5): Gesetzmäßigkeiten der Vererbung, Rekombinationswahrscheinlichkeiten | 7-10 / – / 7-10 → **9-10** (Gleichstand 7-8/9-10; requires entscheidet (gen-und-allel)) | `gen-und-allel` |
| 47 | `familienstammbaum` | Ich kann einen Familienstammbaum mit einem eindeutigen Erbgang auswerten. | V2 Vererbung | 9/10: individuelle Stammbäume (S. 47) | – | IF6 (Stufe 2; SiLP 10.5): Familienstammbäume | 7-10 / – / 7-10 → **9-10** (Gleichstand 7-8/9-10; requires entscheidet (erbgaenge)) | `erbgaenge` |
| 48 | `proteinbiosynthese` | Ich kann in einfachen Schritten beschreiben, wie eine Zelle nach der Information eines Gens ein Protein herstellt (Proteinbiosynthese). | V2 Vererbung | – | B9 3.1 (Jg 9): Grundprinzip der Proteinbiosynthese | IF6 (Stufe 2; SiLP 10.4): grundlegendes Prinzip der Proteinbiosynthese<br>Hinweis: HE nennt nur die Ausprägung von Merkmalen (S. 45) | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `dna-modell`, `proteine` |
| 49 | `vom-gen-zum-merkmal` | Ich kann an einem Beispiel erklären, wie ein Protein, etwa ein Enzym, ein Merkmal hervorbringt (Genwirkkette). | V2 Vererbung | 9/10: Ausprägung von Merkmalen (S. 45) | B9 3.1 (Jg 9): Rolle der Proteine bei der Merkmalsausbildung (u. a. als Enzyme), Genwirkkette | IF6 (Stufe 2; SiLP 10.4): Bedeutung von Proteinen bei der Merkmalsausprägung | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `proteinbiosynthese`, `enzyme` |
| 50 | `karyogramm` | Ich kann in einem Karyogramm des Menschen die Chromosomen nach Paaren ordnen, die Geschlechtschromosomen erkennen und eine abweichende Chromosomenzahl finden. | V2 genetische Variabilität | – | B9 3.3 (Jg 9): Karyogramm des Menschen; B9 3.2: Autosomen, Gonosomen | IF6 (Stufe 2; SiLP 10.4): Karyogramme analysieren, Abweichungen vom Chromosomensatz ermitteln | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `chromosomen` |
| 51 | `trisomie-21` | Ich kann erklären, wie eine Trisomie 21 durch einen Fehler in der Meiose entsteht und welche Folgen sie hat. | V2 genetische Variabilität | 9/10: Veränderung genetischer Information, Erbkrankheiten (S. 45 f.) | B9 3.3 (Jg 9): Meiosefehler, z. B. Trisomie 21 | IF6 (Stufe 2; SiLP 10.4): Ursachen und Auswirkungen einer Genommutation am Beispiel der Trisomie 21 | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `meiose`, `karyogramm` |
| 52 | `praenataldiagnostik` | Ich kann Methoden der Pränataldiagnostik nennen und ihre Möglichkeiten und Grenzen abwägen. | V2 genetische Variabilität (Bewertung) | 9/10: Bewertung von Handlungsoptionen bei Erbkrankheiten; Reproduktionsmedizin (allgemein, S. 46) | B9 3.3 (Jg 9): reproduktionsmedizinische Diagnostik, pränatale Diagnostik | IF6 (Stufe 2; SiLP 10.4): Möglichkeiten und Grenzen der Pränataldiagnostik | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `trisomie-21` |
| 53 | `gentechnik` | Ich kann das Prinzip der Gentechnik (Einbau fremder DNA) beschreiben und Chancen und Risiken bewerten. | (V2 Vererbung, Bewertung) | 9/10: gentechnische Veränderungen, Bewertung (S. 31, 46) | B9 3.3 (Jg 9): Einbau von Fremd-DNA, Bewertung | – | 7-10 / 9-10 / – → **9-10** (Mehrheit) | `dna-modell`, `bakterienzelle` |

### Strang `mensch`: Der Mensch als Lebewesen (The human being as a living thing) – 43 Bausteine

| # | id | iCan | KMK | HE | BY | NW | Stimmen HE/BY/NW → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 54 | `skelett` | Ich kann wichtige Teile des Skeletts wie Schädel, Wirbelsäule und Gliedmaßen benennen und ihre Aufgaben für Stütze, Schutz und Bewegung erklären. | M1 Organsysteme | 5/6: Bau und Funktion von Organsystemen des Menschen (allgemein, S. 41) | NT5 2.3 (Jg 5): wichtige Teile des Skeletts und ihre Funktionen (Stütze, Schutz, Bewegung) | IF2 (Stufe 1): Abschnitte des Skeletts und ihre Funktionen | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 55 | `gelenke` **(schwach)** | Ich kann den Bau eines Gelenks beschreiben und Kugelgelenk und Scharniergelenk am eigenen Körper zeigen. | M1 Organsysteme | 5/6: Steuerung von Körperbewegungen (allgemein, S. 44) | NT5 2.3 (Jg 5): Bau und Funktion der Gelenke, Gelenktypen | IF2 (Stufe 1): Grundprinzip von Bewegungen, Bau und Funktion des Bewegungssystems (allgemein)<br>Hinweis: Gelenke nennt ausdrücklich nur BY; HE und NW nennen das Bewegungssystem allgemein; direkte Voraussetzung von gegenspielerprinzip | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `skelett` |
| 56 | `gegenspielerprinzip` | Ich kann erklären, wie Muskeln als Gegenspieler zusammen mit Sehnen und Gelenken eine Bewegung ermöglichen. | M1 Organsysteme | 5/6: Gegenspielerprinzip an der Skelettmuskulatur (S. 41) | NT5 2.3 (Jg 5): Gegenspielerprinzip | IF2 (Stufe 1): Zusammenwirken von Skelett und Muskulatur | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `gelenke` |
| 57 | `naehrstoffe` | Ich kann Kohlenhydrate, Fette, Eiweiße, Vitamine, Mineralstoffe und Ballaststoffe unterscheiden und ihre Aufgaben im Körper nennen. | M3 Ernährung | 5/6: Aspekte zur ausgewogenen Ernährung (S. 44) | NT5 2.3 (Jg 5): Nahrungsbestandteile und ihre Bedeutung; B10 3.1 | IF2 (Stufe 1): Nahrungsbestandteile und ihre Bedeutung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 58 | `naehrstoffnachweise` | Ich kann Stärke mit Iodlösung und Fett mit der Fettfleckprobe in Lebensmitteln nachweisen und das Ergebnis festhalten. | M3 Ernährung (Erkenntnisgewinnung) | 5/6: physiologische Untersuchungen zu einem Stoffwechselprozess (allgemein, S. 44) | NT5 2.1 (Jg 5): einfache Nachweisreaktionen: Stärkenachweis, Fettfleckprobe | IF2 (Stufe 1): einfache Nährstoffnachweise planen, durchführen und dokumentieren<br>Hinweis: HE nennt Nachweise nicht ausdrücklich | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `naehrstoffe` |
| 59 | `energiebedarf` | Ich kann an Beispielen erklären, wofür der Körper Energie braucht, etwa für Bewegung, Wachstum und Körperwärme, und warum der Bedarf bei Anstrengung steigt. | M3 Ernährung | 5/6: Zusammenhänge zwischen Stoff- und Energieumwandlungen (S. 44) | NT5 2.3 (Jg 5): Beispiele für den Energiebedarf des Körpers, Energieinhalt verschiedener Nahrungsmittel | IF2 (Stufe 1): Zusammenhang zwischen Nahrungsaufnahme, Energiebedarf und Belastung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `naehrstoffe` |
| 60 | `ausgewogene-ernaehrung` | Ich kann eine ausgewogene Mahlzeit zusammenstellen und begründen, warum sie gesund ist. | M3 Gesundheitsbildung, Ernährung | 5/6: Aspekte zur ausgewogenen Ernährung (S. 44) | NT5 2.3 (Jg 5): Gesundheitsvorsorge durch ausgewogene Ernährung; B10 3.1 | IF2 (Stufe 1): ausgewogene Ernährung; Lebensmittel nach Qualitätsmerkmalen beurteilen | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `energiebedarf`, `naehrstoffe` |
| 61 | `verdauungsorgane` | Ich kann den Weg der Nahrung durch die Verdauungsorgane beschreiben und erklären, was in jedem Organ geschieht. | M1 Organsysteme | 5/6: Verdauungssystem (S. 43) | NT5 2.3 (Jg 5): Verdauungsorgane, Resorption; B10 3.2 | IF2 (Stufe 1): Verdauungsorgane und -vorgänge | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `naehrstoffe`, `organisationsebenen` |
| 62 | `atmung-und-gasaustausch` | Ich kann den Weg der Atemluft beschreiben und erklären, wie in den Lungenbläschen Sauerstoff und Kohlenstoffdioxid ausgetauscht werden. | M1 Organsysteme | 5/6: Herz-Lungen-System (S. 43) | NT5 2.3 (Jg 5): Gasaustausch; B10 3.3 | IF2 (Stufe 1): Atmungsorgane, Gasaustausch in der Lunge | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `organisationsebenen` |
| 63 | `oberflaechenvergroesserung` | Ich kann an Lungenbläschen und Darmzotten erklären, warum eine große Oberfläche den Stoffaustausch verbessert. | M1 Organsysteme | 5/6: Prinzip der Oberflächenvergrößerung an Lunge oder Darm (S. 41) | NT5 2.3 (Jg 5): Oberflächenvergrößerung | IF2 (Stufe 1): Oberflächenvergrößerung an Dünndarm und Lunge | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `verdauungsorgane`, `atmung-und-gasaustausch` |
| 64 | `blut` | Ich kann beschreiben, woraus Blut besteht, und erklären, wie es Nährstoffe, Sauerstoff und Kohlenstoffdioxid im Körper transportiert. | M1 Organsysteme | 5/6: Herz-Lungen-System (allgemein, S. 43) | NT5 2.3 (Jg 5): Blutkreislauf als Transportsystem, Austausch der Atemgase zwischen Blut und Lungenbläschen; B10 3.3: Hämoglobin | IF2 (Stufe 1): Zusammensetzung und Aufgaben des Blutes, Blut als Transportmittel<br>Hinweis: die Zusammensetzung des Blutes nennt nur NW | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `atmung-und-gasaustausch`, `verdauungsorgane` |
| 65 | `herz-und-blutkreislauf` | Ich kann den Bau des Herzens beschreiben und den Weg des Blutes durch Körper- und Lungenkreislauf mit Arterien, Venen und Kapillaren verfolgen. | M1 Organsysteme | 5/6: Herz-Lungen-System (S. 43) | NT5 2.3 (Jg 5): Blutkreislauf: Herz, Arterien, Venen, Kapillaren; B10 3.3 | IF2 (Stufe 1): Blutkreislauf, Bau und Funktion des Herzens | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `blut` |
| 66 | `koerperliche-belastung` | Ich kann Puls und Atemfrequenz in Ruhe und bei Belastung messen und die Unterschiede mit dem Bedarf der Zellen an Sauerstoff und Nährstoffen erklären. | M1 Organsysteme (Erkenntnisgewinnung) | 5/6: physiologische Untersuchungen am eigenen Körper (S. 43) | NT5 2.3 (Jg 5): Messwerte zu Atem- und Herzschlagfrequenz | IF2 (Stufe 1): quantitatives Experiment zu Herzschlag- oder Atemfrequenz | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `herz-und-blutkreislauf`, `zellatmung` |
| 67 | `rauchen` | Ich kann beschreiben, wie Rauchen Lunge und Kreislauf schädigt und warum Nikotin abhängig macht. | M3 Suchtprävention | 9/10: Drogen als Störfaktoren (S. 30) | NT5 2.3 (Jg 5): Schädigung der Lunge, Suchtgefahr durch Rauchen | IF2 (Stufe 1): Folgen des Tabakkonsums | 7-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | `atmung-und-gasaustausch` |
| 68 | `reiz-reaktion` | Ich kann an einem Alltagsbeispiel die Kette von der Sinneszelle über Nerven und Gehirn bis zum Muskel darstellen. | M1 Organsysteme | 5/6: Informationswege, Reiz-Reaktions-Mechanismen bei Tier und Mensch (S. 42) | NT5 2.3 (Jg 5): Reiz-Reaktions-Kette | IF7 (Stufe 2; SiLP 10.6): Reiz-Reaktions-Schema | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | – |
| 69 | `auge-und-ohr` | Ich kann erklären, wie Auge oder Ohr Reize aufnehmen, wie Sehfehler oder Hörschäden entstehen und wie ich meine Sinnesorgane schütze. | M1 Organsysteme; M3 Gesundheitsbildung | 9/10: Leistungsstärke und Gesundheitsschutz von Auge oder Ohr (S. 42) | B8 LB2 (Jg 8): Auge, Sehfehler, Hörvorgang; NT5: Gehörschutz | – | 7-10 / 7-8 / – → **7-8** (Mehrheit) | `reiz-reaktion` |
| 70 | `nervenzelle` | Ich kann den Bau einer Nervenzelle mit Zellkörper, Dendriten, Axon und Endknöpfchen beschreiben und erklären, wie sie Signale weiterleitet. | M1 Organsysteme | 9/10: Erregung und Erregungsweiterleitung zum Gehirn an Zellstrukturen (Sinneszelle, Nervenzelle) (S. 28, 42) | B8 LB2 (Jg 8): Aufbau einer Nervenzelle | IF7 (Stufe 2; SiLP 10.6): einfache Modellvorstellungen zu Neuron und Synapse | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `reiz-reaktion` |
| 71 | `synapse` | Ich kann mit einem einfachen Modell erklären, wie eine chemische Synapse ein Signal mit Botenstoffen an die nächste Zelle weitergibt. | M1 Organsysteme | – | B8 LB2 (Jg 8): grundlegende Funktionsweise einer chemischen Synapse | IF7 (Stufe 2; SiLP 10.6): Informationsübertragung an chemischen Synapsen<br>Hinweis: HE nennt nur die Erregungsweiterleitung an Zellstrukturen (S. 28) | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `nervenzelle` |
| 72 | `hormone` | Ich kann erklären, wie Hormone als Botenstoffe mit dem Blut zu ihren Zielzellen gelangen und dort nach dem Schlüssel-Schloss-Prinzip wirken. | M1 Organsysteme | 9/10: Hormone als Botenstoffe im Organismus (S. 28, 42) | B8 LB2 (Jg 8): zellulärer Wirkungsmechanismus, Rezeptorbindung nach dem Schlüssel-Schloss-Modell | IF7 (Stufe 2; SiLP 10.2): Schlüssel-Schloss-Modell bei Hormonen | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `herz-und-blutkreislauf` |
| 73 | `hormon-und-nervensystem` | Ich kann Hormonsystem und Nervensystem nach Weg und Geschwindigkeit der Signalübertragung vergleichen. | M1 Organsysteme | 9/10: weitere Informationswege durch Hormone als Botenstoffe (allgemein, S. 28) | B8 LB2 (Jg 8): Vergleich der Informationsübertragungssysteme (Geschwindigkeit, Weg) | IF7 (Stufe 2; SiLP 10.6): Informationsübertragung im Nervensystem mit der durch Hormone vergleichen<br>Hinweis: HE nennt den Vergleich nicht ausdrücklich | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `hormone`, `synapse` |
| 74 | `blutzuckerregulation` | Ich kann die Regelung des Blutzuckers durch Insulin und Glukagon als Regelkreis erklären. | M1 Organsysteme | 9/10: Regelmechanismen physiologischer Prozesse, hormonelle Steuerungen, Regelkreisschema (S. 44 f.) | B8 LB2 (Jg 8): Blutzuckerregulation durch Hormone | IF7 (Stufe 2; SiLP 10.2): Blutzuckerregulation durch negatives Feedback und antagonistisch wirkende Hormone | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `hormone` |
| 75 | `diabetes` | Ich kann Ursachen und Folgen von Diabetes Typ 1 und Typ 2 vergleichen und erklären, wie man Typ 2 vorbeugen kann. | M1 Organsysteme; M3 Gesundheitsbildung | 9/10: Wirkung von Störfaktoren auf Regelmechanismen (allgemein, S. 44) | B8 LB2 (Jg 8): Diabetes, auch als Zivilisationskrankheit | IF7 (Stufe 2; SiLP 10.2): Diabetes Typ I und II vergleichen, Vorbeugung von Typ II | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `blutzuckerregulation` |
| 76 | `stressreaktion` | Ich kann erklären, wie Nerven und Hormone bei Stress zusammenwirken, und Wege nennen, gut mit Stress umzugehen. | M3 Gesundheitsbildung | – | B8 LB2 (Jg 8): Stressreaktion, Stressbewältigung | IF7 (Stufe 2; SiLP 10.6): Reaktionen des Körpers auf Stress | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `hormon-und-nervensystem` |
| 77 | `sucht` | Ich kann Genuss, Gewöhnung und Sucht unterscheiden und beschreiben, wie Suchtmittel und Verhaltenssüchte Körper und Psyche verändern. | M3 Suchtprävention | 9/10: Drogen als Störfaktoren (S. 30) | B8 LB5 (Jg 8): Genuss und Sucht, Suchtentstehung | IF7 (Stufe 2; SiLP 10.6): Auswirkungen von Drogenkonsum | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `synapse`, `rauchen` |
| 78 | `hygiene` | Ich kann erklären, warum Körperpflege und Hygiene im Alltag und in der Pubertät wichtig sind und wie sie vor Ansteckung schützen. | M3 Gesundheitsbildung; M2 Immunabwehr | 5/6: Bewertung von Maßnahmen zur Vermeidung von Infektionen (S. 46) | NT5 2.3 (Jg 5): Gesundheitsvorsorge (Körperhygiene, Infektionsschutz); B10 LB2: Hygiene und Körperpflege | IF3 (Stufe 1): Körperpflege und Hygiene; IF7 (Stufe 2): Bedeutung hygienischer Maßnahmen<br>Hinweis: BY B10 und NW IF7 greifen Hygiene bei den Infektionskrankheiten wieder auf | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `pubertaet` |
| 79 | `infektionskrankheiten` | Ich kann bakterielle und virale Infektionskrankheiten an Beispielen unterscheiden, ihre Übertragungswege nennen und passende Schutzmaßnahmen ableiten. | M2 Immunabwehr | 9/10: Infektionskrankheiten (AIDS und Hepatitis) (S. 43) | B10 LB2 (Jg 10): Bakterien und Viren als Krankheitserreger, Übertragungswege, Schutzmaßnahmen | IF7 (Stufe 2; SiLP 10.1): virale und bakterielle Infektionskrankheiten, hygienische Maßnahmen | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `vermehrung-der-bakterien`, `viren`, `hygiene` |
| 80 | `unspezifische-abwehr` | Ich kann beschreiben, wie Haut, Schleimhäute, Magensäure und Fresszellen Krankheitserreger unspezifisch abwehren. | M2 Mechanismen der Immunabwehr | 9/10: Immunsystem, Immunität (S. 43) | B10 LB2 (Jg 10): unspezifische Abwehr | IF7 (Stufe 2; SiLP 10.1): unspezifische Immunreaktion | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `infektionskrankheiten` |
| 81 | `spezifische-abwehr` | Ich kann erklären, wie Antikörper und Gedächtniszellen einen bestimmten Erreger erkennen und unschädlich machen. | M2 Mechanismen der Immunabwehr | 9/10: Immunsystem, Immunität (S. 43) | B10 LB2 (Jg 10): spezifische Abwehr, Bildung von Antikörpern | IF7 (Stufe 2; SiLP 10.1): spezifische Immunreaktion | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `unspezifische-abwehr`, `proteine` |
| 82 | `allergie` | Ich kann eine Allergie als Fehlreaktion des Immunsystems beschreiben und mit der Abwehr eines Krankheitserregers vergleichen. | M2 Mechanismen der Immunabwehr | – | B10 LB2 (Jg 10): Fehlreaktion des Immunsystems (Allergie) | IF7 (Stufe 2; SiLP 10.1): allergische Reaktion mit der Immunantwort bei Infektionen vergleichen | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `spezifische-abwehr` |
| 83 | `impfung` | Ich kann aktive und passive Immunisierung unterscheiden und begründen, warum Schutzimpfungen sinnvoll sind. | M2 Impfung | 9/10: Immunisierung (S. 29) | B10 LB2 (Jg 10): aktive und passive Immunisierung, Impfempfehlungen | IF7 (Stufe 2; SiLP 10.1): passive und aktive Immunisierung, STIKO | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `spezifische-abwehr` |
| 84 | `antibiotika` | Ich kann erklären, wie Antibiotika gegen Bakterien wirken, warum sie gegen Viren nicht helfen und wie Resistenzen entstehen. | M2 Immunabwehr; M3 Gesundheitsbildung | – | B10 LB2 (Jg 10): Antibiotika, Resistenzbildung | IF7 (Stufe 2; SiLP 10.1): Einsatz von Antibiotika, Resistenzen | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `infektionskrankheiten` |
| 85 | `pubertaet` | Ich kann körperliche und seelische Veränderungen in der Pubertät bei Mädchen und Jungen beschreiben. | M4 Pubertät | 5/6: Veränderung während der Pubertät (S. 46) | NT5 2.3 (Jg 5): Pubertät; B8 LB3 | IF3 (Stufe 1): Veränderungen in der Pubertät | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | – |
| 86 | `geschlechtsorgane` | Ich kann Bau und Aufgaben der weiblichen und männlichen Geschlechtsorgane beschreiben. | M4 Fortpflanzung | 5/6: äußere Geschlechtsmerkmale (S. 46) | NT5 2.3 (Jg 5): Bau und Funktion der weiblichen und männlichen Geschlechtsorgane | IF3 (Stufe 1): Bau und Funktion der Geschlechtsorgane | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `pubertaet` |
| 87 | `menstruationszyklus` | Ich kann in Grundzügen erklären, was während eines Menstruationszyklus mit Eizelle und Gebärmutterschleimhaut geschieht. | M4 Fortpflanzung | – | NT5 2.3 (Jg 5): vereinfachter weiblicher Zyklus (keine hormonelle Regulation) | IF3 (Stufe 1): weiblichen Zyklus in Grundzügen erklären<br>Hinweis: HE nennt den Zyklus erst in 9/10 mit den Hormonen (siehe zyklus-und-hormone) | – / 5-6 / 5-6 → **5-6** (Mehrheit) | `geschlechtsorgane` |
| 88 | `befruchtung` | Ich kann Eizelle und Spermienzelle vergleichen und beschreiben, wie es zur Befruchtung kommt. | M4 Fortpflanzung | 5/6: Zeugung (S. 46) | NT5 2.3 (Jg 5): Befruchtung, Eizelle, Spermienzelle; Zeugung | IF3 (Stufe 1): Eizelle und Spermium vergleichen, Befruchtung beschreiben | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `geschlechtsorgane` |
| 89 | `schwangerschaft-und-geburt` | Ich kann die Entwicklung vom Embryo zum Fötus und die Geburt beschreiben und begründen, wie eine Schwangere ihr Kind vor Gesundheitsrisiken schützt. | M4 Fortpflanzung | 5/6: Schwangerschaft und Geburt (S. 46) | B8 LB3 (Jg 8): Schwangerschaft, Gesundheitsvorsorge, Austausch von Stoffen durch die Plazenta | IF3 (Stufe 1): Schwangerschaft und Geburt, Vermeidung von Gesundheitsrisiken für Embryo und Fötus | 5-6 / 7-8 / 5-6 → **5-6** (Mehrheit) | `befruchtung` |
| 90 | `verhuetung` | Ich kann Methoden der Empfängnisverhütung beschreiben und erklären, warum Kondome auch vor Infektionen schützen. | M4 Sexualbildung | 5/6: Empfängnisverhütung (S. 46) | B8 LB3 (Jg 8): Empfängnisregulation | IF3 (Stufe 1): Methoden der Empfängnisverhütung | 5-6 / 7-8 / 5-6 → **5-6** (Mehrheit) | `befruchtung` |
| 91 | `sexuelle-selbstbestimmung` | Ich kann eigene Grenzen benennen, die Grenzen anderer achten und erwünschte Nähe von Übergriffen unterscheiden. | M4 Sexualbildung | 5/6: sexuelle Selbstbestimmung, Rollenverhalten (S. 46) | NT5 2.3 (Jg 5): Intimsphäre, Prävention von Missbrauch; B8 LB3 | IF3 (Stufe 1): respektvoller Sprachgebrauch; IF8 (Stufe 2): Verantwortung | 5-6 / 5-6 / 5-6 → **5-6** (Mehrheit) | `pubertaet` |
| 92 | `zyklus-und-hormone` | Ich kann erklären, wie Hormone den Menstruationszyklus steuern und wie hormonelle Verhütungsmittel wirken. | M4 Fortpflanzung | 9/10: Hormone, biologische Grundlagen der Empfängnisverhütung (S. 46) | B8 LB3 (Jg 8): Steuerung des Zyklus durch Hormone | IF8 (Stufe 2; SiLP 10.3): hormonelle Steuerung des Zyklus | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `menstruationszyklus`, `hormone` |
| 93 | `verhuetung-vergleichen` | Ich kann Verhütungsmethoden nach Sicherheit (Pearl-Index), Handhabung und Nebenwirkungen vergleichen und begründet auswählen. | M4 Sexualbildung | 9/10: Abwägung von Handlungsoptionen (S. 46) | B8 LB3 (Jg 8): Vor- und Nachteile abwägen | IF8 (Stufe 2; SiLP 10.3): Pearl-Index, Methoden vergleichen | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `zyklus-und-hormone`, `verhuetung` |
| 94 | `sexuell-uebertragbare-infektionen` | Ich kann Übertragungswege sexuell übertragbarer Infektionen wie HIV nennen und erklären, wie ich mich und andere schütze. | M2 Immunabwehr; M4 Sexualbildung | 9/10: AIDS, Hepatitis (S. 43); 5/6: Vermeidung von Infektionen (S. 46) | B8 LB3 (Jg 8): sexuell übertragbare Erkrankungen, HIV | IF7 (Stufe 2): virale Infektionskrankheiten (allgemein) | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `verhuetung` |
| 95 | `sexuelle-vielfalt` | Ich kann sexuelle Orientierungen und geschlechtliche Identitäten sachlich beschreiben und Sachinformationen von Wertungen unterscheiden. | M4 Sexualbildung und Diversität | 9/10: heterosexuelle und homosexuelle Partnerschaften (S. 46) | B8 LB3 (Jg 8): Geschlechtsidentität, sexuelle Orientierung | IF8 (Stufe 2; SiLP 8.10): sexuelle Orientierung, geschlechtliche Identität | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `pubertaet` |
| 96 | `schwangerschaftsabbruch` | Ich kann die gesetzlichen Regeln zum Schwangerschaftsabbruch beschreiben und unterschiedliche Positionen dazu sachlich abwägen. | M4 Sexualbildung | 9/10: Schwangerschaftsabbruch (S. 46) | B8 LB3 (Jg 8): ungewollte Schwangerschaft, Schwangerschaftsabbruch | IF8 (Stufe 2; SiLP 10.3): Schwangerschaftsabbruch | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `schwangerschaft-und-geburt` |

### Strang `umwelt`: Lebewesen in ihrer Umwelt (Living things in their environment) – 17 Bausteine

| # | id | iCan | KMK | HE | BY | NW | Stimmen HE/BY/NW → Richtstufe | requires |
|---|---|---|---|---|---|---|---|---|
| 97 | `oekosystem-grundbegriffe` | Ich kann an einem heimischen Ökosystem wie Wiese, Wald oder Gewässer beschreiben, was Lebensraum (Biotop) und Lebensgemeinschaft (Biozönose) sind. | U1 Ökosysteme | 5/6: Tiere und Pflanzen eines ausgewählten Ökosystems (S. 43) | NT5 2.5 (Jg 5): Lebensraum, Lebensgemeinschaft; NT6 1.5 | IF4 (Stufe 2; SiLP 8.1): Biotop und Biozönose | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | – |
| 98 | `arten-bestimmen` | Ich kann Pflanzen und Tiere mit einem Bestimmungsschlüssel oder einer Bestimmungs-App bestimmen. | U2 Artenkenntnis | 9/10: Erweiterung der Artenkenntnis (S. 44) | NT5 2.1, 2.5 (Jg 5): Bestimmen von Samenpflanzen; B8 LB1 | IF1 (Stufe 1): Bestimmungsschlüssel für Samenpflanzen; IF4: Taxa bestimmen | 7-10 / 5-6 / 5-6 → **5-6** (Mehrheit) | `pflanzenorgane` |
| 99 | `nahrungsbeziehungen` | Ich kann Nahrungsketten und Nahrungsnetze zeichnen und darin Produzenten, Konsumenten und Destruenten zuordnen. | U3 Trophiestufen | 5/6: Nahrungsketten und -netze; Produzenten, Konsumenten, Destruenten (S. 43 f.) | NT6 1.5 (Jg 6): Nahrungsnetz; B9 LB6 | IF4 (Stufe 2; SiLP 8.8): Nahrungsbeziehungen und Nahrungsnetze | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `oekosystem-grundbegriffe`, `fotosynthese` |
| 100 | `eingriffe-des-menschen` | Ich kann an einem Beispiel beschreiben, wie Eingriffe des Menschen wie Düngung, Versiegelung oder Begradigung ein Ökosystem verändern. | U1 Naturschutz | 5/6: Auswirkungen von Eingriffen des Menschen (S. 45); 9/10: Gefährdung von Ökosystemen | NT5 2.5 (Jg 5): Bewirtschaftungsmethoden; NT6 1.5; B8 LB6; B9 LB6 | IF4 (Stufe 2; SiLP 8.9): Eingriffe des Menschen | 5-6 / 5-6 / 7-10 → **5-6** (Mehrheit) | `nahrungsbeziehungen` |
| 101 | `tierkommunikation` | Ich kann an Beispielen beschreiben, wie Tiere mit Lauten, Duftstoffen, Farben oder Bewegungen miteinander kommunizieren. | U2 Wechselbeziehungen zwischen Lebewesen | 5/6: einfache Beispiele für Verhaltensweisen aus der Tierwelt (S. 42); 9/10: intra- und interspezifisch | NT6 1.3 (Jg 6): innerartliche Kommunikation; B9 5.4: Signale bei Insekten | – | 5-6 / 5-6 / – → **5-6** (Mehrheit) | `wirbeltierklassen` |
| 102 | `abiotische-faktoren` | Ich kann Umweltfaktoren wie Licht, Temperatur und Feuchtigkeit in einem Lebensraum messen und mit dem Vorkommen von Arten in Beziehung setzen. | U2 Wechselbeziehungen mit der Umwelt | 9/10: abiotische und biotische Faktoren (S. 43) | NT5 2.5 (Jg 5) und NT6 1.5 (Jg 6): Umweltfaktoren im Freiland | IF4 (Stufe 2; SiLP 8.1): abiotische Faktoren messen | 7-10 / 5-6 / 7-10 → **7-8** (Gleichstand 7-8/9-10; requires lassen beide zu: frühere Stufe) | `oekosystem-grundbegriffe` |
| 103 | `sukzession` | Ich kann beschreiben, wie sich ein Ökosystem im Lauf der Zeit verändert (Sukzession), und natürliche von menschengemachten Veränderungen unterscheiden. | U1 Ökosysteme | – | B8 LB6 (Jg 8): Sukzession | IF4 (Stufe 2; SiLP 8.9/10.6): natürliche Sukzession, anthropogene Einflüsse | – / 7-8 / 7-10 → **7-8** (Mehrheit) | `oekosystem-grundbegriffe`, `eingriffe-des-menschen` |
| 104 | `biodiversitaet-und-naturschutz` | Ich kann erklären, was Biodiversität ist, warum sie gefährdet ist und wie Biotopschutz Arten schützt. | U1 Biodiversität, Naturschutz | 9/10: Artenvielfalt und Artensterben, Gefährdung (S. 44, 47) | NT5 2.5 (Jg 5): Biodiversität; NT6 1.5 (Jg 6): Schutz der biologischen Vielfalt | IF4 (Stufe 2; SiLP 8.9): Biotop- und Artenschutz | 7-10 / 5-6 / 7-10 → **7-8** (Gleichstand 7-8/9-10; requires lassen beide zu: frühere Stufe) | `eingriffe-des-menschen`, `arten-bestimmen` |
| 105 | `nachhaltigkeit` | Ich kann am ökologischen Fußabdruck erklären, was nachhaltige Entwicklung bedeutet, und Handlungsmöglichkeiten im Alltag bewerten. | U4 Nachhaltigkeit | 9/10: Handlungsoptionen im Sinne der Nachhaltigkeit (S. 30, 45) | B8 LB6 (Jg 8): nachhaltige Entwicklung, ökologischer Fußabdruck | IF4 (Stufe 2; SiLP 8.9): Handlungsoptionen Naturschutz und Nachhaltigkeit | 7-10 / 7-8 / 7-10 → **7-8** (Mehrheit) | `eingriffe-des-menschen` |
| 106 | `angeborenes-verhalten` | Ich kann an Beispielen wie Prägung oder Attrappenversuchen erklären, woran man überwiegend angeborenes Verhalten erkennt. | (U2 Wechselbeziehungen) | 9/10: Verhaltensweisen von Tieren, intra- und interspezifisch (S. 28, 42) | B8 LB4 (Jg 8): reaktionsauslösende Reize, Attrappenversuche, genetisch bedingtes Verhalten, Prägung | – | 7-10 / 7-8 / – → **7-8** (Mehrheit) | `tierkommunikation`, `reiz-reaktion` |
| 107 | `konditionierung` **(schwach)** | Ich kann an Beispielen erklären, wie Tiere und Menschen durch klassische und operante Konditionierung lernen. | (U2 Wechselbeziehungen) | 9/10: Lernvorgänge, Speicherung und Leistungen des Gehirns (allgemein, S. 28) | B8 LB4 (Jg 8): klassische und operante Konditionierung | –<br>Hinweis: Konditionierung nennt ausdrücklich nur BY; HE nennt Lernvorgänge allgemein | 7-10 / 7-8 / – → **7-8** (Mehrheit) | `angeborenes-verhalten` |
| 108 | `beziehungen-zwischen-arten` | Ich kann Konkurrenz, Räuber-Beute-Beziehung, Symbiose und Parasitismus an Beispielen unterscheiden. | U2 Wechselbeziehungen zwischen Lebewesen | 5/6: Räuber-Beute-Wechselwirkungen (S. 38); 9/10: ökologische Funktion der Art | B10 LB2 (Jg 10): Symbionten, Parasiten (Ökosystem Mensch) | IF4 (Stufe 2; SiLP 8.1): Parasitismus, Symbiose, Koexistenz | 5-6 / 9-10 / 7-10 → **9-10** (Mehrheit) | `nahrungsbeziehungen` |
| 109 | `angepasstheit-an-umweltfaktoren` | Ich kann an Beispielen erklären, wie Pflanzen und Tiere an Licht, Wasser oder Temperatur in ihrem Lebensraum angepasst sind. | U2 Wechselbeziehungen; V3 Angepasstheit | 9/10: abiotische Faktoren, ökologische Funktion der Art (S. 43) | B9 LB4 (Jg 9): Angepasstheiten an biotische und abiotische Umweltfaktoren | IF4 (Stufe 2; SiLP 8.7): Angepasstheiten an abiotische Faktoren | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `abiotische-faktoren` |
| 110 | `energiefluss` | Ich kann erklären, wie Energie durch die Trophiestufen fließt und warum auf jeder Stufe nur ein kleiner Teil weitergegeben wird. | U3 Energiefluss und Trophiestufen | 9/10: Trophieebenen, Energiefluss (S. 29 f., 43) | B9 LB6 (Jg 9): Nahrungsnetz, Energiefluss im Boden | IF4 (Stufe 2; SiLP 8.8): Energieentwertung | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `nahrungsbeziehungen`, `fotosynthese-und-zellatmung` |
| 111 | `kohlenstoffkreislauf` | Ich kann einen einfachen Kohlenstoffkreislauf mit Fotosynthese, Zellatmung, Zersetzung und Verbrennung darstellen. | U3 Kohlenstoffkreislauf | 9/10: Stoffkreisläufe, Kohlenstoffkreislauf (S. 44) | B9 LB6 (Jg 9): einfacher Kohlenstoffatomkreislauf | IF4 (Stufe 2; SiLP 8.8): Grundprinzip des Kohlenstoffkreislaufs | 7-10 / 9-10 / 7-10 → **9-10** (Mehrheit) | `nahrungsbeziehungen`, `fotosynthese-und-zellatmung` |
| 112 | `pilze-und-zersetzer` | Ich kann Pilze von Pflanzen und Tieren unterscheiden und erklären, welche Rolle Pilze, Bakterien und Bodentiere als Zersetzer spielen. | U2 Wechselbeziehungen; U3 Kohlenstoffkreislauf | – | B9 LB2 (Jg 9): Pilze, Hefen; B9 LB6: Humusbildung, Mineralisierung | IF4 (Stufe 2; SiLP 8.2/8.3): Pilze und ihre Rolle im Ökosystem | – / 9-10 / 7-10 → **9-10** (Mehrheit) | `kohlenstoffkreislauf`, `bakterienzelle` |
| 113 | `klimawandel` **(schwach)** | Ich kann erklären, wie mehr Kohlenstoffdioxid in der Luft den Treibhauseffekt verstärkt und welche Folgen der Klimawandel für Lebewesen und Ökosysteme hat. | U4 Klimawandel, Klimafolgen | 9/10: globale Stoffkreisläufe, Eingriffe des Menschen, Prognosen (S. 30; Klima nicht genannt) | B8 LB6 (Jg 8): globale Stoffströme (Klima nicht genannt) | – | 7-10 / 7-8 / – → **7-8** (Mehrheit) | `fotosynthese-und-zellatmung`, `nachhaltigkeit` |

## 3. Entscheidungen

### 3.1 Abstimmung über die Richtstufe

Regel (Skill `map-research`, von der Nutzerin / dem Nutzer am 07.11.2026 entschieden):

- **Eine Stimme je Land.** BY stimmt mit dem Jahrgang seines Lernbereichs. HE und NW stimmen in der ersten Stufe mit
  „5-6“. Ihre zweite Stufe umfasst Jg 7–10 ohne Jahrgang. Diese Stimme heißt in den Tabellen **„7-10“** und zählt für
  7-8 und für 9-10. Zwei von drei Stimmen entscheiden; bei drei verschiedenen Stimmen gilt die mittlere.
- **Gleichstand 7-8/9-10** (die Spannen von HE und NW stehen gegeneinander, BY stimmt nicht oder für 5-6): Die
  logische Struktur entscheidet. Ein Baustein steht nicht früher als seine Voraussetzungen und nicht später als die
  Bausteine, die ihn voraussetzen.
  - `gen-und-allel`, `erbgaenge`, `familienstammbaum` → 9-10 (setzen `meiose` voraus, 9-10).
  - `stammbaum` → 9-10 (setzt `evolutionstheorie-darwin` voraus, 9-10).
  - `fotosynthese-und-zellatmung` → 7-8 (`klimawandel`, 7-8, setzt ihn voraus).
  - Lassen die requires beide Stufen zu, nehme ich die frühere: `artbegriff`, `abiotische-faktoren`,
    `biodiversitaet-und-naturschutz` → 7-8. Bei den beiden letzten stimmt BY für 5-6; die frühere Stufe liegt
    dieser Stimme am nächsten. Diese Zusatzregel steht nicht im Skill (offener Punkt 1).
- **Festgelegt, weil die Regel keine Mehrheit ergibt:** nur `enzymaktivitaet` (nur BY stimmt, Jg 10 → 9-10).
- **Änderung gegenüber Stand 1:** Die Overrides bei `gen-und-allel`, `erbgaenge` und `familienstammbaum` sind
  entfallen; die Regel ergibt dasselbe Ergebnis. `klimawandel` steht jetzt auf 7-8, so wie die Abstimmung es ergibt
  (HE „7-10“, BY Jg 8). Dafür setzt er nicht mehr `kohlenstoffkreislauf` (9-10) voraus, sondern
  `fotosynthese-und-zellatmung` und `nachhaltigkeit` (beide 7-8). Sonst hat sich keine Richtstufe geändert.
- **Abweichung von der Vorlage:** In `physik.yaml` und `chemie.yaml` zählt die zweite Stufe von HE als 9-10. Diese
  Karten bleiben unverändert; für neue Karten gilt die Regel oben.
- **Folge:** Innerhalb von 7–10 entscheidet in der Regel Bayern. Bayern ordnet anders als das NRW-Schulbeispiel:
  - BY: Neurobiologie, Hormone, Sexualität, Verhalten und Sucht in Jg 8; Genetik, Evolution, Wirbellose und Ökosystem
    Boden in Jg 9; Immunbiologie, Stoffwechsel und Evolution des Menschen in Jg 10.
  - SiLP NRW: Ökologie und Evolution in Jg 8; Genetik, Immunbiologie, Neurobiologie und Hormone in Jg 10.
  - Deshalb hat der Strang `vielfalt` nur einen Baustein in 7-8 (`artbegriff`). Die Hormon- und Nervenbausteine
    stehen dagegen auf 7-8 (Hinweis NRW: Jg 10).

### 3.2 Zuschnitt und Strang-Zuordnung von Grenzfällen

- **Stränge:** die vier KMK-Inhaltsbereiche, unverändert. Ids: `zellen`, `vielfalt`, `mensch`, `umwelt`.
- **Zellbiologie und Genetik:** DNA-Modell, Chromosomen, Mitose und Meiose kommen in den Strang `zellen` (KMK:
  „Zellen, Mitose, Meiose“). Gen und Allel, Erbgänge, Familienstammbaum, Proteinbiosynthese, Genwirkkette, Mutation,
  Karyogramm, Trisomie 21, Pränataldiagnostik und Gentechnik kommen in den Strang `vielfalt` (KMK: „Vererbung, genetische Variabilität“).
- **`proteine` in `zellen`:** Der Baustein ist direkte Voraussetzung für `enzyme` (KMK Z4 „Enzymreaktion“), für
  `proteinbiosynthese` und für `spezifische-abwehr`.
- **`bakterienzelle`, `vermehrung-der-bakterien` und `viren` in `zellen`:** Die KMK nennt Zellen und Kennzeichen des Lebendigen; Viren sind ein
  Grenzfall des Lebendigen (so auch SiLP UV 10.1). Infektion und Abwehr stehen in `mensch` und setzen die Bausteine
  voraus.
- **Samenpflanzen in `vielfalt`:** Pflanzenorgane, Blüte, Früchte, Keimung und ungeschlechtliche Vermehrung stehen in
  BY unter „Samenpflanzen als Lebewesen“ und in NW unter „Vielfalt und Angepasstheiten von Samenpflanzen“. Die
  Fotosynthese bleibt in `zellen` (KMK Z3).
- **Wirbeltierklassen in `vielfalt`** (KMK „Verwandtschaft“). **Arten bestimmen in `umwelt`** (KMK U2
  „Artenkenntnis“).
- **Angepasstheit:** zwei Bausteine. `angepasstheit-selektion` (Evolution) kommt in den Strang `vielfalt`,
  `angepasstheit-an-umweltfaktoren` (Ökologie) in den Strang `umwelt`.
- **Verhalten:** `tierkommunikation`, `angeborenes-verhalten` und `konditionierung` kommen in den Strang `umwelt`. Die KMK nennt Verhalten
  nicht. HE führt es unter „Informationsfluss … zwischen Organismen“, BY in B8 LB4, NW gar nicht. Ich ordne es den
  „Wechselbeziehungen zwischen Lebewesen und ihrer Umwelt“ zu (Entscheidung der Nutzerin / des Nutzers).
- **Pilze und Zersetzer in `umwelt`** (NW IF4: Rolle im Ökosystem; BY B9 LB6: Humusbildung).
- **Sexuell übertragbare Infektionen in `mensch`.** Der Baustein ist 7-8 (BY B8) und setzt deshalb nicht
  `infektionskrankheiten` (9-10) voraus, sondern `verhuetung`.
- **`hygiene` in 5-6:** Alle drei Länder nennen Körperpflege und Hygiene schon in der ersten Stufe (HE 5/6 S. 46,
  BY NT5 2.3, NW IF3). BY B10 und NW IF7 greifen das bei den Infektionskrankheiten wieder auf;
  `infektionskrankheiten` (9-10) setzt `hygiene` voraus.

Requires über Strang-Grenzen (erlaubt, alle geprüft): `fotosynthese` → `pflanzenorgane`; `zellatmung-energie` und
`proteine` → `naehrstoffe`; `enzyme` → `verdauungsorgane`; `meiose` → `befruchtung`; `mutation-und-modifikation`,
`proteinbiosynthese` und `gentechnik` → `dna-modell`; `vom-gen-zum-merkmal` → `enzyme`; `evolutionsfaktoren`,
`gen-und-allel` und `trisomie-21` → `meiose`; `karyogramm` → `chromosomen`; `proteinbiosynthese` und
`spezifische-abwehr` → `proteine`; `gentechnik` und `pilze-und-zersetzer` → `bakterienzelle`;
`infektionskrankheiten` → `vermehrung-der-bakterien` und `viren`; `verdauungsorgane` und `atmung-und-gasaustausch` →
`organisationsebenen`; `koerperliche-belastung` → `zellatmung`; `arten-bestimmen` → `pflanzenorgane`;
`nahrungsbeziehungen` → `fotosynthese`; `tierkommunikation` → `wirbeltierklassen`; `angeborenes-verhalten` →
`reiz-reaktion`; `energiefluss`, `kohlenstoffkreislauf` und `klimawandel` → `fotosynthese-und-zellatmung`.

### 3.3 Getrennt (Stand 2)

Die erste Fassung hatte 20 Bausteine zusammengelegt, nur um bei etwa 90 Bausteinen zu bleiben. Diese Zielgröße gibt
es nicht mehr (Skill `map-research`): Ein Baustein ist, was eine Seite einer Lern-App lehren kann. Getrennt habe ich:

| vorher | jetzt | Richtstufen |
|---|---|---|
| `skelett-und-gelenke` | `skelett`, `gelenke` | 5-6, 5-6 |
| `ausgewogene-ernaehrung` | `energiebedarf`, `ausgewogene-ernaehrung` | 5-6, 5-6 |
| `naehrstoffe` | `naehrstoffe`, `naehrstoffnachweise` | 5-6, 5-6 |
| `herz-und-blutkreislauf` | `blut`, `herz-und-blutkreislauf` | 5-6, 5-6 |
| `nervenzelle-und-synapse` | `nervenzelle`, `synapse` | 7-8, 7-8 |
| `hormone` | `hormone`, `hormon-und-nervensystem` | 7-8, 7-8 |
| `blutzucker-und-diabetes` | `blutzuckerregulation`, `diabetes` | 7-8, 7-8 |
| `spezifische-abwehr` | `spezifische-abwehr`, `allergie` | 9-10, 9-10 |
| `infektionskrankheiten` | `hygiene`, `infektionskrankheiten` | 5-6, 9-10 |
| `geschlechtsorgane-und-zyklus` | `geschlechtsorgane`, `menstruationszyklus` | 5-6, 5-6 |
| `befruchtung-schwangerschaft` | `befruchtung`, `schwangerschaft-und-geburt` | 5-6, 5-6 |
| `artbegriff-und-artbildung` | `artbegriff`, `artbildung` | 7-8, 9-10 |
| `verwandtschaft-und-stammbaum` | `stammbaum`, `natuerliches-system` | 9-10, 9-10 |
| `vom-gen-zum-merkmal` | `proteinbiosynthese`, `vom-gen-zum-merkmal` | 9-10, 9-10 |
| `trisomie-und-karyogramm` | `karyogramm`, `trisomie-21`, `praenataldiagnostik` | 9-10, 9-10, 9-10 |
| `wirbellose-und-insekten` | `wirbellose`, `insekten` | 9-10, 9-10 |
| `zuechtung-und-haltung` | `zuechtung`, `nutztierhaltung` | 5-6, 5-6 |
| `verhalten-und-lernen` | `angeborenes-verhalten`, `konditionierung` | 7-8, 7-8 |
| `bakterienzelle` | `bakterienzelle`, `vermehrung-der-bakterien` | 9-10, 9-10 |
| `enzyme` | `enzyme`, `enzymaktivitaet` | 9-10, 9-10 |

Nicht getrennt: die Fotosynthese mit ihrer Bedeutung (eine Seite). Die Karte ist noch nicht veröffentlicht; keine
App nutzt die alten ids.

Was das Trennen gezeigt hat:
- `hygiene` steht in allen drei Ländern schon in der ersten Stufe; im zusammengelegten Baustein war das verdeckt.
- `artbegriff` (HE, NW) und `artbildung` (HE, BY, NW) haben verschiedene Stimmen; nur die Artbildung nennt BY.
- Einige Teile tragen nur zwei Länder oder ein Land mit ausdrücklicher Nennung: `allergie`, `synapse`,
  `menstruationszyklus`, `karyogramm`, `proteinbiosynthese`, `natuerliches-system` (je zwei Länder);
  `enzymaktivitaet` (nur BY, KMK „Enzymreaktion“).

### 3.4 Nicht aufgenommen (nur ein Land, und keine direkte Voraussetzung)

| Inhalt | nur in |
|---|---|
| Gärung (Milchsäure- und alkoholische Gärung), ATP-ADP-System, aerober und anaerober Abbau im Muskel | BY B9 LB2, B10 3.4 |
| Biotechnologie, Lebensmittelverderb, Konservierung | BY B9 LB2 |
| DNA-Replikation als eigener Baustein (steckt als Ein-/Zwei-Chromatid-Chromosom in `chromosomen`) | BY B9 3.2 |
| Bionik; Reizbarkeit und Bewegung bei Pflanzen (Phototropismus); Sinnesleistungen der Wirbeltiere | BY NT6 |
| Pflanzenfamilien im Vergleich | BY NT5 2.4 |
| Ökosystem Boden (Bodeneigenschaften, Humusbildung; Teile stecken in `pilze-und-zersetzer`) | BY B9 LB6 (NW nur im SiLP) |
| kulturelle Evolution, Populationsentwicklung | BY B10 LB4 |
| Erste Hilfe, Blutspende, Organspende | BY B10 3.3 |
| Organtransplantation; Reflex und bewusste Reaktion; Abgrenzung der Evolutionstheorie von nicht-naturwissenschaftlichen Vorstellungen; historische Fotosynthese-Experimente | NW IF7, IF5, IF4 |
| Leistungen des Gehirns, Lernvorgänge (nur teilweise in `konditionierung`) | HE 9/10 |
| Arbeitsweisen ohne eigenen Inhalt (Erkenntnisweg, Protokoll, Modelle, Diagramme) | alle; das sind Prozesskompetenzen (KMK-Kompetenzbereiche), keine Inhalte. Aufgenommen nur, wo sie an einen Inhalt gebunden sind: `mikroskopieren`, `praeparat-und-zeichnung`, `keimung-experiment`, `koerperliche-belastung`, `abiotische-faktoren` |

### 3.5 Schwach belegt

- `mutation-und-modifikation`: Die KMK nennt „genetische Variabilität“. Die Modifikation nennt nur HE; BY und NW
  nennen nur Mutationen (Genommutation).
- `klimawandel`: Ausdrücklich nennt ihn nur die KMK („Klimawandel, Klimafolgen, Nachhaltigkeit“). HE und BY nennen nur
  globale Stoffkreisläufe und Stoffströme, NW nichts. Der Baustein ist aufgenommen, weil die KMK ihn verbindlich nennt.
- `enzymaktivitaet`: Nur BY (B10 3.2) nennt Temperatur, pH-Wert und Denaturierung. Aufgenommen, weil die KMK die
  „Enzymreaktion“ verbindlich nennt.
- `gelenke`: Gelenktypen nennt ausdrücklich nur BY (NT5 2.3); HE und NW nennen das Bewegungssystem allgemein.
  Aufgenommen als direkte Voraussetzung von `gegenspielerprinzip`.
- `konditionierung`: Ausdrücklich nur BY (B8 LB4); HE nennt „Lernvorgänge“ allgemein (S. 28), NW nichts.
- Auf schwacher Grundlage stehen einzelne Länderfundstellen (in den Tabellen als „allgemein“ vermerkt), etwa HE bei
  `skelett`, `blut`, `naehrstoffnachweise`, `diabetes`, `hormon-und-nervensystem`, `praenataldiagnostik`,
  `bakterienzelle`, NW bei `artbildung` und `sexuell-uebertragbare-infektionen`. Zwei Länder tragen den Baustein
  trotzdem.

## 4. Offene Punkte

1. **Gleichstand ohne Entscheidung durch requires** (3.1): Bei `artbegriff`, `abiotische-faktoren` und
   `biodiversitaet-und-naturschutz` lassen die requires 7-8 und 9-10 zu. Ich nehme die frühere Stufe. Bitte
   bestätigen und gegebenenfalls in den Skill aufnehmen.
2. **Bayern bestimmt die Reihenfolge in 7–10.** Für NRW-Schulen passt das schlecht (Evolution und Ökologie dort
   meist in Jg 8, Hormone und Nerven in Jg 10). Ein Curriculum `nw-gymnasium` gibt es nach der Regel des Skills
   nicht (nur Stufen, keine Jahrgänge).
3. **Mendel-Genetik:** BY behandelt sie in Jg 8–10 nicht. `gen-und-allel`, `erbgaenge` und `familienstammbaum` stehen
   auf KMK, HE und NW; die Richtstufe 9-10 folgt aus requires (`meiose`).
4. **Klimawandel:** Er steht wahrscheinlich in den Geographie- oder Erdkunde-Plänen der Länder. Bitte entscheiden, ob
   der Baustein in Biologie bleibt. Er steht jetzt auf 7-8 (Abstimmung) und setzt den Kohlenstoffkreislauf nicht mehr
   voraus.
5. **Verhalten** (`tierkommunikation`, `angeborenes-verhalten`, `konditionierung`) hat keinen KMK-Aspekt und steht
   nicht im NRW-KLP; es bleibt im Strang `umwelt` (Entscheidung der Nutzerin / des Nutzers).
6. **Lange iCan-Sätze**, die vielleicht noch zwei Seiten brauchen: `fortpflanzung-wirbeltiere`, `ueberwinterung`,
   `sexuelle-vielfalt`, `verhuetung-vergleichen`.
7. **Sensible Themen** (`sexuelle-selbstbestimmung`, `sexuelle-vielfalt`, `schwangerschaftsabbruch`): Alle drei
   Länder nennen sie verbindlich. Ob eine Lern-App sie behandeln soll, ist eine Entscheidung der Plattform, nicht der
   Recherche.
8. **HE-Ausgabe:** Das KC nennt kein Erscheinungsjahr und keinen G8/G9-Bezug. Auf der Website gibt es nur diese eine
   Fassung für das Gymnasium. Ein eigenes G9-KC oder Hinweise zur Jahrgangsverteilung außerhalb des KC habe ich nicht
   gefunden. Ich nenne „Fassung 2011“ nach dem Erstellungsdatum der PDF.

## 5. Quellen, die ich nicht öffnen konnte

- **LehrplanPLUS, PDF-Gesamtlehrpläne:** derzeit nicht verfügbar (Hinweis auf https://www.lehrplanplus.bayern.de/gesamtlehrplaene).
  Ich habe stattdessen die Online-Fachlehrpläne gelesen; diese gelten. Die alten Adressen
  `…/fachlehrplan/gymnasium/5/nt` und `…/6/biologie` leiten auf die Startseite um. Gültig sind `…/5/nt_gym` usw.
- **schulentwicklung.nrw.de:** Die Lehrplannavigator-Adresse leitet auf qua-lis.nrw.de um. Den KLP (Heft 3413) habe
  ich vom Nachfolger lehrplannavigator.nrw.de geladen; es ist dasselbe Heft.
- Sonst fehlte keine Quelle.

Die Downloads liegen in `/tmp/claude-0/-home-user-apps/1c2b2c5a-27bd-5db5-a715-10acdfd55efc/scratchpad/src-bio/`.
Die Bausteine als Daten und das Prüfskript liegen in
`/tmp/claude-0/-home-user-apps/1c2b2c5a-27bd-5db5-a715-10acdfd55efc/scratchpad/gen/` (`data.py`, `check.py`; `split.py` trennt die Zusammenlegungen, `yaml_out.py` schreibt die Karte).
