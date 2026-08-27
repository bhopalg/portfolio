import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/Container";
import bigPapaImage from "@/public/van-holtens-big-papa.png";
import garlicJoeImage from "@/public/van-holtens-garlic-joe.png";
import hotMamaImage from "@/public/van-holtens-hot-mama.png";
import landingPageImage from "@/public/van-holtens-landing.png";

const pageUrl = "https://gbhopal.com/projects/van-holtens";
const description =
  "A case study of the responsive Van Holten's Pickle Puffed Snacks trade landing page created for Pulse SD.";

export const metadata: Metadata = {
  title: "Van Holten's Retail Landing Page Case Study",
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "article",
    title: "Van Holten's Retail Landing Page Case Study",
    description,
    url: pageUrl,
    images: [
      {
        url: "/van-holtens-landing.png",
        width: 1440,
        height: 1000,
        alt: "Van Holten's Pickle Puffed Snacks landing page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Van Holten's Retail Landing Page Case Study",
    description,
    images: ["/van-holtens-landing.png"],
  },
};

const deliveryDetails = [
  ["FORMAT", "Responsive landing page"],
  ["CLIENT", "Pulse SD Ltd"],
  ["ROLE", "Design and front-end development"],
  ["HANDOFF", "ShopWired integration package"],
];

export default function VanHoltensCaseStudy() {
  return (
    <main className="pb-24 pt-28 md:pb-32 md:pt-36">
      <Container>
        <Link
          href="/#project"
          className="mb-12 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK TO PROJECTS
        </Link>

        <header className="mb-16 grid max-w-6xl grid-cols-1 gap-10 md:mb-24 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <p className="mb-6 font-mono text-xs text-primary">
              ( CLIENT CASE STUDY )
            </p>
            <h1 className="font-display text-5xl leading-[0.92] font-900 tracking-tight md:text-7xl lg:text-8xl">
              Van Holten&apos;s retail launch experience
              <span className="text-primary">.</span>
            </h1>
          </div>
          <p className="max-w-xl text-xl leading-relaxed text-muted-foreground lg:col-span-4 lg:pb-1">
            A focused trade landing page that makes an unusual snack range easy
            to understand, easy to merchandise, and easy to enquire about.
          </p>
        </header>

        <Image
          src={landingPageImage}
          alt="Desktop view of the Van Holten's Pickle Puffed Snacks landing page"
          sizes="(max-width: 1280px) 100vw, 1200px"
          placeholder="blur"
          priority
          className="mb-20 aspect-[36/25] w-full border border-border object-cover object-top md:mb-28"
        />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <aside className="lg:col-span-3">
            <p className="mb-5 font-mono text-xs text-muted-foreground">
              DELIVERY
            </p>
            <dl className="divide-y divide-border border-y border-border">
              {deliveryDetails.map(([term, detail]) => (
                <div key={term} className="py-4">
                  <dt className="mb-1 font-mono text-[10px] text-primary">
                    {term}
                  </dt>
                  <dd className="text-sm text-foreground">{detail}</dd>
                </div>
              ))}
            </dl>
            <Link
              href="https://www.pulsesdltd.co.uk/van-holtens"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-6 inline-flex items-center gap-3"
            >
              <span className="link-underline font-display text-base font-600">
                Visit live site
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </aside>

          <article className="space-y-20 lg:col-span-8 lg:col-start-5">
            <section>
              <p className="mb-4 font-mono text-xs text-muted-foreground">
                ( CHALLENGE )
              </p>
              <h2 className="mb-6 font-display text-3xl font-800 md:text-4xl">
                Turn product interest into a clear retailer journey
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Pulse SD needed a lightweight page for a visually loud product.
                It had to introduce the range, explain the commercial reasons to
                stock it, promote the included marketing support, and give
                retailers two direct routes to act: request a sample or make a
                stocking enquiry.
              </p>
            </section>

            <section>
              <p className="mb-4 font-mono text-xs text-muted-foreground">
                ( APPROACH )
              </p>
              <h2 className="mb-6 font-display text-3xl font-800 md:text-4xl">
                Refine the approved direction without losing its energy
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                Starting from an AI-generated direction the client liked, I
                tightened the hierarchy, aligned the palette with Pulse SD,
                improved responsive behaviour, and built the interaction details
                needed for a credible handoff. The final page remains plain
                HTML, CSS, and JavaScript so it can be integrated into ShopWired
                without introducing a framework or build process.
              </p>
              <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
                {[
                  [
                    "Product storytelling",
                    "Clear flavour, format, price, case-size, and merchandising information across the range.",
                  ],
                  [
                    "Conversion paths",
                    "Repeated sample and enquiry actions with modal forms tailored to each intent.",
                  ],
                  [
                    "Responsive delivery",
                    "A compact mobile header, single-column content flow, and touch-friendly controls.",
                  ],
                  [
                    "Accessible foundations",
                    "Semantic sections, useful image alternatives, visible focus states, and escape-to-close modal behaviour.",
                  ],
                ].map(([title, copy]) => (
                  <div key={title} className="bg-background p-6">
                    <h3 className="mb-3 font-display text-xl font-700">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {copy}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>

        <figure className="my-20 border border-border bg-[#edf7fb] p-6 md:my-28 md:p-12">
          <div className="grid grid-cols-3 items-end gap-2 md:gap-10">
            {[
              [bigPapaImage, "Big Papa dill pickle puffed snacks 90 gram bag"],
              [
                garlicJoeImage,
                "Garlic Joe garlic pickle puffed snacks 90 gram bag",
              ],
              [hotMamaImage, "Hot Mama hot pickle puffed snacks 90 gram bag"],
            ].map(([image, alt]) => (
              <Image
                key={alt as string}
                src={image}
                alt={alt as string}
                sizes="(max-width: 768px) 30vw, 320px"
                placeholder="blur"
                className="mx-auto max-h-[520px] w-auto object-contain"
              />
            ))}
          </div>
          <figcaption className="mt-6 text-center font-mono text-[10px] text-[#282264] md:mt-10">
            THE 90G RETAIL RANGE
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          <section className="lg:col-span-8 lg:col-start-5">
            <p className="mb-4 font-mono text-xs text-muted-foreground">
              ( RESULT )
            </p>
            <h2 className="mb-6 font-display text-3xl font-800 md:text-4xl">
              A client-approved page prepared for platform handoff
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              The finished package combines the customer-facing layout,
              responsive styling, product carousel, and intent-specific enquiry
              forms in a maintainable static build. Integration notes document
              the remaining ShopWired form wiring so the client&apos;s website
              developer can take it into production cleanly.
            </p>
            <Link
              href="https://www.pulsesdltd.co.uk/van-holtens"
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3"
            >
              <span className="link-underline font-display text-lg font-600">
                View Van Holten&apos;s on Pulse SD
              </span>
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </section>
        </div>
      </Container>
    </main>
  );
}
