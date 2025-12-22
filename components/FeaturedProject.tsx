import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

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
          <div className="relative aspect-[4/3] bg-muted border border-border overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-8xl md:text-9xl font-display font-900 text-foreground/5 group-hover:text-foreground/10 transition-colors">
                  C3
                </p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-linear-to-t from-background/90 to-transparent">
              <p className="font-mono text-xs text-muted-foreground mb-2">
                LIVE PROJECT
              </p>
              <h3 className="text-3xl md:text-4xl font-display font-800">
                CULTUR3
              </h3>
            </div>
          </div>

          {/* Right - Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-700 mb-6">
                Full-stack membership event platform
              </h3>
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
                  <p className="font-mono text-xs text-muted-foreground/60">
                    Supabase Auth
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">Payments</p>
                  <p className="font-mono text-xs text-muted-foreground/60">
                    Stripe Subscriptions
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">Storage</p>
                  <p className="font-mono text-xs text-muted-foreground/60">
                    AWS S3
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4">
                  <p className="text-sm text-muted-foreground">
                    Access Control
                  </p>
                  <p className="font-mono text-xs text-muted-foreground/60">
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
            <div className="mt-8">
              <a
                href="https://cultur3.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 group"
              >
                <span className="text-lg font-display font-600 link-underline">
                  Visit cultur3.co.uk
                </span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
