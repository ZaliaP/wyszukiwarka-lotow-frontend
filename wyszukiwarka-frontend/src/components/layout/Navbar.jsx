import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logoIcon from '../asserts/logo.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
            <img src={logoIcon} alt="SkyFlyer Logo" className="logo-icon-img" />
            <span className="logo-text">SkyFlyer</span>
          </Link>
        </div>
        
        <ul className="navbar-links">
          <li><Link to="/" className="active">Strona Główna</Link></li>
          <li><a href="#">Oferty</a></li>
          <li><a href="#">Odprawa</a></li>
          <li><Link to="/zarzadzaj-rezerwacja">Zarządzaj rezerwacją</Link></li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-login" onClick={() => navigate('/logowanie', { state: { action: 'Logowanie' } })}>Zaloguj się</button>
          <button className="btn-register" onClick={() => navigate('/logowanie', { state: { action: 'Rejestracja' } })}>Rejestracja</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;