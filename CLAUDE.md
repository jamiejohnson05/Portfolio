@AGENTS.md

# Jamie's marketing portfolio — notes for Claude

## Who you're working with

Jamie is a marketer applying for brand, growth, and product marketing roles.
She is not a developer. Assume no familiarity with git, npm, TypeScript, or
the terminal beyond what's in `START-HERE.md`.

What this means in practice:

- When she asks for a change, **make it** — don't hand her a diff to apply.
- Explain in terms of what will show up on the site, not what the code does.
- Never leave her at a terminal prompt that needs a decision. Run the command
  or give her the exact line to paste, nothing to fill in.
- If something errors, fix it and tell her what happened in one sentence.

## Architecture — the one thing to understand

All site content lives in `src/content/`. The components in `src/components/`
and pages in `src/app/` are presentation only and should rarely need editing.

| File | Contains |
| --- | --- |
| `src/content/profile.ts` | Name, title, tagline, bio, portrait, email, social links, résumé path, headline stats, experience, skills |
| `src/content/case-studies.ts` | The `caseStudies` array — every project |
| `src/content/testimonials.ts` | Quotes. Empty array hides the section site-wide. |
| `src/content/site.ts` | Site title, nav, canonical URL, discipline labels |
| `src/lib/types.ts` | The shape all of the above must satisfy. Read this before editing content. |

Adding a case study means appending one object to `caseStudies`. A new page at
`/work/<slug>` is generated automatically — no routing to touch.

## Conventions that matter

- **Images** live in `public/work/<slug>/` and are referenced as
  `/work/<slug>/file.jpg` — leading slash, no `public` prefix. Cover images are
  cropped to 16:10. Keep exports under ~400KB.
- **`alt` text is required** on every `Asset`. Describe the content, not the
  filename.
- **Placeholders** are marked `TODO` or `EXAMPLE`. When Jamie supplies real
  content for a section, remove the marker entirely rather than editing around
  it.
- **The accent color** is `--accent` in `src/app/globals.css`, defined twice
  (light and dark). Change both.
- **Fonts** are system stacks by default — see the comment block at the top of
  `src/app/layout.tsx` for the Google Fonts swap.
- **React 19 lint rules are strict.** `setState` called synchronously in a
  `useEffect` body is an error, not a warning. Use `useSyncExternalStore`, an
  event callback, or defer with `requestAnimationFrame`.

## Before telling her something is done

```bash
npm run lint && npm run build
```

Both must pass. `npm run build` catches missing images and broken content
shapes that the dev server tolerates.

If she asks to see it, run `npm run dev` and point her at
http://localhost:3000 rather than describing the change.

## Deployment

`git push` to `main` → Vercel builds and deploys automatically. There is no
other deploy step. Don't suggest the Vercel CLI; it's unnecessary here and
adds an auth flow she doesn't need.

Before pushing, confirm `npm run build` passes locally — a failed Vercel build
is a confusing experience for someone who doesn't read build logs.

## Things she's likely to ask for

- **"Add my [project] as a case study"** — gather the story first (situation,
  what she did, outcome, numbers), then write the object. Ask for the numbers
  explicitly; marketers usually have them but don't volunteer them. If she has
  none she can share, suggest relative figures or scope figures instead of
  leaving `metrics` empty.
- **"Make it match my personal brand"** — start with `--accent`, then the
  display font. Resist adding animation; the restraint is doing work.
- **"Tailor it for this job posting"** — reorder `caseStudies`, adjust
  `featured` flags, rewrite `profile.tagline`. Read the posting first.
- **"Something's broken"** — run `npm run build`, read the error, fix it,
  explain plainly.
