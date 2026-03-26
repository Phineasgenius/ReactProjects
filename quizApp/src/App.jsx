import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import Learn from './Component/Learn'
import Quiz from './Component/Quiz'
import Weather from './Component/Weather'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (page) => {
    setCurrentPage(page)
  }

  return (
    <div>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
      {currentPage === 'learn' && <Learn />}
      {currentPage === 'quiz' && <Quiz onNavigate={handleNavigate} />}
      {currentPage === 'weather' && <Weather />}
    </div>
  )
}

export default App
