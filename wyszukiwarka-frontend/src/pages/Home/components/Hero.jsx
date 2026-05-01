import React from 'react';
import FlightSearchBox from './FlightSearchBox';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Odkrywaj świat bez granic</h1>
        <p className="hero-subtitle">Znajdź, porównaj i zarezerwuj tanie loty w kilka sekund.</p>
        
        <FlightSearchBox />
      </div>
    </div>
  );
};

export default Hero;