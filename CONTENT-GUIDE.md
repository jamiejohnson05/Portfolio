# Content guide

How to fill this site with work that gets you interviews.

---

## Adding a piece

Every entry in `src/content/work.ts` needs six things:

```ts
{
  slug: "peppers-grill-menus",        // becomes /work/peppers-grill-menus
  title: "Pepper's Grill Menu System",
  client: "Pepper's Grill",
  year: "2024",
  categories: ["menus", "brand-creation"],
  cover: { src: "/work/peppers-grill-menus/cover.jpg", alt: "…" },
}
```

That's a complete, working entry. Everything else is optional, and what you add
determines what kind of page it becomes.

### Optional: `summary`

One sentence. It goes on the card, under the title, and in link previews when
someone shares the URL. Write it as tension, not description.

> ✗ "A menu redesign project including print and digital versions."
>
> ✓ "A menu system designed to survive seasonal changes without a designer in
> the loop every quarter."

### Optional: `metrics`

Two or three numbers. They count up when they scroll into view.

```ts
metrics: [
  { value: "214", label: "members enrolled" },
  { value: "38", suffix: "%", label: "of active membership" },
  { prefix: "$", value: "1.2", suffix: "M", label: "annual spend managed" },
]
```

**When you can't share the real number** — and with agency and in-house work
this is constant:

- Use a **relative** figure: "2.4x increase" rather than the revenue. Multipliers
  are rarely confidential.
- Use a number that isn't about money: interviews run, formats produced, weeks
  from brief to launch, percentage of the sales team that adopted it.
- Use **scope**: "9 asset formats", "3 product lines", "24pp".

Never invent one. It's the single mistake a portfolio can't recover from, and
the interview question is always "walk me through how you got that."

### Optional: `sections` — the story

Add this and the piece becomes a full case study. Three headings work best:

**The situation** — how it actually was, including the awkward part.
Specificity is credibility. "They were paying for a redesign four times a year"
beats "the client needed a scalable solution."

**What I did** — your decisions and your reasoning, in order. This is the
section that separates a portfolio from a résumé. Say *why* you chose the
approach. If you changed course mid-project, say so — it reads as judgment.

**What happened** — the result, and optionally one thing you'd do differently.
That last part makes everything above it more believable.

Write in first person. "I" for what you did, "we" for what the team did, and be
honest about which — interviewers probe this.

**Leave `sections` off** for pieces that don't need it. A finisher medal with
three good photographs and a tag list is a complete page. Padding it out with
invented process hurts you.

### Optional: `featured`

Pins it to the homepage as a full-width panel. **Aim for five or six**, spread
across different categories so the range shows immediately. These are the
pieces that need your strongest photography.

---

## Images

### Where they go

```
public/
└── work/
    └── your-project-slug/       ← matches the `slug` exactly
        ├── cover.jpg
        ├── gallery-1.jpg
        └── gallery-2.jpg
```

Referenced from `work.ts` **without** the word `public`:

```ts
cover: { src: "/work/your-project-slug/cover.jpg", alt: "…" }
```

### Sizing

| Use | Dimensions | Notes |
| --- | --- | --- |
| Cover | 2000 × 1250 | Cropped to 21:9 on the piece page and 4:3 on mobile panels — keep the subject centered and leave margin |
| Gallery | 1600 × 1000 or taller | Shown whole in the lightbox, so any shape works |
| Portrait | 800 × 1000 | 4:5 vertical, at `public/images/portrait.jpg` |
| Social card | 1200 × 630 | `public/og-default.jpg` — what shows when the link is shared |

**Keep each file under ~400KB.** Export JPG at about 80%. A portfolio that
takes six seconds to load reads as one built by someone who doesn't sweat
details. Ask Claude to "compress the images in public/work" and it'll handle it.

### Shooting physical work

The medals, menus, look books, calendars and posters are the pieces this layout
was chosen for, and photographs of real objects beat flat artwork every time.

- Natural light, near a window, no flash
- Plain surface — concrete, wood, paper. Not a patterned tablecloth
- Slightly from above, or straight on. Pick one and be consistent
- One object sharp; let the rest fall off
- Shoot more than you need and pick later

A phone is fine. Consistency across the set matters more than any single shot.

### `alt` text

Required on every image. Describe what's in it — "Finisher medal, front face,
antique brass finish", not "medal photo". It's how the site works for anyone
using a screen reader, it's what Google reads, and it's what shows if an image
fails to load.

---

## Categories

The thirteen live in `src/content/categories.ts`, grouped into Design,
Marketing, and Print & Promo. Each has:

- an `id` used in URLs and in every piece's `categories` array — **don't
  change these** once work is filed under them
- a `label` shown on chips and page headings — change freely
- a `blurb`, the sentence at the top of that category's page

A category with no work in it doesn't appear anywhere on the site, so it's safe
to leave one sitting there until you have something for it. A piece can be in
more than one category, and most of yours will be.

To add a fourteenth, add it to `categories.ts` and to the `CategoryId` union in
`src/lib/types.ts`. Or just ask Claude.

---

## What's safe to publish

Work you did for an employer is usually theirs, not yours. Most people show it
anyway and it's fine, but:

- Strip anything marked confidential, and any customer data that wasn't public
- Unsure about a specific piece? Describe the work and show a redacted or
  recreated version rather than the original file
- Never post anything under an active NDA without asking first

A case study with blurred numbers and a sharp story beats a leaked deck.

---

## Tailoring for a specific job

Before a final-round interview: reorder `work.ts` so the most relevant project
is first, and move `featured: true` onto the three or four that match the role.
Push. Send the link. Four minutes, and the site is now built for that company.

Or ask Claude:

> "I'm interviewing at a DTC skincare brand for a brand design role. Reorder my
> work and rewrite the homepage tagline to lead with identity and packaging."

---

## Making it look like you

- **The accent** — `--accent` in `src/app/globals.css`, currently a warm sand.
  Changing it changes kickers, links, buttons, and metric numbers at once.
- **The display face** — Anton, loaded in `src/app/layout.tsx`. Heavy and
  condensed. Less shouty alternatives: Archivo Black, Oswald, Bebas Neue.
  Update `--font-display` in `globals.css` to match.
- **Light instead of dark** — swap `--ground` and `--ink` in `globals.css` and
  lighten `--raised` and `--rule`. Six lines. But the dark ground is doing real
  work for the imagery; try it before you commit to it.

Resist making it flashy. The work is the interesting part; the site's job is to
get out of its way.
