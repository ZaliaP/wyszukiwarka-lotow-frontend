import React from 'react';
import './Features.css';
import tagIcon from '../../../components/asserts/tag.svg';
import shieldIcon from '../../../components/asserts/shield.svg';
import headphonesIcon from '../../../components/asserts/headphones.svg';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="feature-item">
          <div className="feature-icon">
            <img src={tagIcon} alt="tag" className="feature-svg" />
          </div>
          <h3>Najlepsze ceny</h3>
          <p>Porównujemy oferty setek linii lotniczych, aby zapewnić Ci najtańsze połączenia.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src={shieldIcon} alt="shield" className="feature-svg" />
          </div>
          <h3>Bezpieczeństwo</h3>
          <p>Gwarantujemy bezpieczne transakcje i pełną ochronę Twoich danych podczas rezerwacji.</p>
        </div>
        <div className="feature-item">
          <div className="feature-icon">
            <img src={headphonesIcon} alt="headphones" className="feature-svg" />
          </div>
          <h3>Wsparcie 24/7</h3>
          <p>Nasi konsultanci są gotowi Ci pomóc o każdej porze dnia i nocy, w każdym z problemów.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;