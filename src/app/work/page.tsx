import type { Metadata } from "next";
import { work } from "@/content/work";
import { WorkGrid } from "@/components/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Brand, campaign, print, and digital work across thirteen disciplines.",
};

export default function WorkPage() {
  return (
    <div className="px-5 py-14 sm:px-8 sm:py-20">
      <p className="kicker">Archive</p>
      <h1 className="display mt-5 text-[clamp(2.4rem,7vw,4.5rem)]">
        Everything, filterable
      </h1>
      <p className="mt-5 max-w-[52ch] leading-relaxed text-ink-muted">
        Some of these are objects that speak for themselves. Some come with the
        story attached. Filter by discipline, or just scroll.
      </p>

      <div className="mt-12">
        <WorkGrid pieces={work} />
      </div>
    </div>
  );
}
