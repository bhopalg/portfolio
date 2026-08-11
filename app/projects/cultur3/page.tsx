import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import cultur3Image from "@/public/cultur3.png";

const pageUrl = "https://gbhopal.com/projects/cultur3";
const description =
  "A case study of Cultur3, a full-stack membership and events platform built with Next.js, React, TypeScript, Supabase, Stripe and AWS.";

export const metadata: Metadata = {
  title: "Cultur3 Membership Platform Case Study",
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    title: "Cultur3 Membership Platform Case Study",
    description,
    url: pageUrl,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 600,
        alt: "Gurpreet Bhopal — Senior Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cultur3 Membership Platform Case Study",
    description,
    images: [
      {
        url: "/twitter-image.png",
        width: 1200,
        height: 600,
        alt: "Gurpreet Bhopal — Senior Full-Stack Software Engineer",
      },
    ],
  },
};

const capabilities = [
  {
    title: "Membership",
    description:
      "Application and authentication journeys backed by Supabase Auth and role-based row-level security.",
  },
  {
    title: "Payments",
    description:
      "Stripe-powered subscription management and event ticket purchasing flows.",
  },
  {
    title: "Operations",
    description:
      "An internal dashboard and backend services for running the membership and events platform.",
  },
  {
    title: "Storage",
    description:
      "AWS S3 integration for durable storage alongside the application data layer.",
  },
];

export default function Cultur3CaseStudy() {
  return (
    <main className="pt-28 pb-24 md:pt-36 md:pb-32">
      <Container>
        <Link
          href="/#project"
          className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO PORTFOLIO
        </Link>

        <header className="max-w-5xl mb-16 md:mb-24">
          <p className="font-mono text-xs text-primary mb-6">
            ( PROJECT CASE STUDY )
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-900 leading-[0.92] tracking-tight mb-8">
            Cultur3 membership and events platform
            <span className="text-primary">.</span>
          </h1>
          <p className="max-w-3xl text-xl md:text-2xl text-muted-foreground leading-relaxed">
            A full-stack web platform bringing public content, member
            applications, subscriptions, event tickets and internal operations
            into one product.
          </p>
        </header>

        <Image
          src={cultur3Image}
          alt="Cultur3 membership event platform interface"
          sizes="(max-width: 1280px) 100vw, 1200px"
          placeholder="blur"
          priority
          className="w-full border border-border mb-20 md:mb-28"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          <aside className="lg:col-span-3">
            <p className="font-mono text-xs text-muted-foreground mb-4">
              TECHNOLOGY
            </p>
            <ul className="flex flex-wrap lg:flex-col gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Supabase",
                "Stripe",
                "AWS S3",
              ].map((technology) => (
                <li
                  key={technology}
                  className="font-mono text-xs border border-border px-3 py-2 w-fit"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </aside>

          <article className="lg:col-span-8 lg:col-start-5 space-y-20">
            <section>
              <p className="font-mono text-xs text-muted-foreground mb-4">
                ( CHALLENGE )
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-800 mb-6">
                One coherent journey for members and operators
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Cultur3 needed more than a public-facing website. The product
                also had to support member applications, secure access,
                recurring subscriptions, event ticket purchases and the internal
                workflows required to operate those services.
              </p>
            </section>

            <section>
              <p className="font-mono text-xs text-muted-foreground mb-4">
                ( APPROACH )
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-800 mb-8">
                A full-stack platform with clear system boundaries
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
                {capabilities.map((capability) => (
                  <div key={capability.title} className="bg-background p-6">
                    <h3 className="text-xl font-display font-700 mb-3">
                      {capability.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <p className="font-mono text-xs text-muted-foreground mb-4">
                ( RESULT )
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-800 mb-6">
                A single production platform
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                The finished system combines the customer-facing experience,
                backend services and internal dashboard in one maintainable
                platform, with authentication, payments and access control
                designed as core product capabilities.
              </p>
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
            </section>
          </article>
        </div>
      </Container>
    </main>
  );
}
