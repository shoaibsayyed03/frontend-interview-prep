import { siteConfig } from "@/lib/site-config";

const currentYear = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 border-x border-border p-6">
        <p className="text-meta text-text-muted">
          © {currentYear} {siteConfig.name}. Built for quick revision before
          interviews.
        </p>
      </div>
    </footer>
  );
}
