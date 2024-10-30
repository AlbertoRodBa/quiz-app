import React from 'react';

function QuestionCard({ questionData, onAnswer }) {
  const { question, correct_answer, incorrect_answers } = questionData;

  // Mezcla las respuestas para que la correcta no siempre esté en la misma posición
  const options = [...incorrect_answers];
  const randomIndex = Math.floor(Math.random() * (options.length + 1));
  options.splice(randomIndex, 0, correct_answer);

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: question }} />
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswer(option === correct_answer)}
          dangerouslySetInnerHTML={{ __html: option }}
        />
      ))}
    </div>
  );
}

export default QuestionCard;
