import type { Question } from "#velite";

export type GetQuestionsParams = {
  topic?: string;
  type?: string;
  difficulty?: string;
  query?: string;
};

function normalizeFilter(value: string | undefined) {
  if (!value || value === "any") return undefined;
  return value;
}

function matchesQuery(item: Question, query: string) {
  const needle = query.trim().toLowerCase();
  if (!needle) return true;

  const haystack = [item.title, ...item.tags].join(" ").toLowerCase();

  return haystack.includes(needle);
}

export function filterQuestions(
  items: Question[],
  params: GetQuestionsParams = {},
): Question[] {
  const topic = normalizeFilter(params.topic);
  const type = normalizeFilter(params.type);
  const difficulty = normalizeFilter(params.difficulty);
  const query = params.query?.trim() ?? "";

  return items
    .filter((item) => {
      if (topic && item.topic !== topic) return false;
      if (type && item.type !== type) return false;
      if (difficulty && item.difficulty !== difficulty) return false;
      if (!matchesQuery(item, query)) return false;
      return true;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export type { Question };
