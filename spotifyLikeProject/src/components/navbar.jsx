import React from 'react'
import { NavLink } from 'react-router-dom'

function navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">Spotify Like</NavLink>
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="/signup">Sign Up</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default navbar
