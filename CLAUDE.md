@AGENTS.md

# Jamie Johnson's portfolio — notes for Claude

## Who you're working with

Jamie is a digital marketing specialist and graphic designer with nine years of
experience, applying for marketing and design roles. BA in Studio Art (3D
emphasis). She uses AI-assisted development in her own work, so she isn't
afraid of a terminal — but she is a designer, not an engineer.

In practice:

- When she asks for a change, **make it**. Don't hand her a diff to apply.
- Explain in terms of what appears on the site, not what the code does.
- If something errors, fix it and say what happened in one sentence.
- She has real taste. On visual decisions, offer an opinion and then defer.

## The design direction

**"Full Bleed"**, chosen deliberately from four options. Dark ground, Anton
display type set uppercase, featured projects as alternating full-width panels,
a category index below, and a page per category.

Do not add a light mode, soften the dark palette, or swap the display face to
something safer unless she asks. The commitment is the point. All of it is
token-driven in `src/app/globals.css` if she does ask.

## Architecture

All content lives in `src/content/`. Components and pages are presentation only
and rarely need editing.

| File | Contains |
| --- | --- |
| `src/content/work.ts` | The `work` array — every project |
| `src/content/categories.ts` | The 13 categories, their groups and blurbs |
| `src/content/profile.ts` | Bio, experience, education, skills, contact, headline stats |
| `src/content/testimonials.ts` | Quotes. Empty array hides the section site-wide. |
| `src/content/site.ts` | Title, nav, canonical URL |
| `src/lib/types.ts` | The shape all of the above must satisfy. Read before editing content. |

Adding a piece means appending one object to `work`. `/work/<slug>` and the
relevant `/category/<id>` pages generate themselves.

### The two shapes of a piece — important

A `Piece` with no `sections` renders as an object page: hero image, facts,
gallery, tags. A `Piece` **with** `sections` renders as a full case study.

When she adds a medal, a poster, a calendar, a menu — don't invent a process
narrative for it. Ask whether there's a story worth telling; if there isn't,
leave `sections` off. Fabricated case-study prose is worse than no prose,
because interviewers ask about it.

## Conventions that matter

- **Images** live in `public/work/<slug>/`, referenced as `/work/<slug>/x.jpg`
  — leading slash, no `public` prefix. Covers are 2000×1250 and get cropped to
  21:9 and 4:3, so keep subjects centered. Under ~400KB each.
- **`alt` is required** on every `Asset`. Describe the content.
- **Placeholders** are marked `TODO` or `EXAMPLE`. When she supplies real
  content, remove the marker rather than editing around it.
- **Featured pieces** should number five or six, across different categories.
  More than that and the homepage stops being a selection.
- **Adding a category** means editing both `categories.ts` and the `CategoryId`
  union in `src/lib/types.ts`.
- **Fonts** load via `<link>` in `src/app/layout.tsx`, not `next/font`, so the
  build works on any network. If you switch to `next/font/google`, verify the
  build still passes.
- **React 19 lint rules are strict.** `setState` called synchronously in a
  `useEffect` body is an error, not a warning. Use `useSyncExternalStore`, an
  event callback, or defer with `requestAnimationFrame`.

## Before telling her something is done

```bash
npm run lint && npm run build
```

Both must pass. `npm run build` catches missing images and malformed content
that the dev server tolerates.

If she asks to see it, run `npm run dev` and point her at
http://localhost:3000 rather than describing the change.

## Deployment

`git push` to `main` → Vercel builds and deploys. There is no other step.
Don't suggest the Vercel CLI; it adds an auth flow she doesn't need.

Confirm `npm run build` passes locally before pushing — a failed Vercel build
is a confusing experience for someone who doesn't read build logs.

## Things she's likely to ask for

- **"Add [project]"** — get the facts first: client, year, categories, what it
  was, and any numbers she can share. Then decide with her whether it needs
  `sections`. Ask for images or offer to work with what's in the folder.
- **"Make the photos better"** — you can crop, compress, and adjust. You can't
  reshoot. If the source image is weak, say so and suggest moving the piece out
  of `featured` rather than quietly shipping it full-width.
- **"Tailor it for this job"** — read the posting, then reorder `work`, adjust
  `featured`, and rewrite `profile.tagline`.
- **"Change the colors"** — `--accent` in `globals.css` first. Show her, don't
  describe it.
- **"Something's broken"** — `npm run build`, read the error, fix it, explain
  plainly.
