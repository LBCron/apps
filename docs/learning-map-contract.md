# The contract of the learning map

How the learning map ("Lernlandkarte") is stored in the catalog, and what an app says about it. Decisions behind it:
`.vibe/development-plan-feat-learning-map.md` (KD-xx). Names are English (`dec-english-contracts`); texts for people are
German, optionally with English, as everywhere in the catalog: a plain string or `{ de, en }`.

| Term (people) | Contract |
|---|---|
| Fach | subject |
| Strang | strand |
| Baustein | competency |
| baut auf | requires |
| Richtstufe | gradeBand |
| Lehrplan | curriculum |
| Einordnung | placement |

An **id** is lower-case letters, digits and hyphens (`^[a-z0-9]+(-[a-z0-9]+)*$`). Ids are stable: once published, an id
is never renamed (links and apps point to it).

## 1. A subject: `map/<subject>.yaml` (lernapps/apps)

One file per subject: the subject, its source, its strands, and each strand's competencies nested in it, so that a
competency belongs to exactly one strand by the form of the file (KD-04, KD-09).

```yaml
# yaml-language-server: $schema=https://lernapps.net/apps/schemas/subject.v1.schema.json
name: { de: Mathematik, en: Mathematics }          # the file name is the subject's id: mathematik
source:                                            # where strands and competencies come from (KD-03)
  title: KMK-Bildungsstandards Mathematik, ESA und MSA (2022)
  url: https://www.kmk.org/fileadmin/Dateien/veroeffentlichungen_beschluesse/2022/2022_06_23-Bista-ESA-MSA-Mathe.pdf
strands:
  - id: stochastik
    name: { de: Stochastik, en: Probability and statistics }
    competencies:
      - id: laplace
        iCan: { de: "Ich kann Wahrscheinlichkeiten mit der Laplace-Formel berechnen." }
        gradeBand: "7-8"                           # required: "5-6", "7-8" or "9-10" (KD-06)
        requires: [haeufigkeiten]                  # optional: ids in the same subject, any strand
      - id: baumdiagramm
        iCan: "Ich kann ein mehrstufiges Zufallsexperiment als Baumdiagramm darstellen."
        gradeBand: "7-8"
        requires: [laplace]
```

| Field | Type | Rule |
|---|---|---|
| `name` | text | required |
| `source.title`, `source.url` | string, https URL | required; `url` optional when the source has none online |
| `strands[]` | list, at least one | |
| `strands[].id` | id | unique in the subject |
| `strands[].name` | text | required |
| `strands[].competencies[]` | list, at least one | |
| `competencies[].id` | id | unique in the **subject** (not only in the strand) |
| `competencies[].iCan` | text | required; starts with "Ich kann" |
| `competencies[].gradeBand` | `"5-6"` \| `"7-8"` \| `"9-10"` | required |
| `competencies[].requires` | list of ids | optional; each an id of this subject; no cycles; not itself |

A competency is addressed across the platform as `<subject>/<competency>`, a strand as `<subject>/<strand>`.

## 2. A curriculum: `map/<subject>/curricula/<curriculum>.yaml` (lernapps/apps)

One file per curriculum (Lehrplan) and subject; contributed one by one, and may place only some competencies (KD-06).
The file name is the curriculum's id: `<land>-<school type>`, e.g. `he-gymnasium`.

```yaml
# yaml-language-server: $schema=https://lernapps.net/apps/schemas/curriculum.v1.schema.json
land: HE                                           # ISO 3166-2:DE code without "DE-"
schoolType: { de: Gymnasium (G9), en: Grammar school (G9) }
version: Kerncurriculum Sekundarstufe I (2011) und Lehrplan G9
source:
  title: Kerncurriculum Mathematik Sekundarstufe I, Hessisches Kultusministerium
  url: https://kultusministerium.hessen.de/unterricht/kerncurricula/sekundarstufe-i/mathematik
placements:
  - { competency: laplace, grades: [7], unit: "7.4" }
  - { competency: baumdiagramm, grades: [7, 10], unit: "7.4, 10.5" }
```

| Field | Type | Rule |
|---|---|---|
| `land` | `BW` `BY` `BE` `BB` `HB` `HH` `HE` `MV` `NI` `NW` `RP` `SL` `SN` `ST` `SH` `TH` | required |
| `schoolType` | text | required |
| `version` | string | required: which document, which edition |
| `source.title`, `source.url` | string, https URL | required; `url` optional |
| `placements[]` | list | may be empty; at most one per competency |
| `placements[].competency` | id | a competency of the subject |
| `placements[].grades` | list of integers 1–13, at least one | ascending |
| `placements[].unit` | string | optional: the unit of the curriculum, as it names it |

The state of a curriculum ("places 42 of 85") is computed, never written down.

## 3. An explainer: format 2 (lernapps/app-templates)

`explainer.v2.schema.json`. Format 1 stays valid for apps that do not move (KD-07): they are not on the
map. An app is on format 2 when its `app.yaml` says so.

`src/app.yaml`:

```yaml
# yaml-language-server: $schema=../node_modules/@lernapps/app-templates/runtime/explainer/explainer.v2.schema.json
format: 2                                          # required in format 2; absent means format 1
strand: mathematik/stochastik                      # required: "<subject>/<strand>", or "none"
title: Stochastik
# … everything else as in format 1
```

A page, `src/<chapter>/<page>.yaml`:

```yaml
title: Laplace-Formel
competencies: [laplace]                            # ids of the app's strand; as a rule one (KD-24)
blocks: […]
```

| Field | Where | Rule |
|---|---|---|
| `format` | `app.yaml` | `2`, required in format 2 |
| `strand` | `app.yaml` | required: `<subject>/<strand>` (two ids) or `none` |
| `competencies` | every page | when `strand` is not `none`: required, at least one id; as a rule one (several give a hint of `lernapps check`, `one-competency-per-page`); a competency may have several pages. When `none`: not allowed |

The app cannot know the vocabulary (the subject's ids); the catalog checks the ids when the app is listed (step F).

### A recap page

A competency may require one the app does not practise: of another strand (`requires` crosses strands, KD-25), or of
its own strand outside the app's scope. The app may repeat it on a recap page (KD-26):

```yaml
title: Gewichtskraft – kurz wiederholt
recap: physik/gewichtskraft-berechnen              # "<subject>/<competency>", one the app does not practise
blocks: [...]                                      # descriptive blocks only: no exercise
```

| Rule | Checked by |
|---|---|
| A page has either `competencies` or `recap`, never both | explainer schema v2 |
| A recap page has no exercise; `topic-has-exercises` does not apply to it | explainer schema v2, build |
| The link to the competency's page on the map is written by the runtime, so it cannot be missing | runtime |
| The recapped competency exists, and the app does not practise it on a page of its own | `lernapps check` (warning), listing (error) |

A recap page counts as nothing on the map and is left out of the self-assessment.

### The page list: `lernapps-pages.json`

The build of a format-2 explainer writes `lernapps-pages.json` at the root of the bundle, beside `index.html`. The
catalog reads it instead of hand-written topics (KD-13).

```json
{
  "format": 1,
  "strand": "mathematik/stochastik",
  "pages": [
    { "path": "zufall/laplace/", "title": { "de": "Laplace-Formel" }, "competencies": ["laplace"] }
  ]
}
```

`path` is relative to the app's root, as a link in the app; `title` is the page's title as text (string or by language);
pages are in the order of the app. With `strand: none` the file has `"strand": "none"` and no `competencies`. A recap
page has `"recap": "<subject>/<competency>"` instead of `competencies`.

## 4. A catalog entry: `entries/<id>.yaml` (lernapps/apps)

Two new optional fields (KD-08):

```yaml
strand: mathematik/stochastik                      # "<subject>/<strand>"; leave out when the app has none
competencies: [laplace, baumdiagramm]              # only for apps that are not explainers
```

| Field | Rule |
|---|---|
| `strand` | optional; `<subject>/<strand>` of an existing subject |
| `competencies` | optional, ids of the strand; requires `strand`; not for an explainer, whose pages name their competencies in `lernapps-pages.json` |
| `topics` | stays, for apps that are not explainers; for a format-2 explainer the catalog takes its pages from `lernapps-pages.json` |

Checks of the listing (rule `entry-learning-map`, an error): every id exists; every competency of an app belongs to the
app's strand (KD-19); an explainer's `strand` in the entry, if given, equals the one in `lernapps-pages.json`.

## 5. The map as data: `/apps/map/<subject>.json` (lernapps/apps)

For assistants and the tooling: the subject as in its YAML, plus `curricula` (id, land, schoolType, version, placements)
and `coverage` (per competency: the apps and pages that practise it). Linked from `/apps/llms.txt`.
