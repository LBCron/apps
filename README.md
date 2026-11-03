# apps

Find learning apps for your class or your child: <https://lernapps.net/apps/>.

This repo explains building and listing an app, and provides the apps themselves: the catalog. Helping builders get
their apps out is the responsibility of [lernapps/tooling](https://github.com/lernapps/tooling).

This is the application of the platform lernapps.net. It implements the experiences of the
[platform design](https://lernapps.net/docs/platform-design/) (agents: skill
[`skills/pdt`](https://github.com/lernapps/docs/tree/main/skills/pdt) in lernapps/docs) for the
first-draft MVP (D8 `mvp-first-draft`):

| Page | Experience and steps (D7) | Channel (D5) |
|---|---|---|
| `/apps/` find; with a search, an invitation to build what is missing (and, without a match, why so much is missing: people, not a company, build the apps) | `x-app-in-minutes`, `x-child-struggles`: `s-finding`, `t-find-app` | `ch-app-overview` |
| `/apps/<id>/` app page | `x-app-in-minutes`: `s-fitness-clarity`, `t-confirm-fitness`, `t-bring-app`, `s-giving-back`, `t-thank-creator-adult`, `t-give-feedback`, referral code (`?welle=`) in the e-mails | `ch-fitness-signal`, `ch-collections`, `ch-feedback` (prepared e-mails for now) |
| `/apps/build/` build an app with an AI assistant: the creator's entry point; takes the search from `/apps/` into the task | `x-list-and-hear-back`: `s-listing-help` | `ch-listing` |
| `/apps/enter/` list a published app: the creator's assistant with the skill `lernapps-listing`, the issue form without one, e-mail as the fallback | `x-list-and-hear-back`: `s-listing-help`, `t-list-app`, `s-use-insight` | `ch-listing` |
| `/apps/llms.txt` | the creator's AI assistant builds the app (quick path: the skill `lernapps-app` of lernapps/tooling) and lists it (the skill `lernapps-listing`) | `ch-listing` |

## How it is built

- Static pages with [Eleventy](https://www.11ty.dev/) and [UnoCSS](https://unocss.dev/), like the home page
  (lernapps.github.io). Every page is readable without JavaScript; small scripts in `src/assets/` add
  the search, copy buttons and the referral code in the e-mails.
- Texts: all in `src/_data/de.js`, plain German (ISO 24495-1), "du", and its English translation `src/_data/en.js`
  (same structure). Templates contain no copy and read the texts of the page's language (`t`, `lang`, set per page by
  `src/src.11tydata.js` from the address). German is at the root (`/apps/…`), English below `/apps/en/…`, the same
  address within each tree; every page is built once per language (pagination over `src/_data/languages.js`), and the
  header of the shared site frame links the two. Links between pages go through the filters `inLang` and `url`.
- Reusable parts: Nunjucks macros in `src/_includes/components.njk` (app card, fitness signal,
  copy field, count buttons), imported with `{% import "components.njk" as c with context %}`.
  The layout is `src/_includes/base.njk`.
- Header, footer and design tokens are those of every lernapps.net site: the package `@lernapps/site`
  ([`site-frame/`](https://github.com/lernapps/lernapps.github.io/tree/main/site-frame) in lernapps.github.io),
  installed from git; Renovate keeps it on the latest commit of its `main`.
- Entries: one YAML file per app in `entries/`. A text of an entry (`title`, `subject`, `summary`, `topics[].title`,
  `keywords`, `fitness.thirdPartyNote`) is a plain string (German) or a map by language, `{ de: …, en: … }`; German is
  required. An English page shows the German text, marked `lang="de"`, where there is no translation. `src/_data/catalog.js` reads them and checks them against
  the schema; a broken entry fails the build. It also renders the QR code of each app at build time.
- Schema: `schemas/entry.js` (Zod) is the single source of the entry format. `npm run schema` writes
  `schemas/entry.v1.schema.json`, published at <https://lernapps.net/apps/schemas/entry.v1.schema.json>
  for editors and agents; `npm run check` fails if it is out of date.
- `npm run check` runs `lernapps-check` from the same package on the output: no external resources, no
  broken links, privacy notice and imprint linked on every page.

## Entries

The format is defined in [`schemas/entry.js`](schemas/entry.js) and explained for people and agents in
[`src/llms.njk`](src/llms.njk) (served as `/apps/llms.txt`). Conditions for listing are in
`src/_data/de.js` (`list.criteria`) and enforced by the schema where they can be.

## Listing validation

A pull request that adds or changes an entry is checked against the deployed app, and the result is commented on
the pull request for the creator's assistant (lernapps/tooling, architecture chapter 5, "Listing validation"). The
same command runs in CI and in a clone: `npm run --silent listing -- entries/<id>.yaml`. How it works is described
where it runs: [`scripts/listing.mjs`](scripts/listing.mjs), [`scripts/listing-comment.mjs`](scripts/listing-comment.mjs)
and the workflows [`listing.yml`](.github/workflows/listing.yml) and
[`listing-comment.yml`](.github/workflows/listing-comment.yml).

## Review (maintainers)

On a listing pull request, a maintainer can start the review of lernapps/tooling (`review/prompt.md`) with a comment
`/review` (the entry's `commit`, which lernapps.net builds and serves) or `/review <full commit id>`; the comment
says which ref was read and warns when the default branch is not `main`. It builds the app, runs the
checks and, when they pass, lets the review agent judge the rest; the verdict comes as one comment on the pull
request, replaced on every `/review`. The review decides nothing: the owner decides on the listing. How it works and
why it is safe with an app from outside: [`review.yml`](.github/workflows/review.yml),
[`scripts/review-input.mjs`](scripts/review-input.mjs) and [`scripts/review-comment.mjs`](scripts/review-comment.mjs).

## Thanks and feedback

For the MVP, thanks and feedback are prepared e-mails (`mailto:`), so no server is needed and the links
work without JavaScript: "Danke sagen" writes to `Danke-lernapps@beimir.net`, use and feedback to
`Feedback-lernapps@beimir.net` (`src/_data/site.js`). Subject and body are prepared per app
(`src/_data/de.js`, `app.mail`); the body says that this is only to test whether thanks arrive, and that
thanks will be counted with one click later. A referral code (`?welle=<code>`) is added to the body by
`src/assets/app.js`. Nothing is stored in the browser.

Later, one click is counted openly as a total, without e-mail (platform design D5 `ch-feedback`).

## Usage counter

To see whether the apps are used at all, the catalog's pages load the usage counter of the platform sites
(`/lernapps-count.js`, served by [lernapps.github.io](https://github.com/lernapps/lernapps.github.io#usage-counter))
in `src/_includes/base.njk`, never in a preview. It counts the visit of a page, and a click on "open app" as the
event `app/<id>` (`data-la-count` in `src/app.njk`). Nothing is counted inside the apps: the counter is not part of
the site frame, and `lernapps-check` fails an app that carries it.

## The copies of the listed apps

lernapps.net serves a copy of every listed app at `https://lernapps.net/apps/start/<id>/`, built from the `commit` its entry
names (`source`, `commit`; lernapps/docs KD-21, plan [`.vibe/development-plan-feat-serve-copies.md`](.vibe/development-plan-feat-serve-copies.md)):

- [`publish.yml`](.github/workflows/publish.yml): a push to `main` that adds, changes or deletes an entry builds the
  app at its commit in a container without secrets, checks it, and pushes the copy into `start/<id>/` of this repo's
  `gh-pages`; `start/copies.txt` lists the live copies, and `pages.yml` leaves `start/` alone (`keep` of tooling's
  site deploy action). Then it checks each copy where it is served and builds the catalog again.
- The catalog links an app's copy only when `copies.txt` lists it at the entry's commit, otherwise the entry's `url`.
- [`update.yml`](.github/workflows/update.yml): daily, a pull request `update/<id>` for each app whose `main` moved.
  It merges by itself only when nothing but versions of existing npm dependencies changed
  ([`scripts/update-kind.mjs`](scripts/update-kind.mjs)); anything else gets the label `review`.
- [`upgrade.yml`](.github/workflows/upgrade.yml): daily, or by hand for one `source`, moves each listed app to the pins of the
  tooling: it runs `lernapps update` on the app's `main` and opens the pull request `lernapps/update` in the app with the
  GitHub App `lernapps-updater`; the workflow waits for the app's own check and merges when it is green. An app without the updater installed
  is skipped and listed in the issue "Listed apps the updater cannot move". The owner installs the App on the app's repo.
- An id may not be another path of the catalog, e.g. `start` or `en` ([`schemas/reserved.js`](schemas/reserved.js)).

## Deploy and previews

GitHub Pages serves the `gh-pages` branch (Settings → Pages → Deploy from a branch → `gh-pages`, `/ (root)`).

- `pages.yml`: every push to `main` builds, checks and publishes to the root of `gh-pages`,
  served at <https://lernapps.net/apps/>. The steps are the shared site actions of
  [lernapps/tooling](https://github.com/lernapps/tooling), the same for every site.
- `pr-preview.yml`: every pull request from this repository gets a preview at
  `https://lernapps.net/apps/pr-preview/pr-<number>/`, linked in a comment on the pull request,
  updated on every push and removed when the pull request closes. Previews are built with
  `SITE_PATH_PREFIX=/apps/pr-preview/pr-<number>/` and `SITE_PREVIEW=1` (banner, `noindex`).

## Develop

```bash
npm ci
npm run dev        # http://localhost:8080/apps/
SITE_PATH_PREFIX=/apps/pr-preview/pr-1/ SITE_PREVIEW=1 npm run build   # as a preview
npm run build && npm run check   # schema in sync, output checked
npm run schema                   # after changing schemas/entry.js
npm test                         # end-to-end tests: listing validation, review, creator's entry point (network)
npm run --silent listing -- entries/mathe-arithmetik.yaml   # check an entry against its deployed app
```

`npm ci` sets the git hooks in `.githooks/` (the `prepare` script). Both are quiet and log to
`node_modules/.cache/lernapps/`. **pre-commit:** no whitespace errors or conflict markers, the staged JavaScript,
JSON and YAML parse, the schema is in sync. **pre-push:** the change scope of the pushed commits (the classifier of
lernapps/tooling, at the commit the workflows pin): nothing for only the plan (`.vibe/**`); otherwise
`npm run build && npm run check`, and on a change of code also the offline tests (listing validation, link classification,
review). CI runs the rest: the creator's entry point (network) and the review build in its container (Docker).

## License

[MIT](LICENSE)
