# Project Log — Dura Digital Heritage Project / durastudents.org.np

A running journal of what has been done, when, which files changed, and the decisions behind it.
Newest entries go at the bottom of the timeline; keep the "Open items" section current.

**How to read this log**

- Dates are `YYYY-MM-DD`. GitHub timestamps are UTC (Nepal is UTC+05:45), so an evening event in Nepal can appear on the next UTC day.
- Entries marked *(repo)* are backed by git history, pull requests or issues in `durastudents/durastudents`.
- Entries marked *(recorded)* come from the project's working notes. Their dates are the day the work was first recorded, not necessarily the day it started.
- Last updated: 2026-10-24 (after the final checks).

---

## 1. Summary

| Item | Status |
|---|---|
| Project concept (Detailed Project Report, 35 sections) | Written |
| Six-phase plan and formal 12-section funding proposal (.docx) | Drafted; funding partner, date and budget figures still to fill in |
| Society site v1 (single `index.html`) | Built 2026-10-02/03, since replaced |
| Consolidated Next.js static site at `durastudents.org.np` | Live on GitHub Pages since 2026-10-19 (PR #1) |
| Old sites redirected to the new domain | Approved; two redirects confirmed working, rest tracked in #15 |
| Backlog issues #2–#28 | Created 2026-10-19. As of 2026-10-24 afternoon: 10 closed (#3, #12, #14, #17, #23, #24, #25, #26, #27, #28), 17 open (#2, #4–#11, #13, #15, #16, #18–#22) |
| PR #29 (SEO, CI, rights policy), #30 (backlog items), #31 (Next.js 16) | Merged 2026-10-22 |
| Dependency upgrades (Tailwind 4, TypeScript 7, ESLint 10, Actions) and hero photo | Merged 2026-10-22 (PRs #33–#43) |
| Dura Lopa web dictionary, sentences, timelines, books inside the site | Built 2026-10-23; live under `/language/` |
| Design pass (home, about, contact, programs, heritage, footer, nav, news) | Done 2026-10-23 to 2026-10-24 |
| Nepali typography (Tiro Devanagari Hindi, Teko) with a build-time check | Merged 2026-10-24 (PR #44); CI runs the check |
| Legacy `dura-lopa-web` redirect | Patch prepared, not applied (no write access to that repo) |
| Branch protection on `main` | Not enabled (GitHub reports `main` unprotected); the API write was refused from the working session, so it needs a manual change |

---

## 2. Timeline

### 2026-09-28 — Project definition and proposal *(recorded)*

**Tasks**

- Defined the Dura Digital Heritage Project (DHP): preservation, digitisation, documentation and revitalisation of Dura Indigenous heritage in Nepal.
- Wrote the Detailed Project Report: vision, mission, objectives, heritage collections (history, language, oral history, intangible heritage, places, people, photo/document/audio/video archives, digital museum), Dura Lopa / Dura Peto / Dura Talks integration, technical architecture, metadata scheme (`DHP-XXX-#####`), preservation principles, community participation model, verification labels (Verified / Community Account / Research Interpretation / Unknown), access levels (Public / Community / Restricted / Archival), governance, KPIs and sustainability.
- Fixed a six-phase plan: Foundation, Documentation, Digitization, Platform Development, Public Launch, Long-Term Development.
- Converted the plan into a 12-section formal proposal document (.docx): terracotta/maroon heritage theme, cover page, manual table of contents, headers/footers, formatted tables.
- Built the document pipeline: Node.js `docx` package, LibreOffice headless PDF export, `pdftoppm` for visual checks. The built-in TOC component did not render in LibreOffice, so a manual TOC with right-aligned dotted tab stops is used.

**Files**

- Project Report (Project document) and the proposal .docx (generated outside the repo, in the session's outputs folder).

**Notes**

- Two placeholders remain before the proposal can be submitted: funding partner name and date on the cover page, and actual budget figures in Section 13.

---

### 2026-10-02 — Society website v1 *(repo)*

**Tasks**

- Created the repository and the first single-page Dura Students Society site (plain HTML, Tailwind CDN, Lucide icons).
- Sections: About, Heritage, Language, Digital Heritage, Youth, Contact; links to the Dura Digital Heritage Project, Dura Lopa, Dura Peto and Dura Talks.
- Added the custom domain file.

**Commits**

| Commit | Message |
|---|---|
| `e7c8f1e` | Initial commit |
| `732c580` | Create CNAME |
| `b9431a6` | Add index.html for Dura Students Society website |

**Files changed**: `.gitignore`, `LICENSE`, `README.md`, `CNAME`, `index.html` (all added).

---

### 2026-10-03 — Content, logo and theme *(repo)*

**Tasks**

- Merged more information from the previous website into the page.
- Fixed the logo not loading by committing `assets/logo.png` (uploaded twice, the second time replacing the file).
- Implemented the dark/light theme toggle and adjusted styles (green theme).

**Commits**

| Commit | Message |
|---|---|
| `33468a6` | Update: including more informations from previous website |
| `4e259f5` | Create logo.png |
| `eaf878f` | Add files via upload |
| `d870bbe` | Implement theme toggle and adjust styles |

**Files changed**: `index.html` (modified 3 times), `assets/logo.png` (added, then modified).

**Related, not in this repo** *(recorded)*: concept stage started for turning the Dura culture book (*Dura Itihas ra Sanskriti*, PDF) into an interactive website.

---

### 2026-10-08 — Grammar web app plan *(recorded, not in this repo)*

- Planned a full web application from *Dura Bhasako Byakaran* (Language Commission, 178-page PDF): all book content, one grammar concept per page, sidebar navigation, data kept in separate JS files from HTML. Concept stage.

---

### 2026-10-17 — Community media *(recorded, not in this repo)*

- Credits and YouTube thumbnail plan for the song "Furke Jantar", and a banner concept for Sanjita Dura's YouTube channel. Concept stage.

---

### 2026-10-19 — Consolidation decision and relaunch *(repo)*

**Decisions**

- Bring all separate Dura projects (Dura Lopa, Dura Peto, DuraPlaces, DuraPeople, the Students Society sites, the DHP app) under one project and one domain, `durastudents.org.np`.
- Start fresh with a new site instead of building on the existing `ddhp` Next.js app.
- Placeholder data from the older sites (sample phone, bank account, team names, sample people bios, stock photos) was deliberately **not** imported.

**PR #1 — "Replace single-page site with Next.js static site"** (opened and merged 03:23 UTC; commit `766a526`, merge `1de4e77`)

- Rebuilt the site as Next.js (static export) + Tailwind, deployed to GitHub Pages by `.github/workflows/deploy.yml` (runs on push to `main`).
- Society pages: about, programs, inter-district quiz results, team, resources, news, donate, contact, impact.
- Heritage pages: overview, places map (Leaflet + OpenStreetMap), statistics, organizations, people (empty until verified entries exist), archive.
- Language page: Dura Lopa app, screenshots, contributors.
- Data separated from code in `data/` (`site.ts`, `society.ts`, `lopa.ts`, `people.ts`, `places.ts`, `statistics.ts`, `types.ts`).
- `public/CNAME` keeps the custom domain; the original logo moved to `public/assets/logo-hires.png`.
- Removed `index.html`.

**Files changed (PR #1)**

| Area | Files |
|---|---|
| Config | `package.json`, `package-lock.json`, `next.config.mjs`, `tsconfig.json`, `tailwind.config.js`, `postcss.config.js`, `.gitignore`, `README.md` |
| Deploy | `.github/workflows/deploy.yml` |
| Pages | `app/layout.tsx`, `app/page.tsx`, `app/globals.css`, `app/about`, `app/contact`, `app/donate`, `app/impact`, `app/language`, `app/news`, `app/programs` (+ `quiz`), `app/resources`, `app/team`, `app/heritage` (`page`, `archive`, `organizations`, `people`, `places`, `statistics`) |
| Components | `Header.tsx`, `Footer.tsx`, `PageHeader.tsx`, `PlacesExplorer.tsx` |
| Data | `data/lopa.ts`, `people.ts`, `places.ts`, `site.ts`, `society.ts`, `statistics.ts`, `types.ts` |
| Assets | `public/assets/` (logo, hi-res logo), `public/lopa/` (app icon, 5 screenshots, 8 contributor photos), `public/orgs/` (2 organization images), `public/CNAME` |
| Removed | `index.html`; `assets/logo.png` moved |

**Retiring the old sites**

- Approved redirecting `durastudents-website`, `durapeto-web` and `ddhp` to `durastudents.org.np`. Two of the redirects were confirmed working. Remaining verification is issue #15.

**Backlog created** (issues #2–#28, 10:37 UTC, two milestones)

| Milestone | Issues |
|---|---|
| Launch readiness | #2 donation details, #3 hero photo, #4 official domain email, #5 verify history/committee/impact figures, #6 resources PDFs, #7 Dura Mahila Samaj logo, #8 quiz rules/sponsors/team, #9 statistics sources, #10 verify 6 draft place pins, #11 first consented people entries, #12 SEO basics, #13 CI checks, #14 Dependabot, #15 retire old sites, #16 GitHub Pages HTTPS/domain, #17 README, #18 rights/consent policy |
| Post-launch | #19 Nepali/Dura language support, #20 port Books library, #21 port Puraney SVG tool, #22 archive model and pilot items, #23 site search, #24 move Lopa dictionary to a subdomain, #25 accessibility audit, #26 theme toggle, #27 news, #28 Next.js 16 |

**PR #29 — "SEO basics, PR checks and a draft rights/consent policy"** (branch `high-priority-fixes`, commit `228a78a`, opened 15:23 UTC; **open**)

- #12: `app/sitemap.ts` (18 URLs, discovered from `app/`), `app/robots.ts`, favicon, apple icon, Open Graph and Twitter images made from the real logo, a description on every page.
- #13: ESLint (`eslint.config.mjs`), `npm run typecheck`, `npm run lint`, and `.github/workflows/ci.yml` running typecheck, lint and build on pull requests.
- #18: `app/heritage/policy/page.tsx`, a **draft** rights, consent and access policy built from the access levels and verification labels in `data/site.ts`; linked from the footer, People, Places and Archive.
- Checked: typecheck, lint, build (28 static pages), inspected generated `out/`.
- Files: 31 changed (+5,299 / −766), including `components/Footer.tsx`, `app/layout.tsx`, every page file (metadata), `package.json`, `package-lock.json`.

---

### 2026-10-20 — Backlog work *(repo)*

**Decision**: complete every issue that needs no outside input first, starting with high-priority ones, delivered through pull requests for the owner to merge.

**PR #30 — "Dependabot, README, archive model, search, accessibility, theme toggle, news"** (branch `backlog-no-input`, stacked on #29, 4 commits, opened 04:13 UTC; **open**)

| Issue | Change | Main files |
|---|---|---|
| #14 | Dependabot: npm weekly (minor/patch grouped), GitHub Actions monthly | `.github/dependabot.yml` |
| #17 | README rewritten for GitHub Pages deploy, CI, search, and a "which file do I edit" table | `README.md` |
| #22 | Typed archive model with provenance, rights, access level, verification and consent; only `Public` items render; build fails on bad id, duplicate, missing consent or image without alt text | `data/archive.ts`, `components/ArchiveCard.tsx`, `app/heritage/archive/page.tsx`, `app/heritage/archive/[id]/page.tsx` |
| #23 | Site-wide search with Pagefind (index built from exported HTML), `/search` page, header link | `app/search/page.tsx`, `components/SearchBox.tsx`, `components/Header.tsx`, `package.json` |
| #25 | Accessibility pass: skip link, visible focus, keyboard-reachable scroll regions, underlined in-text links, map keyboard instructions, dark-mode accent contrast 3.6:1 → 6.6:1 | `app/globals.css`, `tailwind.config.js`, `app/layout.tsx`, `components/PlacesExplorer.tsx`, most pages |
| #26 | Manual light/dark toggle; follows the system until a choice is saved; no flash on load | `components/ThemeToggle.tsx`, `app/layout.tsx` |
| #27 | News data structure and page with an empty state (no posts invented) | `data/news.ts`, `app/news/page.tsx` |

- Commits: `d4e80fc`, `3665366`, `137774b`, `858a3c3`. Files: 29 changed (+733 / −74).
- Checked: typecheck, lint, build; axe-core went from 29 violations to 0 across 19 pages (light and dark, phone width); Lighthouse accessibility 100 on every page; browser tests for toggle, skip link, search (English and Devanagari) and hidden restricted items.

**PR #31 — "Upgrade to Next.js 16"** (branch `next-16`, stacked on #30, commit `009024b`, opened 04:13 UTC; **open**)

- Next.js 15.5 → 16.4.2, React → 19.3, `eslint-config-next@16` with native flat config.
- `ThemeToggle` rewritten with `useSyncExternalStore` (new react-hooks rule forbids `setState` in an effect); `favicon.ico` regenerated as RGBA for Turbopack.
- Reason: PostCSS advisories bundled with Next 15; `npm audit --omit=dev` now reports 0 vulnerabilities.
- Files: `app/favicon.ico`, `components/ThemeToggle.tsx`, `eslint.config.mjs`, `package.json`, `package-lock.json`, `tsconfig.json`. Kept separate so it can be reverted alone.

---

### 2026-10-22 — Merges, dependency upgrades and hero photo *(repo)*

**Merged** (merge commits by Amar Dura): #29 `high-priority-fixes`, #30 `backlog-no-input`, #31 `next-16`, #32 `project-log`.

**Dependency and tooling PRs merged the same day**

| PR | Change |
|---|---|
| #33, #34, #35, #36 | GitHub Actions: `setup-node` 4→7, `upload-pages-artifact` 3→5, `deploy-pages` 4→5, `checkout` 4→7 |
| #37 | `@types/leaflet` and `postcss` patch updates |
| #38 | ESLint 9.39.5 → 10.13.0 |
| #39 | TypeScript 5.9.3 → 7.0.2. `typescript-eslint` cannot load TypeScript 7, so `typescript` is aliased to the TypeScript 6 API for lint while `tsc` runs TypeScript 7 (`224a76c`) |
| #40 | Tailwind CSS 3 → 4 (`845cf09`): CSS-first config replaces `tailwind.config.js`; 64 page screenshots (light/dark, desktop/phone) matched the Tailwind 3 build pixel for pixel |
| #41 | `@types/node` 22 → 26 |
| #42 | Lockfile regenerated with optional packages for all platforms |
| #43 | Home page hero: the Society group photo from the 32nd Anniversary of Dura Service Society, Handikhola (`b0c7c80`, `2c7e96c`), for issue #3 |

**Fixes by `dura-garage` (evening, Nepal time)**: deploy-check and README alignment (`bb477ac`), public archive items included in the sitemap (`9733a08`), static preview made self-contained (`671f53d`), mobile navigation and collection links (`fd1128d`).

---

### 2026-10-22 — This log

- Created `PROJECT_LOG.md` to record the history above (this file).

---

### 2026-10-23 — Dura Lopa inside the site and Nepali fonts *(repo)*

**Commits** (`dura-garage`): `899c506` integrate Dura Lopa resources, `9e41fa8` apply Tiro and Teko to Nepali text.

- New routes: `/language/dictionary/`, `/language/sentences/`, `/language/timelines/`, `/language/sources/`. The 2,029-entry dictionary is a same-origin JSON file fetched only when the dictionary page opens; search, pagination, word links by id, loading, retry and not-found states, and English/Nepali interface labels.
- Data in `data/lopa/` (dictionary, 80 sentences, three timelines, books list). `scripts/prepare-lopa-data.mjs` validates it and copies the dictionary to `public/lopa/data/` on `predev` and `prebuild`.
- Canonical source: the `dura-garage/dura-lopa-web` repository snapshot (commit `30db92c`), chosen by the owner. It differs from the legacy live API in 2,027 of 2,029 records, so the live API must not be merged in by id.
- Four book PDFs and covers are published under `public/lopa/books/`.
- Fonts: Tiro Devanagari Hindi for reading text and Teko for display headings, loaded through `next/font`, applied with `.devanagari-text` and `.devanagari-display`.
- `DURA_LOPA_INTEGRATION_PLAN.md` records the plan, the data discrepancy and the licensing notes (legacy code is GPL-2.0; the site is MIT, so the interface was reimplemented rather than copied).

**Notes**: rights to publish the dictionary, sentences and book files still need written confirmation (see Open items).

---

### 2026-10-23 to 2026-10-24 — Design and content pass *(repo)*

**Commits** (`dura-garage`):

| Commit | Change |
|---|---|
| `b45549a`, `d822452` | Contact page rebuilt; committee portraits, quiz history records and central office map details |
| `8afc266`, `8b7804d` | Footer and mobile navigation reworked |
| `cd819c4` | Embedded brand icons (Facebook, YouTube, Google Play, App Store, Google Maps) |
| `2eb7381` | Updated Society logo |
| `f93dd6d` | Programs page redesigned with original illustrations |
| `9d07db7` | About page shows organizations and the committee in role groups |
| `56ee56b` | Home page rebuilt around three paths (learn Dura Lopa, explore heritage, contact); project-planning targets removed from the home page |
| `4776614` | Three initial news posts published; `docs/news-submission.md` explains how to add posts |
| `2a4d8f5` | Heritage page redesigned |
| `f248489` | Link underlines cleaned up |

**Notes**: committee portraits are in `public/committee/`. The first news post says the Lopa page offers alphabet lessons, verbs, sentences with native audio and an audio book; this repo has no audio route, so that wording should be checked against the live site.

---

### 2026-10-24 — Nepali typography check, legacy redirect, branch protection *(repo)*

**Nepali typography** (PR #44, branch `nepali-typography-lopa-retire`)

- Audited the built site: 26 pages, 83 Devanagari text nodes not tagged with a language. 80 were Dura sentences already tagged `lang="drq"` with the font class (counted only because the audit first looked for `ne`); three were the Dura organization names on `/heritage/organizations/`, which had no font. Those three now carry `lang="ne"` and `devanagari-text`.
- `app/globals.css`: `:lang(ne)` and `:lang(drq)` now apply the Devanagari reading font, so tagged text is covered even if the helper class is forgotten.
- `scripts/check-nepali-fonts.mjs` and `npm run check:nepali-fonts`: fails when built HTML has Devanagari text without `lang="ne"` or `lang="drq"`. Added to `.github/workflows/ci.yml` after the build step. Verified that it fails on the old build (3 findings) and passes on the new one (26 pages).
- Checked: typecheck, lint, build. The sandbox cannot reach Google Fonts, so the audit build used a temporary font stub (not committed); CI and GitHub Pages load the real fonts.

**Retiring `dura-lopa-web`**

- This site has no remaining links to the legacy app; the `/language` row of the README now says so.
- Prepared a patch for `dura-garage/dura-lopa-web` (the session had read access only). It redirects `/`, `/dictionary`, `/dictionary/word`, `/sentences`, `/timelines`, `/timeline` and `/sources` to the matching `durastudents.org.np/language/` pages before the app loads, adds a `noscript` link, a canonical link and a README notice. `/puraney` is not redirected until the SVG tool is ported (#21). The backend API is untouched.
- A server-side 301 in the Render dashboard is still preferable once the owner is ready (see Open items).

**Branch protection**: attempted through the GitHub API; the request was refused (write access to that API path is not permitted from the working session). Nothing was changed.

**Merged**: PR #44 (typography check and log update) on 2026-10-24.

---

### 2026-10-24 — Final checks, issue review and file review *(repo)*

**Issues closed after review** (owner's instruction)

- #27 News: closed as completed. Four posts are live and `docs/news-submission.md` gives a submission template. Not done: posting still needs a maintainer to edit `data/news.ts`, and there is no RSS feed. The posts so far describe the site; Society event reports and quiz results are still to come.
- #24 Lopa subdomain: closed as **not planned**. The subdomain was never set up; the dictionary now lives inside the site at `/language/dictionary/` and related routes. The old onrender app is still not redirected (patch prepared, not applied).

**Final checks on `main` (87b878f)**

| Check | Result |
|---|---|
| `npm run typecheck`, `npm run lint` | Pass |
| `npm run build` | 33 static pages generated; 26 pages indexed by Pagefind |
| `npm run check:nepali-fonts` | Pass on 26 pages |
| `npm audit --omit=dev` | 0 vulnerabilities |
| Internal links and assets in the built site | 0 broken references; every `<img>` has alt text |
| Sitemap | 22 URLs, all resolve to a built page. Not listed, on purpose: `/search`, `/404`, and the `/heritage/archive/none/` placeholder page |
| CI on PR #44 | `Typecheck, lint and build` passed |
| Live site `https://durastudents.org.np` | **Not checked**: the working session cannot reach it (request blocked), so confirm in a browser |

The audit build used a temporary font stub because the working session cannot reach Google Fonts; CI and Pages build with the real fonts.

**File review (nothing deleted; suggestions only)**

| Candidate | Why | Risk |
|---|---|---|
| `CNAME` (repo root) | Identical to `public/CNAME`. The deploy uploads only `out/`, which gets its `CNAME` from `public/` | None |
| `public/lopa/appicon.png` (8 KB) | No page, component or data file refers to it since the design pass | None |
| `phases` and `targets` in `data/site.ts` | Exported but not used anywhere; the homepage planning targets were removed 2026-10-24 | None; the same text lives in the project report |

Left in place on purpose: `data/lopa/dictionary.json` (source for the generated public copy), `react-dom`, `@types/react*` and `@typescript/native` (implicit requirements of Next, TypeScript and the TS 7 alias), `DURA_LOPA_INTEGRATION_PLAN.md` (history; its Phase 4 is out of date, so consider moving it to `docs/`). Size notes, not deletions: `app/icon.png` (196 KB) and `public/lopa/books/covers/grammar.png` (700 KB) could be compressed; the four book PDFs (about 9 MB) could move to release storage if the repository grows.

---

## 3. Open items

**Needs a person (no code can fix these)**

- **Branch protection on `main`**: Settings → Branches → Add branch ruleset (or classic rule) for `main`; require status checks to pass and select `Typecheck, lint and build`; block force pushes and deletions. The check has run on pull requests since #29, so it is selectable. Note that a required check also blocks direct pushes from non-admin accounts, so changes to `main` go through pull requests.
- **Apply the `dura-lopa-web` redirect**: apply the prepared patch to `dura-garage/dura-lopa-web` (needs access to that repo), or add 301 redirects in the Render dashboard for the same routes. After it is live, check each old URL, keep the backend API running until nothing depends on it, and keep `/puraney` working until #21 is done.
- **Rights for Lopa content**: written confirmation to publish the dictionary, sentences, timelines and the four book PDFs and covers on this site, with attribution.
- Submit `sitemap.xml` to Google Search Console (#12).
- Committee and cultural reviewers must read the draft rights/consent policy (#18); its "Reuse" section is a proposal, not an agreed rule.
- Content and details: donation details (#2), official domain email (#4), verify timeline/committee/impact (#5), resources PDFs (#6), Dura Mahila Samaj logo (#7), quiz rules and team (#8), statistics sources (#9), place pins (#10), first consented people (#11), pilot archive items (#22), Nepali/Dura language decisions (#19). The hero photo (#3) was added 2026-10-22.
- Optional cleanup from the 2026-10-24 file review: delete the root `CNAME`, `public/lopa/appicon.png` and the unused `phases`/`targets` in `data/site.ts`.
- Check the first news post's description of the Lopa page against the live site (audio, alphabet lessons and verbs are not built in this repo).
- Finish verifying old-site redirects (#15) and confirm GitHub Pages HTTPS/custom domain (#16).
- A screen-reader pass by a person (#25); automated checks do not replace it.
- Issue housekeeping: #13 (CI checks) is still open although `.github/workflows/ci.yml` runs typecheck, lint, build and the Nepali check on every pull request, so it can probably be closed. #19 (Nepali/Dura support) is partly done (Lopa interface in Nepali, Devanagari fonts) and #22 (archive) has the model and one pilot item; update their checklists before closing.
- Proposal document: funding partner, cover date and budget figures.

**Technical, not started**

- #20 port Books library (the four Lopa books are now served from `/language/sources/`; confirm whether anything else from the old Books library is needed), #21 port Puraney SVG tool, (#24, the Lopa subdomain, was closed as not planned on 2026-10-24.)

---

## 4. How to add an entry

Append a new `### YYYY-MM-DD — Title` block under the timeline with: **Tasks**, **Files changed**, **Commits / PRs**, and **Notes**. Update the Summary table and Open items in the same commit.
