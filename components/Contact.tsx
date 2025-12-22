import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Contact() {
  const links = [
    { label: "EMAIL", href: "mailto:hello@example.com" },
    { label: "GITHUB", href: "https://github.com" },
    { label: "LINKEDIN", href: "https://linkedin.com" },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 bg-secondary/50 grain">
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
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "EMAIL" ? "_blank" : undefined}
                rel={link.label !== "EMAIL" ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-8 px-6 py-4 border border-border hover:border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                <span className="font-mono text-sm">{link.label}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
