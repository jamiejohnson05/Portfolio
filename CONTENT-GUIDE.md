# Content guide

How to fill this site with work that gets you interviews.

---

## The case study, in four parts

Every entry in `src/content/case-studies.ts` has the same skeleton, and the
skeleton is doing real work. It's the structure hiring managers are already
scanning for.

### 1. The summary (one sentence)

This is the sentence that decides whether they click. It goes on the card in
the grid, in the browser tab, and in link previews when someone shares your
site.

Write it as **tension**, not description.

> ✗ "A rebrand project for a regional supplier including new messaging and
> website copy."
>
> ✓ "A supplier with twelve years of goodwill and no consistent story. We
> found the one idea their customers already believed and built everything
> back from it."

### 2. The metrics (2–4 numbers)

```ts
metrics: [
  { value: "38", suffix: "%", label: "lift in branded search" },
  { prefix: "$", value: "1.2", suffix: "M", label: "annual spend managed" },
  { value: "9", label: "weeks from kickoff to launch" },
]
```

These count up when they scroll into view, which is the single most
"interactive portfolio" thing on the site. Make them count.

**What to do when you can't share the real number** — and this comes up
constantly with agency and in-house work:

- Use a **relative** figure instead of an absolute one: "2.4x increase" rather
  than the revenue itself. Multipliers are rarely confidential.
- Use a number that isn't about money: interviews run, pages shipped, weeks
  from brief to launch, percentage of the sales team that adopted the thing.
- If truly nothing is shareable, use **scope** numbers: "6 markets", "14-person
  cross-functional team", "3 product lines".

Do not invent numbers. It's the one mistake in a portfolio that can't be
recovered from, and the follow-up question in the interview is always
"walk me through how you got that."

### 3. The narrative (three sections)

Keep the headings. They're load-bearing.

**The problem** — the situation as it actually was, including the part that
was awkward. Specificity is credibility. "Nobody had written down what the
company was for" is more convincing than "brand alignment challenges."

**What I did** — your decisions and your reasoning, in order. This is the
section that separates a portfolio from a résumé. Say *why* you chose the
approach, not just what the approach was. If you changed course mid-project,
say so; it reads as judgment, not failure.

**What happened** — results, and one thing you'd do differently. That last
part is optional but it makes everything above it more believable.

Write in first person. Say "I" for what you did and "we" for what the team
did — and be honest about which is which, because interviewers probe this.

### 4. The gallery

Screenshots, ad creative, page designs, slides exported as images. Click to
open full size. Two to five per case study.

Every image needs an `alt` — describe what's in it. It's how the site works
for anyone using a screen reader, and it's also what shows if an image ever
fails to load.

---

## Images

### Where they go

```
public/
└── work/
    └── your-project-slug/     ← must match the `slug` in case-studies.ts
        ├── cover.jpg
        ├── gallery-1.jpg
        └── gallery-2.jpg
```

Then reference them from `case-studies.ts` **without** the word `public`:

```ts
cover: { src: "/work/your-project-slug/cover.jpg", alt: "…" }
```

### Sizing

| Use | Dimensions | Notes |
| --- | --- | --- |
| Cover | 1600 × 1000 | 16:10. Gets cropped to fill — keep the subject centered. |
| Gallery | 1600 × 1000 or taller | Shown whole in the lightbox, so any shape works. |
| Portrait | 800 × 1000 | 4:5 vertical. `public/images/portrait.jpg` |
| Social card | 1200 × 630 | `public/og-default.jpg` — what shows when the link is shared |

**Keep files under ~400KB each.** Export as JPG at around 80% quality. A
portfolio that takes six seconds to load reads as a portfolio built by someone
who doesn't sweat details. (Ask Claude in Cowork to "compress the images in
public/work" and it'll handle this.)

### A note on what you're allowed to post

Work you did for an employer is usually theirs, not yours. In practice most
people show it anyway and it's fine — but:

- Strip anything marked confidential, and any customer names or data that
  weren't public.
- If you're unsure about a specific piece, describe the work and show a
  redacted or recreated version rather than the original asset.
- Never post anything from under an active NDA without asking first.

A case study with blurred numbers and a sharp story beats a leaked deck.

---

## Filters

Each case study lists one or more `disciplines`:

```ts
disciplines: ["brand", "product"]
```

Valid values are `"brand"`, `"growth"`, and `"product"`. These drive the
filter chips on the Work page. A chip only appears if at least one case study
uses it, so if you have no growth work, that filter quietly doesn't exist.

To rename the chips, edit `disciplineLabels` in `src/content/site.ts`.

---

## Tailoring for a specific job

One genuinely useful thing you can do that most candidates don't: before a
final-round interview, reorder `caseStudies` so the most relevant project is
first, and set `featured: true` on the three that match the role. Push. Send
the link. It takes four minutes and the site is now built for that company.

You can go further and ask Claude in Cowork:

> "I'm interviewing at a DTC skincare brand for a growth role. Reorder my case
> studies and rewrite the homepage tagline to lead with performance work."

---

## Making it look like you

The accent color is one line — `--accent` in `src/app/globals.css`. Changing
it changes buttons, links, metric numbers, filter chips, and tags all at once.
There are a few suggestions in the comment above it.

The display typeface is Georgia by default, which is a genuinely handsome
serif and loads instantly. If you want something with more personality, the
comment at the top of `src/app/layout.tsx` walks through swapping in Google
Fonts — or just ask Claude to do it.

Resist the urge to make it flashy. The work is the interesting part; the site's
job is to get out of its way.
