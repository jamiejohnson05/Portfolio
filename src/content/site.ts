import { profile } from "./profile";

/**
 * Site-wide settings: navigation, SEO metadata, and the canonical URL.
 */
export const site = {
  /** Shown in the browser tab and in link previews. */
  title: `${profile.name} — ${profile.title}`,
  description: profile.tagline,

  /**
   * The live address. Used for canonical URLs, the sitemap, and social
   * link previews. Update this if you add a custom domain.
   */
  url: "https://jamiejportfolio.vercel.app",

  /** The wordmark in the top-left. Your name, or your initials. */
  logoText: "Jamie Johnson",

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
