import Link from "next/link";
import { profile } from "@/content/profile";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  const social = [
    { label: "LinkedIn", href: profile.links.linkedin },
    { label: "Website", href: profile.links.website },
    { label: "Instagram", href: profile.links.instagram },
    { label: "X", href: profile.links.x },
  ].filter((l) => l.href && !l.href.includes("TODO"));

  return (
    <footer className="border-t border-rule">
      <div className="grid gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <p className="display text-3xl sm:text-4xl">Let&rsquo;s talk.</p>
          {!profile.email.includes("TODO") && (
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block text-lg text-accent underline decoration-accent/30 underline-offset-[6px] transition hover:decoration-accent"
            >
              {profile.email}
            </a>
          )}
          <p className="mt-3 text-sm text-ink-faint">{profile.location}</p>
        </div>

        <div>
          <p className="kicker">Site</p>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-ink-muted transition hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {social.length > 0 && (
          <div>
            <p className="kicker">Elsewhere</p>
            <ul className="mt-4 space-y-2">
              {social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-ink-muted transition hover:text-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              {profile.resumeUrl && (
                <li>
                  <a
                    href={profile.resumeUrl}
                    className="text-sm text-ink-muted transition hover:text-accent"
                  >
                    Résumé (PDF)
                  </a>
                </li>
              )}
            </ul>
          </div>
        )}
      </div>

      <div className="border-t border-rule-soft px-5 py-6 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-faint sm:px-8">
        © {year} {profile.name}
      </div>
    </footer>
  );
}
