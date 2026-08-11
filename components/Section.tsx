import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  className?: string;
  id: string;
} & PropsWithChildren;

export default function Section({ children, id, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-24 md:py-32", className)}>
      {children}
    </section>
  );
}
