import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="navbar-toggle" onClick={handleMenuToggle}>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
        <span className="toggle-bar"></span>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link className='home' to="/" onClick={handleMenuToggle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/aboutus" onClick={handleMenuToggle}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={handleMenuToggle}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={handleMenuToggle}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
