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
npm run check:nepali-fonts  # after a build: fails if Devanagari text lacks lang="ne" or lang="drq"
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
| Archive and gallery items (photos, audio, video, documents) | `data/archive.ts`; add small optimized gallery photos and video posters under `public/gallery/` |
| News posts | `data/news.ts` |
| Dura Lopa app details | `data/lopa.ts` |
| Society resource PDFs | add verified resource metadata in `app/resources/page.tsx` and files under `public/docs/` only after confirming publication permission |

For the editor-mediated news submission and review process, see
[Submitting news and stories](./docs/news-submission.md).

`data/archive.ts` is checked at build time: a wrong identifier, a duplicate, missing
consent or an image without alt text fails the build. To show an approved photograph or
video in `/gallery/`, add a `gallery: true` archive record there. Gallery records must be
public, consented photographs or videos with a caption/description and an image file;
video records also need a playable video file or an external viewing link. Store small optimized images and video
posters in `public/gallery/`, using `/gallery/filename.jpg` as the `src`. Host large
videos elsewhere and use a `link` file for the host's viewing page, or a `video` file
for a direct playable media URL; do not commit large
video files or original masters. Every gallery card links to its archive record.

## Pages

| Route | Replaces |
|---|---|
| `/`, `/about`, `/programs`, `/impact`, `/resources`, `/news`, `/team`, `/donate`, `/contact` | durastudents-website.vercel.app, durastudentssociety.pages.dev, old durastudents.org.np |
| `/programs/quiz` | durastudentssociety.pages.dev/quiz.html |
| `/heritage` | ddhp-mocha.vercel.app |
| `/heritage/people`, `/heritage/places`, `/heritage/organizations`, `/heritage/statistics` | durapeople.web, duraplaces.map, durapeto-web |
| `/heritage/archive`, `/heritage/policy` | new |
| `/language`, `/language/dictionary`, `/language/sentences`, `/language/timelines`, `/language/sources` | amardura.com.np/duralopa.app and the dura-lopa-web web app |
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
