import React, { useState, useEffect } from 'react'
import { HiMoon } from 'react-icons/hi'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false)

  const toggle = () => {
    document.body.classList.toggle('dark')
    setIsDark(!isDark)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const a = window.matchMedia('(prefers-color-scheme: dark)')
      if (a.matches) document.body.classList.toggle('dark')
    }
  }, [])

  return (
    <button onClick={toggle}>
      <HiMoon size="1.4em" />
    </button>
  )
}
