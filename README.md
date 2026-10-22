# durastudents.org.np

One site for the **Dura Students Society** and the **Dura Digital Heritage Project**.
Next.js 16 (static export) + Tailwind CSS, hosted on GitHub Pages.

```bash
npm install
npm run dev        # http://localhost:3000 (search needs a real build, see below)
npm run build      # static site in ./out, plus the search index
npm start          # serve ./out locally to try the built site, including search
npm run typecheck  # TypeScript
npm run lint       # ESLint
```

## Adding content

Almost everything is data. Edit the file, open a pull request, and CI checks it.

| To change | Edit |
|---|---|
| Email, social links, nav, programs, organizations, access levels | `data/site.ts` |
| History, committee, quiz results | `data/society.ts` |
| People (only consented, confirmed entries) | `data/people.ts` |
| Map pins | `data/places.ts` |
| Statistics (add a source and year) | `data/statistics.ts` |
| Archive items (photos, audio, video, documents) | `data/archive.ts` |
| News posts | `data/news.ts` |
| Dura Lopa app details | `data/lopa.ts` |
| Resource PDFs | put files in `public/docs/` and list them in `app/resources/page.tsx` |

`data/archive.ts` is checked at build time: a wrong identifier, a duplicate, missing
consent or an image without alt text fails the build. Host large audio and video elsewhere
and link to it; do not commit them here.

## Pages

| Route | Replaces |
|---|---|
| `/`, `/about`, `/programs`, `/impact`, `/resources`, `/news`, `/team`, `/donate`, `/contact` | durastudents-website.vercel.app, durastudentssociety.pages.dev, old durastudents.org.np |
| `/programs/quiz` | durastudentssociety.pages.dev/quiz.html |
| `/heritage` | ddhp-mocha.vercel.app |
| `/heritage/people`, `/heritage/places`, `/heritage/organizations`, `/heritage/statistics` | durapeople.web, duraplaces.map, durapeto-web |
| `/heritage/archive`, `/heritage/policy` | new |
| `/language` | amardura.com.np/duralopa.app, dura-lopa-web link |
| `/search` | new (Pagefind index built after `next build`) |

## How it is built and deployed

- **Pull requests** run `.github/workflows/ci.yml`: typecheck, lint and build.
- **Merging to `main`** runs `.github/workflows/deploy.yml`, which builds and publishes `out/`
  to GitHub Pages. Settings, Pages, Source must be **GitHub Actions**.
- The custom domain comes from `public/CNAME` (it must stay in `public/` so it reaches `out/`).
- Dependabot opens weekly dependency PRs and monthly Actions PRs.
- Dark mode follows the system until a visitor picks one; the choice is stored in the browser.

## Old sites

The old Vercel prototypes (`durastudents-website`, `durapeto-web`, `ddhp`) redirect here with
a temporary (307) redirect set in their own `next.config.ts`. They are separate repos under
`dura-amar`. Keep Next.js current in them: Vercel refuses to deploy versions with known
security problems.

## What is still open

Track everything in the [issues](https://github.com/durastudents/durastudents/issues).
Issues labelled `needs-input` are waiting on the Society or the community (donation details,
a hero photo, verified places and people, statistics sources, an official email, and so on).

Placeholder data from the old Vercel site (sample phone, bank account, team names) was
intentionally not copied.
