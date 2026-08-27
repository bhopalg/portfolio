import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function Field({
  className,
  type,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        "w-full border border-border bg-transparent px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary",
        className,
      )}
      type={type}
      {...props}
    />
  );
}
