import { GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Education() {
  const education = [
    {
      school: "COVENTRY UNIVERSITY",
      degree: "Business Information Technology BSc",
      period: "2013 — 2016",
      result: "First Class Honours",
    },
    {
      school: "SOLIHULL TECHNICAL COLLEGE",
      degree: "HND Business Information Technology",
      period: "2011 — 2013",
      result: "Merit",
    },
  ];

  return (
    <section id="education" className="py-24 md:py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs text-muted-foreground mb-4">
              ( EDUCATION )
            </p>
            <h2 className="text-4xl font-display font-800">
              Academic<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-0">
              {education.map((edu) => (
                <div
                  key={edu.school}
                  className="border-t border-border py-8 group"
                >
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <p className="font-mono text-xs text-muted-foreground">
                          {edu.period}
                        </p>
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-700 mb-1">
                        {edu.school}
                      </h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-primary text-primary-foreground font-mono text-xs font-bold">
                        {edu.result}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
