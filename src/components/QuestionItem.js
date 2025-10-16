import React from "react";

function QuestionItem({ question, onDelete, onUpdate }) {
  const { prompt, answers, correctIndex } = question;

  function handleChange(e) {
    onUpdate(parseInt(e.target.value));
  }

  return (
    <div>
      <h3>{prompt}</h3>
      <ol type="A">
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ol>
      <label>
        Correct Answer:
        <select value={correctIndex} onChange={handleChange}>
          {answers.map((ans, index) => (
            <option key={index} value={index}>
              {ans}
            </option>
          ))}
        </select>
      </label>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default QuestionItem;
