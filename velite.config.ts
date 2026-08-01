import { basename, extname, relative } from "node:path";

import rehypePrettyCode from "rehype-pretty-code";
import { context, defineCollection, defineConfig, s } from "velite";

import { ALLOWED_TOPICS, isAllowedTopic } from "./lib/content-taxonomy";

const mcqOption = s.object({
  id: s.string(),
  text: s.string(),
});

function fileRelativePath() {
  const { file } = context();
  return relative(file.config.root, file.path).replace(/\\/g, "/");
}

function topicFromPath(relativePath: string) {
  const segments = relativePath.split("/");
  if (segments[0] !== "questions" || segments.length < 3) {
    throw new Error(
      `Expected content path questions/{topic}/{file}.md(x), got "${relativePath}"`,
    );
  }
  return segments[1];
}

function slugFromPath(relativePath: string) {
  const filename = segmentsFilename(relativePath);
  return basename(filename, extname(filename));
}

function segmentsFilename(relativePath: string) {
  return relativePath.split("/").pop() ?? relativePath;
}

const questions = defineCollection({
  name: "Question",
  pattern: "questions/**/*.{md,mdx}",
  schema: s
    .object({
      title: s.string(),
      type: s.enum([
        "conceptual",
        "tricky",
        "scenario",
        "mcq",
        "coding",
        "system-design",
      ]),
      difficulty: s.enum(["beginner", "intermediate", "advanced"]),
      tags: s.array(s.string()).default([]),
      lastUpdated: s.isodate(),
      options: s.array(mcqOption).optional(),
      correctOptionId: s.string().optional(),
      explanation: s.string().optional(),
      body: s.markdown(),
      slug: s.string().optional(),
    })
    .transform((data) => {
      const { file } = context();
      const relativePath = fileRelativePath();
      const topic = topicFromPath(relativePath);
      const slug = slugFromPath(relativePath);

      if (!isAllowedTopic(topic)) {
        throw new Error(
          `Invalid topic folder "${topic}" in ${relativePath}. Allowed: ${ALLOWED_TOPICS.join(", ")}`,
        );
      }

      if (data.type === "mcq") {
        if (!data.options?.length || !data.correctOptionId) {
          throw new Error(
            `MCQ "${relativePath}" must include options and correctOptionId`,
          );
        }
        const optionIds = new Set(data.options.map((option) => option.id));
        if (!optionIds.has(data.correctOptionId)) {
          throw new Error(
            `MCQ "${relativePath}": correctOptionId "${data.correctOptionId}" does not match any options[].id`,
          );
        }
      }

      const plain = file.plain ?? "";
      return {
        ...data,
        slug,
        topic,
        id: `${topic}-${slug}`,
        plain,
      };
    }),
});

export default defineConfig({
  root: "content",
  strict: true,
  collections: { questions },
  markdown: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          keepBackground: false,
        },
      ],
    ],
  },
  prepare(data) {
    const items = data.questions as Array<{ id: string; title: string }>;
    const seen = new Map<string, string>();

    for (const item of items) {
      const existing = seen.get(item.id);
      if (existing) {
        throw new Error(
          `Duplicate question id "${item.id}" (${existing} conflicts with another file)`,
        );
      }
      seen.set(item.id, item.title);
    }
  },
});
