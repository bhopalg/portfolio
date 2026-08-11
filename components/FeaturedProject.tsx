import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";
import cultur3Image from "@/public/cultur3.png";

export default function FeaturedProject() {
  const techStack = [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Stripe",
    "AWS",
  ];

  return (
    <section id="project" className="py-24 md:py-32 bg-secondary/50">
      <Container>
        <div className="mb-12">
          <p className="font-mono text-xs text-muted-foreground mb-4">
            ( SELECTED PROJECT )
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Visual */}
          <Image
            src={cultur3Image}
            alt="Cultur3 membership event platform screenshot"
            sizes="(max-width: 1024px) 100vw, 50vw"
            placeholder="blur"
            className="relative aspect-[4/3] bg-muted border border-border overflow-hidden group"
          />

          {/* Right - Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-700 mb-6">
                Full-stack membership event platform
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Designed and built complete platform including public website,
                backend services, and internal dashboard. Member application
                flow, subscription management, and ticket purchasing with Stripe
                integration.
              </p>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">
                    Authentication
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Supabase Auth
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">Payments</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Stripe Subscriptions
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">Storage</p>
                  <p className="font-mono text-xs text-muted-foreground">
                    AWS S3
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">
                    Access Control
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    Role-based RLS
                  </p>
                </div>
              </div>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-2 border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap gap-6">
              <Link
                href="/projects/cultur3"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-lg font-display font-600 link-underline">
                  Read case study
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <Link
                href="https://cultur3.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-lg font-display font-600 link-underline">
                  Visit cultur3.co.uk
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
