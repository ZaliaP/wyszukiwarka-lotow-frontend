import React from 'react';
import './AppPromo.css';
import logoIcon from '../../../components/asserts/logo.svg';
import appleIcon from '../../../components/asserts/apple.svg';
import googlePlayIcon from '../../../components/asserts/googleplay.svg';
import telefonIcon from '../../../components/asserts/telefon.svg';

const AppPromo = () => {
  return (
    <section className="app-promo-section">
      <div className="promo-container">
        
        <div className="promo-text">
          <span className="promo-badge">NOWOŚĆ</span>
          <h2>Miej świat w kieszeni z naszą aplikacją</h2>
          <p>
            Pobierz darmową aplikację SkyFlyer. Otrzymuj powiadomienia o spadku cen, 
            błyskawicznie zarządzaj rezerwacjami i korzystaj ze specjalnych zniżek 
            (nawet do -20%) dostępnych tylko z poziomu telefonu.
          </p>
          
          <div className="store-buttons">
            <button className="store-btn">
              <img src={appleIcon} alt="Apple Store" className="store-icon-svg" />
              <div className="store-text">
                <small>Pobierz z</small>
                <strong>App Store</strong>
              </div>
            </button>
            <button className="store-btn">
              <img src={googlePlayIcon} alt="Google Play" className="store-icon-svg" />
              <div className="store-text">
                <small>Pobierz z</small>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
        </div>

        <div className="promo-image">
          <img src={telefonIcon} alt="SkyFlyer Aplikacja w telefonie" className="phone-mockup-img" />
        </div>

      </div>
    </section>
  );
};

export default AppPromo;