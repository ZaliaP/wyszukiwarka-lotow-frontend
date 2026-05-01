import React, { useState } from 'react';
import './FlightSearchBox.css';
import userIcon from '../../../components/asserts/user.svg';
import placeIcon from '../../../components/asserts/place.svg';
import calendarIcon from '../../../components/asserts/calendar.svg';
import downArrowIcon from '../../../components/asserts/downarrow.svg';

const FlightSearchBox = () => {
  const [tripType, setTripType] = useState('roundTrip');
  
  return (
    <div className="search-box-container">
      <div className="search-options">
        <div className="trip-types">
          <label className="radio-label">
            <input 
              type="radio" 
              name="tripType" 
              value="roundTrip" 
              checked={tripType === 'roundTrip'}
              onChange={(e) => setTripType(e.target.value)} 
            />
            <span className="radio-custom"></span>
            W dwie strony
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="tripType" 
              value="oneWay" 
              checked={tripType === 'oneWay'}
              onChange={(e) => setTripType(e.target.value)} 
            />
            <span className="radio-custom"></span>
            W jedną stronę
          </label>
          <label className="radio-label">
            <input 
              type="radio" 
              name="tripType" 
              value="multiCity" 
              checked={tripType === 'multiCity'}
              onChange={(e) => setTripType(e.target.value)} 
            />
            <span className="radio-custom"></span>
            Wiele miast
          </label>
        </div>

        <div className="other-options">
          <div className="passengers-select">
            <img src={userIcon} alt="Pasażer" className="inline-svg-icon" />
            <span>1 pasażer</span>
          </div>
          <div className="class-select">
            <span>Klasa Ekonomiczna</span>
            <img src={downArrowIcon} alt="rozwiń" className="dropdown-svg-icon" />
          </div>
        </div>
      </div>

      <div className="search-inputs">
        <div className="input-group location-group">
          <img src={placeIcon} alt="Miejsce" className="input-svg-icon" />
          <input type="text" placeholder="Skąd leciesz?" defaultValue="Warszawa (WAW)" />
          <button className="swap-btn">
            <span className="swap-icon-text">⇄</span>
          </button>
        </div>
        
        <div className="input-group location-group">
          <img src={placeIcon} alt="Miejsce" className="input-svg-icon" />
          <input type="text" placeholder="Dokąd lecisz?" />
        </div>

        <div className="input-group date-group">
          <img src={calendarIcon} alt="Kalendarz" className="input-svg-icon" />
          <input type="text" placeholder="Wylot" />
        </div>

        <div className="input-group date-group">
          <img src={calendarIcon} alt="Kalendarz" className="input-svg-icon" />
          <input type="text" placeholder="Powrót" />
        </div>
      </div>
      <div className="search-box-bottom-row">
        <button className="search-btn">Szukaj lotów</button>
      </div>
    </div>
  );
};

export default FlightSearchBox;
