import Link from "next/link";
import { Container } from "@/components/section";

export default function NotFound() {
  return (
    <Container className="py-28 text-center">
      <p className="font-display text-6xl text-accent">404</p>
      <h1 className="mt-4 font-display text-3xl">This page moved or never was</h1>
      <p className="mx-auto mt-4 max-w-md text-ink-muted">
        Try the work instead — that&rsquo;s the good part anyway.
      </p>
      <Link
        href="/work"
        className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition hover:opacity-90"
      >
        See the work
      </Link>
    </Container>
  );
}
