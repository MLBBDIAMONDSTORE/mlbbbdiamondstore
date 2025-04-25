// src/components/Layout/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import '../../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="MLBB Diamond Store" className="logo" />
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/status">Status</Link>
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;