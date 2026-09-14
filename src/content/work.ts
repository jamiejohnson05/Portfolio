import type { Piece } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  THE WORK.
 *
 *  Version 1. Eleven real pieces, six featured.
 *
 *  Nothing here has a `sections` case study yet, and that is
 *  deliberate: a case study needs the situation, the decisions
 *  and the result in your words, and inventing those is the one
 *  mistake a portfolio can't recover from. Every piece below is
 *  an object page — image, facts, gallery — which is honest and
 *  complete on its own.
 *
 *  Adding a story later means adding a `sections` array to a
 *  piece. Nothing else changes.
 * ─────────────────────────────────────────────────────────────
 */

export const work: Piece[] = [
  /* ── Featured ─────────────────────────────────────────────── */

  {
    slug: "cerus-fitness-festival",
    title: "Cerus Fitness Festival",
    client: "Cerus Fitness",
    year: "2023",
    categories: ["campaigns", "medal-design", "promotional"],
    featured: true,
    summary:
      "A two-day community fitness event, carried from the flyer on the wall to the medal in the finisher's hand.",
    role: "Design & campaign",
    metrics: [
      { value: "2", label: "days, one identity" },
      { value: "4", label: "competitive formats" },
      { value: "3", label: "media — print, social, object" },
    ],
    cover: {
      src: "/work/cerus-fitness-festival/cover.jpg",
      alt: "Fitness Festival 5K race bib: the number 100 over a field of running figures, with tear-off strips reading $5 OFF MERCH and 100 BAG CLAIM",
    },
    gallery: [
      {
        src: "/work/cerus-fitness-festival/gallery-1.jpg",
        alt: "Festival flyer, front: event photography grid above the Cerus Fitness Festival lockup, with the weekend schedule",
        caption:
          "Flyer front. The whole weekend on one sheet — 5K, one-mile kids' run, 400m OCR course, strength games, plus the free seminars and classes.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-2.jpg",
        alt: "Festival flyer, back: group photo at the start line above the lockup, date, time and address, with a QR code",
        caption:
          "Flyer back. Lockup, date, location and a QR code straight to registration.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-3.jpg",
        alt: "Square social ad for Strength Games: an athlete in a front-rack squat holding a sandbag, with date and venue",
        caption:
          "Strength Games ad. The festival runs two days and offers eight things; this sells one of them. Easier to care about in a feed.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-4.jpg",
        alt: "Fitness Festival finisher medal: circular badge with the Cerus bull, brush-script festival wordmark and the Colorado flag",
        caption: "Finisher medal, round direction — the one that shipped.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-5.jpg",
        alt: "Race bib for the Fitness Festival 5K with large number and tear-off strips for a merchandise discount and bag claim",
        caption:
          "5K bib. The tear-offs are a $5 merch credit and a bag claim — the number every finisher is already wearing, doing a second job.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-6.jpg",
        alt: "Cerus Fitness Festival social ad: a six-photo grid of event moments around the festival lockup and the date",
        caption:
          "Social ad. Six moments from the year before, around the lockup — the version that ran in feed.",
      },
    ],
    tags: [
      "Event identity",
      "Flyer",
      "Social ads",
      "Medal",
      "Race bib",
      "Illustrator",
    ],
  },

  {
    slug: "nyx-ai-identity",
    title: "NYX.AI Identity",
    client: "NYX.AI",
    year: "2025 – 2026",
    categories: ["logo-design", "brand-creation"],
    featured: true,
    summary:
      "An owl mark and wordmark lockup for a company that was still being built around it.",
    role: "Identity design",
    cover: {
      src: "/work/nyx-ai-identity/cover.jpg",
      alt: "NYX.AI logo lockup: a black owl with a full wingspan above the NYX wordmark in cyan",
    },
    gallery: [
      {
        src: "/work/nyx-ai-identity/gallery-1.jpg",
        alt: "NYX.AI lockup in cyan on a dark ground",
        caption: "Light lockup, for dark applications.",
      },
      {
        src: "/work/nyx-ai-identity/gallery-2.jpg",
        alt: "NYX.AI owl mark alone in cyan",
        caption: "The mark on its own — it has to work without the wordmark.",
      },
      {
        src: "/work/nyx-ai-identity/gallery-3.jpg",
        alt: "NYX.AI owl mark in white with cyan eyes and chest detail",
        caption: "Two-colour cutout version for single-colour printing.",
      },
    ],
    tags: ["Logo design", "Brand foundations", "Illustrator"],
  },

  {
    slug: "trilogy-medal",
    title: "Trilogy Medal",
    client: "Cerus Fitness",
    year: "2023",
    categories: ["medal-design"],
    featured: true,
    summary:
      "Three medals that stand alone and lock together — finish all three series and you have one piece.",
    role: "Medal design",
    metrics: [
      { value: "3", label: "awards in the series" },
      { value: "1", label: "piece when assembled" },
    ],
    cover: {
      src: "/work/trilogy-medal/cover.jpg",
      alt: "Trilogy medal: a hexagonal medal split into three interlocking segments, shown assembled above the three separate pieces",
    },
    gallery: [
      {
        src: "/work/trilogy-medal/gallery-1.jpg",
        alt: "Two versions of the assembled trilogy medal shown together for comparison",
        caption: "Two of the fourteen versions it took to get the split right.",
      },
    ],
    tags: [
      "Medal design",
      "Series design",
      "Production files",
      "Illustrator",
    ],
  },

  {
    slug: "mountain-athlete",
    title: "Mountain Athlete",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["promotional"],
    featured: true,
    summary:
      "A topographic map cut into the letterforms, for a gym at the foot of the Front Range.",
    role: "Apparel design",
    cover: {
      src: "/work/mountain-athlete/cover.jpg",
      alt: "CERUS ATHLETE apparel graphic with a topographic ridge-line texture filling the letters above the bull mark",
    },
    gallery: [
      {
        src: "/work/mountain-athlete/gallery-1.jpg",
        alt: "Rectangle-framed version of the Cerus Athlete mountain graphic in solid black",
        caption: "Framed version, one of four colourways.",
      },
    ],
    tags: ["Apparel", "Lettering", "Illustrator"],
  },

  {
    slug: "womens-lifestyle-program",
    title: "Women's Lifestyle Program",
    client: "Cerus Fitness",
    year: "2023",
    categories: ["campaigns"],
    featured: true,
    summary:
      "A social campaign that gives the message its own panel beside the footage, so it reads before the video does.",
    role: "Campaign design & video",
    cover: {
      src: "/work/womens-lifestyle-program/cover.jpg",
      alt: "Still from the women's programme ad: a member lifting at a box, beside the headline WOMEN JOIN OUR LIFESTYLE PROGRAM",
    },
    gallery: [
      {
        src: "/work/womens-lifestyle-program/gallery-1.jpg",
        alt: "Ad still: a member performing a barbell lift, with the campaign headline alongside",
        caption:
          "The type block holds its position while the footage changes behind it.",
      },
      {
        src: "/work/womens-lifestyle-program/gallery-2.jpg",
        alt: "Ad still: members training on boxes in the gym, with the campaign headline alongside",
        caption: "Real members, real classes — no stock footage.",
      },
    ],
    tags: ["Social campaign", "Video", "Advertising"],
  },

  {
    slug: "retro-outline",
    title: "Retro Outline",
    client: "Cerus Fitness",
    year: "2023",
    categories: ["promotional"],
    featured: true,
    summary:
      "A sherbet gradient run through an outlined wordmark, to see how far the brand would stretch.",
    role: "Apparel design",
    cover: {
      src: "/work/retro-outline/cover.jpg",
      alt: "CERUS FITNESS wordmark in a dimensional outline style filled with a pink, orange and yellow gradient, with a small bull mark above",
    },
    tags: ["Apparel", "Lettering", "Colour study", "Illustrator"],
  },

  /* ── The rest ─────────────────────────────────────────────── */

  {
    slug: "cerus-brix-open-email",
    title: "Brix Open Registration Deadline Email",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["email-design", "campaigns"],
    summary:
      "A deadline-driven HTML email that converted fence-sitters before registration closed, without leaning on discount-gym urgency tactics.",
    role: "Email design & copywriting",
    cover: {
      src: "/work/cerus-brix-open-email/cover.jpg",
      alt: "Top of the Brix Open 2026 email: the green Cerus bull mark on black above a lime banner reading REGISTRATION CLOSING SOON, BRIX OPEN 2026, and the competition dates, over a photo of athletes pressing dumbbells overhead",
    },
    sections: [
      {
        heading: "The Brief",
        body: [
          "Cerus Fitness runs a full calendar of competitive hybrid-fitness events throughout the year. Registration for the Brix Open, one of the season's marquee competitions, was closing in days. The goal was a single email that would convert fence-sitters before the deadline, without leaning on generic urgency tactics or discount-gym energy.",
        ],
      },
      {
        heading: "The Approach",
        body: [
          "Led with the deadline, not the sell. A dedicated deadline callout sits above the fold, with supporting copy that removes any ambiguity about when registration actually closes.",
          "Built a visual competition timeline so recipients could see the full arc of the event — Brix Open, Semi-Finals, Championships — in one glance, reinforcing that this is a real season with stakes, not a one-off signup.",
          "Cross-promoted upcoming events below the primary CTA (Cerox Iron + Iron X, Cerus Knocks Out Addiction) to keep engaged members moving deeper into the event calendar rather than dropping off after one registration.",
          "Used scarcity honestly — “Only 100 tickets available” appears once, tied to a real ticketed event, rather than repeated throughout the email.",
        ],
      },
      {
        heading: "Design System",
        body: [
          "Dark theme (#1a1a1a / #111) with Cerus green (#8DC63F) as the single accent color, used consistently for CTAs, dates, and highlights.",
          "Bold, uppercase headers for scannability at a glance.",
          "Card-based layout for secondary events, keeping the email modular and easy to extend for future sends.",
          "Built as a self-contained HTML file, ready to drop into any ESP with minimal setup.",
        ],
      },
      {
        heading: "Result",
        body: [
          "A clean, on-brand deadline email that reads as coaching energy rather than a discount push — consistent with Cerus's broader positioning as a premium, community-first gym rather than a big-box competitor.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/cerus-brix-open-email/gallery-1.jpg",
        alt: "The full Brix Open email from header to footer: banner, hero photo, deadline panel, three-date competition schedule, register button, two upcoming-event cards, and sign-off",
        caption:
          "The whole email. The deadline sits in its own panel above the schedule, so the date reads before the detail does.",
      },
    ],
    tags: [
      "HTML email",
      "Campaign",
      "Event marketing",
      "Responsive",
    ],
  },

  {
    slug: "nyx-ai-investor-deck",
    title: "NYX.AI Investor Deck",
    client: "NYX.AI",
    year: "2025",
    categories: ["pitch-decks"],
    summary:
      "An investor deck for a pre-launch fitness-tech company, where the owl identity's diamond geometry stops being decoration and starts carrying the argument.",
    role: "Deck design",
    cover: {
      src: "/work/nyx-ai-investor-deck/cover.jpg",
      alt: "NYX.AI investor deck title slide: the black owl mark and cyan NYX wordmark set in a white diamond over a photo of members training, with the headline Maximizing Membership Growth and Engagement for Fitness Studios",
    },
    gallery: [
      {
        src: "/work/nyx-ai-investor-deck/gallery-1.jpg",
        alt: "Industry landscape slide: five statistics on gym count, market revenue, membership numbers, retention rate and first-year closures, each with a source link",
        caption:
          "The landscape slide. Every figure carries its source — the deck argues from cited numbers rather than assertion.",
      },
      {
        src: "/work/nyx-ai-investor-deck/gallery-2.jpg",
        alt: "The Problem slide: a large headline over three columns covering member attrition, disengagement in facilities, and lack of sales and monetisation",
        caption:
          "The problem, split three ways so it reads at a glance from across a room.",
      },
      {
        src: "/work/nyx-ai-investor-deck/gallery-3.jpg",
        alt: "The Opportunity slide: three nested diamonds sized to represent total, serviceable and obtainable market, each labelled with its dollar figure",
        caption:
          "The diamond from the logo, nested three deep to size the market. The brand mark and the chart are the same shape.",
      },
      {
        src: "/work/nyx-ai-investor-deck/gallery-4.jpg",
        alt: "Go-to-Market Strategy slide: partner-led growth, strategic integrations and channel partnerships laid out in numbered columns",
        caption:
          "Go-to-market. Selected slides only — the financial and team pages are not shown.",
      },
    ],
    tags: [
      "Pitch deck",
      "Presentation design",
      "Data visualisation",
      "Brand application",
    ],
  },

  {
    slug: "cerus-sponsor-wall",
    title: "CerusBrix Sponsor Wall",
    client: "Cerus Fitness",
    year: "2025",
    categories: ["banners"],
    summary:
      "A step-and-repeat sponsor wall printed on vinyl — the backdrop every podium photograph from the championships is taken against.",
    role: "Large-format design",
    cover: {
      src: "/work/cerus-sponsor-wall/cover.jpg",
      alt: "Three athletes on the podium at the 2025 CerusBrix Championships holding yellow name plates, standing in front of the printed vinyl sponsor wall",
    },
    gallery: [
      {
        src: "/work/cerus-sponsor-wall/gallery-1.jpg",
        alt: "The sponsor wall artwork: Gatorade, Muscle Milk and Rockstar Energy marks tiled across black bands above and below a grey panel carrying the green Cerus bull and the Cerus Fitness wordmark",
        caption:
          "The repeat artwork. Sponsor marks tile small across the black bands and sit ghosted at a larger size behind the bull.",
      },
      {
        src: "/work/cerus-sponsor-wall/gallery-2.jpg",
        alt: "Wider view of the podium: the full vinyl wall behind three championship winners holding their name plates",
        caption:
          "The vinyl in use at the 2025 championships. The championship tees and the name plates were part of the same job.",
      },
    ],
    tags: [
      "Large format",
      "Vinyl print",
      "Event signage",
      "Sponsor branding",
    ],
  },

  {
    slug: "cerus-arena",
    title: "Cerus Arena",
    client: "Cerus Fitness",
    year: "2023",
    categories: ["campaigns", "medal-design", "banners", "promotional"],
    summary:
      "A competition event where the idea and the messaging were mine, and then so was everything they landed on.",
    role: "Concept, messaging & design",
    cover: {
      src: "/work/cerus-arena/cover.jpg",
      alt: "Cerus Arena 2023 medal: circular badge with the bull mark, laurel wreath and ARENA in brush script",
    },
    gallery: [
      {
        src: "/work/cerus-arena/gallery-1.jpg",
        alt: "Cerus Arena race bib with a large number and tear-off strips for a merchandise discount and bag claim",
        caption: "Bib, with the merch credit and bag claim built in.",
      },
      {
        src: "/work/cerus-arena/gallery-2.jpg",
        alt: "Arena station sign reading SECTION 5 with sled push and sled pull movements and their loads",
        caption:
          "Station signage. Each sign carries its movements and loads so a competitor can read the floor at a glance.",
      },
      {
        src: "/work/cerus-arena/gallery-3.jpg",
        alt: "Arena station sign reading SECTION 8 with med ball sit-ups and echo bike calories",
        caption: "Section 8.",
      },
      {
        src: "/work/cerus-arena/gallery-4.jpg",
        alt: "Still from the Cerus Arena event film: a competitor pressing a sandbag overhead on the field",
        caption: "From the event film, cut several ways for different channels.",
      },
      {
        src: "/work/cerus-arena/gallery-5.jpg",
        alt: "Cerus Arena division winner medal with laurel wreath and the year",
        caption: "Division winner award.",
      },
    ],
    tags: [
      "Event concept",
      "Messaging",
      "Medal",
      "Signage",
      "Race bib",
      "Video",
    ],
  },

  {
    slug: "cerus-events-2025",
    title: "2025 Events Poster",
    client: "Cerus Fitness",
    year: "2025",
    categories: ["posters", "calendars"],
    summary:
      "A whole competition year on one sheet — nine events, twelve months, and a QR code so nobody has to write anything down.",
    role: "Design",
    metrics: [
      { value: "9", label: "events, one sheet" },
      { value: "12", label: "months of scheduling" },
    ],
    cover: {
      src: "/work/cerus-events-2025/cover.jpg",
      alt: "Cerus Fitness 2025 Upcoming Events poster: a zig-zag timeline of nine event dates down the page, each with a photo and a blue chevron date marker",
    },
    gallery: [
      {
        src: "/work/cerus-events-2025/gallery-1.jpg",
        alt: "Full 2025 events poster showing each date from Brix Solos in January through Relay Row in December, with a QR code to the events page",
        caption:
          "The timeline alternates left and right down the page, so nine dates read as a year rather than a list. Each one carries a photograph from that event, and the Brix Open gets extra lines because it runs across three months.",
      },
    ],
    tags: [
      "Poster",
      "Event schedule",
      "Photography",
      "Large format",
      "QR",
    ],
  },

  {
    slug: "cerusbolt",
    title: "CerusBolt",
    client: "Cerus Fitness",
    year: "2023",
    categories: ["campaigns", "medal-design", "promotional"],
    summary:
      "An obstacle race, from the medal at the finish to the social cut that filled the start line.",
    role: "Design & campaign",
    cover: {
      src: "/work/cerusbolt/cover.jpg",
      alt: "CerusBolt 2023 medal: circular badge with the bull mark, BOLT in brush script and the Colorado flag",
    },
    gallery: [
      {
        src: "/work/cerusbolt/gallery-1.jpg",
        alt: "CerusBolt race bib with a large number and tear-off merchandise and bag claim strips",
        caption: "Bib, same tear-off system as the other races.",
      },
      {
        src: "/work/cerusbolt/gallery-2.jpg",
        alt: "Still from the CerusBolt ad: competitors climbing an obstacle wall, captioned 20+ EPIC OBSTACLES",
        caption: "Vertical social cut — 20+ epic obstacles, let's get muddy.",
      },
      {
        src: "/work/cerusbolt/gallery-3.jpg",
        alt: "CerusBolt medal in a blue Colorado-flag colourway",
        caption: "One of seven medal versions.",
      },
    ],
    tags: ["Medal", "Race bib", "Social video", "Event branding"],
  },

  {
    slug: "ombre-smiley-dumbbell",
    title: "Ombré Smiley",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["promotional"],
    summary:
      "Twelve iterations from a flat black kettlebell to a checkerboard, lightning bolts and a peach-to-teal fade.",
    role: "Apparel design",
    cover: {
      src: "/work/ombre-smiley-dumbbell/cover.jpg",
      alt: "Apparel graphic: a smiling kettlebell with lightning-bolt eyes over a pastel checkerboard, above the Cerus Fitness banner and the bull mark, the whole thing outlined in a pink-to-yellow-to-teal gradient",
    },
    gallery: [
      {
        src: "/work/ombre-smiley-dumbbell/gallery-1.jpg",
        alt: "The graphic printed on a black cropped hooded tank, worn by a model",
        caption:
          "On the garment. The gradient outline is what makes it hold together on black — the kettlebell body is the shirt showing through.",
      },
      {
        src: "/work/ombre-smiley-dumbbell/gallery-2.jpg",
        alt: "The same smiley kettlebell graphic rendered in solid black line work",
        caption: "Where it started — solid black, no gradient.",
      },
      {
        src: "/work/ombre-smiley-dumbbell/gallery-3.jpg",
        alt: "Teal and peach version of the smiley kettlebell graphic",
        caption: "Teal and peach colourway, partway through.",
      },
    ],
    tags: ["Apparel", "Illustration", "Colour study", "Illustrator"],
  },

  {
    slug: "cerusbrix-athlete",
    title: "CerusBrix Athlete",
    client: "Cerus Fitness",
    year: "2022 – 2023",
    categories: ["logo-design", "promotional"],
    summary:
      "A dimensional lettering mark for the competition sub-brand, built to survive roughly a dozen colourways.",
    role: "Mark design",
    cover: {
      src: "/work/cerusbrix-athlete/cover.jpg",
      alt: "CerusBrix ATHLETE lockup: the faceted bull mark beside dimensional block lettering in navy and yellow",
    },
    gallery: [
      {
        src: "/work/cerusbrix-athlete/gallery-1.jpg",
        alt: "The CerusBrix Athlete lockup in a red and white colourway",
        caption: "Red and white, one of about twelve.",
      },
    ],
    tags: ["Lettering", "Sub-brand", "Apparel", "Illustrator"],
  },

  {
    slug: "cerus-bull-mark",
    title: "Cerus Bull Mark",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["logo-design", "promotional"],
    summary:
      "The faceted bull, reduced until it still reads at the size of an obstacle wall and a shirt pocket.",
    role: "Mark design",
    cover: {
      src: "/work/cerus-bull-mark/cover.jpg",
      alt: "The Cerus bull mark in solid black: a faceted, angular bull's head with raised horns",
    },
    gallery: [
      {
        src: "/work/cerus-bull-mark/gallery-1.jpg",
        alt: "The Cerus bull mark reversed in white on a dark ground",
        caption: "Reversed, for dark ground and for vinyl.",
      },
    ],
    tags: ["Logo design", "Mark", "Illustrator"],
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
