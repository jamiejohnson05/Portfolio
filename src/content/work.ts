import type { Piece } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR WORK.
 *
 *  Every entry below is an EXAMPLE using real client names from
 *  your résumé and invented project details. They're here to show
 *  the two shapes a piece can take. Replace them one at a time.
 *
 *  ── The two shapes ──
 *
 *  1. AN OBJECT. A medal, a poster, a calendar. Great photo,
 *     good caption, done. No `sections` — the page renders as
 *     images with a short description. See `hyrox-finisher-medal`.
 *
 *  2. A CASE STUDY. A rebrand, a campaign, a launch plan. Add
 *     `sections` and it renders the full story: situation, what
 *     you did, what happened. See `nyx-ai-identity`.
 *
 *  Both live in the same grid and filter the same way. Don't force
 *  a story onto a piece that doesn't need one — an invented
 *  narrative reads as an invented narrative.
 *
 *  ── Practical notes ──
 *
 *  • Images go in `public/work/<slug>/`. See CONTENT-GUIDE.md.
 *  • Order matters: this array is the order work appears.
 *  • `featured: true` pins it to the homepage. Aim for 5–6, spread
 *    across different categories.
 *  • Category ids come from src/content/categories.ts.
 * ─────────────────────────────────────────────────────────────
 */

export const work: Piece[] = [
  // ── An object. No story needed. ────────────────────────────
  {
    slug: "hyrox-finisher-medal",
    title: "Hyrox Finisher Medal",
    client: "EXAMPLE — Cerus Fitness",
    year: "2025",
    categories: ["medal-design"],
    featured: true,
    summary:
      "EXAMPLE — Finisher medal, ribbon, and presentation case for an affiliate race launch.",
    role: "Designer",
    cover: {
      src: "/work/hyrox-finisher-medal/cover.jpg",
      alt: "EXAMPLE — Finisher medal, front face, antique brass finish",
    },
    gallery: [
      {
        src: "/work/hyrox-finisher-medal/gallery-1.jpg",
        alt: "EXAMPLE — Medal reverse with event details",
        caption: "Reverse, with the year and distance struck rather than printed.",
      },
      {
        src: "/work/hyrox-finisher-medal/gallery-2.jpg",
        alt: "EXAMPLE — Ribbon options in three colorways",
        caption: "Three ribbon colorways presented to the client.",
      },
    ],
    tags: ["Concept", "Vector artwork", "Vendor production files", "Ribbon design"],
  },

  // ── A full case study. ─────────────────────────────────────
  {
    slug: "nyx-ai-identity",
    title: "An identity for a company that didn't exist yet",
    client: "EXAMPLE — NYX.AI",
    year: "2024 – 2025",
    categories: ["brand-creation", "logo-design", "pitch-decks"],
    featured: true,
    summary:
      "EXAMPLE — Logo system, brand foundations, and the investor materials that carried the first raise — built to survive a product that was still moving.",
    role: "Brand Designer",
    cover: {
      src: "/work/nyx-ai-identity/cover.jpg",
      alt: "EXAMPLE — NYX.AI wordmark and symbol across dark and light applications",
    },
    metrics: [
      { value: "3", label: "logo directions presented" },
      { value: "12", label: "stakeholder-ready templates delivered" },
      { value: "6", label: "weeks, brief to handoff" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "EXAMPLE — The product was pre-launch and still changing weekly. Anything I designed around a specific feature would be wrong within a month, and the founders needed materials for investor conversations that were already scheduled.",
          "So the brief wasn't really 'design a logo.' It was: build something that can stand for a company whose product hasn't settled yet.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "EXAMPLE — I started with the founders rather than the product — two long conversations about what they believed that their competitors didn't. The mark came out of that, not out of a moodboard.",
          "Three directions, each with a different argument attached. We went with the one that was least literal, on the theory that it would age better as the product moved.",
          "Then the unglamorous half: a palette that works on dark and light, type rules, and twelve templates — deck, one-pager, email header, social — so the founders could produce their own materials without coming back to me every week.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "EXAMPLE — The identity carried the first raise and, more usefully, it's still in use two product pivots later. The templates are the part they mention.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/nyx-ai-identity/gallery-1.jpg",
        alt: "EXAMPLE — The three logo directions presented",
        caption: "Three directions. The one on the right was least literal, and won.",
      },
      {
        src: "/work/nyx-ai-identity/gallery-2.jpg",
        alt: "EXAMPLE — Brand foundations: palette, type scale, spacing",
        caption: "Foundations — the part that makes the templates possible.",
      },
    ],
    tags: ["Logo system", "Brand foundations", "Templates", "Illustrator", "Figma"],
  },

  // ── A campaign: story plus a lot of surfaces. ──────────────
  {
    slug: "cerus-spring-challenge",
    title: "Six weeks, one message, every surface",
    client: "EXAMPLE — Cerus Fitness",
    year: "2025",
    categories: ["campaigns", "posters", "banners", "web-design"],
    featured: true,
    summary:
      "EXAMPLE — A six-week member challenge that ran across paid social, email, in-gym print, and a landing page built to convert walk-ins.",
    role: "Campaign Design & Execution",
    cover: {
      src: "/work/cerus-spring-challenge/cover.jpg",
      alt: "EXAMPLE — Spring Challenge campaign assets across print and digital",
    },
    metrics: [
      { value: "214", label: "members enrolled" },
      { value: "38", suffix: "%", label: "of active membership" },
      { value: "9", label: "asset formats produced" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "EXAMPLE — Spring is the dead zone between New Year's resolutions and summer. Attendance sags, and the usual fix — a discount — trains people to wait for discounts.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "EXAMPLE — Built the whole thing around one idea that didn't involve price: a six-week challenge people signed up for in pairs, so quitting meant letting someone down.",
          "One visual system, nine formats: paid social in three ratios, two email templates built in HTML, in-gym repeater banners, a poster series, entry forms, and a landing page. The constraint I set was that any member should recognize it as the same campaign whether they saw it on Instagram or on the wall by the squat racks.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "EXAMPLE — 214 members enrolled, about 38% of the active base, with no discount attached. The pairs mechanic is the part I'd reuse.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/cerus-spring-challenge/gallery-1.jpg",
        alt: "EXAMPLE — Paid social set in three aspect ratios",
      },
      {
        src: "/work/cerus-spring-challenge/gallery-2.jpg",
        alt: "EXAMPLE — In-gym repeater banners installed",
        caption: "Repeater banners — the format that did the most work.",
      },
    ],
    tags: ["Paid social", "HTML email", "Large format", "Landing page", "Photography"],
  },

  // ── Strategy work. Story-led, light on imagery. ────────────
  {
    slug: "hyrox-affiliate-launch",
    title: "Launching a gym into a global race format",
    client: "EXAMPLE — Cerus Fitness",
    year: "2025",
    categories: ["go-to-market", "campaigns", "presentations"],
    featured: true,
    summary:
      "EXAMPLE — The go-to-market plan for becoming a Hyrox affiliate: positioning, sequencing, channel mix, and the materials each phase needed.",
    role: "Go-to-Market Planning & Design",
    cover: {
      src: "/work/hyrox-affiliate-launch/cover.jpg",
      alt: "EXAMPLE — Launch plan phases and supporting materials",
    },
    metrics: [
      { value: "3", label: "launch phases" },
      { value: "11", label: "weeks from decision to first event" },
    ],
    sections: [
      {
        heading: "The situation",
        body: [
          "EXAMPLE — Affiliating with a race format means inheriting an audience that already has opinions. The risk wasn't that nobody would come — it was that the existing members would feel the gym had been taken over by something that wasn't for them.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "EXAMPLE — Wrote the plan in three phases, deliberately slow: tell existing members first and give them a head start, then open to the local community, then market outward to the regional race circuit.",
          "Each phase got its own materials and its own message. Phase one was email and in-gym only — no social — specifically so members found out from us rather than from an ad.",
          "I also built the partner deck used to bring in two local sponsors, which covered the equipment cost.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "EXAMPLE — First event sold out. More to the point, member churn didn't move, which was the number I was actually watching.",
        ],
      },
    ],
    tags: ["Positioning", "Launch sequencing", "Partner deck", "Email", "Sponsorship"],
  },

  // ── An object with light context. ──────────────────────────
  {
    slug: "peppers-grill-menus",
    title: "Pepper's Grill Menu System",
    client: "EXAMPLE — Pepper's Grill",
    year: "2023 – 2024",
    categories: ["menus", "brand-creation", "promotional"],
    featured: true,
    summary:
      "EXAMPLE — A menu system designed to survive seasonal changes without a designer in the loop every quarter.",
    role: "Designer",
    cover: {
      src: "/work/peppers-grill-menus/cover.jpg",
      alt: "EXAMPLE — Dinner, brunch, and bar menus laid out together",
    },
    sections: [
      {
        heading: "The ask",
        body: [
          "EXAMPLE — They were paying for a redesign every time the menu changed, which was four times a year. The actual deliverable wasn't a menu — it was a system they could update themselves.",
          "Built a grid that handles anywhere from 14 to 30 items without looking sparse or crowded, plus a locked template and a one-page guide on what not to touch.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/peppers-grill-menus/gallery-1.jpg",
        alt: "EXAMPLE — Menu grid at 14 items and at 30 items",
        caption: "The same grid at its two extremes.",
      },
    ],
    tags: ["Print", "Template system", "Typography", "InDesign"],
  },

  // ── Web. ───────────────────────────────────────────────────
  {
    slug: "cerus-site-redesign",
    title: "Cerus Fitness Site Redesign",
    client: "EXAMPLE — Cerus Fitness",
    year: "2024",
    categories: ["web-design", "brand-creation"],
    summary:
      "EXAMPLE — Designed and built, using AI-assisted development to take it from layout to a working responsive site.",
    role: "Design & Build",
    cover: {
      src: "/work/cerus-site-redesign/cover.jpg",
      alt: "EXAMPLE — Cerus Fitness homepage on desktop and mobile",
    },
    metrics: [
      { value: "2.8", suffix: "x", label: "increase in trial signups" },
      { value: "41", suffix: "%", label: "drop in mobile bounce rate" },
    ],
    sections: [
      {
        heading: "What I did",
        body: [
          "EXAMPLE — The old site buried the one thing people came for — the schedule — three clicks deep. I rebuilt around it: schedule first, trial signup always visible, everything else secondary.",
          "Designed it and built it, writing the front end with AI-assisted development rather than handing comps to a developer. That's become how I work: it collapses the gap between what I design and what actually ships.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/cerus-site-redesign/gallery-1.jpg",
        alt: "EXAMPLE — Mobile screens: schedule, trial signup, class detail",
      },
    ],
    tags: ["Responsive design", "AI-assisted development", "HTML/CSS", "Figma"],
    externalUrl: { label: "Visit the site", href: "https://example.com" },
  },

  // ── Deck work. ─────────────────────────────────────────────
  {
    slug: "nyx-investor-deck",
    title: "NYX.AI Investor Deck",
    client: "EXAMPLE — NYX.AI",
    year: "2025",
    categories: ["pitch-decks", "presentations"],
    summary:
      "EXAMPLE — Eighteen slides carrying a raise, built from the narrative outward rather than the template inward.",
    role: "Designer",
    cover: {
      src: "/work/nyx-investor-deck/cover.jpg",
      alt: "EXAMPLE — Investor deck cover and key slides",
    },
    gallery: [
      {
        src: "/work/nyx-investor-deck/gallery-1.jpg",
        alt: "EXAMPLE — Market and traction slides",
        caption: "The two slides that got the most questions, so they got the most work.",
      },
    ],
    tags: ["Narrative", "Data visualization", "Figma", "PowerPoint"],
  },

  // ── Client-material transformation. ────────────────────────
  {
    slug: "versa-case-study-series",
    title: "Versa Marketing Case Study Series",
    client: "EXAMPLE — Versa Marketing",
    year: "2022 – 2024",
    categories: ["presentations", "brand-creation"],
    summary:
      "EXAMPLE — Client-provided content turned into a brand-aligned case study format, repeated across a dozen engagements.",
    role: "Designer",
    cover: {
      src: "/work/versa-case-study-series/cover.jpg",
      alt: "EXAMPLE — Case study spreads from the series",
    },
    tags: ["Editorial layout", "Template system", "Executive summaries"],
  },

  // ── Pure objects. ──────────────────────────────────────────
  {
    slug: "peppers-summer-lookbook",
    title: "Summer Look Book",
    client: "EXAMPLE — Pepper's Grill",
    year: "2024",
    categories: ["look-books", "promotional"],
    summary: "EXAMPLE — A 24-page seasonal book: food photography, menu, and the room.",
    role: "Design & Art Direction",
    cover: {
      src: "/work/peppers-summer-lookbook/cover.jpg",
      alt: "EXAMPLE — Look book cover and interior spreads",
    },
    gallery: [
      {
        src: "/work/peppers-summer-lookbook/gallery-1.jpg",
        alt: "EXAMPLE — Interior spreads",
      },
    ],
    tags: ["Art direction", "Photography", "Print production"],
  },
  {
    slug: "cerus-2026-calendar",
    title: "2026 Member Calendar",
    client: "EXAMPLE — Cerus Fitness",
    year: "2025",
    categories: ["calendars", "promotional"],
    summary:
      "EXAMPLE — A wall calendar members actually kept, built around the race season rather than the months.",
    role: "Designer",
    cover: {
      src: "/work/cerus-2026-calendar/cover.jpg",
      alt: "EXAMPLE — 2026 wall calendar, cover and a month spread",
    },
    tags: ["Print", "Photography", "Grid design"],
  },
];

/* ── Helpers. No need to edit below here. ───────────────────── */

export const featuredWork = work.filter((p) => p.featured);

export function getPiece(slug: string) {
  return work.find((p) => p.slug === slug);
}

export function workInCategory(id: string) {
  return work.filter((p) => (p.categories as string[]).includes(id));
}

/** Category ids that actually have work in them, in categories.ts order. */
export function activeCategoryIds(): string[] {
  const present = new Set<string>();
  work.forEach((p) => p.categories.forEach((c) => present.add(c)));
  return Array.from(present);
}
