import { QuestionAnswerItem } from "@/components/questions/question-answer-item";
import { MOCK_QUESTIONS } from "@/lib/mock-questions";

export function QuestionList() {
  return (
    <section id="questions">
      <div>
        {MOCK_QUESTIONS.map((item) => (
          <QuestionAnswerItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
