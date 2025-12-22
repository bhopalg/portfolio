import { PropsWithChildren } from "react";

export default function Container({ children }: PropsWithChildren) {
  return <div className="container mx-auto px-3 lg:px-0">{children}</div>;
}
