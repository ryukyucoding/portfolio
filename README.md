# Hsuan-Yu Liu — Personal Portfolio

A rebuild of the original HW1 static site (hand-written HTML/CSS/TS) as a
data-driven React + Vite app, ready to deploy to any static host.

Same visual language as the original: fixed photographic backdrop with a
scroll-reactive purple wash, orchid accent (`#da70d6`), glassmorphic cards,
numbered sections, and the two fixed side rails.

## Stack

| Concern    | Choice                                        |
| ---------- | --------------------------------------------- |
| Framework  | React 19 + TypeScript                         |
| Build      | Vite                                          |
| Styling    | Plain CSS with custom-property design tokens  |
| UI icons   | Inline SVG (`src/components/ui/Icon.tsx`)     |
| Tech logos | Generated from `simple-icons` at author time  |
| Font       | Inter via Google Fonts                        |

No CSS framework, no icon-font CDN, no animation library. Production bundle is
~77 kB JS / ~4.5 kB CSS gzipped.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
npm run lint
```

## Editing content

All copy and data live in `src/data/` — nothing in the components needs
touching to change what the site says.

| File                   | Controls                                                    |
| ---------------------- | ----------------------------------------------------------- |
| `data/profile.ts`      | Name, tagline, email, socials, nav items, Education, About, Contact |
| `data/experience.ts`   | Work & research tabs (role, org, period, photo, highlights, stack) |
| `data/projects.ts`     | Project cards (title, stack, period, summary, image, links) |
| `data/leadership.ts`   | Timeline entries (icon, period, description, gallery)       |
| `data/skills.ts`       | Skill groups and their logos                                |

Adding a project is one entry in `PROJECTS`; adding a timeline milestone is one
entry in `TIMELINE`. The timeline lays itself out from the array — unlike the
original, which hard-coded each dot's position as a percentage.

In About paragraphs, wrap a phrase in `[[double brackets]]` to render it in the
accent colour.

Images go in `public/media/`; reference them by absolute path (`/media/...`).
Timeline galleries and the Experience photo panel letterbox each image onto a
blurred copy of itself, so a set can mix portrait phone screenshots with
landscape photos without cropping either.
A project with no `image` gets a generated gradient cover — drop a screenshot in
`public/media/projects/` and set `image` to replace it. `imagePosition` overrides
the crop anchor (defaults to `top center`, which suits page screenshots; use
`center` when the subject sits in the middle of the frame), and
`imageFit: 'contain'` shows artwork whole instead of cropping it — use it for
title cards and logos whose edges must not be cut.

### Section order

`Hero → 01 About (+ Education) → 02 Experience → 03 Projects → 04 Leadership
→ 05 Skills → 06 Contact`

Adding or reordering a section means editing `NAV_ITEMS` in `data/profile.ts`,
the render order in `App.tsx`, and the `number` prop on that section's heading.

### Tech logos

`public/media/tech/*.svg` is generated — do not hand-edit it.

```bash
npm run icons   # regenerates every logo from scripts/build-tech-icons.mjs
```

Add a row to the `ICONS` table in that script (looked up by simple-icons title),
or to `WORDMARKS` for things simple-icons does not carry (AWS marks, C#, SQL).
Brand colours that are too dark to read on the backdrop get an explicit
override in the same table.

## Deploying

The build output is fully static.

**Vercel** — `vercel.json` is committed with build settings, cache headers, and
a strict CSP.

```bash
npx vercel deploy --prod
```

**Netlify** — `netlify.toml` carries the same configuration.

```bash
npx netlify deploy --prod
```

**Anything else** — run `npm run build` and serve `dist/`. For a host served
from a subpath (e.g. GitHub Pages project sites), set `base` in
`vite.config.ts` to `/<repo-name>/` first.

## Notes on the original

- Media was re-encoded to WebP and the PDFs re-compressed: **158 MB → ~6 MB**,
  with no visible quality loss at the sizes the site renders them.
- Font Awesome's CDN stylesheet was replaced with an inline SVG icon set.
- The timeline, the project rail and the galleries are keyboard-operable, and
  the whole site honours `prefers-reduced-motion`.
- Fixed a typo carried over from the original: "Conputer Vision" → "Computer Vision".
- The horizontal hover-popover timeline was replaced with a vertical
  alternating one: cards are always visible, so nothing clips, nothing needs
  reserved space, and it works the same on touch and with a keyboard.
  `hooks/useTimelineLayout.ts` packs the two columns independently (a tall card
  on one side no longer forces a gap on the other) while keeping each milestone
  below the previous one, so the order still reads top-down. DOM order is the
  source of truth (newest first, like `EXPERIENCE`) — only grid placement is
  computed.
- The résumé's phone number is deliberately not published anywhere on the site.
