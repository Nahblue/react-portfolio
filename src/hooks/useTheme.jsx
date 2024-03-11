import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme())

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme) {
      return savedTheme
    }
   
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return userPrefersDark ? 'dark' : 'light'

  }

  useEffect(() => {
    localStorage.setItem('theme', theme)

    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  )
}
