import React from 'react';

function QuestionList({ question, handleClick, currentAnswer }) {
  return (
    <div>
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index} onClick={() => handleClick(option)} className={currentAnswer === option ? 'selected' : ''}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;