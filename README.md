# durastudents.org.np

One site for the Dura Students Society and the Dura Digital Heritage Project.
Next.js (static export) + Tailwind CSS.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Structure

| Route | Replaces |
|---|---|
| `/`, `/about`, `/programs`, `/impact`, `/resources`, `/news`, `/team`, `/donate`, `/contact` | durastudents-website.vercel.app, durastudentssociety.pages.dev, old durastudents.org.np |
| `/programs/quiz` | durastudentssociety.pages.dev/quiz.html |
| `/heritage` | ddhp-mocha.vercel.app |
| `/heritage/people` | durapeople.web, durapeto-web (People) |
| `/heritage/places` | duraplaces.map, durapeto-web (Residences) |
| `/heritage/organizations`, `/heritage/statistics` | durapeto-web |
| `/language` | amardura.com.np/duralopa.app, dura-lopa-web link |

Site-wide content lives in `data/site.ts`.

## To do before launch

- [x] Real logo in `public/assets/logo.png`.
- [ ] Add a hero photo.
- [ ] Set the official email in `data/site.ts`.
- [ ] Verify and add: history timeline, impact figures, current committee, donation details.
- [ ] Copy PDFs into `public/docs` and list them in `app/resources/page.tsx`.
- [x] Places map (Leaflet + OpenStreetMap) and statistics ported; organization logos added (Dura Sewa Samaj, Students Society).
- [ ] Verify the 6 draft place pins and add real place names (गाउँको नाम, ~75 per the Peto statistics).
- [ ] Cite a source and year for each statistic in `data/statistics.ts`.
- [ ] People: add confirmed, consented entries to `data/people.ts` (sample bios and unnamed photos were deliberately not imported).
- [ ] Supply a Dura Mahila Samaj logo (`public/orgs/`) and update `data/site.ts`.
- [ ] Port quiz rules, sponsors and team members by year.
- [ ] Move the dictionary web app to a subdomain (e.g. `lopa.durastudents.org.np`).
- [ ] Deploy (Cloudflare Pages: build `npm run build`, output `out`) and set up redirects from the old sites.

Placeholder data from the old Vercel site (sample phone, bank account, team names) was intentionally not copied.
