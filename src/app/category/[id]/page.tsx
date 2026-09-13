import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, categoryById } from "@/content/categories";
import { work } from "@/content/work";
import { PieceCard } from "@/components/piece-card";
import { Reveal } from "@/components/reveal";
import type { CategoryId } from "@/lib/types";

/** One static page per category that actually has work in it. */
export function generateStaticParams() {
  const present = new Set<string>();
  work.forEach((p) => p.categories.forEach((c) => present.add(c)));
  return categories.filter((c) => present.has(c.id)).map((c) => ({ id: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const category = categoryById[id as CategoryId];
  if (!category) return {};
  return { title: category.label, description: category.blurb };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = categoryById[id as CategoryId];
  if (!category) notFound();

  const pieces = work.filter((p) =>
    (p.categories as string[]).includes(category.id),
  );
  if (pieces.length === 0) notFound();

  return (
    <div className="px-5 py-14 sm:px-8 sm:py-20">
      <Link
        href="/work"
        className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint transition hover:text-accent"
      >
        ← All work
      </Link>

      <p className="kicker mt-8">{category.group}</p>
      <h1 className="display mt-4 text-[clamp(2.4rem,7vw,4.5rem)]">
        {category.label}
      </h1>
      <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-muted">
        {category.blurb}
      </p>
      <p className="mt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-faint">
        {pieces.length} {pieces.length === 1 ? "project" : "projects"}
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {pieces.map((piece, i) => (
          <Reveal key={piece.slug} delay={Math.min(i, 5) * 70}>
            <PieceCard piece={piece} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
