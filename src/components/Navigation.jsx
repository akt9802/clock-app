import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h2>🌍 Clock App</h2>
        </div>
        <div className="nav-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            end
          >
            World Clock
          </NavLink>
          <NavLink 
            to="/indian-clock" 
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            Indian Clock
          </NavLink>
        </div>
      </div>
    </nav>
  )
}
