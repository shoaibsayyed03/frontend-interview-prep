export const ALLOWED_TOPICS = [
  "javascript",
  "react",
  "theory",
  "seo",
  "system-design",
  "dsa",
] as const;

export type TopicSlug = (typeof ALLOWED_TOPICS)[number];

export const QUESTION_TYPES = [
  "conceptual",
  "tricky",
  "scenario",
  "mcq",
  "coding",
  "system-design",
] as const;

export type QuestionType = (typeof QUESTION_TYPES)[number];

export const DIFFICULTIES = ["beginner", "intermediate", "advanced"] as const;

export type Difficulty = (typeof DIFFICULTIES)[number];

export const TOPIC_LABELS: Record<TopicSlug, string> = {
  javascript: "JavaScript",
  react: "React",
  theory: "Frontend Theory",
  seo: "SEO",
  "system-design": "System Design",
  dsa: "Coding / DSA",
};

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  conceptual: "Conceptual",
  tricky: "Tricky",
  scenario: "Scenario",
  mcq: "MCQ",
  coding: "Coding",
  "system-design": "System Design",
};

export const DIFFICULTY_LABELS: Record<Difficulty, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

export function isAllowedTopic(value: string): value is TopicSlug {
  return (ALLOWED_TOPICS as readonly string[]).includes(value);
}
