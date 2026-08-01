import {
  DIFFICULTIES,
  DIFFICULTY_LABELS,
  QUESTION_TYPES,
  QUESTION_TYPE_LABELS,
  TOPIC_LABELS,
  ALLOWED_TOPICS,
} from "@/lib/content-taxonomy";

export type FilterOption = {
  value: string;
  label: string;
};

export type FilterDropdown = {
  id: string;
  label: string;
  options: FilterOption[];
};

const anyOption: FilterOption = { value: "any", label: "Any" };

export const TOPIC_FILTER_OPTIONS: FilterOption[] = [
  anyOption,
  ...ALLOWED_TOPICS.map((slug) => ({
    value: slug,
    label: TOPIC_LABELS[slug],
  })),
];

export const TYPE_FILTER_OPTIONS: FilterOption[] = [
  anyOption,
  ...QUESTION_TYPES.map((value) => ({
    value,
    label: QUESTION_TYPE_LABELS[value],
  })),
];

export const DIFFICULTY_FILTER_OPTIONS: FilterOption[] = [
  anyOption,
  ...DIFFICULTIES.map((value) => ({
    value,
    label: DIFFICULTY_LABELS[value],
  })),
];

export const FILTER_DROPDOWNS: FilterDropdown[] = [
  { id: "topic", label: "Topic", options: TOPIC_FILTER_OPTIONS },
  { id: "type", label: "Question Type", options: TYPE_FILTER_OPTIONS },
  {
    id: "difficulty",
    label: "Difficulty",
    options: DIFFICULTY_FILTER_OPTIONS,
  },
];
