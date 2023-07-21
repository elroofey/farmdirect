import React, { useState } from 'react';

const ToggleMenuBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (event, target) => {
    event.preventDefault();

    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    toggleMenu();
  };

  return (
    <div>
      <div className={`menu-container ${showMenu ? 'show-menu' : ''}`}>
        <nav className="menu-bar">
          <ul className="menu-list">
            <li>
              <a href="#how-it-works" onClick={(event) => handleMenuClick(event, '#how-it-works')}>
                Section 1
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(event) => handleMenuClick(event, '#how-it-works')}>
                Section 2
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(event) => handleMenuClick(event, '#how-it-works')}>
                Section 3
              </a>
            </li>
            <li>
              <a href="#how-it-works" onClick={(event) => handleMenuClick(event, '#how-it-works')}>
                Section 4
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
    </div>
  );
};

export default ToggleMenuBar;
