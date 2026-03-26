import React, { useState } from 'react';
import './Quiz.css';
import QuestionList from './QuestionList';

const allQuestions = [
  {
    question: "What is 2+2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "What is capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    answer: "Leonardo da Vinci"
  },
  {
    question: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O"
  },
  {
    question: "How many continents are there on Earth?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  }
];

const getRandomizedQuestions = () => {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, 5);
};

function Quiz({ onNavigate }) {
  const [questions, setQuestions] = useState(getRandomizedQuestions());
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
  };

  const handleNextQuestion = () => {
    if (currentAnswer === questions[currentQuestionIndex].answer) {
      setScore(prev => prev + 1);
    }
    setCurrentQuestionIndex(prev => prev + 1);
    setCurrentAnswer(null);
  };

  const handleRestartQuiz = () => {
    setQuestions(getRandomizedQuestions());
    setCurrentQuestionIndex(0);
    setCurrentAnswer(null);
    setScore(0);
  };

  return (
    <div className="quiz-card">
      <h1>Quiz App</h1>
      {currentQuestionIndex < questions.length ? (
        <>
          <QuestionList question={questions[currentQuestionIndex]} handleClick={handleClick} currentAnswer={currentAnswer} />
          <button className="next-btn" onClick={handleNextQuestion} disabled={!currentAnswer}>Next Question</button>
        </>
      ) : (
        <div>
          <div className="score">Quiz Complete! Your score: {score}/{questions.length}</div>
          <div className="button-group">
            <button className="restart-btn" onClick={handleRestartQuiz}>Restart Quiz</button>
            <button className="home-btn" onClick={() => onNavigate('home')}>Back to Home</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;