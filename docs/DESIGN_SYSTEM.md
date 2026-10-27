# Design system — Dura Students Society

Produced with the [UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill)
workflow (`--design-system`, dials: variance 4, motion 3, density 3) and then adapted by hand.

## What was taken from the skill, and what was not

| Skill output | Decision |
|---|---|
| Style: Minimalism & Swiss (museum/gallery query) | **Adopted**: spacious, grid-based, high contrast, restrained motion |
| Palette: black/white "gallery" and indigo "learning" | **Not adopted**: the Society's green identity and logo stay. Tokens are semantic, so the palette can change in `app/globals.css` only |
| Typography: Inter / Playfair Display | **Partly adopted**: Playfair Display for Latin h1/h2. Body stays on the system sans stack. Devanagari keeps Tiro Devanagari Hindi (reading) and Teko (display) |
| Landing patterns (testimonials / storytelling) | **Not adopted**: the home page keeps its existing content order |
| Pre-delivery checklist and UX rules | **Applied**, see below |

## Tokens (`app/globals.css`)

- Colour: `--bg --fg --muted --card --line --accent --accent-soft --ring`, light and dark. Text accent is 6.3:1 (light) and 6.6:1 (dark).
- Radius: `--radius-card`, `--radius-control`. Shadow: `--shadow-soft`, `--shadow-lift`.
- Motion: one easing curve, `--ease-out-soft`; 160–300 ms for interaction, 600 ms for the page-load reveal.
- Layout: `--header-h` drives `scroll-padding-top`, so focused elements and `#anchors` are never hidden behind the sticky header.

## Component classes

`.card`, `.card-interactive`, `.btn`, `.btn-primary`, `.btn-ghost`, `.eyebrow`, `.text-link`, `.nav-link`, `.footer-link`, `.section-band`, `.reveal`.

## Rules applied (from the skill's priority list)

1. **Accessibility**: 2px focus ring in both themes, `aria-current="page"` on the active nav item, skip link kept, headings stay in order, decorative shapes are `aria-hidden`.
2. **Touch**: every button and nav link is at least 44px tall.
3. **Motion**: the reveal animation leaves content in its final state by default and is disabled under `prefers-reduced-motion`; transitions are shortened to near zero.
4. **Navigation**: the desktop nav appears from `lg` (8 links no longer crowd tablets); the mobile menu closes on Escape, outside click and route change, and returns focus to its button.
5. **Typography**: `text-wrap: balance` on headings and `pretty` on paragraphs; Devanagari letter-spacing is reset.
6. **No emoji icons**: inline SVG only. Meaning is never carried by colour alone.

## Checks before merging

- [ ] 375, 768, 1024 and 1440px: no horizontal scroll, header fits at 375px
- [ ] Light and dark theme on every page
- [ ] Nepali interface (नेपाली) on the home page and one heritage page
- [ ] Keyboard: tab through header, menu (Escape closes it), and a card grid
- [ ] `npm run check:nepali-fonts` after a build
