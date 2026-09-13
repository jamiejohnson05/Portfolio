"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades its children in when they scroll into view.
 * Respects prefers-reduced-motion (handled in globals.css).
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  /** Milliseconds to stagger this element behind its siblings. */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      data-visible={visible}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
