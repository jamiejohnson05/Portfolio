import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/*
 * ─────────────────────────────────────────────────────────────
 *  TYPEFACES
 *
 *  Anton for display (the big uppercase headlines), Manrope for
 *  body, JetBrains Mono for the small uppercase kickers.
 *
 *  These load from Google Fonts via a <link> rather than
 *  next/font. That keeps the build working on any network. If you
 *  want them self-hosted for a slightly faster first paint, ask
 *  Claude to "switch the fonts to next/font/google" — it's a
 *  ten-line change and Vercel handles the rest.
 *
 *  Changing the display face changes the whole personality of the
 *  site. Anton is heavy and condensed; if you want something less
 *  shouty, try Archivo Black, Bebas Neue, or Oswald, and update
 *  --font-display in globals.css to match.
 * ─────────────────────────────────────────────────────────────
 */

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s — ${site.title}`,
  },
  description: site.description,
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    images: ["/og-default.jpg"],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* The rule below is about the old Pages Router. This link lives in
            the root layout, so it applies to every page. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Anton&family=Manrope:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col bg-ground text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-ground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
