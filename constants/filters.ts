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
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "frontend-theory", label: "Frontend Theory" },
  { value: "seo", label: "SEO" },
  { value: "system-design", label: "System Design" },
  { value: "coding-dsa", label: "Coding / DSA" },
];

export const TAG_FILTER_OPTIONS: FilterOption[] = [
  anyOption,
  { value: "closures", label: "Closures" },
  { value: "hooks", label: "Hooks" },
  { value: "virtual-dom", label: "Virtual DOM" },
  { value: "performance", label: "Performance" },
  { value: "accessibility", label: "Accessibility" },
];

/** Filter bar dropdowns — labels mirror the reference layout, options from the PRD taxonomy. */
export const FILTER_DROPDOWNS: FilterDropdown[] = [
  { id: "topic", label: "Topic", options: TOPIC_FILTER_OPTIONS },
  { id: "tags", label: "Tags", options: TAG_FILTER_OPTIONS },
];
