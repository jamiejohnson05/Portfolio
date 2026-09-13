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
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-xl">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-muted">
            {profile.title}
            {profile.location && !profile.location.includes("TODO")
              ? ` · ${profile.location}`
              : ""}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          {social.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-ink-muted transition hover:text-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-5 pb-8 text-xs text-ink-muted sm:px-8">
        © {year} {profile.name}
      </div>
    </footer>
  );
}
