"use client";

import { useMemo, useState } from "react";
import type { CaseStudy, Discipline } from "@/lib/types";
import { disciplineLabels } from "@/content/site";
import { CaseStudyCard } from "./case-study-card";
import { Reveal } from "./reveal";

type Filter = Discipline | "all";

export function WorkGrid({ studies }: { studies: CaseStudy[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  /** Only show filter chips for disciplines that actually have work. */
  const available = useMemo(() => {
    const present = new Set<Discipline>();
    studies.forEach((s) => s.disciplines.forEach((d) => present.add(d)));
    return (Object.keys(disciplineLabels) as Discipline[]).filter((d) =>
      present.has(d),
    );
  }, [studies]);

  const visible = useMemo(
    () =>
      filter === "all"
        ? studies
        : studies.filter((s) => s.disciplines.includes(filter)),
    [studies, filter],
  );

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter work by discipline"
      >
        <Chip
          active={filter === "all"}
          onClick={() => setFilter("all")}
          label={`All work (${studies.length})`}
        />
        {available.map((d) => (
          <Chip
            key={d}
            active={filter === d}
            onClick={() => setFilter(d)}
            label={disciplineLabels[d]}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {visible.map((study, i) => (
          <Reveal key={study.slug} delay={i * 70}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-ink-muted">
          Nothing here yet under this filter.
        </p>
      )}
    </div>
  );
}

function Chip({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition ${
        active
          ? "border-accent bg-accent text-paper"
          : "border-rule text-ink-muted hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );
}
