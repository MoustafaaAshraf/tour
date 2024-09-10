// src/components/Header/Header.js
// Purpose: Defines the header component for the application.
// Expected content: Navigation menu, logo, and any other top-level UI elements.

import React from 'react';
import Home from '../../pages/Home/Home';
import Search from '../../pages/Search/Search';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo192.png';

import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="TourGuide Logo" />
        </Link>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;