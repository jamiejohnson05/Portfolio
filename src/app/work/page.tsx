import type { Metadata } from "next";
import { caseStudies } from "@/content/case-studies";
import { Container } from "@/components/section";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected case studies across brand, growth, and product marketing.",
};

export default function WorkPage() {
  return (
    <Container className="py-14 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">Work</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          Case studies
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          Each one is the same shape: what the situation was, what I did about
          it, and what happened next.
        </p>
      </header>

      <div className="mt-12">
        <WorkGrid studies={caseStudies} />
      </div>
    </Container>
  );
}
