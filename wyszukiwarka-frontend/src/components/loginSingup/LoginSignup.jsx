import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './LoginSignup.css';

import user_icon from '../asserts/person.svg';
import password_icon from '../asserts/password.svg';
import email_icon from '../asserts/email.svg';
import plane_icon from '../asserts/icons/plane-icon.svg';
import google_icon from '../asserts/icons/google.svg';
import facebook_icon from '../asserts/icons/facebook.svg';

const LoginSignup = () => {
  const location = useLocation();
  const defaultAction = location.state?.action || 'Logowanie';
  const [action, setAction] = useState(defaultAction);

  useEffect(() => {
    if (location.state?.action) {
      setAction(location.state.action);
    }
  }, [location.state]);

  return (
    <div className="container">
      <Link to="/" className="back-arrow" title="Powrót do strony głównej">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </Link>

      <div className="header-text">
        <img src={plane_icon} alt="" width="40" />
        <h1>Witaj w SkyFlyer</h1>
        <h2>Zaloguj się lub utwórz nowe konto</h2>
      </div>

      <div className="submit-container">
            <div className={action==="Logowanie"?"submit gray":"submit"} onClick={() => {setAction('Logowanie')}}>Logowanie</div>
            <div className={action==="Rejestracja"?"submit gray":"submit"} onClick={() => {setAction('Rejestracja')}}>Rejestracja</div>
        </div>

        <div className={action === "Rejestracja" ? "inputs grid" : "inputs"}>
          {action === "Rejestracja" &&
            <div className="input">
              <label>Imię i nazwisko</label>
              <div className="input-text">
                <img src={user_icon} alt=""/>
                <input type="text" placeholder="Jan Kowalski" />
              </div>
          </div>}
                
          <div className="input">
            <label>E-mail</label>
            <div className="input-text">
              <img src={email_icon} alt=""/>
              <input type="email" placeholder="twoj@email.com"/>
            </div>  
          </div> 
          
          <div className="input">
            <label>Hasło</label>
            <div className="input-text">
              <img src={password_icon} alt=""/>
              <input type="password" placeholder={action === "Logowanie" ? "Wpisz hasło" : "Minimum 8 znaków"} />
            </div>  
          </div>  
     
          {action === "Logowanie"?<div></div>:                     
            <div className="input">
              <label>Powtórz hasło</label>
              <div className="input-text">
              <img src={password_icon} alt=""/>
              <input type="password" placeholder="Wpisz ponownie" />
              </div>
            </div>}    
        </div>

        {action === "Rejestracja"?
          <div className="terms-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Akceptuję <span>regulamin</span> oraz politykę <span>prywatności</span></label>
          </div>:

          <div className="remember-me">
              <div className="remember-left">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Zapamiętaj mnie</label>
              </div>
              <span className="forgot">Zapomniałeś hasła?</span>
        </div>}

        <div className="submit-button">
          {action === "Logowanie" ? "Zaloguj się" : "Utwórz konto"}
        </div>

        <div className="diffrent-login-options">
          <div className="line"></div>
          {action === "Logowanie" ? (
            <h2 className="between-line-text">Lub zaloguj przez</h2>
          ) : (
            <h2 className="between-line-text">Lub zarejestruj przez</h2>
          )}
          <div className="line"></div>
        </div> 

        <div className="social-icons">
          <div className="icon google">
              <img src={google_icon} alt="" width="30" />
              <label>Google</label>
          </div>
          <div className="icon facebook">
              <img src={facebook_icon} alt="" width="30" />
              <label>Facebook</label>
          </div>
        </div>

        <div className="no-account">
          {action === "Logowanie" ? (
            <p>Nie masz konta? <span onClick={() => setAction('Rejestracja')}>Zarejestruj się</span></p>
          ) : (
            <p>Masz już konto? <span onClick={() => setAction('Logowanie')}>Zaloguj się</span></p>
          )}
        </div>

    </div>
  );
};

export default LoginSignup;