import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title:
    "Gurpreet Bhopal | Senior Software Engineer – React, Next.js, TypeScript",
  description:
    "Senior Software Engineer with 11+ years of experience building scalable SaaS and enterprise systems using React, Next.js, TypeScript, Go, and Python.",
  openGraph: {
    title: "Gurpreet Bhopal – Software Engineer Portfolio",
    description:
      "Explore projects, skills, and experience of a senior software engineer.",
    url: "https://gbhopal.com",
  },
  twitter: {
    card: "summary_large_image",
  },
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
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
