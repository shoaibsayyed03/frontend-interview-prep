import { siteConfig } from "@/lib/site-config";

export function HeroSection() {
  const { hero } = siteConfig;

  return (
    <section className="px-4 pt-12 pb-10 text-left md:px-8 md:pt-20 md:pb-14">
      <div className="flex max-w-3xl flex-col items-start gap-4">
        <p className="inline-flex rounded-none border border-border bg-surface-2 px-4 py-1.5 text-meta text-text-secondary">
          {hero.statLabel}
        </p>

        <h1 className="text-hero text-text-primary">
          {hero.titleBefore}{" "}
          <span className="text-accent">{hero.titleAccent}</span>{" "}
          {hero.titleAfter}
        </h1>

        <p className="max-w-2xl text-body text-text-secondary">
          {hero.subtitle}
        </p>
      </div>
    </section>
  );
}
