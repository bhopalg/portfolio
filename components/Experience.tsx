import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import Container from "@/components/ui/Container";
import Section from "@/components/Section";

export default function Experience() {
  const experiences = [
    {
      num: "01",
      company: "Nearform",
      role: "Senior Software Developer",
      period: "JUL 2026 — NOW",
      description:
        "Building an internal platform for a global consultancy. Developing AI-powered features and reusable AI coding skills across React, Python, and AWS.",
      tech: ["React", "Python", "AWS", "AI Engineering"],
      href: "https://www.nearform.com",
    },
    {
      num: "02",
      company: "BJSS / CGI",
      role: "Senior Software Engineer",
      period: "SEP 2023 — JUL 2026",
      description:
        "Tech Lead on React & Go applications for betting and aviation clients. Performance, accessibility, SEO optimization.",
      tech: ["React", "TypeScript", "Next.js", "Go", "Python", "AWS"],
      href: "https://www.cgi.com",
    },
    {
      num: "03",
      company: "RES",
      role: "Software Engineer",
      period: "JUL 2022 — SEP 2023",
      description:
        "Core platform managing 200+ assets, processing millions of data points. FastAPI backend, React frontend.",
      tech: ["Python", "FastAPI", "React", "Azure", "Vite"],
      href: "https://www.res-group.com",
    },
    {
      num: "04",
      company: "SmarterDS",
      role: "Developer → Senior Developer",
      period: "SEP 2016 — JUL 2022",
      description:
        "Promoted to Senior. Lead Developer on multiple projects. REST & GraphQL APIs, AWS infrastructure.",
      tech: ["Node.js", "TypeScript", "Go", "Angular", "React", "Terraform"],
      href: "https://smarterds.com",
    },
    {
      num: "05",
      company: "Nandos",
      role: "Griller/Cashier",
      period: "AUG 2013 — AUG 2017",
      description:
        "Part-time job during university. Customer service and food preparation.",
      tech: [],
      href: "https://www.nandos.co.uk",
    },
    {
      num: "06",
      company: "SPORTSDIRECT",
      role: "Web Designer",
      period: "JUN 2014 — JUL 2015",
      description:
        "Year in industry. Maintained 85+ company websites. Front-end development and design.",
      tech: ["JavaScript", "Bootstrap", "DotNetNuke"],
      href: "https://www.sportsdirect.com",
    },
  ];

  return (
    <Section id="work" className="bg-secondary/50 overflow-hidden">
      <Container>
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-mono text-xs text-muted-foreground mb-4">
              ( EXPERIENCE )
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-800">
              Where I&#39;ve
              <br />
              <span className="text-outline">worked</span>
            </h2>
          </div>
          <p className="hidden md:block font-mono text-xs text-muted-foreground">
            {experiences.length.toString().padStart(2, "0")} POSITIONS
          </p>
        </div>

        {/* Experience list */}
        <div className="space-y-0">
          {experiences.map((exp) => (
            <Link
              key={exp.company}
              href={exp.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group border-t border-border py-8 md:py-12 hover:bg-muted/30 transition-colors px-4 -mx-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Number */}
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm text-muted-foreground">
                      {exp.num}
                    </span>
                  </div>

                  {/* Company & Role */}
                  <div className="md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-display font-700 mb-1 group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className="text-muted-foreground">{exp.role}</p>
                  </div>

                  {/* Period */}
                  <div className="md:col-span-2">
                    <p className="font-mono text-sm text-muted-foreground">
                      {exp.period}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-4">
                    <p className="text-sm text-muted-foreground mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-foreground/70 px-2 py-1 border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex md:col-span-1 justify-end">
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </Section>
  );
}
