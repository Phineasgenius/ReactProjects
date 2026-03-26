import React from 'react';
import './Home.css';

function Home({ onNavigate }) {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to QuizApp</h1>
        <p>Test your knowledge with our interactive quiz</p>
        <p className="home-description">
          Challenge yourself with questions on various topics including general knowledge, 
          history, science, and more. See how much you know!
        </p>
        <button className="start-quiz-btn" onClick={() => onNavigate('quiz')}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;
