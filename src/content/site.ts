import { profile } from "./profile";

/**
 * Site-wide settings: navigation, SEO metadata, and the accent color.
 */
export const site = {
  /** Shown in the browser tab and in link previews. */
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,

  /**
   * TODO — set this to your real address once Vercel has deployed.
   * Vercel shows it on the project dashboard; it looks like
   * "https://portfolio-xyz123.vercel.app" until you add a custom domain.
   * Used for canonical URLs, the sitemap, and social link previews.
   */
  url: "https://example.vercel.app",

  /** The small mark in the top-left. Your initials work well. */
  logoText: "JJ",

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};

/**
 * Human-readable labels for the work filters.
 * The keys must match `Discipline` in src/lib/types.ts.
 */
export const disciplineLabels = {
  brand: "Brand & Content",
  growth: "Growth & Performance",
  product: "Product Marketing",
} as const;
