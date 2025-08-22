import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; 

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleHamburgerClick = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MyPortfolio
        </Link>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span />
          <span />
          <span />
        </div>
        <ul className={`nav-menu${menuActive ? ' active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={() => setMenuActive(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={() => setMenuActive(false)}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-links" onClick={() => setMenuActive(false)}>
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={() => setMenuActive(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;