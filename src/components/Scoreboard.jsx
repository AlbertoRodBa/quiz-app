import React from 'react';

function Scoreboard({ score, totalQuestions, onRestart }) {
  return (
    <div>
      <h2>Your score: {score} / {totalQuestions}</h2>
      <button onClick={onRestart}>Play again</button>
    </div>
  );
}

export default Scoreboard;
