/**
 * Shared types for all portfolio content.
 *
 * You should not need to edit this file. It exists so that your editor
 * (and Claude) can tell you when something in `src/content/` is missing
 * a required field.
 */

/** The three practice areas the work grid can filter by. */
export type Discipline = "brand" | "growth" | "product";

export interface Metric {
  /** The number itself, e.g. "312" or "4.8" */
  value: string;
  /** Text shown before the value, e.g. "$" */
  prefix?: string;
  /** Text shown after the value, e.g. "%" or "x" or "K" */
  suffix?: string;
  /** What the number means, e.g. "increase in qualified leads" */
  label: string;
}

export interface Asset {
  /** Path under /public, e.g. "/work/acme/hero.png" */
  src: string;
  /** Describe the image for screen readers and for employers who hover. */
  alt: string;
  /** Optional caption shown under the image in the lightbox. */
  caption?: string;
}

export interface CaseStudy {
  /** URL segment. Lowercase, hyphens only. Becomes /work/<slug> */
  slug: string;
  /** Headline of the project. */
  title: string;
  /** Client or employer name. */
  client: string;
  /** Your role on the project. */
  role: string;
  /** e.g. "2025" or "2023 – 2024" */
  timeframe: string;
  /** Which filters this shows up under. Can be more than one. */
  disciplines: Discipline[];
  /** One sentence. Shows on the card and in search results. */
  summary: string;
  /** Show this one on the homepage. Aim for 3. */
  featured?: boolean;
  /** Card / hero image. */
  cover: Asset;
  /** Headline numbers. 2–4 works best. */
  metrics: Metric[];
  /** The narrative. Each block renders as a titled section. */
  sections: {
    heading: string;
    /** Each string is one paragraph. */
    body: string[];
  }[];
  /** Screenshots, ad creative, page designs, decks-as-images. */
  gallery?: Asset[];
  /** Tools, channels, skills used. Rendered as tags. */
  tags?: string[];
  /** Optional outbound link to the live work. */
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
  /** 2–3 bullets. Lead with outcomes, not duties. */
  highlights: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}
