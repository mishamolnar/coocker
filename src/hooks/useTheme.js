import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const useTheme = () => {
  const context = useContext(ThemeContext) //{color: 'blue'} in our case  

  if (context === undefined) {
    throw new Error("useTheme() is used outside a ThemeProvider")
  }

  return context
}