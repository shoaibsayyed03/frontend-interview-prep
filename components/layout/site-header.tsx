import { Braces } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-4 md:px-8 border-x border-border">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="flex size-9 items-center justify-center rounded-none bg-accent-muted-bg text-accent">
            <Braces aria-hidden />
          </span>
          <span className="font-heading text-base font-semibold tracking-tight text-text-primary md:text-lg">
            {siteConfig.name}
          </span>
        </Link>

        <Button
          asChild
          className="h-9 rounded-none px-4 font-medium hidden sm:flex"
          size="lg"
        >
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {siteConfig.github.label}
          </a>
        </Button>
      </div>
    </header>
  );
}
