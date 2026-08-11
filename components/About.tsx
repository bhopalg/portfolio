import { yearsSince2014 } from "@/lib/utils";
import Section from "@/components/Section";
import Container from "@/components/ui/Container";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left column */}
          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-muted-foreground mb-4">
              ( ABOUT )
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-800 leading-tight">
              Crafting software where trust matters
            </h2>
          </div>

          {/* Right column */}
          <div className="lg:col-span-7 lg:col-start-6 space-y-8">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              I own problems end to end—working closely with Product and Design
              to translate evolving requirements into pragmatic, maintainable
              solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Particularly drawn to building systems where correctness,
              security, and user trust are critical. I thrive in collaborative,
              remote-first environments that encourage curiosity, shared
              ownership, and continuous improvement.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-display font-800 mb-1">
                  {yearsSince2014()}+
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  YEARS EXP
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-800 mb-1">
                  3
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  CERTIFICATIONS
                </p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-display font-800 mb-1">
                  5+
                </p>
                <p className="font-mono text-xs text-muted-foreground">
                  INDUSTRIES
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
