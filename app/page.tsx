import { FilterBar } from "@/components/layout/filter-bar";
import { HeroSection } from "@/components/layout/hero-section";
import { PageFrame } from "@/components/layout/page-frame";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { QuestionList } from "@/components/questions/question-list";

export default function Index() {
  return (
    <PageFrame>
      <div className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="mx-auto flex-1 border-x border-border max-w-7xl w-full">
          <HeroSection />
          <FilterBar />
          <QuestionList />
        </main>
        <SiteFooter />
      </div>
    </PageFrame>
  );
}
