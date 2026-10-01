import { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

export default function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}