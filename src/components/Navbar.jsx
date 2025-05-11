// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">YUMMIEZ</div>
      <div className="nav-buttons">
        <button className="partner-btn">Yummiez Partner</button>
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}
