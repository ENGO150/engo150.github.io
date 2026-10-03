"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark")
  }, [])

  const flip = () => {
    const next = dark ? "light" : "dark"
    document.documentElement.dataset.theme = next
    try { localStorage.setItem("satan-theme", next) } catch {}
    setDark(!dark)
  }

  return (
    <button className="theme-btn" onClick={flip} aria-label="Toggle colour scheme">
      {dark ? "[light]" : "[dark]"}
    </button>
  )
}
