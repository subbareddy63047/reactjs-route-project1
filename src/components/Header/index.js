// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="logo-img"
        />
        <p className="company-name">Wave</p>
      </div>
    </Link>
    <nav className="nav-container">
      <ul>
        <li className="links">
          <Link to="/">Home</Link>
        </li>
        <li className="links">
          <Link to="/about">About</Link>
        </li>
        <li className="links">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
