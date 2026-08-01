"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
} from "react";

import {
  McqQuestionItem,
  QuestionMetaRow,
} from "@/components/questions/mcq-question-item";
import { QuestionMarkdown } from "@/components/questions/question-markdown";
import { Collapsible } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type { Question } from "@/lib/filter-questions";

type QuestionAnswerItemProps = {
  item: Question;
  index: number;
};

export function QuestionAnswerItem({ item, index }: QuestionAnswerItemProps) {
  if (item.type === "mcq") {
    return <McqQuestionItem item={item} />;
  }

  return <StandardQuestionItem item={item} index={index} />;
}

function StandardQuestionItem({ item, index }: QuestionAnswerItemProps) {
  const [open, setOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);
  const [hasOverflow, setHasOverflow] = useState(false);

  useLayoutEffect(() => {
    const el = answerRef.current;
    if (!el) return;

    const measure = () => {
      if (open) return;
      setHasOverflow(el.scrollHeight > el.clientHeight + 1);
    };

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, [item.body, open]);

  const showToggle = hasOverflow;

  const toggleOpen = useCallback(() => {
    if (!showToggle) return;
    setOpen((prev) => !prev);
  }, [showToggle]);

  const handleCardClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (!showToggle) return;
      const target = event.target as HTMLElement;
      if (target.closest("a")) return;
      toggleOpen();
    },
    [showToggle, toggleOpen],
  );

  const handleCardKeyDown = useCallback(
    (event: KeyboardEvent<HTMLElement>) => {
      if (!showToggle) return;
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleOpen();
    },
    [showToggle, toggleOpen],
  );

  return (
    <article className="border-b border-border py-6 last:border-b-0 transition-colors hover:bg-surface-1/50">
      <div className="flex gap-4 md:gap-5 px-4 md:px-8">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <Collapsible open={open} onOpenChange={setOpen}>
            <div
              role={showToggle ? "button" : undefined}
              tabIndex={showToggle ? 0 : undefined}
              aria-expanded={showToggle ? open : undefined}
              onClick={handleCardClick}
              onKeyDown={handleCardKeyDown}
              className={cn(
                "flex flex-col gap-3 outline-none",
                showToggle &&
                  "cursor-pointer rounded-sm focus-visible:ring-3 focus-visible:ring-ring/50",
              )}
            >
              <h2 className="text-card-title text-text-primary">
                <span className="font-semibold">
                  {String(index + 1).padStart(2, "0")}.
                </span>{" "}
                {item.title}
              </h2>

              <div ref={answerRef} className={cn(!open && "line-clamp-2")}>
                <QuestionMarkdown html={item.body} />
              </div>

              {showToggle ? (
                <span className="inline-flex items-center gap-1 text-meta font-medium text-text-muted">
                  {open ? (
                    <>
                      See less
                      <ChevronUp aria-hidden className="size-4" />
                    </>
                  ) : (
                    <>
                      See more
                      <ChevronDown aria-hidden className="size-4" />
                    </>
                  )}
                </span>
              ) : null}
            </div>
          </Collapsible>

          <QuestionMetaRow item={item} />
        </div>
      </div>
    </article>
  );
}
