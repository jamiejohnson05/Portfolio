import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 py-28 sm:px-8 sm:py-40">
      <p className="kicker">404</p>
      <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.4rem,7vw,4.5rem)]">
        This page moved, or never was
      </h1>
      <p className="mt-6 max-w-[44ch] text-ink-muted">
        Try the work instead — that&rsquo;s the good part anyway.
      </p>
      <Link
        href="/work"
        className="mt-10 inline-block border border-accent bg-accent px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ground transition hover:border-accent-deep hover:bg-accent-deep"
      >
        See the work
      </Link>
    </div>
  );
}
