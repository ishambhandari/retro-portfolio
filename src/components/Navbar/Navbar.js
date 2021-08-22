import React from 'react';
import './nav.css';

const Navbar = () => {
  return (
    <div>
      <div className="nav-elements">
        <ul className="ul-list">
          <a>
            <li className="link">Home</li>
          </a>
          <li>About</li>
          <li>Works</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
