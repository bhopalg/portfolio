import Container from "@/components/ui/Container";
import Section from "@/components/Section";

export default function Skills() {
  const skillGroups = [
    {
      title: "FRONTEND",
      skills: [
        "React",
        "React Native",
        "Next.js",
        "TypeScript",
        "Modern UI",
        "Performance",
      ],
    },
    {
      title: "BACKEND",
      skills: ["Go", "Python", "FastAPI", "NestJS", "REST", "GraphQL"],
    },
    {
      title: "CLOUD",
      skills: ["AWS", "Azure", "Docker", "Terraform", "CI/CD", "Stripe"],
    },
    {
      title: "SYSTEMS",
      skills: [
        "Distributed",
        "Microservices",
        "API Design",
        "Security",
        "Scalability",
      ],
    },
  ];

  const certs = [
    { name: "AWS Cloud Practitioner", abbr: "AWS" },
    { name: "Azure AI-900", abbr: "AZ" },
    { name: "Databricks Gen AI", abbr: "DB" },
  ];

  return (
    <Section id="skills" className="bg-secondary/50">
      <Container>
        <div className="mb-16">
          <p className="font-mono text-xs text-muted-foreground mb-4">
            ( EXPERTISE )
          </p>
          <h2 className="text-4xl md:text-5xl font-display font-800">
            Technical<span className="text-primary">_</span>
          </h2>
        </div>

        {/* Skills grid - horizontal layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border mb-16">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-background p-6 md:p-8">
              <h3 className="font-mono text-xs text-primary mb-6">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <p className="font-mono text-xs text-muted-foreground shrink-0">
            CERTIFICATIONS —
          </p>
          <div className="flex flex-wrap gap-4">
            {certs.map((cert) => (
              <div
                key={cert.abbr}
                className="group flex items-center gap-4 px-6 py-4 border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-default"
              >
                <span className="text-2xl font-display font-800 text-primary">
                  {cert.abbr}
                </span>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
