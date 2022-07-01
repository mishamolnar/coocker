import './Navbar.css'

import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import Searchbar from './Searchbar'

export default function Navbar() {
  const { color, changeColor } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav onClick={() => changeColor('rgba(140, 184, 94, 0.506)')}>
        <Link to="/" className="brand">
          <h1>Coocker</h1>
        </Link>
        <Searchbar />
        <Link to="/create"> Create Recipe </Link>
      </nav>
    </div>
  )
}
