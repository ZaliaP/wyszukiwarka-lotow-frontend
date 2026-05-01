import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './ManageBooking.css';

const ManageBooking = () => {
  return (
    <div className="manage-booking-wrapper">
      <Navbar />
      <div className="manage-booking-container">
        
        <header className="mb-header">
          <div className="mb-header-left">
            <h1>Cześć, Jan!</h1>
            <p>Zarządzaj swoją podróżą, dodaj usługi lub zmień plany.</p>
          </div>
          <div className="mb-reward">
            <span>Program lojalnościowy: <span className="star-icon">⭐️</span> <span className="points">1,450 PKT</span></span>
          </div>
        </header>

        <section className="mb-content">
          <h2>Szczegóły nadchodzącego lotu</h2>
          
          <div className="flight-card">
            <div className="flight-card-header">
              <div className="fc-status">
                <span className="badge-confirmed">POTWIERDZONA</span>
                <span className="reservation-number">Rezerwacja: A92BCK</span>
              </div>
              <div className="fc-time">
                <span className="clock-icon">🕒</span> Odprawa otwarta za: 10 dni
              </div>
            </div>

            <div className="flight-card-body">
              <div className="fc-main-info">
                <div className="airline-info">
                  <span className="airline-logo">W</span>
                  <span className="airline-name">WIZZ AIR</span>
                </div>

                <div className="flight-timeline">
                  <div className="departure">
                    <h3>14:20</h3>
                    <p>WAW</p>
                  </div>
                  <div className="duration">
                    <p>1h 55m</p>
                    <div className="line">
                      <span className="dot"></span>
                    </div>
                    <p className="type">BEZPOŚREDNI</p>
                  </div>
                  <div className="arrival">
                    <h3>16:15</h3>
                    <p>LTN</p>
                  </div>
                </div>

                <div className="passengers-info">
                  <h4>Pasażerowie na tej rezerwacji</h4>
                  <div className="passenger">
                    <div className="p-avatar">J</div>
                    <div className="p-details">
                      <p className="p-name">Jan Kowalski <span className="badge-main">Główny</span></p>
                      <p className="p-type">Dorosły</p>
                    </div>
                  </div>

                  <div className="passenger-addons">
                    <div className="addon-box">
                      <span className="addon-icon">🎒</span>
                      <div>
                        <p className="addon-title">Bagaż</p>
                        <p className="addon-desc">Tylko mały plecak</p>
                      </div>
                    </div>
                    <div className="addon-box">
                      <span className="addon-icon">💺</span>
                      <div>
                        <p className="addon-title">Miejsce na pokładzie</p>
                        <p className="addon-desc">Nie wybrano</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="fc-actions">
                <h4>Szybkie akcje</h4>
                <button className="btn-primary"><span>📱</span> Odprawa Online <span>›</span></button>
                <button className="btn-outline"><span>💺</span> Wybierz miejsce</button>
                <button className="btn-outline"><span>🎒</span> Zarządzaj bagażem</button>
                <button className="btn-outline"><span>📄</span> Pobierz potwierdzenie</button>
                <button className="btn-outline"><span>📅</span> Zmień termin lotu</button>
                <button className="btn-cancel"><span>🚫</span> Anuluj całą rezerwację</button>
              </div>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default ManageBooking;
