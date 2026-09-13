import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile, experience, skills } from "@/content/profile";
import { Container } from "@/components/section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description: profile.tagline,
};

export default function AboutPage() {
  const hasPortrait =
    profile.portrait.src && !profile.portrait.alt.includes("TODO");

  return (
    <Container className="py-14 sm:py-20">
      <header className="max-w-2xl">
        <p className="text-xs uppercase tracking-[0.18em] text-accent">About</p>
        <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
          {profile.name}
        </h1>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
          {profile.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="flex flex-wrap gap-3 pt-4">
            <Link
              href="/contact"
              className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition hover:opacity-90"
            >
              Get in touch
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                className="rounded-full border border-rule px-6 py-3 text-sm text-ink transition hover:border-accent hover:text-accent"
              >
                Download résumé
              </a>
            )}
          </div>
        </div>

        {hasPortrait && (
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-rule bg-accent-soft lg:sticky lg:top-24 lg:self-start">
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

      {/* Experience */}
      <section className="mt-20 border-t border-rule pt-14">
        <h2 className="font-display text-3xl leading-tight">Experience</h2>
        <div className="mt-10 space-y-12">
          {experience.map((role, i) => (
            <Reveal key={`${role.company}-${i}`} delay={i * 70}>
              <div className="grid gap-3 sm:grid-cols-[180px_1fr] sm:gap-8">
                <div className="text-sm text-ink-muted">{role.period}</div>
                <div>
                  <h3 className="font-display text-2xl leading-tight">
                    {role.title}
                  </h3>
                  <p className="mt-1 text-sm text-accent">{role.company}</p>
                  <ul className="mt-4 space-y-2.5">
                    {role.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="relative pl-5 leading-relaxed text-ink-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent"
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

      {/* Skills */}
      <section className="mt-20 border-t border-rule pt-14">
        <h2 className="font-display text-3xl leading-tight">
          What I actually do
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 60}>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-accent">
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
    </Container>
  );
}
