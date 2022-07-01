import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR': 
      return { ...state, color: action.payload }
    case 'CHANGE_MODE': {
      return { ...state, mode: action.payload }
    }
    default:
      return state
  }
}

export function ThemeProvider({ children }) {
  const [state, dispach] = useReducer(themeReducer, {
    color: 'rgba(178, 126, 59, 0.700)',
    mode: 'light'
  })

  const changeColor = (color) => {
    dispach({ type: 'CHANGE_COLOR', payload: color })
  }

  const changeMode = (mode) => {
    dispach({type: 'CHANGE_MODE', payload: mode})
  }
  
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}