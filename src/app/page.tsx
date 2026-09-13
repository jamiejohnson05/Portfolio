import Link from "next/link";
import { profile, headlineStats } from "@/content/profile";
import { featuredCaseStudies } from "@/content/case-studies";
import { testimonials } from "@/content/testimonials";
import { Container, Section } from "@/components/section";
import { CaseStudyCard } from "@/components/case-study-card";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <Container className="pt-14 pb-4 sm:pt-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-accent">
            {profile.title}
          </p>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition hover:opacity-90"
            >
              See the work
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-rule px-6 py-3 text-sm transition hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="px-2 py-3 text-sm text-ink-muted underline underline-offset-4 transition hover:text-accent"
              >
                Download résumé
              </a>
            )}
          </div>
        </div>

        <Reveal delay={120}>
          <dl className="mt-16 grid gap-8 border-t border-rule pt-10 sm:grid-cols-3">
            {headlineStats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <div className="font-display text-4xl leading-none text-ink sm:text-5xl">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-ink-muted">
                    {stat.label}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>

      {/* ── Featured work ────────────────────────────────────── */}
      <Section eyebrow="Selected work" title="Three projects worth your time">
        <div className="grid gap-6 sm:grid-cols-2">
          {featuredCaseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 80}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm text-accent underline underline-offset-4"
          >
            See everything
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* ── Testimonials (hidden automatically if the array is empty) ── */}
      {testimonials.length > 0 && (
        <Section
          eyebrow="What people say"
          title="The part I can't write myself"
          className="border-y border-rule bg-paper-raised"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1 font-display text-xl leading-snug sm:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm text-ink-muted">
                    <span className="text-ink">{t.name}</span> — {t.title},{" "}
                    {t.company}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ── Closing CTA ──────────────────────────────────────── */}
      <Section>
        <Reveal>
          <div className="rounded-3xl border border-rule bg-paper-raised px-8 py-14 text-center sm:px-16">
            <h2 className="font-display text-3xl leading-tight sm:text-4xl">
              Looking for someone who can do both halves of the job?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-ink-muted">
              I&rsquo;m currently open to new roles. The fastest way to reach me
              is email.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-accent px-7 py-3 text-sm font-medium text-paper transition hover:opacity-90"
            >
              Start a conversation
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
