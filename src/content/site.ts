import { profile } from "./profile";

/**
 * Site-wide settings: navigation, SEO metadata, and the canonical URL.
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

  /** The wordmark in the top-left. Your name, or your initials. */
  logoText: "Jamie Johnson",

  nav: [
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
};
