import React, { useState } from 'react'
import { HiMoon } from 'react-icons/hi'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggle = () => {
    document.body.classList.toggle('dark')
    setIsDark(!isDark)
  }

  return (
    <button onClick={toggle}>
      <HiMoon size="1.4em" />
    </button>
  )
}
