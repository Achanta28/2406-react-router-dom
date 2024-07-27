import React from 'react'
import { Link } from 'react-router-dom'
import TopNavigation from './TopNavigation'

function Dashboard() {
  return (
    <div>
        <TopNavigation/>
        <h2>Dashboard</h2>

        <br></br>
        {/* <Link to="*">PageNotFound</Link> */}
    </div>
  )
}

export default Dashboard