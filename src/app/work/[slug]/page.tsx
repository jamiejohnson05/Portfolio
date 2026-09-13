import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { work, getPiece } from "@/content/work";
import { categoryById } from "@/content/categories";
import { Metric } from "@/components/metric";
import { Gallery } from "@/components/gallery";
import { Reveal } from "@/components/reveal";
import type { CategoryId } from "@/lib/types";

/** Pre-renders one static page per piece at build time. */
export function generateStaticParams() {
  return work.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) return {};
  return {
    title: piece.title,
    description: piece.summary ?? `${piece.title} — ${piece.client}`,
    openGraph: {
      title: piece.title,
      description: piece.summary ?? `${piece.title} — ${piece.client}`,
      images: [piece.cover.src],
    },
  };
}

export default async function PiecePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const piece = getPiece(slug);
  if (!piece) notFound();

  const index = work.findIndex((p) => p.slug === slug);
  const next = work[(index + 1) % work.length];
  const hasStory = Boolean(piece.sections && piece.sections.length > 0);

  return (
    <article>
      {/* ── Full-bleed hero ─────────────────────────────────── */}
      <div className="relative aspect-[4/3] w-full bg-raised sm:aspect-[21/9]">
        <Image
          src={piece.cover.src}
          alt={piece.cover.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* ── Title block ─────────────────────────────────────── */}
      <header className="border-b border-rule px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/work"
          className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint transition hover:text-accent"
        >
          ← All work
        </Link>

        <h1 className="display mt-8 max-w-[20ch] text-[clamp(2.2rem,6vw,4.2rem)]">
          {piece.title}
        </h1>

        {piece.summary && (
          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-ink-muted">
            {piece.summary}
          </p>
        )}

        <dl className="mt-10 grid gap-x-10 gap-y-6 border-t border-rule pt-8 sm:grid-cols-4">
          <div>
            <dt className="kicker">Client</dt>
            <dd className="mt-2 text-sm">{piece.client}</dd>
          </div>
          {piece.role && (
            <div>
              <dt className="kicker">Role</dt>
              <dd className="mt-2 text-sm">{piece.role}</dd>
            </div>
          )}
          <div>
            <dt className="kicker">Year</dt>
            <dd className="mt-2 text-sm">{piece.year}</dd>
          </div>
          <div>
            <dt className="kicker">Discipline</dt>
            <dd className="mt-2 flex flex-col gap-1 text-sm">
              {piece.categories.map((c) => (
                <Link
                  key={c}
                  href={`/category/${c}`}
                  className="w-fit transition hover:text-accent"
                >
                  {categoryById[c as CategoryId]?.label ?? c}
                </Link>
              ))}
            </dd>
          </div>
        </dl>
      </header>

      {/* ── Metrics ─────────────────────────────────────────── */}
      {piece.metrics && piece.metrics.length > 0 && (
        <div className="border-b border-rule px-5 py-12 sm:px-8">
          <div className="grid gap-10 sm:grid-cols-3">
            {piece.metrics.map((m) => (
              <Metric key={m.label} metric={m} />
            ))}
          </div>
        </div>
      )}

      {/* ── The story, when there is one ────────────────────── */}
      {hasStory && (
        <div className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="max-w-[62ch] space-y-14">
            {piece.sections!.map((section, i) => (
              <Reveal key={section.heading} delay={i * 60}>
                <section>
                  <h2 className="display text-2xl sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4 leading-relaxed text-ink-muted">
                    {section.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      )}

      {/* ── Gallery ─────────────────────────────────────────── */}
      {piece.gallery && piece.gallery.length > 0 && (
        <div className={`px-5 sm:px-8 ${hasStory ? "pb-16" : "py-16 sm:py-20"}`}>
          <h2 className="kicker">A closer look</h2>
          <p className="mt-3 text-sm text-ink-faint">
            Click any image to open it full size.
          </p>
          <div className="mt-8">
            <Gallery items={piece.gallery} />
          </div>
        </div>
      )}

      {/* ── Tags and external link ──────────────────────────── */}
      {(piece.tags?.length || piece.externalUrl) && (
        <div className="px-5 sm:px-8">
          <div className="flex flex-wrap items-center gap-2 border-t border-rule py-8">
            {piece.tags?.map((tag) => (
              <span
                key={tag}
                className="border border-rule px-3 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-ink-faint"
              >
                {tag}
              </span>
            ))}
            {piece.externalUrl && (
              <a
                href={piece.externalUrl.href}
                target="_blank"
                rel="noreferrer noopener"
                className="ml-auto font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accent underline underline-offset-[6px]"
              >
                {piece.externalUrl.label} ↗
              </a>
            )}
          </div>
        </div>
      )}

      {/* ── Next ────────────────────────────────────────────── */}
      {next && next.slug !== piece.slug && (
        <Link
          href={`/work/${next.slug}`}
          className="group flex flex-col gap-3 border-t border-rule px-5 py-14 transition hover:bg-raised sm:flex-row sm:items-center sm:justify-between sm:px-8"
        >
          <div>
            <p className="kicker">Next project</p>
            <p className="display mt-3 max-w-[18ch] text-2xl transition group-hover:text-accent sm:text-3xl">
              {next.title}
            </p>
          </div>
          <svg
            viewBox="0 0 24 24"
            className="size-8 shrink-0 text-ink-faint transition group-hover:translate-x-2 group-hover:text-accent"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>
      )}
    </article>
  );
}
