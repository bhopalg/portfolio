import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import ContactForm from "@/components/ContactForm";
import Container from "@/components/ui/Container";
import Section from "@/components/Section";

export default function Contact() {
  const links = [
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

          <p className="mb-12 max-w-lg text-lg text-muted-foreground">
            Open to discussing new opportunities, interesting projects, or
            connecting with fellow engineers.
          </p>

          <ContactForm />

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-8 border border-border px-6 py-4 transition-all hover:border-foreground hover:bg-foreground hover:text-background"
              >
                <span className="font-mono text-sm">{link.label}</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
