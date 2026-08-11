import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Outfit, Space_Mono } from "next/font/google";
import Script from "next/script";

import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { yearsSince2014 } from "@/lib/utils";

const siteUrl = "https://gbhopal.com";
const siteName = "Gurpreet Bhopal Portfolio";
const title = "Gurpreet Bhopal | Senior Full-Stack Software Engineer";
const description = `Senior full-stack software engineer with ${yearsSince2014()}+ years of experience building scalable SaaS and enterprise systems with React, Next.js, TypeScript, Go and Python.`;

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Gurpreet Bhopal",
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Gurpreet Bhopal", url: siteUrl }],
  creator: "Gurpreet Bhopal",
  publisher: "Gurpreet Bhopal",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "profile",
    title,
    description,
    url: siteUrl,
    siteName,
    locale: "en_GB",
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
    title,
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Gurpreet Bhopal",
      url: siteUrl,
      email: "mailto:gbhopal@icloud.com",
      jobTitle: "Senior Software Engineer",
      description,
      sameAs: [
        "https://github.com/bhopalg",
        "https://www.linkedin.com/in/gurpreet-bhopal-063a6a73",
      ],
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "Coventry University",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Solihull Technical College",
        },
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Go",
        "Python",
        "FastAPI",
        "GraphQL",
        "AWS",
        "Azure",
        "Terraform",
        "AI engineering",
        "AI coding agents",
        "Cursor",
        "Claude",
        "OpenAI Codex",
        "Model Context Protocol",
        "Agent orchestration",
        "Software architecture",
        "SaaS platforms",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      inLanguage: "en-GB",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      name: title,
      url: siteUrl,
      description,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/cultur3.png`,
        width: 1454,
        height: 1090,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "WebApplication",
      "@id": `${siteUrl}/#cultur3-project`,
      name: "Cultur3 membership event platform",
      url: "https://cultur3.co.uk",
      description:
        "Full-stack membership event platform with public website, backend services, internal dashboard, member applications, subscriptions, and ticket purchasing.",
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires JavaScript and a modern web browser",
      keywords: ["Next.js", "React", "Supabase", "Stripe", "AWS S3"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${outfit.variable} ${spaceMono.variable}`}>
      <body>
        <div className="min-h-dvh bg-background">
          <Script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
            }}
          />
          <Navigation />
          {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
