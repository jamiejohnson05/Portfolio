/**
 * Shared types for all portfolio content.
 *
 * You should not need to edit this file. It exists so that your editor
 * (and Claude) can tell you when something in `src/content/` is missing
 * a required field.
 */

/** Every category a piece of work can be filed under. */
export type CategoryId =
  // Design
  | "brand-creation"
  | "logo-design"
  | "medal-design"
  | "web-design"
  | "look-books"
  // Marketing
  | "campaigns"
  | "go-to-market"
  | "pitch-decks"
  | "presentations"
  // Print & promo
  | "posters"
  | "menus"
  | "calendars"
  | "banners"
  | "promotional";

/** The three buckets the categories are grouped under in navigation. */
export type CategoryGroup = "Design" | "Marketing" | "Print & Promo";

export interface Category {
  id: CategoryId;
  /** What shows on the filter chip and the category page heading. */
  label: string;
  group: CategoryGroup;
  /** One sentence at the top of the category page. */
  blurb: string;
}

export interface Asset {
  /** Path under /public, e.g. "/work/nyx-identity/cover.jpg" */
  src: string;
  /** Describe the image. Screen readers use it; so does Google. */
  alt: string;
  /** Optional caption shown under the image in the lightbox. */
  caption?: string;
}

export interface Metric {
  value: string;
  prefix?: string;
  suffix?: string;
  label: string;
}

/**
 * One piece of work.
 *
 * The important thing about this shape: everything below `tags` is
 * OPTIONAL. Some work is just a beautiful object — a medal, a poster —
 * and needs a great photo and a caption, nothing more. Other work (a
 * go-to-market plan, a rebrand) only makes sense with the story attached.
 *
 * A piece with no `sections` renders as an image page with its caption.
 * A piece with `sections` renders as a full case study. Same grid, same
 * filters, same everything else.
 */
export interface Piece {
  /** URL segment. Lowercase, hyphens only. Becomes /work/<slug> */
  slug: string;
  title: string;
  client: string;
  /** "2025", or "2023 – 2024" */
  year: string;
  /** One or more. Drives the filters and the category pages. */
  categories: CategoryId[];
  /** Card and hero image. */
  cover: Asset;
  /** Pin to the homepage. Aim for 5–6 across different categories. */
  featured?: boolean;

  // ── Everything below is optional ──────────────────────────────

  /** One sentence on the card and in link previews. */
  summary?: string;
  /** "Designer", "Brand & Campaign Lead" — what you actually did. */
  role?: string;
  /** Headline numbers. Only where you have them and can share them. */
  metrics?: Metric[];
  /** The story. Leave it off for pieces that speak for themselves. */
  sections?: {
    heading: string;
    /** Each string is one paragraph. */
    body: string[];
  }[];
  /** Additional images. Opens in a lightbox. */
  gallery?: Asset[];
  /** Tools, formats, deliverables. Rendered as small tags. */
  tags?: string[];
  /** Link to the thing if it's live somewhere. */
  externalUrl?: { label: string; href: string };
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export interface Role {
  company: string;
  title: string;
  period: string;
  /** 2–4 bullets. Lead with outcomes. */
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
