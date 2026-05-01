import React from 'react';
import './Footer.css';
import logoIcon from '../asserts/logo.svg';
import instagramIcon from '../asserts/instagram.svg';
import facebookIcon from '../asserts/facebook.svg';
import twitterIcon from '../asserts/twitter.svg';
import appleIcon from '../asserts/apple.svg';
import secondlogoIcon from '../asserts/secondlogo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logoIcon} alt="SkyFlyer Logo" className="logo-icon-img" />
            <span className="logo-text">SkyFlyer</span>
          </div>
          <p className="footer-description">
            Twój zaufany partner w podróżach.
            Znajdujemy najlepsze połączenia w najniższych cenach.
          </p>
          <div className="social-links">
            <a href="#" className="social-icon">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="#" className="social-icon">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="#" className="social-icon">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        <div className="footer-links-group">
          <h4>Firma</h4>
          <ul>
            <li><a href="#">O nas</a></li>
            <li><a href="#">Kariera</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Prasa</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Pomoc</h4>
          <ul>
            <li><a href="#">Centrum Pomocy</a></li>
            <li><a href="#">Kontakt</a></li>
            <li><a href="#">Polityka Prywatności</a></li>
            <li><a href="#">Regulamin</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Zapisz się, aby otrzymywać powiadomienia o zniżkach i promocjach.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Twój e-mail" />
            <button type="submit">
              <img src={secondlogoIcon} alt="Wyślij" className="newsletter-icon" />
            </button>
          </form>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 SkyFlyer. Wszelkie prawa zastrzeżone.</p>
        <div className="payment-methods">
          <span className="pay-blik">BLIK</span>
          <span className="pay-payu">PayU</span>
          <span className="pay-przelewy24">Przelewy24</span>
          <span className="pay-apple">
            <img src={appleIcon} alt="Apple" className="pay-apple-icon" />
            Pay
          </span>
          <span className="pay-gpay">
            <span className="gpay-g">G</span> Pay
          </span>
          <span className="pay-visa">VISA</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;