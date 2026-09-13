import type { Metadata } from "next";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name}.`,
};

export default function ContactPage() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "LinkedIn", value: "Connect", href: profile.links.linkedin },
    { label: "Website", value: "Visit", href: profile.links.website },
    { label: "Instagram", value: "Follow", href: profile.links.instagram },
    { label: "X", value: "Follow", href: profile.links.x },
  ].filter((l) => l.href && !l.href.includes("TODO"));

  return (
    <div className="px-5 py-14 sm:px-8 sm:py-24">
      <p className="kicker">Contact</p>
      <h1 className="display mt-5 max-w-[12ch] text-[clamp(2.8rem,9vw,6rem)]">
        Let&rsquo;s talk
      </h1>
      <p className="mt-7 max-w-[52ch] text-lg leading-relaxed text-ink-muted">
        Open to full-time marketing and design roles, and to freelance work
        where the brief is interesting. Email is fastest — tell me about the
        team and the problem and I&rsquo;ll write back.
      </p>

      {!profile.email.includes("TODO") && (
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block border border-accent bg-accent px-7 py-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ground transition hover:border-accent-deep hover:bg-accent-deep"
        >
          {profile.email}
        </a>
      )}

      <ul className="mt-16 max-w-3xl border-t border-rule">
        {links.map((l) => (
          <li key={l.label} className="border-b border-rule">
            <a
              href={l.href}
              target={l.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
              className="group flex items-center justify-between gap-6 py-6 transition"
            >
              <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint">
                {l.label}
              </span>
              <span className="flex items-center gap-3 transition group-hover:text-accent">
                {l.value}
                <svg
                  viewBox="0 0 24 24"
                  className="size-4 transition group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-10 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
        {profile.location}
      </p>
    </div>
  );
}
