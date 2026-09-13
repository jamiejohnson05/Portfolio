import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/case-studies";
import { disciplineLabels } from "@/content/site";
import { Container } from "@/components/section";
import { Metric } from "@/components/metric";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";

/** Pre-renders one static page per case study at build time. */
export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [study.cover.src],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="py-14 sm:py-20">
      <Container>
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition hover:text-accent"
        >
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
            <path d="M19 12H5M11 6l-6 6 6 6" />
          </svg>
          All work
        </Link>

        <header className="mt-8 max-w-3xl">
          <div className="flex flex-wrap gap-1.5">
            {study.disciplines.map((d) => (
              <span
                key={d}
                className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent"
              >
                {disciplineLabels[d]}
              </span>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl leading-[1.1] tracking-tight sm:text-6xl">
            {study.title}
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            {study.summary}
          </p>

          <dl className="mt-8 grid gap-x-8 gap-y-4 border-t border-rule pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-ink-muted">Client</dt>
              <dd className="mt-1">{study.client}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Role</dt>
              <dd className="mt-1">{study.role}</dd>
            </div>
            <div>
              <dt className="text-ink-muted">Timeframe</dt>
              <dd className="mt-1">{study.timeframe}</dd>
            </div>
          </dl>
        </header>
      </Container>

      {/* Hero image */}
      <Container className="mt-12">
        <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-rule bg-accent-soft">
          <Image
            src={study.cover.src}
            alt={study.cover.alt}
            fill
            priority
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
      </Container>

      {/* Metrics */}
      {study.metrics.length > 0 && (
        <Container className="mt-14">
          <div className="grid gap-8 border-y border-rule py-10 sm:grid-cols-3">
            {study.metrics.map((m) => (
              <Metric key={m.label} metric={m} />
            ))}
          </div>
        </Container>
      )}

      {/* Narrative */}
      <Container className="mt-14">
        <div className="max-w-2xl space-y-12">
          {study.sections.map((section, i) => (
            <Reveal key={section.heading} delay={i * 60}>
              <section>
                <h2 className="font-display text-2xl leading-tight sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 leading-relaxed text-ink-muted">
                  {section.body.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Container>

      {/* Gallery */}
      {study.gallery && study.gallery.length > 0 && (
        <Container className="mt-16">
          <h2 className="font-display text-2xl leading-tight sm:text-3xl">
            A closer look
          </h2>
          <p className="mt-2 text-sm text-ink-muted">
            Click any image to open it full size.
          </p>
          <div className="mt-6">
            <Gallery items={study.gallery} />
          </div>
        </Container>
      )}

      {/* Tags + external link */}
      {(study.tags?.length || study.externalUrl) && (
        <Container className="mt-16">
          <div className="flex flex-wrap items-center gap-2 border-t border-rule pt-8">
            {study.tags?.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-rule px-3 py-1.5 text-xs text-ink-muted"
              >
                {tag}
              </span>
            ))}
            {study.externalUrl && (
              <a
                href={study.externalUrl.href}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-auto text-sm text-accent underline underline-offset-4"
              >
                {study.externalUrl.label} ↗
              </a>
            )}
          </div>
        </Container>
      )}

      {/* Next project */}
      {next && next.slug !== study.slug && (
        <Container className="mt-20">
          <Link
            href={`/work/${next.slug}`}
            className="group flex flex-col gap-2 rounded-2xl border border-rule bg-paper-raised p-8 transition hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                Next project
              </p>
              <p className="mt-2 font-display text-2xl leading-tight transition group-hover:text-accent">
                {next.title}
              </p>
            </div>
            <svg
              viewBox="0 0 24 24"
              className="size-6 shrink-0 text-ink-muted transition group-hover:translate-x-1 group-hover:text-accent"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>
        </Container>
      )}
    </article>
  );
}
