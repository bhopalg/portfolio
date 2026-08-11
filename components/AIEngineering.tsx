import Container from "@/components/ui/Container";
import Section from "@/components/Section";

const workflow = [
  {
    command: "PLAN",
    detail: "Break complex work into clear, reviewable steps before coding.",
  },
  {
    command: "DELEGATE",
    detail: "Use subagents for focused research, implementation, and review.",
  },
  {
    command: "BUILD",
    detail: "Pair the right editor, model, and coding agent with the task.",
  },
  {
    command: "VERIFY",
    detail: "Keep human judgement, tests, and code review in the loop.",
  },
];

const aiStack = [
  {
    name: "Cursor",
    type: "AI EDITOR",
    use: "My daily development environment for production engineering.",
  },
  {
    name: "Claude Opus",
    type: "PRIMARY MODEL",
    use: "Complex planning, architecture, implementation, and problem-solving.",
  },
  {
    name: "Claude Sonnet",
    type: "SUPPORTING MODEL",
    use: "Fast iteration, focused development tasks, and review.",
  },
  {
    name: "OpenAI Codex",
    type: "CODING AGENT",
    use: "CULTUR3 and personal projects with plugins, MCP, skills, and subagents.",
  },
];

const capabilities = [
  {
    label: "AGENT TOOLING",
    title: "Skills & MCP servers",
    description:
      "I write reusable skills and MCP servers that give agents project-specific context, tools, and repeatable ways of working.",
  },
  {
    label: "ORCHESTRATION",
    title: "Plans & subagents",
    description:
      "I use plan mode and focused subagents to divide larger problems, explore options in parallel, and keep delivery structured.",
  },
  {
    label: "APPLIED DELIVERY",
    title: "Production & personal",
    description:
      "I develop AI features at Nearform and use agent-assisted workflows across CULTUR3 and personal projects.",
  },
];

export default function AIEngineering() {
  return (
    <Section id="ai">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="mb-4 font-mono text-xs text-muted-foreground">
              ( AI ENGINEERING )
            </p>
            <h2 className="max-w-lg font-display text-4xl leading-tight font-800 md:text-5xl">
              Beyond the
              <br />
              <span className="text-outline">prompt.</span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
              AI is part of my everyday engineering practice. I use it to plan,
              investigate, build, and verify software—and I build the tooling
              that makes those workflows useful.
            </p>
          </div>

          <div className="border border-border bg-card lg:col-span-7 lg:col-start-6">
            <div className="flex items-center justify-between border-b border-border px-5 py-4 font-mono text-[11px] text-muted-foreground md:px-7">
              <span>AGENT_WORKFLOW</span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                HUMAN IN THE LOOP
              </span>
            </div>
            <ol className="px-5 py-2 md:px-7">
              {workflow.map((step, index) => (
                <li
                  key={step.command}
                  className="grid grid-cols-[2.5rem_1fr] border-b border-border py-5 last:border-b-0 md:grid-cols-[3.5rem_8rem_1fr] md:items-center"
                >
                  <span className="font-mono text-xs text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-foreground">
                    {step.command}
                  </span>
                  <p className="col-start-2 mt-2 text-sm leading-relaxed text-muted-foreground md:col-start-3 md:mt-0">
                    {step.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-5 flex items-center gap-4 font-mono text-[11px] text-muted-foreground">
            <span>TOOLS &amp; MODELS</span>
            <span className="h-px flex-1 bg-border" />
            <span>CURRENT STACK</span>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {aiStack.map((tool) => (
              <article key={tool.name} className="bg-card p-6">
                <p className="mb-8 font-mono text-[10px] text-primary">
                  {tool.type}
                </p>
                <h3 className="mb-3 font-display text-xl font-700">
                  {tool.name}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.use}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.label}
              className="bg-background p-6 md:p-8"
            >
              <p className="mb-5 font-mono text-[11px] text-primary">
                {capability.label}
              </p>
              <h3 className="mb-3 font-display text-xl font-700">
                {capability.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
