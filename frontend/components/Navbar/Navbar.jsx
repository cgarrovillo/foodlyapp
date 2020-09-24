import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import Logo from '../Brand/Logo'
import DarkModeToggle from '../Interaction/DarkModeToggle'

export default function Navbar() {
  const [isShown, setIsShown] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <Logo />
      </div>
      <button className="navbar__trigger" onClick={(e) => setIsShown(!isShown)}>
        <FaBars size="1.4em" />
      </button>
      <div className={`navbar__container ${isShown ? 'open' : ''}`}>
        <ul className="navbar__menu">
          <li>
            <a>Tag</a>
          </li>
          <li>
            <a>Tag</a>
          </li>
          <li>
            <a>Tag</a>
          </li>
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
