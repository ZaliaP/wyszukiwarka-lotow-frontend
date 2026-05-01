import React from 'react';
import './Navbar.css';
import logoIcon from '../asserts/logo.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logoIcon} alt="SkyFlyer Logo" className="logo-icon-img" />
          <span className="logo-text">SkyFlyer</span>
        </div>
        
        <ul className="navbar-links">
          <li><a href="#" className="active">Strona Główna</a></li>
          <li><a href="#">Oferty</a></li>
          <li><a href="#">Odprawa</a></li>
          <li><a href="#">Zarządzaj rezerwacją</a></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-login">Zaloguj się</button>
          <button className="btn-register">Rejestracja</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;