import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

/*
 * ─────────────────────────────────────────────────────────────
 *  TYPEFACES
 *
 *  This site uses system fonts by default: they load instantly,
 *  never flash, and require no network at build time. Georgia
 *  (the display serif) is a genuinely good-looking face and is
 *  present on every Mac and Windows machine.
 *
 *  Want something more distinctive? Ask Claude to "switch the
 *  portfolio to Google Fonts", or do it yourself in three steps:
 *
 *    1. Add at the top of this file:
 *         import { Inter, Instrument_Serif } from "next/font/google";
 *         const sans = Inter({ variable: "--font-sans-stack", subsets: ["latin"], display: "swap" });
 *         const display = Instrument_Serif({ variable: "--font-display-stack", subsets: ["latin"], weight: "400", display: "swap" });
 *    2. Add `${sans.variable} ${display.variable}` to the <html> className below.
 *    3. Delete the two --font-*-stack lines from src/app/globals.css.
 *
 *  Good display pairings to try: Instrument Serif, Fraunces,
 *  Playfair Display, Bricolage Grotesque.
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
};

/** Runs before paint so the page never flashes the wrong theme. */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      document.documentElement.setAttribute("data-theme", stored);
    }
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-paper"
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
