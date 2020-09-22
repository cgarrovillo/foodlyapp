import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [isShown, setIsShown] = useState(false)
  return (
    <nav className="navbar">
      <div className="navbar__brand">
        <a>Brand</a>
      </div>
      <div className="navbar__container">
        <ul className={`navbar__menu ${isShown ? 'open' : ''}`}>
          <li>
            <a>Tag</a>
          </li>
          <li>
            <a>Tag</a>
          </li>
          <li>
            <a>Tag</a>
          </li>
        </ul>
        <button
          className="navbar__trigger"
          onClick={(e) => setIsShown(!isShown)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  )
}
