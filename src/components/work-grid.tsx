"use client";

import { useMemo, useState } from "react";
import type { Piece, CategoryId } from "@/lib/types";
import { categories, categoryGroups } from "@/content/categories";
import { PieceCard } from "./piece-card";
import { Reveal } from "./reveal";

type Filter = CategoryId | "all";

/**
 * The filterable work grid.
 *
 * Chips only appear for categories that actually have work in them,
 * so an empty category never shows up as a dead end.
 */
export function WorkGrid({ pieces }: { pieces: Piece[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const present = useMemo(() => {
    const set = new Set<string>();
    pieces.forEach((p) => p.categories.forEach((c) => set.add(c)));
    return set;
  }, [pieces]);

  const visible = useMemo(
    () =>
      filter === "all"
        ? pieces
        : pieces.filter((p) => p.categories.includes(filter)),
    [pieces, filter],
  );

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    pieces.forEach((p) =>
      p.categories.forEach((c) => map.set(c, (map.get(c) ?? 0) + 1)),
    );
    return map;
  }, [pieces]);

  return (
    <div>
      <div
        className="flex flex-col gap-5 border-y border-rule py-6"
        role="group"
        aria-label="Filter work by category"
      >
        <Chip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label="All work"
          count={pieces.length}
          standalone
        />

        {categoryGroups.map((group) => {
          const inGroup = categories.filter(
            (c) => c.group === group && present.has(c.id),
          );
          if (inGroup.length === 0) return null;

          return (
            <div key={group} className="flex flex-wrap items-center gap-2">
              <span className="mr-1 w-full font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-faint sm:w-28">
                {group}
              </span>
              {inGroup.map((c) => (
                <Chip
                  key={c.id}
                  active={filter === c.id}
                  onClick={() => setFilter(c.id)}
                  label={c.label}
                  count={counts.get(c.id) ?? 0}
                />
              ))}
            </div>
          );
        })}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {visible.map((piece, i) => (
          <Reveal key={piece.slug} delay={Math.min(i, 5) * 70}>
            <PieceCard piece={piece} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-12 text-ink-muted">Nothing here under this filter yet.</p>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
  count,
  standalone = false,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
  standalone?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex items-center gap-2 border px-3.5 py-1.5 text-sm transition ${
        active
          ? "border-accent bg-accent text-ground"
          : "border-rule text-ink-muted hover:border-accent hover:text-accent"
      } ${standalone ? "w-fit" : ""}`}
    >
      {label}
      <span
        className={`font-mono text-[0.6rem] ${
          active ? "text-ground/60" : "text-ink-faint"
        }`}
      >
        {count}
      </span>
    </button>
  );
}
