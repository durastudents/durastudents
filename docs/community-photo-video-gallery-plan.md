# Community photo and video gallery plan

## Purpose

Give visitors a welcoming, human view of Dura Students Society: the people,
gatherings, learning, and everyday community connections behind the
organization's work. Photos and videos should tell a little story and invite
people to learn more, rather than appear as an uncaptioned media dump.

This is a proposal for review, not approval to publish any particular media.

## Implementation status

The first version is implemented: `/gallery/` and the homepage preview render
approved, public archive records marked `gallery: true`, with each card linking
to its archive detail page. Gallery metadata is maintained in `data/archive.ts`.
Small, optimized images and video posters go under `public/gallery/`; large
videos should be hosted externally and recorded as an external viewing link in
the archive record (or as a direct playable media URL if approved). Four
photographs from two Dura Students Society YouTube community posts and two
additional photographs from the legacy Dura Lopa website have been added after
the Society confirmed reuse and consent for these selected photos.

The Society should still confirm the designated reviewers, policy approval,
video host, and caption-language decisions below before publishing media.

## Recommended experience

- Add a dedicated `/gallery/` page for a curated selection of public
  photographs and videos.
- Add a small "Community moments" preview to the homepage, with a clear link
  to the full gallery. Keep the existing hero image and its caption.
- Add Gallery to the main and mobile navigation so visitors can find it.
- Make each gallery item link to its existing archive record at
  `/heritage/archive/<id>/`. The gallery is the visual, story-led entry point;
  the archive remains the source for fuller descriptions, provenance, rights,
  access, and verification details.
- Start with a modest, carefully selected set of approved items. Include
  different generations and kinds of community activity where the Society has
  suitable material; do not imply that one event or image represents everyone.

## Content and safeguards

1. Invite photographs and short videos from Society members and community
   contributors, together with a caption, approximate date and place (if
   known), creator/source, and the intended credit.
2. Confirm the contributor's rights to share the material and obtain specific
   permission for website publication. Confirm permission from identifiable
   people shown or recorded, or the appropriate family representative where
   applicable. Keep consent records private.
3. Ask the relevant people and community reviewers whether the material is
   suitable for public access. Exclude or restrict ceremonial, sensitive,
   private, or otherwise unsuitable material; use the more restrictive access
   level when uncertain.
4. Verify names, spellings, dates, places, and context with the contributor or
   Society editor. Do not infer identities or event details from an image.
5. Write a concise caption that explains what is happening and why the moment
   matters, without disclosing private information. Credit the source as agreed.
   Provide useful alt text for images; do not use alt text as a substitute for
   a caption or identify people without permission.
6. Provide accurate captions/subtitles or a transcript for spoken video where
   available. Do not publish a video with audio or cultural content that has
   not been reviewed for public sharing.
7. Offer a visible route to request a correction, restriction, or removal,
   using the existing archive item identifier and contact process.

## Implementation approach

- Reuse `data/archive.ts` as the single source of truth. Gallery entries must
  be `Public`, consented archive records and should have complete source,
  rights, and descriptive metadata. Do not create a second gallery-only list
  with duplicated captions or assets.
- `/gallery/` is a statically rendered Next.js page. Add `gallery: true` to
  an eligible archive record to include it; every card links to its archive
  detail page. A poster image represents each video in the gallery grid.
- Reuse existing site styles and accessible semantic markup. Ensure images
  have descriptive alt text, cards have clear link names, and the layout works
  by keyboard and on small screens. Avoid autoplay, sound-on-load, and
  inaccessible hover-only controls.
- Use appropriately sized web images and thumbnails. Keep original master
  files in at least two places outside the repository. The repository already
  advises against committing large audio/video files; host large video
  externally and record its URL in the archive. Confirm an approved host,
  embedding/privacy approach, and poster-image workflow before implementing
  video playback. Until then, provide a poster and a clearly labeled external
  viewing link rather than loading a third-party player automatically.
- Keep the gallery usable with no published media: show an honest, welcoming
  empty state and a contact link rather than placeholder images.
- Keep the existing detailed archive page and its access controls intact.
  Community, Restricted, and Archival items must never appear in the public
  gallery or homepage preview.

## Delivery phases

### Phase 1: Community decisions and pilot content

- Agree who reviews submissions and who can authorize publication.
- Confirm consent, credit, correction/removal, and sensitive-content review
  steps with the Society and relevant community reviewers. The existing
  rights-and-consent page is marked as a draft, so confirm or update the
  applicable policy before public launch.
- Choose an approved video host and decide whether the first release links out
  or offers click-to-load embeds.
- Select a small pilot set and complete metadata, image descriptions,
  captions, rights, and consent checks before adding it to the public archive.

### Phase 2: Gallery experience

- Implement the static `/gallery/` page using public archive records.
- Add the homepage preview and navigation links.
- Include photographs and videos only when each has a suitable thumbnail,
  caption, credit, and archive detail record.
- Review the experience with Society editors and community representatives on
  mobile and desktop before release.

### Phase 3: Ongoing publishing and improvement

- Document the gallery submission and review workflow alongside the existing
  editor-mediated news process.
- Add approved materials through normal code review and deployment. Recheck
  permissions and accessibility when media, captions, or hosting links change.
- Gather feedback from visitors and contributors before adding filters,
  collections, or more elaborate playback features.

## Acceptance checks

- Only consented, rights-reviewed, `Public` archive items appear in the gallery
  and homepage preview.
- Each item has a meaningful caption, source/credit, image alt text or video
  poster, and a link to its archive record.
- Video does not autoplay or contact an external player before visitor action.
- The gallery remains navigable by keyboard, responsive on mobile, and
  understandable when no public items are available.
- The static site build succeeds, and the gallery links and media paths work
  in the built export.
- The archive and rights-and-consent information remain available from the
  gallery.

## Decisions to confirm before implementation

- Who is the designated editor and community reviewer for gallery submissions?
- Which video host is acceptable, and should the first release link out or
  support click-to-load playback?
- Which language(s) should captions use? Add Dura or Nepali captions where
  reviewed translations are available; do not publish unverified translations.
- Should the gallery initially be curated by the editor or displayed
  chronologically? The recommendation is an editor-curated pilot, then
  chronological ordering once dates are consistently verified.
