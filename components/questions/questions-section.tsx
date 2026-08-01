"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";

import { FilterBar } from "@/components/layout/filter-bar";
import { QuestionAnswerItem } from "@/components/questions/question-answer-item";
import { filterQuestions, type Question } from "@/lib/filter-questions";
import {
  parseQuestionSearchParams,
  questionSearchHref,
  type QuestionSearchFilters,
} from "@/lib/question-search-params";

const SEARCH_DEBOUNCE_MS = 300;

type QuestionsSectionProps = {
  initialQuestions: Question[];
};

export function QuestionsSection({ initialQuestions }: QuestionsSectionProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlFilters = useMemo(
    () => parseQuestionSearchParams(searchParams),
    [searchParams],
  );

  const urlQuery = urlFilters.query;
  const [keyword, setKeyword] = useState(urlQuery);
  const [prevUrlQuery, setPrevUrlQuery] = useState(urlQuery);

  if (urlQuery !== prevUrlQuery) {
    setPrevUrlQuery(urlQuery);
    setKeyword(urlQuery);
  }

  const replaceFilters = useCallback(
    (patch: Partial<QuestionSearchFilters>) => {
      const next: QuestionSearchFilters = {
        ...urlFilters,
        query: keyword,
        ...patch,
      };
      router.replace(questionSearchHref(pathname, next), { scroll: false });
    },
    [pathname, router, urlFilters, keyword],
  );

  useEffect(() => {
    const trimmedInput = keyword.trim();
    const trimmedUrl = urlFilters.query.trim();
    if (trimmedInput === trimmedUrl) return;

    const timeoutId = window.setTimeout(() => {
      replaceFilters({ query: keyword });
    }, SEARCH_DEBOUNCE_MS);

    return () => window.clearTimeout(timeoutId);
  }, [keyword, urlFilters.query, replaceFilters]);

  const filtered = useMemo(
    () =>
      filterQuestions(initialQuestions, {
        topic: urlFilters.topic,
        type: urlFilters.type,
        difficulty: urlFilters.difficulty,
        query: keyword,
      }),
    [initialQuestions, urlFilters, keyword],
  );

  return (
    <>
      <FilterBar
        keyword={keyword}
        onKeywordChange={setKeyword}
        topic={urlFilters.topic}
        onTopicChange={(value) => replaceFilters({ topic: value })}
        questionType={urlFilters.type}
        onQuestionTypeChange={(value) => replaceFilters({ type: value })}
        difficulty={urlFilters.difficulty}
        onDifficultyChange={(value) => replaceFilters({ difficulty: value })}
      />
      <QuestionList items={filtered} />
    </>
  );
}

type QuestionListProps = {
  items: Question[];
};

function QuestionList({ items }: QuestionListProps) {
  return (
    <section id="questions" className="flex-1">
      <div>
        {items.length === 0 ? (
          <p className="py-10 px-4 md:px-8 text-body text-text-muted">
            No questions match these filters. Try clearing a filter or
            broadening your search.
          </p>
        ) : (
          items.map((item, index) => (
            <QuestionAnswerItem key={item.id} item={item} index={index} />
          ))
        )}
      </div>
    </section>
  );
}
