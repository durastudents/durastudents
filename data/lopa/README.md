# Dura Lopa source data

The learner-facing data in this directory was imported unchanged from the
user-selected canonical source:

- Repository: <https://github.com/dura-garage/dura-lopa-web>
- Source revision: `30db92c1d95979f94afbdb10b56b50db2b7f30a8`
- Dictionary: `backend/assets/dictionary.json` — 2,029 entries
- Sentences: `backend/assets/sentences.json` — 80 entries
- Timelines: `frontend/src/assets/json/`
- Book covers and PDFs: `frontend/public/images/books/` and
  `frontend/public/pdfs/books/`

The chosen repository export is the canonical source for this site. It differs
substantially from the legacy live API; do not replace it with a live API
response or merge records by ID without an approved content review.

The dictionary retains missing translations as missing. Do not infer or add
translations, IPA, parts of speech, or spellings without approval from the
language maintainers. Preserve IDs and homonymous entries.

`npm run prepare:lopa-data` validates the dictionary, sentence files and all
three timeline datasets, then copies the dictionary to `public/lopa/data/` for
lazy same-origin browser fetching. The generated public copy is ignored by Git
and recreated by `predev` and `prebuild`.

The source repository is GPL-2.0 licensed. The site reimplements the learner
interface using its own components; the source data and educational materials
are attributed to their repository and owners. Confirm ownership/permission
separately before changing their redistribution terms.
