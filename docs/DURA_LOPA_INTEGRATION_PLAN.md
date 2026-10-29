# Dura Lopa integration plan and status

## Goal

Bring the learner-facing Dura Lopa web dictionary into the Language section of
`durastudents.org.np`, so visitors can use the dictionary on the Society's own
domain instead of being sent to a separate application. Preserve the existing
Language page, mobile-app links, screenshots, contributors and site-wide
navigation.

This document is an implementation plan, not an approval to publish data whose
source or reuse rights have not been confirmed.

## Implementation status

The first-party integration described below has been implemented in the
Next.js Language section:

- Dictionary, bilingual sentence, language timeline and learning-resource
  routes are generated as static pages.
- The dictionary is fetched from a generated same-origin JSON file only when
  its route is opened; search, pagination, URL-addressable word selection,
  loading, retry and missing-word states are included.
- A shared site-wide English/Nepali interface toggle is available across the
  site, including the Language routes; the selection is persisted in browser
  storage. English remains the default to preserve the existing site behavior.
- The Language overview links to the new routes while retaining the mobile-app
  store links, screenshots and contributor section.
- The data preparation script validates the imported dictionary, sentences
  and timeline records before development/build.

The source revision selected for implementation is recorded in
[`data/lopa/README.md`](./data/lopa/README.md). This selection does not itself
establish publication rights for the dataset, book scans or cover images;
confirm those rights and attribution with the relevant maintainers before
public release.

## Recommendation

Implement the learner experience natively in the existing Next.js application
and deploy it as static files with the rest of the GitHub Pages site. Migrate
and reconcile the content data, but do not copy the legacy React/Vite app or
introduce its Express service as a new runtime dependency.

The current project uses Next.js static export. The legacy app is a React
Router/Vite SPA backed by Express endpoints that return JSON files. Its
dictionary is small enough for deferred, same-origin static delivery: the
legacy GitHub JSON snapshot is 453,338 bytes (about 51,638 bytes gzip); the
live API response is about 290,733 bytes (about 49,675 bytes gzip). Fetching
that data only on the dictionary route avoids adding it to every page's
JavaScript bundle, avoids cross-origin/API availability dependencies, and
keeps the existing static deployment model.

## What was reviewed

- Legacy application: [dura-garage/dura-lopa-web](https://github.com/dura-garage/dura-lopa-web),
  default branch `main`, repository snapshot inspected at commit
  [`30db92c1d95979f94afbdb10b56b50db2b7f30a8`](https://github.com/dura-garage/dura-lopa-web/tree/30db92c1d95979f94afbdb10b56b50db2b7f30a8).
- Legacy live site: <https://dura-lopa-web.onrender.com>.
- Legacy dictionary API: <https://dura-lopa-web-backend.onrender.com/api/dictionary>.
- Legacy sentences API: <https://dura-lopa-web-backend.onrender.com/api/sentences/all>.
- Current integration surface: `app/language/page.tsx`, `data/lopa.ts`,
  `data/site.ts`, and the static-export configuration in `next.config.mjs`.

### Legacy features and implementation

| Legacy feature | Existing implementation | Proposed destination |
|---|---|---|
| Trilingual dictionary | `frontend/src/pages/Dictionary.jsx`; fetches the complete list from `GET /api/dictionary`, filters Dura and Nepali with substring matching and English case-insensitively, and displays IPA, Nepali/English glosses and parts of speech | `/language/dictionary/` |
| Word details | Shown beside the list when selected; a separate `/dictionary/word` route relies on React Router `location.state` | Keep selection in the dictionary view and represent a selected word with a stable ID in the URL query, so refresh/share works without transient router state |
| Bilingual sentences | `frontend/src/pages/Sentences.jsx`; fetches `GET /api/sentences/all` and supports searching | `/language/sentences/` |
| Language timelines | JSON files imported from `frontend/src/assets/json/` and rendered by the timeline pages | `/language/timelines/`, after verifying and migrating the referenced timeline datasets |
| Books and source material | `frontend/src/pages/Sources.jsx`; displays book descriptions, image previews and PDF downloads | `/language/sources/`, after confirming every image/PDF is present and has publication/reuse permission |
| Language switch | `i18next` offers English and Nepali strings; the legacy app defaults to Nepali | Use the shared site-wide English/Nepali toggle (English is the current site default); keep Dura, Nepali and English dictionary fields distinct |
| Puraney SVG editor | `/puraney` contains an interactive SVG/color/export tool, rather than a core dictionary/learning flow | Exclude from the first learner-facing migration. Decide separately whether it is a public learning tool, an internal editor, or obsolete. |

The live legacy home page loads, but directly opening
`https://dura-lopa-web.onrender.com/dictionary` returned a 404 during review.
The dictionary endpoint itself returned JSON. The existing Language page's
external link goes to the legacy home page rather than to a working dictionary
route.

### Important data-source discrepancy (release blocker)

Both the legacy repository JSON and the live dictionary API contain 2,029
records with IDs 1–2,029, but **2,027 of those records differ in one or more
dictionary fields** (`dura`, `ipa`, `nepali`, `nepaliPos`, `english`,
`englishPos`). For example, ID 1 is `ज्याबे` (“along with”) in the repository
snapshot and `अ्` (“power, almighty”) in the live API. This is not a formatting
difference. The same IDs appear to have been reassigned or the sources have
drifted substantially.

The repository snapshot also has 25 entries with no English gloss, one with no
Nepali gloss, and one with no English part of speech. Keep missing fields
missing; do not infer or invent translations. The 80 sentence records have the
same Dura/Nepali content in both sources; their serialized file sizes differ
because of representation/formatting.

**Do not migrate either dictionary snapshot without the Society/language
maintainers choosing and approving a canonical source.** Reconcile by content,
not only by `id`; preserve homonyms, alternate forms, punctuation, IPA,
diacritics and source records.

## Scope and decisions

### First release (recommended)

1. Integrate the trilingual dictionary and word details.
2. Integrate bilingual sentences if the current content is approved along with
   the dictionary.
3. Add direct links from the existing Language page to the new local routes.
4. Retain app-store links and existing Dura Lopa page content.
5. Keep timelines and book downloads as a follow-up unless their data and
   assets are verified as part of the same content approval.
6. Do not integrate the SVG editor in the learner-facing release.

### Decisions needed before implementation

- Which dictionary is canonical: the live API, the GitHub JSON snapshot, or a
  corrected/approved export from the language team?
- Who can certify the word spellings, meanings, IPA, parts of speech, and
  permissions to publish the dataset on the Society site?
- Confirm whether sentences, timelines, sources/PDFs and the Puraney editor
  are included in the first release or delivered in later phases.
- English is the current site-wide default to preserve existing behavior; the
  legacy app's Nepali default does not change that site setting. Both English
  and Nepali interface labels are available.
- Confirm the attribution/license for the **data and media** separately from
  the software license.

## Licensing and attribution

The legacy repository has a GPL-2.0 license; the current Society site is
MIT-licensed. Avoid transplanting legacy components or utility code wholesale.
Implement the UX in the current project's conventions and retain suitable
source attribution.

The data, PDFs, illustrations, audio and other media may have rights that are
different from the repository's software license. Get explicit approval for
publication and identify required attribution before copying them. If GPL
code must be reused, resolve the resulting license obligations for the
combined distribution before implementation.

## Proposed routes and navigation

| Route | Content |
|---|---|
| `/language/` | Existing Dura Lopa overview, app links and project/contributor information; add clear entry points to Dictionary and Sentences |
| `/language/dictionary/` | Searchable list, result count, selected-word detail and empty/loading/error states |
| `/language/sentences/` | Searchable Dura–Nepali sentence collection |
| `/language/timelines/` | Approved language-preservation timelines; later phase |
| `/language/sources/` | Approved book/resource cards and files; later phase |

All links should stay on `durastudents.org.np`. Avoid an iframe: it would retain
the legacy route/deployment failure mode, separate styling/navigation,
cross-origin behavior and accessibility limitations.

## Architecture and data design

### Static content

- Store the approved source exports under `data/lopa/` for maintainable,
  version-controlled content and source review.
- Publish the learner-facing JSON separately under `public/lopa/data/` (or use
  a generated copy there) so it is fetched only by the dictionary/sentences
  pages, not embedded in every route's client bundle.
- Record source URL, source commit/export date, approval, attribution and a
  checksum in a small manifest or adjacent documentation.
- Keep stable word IDs. Do not use list indexes as React keys or public IDs.
- Validate the export before build: JSON parses; IDs are unique; required
  fields are present; optional translations/parts of speech are allowed to be
  absent; all user-visible strings remain plain text; counts match the approved
  baseline.
- Keep Nepali and Dura text as UTF-8; normalize user query and searchable text
  to Unicode NFC before comparisons.

### Dictionary interaction

- Build a client-side dictionary explorer inside the existing page shell,
  using the site's typography, card, color, dark-mode, focus and spacing
  conventions.
- Fetch the JSON from the same origin on page entry. Provide announced loading,
  error/retry, no-results and loaded states. Do not silently render an empty
  success state when the data request fails.
- Search Dura, Nepali and English fields, plus optionally IPA. Use trim,
  Unicode NFC normalization, and case-insensitive English matching.
- Avoid rendering all 2,029 entries at once. Cap the initial visible list
  (recommended 50 results) and provide pagination or “Show more”; display the
  total match count. Debounce only if browser testing demonstrates it is
  needed.
- Keep the search input labelled, results keyboard-operable, selection
  announced, and word details structured with `<dl>`/headings. Show absent
  values as “Not recorded” (localized) or omit the row; never show `undefined`,
  `null`, or fabricated content.
- Preserve homonyms and duplicate spellings as separate records using IDs.
- Make selected word addressable as `/language/dictionary/?word=<id>` so
  refresh, copy-link and browser history work; verify an unknown ID produces a
  helpful not-found state and a route back to search.
- Render all dictionary values as text, not trusted HTML.
- Keep work local/offline-capable after the JSON has loaded only if an explicit
  cache/offline requirement is approved; do not add a service worker by default.

### Sentences, timelines and sources

- Reuse the same responsive site shell and translated loading/error patterns.
- Search Dura and Nepali sentence text, with accessible result count and
  empty-state behavior.
- Move timelines only after each JSON file's source, dates and event wording
  have been reviewed. Preserve dates and attribution.
- Move books only after verifying all PDFs/previews exist, file links work,
  accessibility/metadata are adequate, and rights are cleared. Avoid copying
  dead asset paths.
- Treat any future audio as user-initiated playback; do not autoplay.

## Delivery phases

### Phase 0 — data, scope and rights (blocking)

1. Ask the Society/language maintainers to choose the canonical dictionary
   source and resolve the 2,027-record discrepancy.
2. Export the approved dictionary and sentences as stable, versioned data.
3. Review missing values, duplicate spellings/homonyms, IPA and translations;
   document unresolved items rather than editing them silently.
4. Confirm content/data/media publication permissions and attribution.
5. Decide the first-release scope for sentences, timelines, sources and the
   editor.

**Exit criteria:** written approval of the canonical dataset, source,
attribution/license and initial feature scope.

### Phase 1 — migrate and validate data

1. Add approved JSON and provenance/manifest to `data/lopa/`.
2. Add a build-time validator (a small Node script is sufficient; avoid adding
   a schema dependency unless existing validation proves inadequate).
3. Generate/copy public static JSON to `public/lopa/data/` as needed.
4. Compare checksums, record counts, unique IDs and key-field completeness to
   the approved export.

**Exit criteria:** deterministic build validation; all differences from the
approved source are either zero or explicitly reviewed/documented.

### Phase 2 — dictionary MVP

1. Add `/language/dictionary/` in the App Router.
2. Add a focused client component for fetch, search, pagination and selection;
   keep layout, metadata and page heading server/static-rendered.
3. Implement query-string deep links for selected word IDs and missing-value
   handling.
4. Add dictionary entry points to `/language/`; retain mobile-app store links.
5. Verify mobile layouts, keyboard access, screen-reader announcements,
   dark mode, Unicode normalization and page-refresh behavior.

**Exit criteria:** an approved word can be searched by all supported language
fields, opened, refreshed/shared by ID, and used with keyboard/touch; failed
data loading is explicit and retryable.

### Phase 3 — sentence and approved content routes

1. Add `/language/sentences/` with Dura/Nepali search.
2. Add timelines and sources only when content and assets pass their respective
   review.
3. Add metadata, sitemap inclusion for fixed routes, and Pagefind exclusion or
   inclusion decisions as appropriate. Do not index the raw JSON as a page.

**Exit criteria:** every visible Language-page feature links to a working
first-party route or is clearly marked forthcoming.

### Phase 4 — retire/fade the legacy link

1. Replace `site.lopaWeb`/the “Open the web dictionary” link with local
   Dictionary and Sentences links once the integrated routes are live.
2. Keep the legacy app available during a short comparison/rollback window.
3. Update the legacy site's home links or configure a clear redirect only after
   parity, direct-load and content approvals pass.
4. Do not shut down the existing backend until monitoring confirms that no
   other active client depends on its API.

## Quality and acceptance checks

### Data

- Canonical export exactly matches the approved source; count, unique IDs and
  checksum are recorded.
- Test known Dura, Nepali and English searches, including punctuation,
  diacritics, NFC-equivalent input, repeated spellings/homonyms and missing
  translations.
- Confirm the production bundle does not embed the full dictionary in the
  shared layout or every page. The separate dictionary JSON should be fetched
  only on dictionary use and be cacheable by the host.

### Routes and behavior

- Every route works when opened directly, refreshed, or loaded from a copied
  URL on the static host (no SPA fallback assumption).
- Dictionary selection survives reload through the selected-word query ID;
  browser back/forward updates the selected word.
- Search yields stable result counts and handles no matches, API/static-file
  errors, malformed JSON and unknown word IDs.
- Language page app-store buttons remain correct; first-party dictionary and
  sentence links no longer send users to the legacy host.
- Search/sitemap behavior is intentional; raw JSON is not indexed as a page.

### Accessibility and responsive UI

- Search has a persistent accessible label; result interactions work by
  keyboard; focus is visible and not lost when selecting a result.
- Loading/result/error updates are announced without forcing focus.
- Test 320–390px mobile, tablet and desktop; no horizontal page overflow.
- Verify English and Nepali UI labels, Devanagari rendering, contrast and
  selected-word details in light and dark themes.

### Project checks

- `npm run typecheck`
- `npm run lint`
- `npm run build`
- Serve `out/` locally and verify direct URLs, refreshes, Pagefind, static JSON
  responses, and production behavior on the custom-domain-style root path.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Wrong or stale language data is published | Resolve and sign off on the canonical export before migration; compare content, not just IDs |
| The legacy live API or Render service becomes unavailable | Serve the approved dataset from the same static deployment; no runtime API dependency |
| 2,029 results make the page slow or hard to navigate | Fetch only on dictionary use; limit rendered results and test real mobile performance |
| Empty translations are mistaken for errors or filled in without authority | Preserve missing values and label/omit them consistently |
| Direct word links break after refresh | Use stable IDs in a query parameter, not React Router transient `location.state` |
| GPL code is combined with the MIT site without compliance | Reimplement behavior natively; obtain legal/license approval before reusing legacy code |
| Dataset, book or media rights are unclear | Treat content rights separately from code; obtain explicit permission and attribution |
| Timelines/books/editor expand initial scope | Ship dictionary first; keep nonessential modules in later approved phases |

## Sources

- [Legacy repository](https://github.com/dura-garage/dura-lopa-web)
- [Legacy frontend routes](https://github.com/dura-garage/dura-lopa-web/blob/main/frontend/src/App.jsx)
- [Legacy dictionary UI](https://github.com/dura-garage/dura-lopa-web/blob/main/frontend/src/pages/Dictionary.jsx)
- [Legacy dictionary API route](https://github.com/dura-garage/dura-lopa-web/blob/main/backend/routes/dictionary.js)
- [Legacy dictionary data](https://github.com/dura-garage/dura-lopa-web/blob/main/backend/assets/dictionary.json)
- [Legacy sentences data](https://github.com/dura-garage/dura-lopa-web/blob/main/backend/assets/sentences.json)
- [Legacy software license](https://github.com/dura-garage/dura-lopa-web/blob/main/LICENSE)
- [Current Language page](./app/language/page.tsx)
- [Current site content and Lopa links](./data/site.ts)
