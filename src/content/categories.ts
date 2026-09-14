import type { Category, CategoryId, CategoryGroup } from "@/lib/types";

/**
 * ─────────────────────────────────────────────────────────────
 *  THE THIRTEEN CATEGORIES.
 *
 *  These drive the filter chips, the category pages, and the
 *  navigation grouping. A category with no work in it does not
 *  appear anywhere on the site, so it's safe to leave one here
 *  until you have something to put in it.
 *
 *  To rename one, change `label` — not `id`. The id is used in
 *  URLs and in every piece's `categories` array.
 * ─────────────────────────────────────────────────────────────
 */

export const categories: Category[] = [
  // ── Design ──────────────────────────────────────────────────
  {
    id: "brand-creation",
    label: "Brand Creation",
    group: "Design",
    blurb:
      "Identity systems built from positioning outward — marks, palette, type, and the templates that keep it consistent after handoff.",
  },
  {
    id: "logo-design",
    label: "Logo Design",
    group: "Design",
    blurb:
      "Marks and wordmarks, from first sketches through the file package a printer and a developer can both use.",
  },
  {
    id: "medal-design",
    label: "Medal Design",
    group: "Design",
    blurb:
      "Finisher medals, ribbons, and presentation — concept through vendor-ready production files.",
  },
  {
    id: "web-design",
    label: "Web Design",
    group: "Design",
    blurb:
      "Responsive pages designed and built, using AI-assisted development to go from layout to working site.",
  },
  {
    id: "look-books",
    label: "Look Books",
    group: "Design",
    blurb:
      "Multi-page books that put a season, a collection, or a brand in one place.",
  },

  // ── Marketing ───────────────────────────────────────────────
  {
    id: "campaigns",
    label: "Campaigns",
    group: "Marketing",
    blurb:
      "One message carried across paid, email, social, print, and whatever the landing page needed to be.",
  },
  {
    id: "email-design",
    label: "Email Design",
    group: "Marketing",
    blurb:
      "HTML email built to survive real inboxes — hierarchy that reads before the images load, and one clear thing to do next.",
  },
  {
    id: "go-to-market",
    label: "Go-to-Market Planning",
    group: "Marketing",
    blurb:
      "Launch plans: positioning, channel mix, sequencing, and the materials that make a launch land.",
  },
  {
    id: "pitch-decks",
    label: "Pitch Decks",
    group: "Marketing",
    blurb:
      "Investor and partnership decks — narrative first, then the design that carries it.",
  },
  {
    id: "presentations",
    label: "Presentations",
    group: "Marketing",
    blurb:
      "Executive summaries, case studies, and sales presentations built from client-provided material.",
  },

  // ── Print & Promo ───────────────────────────────────────────
  {
    id: "posters",
    label: "Posters",
    group: "Print & Promo",
    blurb: "Event and promotional posters, usually as a series across sizes.",
  },
  {
    id: "menus",
    label: "Menus",
    group: "Print & Promo",
    blurb:
      "Menu systems for print and digital, designed to survive seasonal changes.",
  },
  {
    id: "calendars",
    label: "Calendars",
    group: "Print & Promo",
    blurb: "Annual calendars as brand pieces rather than giveaways.",
  },
  {
    id: "banners",
    label: "Repeater Banners",
    group: "Print & Promo",
    blurb:
      "Large-format banners and environmental graphics for gyms, events, and race venues.",
  },
  {
    id: "promotional",
    label: "Promotional Materials",
    group: "Print & Promo",
    blurb:
      "Everything else that gets printed, handed out, worn, or stuck to a wall.",
  },
];

/** The order groups appear in navigation. */
export const categoryGroups: CategoryGroup[] = [
  "Design",
  "Marketing",
  "Print & Promo",
];

/* ── Helpers. No need to edit below here. ───────────────────── */

export const categoryById = Object.fromEntries(
  categories.map((c) => [c.id, c]),
) as Record<CategoryId, Category>;

export function categoryLabel(id: CategoryId) {
  return categoryById[id]?.label ?? id;
}

export function categoriesInGroup(group: CategoryGroup) {
  return categories.filter((c) => c.group === group);
}
