import React, { useState, useEffect } from "react";
import QuestionList from "./components/QuestionList";
import NewQuestionForm from "./components/NewQuestionForm";

function App() {
  const [questions, setQuestions] = useState([]);

  // Load questions on mount
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then(setQuestions)
      .catch(console.error);
  }, []);

  // Add question
  function handleAddQuestion(newQuestion) {
    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuestion),
    })
      .then((res) => res.json())
      .then((created) => setQuestions([...questions, created]));
  }

  // Delete question
  function handleDeleteQuestion(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => setQuestions((prev) => prev.filter((q) => q.id !== id)));
  }

  // Update correctIndex
  function handleUpdateQuestion(id, correctIndex) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex }),
    })
      .then((res) => res.json())
      .then((updated) =>
        setQuestions((prev) =>
          prev.map((q) => (q.id === updated.id ? updated : q))
        )
      );
  }

  return (
    <div>
      <h1>Quiz Admin</h1>
      <NewQuestionForm onAddQuestion={handleAddQuestion} />
      <QuestionList
        questions={questions}
        onDeleteQuestion={handleDeleteQuestion}
        onUpdateQuestion={handleUpdateQuestion}
      />
    </div>
  );
}

export default App;
