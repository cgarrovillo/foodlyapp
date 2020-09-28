import React, { useState } from 'react'
import Link from 'next/link'
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
          <li onClick={(e) => setIsShown(false)}>
            <a>Tag</a>
          </li>
          <li onClick={(e) => setIsShown(false)}>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li onClick={(e) => setIsShown(false)}>
            <Link href="/signin">Sign in</Link>
          </li>
          <li onClick={(e) => setIsShown(false)}>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  )
}
