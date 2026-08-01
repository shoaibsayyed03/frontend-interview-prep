import type { Difficulty } from "@/lib/content-taxonomy";

/** Shared look per meta dimension (topic / type / difficulty). */
export const topicBadgeClassName =
  "rounded-none border border-sky-500/35 bg-sky-500/10 text-sky-300";

export const typeBadgeClassName =
  "rounded-none border border-violet-500/35 bg-violet-500/10 text-violet-300";

export const difficultyBadgeClassName: Record<Difficulty, string> = {
  beginner:
    "rounded-none border border-success/40 bg-success/10 text-success",
  intermediate:
    "rounded-none border border-amber-500/40 bg-amber-500/10 text-amber-300",
  advanced:
    "rounded-none border border-destructive/45 bg-destructive/10 text-destructive",
};

export const tagBadgeClassName =
  "rounded-none border border-border bg-surface-2 text-text-secondary";
