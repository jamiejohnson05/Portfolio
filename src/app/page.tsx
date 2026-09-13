import Link from "next/link";
import { profile } from "@/content/profile";
import { featuredWork, work } from "@/content/work";
import { categories, categoryGroups } from "@/content/categories";
import { testimonials } from "@/content/testimonials";
import { Panel } from "@/components/panel";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  const counts = new Map<string, number>();
  work.forEach((p) =>
    p.categories.forEach((c) => counts.set(c, (counts.get(c) ?? 0) + 1)),
  );

  return (
    <>
      {/* ── Intro band. Deliberately short — the work is the hero. ── */}
      <section className="border-b border-rule px-5 py-14 sm:px-8 sm:py-20">
        <p className="kicker">{profile.location}</p>
        <h1 className="display mt-5 max-w-[16ch] text-[clamp(2.6rem,8vw,5.5rem)]">
          {profile.title}
        </h1>
        <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-muted">
          {profile.tagline}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <Link
            href="/work"
            className="border border-accent bg-accent px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ground transition hover:bg-accent-deep hover:border-accent-deep"
          >
            All work
          </Link>
          {profile.resumeUrl && (
            <a
              href={profile.resumeUrl}
              className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink-muted underline underline-offset-[6px] transition hover:text-accent"
            >
              Résumé
            </a>
          )}
        </div>
      </section>

      {/* ── Featured work, full bleed ─────────────────────────── */}
      {featuredWork.map((piece, i) => (
        <Panel key={piece.slug} piece={piece} index={i} priority={i === 0} />
      ))}

      {/* ── Everything else: the thirteen categories ──────────── */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="kicker">Everything else</h2>
        <p className="mt-4 max-w-[46ch] text-ink-muted">
          The work above is a selection. Below is all of it, by discipline.
        </p>

        <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-3">
          {categoryGroups.map((group) => {
            const inGroup = categories.filter(
              (c) => c.group === group && (counts.get(c.id) ?? 0) > 0,
            );
            if (inGroup.length === 0) return null;

            return (
              <div key={group}>
                <p className="font-mono text-[0.6rem] uppercase tracking-[0.16em] text-ink-faint">
                  {group}
                </p>
                <ul className="mt-4">
                  {inGroup.map((c) => (
                    <li key={c.id}>
                      <Link
                        href={`/category/${c.id}`}
                        className="flex items-center justify-between gap-4 border-b border-rule-soft py-3 transition hover:text-accent"
                      >
                        <span>{c.label}</span>
                        <span className="font-mono text-[0.65rem] text-ink-faint">
                          {counts.get(c.id)}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Testimonials. Hidden automatically when the array is empty. ── */}
      {testimonials.length > 0 && (
        <section className="border-y border-rule bg-raised px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <figure className="flex h-full flex-col">
                  <blockquote className="flex-1 text-xl leading-snug sm:text-2xl">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                    <span className="text-accent">{t.name}</span> — {t.title},{" "}
                    {t.company}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
