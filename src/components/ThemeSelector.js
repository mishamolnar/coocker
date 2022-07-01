import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
import modeIcon from '../assets/brightness.svg'

const themeColors = ['rgba(140, 184, 94, 0.506)', 'rgba(178, 126, 59, 0.700)', 'rgba(35, 63, 5, 0.506)']

export default function ThemeSelector() {
  const { changeColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
        onClick={toggleMode} 
          src={modeIcon} 
          alt="dark/light toggle icon"
          style={{ filter : mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}} 
        />
      </div>
      <div className="theme-buttons">
        {themeColors.map(color =>   (
          <div 
            key={color}
            onClick={() => changeColor(color)} 
            style={{ background: color }}
          />
        ))}
      </div>
    </div>
  )
}
