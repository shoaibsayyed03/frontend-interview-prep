export const QUESTION_SEARCH_PARAMS = {
  topic: "topic",
  type: "type",
  difficulty: "difficulty",
  query: "q",
} as const;

export type QuestionSearchFilters = {
  topic: string;
  type: string;
  difficulty: string;
  query: string;
};

export function parseQuestionSearchParams(
  params: URLSearchParams,
): QuestionSearchFilters {
  return {
    topic: params.get(QUESTION_SEARCH_PARAMS.topic) ?? "any",
    type: params.get(QUESTION_SEARCH_PARAMS.type) ?? "any",
    difficulty: params.get(QUESTION_SEARCH_PARAMS.difficulty) ?? "any",
    query: params.get(QUESTION_SEARCH_PARAMS.query) ?? "",
  };
}

export function buildQuestionSearchParams(
  filters: QuestionSearchFilters,
): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.topic && filters.topic !== "any") {
    params.set(QUESTION_SEARCH_PARAMS.topic, filters.topic);
  }
  if (filters.type && filters.type !== "any") {
    params.set(QUESTION_SEARCH_PARAMS.type, filters.type);
  }
  if (filters.difficulty && filters.difficulty !== "any") {
    params.set(QUESTION_SEARCH_PARAMS.difficulty, filters.difficulty);
  }

  const query = filters.query.trim();
  if (query) {
    params.set(QUESTION_SEARCH_PARAMS.query, query);
  }

  return params;
}

export function questionSearchHref(
  pathname: string,
  filters: QuestionSearchFilters,
): string {
  const params = buildQuestionSearchParams(filters);
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}
