import type { Metadata } from "next";
import { profile } from "@/content/profile";
import { Container } from "@/components/section";

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
    <Container className="py-14 sm:py-24">
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl leading-[1.1] sm:text-6xl">
          Let&rsquo;s talk.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-muted">
          I&rsquo;m open to full-time marketing roles and selective freelance
          work. Email is fastest — tell me a bit about the team and the problem
          and I&rsquo;ll write back.
        </p>

        {!profile.email.includes("TODO") && (
          <a
            href={`mailto:${profile.email}`}
            className="mt-9 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-paper transition hover:opacity-90"
          >
            {profile.email}
          </a>
        )}

        <ul className="mt-14 divide-y divide-rule border-y border-rule">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer noopener"
                className="group flex items-center justify-between py-5 transition"
              >
                <span className="text-sm uppercase tracking-wider text-ink-muted">
                  {l.label}
                </span>
                <span className="flex items-center gap-2 transition group-hover:text-accent">
                  {l.value}
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 transition group-hover:translate-x-0.5"
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

        {profile.resumeUrl && (
          <a
            href={profile.resumeUrl}
            className="mt-10 inline-block text-sm text-ink-muted underline underline-offset-4 transition hover:text-accent"
          >
            Download résumé (PDF)
          </a>
        )}
      </div>
    </Container>
  );
}
