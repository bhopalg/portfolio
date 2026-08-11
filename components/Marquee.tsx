export default function Marquee() {
  const items = [
    "REACT",
    "TYPESCRIPT",
    "GO",
    "PYTHON",
    "NEXT.JS",
    "AWS",
    "AZURE",
    "GRAPHQL",
    "REST",
    "TERRAFORM",
    "DOCKER",
    "FASTAPI",
  ];

  return (
    <div className="py-6 border-y border-border overflow-hidden">
      <div className="marquee flex gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            aria-hidden={i >= items.length}
            className="font-mono text-sm text-muted-foreground flex items-center gap-12"
          >
            {item}
            <span className="text-primary">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
