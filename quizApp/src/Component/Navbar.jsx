import React from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => onNavigate('home')}>
          QuizApp
        </div>
        <ul className="navbar-menu">
          <li className={currentPage === 'home' ? 'active' : ''}>
            <button onClick={() => onNavigate('home')}>Home</button>
          </li>
          <li className={currentPage === 'learn' ? 'active' : ''}>
            <button onClick={() => onNavigate('learn')}>Learn</button>
          </li>
          <li className={currentPage === 'quiz' ? 'active' : ''}>
            <button onClick={() => onNavigate('quiz')}>Quiz</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
