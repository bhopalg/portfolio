import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-between pt-24 pb-8 grain px-3 lg:px-0">
      <div className="container mx-auto">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-16 md:mb-24">
          <p className="font-mono text-xs text-muted-foreground tracking-wider">
            PORTFOLIO / {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              AVAILABLE
            </span>
          </div>
        </div>

        {/* Main title */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-900 leading-[0.85] tracking-tighter">
            SENIOR
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-900 leading-[0.85] tracking-tighter text-outline text-outline-hover transition-all duration-300">
            SOFTWARE
          </h1>
          <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-display font-900 leading-[0.85] tracking-tighter">
            ENGINEER<span className="text-primary">.</span>
          </h1>
        </div>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto">
        <div className="divider-line mb-8" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          <div>
            <p className="font-mono text-xs text-muted-foreground mb-2">
              YEARS OF EXPERIENCE
            </p>
            <p className="text-6xl md:text-7xl font-display font-800 text-primary">
              {yearsSince2014()}+
            </p>
          </div>
          <div className="md:text-center">
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Building production software across SaaS and regulated
              environments. TypeScript, React, Go, Python.
            </p>
          </div>
          <div className="md:text-right">
            <a
              href="#work"
              className="inline-flex items-center gap-3 font-mono text-sm link-underline group"
            >
              SCROLL TO EXPLORE
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function yearsSince2014(): number {
  const startDate = new Date(2014, 0, 1); // Jan 1, 2016
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();

  // If we haven't reached the anniversary yet this year, subtract 1
  const hasHadAnniversaryThisYear =
    now.getMonth() > startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() &&
      now.getDate() >= startDate.getDate());

  if (!hasHadAnniversaryThisYear) {
    years -= 1;
  }

  return years;
}
