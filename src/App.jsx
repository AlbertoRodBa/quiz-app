import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import QuestionCard from './components/QuestionCard';
import Scoreboard from './components/Scoreboard';
import Header from './components/Header';
import './components/Header.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://opentdb.com/api.php?amount=10&type=multiple');
        setQuestions(response.data.results);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prevScore) => prevScore + 1);
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setGameOver(true);
    }
  };

  const handleRestart = () => {
    setGameOver(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="App">
      <Header title="Trivia Quiz" /> {/* Aquí llamas al componente Header */}
      {gameOver ? (
        <Scoreboard score={score} totalQuestions={questions.length} onRestart={handleRestart} />
      ) : (
        questions.length > 0 && (
          <QuestionCard
            questionData={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )
      )}
    </div>
  );
  
}

export default App;