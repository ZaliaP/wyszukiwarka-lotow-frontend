import React from 'react';
import './PopularDestinations.css';
import planeSmallIcon from '../../../components/asserts/smallairplane.svg';
import londynImg from '../../../components/asserts/londyn.png';
import rzymImg from '../../../components/asserts/Rzym.png';
import paryzImg from '../../../components/asserts/paryz.png';
import dubajImg from '../../../components/asserts/dubaj.png';

const MOCK_DESTINATIONS = [
  {
    id: 1,
    city: 'Londyn',
    country: 'UK',
    price: 'od 199 zł',
    image: londynImg,
    desc: 'Loty bezpośrednie z Warszawy'
  },
  {
    id: 2,
    city: 'Rzym',
    country: 'Włochy',
    price: 'od 249 zł',
    image: rzymImg,
    desc: 'Idealne na weekend'
  },
  {
    id: 3,
    city: 'Paryż',
    country: 'Francja',
    price: 'od 289 zł',
    image: paryzImg,
    desc: 'Miasto miłości czeka'
  },
  {
    id: 4,
    city: 'Dubaj',
    country: 'ZEA',
    price: 'od 899 zł',
    image: dubajImg,
    desc: 'Egzotyka w zasięgu ręki'
  }
];

const PopularDestinations = () => {
  return (
    <section className="destinations-section">
      <div className="section-header">
        <h2>Popularne kierunki</h2>
        <p>Inspiracje na Twoją następną podróż.</p>
      </div>

      <div className="destinations-grid">
        {MOCK_DESTINATIONS.map(dest => (
          <div className="destination-card" key={dest.id}>
            <div className="card-image-wrapper">
              <img src={dest.image} alt={dest.city} className="card-image" />
              <span className="card-price">{dest.price}</span>
            </div>
            <div className="card-content">
              <div className="card-top-info">
                <h3>{dest.city}</h3>
                <span className="country-info">
                  <img src={planeSmallIcon} alt="plane" className="small-plane-icon" />
                  {dest.country}
                </span>
              </div>
              <p className="card-desc">{dest.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDestinations;
