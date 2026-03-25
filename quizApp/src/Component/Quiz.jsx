import React, { useState } from 'react';
import './Quiz.css';
import QuestionList from './QuestionList';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAnswer(option);
  };

  const handleNextQuestion = () => {
    if (currentAnswer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setCurrentAnswer(null);
  };

  const questions = [
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
    }
  ];

  return (
    <div className="quiz-card">
      <h1>Quiz App</h1>
      {currentQuestionIndex < questions.length ? (
        <>
          <QuestionList question={questions[currentQuestionIndex]} handleClick={handleClick} currentAnswer={currentAnswer} />
          <button onClick={handleNextQuestion} disabled={!currentAnswer}>Next Question</button>
        </>
      ) : (
        <div className="score">Quiz Complete! Your score: {score}</div>
      )}
    </div>
  );
}

export default Quiz;