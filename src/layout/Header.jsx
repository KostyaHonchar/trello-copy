import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
   return (
      <header className='header'>
         <div className='header-logo'>
            <Link to="/home">
               <span className='logo-orange'>Trello</span>
               <span className='logo-white'>Copy</span>
            </Link>
         </div>
         <div className='header-links'>
            <ul>
               <li><Link to="/home">Home</Link></li>
               <li><Link to="/">Your Board</Link></li>
               <li><a href='https://github.com/KostyaHonchar/trello-copy/tree/master' target='_blank'>Source Code</a></li>
            </ul>
         </div>
      </header>
   )
}

export default Header