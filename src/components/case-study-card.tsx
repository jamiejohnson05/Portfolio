import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/types";
import { disciplineLabels } from "@/content/site";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/work/${study.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-rule bg-paper-raised transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-black/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
        <Image
          src={study.cover.src}
          alt={study.cover.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs uppercase tracking-wider text-ink-muted">
          <span>{study.client}</span>
          <span aria-hidden="true">·</span>
          <span>{study.timeframe}</span>
        </div>

        <h3 className="mt-3 font-display text-2xl leading-tight transition group-hover:text-accent">
          {study.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {study.summary}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {study.disciplines.map((d) => (
            <span
              key={d}
              className="rounded-full bg-accent-soft px-2.5 py-1 text-xs text-accent"
            >
              {disciplineLabels[d]}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1.5 text-sm text-accent">
          Read the case study
          <svg
            viewBox="0 0 24 24"
            className="size-4 transition group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
