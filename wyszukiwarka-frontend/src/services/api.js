import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Token ${token}`; // DRF Token, nie Bearer!
  }
  return config;
});

const AIRLINE_MAP = {
  WIZZ_AIR: { name: 'Wizz Air', key: 'wizz' },
  RYANAIR: { name: 'Ryanair', key: 'ryanair' },
  LOT: { name: 'LOT Polish Airlines', key: 'lot' },
  LUFTHANSA: { name: 'Lufthansa', key: 'lufthansa' },
};

function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString('pl-PL', { hour: '2-digit', minute: '2-digit' });
}

function formatDuration(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
}

function mapFlight(raw, params) {
  const firstLeg = raw.legs[0];
  const lastLeg = raw.legs[raw.legs.length - 1];
  const airlineInfo = AIRLINE_MAP[firstLeg.airline_code] || { name: firstLeg.airline_code, key: 'other' };

  return {
    id: raw.offer_id,
    airline: airlineInfo.name,
    airlineKey: airlineInfo.key,
    from: params.origin,
    to: params.dest,
    originLabel: firstLeg.from,
    destinationLabel: lastLeg.to,
    date: params.dateOut,
    price: raw.price,
    timeFrom: formatTime(firstLeg.departure),
    timeTo: formatTime(lastLeg.arrival),
    duration: formatDuration(raw.total_duration_minutes),
    durationMinutes: raw.total_duration_minutes,
    type: raw.stops === 0 ? 'Bezpośredni' : raw.stops === 1 ? '1 Przesiadka' : '2+ przesiadki',
    stops: raw.stops,
    baggageType: 'unknown',
    baggageLabel: 'Sprawdź zasady bagażu u przewoźnika',
    flightNumber: raw.legs.map(l => `${l.airline_code} ${l.flight_number}`).join(' + '),
    co2Saving: '',
  };
}

export const searchFlights = async (params) => {
  const res = await api.get('/v1/search/flights/', {
    params: {
      origin: params.origin,
      destination: params.dest,
      departure_date: params.dateOut,
    },
  });

  return res.data.flights.map((f) => mapFlight(f, params));
};


//przykładowi użytkownicy
export const loginUser = async ({ email, password }) => {
  const res = await api.post('/v1/auth/login/', { email, password });
  return res.data; // { token, user }
};

export const registerUser = async ({ name, email, password, confirmPassword }) => {
  if (password !== confirmPassword) {
    throw { response: { data: { message: 'Hasła nie są zgodne' } } };
  }

  // backend chce first_name i last_name osobno
  const [first_name, ...rest] = name.trim().split(' ');
  const last_name = rest.join(' ') || first_name; // fallback gdyby ktoś podał jedno słowo

  const res = await api.post('/v1/auth/register/', {
    email,
    password,
    first_name,
    last_name,
  });
  return res.data;
};

export const logoutUser = async () => {
  await api.post('/v1/auth/logout/');
  localStorage.removeItem('token');
};

export const getMe = async () => {
  const res = await api.get('/v1/auth/me/');
  return res.data;
};

export const extractErrorMessage = (err) => {
  const data = err?.response?.data;
  if (!data) return 'Wystąpił błąd';
  if (data.message) return data.message;
  if (data.non_field_errors) return data.non_field_errors[0];
  const firstKey = Object.keys(data)[0];
  if (firstKey && Array.isArray(data[firstKey])) return data[firstKey][0];
  return 'Wystąpił błąd';
};

//mocki rezerwacji 
export const getUserBookings = async () => {
  const res = await api.get('/v1/bookings/');
  return res.data.bookings; // backend zwraca { detail, bookings: [...] }
};

export default api;
