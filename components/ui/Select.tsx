import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

function Select({ className, children, ...props }: ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "w-full border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

function Option({ className, ...props }: ComponentProps<"option">) {
  return <option className={className} {...props} />;
}

export { Select, Option };
