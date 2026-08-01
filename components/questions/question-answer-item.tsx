"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import { ANSWER_CLAMP_CHARS, type QuestionItem } from "@/lib/mock-questions";

type QuestionAnswerItemProps = {
  item: QuestionItem;
};

export function QuestionAnswerItem({ item }: QuestionAnswerItemProps) {
  const [open, setOpen] = useState(false);
  const needsTruncate = item.answer.length > ANSWER_CLAMP_CHARS;

  return (
    <article className="border-b border-border py-6 last:border-b-0 transition-colors hover:bg-surface-1/50">
      <div className="flex gap-4 md:gap-5 px-4 md:px-8">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h2 className="text-card-title text-text-primary">
              {item.question}
            </h2>
          </div>

          <Collapsible open={open} onOpenChange={setOpen}>
            <p
              className={cn(
                "text-body text-text-secondary",
                !open && needsTruncate && "line-clamp-2",
              )}
            >
              {item.answer}
            </p>
            {needsTruncate ? (
              <CollapsibleTrigger className="mt-2 inline-flex items-center gap-1 text-meta font-medium text-accent hover:text-accent/90 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50">
                {open ? (
                  <>
                    See less
                    <ChevronUp
                      aria-hidden
                      data-icon="inline-end"
                      className="size-4"
                    />
                  </>
                ) : (
                  <>
                    See more
                    <ChevronDown
                      aria-hidden
                      data-icon="inline-end"
                      className="size-4"
                    />
                  </>
                )}
              </CollapsibleTrigger>
            ) : null}
          </Collapsible>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Badge
              variant="secondary"
              className="rounded-none border border-border text-text-secondary"
            >
              {item.topic}
            </Badge>
            {item.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-none border border-border text-text-secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
