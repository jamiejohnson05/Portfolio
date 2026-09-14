import type { Role, SkillGroup } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  YOU.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Jamie Johnson",

  /** Under your name in the hero. Keep it short. */
  title: "Digital Marketing & Graphic Design",

  /** The line an employer reads in three seconds. */
  tagline:
    "I'm a graphic designer and marketer who likes turning ideas into something real — logos, campaigns, medals, signage, and the pages that carry them. Nine years of taking a thing from the first sketch to the thing you can hold.",

  bio: [
    "I'm a graphic designer and marketer who likes turning ideas into something real.",
    "I've designed a little bit of everything — logos, websites, menus, pitch decks, merchandise, event medals, social, email, ads, signage, print, and whole event campaigns. I like that the work doesn't fit neatly into one box.",
    "The projects I'm proudest of are the ones I got to build from the beginning: making the look, working out the messaging, designing every piece, and then seeing the whole thing standing up in the real world. That's my favourite part of the job.",
    "I'm curious by nature and I like figuring things out. That's what got me using AI and coding tools in my own process — building webpages, designing custom emails, finding new ways to get an idea made.",
    "Mostly I just like making things. Good design, big ideas, new tools, problems worth solving, work with a point to it. And I'm always interested in what I get to make next.",
  ],

  /**
   * Drop a photo at public/images/portrait.jpg and set src to
   * "/images/portrait.jpg". While src is empty the About page
   * simply runs without a portrait — nothing breaks.
   */
  portrait: {
    src: "",
    alt: "Portrait of Jamie Johnson",
  },

  location: "Frederick, CO",

  email: "jamiepates@gmail.com",

  /** Empty string hides the link. */
  links: {
    linkedin: "",
    website: "",
    instagram: "",
    x: "",
  },

  resumeUrl: "/resume.pdf",
};

/**
 * Numbers in the hero. Both of these are checkable, which is the
 * only kind worth putting on a portfolio — the first question an
 * interviewer asks about a number is where it came from.
 */
export const headlineStats = [
  { value: "9", suffix: "+", label: "years in marketing & design" },
  { value: "12", label: "projects on this site" },
];

export const experience: Role[] = [
  {
    company: "Freelance",
    title: "Graphic Designer",
    period: "2020 – Present",
    highlights: [
      "Built the NYX.AI identity from the mark outward — logo system, brand foundations, and the investor materials that carried the first conversations.",
      "Designed case studies, executive summaries and presentations for Versa Marketing and Answeron, turning client-provided content into brand-aligned material.",
      "Created menu systems and advertising for Pepper's Grill across print and digital.",
    ],
  },
  {
    company: "Cerus Fitness",
    title: "Digital Marketing & Media Specialist",
    period: "2017 – Present",
    highlights: [
      "Own event campaigns end to end — concept and messaging through medals, bibs, signage, apparel, social and film.",
      "Plan and run campaigns across paid, email, web, social and CRM.",
      "Design and build responsive webpages using AI-assisted development, taking a marketing concept from layout to working site.",
      "Produce the graphics, photography and video behind advertising, social, events and campaigns.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Design",
    items: [
      "Brand & identity",
      "Logo design",
      "Print & large format",
      "Editorial layout",
      "Art direction",
    ],
  },
  {
    category: "Marketing",
    items: [
      "Campaign development",
      "Go-to-market planning",
      "B2B & B2C",
      "Copywriting",
      "Advertising campaigns",
    ],
  },
  {
    category: "Digital",
    items: [
      "AI-assisted web development",
      "HTML email",
      "Social media",
      "Content creation",
      "Video production",
    ],
  },
  {
    category: "Tools",
    items: [
      "Adobe Creative Suite",
      "Illustrator",
      "Figma",
      "Claude Code",
      "CRM & marketing automation",
    ],
  },
];

export const education = {
  school: "The University of Arizona",
  degree: "Bachelor of Arts",
  major: "Studio Art, 3D Emphasis",
  minor: "General Business Administration",
  period: "2004 – 2009",
};
