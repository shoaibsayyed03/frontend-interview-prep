"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { QuestionMarkdown } from "@/components/questions/question-markdown";
import { cn } from "@/lib/utils";
import type { Question } from "@/lib/filter-questions";
import {
  difficultyBadgeClassName,
  tagBadgeClassName,
  topicBadgeClassName,
  typeBadgeClassName,
} from "@/lib/question-badge-styles";
import {
  DIFFICULTY_LABELS,
  QUESTION_TYPE_LABELS,
  TOPIC_LABELS,
} from "@/lib/content-taxonomy";

type McqQuestionItemProps = {
  item: Question;
};

export function McqQuestionItem({ item }: McqQuestionItemProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const answered = selectedId != null;
  const options = item.options ?? [];

  return (
    <article className="border-b border-border py-6 last:border-b-0 transition-colors hover:bg-surface-1/50">
      <div className="flex gap-4 md:gap-5 px-4 md:px-8">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          <h2 className="text-card-title text-text-primary">{item.title}</h2>

          {item.body ? (
            <QuestionMarkdown html={item.body} className="text-text-muted" />
          ) : null}

          <div
            className="flex flex-col gap-2"
            role="group"
            aria-label="Answer options"
          >
            {options.map((option) => {
              const isSelected = selectedId === option.id;
              const isCorrect = option.id === item.correctOptionId;
              let stateClass =
                "border-border bg-surface-2 text-text-secondary hover:bg-surface-3";

              if (answered && isSelected && isCorrect) {
                stateClass = "border-success/50 bg-success/10 text-success";
              } else if (answered && isSelected && !isCorrect) {
                stateClass =
                  "border-destructive/50 bg-destructive/10 text-destructive";
              } else if (answered && !isSelected && isCorrect) {
                stateClass = "border-success/40 bg-success/5 text-success";
              } else if (answered) {
                stateClass =
                  "border-border bg-surface-1 text-text-muted opacity-80";
              }

              return (
                <Button
                  key={option.id}
                  type="button"
                  variant="outline"
                  disabled={answered}
                  onClick={() => setSelectedId(option.id)}
                  className={cn(
                    "h-auto min-h-9 justify-start rounded-none px-3 py-2 text-left text-body font-normal whitespace-normal",
                    stateClass,
                  )}
                >
                  <span className="mr-2 font-medium uppercase">
                    {option.id}.
                  </span>
                  {option.text}
                </Button>
              );
            })}
          </div>

          {answered && item.explanation ? (
            <p className="text-body text-text-secondary">{item.explanation}</p>
          ) : null}

          <QuestionMetaRow item={item} />
        </div>
      </div>
    </article>
  );
}

function QuestionMetaRow({ item }: { item: Question }) {
  return (
    <div className="flex flex-wrap items-center gap-2 pt-1">
      <Badge variant="secondary" className={topicBadgeClassName}>
        {TOPIC_LABELS[item.topic as keyof typeof TOPIC_LABELS] ?? item.topic}
      </Badge>
      <Badge variant="secondary" className={typeBadgeClassName}>
        {QUESTION_TYPE_LABELS[item.type]}
      </Badge>
      <Badge
        variant="secondary"
        className={difficultyBadgeClassName[item.difficulty]}
      >
        {DIFFICULTY_LABELS[item.difficulty]}
      </Badge>
      {item.tags.map((tag) => (
        <Badge key={tag} variant="secondary" className={tagBadgeClassName}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}

export { QuestionMetaRow };
