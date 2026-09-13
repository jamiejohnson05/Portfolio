import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile, experience, skills, education } from "@/content/profile";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: profile.tagline,
};

export default function AboutPage() {
  const hasPortrait =
    profile.portrait.src && !profile.portrait.alt.includes("TODO");

  return (
    <div className="px-5 py-14 sm:px-8 sm:py-20">
      <p className="kicker">About</p>
      <h1 className="display mt-5 max-w-[14ch] text-[clamp(2.4rem,7vw,4.5rem)]">
        {profile.name}
      </h1>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div className="max-w-[60ch] space-y-5 text-lg leading-relaxed text-ink-muted">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="flex flex-wrap gap-4 pt-6">
            <Link
              href="/contact"
              className="border border-accent bg-accent px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ground transition hover:border-accent-deep hover:bg-accent-deep"
            >
              Get in touch
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="border border-rule px-6 py-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-ink transition hover:border-accent hover:text-accent"
              >
                Résumé
              </a>
            )}
          </div>
        </div>

        {hasPortrait && (
          <div className="relative aspect-[4/5] overflow-hidden border border-rule bg-raised lg:sticky lg:top-28 lg:self-start">
            <Image
              src={profile.portrait.src}
              alt={profile.portrait.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 400px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* ── Experience ───────────────────────────────────────── */}
      <section className="mt-24 border-t border-rule pt-14">
        <h2 className="kicker">Experience</h2>
        <div className="mt-10 space-y-14">
          {experience.map((role, i) => (
            <Reveal key={`${role.company}-${i}`} delay={i * 70}>
              <div className="grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-10">
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
                  {role.period}
                </div>
                <div>
                  <h3 className="display text-2xl sm:text-3xl">{role.title}</h3>
                  <p className="mt-2 text-sm text-accent">{role.company}</p>
                  <ul className="mt-5 max-w-[62ch] space-y-3">
                    {role.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="relative pl-5 leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.7em] before:size-1.5 before:bg-accent"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────── */}
      <section className="mt-20 border-t border-rule pt-14">
        <h2 className="kicker">Education</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-10">
          <div className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint">
            {education.period}
          </div>
          <div>
            <h3 className="display text-2xl">{education.degree}</h3>
            <p className="mt-2 text-sm text-accent">{education.school}</p>
            <p className="mt-3 text-ink-muted">
              {education.major}
              {education.minor ? ` · Minor in ${education.minor}` : ""}
            </p>
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────── */}
      <section className="mt-20 border-t border-rule pt-14">
        <h2 className="kicker">What I do</h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div>
                <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-accent">
                  {group.category}
                </h3>
                <ul className="mt-4 space-y-2 text-ink-muted">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
