import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/Section";

export default function Contact() {
  const links = [
    { label: "EMAIL", href: "mailto:gbhopal@icloud.com" },
    { label: "GITHUB", href: "https://github.com/bhopalg" },
    {
      label: "LINKEDIN",
      href: "https://www.linkedin.com/in/gurpreet-bhopal-063a6a73",
    },
  ];

  return (
    <Section id="contact" className="grain">
      <Container>
        <div className="max-w-4xl">
          <p className="font-mono text-xs text-muted-foreground mb-6">
            ( CONTACT )
          </p>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-900 leading-[0.9] mb-12">
            LET&#39;S BUILD
            <br />
            <span className="text-outline">SOMETHING</span>
            <br />
            GREAT<span className="text-primary">.</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-lg">
            Open to discussing new opportunities, interesting projects, or
            connecting with fellow engineers.
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target={link.label !== "EMAIL" ? "_blank" : undefined}
                rel={link.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-8 px-6 py-4 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                <span className="font-mono text-sm">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
