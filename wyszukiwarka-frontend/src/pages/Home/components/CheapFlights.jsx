import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheapFlights.css';
import airplaneIcon from '../../../components/asserts/airplane.svg';
import { searchFlights } from '../../../services/api';

const POPULAR_ROUTES = [
  { fromCity: 'Warszawa', fromCode: 'WAW', toCity: 'Oslo', toCode: 'OSL' },
  { fromCity: 'Gdańsk', fromCode: 'GDN', toCity: 'Sztokholm', toCode: 'ARN' },
  { fromCity: 'Warszawa', fromCode: 'WAW', toCity: 'Wiedeń', toCode: 'VIE' },
  { fromCity: 'Kraków', fromCode: 'KRK', toCity: 'Mediolan', toCode: 'BGY' },
  { fromCity: 'Wrocław', fromCode: 'WRO', toCity: 'Sztokholm', toCode: 'ARN' },
  { fromCity: 'Poznań', fromCode: 'POZ', toCity: 'Paryż', toCode: 'CDG' }
];

const STATIC_FALLBACKS = [
  { id: 1, from: 'Warszawa', to: 'Oslo', fromCode: 'WAW', toCode: 'OSL', date: '2026-07-05', dates: '12 - 15 Cze', type: 'Bezpośredni', price: '79 zł' },
  { id: 2, from: 'Gdańsk', to: 'Sztokholm', fromCode: 'GDN', toCode: 'ARN', date: '2026-07-05', dates: '20 - 25 Gru', type: 'Bezpośredni', price: '89 zł' },
  { id: 3, from: 'Warszawa', to: 'Wiedeń', fromCode: 'WAW', toCode: 'VIE', date: '2026-07-05', dates: '21 - 25 Paź', type: 'Bezpośredni', price: '129 zł' },
  { id: 4, from: 'Kraków', to: 'Mediolan', fromCode: 'KRK', toCode: 'BGY', date: '2026-07-05', dates: '22 - 24 Sie', type: 'Bezpośredni', price: '119 zł' },
  { id: 5, from: 'Wrocław', to: 'Sztokholm', fromCode: 'WRO', toCode: 'ARN', date: '2026-07-05', dates: '10 - 15 Lis', type: 'Bezpośredni', price: '149 zł' },
  { id: 6, from: 'Poznań', to: 'Paryż', fromCode: 'POZ', toCode: 'CDG', date: '2026-07-05', dates: '14 - 19 Lut', type: '1 Przesiadka', price: '169 zł' }
];

const getFutureDateString = (daysAhead) => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const formatToPolishDate = (dateStr) => {
  try {
    const d = new Date(dateStr);
    const months = ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru'];
    return `${d.getDate()} ${months[d.getMonth()]}`;
  } catch {
    return dateStr;
  }
};

const CheapFlights = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchAllPopularFlights = async () => {
      setLoading(true);
      const departureDate = getFutureDateString(14);

      try {
        const promises = POPULAR_ROUTES.map(async (route) => {
          try {
            const results = await searchFlights({
              origin: route.fromCode,
              dest: route.toCode,
              dateOut: departureDate,
            });

            if (results && results.length > 0) {
              const cheapest = results.reduce((min, f) => f.price < min.price ? f : min, results[0]);
              return {
                id: cheapest.id || `${route.fromCode}-${route.toCode}`,
                from: route.fromCity,
                to: route.toCity,
                fromCode: route.fromCode,
                toCode: route.toCode,
                date: departureDate,
                dates: formatToPolishDate(departureDate),
                type: cheapest.stops === 0 ? 'Bezpośredni' : cheapest.type || '1 Przesiadka',
                price: `${Math.round(cheapest.price)} zł`,
              };
            }
          } catch (e) {
            console.error(`Error fetching route ${route.fromCode}-${route.toCode}:`, e);
          }
          
          const fallback = STATIC_FALLBACKS.find(
            (f) => f.from === route.fromCity && f.to === route.toCity
          );
          return fallback || null;
        });

        const fetchedFlights = await Promise.all(promises);
        const validFlights = fetchedFlights.filter(Boolean);

        if (active) {
          if (validFlights.length > 0) {
            setFlights(validFlights);
          } else {
            setFlights(STATIC_FALLBACKS);
          }
          setLoading(false);
        }
      } catch (err) {
        console.error('Failed to load cheap flights from API:', err);
        if (active) {
          setFlights(STATIC_FALLBACKS);
          setLoading(false);
        }
      }
    };

    fetchAllPopularFlights();

    return () => {
      active = false;
    };
  }, []);

  const handleFlightClick = (flight) => {
    const query = new URLSearchParams({
      origin: flight.fromCode,
      dest: flight.toCode,
      dateOut: flight.date || getFutureDateString(14),
      tripType: 'oneWay',
      passengers: '1',
      cabinClass: 'economy'
    }).toString();
    
    navigate(`/wyniki-wyszukiwania?${query}`);
  };

  const handleSeeMoreClick = () => {
    navigate('/oferty');
  };

  return (
    <section className="cheap-flights-section">
      <div className="cheap-flights-container">
        <div className="section-header-center">
          <h2>Tanie loty na każdą kieszeń</h2>
          <p>Złap okazję na szybki wypad bez obciążania portfela</p>
        </div>

        <div className="flights-grid">
          {loading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div className="flight-row skeleton" key={index}>
                <div className="flight-icon skeleton-icon"></div>
                <div className="flight-details">
                  <div className="skeleton-text" style={{ height: '16px', width: '60%', marginBottom: '8px' }}></div>
                  <div className="skeleton-text" style={{ height: '12px', width: '40%' }}></div>
                </div>
                <div className="skeleton-text" style={{ height: '24px', width: '20%' }}></div>
              </div>
            ))
          ) : (
            flights.map((flight) => (
              <div 
                className="flight-row" 
                key={flight.id}
                onClick={() => handleFlightClick(flight)}
              >
                <div className="flight-icon">
                  <img src={airplaneIcon} alt="Samolot" className="plane-svg" />
                </div>
                <div className="flight-details">
                  <h4>{flight.from} - {flight.to}</h4>
                  <p className="flight-meta">{flight.dates} • {flight.type}</p>
                </div>
                <div className="flight-price">{flight.price}</div>
              </div>
            ))
          )}
        </div>

        <div className="see-more-container">
          <button className="btn-see-more" onClick={handleSeeMoreClick}>
            Zobacz więcej tanich lotów
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheapFlights;