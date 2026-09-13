import Image from "next/image";
import Link from "next/link";
import type { Piece } from "@/lib/types";
import { categoryLabel } from "@/content/categories";

/**
 * One full-bleed hero panel on the homepage.
 *
 * Image on one side, type on the other, alternating down the page.
 * On phones it stacks: image first, then copy.
 *
 * This is the layout that demands a strong photograph — there is
 * nowhere for a weak image to hide at this size.
 */
export function Panel({
  piece,
  index,
  priority = false,
}: {
  piece: Piece;
  /** 0-based. Drives the number in the kicker and the alternation. */
  index: number;
  /** Set true for the first panel so it loads eagerly. */
  priority?: boolean;
}) {
  const flipped = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group grid border-b border-rule lg:min-h-[520px] lg:grid-cols-2">
      <Link
        href={`/work/${piece.slug}`}
        className={`relative block aspect-[4/3] overflow-hidden bg-raised lg:aspect-auto ${
          flipped ? "lg:order-2" : ""
        }`}
        aria-hidden="true"
        tabIndex={-1}
      >
        <Image
          src={piece.cover.src}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition duration-700 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-col justify-center gap-4 px-5 py-12 sm:px-10 lg:px-14 lg:py-16">
        <p className="kicker">
          {number} — {piece.categories.map(categoryLabel).join(" · ")} ·{" "}
          {piece.client}
        </p>

        <h2 className="display text-[clamp(1.9rem,4.4vw,3.2rem)]">
          <Link
            href={`/work/${piece.slug}`}
            className="transition group-hover:text-accent"
          >
            {piece.title}
          </Link>
        </h2>

        {piece.summary && (
          <p className="max-w-[42ch] leading-relaxed text-ink-muted">
            {piece.summary}
          </p>
        )}

        {piece.metrics && piece.metrics.length > 0 && (
          <dl className="mt-2 flex flex-wrap gap-x-10 gap-y-4">
            {piece.metrics.slice(0, 3).map((m) => (
              /* Reversed so the number reads first while the markup keeps
                 the valid dt-then-dd order. */
              <div key={m.label} className="flex flex-col-reverse gap-1">
                <dt className="max-w-[18ch] text-xs leading-snug text-ink-faint">
                  {m.label}
                </dt>
                <dd className="display text-2xl text-accent">
                  {m.prefix}
                  {m.value}
                  {m.suffix}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <Link
          href={`/work/${piece.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-2 border-t border-rule pt-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink transition hover:text-accent"
        >
          View project
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
        </Link>
      </div>
    </article>
  );
}
