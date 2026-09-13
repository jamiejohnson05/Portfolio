import type { Testimonial } from "@/lib/types";

/**
 * Optional, and high-leverage. Two or three is plenty.
 *
 * Where to get them: LinkedIn recommendations you already have, or a short
 * email to a former manager or client. Ask for one specific thing — "could
 * you say something about how the rebrand went?" gets a far better quote
 * than "could you write me a recommendation?".
 *
 * Set this to an empty array [] and the section disappears from the site.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "EXAMPLE — She listened for two weeks and then told us the thing about our own company we hadn't been able to say out loud. Everything after that was easier.",
    name: "EXAMPLE — Replace with a real name",
    title: "Founder",
    company: "NYX.AI",
  },
  {
    quote:
      "EXAMPLE — The useful part wasn't the strategy. It was that she stayed through the messy stretch where it actually gets built.",
    name: "EXAMPLE — Replace with a real name",
    title: "Owner",
    company: "Pepper's Grill",
  },
];
