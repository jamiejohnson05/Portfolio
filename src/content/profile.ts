import type { Role, SkillGroup } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  START HERE. This is you.
 *  Everything marked TODO is placeholder text that will appear
 *  on the live site until you replace it.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Jamie Johnson",

  /** Appears under your name in the hero. Keep it under ~8 words. */
  title: "Marketing Strategist",

  /**
   * The one-liner an employer reads in three seconds. Say what you do
   * and who you do it for. Avoid "passionate" and "results-driven".
   */
  tagline:
    "TODO — Brand, growth, and product marketing for companies that need their story and their numbers to line up.",

  /**
   * Two or three short paragraphs for the About page. Write like you
   * talk. This is where personality is allowed.
   */
  bio: [
    "TODO — Open with what you actually do and the kind of problem you like being handed. One or two sentences.",
    "TODO — Middle paragraph: your range. Brand work and performance work, or wherever your center of gravity is. Name a couple of real things you've shipped.",
    "TODO — Close with what you're looking for next, and something human. A sentence is plenty.",
  ],

  /** Shown on the About page next to your bio. Optional but nice. */
  portrait: {
    src: "/images/portrait.jpg",
    alt: "TODO — Portrait of Jamie",
  },

  location: "TODO — City, State",

  /** Used for the contact links and the mailto: button. */
  email: "TODO@example.com",

  /** Leave any of these as empty strings and the link disappears. */
  links: {
    linkedin: "https://www.linkedin.com/in/TODO",
    website: "",
    instagram: "",
    x: "",
  },

  /**
   * Drop a PDF at public/resume.pdf and this button lights up.
   * Set to empty string to hide the download button entirely.
   */
  resumeUrl: "/resume.pdf",
};

/** Three numbers that summarize your career. Shown in the hero. */
export const headlineStats = [
  { value: "TODO", label: "years in marketing" },
  { value: "TODO", label: "campaigns shipped" },
  { value: "TODO", label: "in managed spend" },
];

export const experience: Role[] = [
  {
    company: "TODO — Most recent company",
    title: "TODO — Your title",
    period: "TODO — 2023 – Present",
    highlights: [
      "TODO — Lead with an outcome and a number. 'Grew organic signups 4x in 9 months by rebuilding the content engine around bottom-of-funnel search.'",
      "TODO — Second bullet. Show range: if the first was growth, make this one brand or product.",
    ],
  },
  {
    company: "TODO — Previous company",
    title: "TODO — Your title",
    period: "TODO — 2021 – 2023",
    highlights: [
      "TODO — An outcome.",
      "TODO — Another outcome.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Brand & Content",
    items: [
      "Brand positioning",
      "Messaging frameworks",
      "Copywriting",
      "Editorial strategy",
      "Social & community",
    ],
  },
  {
    category: "Growth & Performance",
    items: [
      "Paid search & social",
      "Lifecycle / email",
      "Landing page CRO",
      "Attribution & reporting",
      "SEO",
    ],
  },
  {
    category: "Product Marketing",
    items: [
      "Go-to-market planning",
      "Launch management",
      "Competitive positioning",
      "Sales enablement",
      "Customer research",
    ],
  },
  {
    category: "Tools",
    items: [
      "TODO — HubSpot",
      "TODO — Google Analytics 4",
      "TODO — Figma",
      "TODO — Meta Ads Manager",
      "TODO — Klaviyo",
    ],
  },
];
