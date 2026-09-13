import type { Testimonial } from "@/lib/types";

/**
 * Optional but high-leverage. Two or three is plenty.
 *
 * Where to get them: LinkedIn recommendations you already have, or a
 * short email to a former manager. Ask for one specific thing —
 * "could you say something about how the rebrand went?" gets a better
 * quote than "could you write me a recommendation?".
 *
 * Set this to an empty array [] and the section disappears from the site.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "EXAMPLE — She came in, listened for two weeks, and then told us the thing about our own company we'd been unable to say out loud. Everything after that was easier.",
    name: "EXAMPLE — A. Rivera",
    title: "VP Marketing",
    company: "Northwind Supply Co.",
  },
  {
    quote:
      "EXAMPLE — The most useful thing was that she didn't just hand us a strategy. She stayed through the messy part where it actually gets implemented.",
    name: "EXAMPLE — D. Chen",
    title: "Founder",
    company: "Harbor & Co.",
  },
];
