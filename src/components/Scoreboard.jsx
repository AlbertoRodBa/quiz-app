import React from 'react';

function Scoreboard({ score, totalQuestions, onRestart }) {
  return (
    <div>
      <h2>Tu puntuación: {score} / {totalQuestions}</h2>
      <button onClick={onRestart}>Jugar de nuevo</button>
    </div>
  );
}

export default Scoreboard;
