"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { Asset } from "@/lib/types";

/**
 * A grid of work samples that opens into a full-screen lightbox.
 * Arrow keys and Escape work once it's open.
 */
export function Gallery({ items }: { items: Asset[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const move = useCallback(
    (delta: number) =>
      setOpenIndex((i) =>
        i === null ? null : (i + delta + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (openIndex === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };

    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex, close, move]);

  if (items.length === 0) return null;

  const active = openIndex === null ? null : items[openIndex];

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-rule bg-accent-soft"
            aria-label={`Open image: ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <span className="pointer-events-none absolute inset-0 bg-ink/0 transition group-hover:bg-ink/10" />
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.alt}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={close}
        >
          <div
            className="relative max-h-[75vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              width={1600}
              height={1000}
              className="max-h-[75vh] w-full rounded-lg object-contain"
            />
          </div>

          {active.caption && (
            <p className="max-w-2xl text-center text-sm text-white/70">
              {active.caption}
            </p>
          )}

          <div
            className="flex items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            {items.length > 1 && (
              <>
                <LightboxButton onClick={() => move(-1)} label="Previous">
                  <path d="M15 6l-6 6 6 6" />
                </LightboxButton>
                <span className="text-sm tabular-nums text-white/60">
                  {(openIndex ?? 0) + 1} / {items.length}
                </span>
                <LightboxButton onClick={() => move(1)} label="Next">
                  <path d="M9 6l6 6-6 6" />
                </LightboxButton>
              </>
            )}
            <LightboxButton onClick={close} label="Close">
              <path d="M6 6l12 12M18 6L6 18" />
            </LightboxButton>
          </div>
        </div>
      )}
    </>
  );
}

function LightboxButton({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="grid size-10 place-items-center rounded-full border border-white/25 text-white/80 transition hover:border-white hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {children}
      </svg>
    </button>
  );
}
