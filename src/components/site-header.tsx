"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    // Deferred so the first measurement isn't a synchronous setState.
    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-rule bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label="Home"
        >
          <span className="grid size-9 place-items-center rounded-full bg-ink font-display text-lg leading-none text-paper transition group-hover:bg-accent">
            {site.logoText}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {site.nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-1.5 text-sm transition ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label="Menu"
            className="grid size-9 place-items-center rounded-full border border-rule text-ink-muted transition hover:border-accent hover:text-accent sm:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-rule bg-paper px-5 py-3 sm:hidden">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-base text-ink-muted transition hover:bg-accent-soft hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
