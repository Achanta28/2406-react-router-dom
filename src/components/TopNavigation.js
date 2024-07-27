import React from 'react'
import { Link } from 'react-router-dom'

function TopNavigation() {
  return (
    <div>
        <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/message">Messages</Link>
        <Link to="/leaves">Leaves</Link>
        <Link to="/">Signout</Link>
        </nav>
        
    </div>
  )
}

export default TopNavigation