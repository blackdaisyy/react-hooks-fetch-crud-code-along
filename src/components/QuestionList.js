import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  return (
    <section>
      <h2>Questions</h2>
      {questions.map((q) => (
        <QuestionItem
          key={q.id}
          question={q}
          onDelete={() => onDeleteQuestion(q.id)}
          onUpdate={(newIndex) => onUpdateQuestion(q.id, newIndex)}
        />
      ))}
    </section>
  );
}

export default QuestionList;
