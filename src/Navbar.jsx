import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../src/styles/Navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Toggle dropdown visibility when clicking the login button
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav>
        <div className="text-xl">MJob</div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/jobs">Jobs</Link></li>
          <li><Link to="/about">About</Link></li>

          <li className="navbar-dropdown">
            <button onClick={toggleDropdown}>
              Login ⌄
            </button>
            {/* Show dropdown only when dropdownOpen is true */}
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/user-login">User Login</Link></li>
                <li><Link to="/admin-login">Admin Login</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
