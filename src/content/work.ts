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
  /* -- Featured: what the homepage shows, in order -- */

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
        alt: "Fitness Festival finisher medal artwork: a rounded rectangular badge with a navy border, the Cerus bull and CERUS in white, FITNESS FESTIVAL in mint brush script, a band of running silhouettes, and the Colorado flag stripe with 2023",
        caption:
          "Finisher medal artwork — the rectangular direction, which is the one that got made.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-7.jpg",
        alt: "Three finished Fitness Festival medals in enamel, on mint and black printed lanyards, resting against a kettlebell and weight plates",
        caption: "The finished medals, with the printed lanyards.",
      },
      {
        src: "/work/cerus-fitness-festival/gallery-8.jpg",
        alt: "Three young runners standing on the podium in front of the sponsor wall, each wearing a Fitness Festival medal on a mint lanyard",
        caption: "On the podium at the festival, worn.",
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
    slug: "cerus-brix-open-email",
    title: "Brix Open Registration Deadline Email",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["email-design", "campaigns"],
    featured: true,
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
    slug: "cerus-sponsorship-decks",
    title: "Sponsorship Decks",
    client: "Cerus Fitness",
    year: "2022 – 2025",
    categories: ["pitch-decks"],
    featured: true,
    summary:
      "The decks that sell Cerus sponsorships — the annual programme, a stadium race, and the tier cards that price them.",
    role: "Deck design",
    cover: {
      src: "/work/cerus-sponsorship-decks/cover.jpg",
      alt: "Sponsorships 2025 deck cover: a black-and-white photograph of an athlete locking out a barbell overhead, with the Cerus bull and a lime SPONSORSHIPS 2025 block across the lower third",
    },
    gallery: [
      {
        src: "/work/cerus-sponsorship-decks/gallery-1.jpg",
        alt: "Series events page listing the Brix, Spartan Deka and Gym series with attendance figures, each event rated large, medium or small",
        caption:
          "Series events. Every event rated large, medium or small, so a sponsor can size what they're buying before any price appears.",
      },
      {
        src: "/work/cerus-sponsorship-decks/gallery-2.jpg",
        alt: "Spartan DEKA partnership page with the DEKA helmet mark, the Cerus and DEKA logos meeting at a plus sign, and the season's event dates",
        caption:
          "The Spartan DEKA partnership gets its own page — two marks meeting in the middle, the season's dates underneath.",
      },
      {
        src: "/work/cerus-sponsorship-decks/gallery-3.jpg",
        alt: "Diamond tier page: an exclusive monthly sponsorship listing booth space, banners, social, email and in-gym placements in two columns",
        caption:
          "The Diamond tier. Everything included set in two columns, priced monthly rather than per event.",
      },
      {
        src: "/work/cerus-sponsorship-decks/gallery-4.jpg",
        alt: "Cerus Arena 2023 deck cover in navy, naming Weidner Field in Colorado Springs and listing the sponsorship placements available",
        caption:
          "Cerus Arena, 2023. A stadium race at Weidner Field got its own deck and its own navy palette.",
      },
      {
        src: "/work/cerus-sponsorship-decks/gallery-5.jpg",
        alt: "Placement page showing a sponsor logo positioned on a medal ribbon and on a tear-off race bib",
        caption:
          "Placement shown rather than described — the logo on a medal ribbon, and on the tear-off bib.",
      },
      {
        src: "/work/cerus-sponsorship-decks/gallery-6.jpg",
        alt: "The 2022 sponsorship deck cover: an athlete hauling a rope, with the Cerus wordmark and a green call-out block",
        caption:
          "Where it started, 2022. Same job, heavier green, everything set on black.",
      },
    ],
    tags: ["Pitch deck", "Sponsorship", "Co-branding", "Layout"],
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
      alt: "NYX lockup in cyan: an owl with a full wingspan above the NYX wordmark, its eyes and feather detail knocked out so the ground shows through",
    },
    gallery: [
      {
        src: "/work/nyx-ai-identity/gallery-1.jpg",
        alt: "The NYX lockup in white, its eyes and feather detail knocked out so the dark ground shows through",
        caption:
          "The same mark reversed to white, knockouts intact — the version for dark grounds and one-colour printing.",
      },
      {
        src: "/work/nyx-ai-identity/gallery-2.jpg",
        alt: "The NYX lockup with a black owl carrying cyan eyes, brows and beak, above the NYX wordmark in cyan, on a light ground",
        caption:
          "The light-ground version. The owl goes black and the cyan pulls back to the eyes, the brows and the beak.",
      },
    ],
    tags: ["Logo design", "Brand foundations", "Illustrator"],
  },
  {
    slug: "cerusbrix-championship-tees",
    title: "CerusBrix Championship Tees",
    client: "Cerus Fitness",
    year: "2022 – 2025",
    categories: ["promotional"],
    featured: true,
    summary:
      "Personalised competition apparel: one template, a surname and a number swapped per athlete, redrawn each year of the championships.",
    role: "Apparel design",
    cover: {
      src: "/work/cerusbrix-championship-tees/cover.jpg",
      alt: "A competitor in a black CerusBrix Championship 2023 tank printed THOMAS 02 in green, laughing as she walks back from a barbell, with two more competitors in SCREERY 03 and MORGAN tanks behind her",
    },
    sections: [
      {
        heading: "The template",
        body: [
          "Every athlete in the championships gets their own shirt. That only works if the artwork is a template rather than a drawing — so the 2025 design is built with two variable slots and everything else locked: the surname across the base of the arch, and the competitor number in a tab at each lower corner.",
          "The fixed part is an arched CERUSBRIX CHAMPIONSHIPS lockup over a wireframe grid, the faceted bull above the CerusBrix wordmark, year tabs at the shoulders, and one line along the bottom — EARN YOUR SPOT. PROVE IT ON THE FLOOR.",
          "It prints in two inks on black: gold for the mark and the wordmark, off-white for the type and the linework. Setting it that way means the surname and the number are the only things that change between one athlete's file and the next.",
        ],
      },
      {
        heading: "Across four years",
        body: [
          "The championships ran the personalised shirts from 2022 through 2025, and the design was redrawn each year rather than reissued. The 2022 run put the surname in a stacked block with the year underneath; by 2025 it had become the arch-and-grid layout. What carried across was the rule, not the look — one athlete, one name, one number.",
          "The 2025 artwork set holds a separate file for every competitor, twenty-two named athletes in that year alone. Women's cuts ran as tanks, men's as tees, off the same layout.",
        ],
      },
    ],
    gallery: [
      {
        src: "/work/cerusbrix-championship-tees/gallery-1.jpg",
        alt: "The 2025 championship tee artwork on black: an arched CERUSBRIX CHAMPIONSHIPS lockup over a wireframe grid, a gold faceted bull above the CerusBrix wordmark, the surname LONGDEN across the base, 04 in tabs at both lower corners, and the line EARN YOUR SPOT. PROVE IT ON THE FLOOR.",
        caption:
          "The 2025 template, set for one athlete. LONGDEN and 04 are the only two things that change between files.",
      },
      {
        src: "/work/cerusbrix-championship-tees/gallery-2.jpg",
        alt: "A competitor mid-deadlift in the black 2025 championship tee, printed REICHERT with 03 in the corner tab",
        caption: "The same template printed and on the floor, set for REICHERT, 03.",
      },
      {
        src: "/work/cerusbrix-championship-tees/gallery-3.jpg",
        alt: "Six competitors with arms around each other in front of the sponsor wall, each in a CerusBrix Championships tee printed with their own surname down the front — WILSON, YOUNG, JOHNSON, WARFEL, TRUXAL and REICHERT",
        caption: "Six shirts, six names, one layout. This is the whole point of building it as a template.",
      },
      {
        src: "/work/cerusbrix-championship-tees/gallery-4.jpg",
        alt: "Two competitors pressing loaded barbells overhead in the gym, the nearer one in a black tank printed 03 EARN YOUR SPOT in green",
        caption: "The women's cut ran as a tank off the same layout.",
      },
      {
        src: "/work/cerusbrix-championship-tees/gallery-5.jpg",
        alt: "Three competitors on a podium with medals, in black 2022 championship tees printed DIFAZIO, DOWNEY and GILBERT above CERUSBRIX CHAMPIONSHIPS 2022",
        caption:
          "2022, the first run — surname stacked over the year. Same rule, a different drawing.",
      },
    ],
    tags: ["Apparel", "Template system", "Event merch", "Two-colour print", "Illustrator"],
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
      alt: "An assembled Trilogy medal resting against weight plates: a hexagon of green, blue and yellow enamel segments forming the Cerus bull, lettered CERUS FITNESS 2023 TRILOGY around the top edge, on a matching ribbon",
    },
    gallery: [
      {
        src: "/work/trilogy-medal/gallery-1.jpg",
        alt: "Two of the finished medals photographed on dark wood with their ribbons and clips",
        caption:
          "Two of them side by side. Hard enamel, and the bull only resolves once the three segments sit together.",
      },
      {
        src: "/work/trilogy-medal/gallery-2.jpg",
        alt: "Promotional graphic reading EARN YOUR TRILOGY, with arrows labelling the three segments of the assembled medal as Gym Series in green, Race Series in blue and Brix Series in yellow",
        caption:
          "The promo that explains the system. Each series earns one segment, and the three only make a hexagon together.",
      },
      {
        src: "/work/trilogy-medal/gallery-3.jpg",
        alt: "Production artwork: the hexagonal medal shown assembled above its three separate segments",
        caption: "The artwork the factory worked from.",
      },
      {
        src: "/work/trilogy-medal/gallery-4.jpg",
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

  /* -- The rest -- */

  {
    slug: "mountain-athlete",
    title: "Mountain Athlete",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["promotional"],
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
        alt: "Navy tee mockup carrying the Cerus Athlete mountain graphic in white",
        caption: "Navy. The ridge line is cut out of the letters, so the shirt colour is the mountain.",
      },
      {
        src: "/work/mountain-athlete/gallery-2.jpg",
        alt: "Olive tee mockup carrying the Cerus Athlete mountain graphic in black",
        caption: "Olive, printed in black.",
      },
      {
        src: "/work/mountain-athlete/gallery-3.jpg",
        alt: "Black tee mockup carrying the Cerus Athlete mountain graphic in grey",
        caption: "Black on black, grey ink.",
      },
      {
        src: "/work/mountain-athlete/gallery-4.jpg",
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
    summary:
      "A sherbet gradient run through an outlined wordmark, to see how far the brand would stretch.",
    role: "Apparel design",
    cover: {
      src: "/work/retro-outline/cover.jpg",
      alt: "CERUS FITNESS wordmark in a dimensional outline style filled with a pink, orange and yellow gradient, with a small bull mark above",
    },
    tags: ["Apparel", "Lettering", "Colour study", "Illustrator"],
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
    slug: "cerus-sponsor-case-studies",
    title: "Sponsor Case Studies",
    client: "Cerus Fitness",
    year: "2022",
    categories: ["presentations"],
    summary:
      "Two one-page sponsor reports, each turning a year of event attendance, web traffic and social reach into a single readable page.",
    role: "Case study design",
    cover: {
      src: "/work/cerus-sponsor-case-studies/cover.jpg",
      alt: "Lifetime Windows & Siding case study page: navy layout with the client logo, an overview column, a numbered results block, partner quotes and event photography",
    },
    gallery: [
      {
        src: "/work/cerus-sponsor-case-studies/gallery-1.jpg",
        alt: "Full Lifetime Windows & Siding 2022 case study page",
        caption:
          "Lifetime Windows & Siding, 2022. Figures down the left, the partner's own words on the right, event photography carrying the rest.",
      },
      {
        src: "/work/cerus-sponsor-case-studies/gallery-2.jpg",
        alt: "Full Bluebird Botanicals case study page, with digital and in-person reach figures and a numbered list of sponsorship benefits",
        caption:
          "Bluebird Botanicals. Digital reach and in-person reach split into their own panel, with the five benefits numbered underneath.",
      },
    ],
    tags: ["Case study", "Sponsorship", "Layout", "Print & digital"],
  },
  {
    slug: "nyx-ai-case-study",
    title: "NYX.AI Growth Case Study",
    client: "NYX.AI",
    year: "2025",
    categories: ["presentations"],
    summary:
      "A one-page growth story for a pre-launch SaaS platform, built on the same cyan-and-black system as the investor deck.",
    role: "Case study design",
    cover: {
      src: "/work/nyx-ai-case-study/cover.jpg",
      alt: "NYX.AI case study page: cyan headline on black over a gym photograph, with overview and problem sections on the left and cyan panels on the right",
    },
    gallery: [
      {
        src: "/work/nyx-ai-case-study/gallery-1.jpg",
        alt: "Full NYX.AI case study page covering the overview, the problem, the breakthrough at Cerus Fitness, the retention model and why NYX",
        caption:
          "The one-pager. Problem, breakthrough and proof stack down the left; the pitch sits boxed in cyan on the right.",
      },
    ],
    tags: ["Case study", "SaaS", "Layout", "Brand application"],
  },
  {
    slug: "cerus-athlete-tee",
    title: "Athlete Tee 2026",
    client: "Cerus Fitness",
    year: "2026",
    categories: ["promotional"],
    summary:
      "Chrome lettering over a magenta wireframe horizon, with a fist pressing a kettlebell at the centre — the 2026 athlete tee.",
    role: "Apparel design",
    cover: {
      src: "/work/cerus-athlete-tee/cover.jpg",
      alt: "Athlete tee artwork: CERUS FITNESS in chrome-blue block capitals over a magenta wireframe grid, ATHLETE brushed across it in pink, a fist pressing a kettlebell at the centre, and UNSTOPPABLE / COLORADO 2026 along the base",
    },
    gallery: [
      {
        src: "/work/cerus-athlete-tee/gallery-1.jpg",
        alt: "Three members side by side in the gym, all wearing the printed 2026 athlete tee",
        caption: "Printed and worn. Drawn for black, which is the only ground it works on.",
      },
    ],
    tags: ["Apparel", "Lettering", "Retro", "Event merch"],
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
      alt: "The graphic printed on a black cropped hooded tank, worn by a model",
    },
    gallery: [
      {
        src: "/work/ombre-smiley-dumbbell/gallery-1.jpg",
        alt: "Apparel graphic: a smiling kettlebell with lightning-bolt eyes over a pastel checkerboard, above the Cerus Fitness banner and the bull mark, outlined in a pink-to-yellow-to-teal gradient",
        caption:
          "The artwork on its own. The gradient outline is what makes it hold together on black — the kettlebell body is the shirt showing through.",
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
      alt: "CerusBrix ATHLETE lockup in grey and yellow: the faceted bull mark, a dividing rule, and dimensional block lettering edged in yellow, with a star-ringed X emblem above",
    },
    gallery: [
      {
        src: "/work/cerusbrix-athlete/gallery-1.jpg",
        alt: "A member carrying a slam ball on her shoulder in the gym, wearing the navy Athlete tee with the lockup printed in red and white",
        caption:
          "On the floor, printed on navy. The lockup is built so the bull and the word can take a different pair of colours each run.",
      },
      {
        src: "/work/cerusbrix-athlete/gallery-2.jpg",
        alt: "Black and white photograph of three members standing in the gym, all wearing the black Athlete tee",
        caption: "The black run, on the floor at Cerus.",
      },
      {
        src: "/work/cerusbrix-athlete/gallery-3.jpg",
        alt: "The CerusBrix Athlete lockup in navy and yellow",
        caption: "Navy and yellow.",
      },
      {
        src: "/work/cerusbrix-athlete/gallery-4.jpg",
        alt: "The CerusBrix Athlete lockup in a red and white colourway",
        caption: "Red and white. About twelve colourways ran in all.",
      },
    ],
    tags: ["Lettering", "Sub-brand", "Apparel", "Illustrator"],
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
