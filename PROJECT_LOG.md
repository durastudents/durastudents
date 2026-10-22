# Project Log — Dura Digital Heritage Project / durastudents.org.np

A running journal of what has been done, when, which files changed, and the decisions behind it.
Newest entries go at the bottom of the timeline; keep the "Open items" section current.

**How to read this log**

- Dates are `YYYY-MM-DD`. GitHub timestamps are UTC (Nepal is UTC+05:45), so an evening event in Nepal can appear on the next UTC day.
- Entries marked *(repo)* are backed by git history, pull requests or issues in `durastudents/durastudents`.
- Entries marked *(recorded)* come from the project's working notes. Their dates are the day the work was first recorded, not necessarily the day it started.
- Last updated: 2026-10-22.

---

## 1. Summary

| Item | Status |
|---|---|
| Project concept (Detailed Project Report, 35 sections) | Written |
| Six-phase plan and formal 12-section funding proposal (.docx) | Drafted; funding partner, date and budget figures still to fill in |
| Society site v1 (single `index.html`) | Built 2026-10-02/03, since replaced |
| Consolidated Next.js static site at `durastudents.org.np` | Live on GitHub Pages since 2026-10-19 (PR #1) |
| Old sites redirected to the new domain | Approved; two redirects confirmed working, rest tracked in #15 |
| Backlog issues #2–#28 | Created 2026-10-19; none closed yet |
| PR #29 (SEO, CI, rights policy), #30 (backlog items), #31 (Next.js 16) | Open, waiting for review and merge |

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

### 2026-10-22 — This log

- Created `PROJECT_LOG.md` to record the history above (this file).

---

## 3. Open items

**Needs a person (no code can fix these)**

- Merge order: #29 → #30 → #31. After #29's CI run appears once, turn on branch protection for `main` and require the `Typecheck, lint and build` check (Settings → Branches).
- Submit `sitemap.xml` to Google Search Console (#12).
- Committee and cultural reviewers must read the draft rights/consent policy (#18); its "Reuse" section is a proposal, not an agreed rule.
- Content and details: donation details (#2), hero photo (#3), official domain email (#4), verify timeline/committee/impact (#5), resources PDFs (#6), Dura Mahila Samaj logo (#7), quiz rules and team (#8), statistics sources (#9), place pins (#10), first consented people (#11), pilot archive items (#22), first news posts (#27), Nepali/Dura language decisions (#19).
- Finish verifying old-site redirects (#15) and confirm GitHub Pages HTTPS/custom domain (#16).
- A screen-reader pass by a person (#25); automated checks do not replace it.
- Proposal document: funding partner, cover date and budget figures.

**Technical, not started**

- #20 port Books library, #21 port Puraney SVG tool, #24 move Lopa dictionary to `lopa.durastudents.org.np`.

---

## 4. How to add an entry

Append a new `### YYYY-MM-DD — Title` block under the timeline with: **Tasks**, **Files changed**, **Commits / PRs**, and **Notes**. Update the Summary table and Open items in the same commit.
