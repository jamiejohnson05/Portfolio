import type { Role, SkillGroup } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  YOU.
 *
 *  Pre-filled from your résumé. Anything marked TODO is a
 *  placeholder that will show on the live site until you write
 *  over it — those are the bits only you can supply.
 * ─────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Jamie Johnson",

  /** Under your name in the hero. Keep it short. */
  title: "Digital Marketing & Graphic Design",

  /**
   * The line an employer reads in three seconds, straight off your
   * résumé link. Say what you do and what makes you different —
   * for you that's the design-plus-execution combination, and the
   * AI-assisted build workflow, which most designers still don't have.
   */
  tagline:
    "Nine years of strategy, design, and storytelling — brands, campaigns, and the digital experiences that carry them. I take work from concept through production, and I build what I design.",

  /**
   * Two or three short paragraphs for the About page. Write like you
   * talk. TODO — the draft below is a starting point from your résumé;
   * rewrite it in your voice.
   */
  bio: [
    "TODO — I'm a digital marketing specialist and graphic designer with nine years of combining strategy, design, technology, and storytelling. Most of my work lives where those overlap: a brand that needs a mark and a launch plan, a campaign that needs to work on a wall and in an inbox.",
    "TODO — Add the part your résumé can't say. What kind of problem do you actually like being handed? What's the project you'd want to talk about in an interview?",
    "TODO — Close with what you're looking for next, and one human sentence. Studio Art degree, 3D emphasis, University of Arizona — worth mentioning if it explains how you think about objects like medals.",
  ],

  /** Shown on the About page. Drop a photo at public/images/portrait.jpg. */
  portrait: {
    src: "/images/portrait.jpg",
    alt: "TODO — Portrait of Jamie Johnson",
  },

  location: "Frederick, CO",

  /** Used for the contact links and the mailto: button. */
  email: "jamiepates@gmail.com",

  /**
   * Phone is deliberately not on the site. Anyone reaching the
   * portfolio came from your résumé and already has it, and a public
   * phone number mostly attracts recruiters selling things. Add it
   * here if you'd rather have it.
   */

  /** Empty string hides the link. */
  links: {
    linkedin: "https://www.linkedin.com/in/TODO",
    website: "",
    instagram: "",
    x: "",
  },

  /**
   * Drop your résumé PDF at public/resume.pdf. Setting this to an
   * empty string hides the download button.
   */
  resumeUrl: "/resume.pdf",
};

/**
 * Three numbers in the hero. Keep them true and keep them checkable —
 * these are the first things someone will ask about.
 */
export const headlineStats = [
  { value: "9", suffix: "+", label: "years in marketing & design" },
  { value: "TODO", label: "projects delivered" },
  { value: "13", label: "disciplines, one designer" },
];

export const experience: Role[] = [
  {
    company: "Freelance",
    title: "Graphic Designer",
    period: "2020 – Present",
    highlights: [
      "Designed case studies, executive summaries, and presentations for Versa Marketing and Answeron, turning client-provided content into brand-aligned materials.",
      "Created ad graphics and menu designs for Pepper's Grill across print and digital.",
      "Developed logo design, investor pitch decks, and executive summaries for NYX.AI, establishing the brand's foundational visuals.",
    ],
  },
  {
    company: "Cerus Fitness",
    title: "Digital Marketing & Media Specialist",
    period: "2017 – Present",
    highlights: [
      "Plan and execute campaigns across paid advertising, email, web, social, and CRM.",
      "Design and build responsive webpages using AI-assisted development workflows, taking marketing concepts from visual design to functional site.",
      "Develop B2B materials including sponsorship decks, partnership proposals, and co-branded campaigns.",
      "Create graphics, photography, and video for advertising, social, events, and campaigns.",
    ],
  },
];

/** TODO — trim this to what you want to be hired for, not everything you can do. */
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
      "Figma",
      "Claude Code",
      "CRM & marketing automation",
      "TODO — add the rest",
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
