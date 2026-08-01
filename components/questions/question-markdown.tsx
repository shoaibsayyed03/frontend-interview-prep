import { cn } from "@/lib/utils";

type QuestionMarkdownProps = {
  html: string;
  className?: string;
};

export function QuestionMarkdown({ html, className }: QuestionMarkdownProps) {
  return (
    <div
      className={cn(
        "question-answer-prose text-body text-text-secondary",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
