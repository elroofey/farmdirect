import React from 'react';
import './MenuBar.css'; // Import your custom CSS file for styling

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu-list">
        <li>
          <a href="#section1">Section 1</a>
        </li>
        <li>
          <a href="#section2">Section 2</a>
        </li>
        <li>
          <a href="#section3">Section 3</a>
        </li>
        <li>
          <a href="#section4">Section 4</a>
        </li>
      </ul>
      <div className="stripes-container">
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
        <div className="stripe"></div>
      </div>
    </nav>
  );
};

export default MenuBar;
