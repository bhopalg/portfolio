import type { Metadata } from "next";
import Link from "next/link";

import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: null,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center py-28">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-xs text-primary mb-6">( 404 )</p>
          <h1 className="text-5xl md:text-7xl font-display font-900 leading-none mb-8">
            Page not found<span className="text-primary">.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-10">
            The page you requested does not exist or may have moved.
          </p>
          <Link
            href="/"
            className="inline-flex font-mono text-sm border border-border px-6 py-4 hover:bg-foreground hover:text-background transition-colors"
          >
            RETURN HOME
          </Link>
        </div>
      </Container>
    </main>
  );
}
