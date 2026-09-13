import type { CaseStudy } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  YOUR WORK.
 *
 *  The three entries below are WORKED EXAMPLES, not real projects.
 *  They are here so you can see the shape of a strong case study
 *  before you write your own. Replace them one at a time.
 *
 *  Rules of thumb that hiring managers respond to:
 *    • Situation → what you did → what happened. In that order.
 *    • Numbers in the `metrics` array, story in `sections`.
 *    • If you can't share a number, share a decision and its reasoning.
 *    • Three excellent case studies beat eight thin ones.
 *
 *  Images go in `public/work/<slug>/`. See CONTENT-GUIDE.md.
 * ─────────────────────────────────────────────────────────────
 */

export const caseStudies: CaseStudy[] = [
  // ───────────────────────── EXAMPLE 1 — brand ─────────────────────────
  {
    slug: "northwind-rebrand",
    title: "Rebuilding a 12-year-old brand around one idea",
    client: "EXAMPLE — Northwind Supply Co.",
    role: "Brand & Content Lead",
    timeframe: "2025",
    disciplines: ["brand", "product"],
    featured: true,
    summary:
      "EXAMPLE — A regional supplier with twelve years of goodwill and no consistent story. We found the one idea their customers already believed, and built everything back from it.",
    cover: {
      src: "/work/northwind-rebrand/cover.jpg",
      alt: "EXAMPLE — Northwind brand system laid out across print and digital",
    },
    metrics: [
      { value: "38", suffix: "%", label: "lift in branded search" },
      { value: "2.4", suffix: "x", label: "increase in inbound demos" },
      { value: "9", label: "weeks from kickoff to launch" },
    ],
    tags: ["Brand strategy", "Messaging", "Copywriting", "Design direction"],
    sections: [
      {
        heading: "The problem",
        body: [
          "EXAMPLE — Northwind had been saying seven different things in six different places. The website talked about selection, the sales deck talked about price, and the people who actually loved them talked about neither — they talked about how fast someone picked up the phone.",
          "The gap wasn't a design problem. It was that nobody had written down what the company was actually for.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "EXAMPLE — I ran nineteen customer interviews and read two years of support tickets looking for the words customers used when nobody was selling to them. The same phrase kept surfacing: 'they answer.'",
          "From there I wrote a positioning statement, a messaging hierarchy, and a voice guide, then rewrote the site, the sales deck, and the onboarding emails against it. I briefed and directed the design partner rather than handing off a document and hoping.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "EXAMPLE — Branded search grew 38% in the quarter after launch with no additional media spend. Inbound demo requests more than doubled. The sales team stopped writing their own decks, which was the quiet win.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/northwind-rebrand/gallery-1.jpg",
        alt: "EXAMPLE — Messaging hierarchy one-pager",
        caption: "The messaging hierarchy every other asset was built from.",
      },
      {
        src: "/work/northwind-rebrand/gallery-2.jpg",
        alt: "EXAMPLE — Homepage before and after",
        caption: "Homepage, before and after.",
      },
    ],
  },

  // ───────────────────────── EXAMPLE 2 — growth ─────────────────────────
  {
    slug: "paid-acquisition-rebuild",
    title: "Cutting blended CAC in half without cutting spend",
    client: "EXAMPLE — Harbor & Co.",
    role: "Growth Marketing Manager",
    timeframe: "2024 – 2025",
    disciplines: ["growth"],
    featured: true,
    summary:
      "EXAMPLE — Paid spend had tripled and revenue hadn't. I rebuilt the account structure, the landing pages, and the way we decided what was working.",
    cover: {
      src: "/work/paid-acquisition-rebuild/cover.jpg",
      alt: "EXAMPLE — Performance dashboard showing CAC trending down",
    },
    metrics: [
      { prefix: "$", value: "1.2", suffix: "M", label: "annual spend managed" },
      { value: "52", suffix: "%", label: "reduction in blended CAC" },
      { value: "3.1", suffix: "x", label: "return on ad spend" },
    ],
    tags: ["Paid social", "Google Ads", "CRO", "GA4", "Attribution"],
    sections: [
      {
        heading: "The problem",
        body: [
          "EXAMPLE — Spend had gone from $30K to $95K a month across three channels. Revenue was up 20%. Every channel's dashboard claimed credit for the same conversions, so nobody could say which half of the budget was working.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "EXAMPLE — First I stopped the bleeding: paused nineteen ad sets that had never produced a qualified lead, and consolidated the account into four campaigns aligned to the four things people actually came to us for.",
          "Then I fixed measurement — a single source of truth in GA4 with server-side conversion tracking, plus a weekly holdout test so we had something honest to compare platform numbers against.",
          "Finally, landing pages. We had been sending six audiences to one page. I wrote and shipped four dedicated pages and ran a structured test on each headline.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "EXAMPLE — Blended CAC fell 52% over two quarters at flat spend. The holdout tests showed roughly 30% of platform-reported conversions had been double-counted, which changed how the whole company forecast growth.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/paid-acquisition-rebuild/gallery-1.jpg",
        alt: "EXAMPLE — Account restructure diagram",
        caption: "Before: 34 campaigns. After: 4.",
      },
    ],
  },

  // ───────────────────────── EXAMPLE 3 — product ─────────────────────────
  {
    slug: "platform-launch",
    title: "A launch that sales could actually run with",
    client: "EXAMPLE — Meridian Platform",
    role: "Product Marketing Lead",
    timeframe: "2024",
    disciplines: ["product", "brand"],
    featured: true,
    summary:
      "EXAMPLE — Engineering had built something genuinely new. My job was to make sure the market heard it as new, and that the sales team could explain it without me in the room.",
    cover: {
      src: "/work/platform-launch/cover.jpg",
      alt: "EXAMPLE — Launch narrative and enablement materials",
    },
    metrics: [
      { value: "420", label: "waitlist signups in week one" },
      { value: "68", suffix: "%", label: "of reps using the new deck by day 30" },
      { value: "11", label: "press and newsletter placements" },
    ],
    tags: ["Positioning", "GTM", "Sales enablement", "Launch", "Research"],
    sections: [
      {
        heading: "The problem",
        body: [
          "EXAMPLE — The feature was six weeks from ship and the internal description of it was a list of capabilities. Capabilities do not travel. Nobody outside the product team could say what it was for in one sentence.",
        ],
      },
      {
        heading: "What I did",
        body: [
          "EXAMPLE — I interviewed eight design partners and found that they all described the product by what it let them stop doing. That became the narrative: not a new tool, a job you no longer have.",
          "I wrote the launch narrative, then built backwards from it — the landing page, the demo script, a one-page objection handler, and a 12-slide deck that a rep could deliver cold.",
          "I also ran a 45-minute enablement session and then, crucially, sat in on six live calls in the first two weeks and rewrote the deck based on where it broke.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "EXAMPLE — 420 waitlist signups in the first week against a goal of 150. Two-thirds of reps had adopted the new deck within a month, which is the number I'm proudest of — enablement usually dies at the handoff.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/platform-launch/gallery-1.jpg",
        alt: "EXAMPLE — Launch narrative one-pager",
        caption: "The narrative everything else was built from.",
      },
    ],
  },
];

/** Helpers used by the pages. No need to edit. */
export const featuredCaseStudies = caseStudies.filter((c) => c.featured);

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
