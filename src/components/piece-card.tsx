import Image from "next/image";
import Link from "next/link";
import type { Piece } from "@/lib/types";
import { categoryLabel } from "@/content/categories";

/** A single work item in a grid. Used on /work and category pages. */
export function PieceCard({ piece }: { piece: Piece }) {
  return (
    <Link
      href={`/work/${piece.slug}`}
      className="group flex flex-col border border-rule bg-raised transition duration-300 hover:border-accent/40"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-ground">
        <Image
          src={piece.cover.src}
          alt={piece.cover.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-ink-faint">
          {piece.client} · {piece.year}
        </p>

        <h3 className="display text-xl transition group-hover:text-accent">
          {piece.title}
        </h3>

        {piece.summary && (
          <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
            {piece.summary}
          </p>
        )}

        <div className="mt-2 flex flex-wrap gap-1.5">
          {piece.categories.map((c) => (
            <span
              key={c}
              className="border border-rule px-2 py-0.5 font-mono text-[0.58rem] uppercase tracking-[0.12em] text-ink-faint"
            >
              {categoryLabel(c)}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
