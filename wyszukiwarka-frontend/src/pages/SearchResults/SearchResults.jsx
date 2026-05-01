import React, { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import './SearchResults.css';

const SearchResults = () => {
  const [activeTab, setActiveTab] = useState('cheapest');

  return (
    <div className="search-results-wrapper manage-booking-wrapper">
      <Navbar />
      
      {/* Search Summary Bar */}
      <div className="search-summary-bar">
        <div className="summary-container">
          <div className="summary-route">
            <div className="route-city">
              <span className="city-code">WAW</span>
              <span className="city-name">Warszawa</span>
            </div>
            <span className="route-arrow">→</span>
            <div className="route-city">
              <span className="city-code">LHR</span>
              <span className="city-name">Londyn</span>
            </div>
          </div>
          
          <div className="summary-details">
            <div className="detail-item">
              <span className="icon">📅</span> 15 cze - 22 cze
            </div>
            <div className="detail-item">
              <span className="icon">👤</span> 1 pasażer
            </div>
            <div className="detail-item">
              <span className="icon">💺</span> Ekonomiczna
            </div>
          </div>
          
          <div className="summary-actions">
            <button className="btn-track-prices">
              <span className="icon">🔔</span> Śledź ceny
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="search-results-content">
        
        {/* Left Sidebar - Filters */}
        <aside className="filters-sidebar">
          <div className="filters-header">
            <h3>Filtry</h3>
            <button className="btn-reset">Zresetuj</button>
          </div>

          <div className="filter-section">
            <h4>Przesiadki</h4>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked />
              <span className="label-text">Bezpośredni</span>
              <span className="price-tag">199 zł</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">1 przesiadka</span>
              <span className="price-tag">165 zł</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">2+ przesiadki</span>
              <span className="price-tag">od 145 zł</span>
            </label>
          </div>

          <div className="filter-section">
            <h4>Maksymalna cena</h4>
            <div className="price-slider-header">
              <span className="max-price-value">1200 zł</span>
            </div>
            <input type="range" min="100" max="2500" defaultValue="1200" className="price-slider" />
          </div>

          <div className="filter-section">
            <h4>Godziny wylotu (z WAW)</h4>
            <div className="time-buttons">
              <button className="time-btn">
                <span className="icon">☀️</span>
                <span className="time-name">Rano</span>
                <span className="time-range">00:00 - 11:59</span>
              </button>
              <button className="time-btn">
                <span className="icon">⛅</span>
                <span className="time-name">Popołudnie</span>
                <span className="time-range">12:00 - 17:59</span>
              </button>
              <button className="time-btn active">
                <span className="icon">🌙</span>
                <span className="time-name">Wieczór</span>
                <span className="time-range">18:00 - 23:59</span>
              </button>
            </div>
          </div>

          <div className="filter-section">
            <h4>Wliczony bagaż</h4>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">Mały plecak (pod siedzenie)</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">Bagaż podręczny (w schowku)</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">Bagaż rejestrowany (23kg)</span>
            </label>
          </div>

          <div className="filter-section">
            <h4>Linie lotnicze</h4>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">Wizz Air</span>
              <span className="price-tag">199 zł</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">Ryanair</span>
              <span className="price-tag">285 zł</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">LOT</span>
              <span className="price-tag">450 zł</span>
            </label>
            <label className="checkbox-label">
              <input type="checkbox" />
              <span className="label-text">Lufthansa</span>
              <span className="price-tag">820 zł</span>
            </label>
          </div>
        </aside>

        {/* Right Side - Results */}
        <main className="results-main">
          
          <div className="results-tabs">
            <button className={`tab ${activeTab === 'best' ? 'active' : ''}`} onClick={() => setActiveTab('best')}>
              <span className="tab-title">Najlepszy</span>
              <span className="tab-desc">1h 45 min | 450 zł</span>
            </button>
            <button className={`tab ${activeTab === 'cheapest' ? 'active' : ''}`} onClick={() => setActiveTab('cheapest')}>
              <span className="tab-title">Najtańszy</span>
              <span className="tab-desc">1h 55 min | 199 zł</span>
            </button>
            <button className={`tab ${activeTab === 'fastest' ? 'active' : ''}`} onClick={() => setActiveTab('fastest')}>
              <span className="tab-title">Najszybszy</span>
              <span className="tab-desc">1h 45 min | 450 zł</span>
            </button>
          </div>

          <div className="price-alert-box">
            <div className="alert-content">
              <div className="alert-icon">🔔</div>
              <div className="alert-text">
                <h4>Ceny dla twojej trasy mogą wzrosnąć!</h4>
                <p>Włącz powiadomienia aby dostać alert gdy ceny spadną</p>
              </div>
            </div>
            <button className="btn-alert">Powiadom mnie</button>
          </div>

          <div className="flights-list">
            
            {/* Flight 1 (Expanded) */}
            <div className="flight-card result-card expanded">
              <div className="rc-main">
                <div className="rc-airline">
                  <div className="rc-airline-logo wizz">W</div>
                  <span className="rc-airline-name">WIZZ AIR</span>
                </div>
                <div className="rc-tags">
                  <span className="tag eco">🌱 -18% CO2</span>
                  <span className="tag best-price">Najtańszy</span>
                </div>
              </div>

              <div className="rc-middle">
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
                <div className="rc-pricing">
                  <h3 className="price">199zł</h3>
                  <p className="price-desc">Zwykły bilet / os.</p>
                  <button className="btn-select-main">Wybierz</button>
                </div>
              </div>

              <div className="rc-details-toggle">
                <button className="btn-toggle">Mniej szczegółów <span className="arrow-up">^</span></button>
              </div>

              <div className="rc-expanded-details">
                <div className="timeline-vertical">
                  <div className="timeline-point">
                    <span className="time-dot"></span>
                    <div className="point-info">
                      <h4>Wylot • 14:20</h4>
                      <p>Warszawa, Lotnisko Chopina (WAW)</p>
                    </div>
                  </div>
                  
                  <div className="timeline-travel">
                    <span>W6 1301 (Airbus A320)</span>
                    <span>🎒 Tylko przedmioty osobiste</span>
                    <span>💺 Klasa ekonomiczna</span>
                  </div>

                  <div className="timeline-point">
                    <span className="time-dot"></span>
                    <div className="point-info">
                      <h4>Przylot • 16:15</h4>
                      <p>Londyn, Luton Airport (LTN)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Flight 2 */}
            <div className="flight-card result-card">
              <div className="rc-main">
                <div className="rc-airline">
                  <div className="rc-airline-logo lot">LOT</div>
                  <span className="rc-airline-name">LOT Polish Airlines</span>
                </div>
                <div className="rc-tags">
                  <span className="tag plain">🎒 Wliczony bagaż podręczny</span>
                </div>
              </div>

              <div className="rc-middle">
                <div className="flight-timeline">
                  <div className="departure">
                    <h3>8:00</h3>
                    <p>WAW</p>
                  </div>
                  <div className="duration">
                    <p>1h 45m</p>
                    <div className="line">
                      <span className="dot"></span>
                    </div>
                    <p className="type">BEZPOŚREDNI</p>
                  </div>
                  <div className="arrival">
                    <h3>9:45</h3>
                    <p>LHR</p>
                  </div>
                </div>
                <div className="rc-pricing">
                  <h3 className="price">450zł</h3>
                  <p className="price-desc">Lot na lotnisko główne.</p>
                  <button className="btn-select-outline">Wybierz</button>
                </div>
              </div>
              
              <div className="rc-details-toggle">
                <button className="btn-toggle">Szczegóły lotu <span className="arrow-down">v</span></button>
              </div>
            </div>

            {/* Flight 3 */}
            <div className="flight-card result-card">
              <div className="rc-main">
                <div className="rc-airline">
                  <div className="rc-airline-logo lufthansa">L</div>
                  <span className="rc-airline-name">LUFTHANSA</span>
                </div>
                <div className="rc-tags">
                  <span className="tag plain">💼 Bagaż rejestrowany 23 kg</span>
                </div>
              </div>

              <div className="rc-middle">
                <div className="flight-timeline">
                  <div className="departure">
                    <h3>10:00</h3>
                    <p>WAW</p>
                  </div>
                  <div className="duration">
                    <p>4h 20m</p>
                    <div className="line">
                      <span className="dot stopover"></span>
                    </div>
                    <p className="type stopover">1 PRZESIADKA (FRA)</p>
                  </div>
                  <div className="arrival">
                    <h3>13:20</h3>
                    <p>LHR</p>
                  </div>
                </div>
                <div className="rc-pricing">
                  <h3 className="price">820zł</h3>
                  <p className="price-desc">Zawiera dodatkowy bagaż</p>
                  <button className="btn-select-outline">Wybierz</button>
                </div>
              </div>
              
              <div className="rc-details-toggle">
                <button className="btn-toggle">Szczegóły lotu <span className="arrow-down">v</span></button>
              </div>
            </div>

          </div>

          <div className="btn-load-more-container">
            <button className="btn-load-more">↻ Pokaż więcej wyników (24)</button>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
};

export default SearchResults;
