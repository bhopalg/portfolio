import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

import "@/app/globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const siteUrl = "https://www.gbhopal.com";
const siteName = "Gurpreet Bhopal Portfolio";
const title =
  "Gurpreet Bhopal | Senior Software Engineer - React, Next.js, TypeScript";
const description =
  "Senior Software Engineer with 11+ years of experience building scalable SaaS and enterprise systems using React, Next.js, TypeScript, Go, Python, AWS, and Azure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: siteName,
  authors: [{ name: "Gurpreet Bhopal", url: siteUrl }],
  creator: "Gurpreet Bhopal",
  publisher: "Gurpreet Bhopal",
  keywords: [
    "Gurpreet Bhopal",
    "Senior Software Engineer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "Go developer",
    "Python developer",
    "AWS",
    "Azure",
    "SaaS engineer",
    "full-stack developer",
  ],
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
        url: "/cultur3.png",
        width: 736,
        height: 552,
        alt: "Cultur3 platform screenshot from Gurpreet Bhopal portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/cultur3.png"],
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
        width: 736,
        height: 552,
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "CreativeWork",
      "@id": `${siteUrl}/#cultur3-project`,
      name: "Cultur3 membership event platform",
      url: "https://cultur3.co.uk",
      description:
        "Full-stack membership event platform with public website, backend services, internal dashboard, member applications, subscriptions, and ticket purchasing.",
      creator: {
        "@id": `${siteUrl}/#person`,
      },
      programmingLanguage: ["TypeScript", "JavaScript", "SQL"],
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
    <html lang="en">
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
