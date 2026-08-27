import { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export default function Label({
  className,
  htmlFor,
  slot,
  ...props
}: ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn("mb-2 block font-mono text-xs", className)}
      {...props}
      htmlFor={htmlFor}
      slot={slot}
    />
  );
}
