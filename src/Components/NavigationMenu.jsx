import React from 'react'
import { Link, Outlet } from 'react-router-dom'
 import './NavigationMenu.css';

const NavigationMenu = () => {
  return (
    
    <div className='links conatainer'>
      <div className='row'>
      <nav className="navigation-menu">
        <ul className='nav  justify-content-center'>
          <li><Link to="/" className="nav-item menu-link">All</Link></li>
          <li><Link to="/full-stack" className="nav-item menu-link">Full Stack</Link></li>
          <li><Link to="/data-science" className="nav-item menu-link">Data Science</Link></li>
          <li><Link to="/cyber-security" className="nav-item menu-link">Cyber Security</Link></li>
          <li><Link to="/block-chain" className=" nav-item menu-link">Blockchain</Link></li>
        </ul>
      </nav>
      </div>
      <Outlet/>
    </div>
  )
}

export default NavigationMenu;