"use client";

import { useEffect, useRef, useState } from "react";
import type { Metric as MetricType } from "@/lib/types";

/**
 * A headline number that counts up the first time it scrolls into view.
 * Non-numeric values (like "TODO") render as-is without animating.
 */
export function Metric({ metric }: { metric: MetricType }) {
  const ref = useRef<HTMLDivElement>(null);
  /**
   * Starts at the real value so the server-rendered HTML is correct for
   * search engines and anyone without JavaScript. The count-up only
   * begins once the number actually scrolls into view.
   */
  const [display, setDisplay] = useState<string>(metric.value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !isNumeric(metric.value)) return;

    const target = parseFloat(metric.value);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setDisplay(metric.value);
          return;
        }

        const duration = 1100;
        const start = performance.now();

        const step = (now: number) => {
          const t = Math.min((now - start) / duration, 1);
          // easeOutExpo
          const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
          setDisplay(formatLike(target * eased, metric.value));
          if (t < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [metric.value]);

  return (
    <div ref={ref}>
      <div className="font-display text-4xl leading-none tracking-tight text-accent sm:text-5xl">
        {metric.prefix}
        {display}
        {metric.suffix}
      </div>
      <div className="mt-2 text-sm leading-snug text-ink-muted">
        {metric.label}
      </div>
    </div>
  );
}

function isNumeric(v: string) {
  return v.trim() !== "" && !Number.isNaN(Number(v));
}

/** Keeps the same number of decimal places as the target value. */
function formatLike(current: number, target: string) {
  const decimals = target.includes(".")
    ? target.split(".")[1]?.length ?? 0
    : 0;
  return current.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
