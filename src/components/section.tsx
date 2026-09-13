import type { ReactNode } from "react";

/** Standard page width and horizontal padding. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** A titled band of content with consistent vertical rhythm. */
export function Section({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-16 sm:py-24 ${className}`}>
      <Container>
        {(eyebrow || title) && (
          <header className="mb-10 max-w-2xl">
            {eyebrow && (
              <p className="text-xs uppercase tracking-[0.18em] text-accent">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                {title}
              </h2>
            )}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
