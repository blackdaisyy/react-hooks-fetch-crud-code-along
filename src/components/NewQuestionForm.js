import React, { useState } from "react";

function NewQuestionForm({ onAddQuestion }) {
  const [prompt, setPrompt] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctIndex, setCorrectIndex] = useState(0);

  function handleChangeAnswer(index, value) {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newQuestion = { prompt, answers, correctIndex };
    onAddQuestion(newQuestion);
    // Reset form
    setPrompt("");
    setAnswers(["", "", "", ""]);
    setCorrectIndex(0);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>New Question</h2>
      <label>
        Prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>

      {answers.map((ans, index) => (
        <label key={index}>
          Answer {index + 1}:
          <input
            type="text"
            value={ans}
            onChange={(e) => handleChangeAnswer(index, e.target.value)}
          />
        </label>
      ))}

      <label>
        Correct Answer:
        <select
          value={correctIndex}
          onChange={(e) => setCorrectIndex(parseInt(e.target.value))}
        >
          {answers.map((_, index) => (
            <option key={index} value={index}>
              {`Answer ${index + 1}`}
            </option>
          ))}
        </select>
      </label>

      <button type="submit">Add Question</button>
    </form>
  );
}

export default NewQuestionForm;
