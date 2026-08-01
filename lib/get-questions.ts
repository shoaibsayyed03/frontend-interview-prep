import { questions } from "#velite";

import type { TopicSlug } from "@/lib/content-taxonomy";
import { ALLOWED_TOPICS } from "@/lib/content-taxonomy";

import {
  filterQuestions,
  type GetQuestionsParams,
  type Question,
} from "./filter-questions";

export type { GetQuestionsParams, Question };

export function getQuestions(params: GetQuestionsParams = {}): Question[] {
  return filterQuestions(questions, params);
}

export function getAllQuestions(): Question[] {
  return [...questions].sort((a, b) => a.title.localeCompare(b.title));
}

export function getQuestionStats() {
  const topicsWithContent = new Set<TopicSlug>();
  for (const item of questions) {
    if ((ALLOWED_TOPICS as readonly string[]).includes(item.topic)) {
      topicsWithContent.add(item.topic as TopicSlug);
    }
  }

  return {
    total: questions.length,
    topicCount: topicsWithContent.size,
  };
}

export { filterQuestions };
