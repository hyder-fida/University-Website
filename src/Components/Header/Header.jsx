import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [showCoursesSubMenu, setShowCoursesSubMenu] = useState(false);
  const [showMcaSubMenu, setShowMcaSubMenu] = useState(false);

  return (
    <nav className="navbar-container">
      <div className="navbar-logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="navbar-links">
        <div className="nav-item">Home</div>
        <div className="nav-item">About</div>
        <div className="nav-item">Contact</div>
        <div 
          className="nav-item"
          onMouseEnter={() => setShowCoursesSubMenu(true)}
          onMouseLeave={() => setShowCoursesSubMenu(false)}
        >
          Courses
          {showCoursesSubMenu && (
            <div className="submenu">
              <div 
                className="submenu-item"
                onMouseEnter={() => setShowMcaSubMenu(true)}
                onMouseLeave={() => setShowMcaSubMenu(false)}
              >
                MCA
                {showMcaSubMenu && (
                  <div className="submenu">
                    <div className="submenu-item">1 Year</div>
                    <div className="submenu-item">2 Year</div>
                  </div>
                )}
              </div>
              <div className="submenu-item">MBA</div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
