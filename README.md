# Jamie Johnson — Portfolio

Brand, campaign, print, and digital work across thirteen disciplines.
Next.js 16, React 19, Tailwind CSS v4, TypeScript. Deployed on Vercel,
auto-deploying from `main`.

**→ [JAMIE-SETUP.md](./JAMIE-SETUP.md)** — installing everything, first time.
**→ [START-HERE.md](./START-HERE.md)** — once it's running, what to edit.

---

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
```

## Editing content

All copy and projects live in `src/content/`:

- `work.ts` — every project
- `categories.ts` — the thirteen disciplines
- `profile.ts` — bio, experience, education, skills, contact
- `testimonials.ts` — quotes (empty array hides the section)
- `site.ts` — title, nav, canonical URL

See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for how to write a piece, image
specs, and what's safe to publish from past clients.

## Design direction

"Full Bleed" — dark ground, Anton display type, featured projects as
alternating full-width panels, a page per category. Tokens live at the top of
`src/app/globals.css`.

## Features

- Two page shapes per piece: object page, or full case study — set by whether
  `sections` is present
- Filterable archive grouped by Design / Marketing / Print & Promo
- A static page per category, generated from the work in it
- Headline metrics that count up on scroll, SSR-correct without JavaScript
- Full-screen lightbox with keyboard navigation
- Every page pre-rendered as static HTML
- Responsive to 375px, reduced-motion aware, keyboard navigable

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build — run before pushing |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |

## Deploying

Push to `main`. Vercel handles the rest. See [SETUP.md](./SETUP.md).
