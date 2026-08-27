import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/ui/Container";
import cultur3Image from "@/public/cultur3.png";
import vanHoltensImage from "@/public/van-holtens-landing.png";
import Section from "@/components/Section";

export default function FeaturedProject() {
  const cultur3Stack = [
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Stripe",
    "AWS",
  ];

  const vanHoltensStack = ["HTML", "CSS", "JavaScript", "Responsive UX"];

  return (
    <Section id="project">
      <Container>
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <div>
            <p className="mb-4 font-mono text-xs text-muted-foreground">
              ( SELECTED PROJECTS )
            </p>
            <h2 className="font-display text-4xl font-800 md:text-5xl">
              Built for use<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="hidden font-mono text-xs text-muted-foreground md:block">
            02 PROJECTS
          </p>
        </div>

        <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <Link
            href="/projects/cultur3"
            className="group overflow-hidden border border-border lg:col-span-7"
            aria-label="Read the Cultur3 case study"
          >
            <Image
              src={cultur3Image}
              alt="Cultur3 membership event platform screenshot"
              sizes="(max-width: 1024px) 100vw, 58vw"
              placeholder="blur"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </Link>

          <div className="flex flex-col justify-between lg:col-span-4 lg:col-start-9">
            <div>
              <p className="mb-5 font-mono text-[11px] text-primary">
                01 / PRODUCT PLATFORM
              </p>
              <h3 className="mb-6 font-display text-3xl font-700 md:text-4xl">
                Full-stack membership event platform
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Designed and built complete platform including public website,
                backend services, and internal dashboard. Member application
                flow, subscription management, and ticket purchasing with Stripe
                integration.
              </p>

              <div className="mb-8 grid grid-cols-2 gap-4">
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

              <div className="flex flex-wrap gap-2">
                {cultur3Stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-2 border border-border text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

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
        </article>

        <div className="my-16 h-px bg-border md:my-24" />

        <article className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-4 lg:col-start-2">
            <p className="mb-5 font-mono text-[11px] text-primary">
              02 / CLIENT LANDING PAGE
            </p>
            <h3 className="mb-6 font-display text-3xl font-700 md:text-4xl">
              Van Holten&apos;s retail launch experience
            </h3>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
              A conversion-focused trade landing page for Pulse SD, presenting
              the product range and turning retailer interest into sample
              requests and stocking enquiries.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {vanHoltensStack.map((tech) => (
                <span
                  key={tech}
                  className="border border-border px-3 py-2 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/projects/van-holtens"
                className="group inline-flex items-center gap-3"
              >
                <span className="link-underline font-display text-lg font-600">
                  Read case study
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <Link
                href="https://www.pulsesdltd.co.uk/van-holtens"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3"
              >
                <span className="link-underline font-display text-lg font-600">
                  Visit live site
                </span>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <Link
            href="/projects/van-holtens"
            className="group overflow-hidden border border-border lg:col-span-6 lg:col-start-7"
            aria-label="Read the Van Holten's landing page case study"
          >
            <Image
              src={vanHoltensImage}
              alt="Van Holten's Pickle Puffed Snacks landing page"
              sizes="(max-width: 1024px) 100vw, 50vw"
              placeholder="blur"
              className="aspect-[36/25] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.015]"
            />
          </Link>
        </article>
      </Container>
    </Section>
  );
}
