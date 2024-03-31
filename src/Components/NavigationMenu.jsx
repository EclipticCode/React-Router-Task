import React from 'react'
import { Link } from 'react-router-dom'

const NavigationMenu = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/all">All</Link></li>
          <li><Link to="/full-stack">Full Stack</Link></li>
          <li><Link to="/data-science">Data Science</Link></li>
          <li><Link to="/cyber-security">Cyber Security</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default NavigationMenu