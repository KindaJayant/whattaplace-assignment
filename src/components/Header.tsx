import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Header: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? 'navbar--visible' : 'navbar--hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-left">
          <div className="navbar-logo" onClick={closeMobileMenu}>
            whattaplace
          </div>
        </div>
        
        {/* Desktop Menu */}
        <div className="navbar-center">
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">Find a Place</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">Host Your Space</a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">How It Works</a>
            </li>
          </ul>
        </div>
        <div className="navbar-right">
          <button className="nav-button">Get in Touch</button>
        </div>

        {/* Hamburger Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <ul className={isMobileMenuOpen ? 'mobile-menu active' : 'mobile-menu'}>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={closeMobileMenu}>Find a Place</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={closeMobileMenu}>Host Your Space</a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link" onClick={closeMobileMenu}>How It Works</a>
        </li>
        <li className="nav-item">
          <button className="nav-button mobile" onClick={closeMobileMenu}>Get in Touch</button>
        </li>
      </ul>
    </nav>
  );
};

export default Header;