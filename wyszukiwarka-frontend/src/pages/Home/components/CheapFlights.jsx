import React from 'react';
import './CheapFlights.css';
import airplaneIcon from '../../../components/asserts/airplane.svg';

const CHEAP_FLIGHTS = [
  { id: 1, from: 'Warszawa', to: 'Oslo', dates: '12 - 15 Cze', type: 'Bezpośredni', price: '79 zł' },
  { id: 2, from: 'Gdańsk', to: 'Sztokholm', dates: '20 - 25 Gru', type: 'Bezpośredni', price: '89 zł' },
  { id: 3, from: 'Warszawa', to: 'Wiedeń', dates: '21 - 25 Paź', type: 'Bezpośredni', price: '129 zł' },
  { id: 4, from: 'Kraków', to: 'Mediolan', dates: '22 - 24 Sie', type: 'Bezpośredni', price: '119 zł' },
  { id: 5, from: 'Wrocław', to: 'Sztokholm', dates: '10 - 15 Lis', type: 'Bezpośredni', price: '149 zł' },
  { id: 6, from: 'Poznań', to: 'Paryż', dates: '14 - 19 Lut', type: '1 Przesiadka', price: '169 zł' }
];

const CheapFlights = () => {
  return (
    <section className="cheap-flights-section">
      <div className="cheap-flights-container">
        <div className="section-header-center">
          <h2>Tanie loty na każdą kieszeń</h2>
          <p>Złap okazję na szybki wypad bez obciążania portfela</p>
        </div>

        <div className="flights-grid">
          {CHEAP_FLIGHTS.map((flight) => (
            <div className="flight-row" key={flight.id}>
              <div className="flight-icon">
                <img src={airplaneIcon} alt="Samolot" className="plane-svg" />
              </div>
              <div className="flight-details">
                <h4>{flight.from} - {flight.to}</h4>
                <p className="flight-meta">{flight.dates} • {flight.type}</p>
              </div>
              <div className="flight-price">{flight.price}</div>
            </div>
          ))}
        </div>

        <div className="see-more-container">
          <button className="btn-see-more">Zobacz więcej tanich lotów</button>
        </div>
      </div>
    </section>
  );
};

export default CheapFlights;