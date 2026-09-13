# Jamie Johnson — Marketing Portfolio

An interactive portfolio site for brand, growth, and product marketing work.
Built with Next.js 16, React 19, Tailwind CSS v4, and TypeScript. Deployed on
Vercel, auto-deploying from `main`.

**→ [START-HERE.md](./START-HERE.md) — read this first.**

---

## Quick start

```bash
npm install
npm run dev     # http://localhost:3000
```

## Editing content

All copy, projects, and links live in `src/content/`. Nothing else normally
needs touching.

- `profile.ts` — you: bio, experience, skills, contact
- `case-studies.ts` — the work
- `testimonials.ts` — quotes (empty array hides the section)
- `site.ts` — title, nav, canonical URL

See [CONTENT-GUIDE.md](./CONTENT-GUIDE.md) for how to write a case study, image
sizing, and what's safe to publish from past employers.

## Features

- Case study pages generated from data — add an object, get a page
- Filterable work grid by discipline (brand / growth / product)
- Headline metrics that count up on scroll
- Full-screen image lightbox with keyboard navigation
- Light and dark themes, following the visitor's system setting
- Fully static output — every page pre-rendered at build time
- Responsive down to 375px, reduced-motion aware, keyboard navigable

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build — run this before pushing |
| `npm run start` | Serve the production build locally |
| `npm run lint` | ESLint |

## Deploying

Push to `main`. Vercel handles the rest. See [SETUP.md](./SETUP.md).
