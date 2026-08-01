import type { ReactNode } from "react";

type PageFrameProps = {
  children: ReactNode;
};

export function PageFrame({ children }: PageFrameProps) {
  return (
    <div className="min-h-full w-full bg-background">
      <div className="relative mx-auto min-h-full w-full border-x border-border">
        {children}
      </div>
    </div>
  );
}
