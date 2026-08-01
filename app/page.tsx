import { Suspense } from "react";

import { HeroSection } from "@/components/layout/hero-section";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { QuestionsSection } from "@/components/questions/questions-section";
import { getAllQuestions, getQuestionStats } from "@/lib/get-questions";

export default function Index() {
  const questions = getAllQuestions();
  const { total, topicCount } = getQuestionStats();

  const statLabel = `${total} questions across ${topicCount} topics`;

  return (
    <PageFrame>
      <div className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="mx-auto flex-1 border-x border-border max-w-7xl w-full">
          <HeroSection statLabel={statLabel} />
          <Suspense
            fallback={
              <div
                className="min-h-24 border-y border-border bg-background"
                aria-hidden
              />
            }
          >
            <QuestionsSection initialQuestions={questions} />
          </Suspense>
        </main>
        <SiteFooter />
      </div>
    </PageFrame>
  );
}
