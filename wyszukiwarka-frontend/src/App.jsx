import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home'
import LoginSignup from './components/loginSingup/LoginSignup'
import ManageBooking from './pages/ManageBooking/ManageBooking'
import SearchResults from './pages/SearchResults/SearchResults'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logowanie" element={<LoginSignup />} />
          <Route path="/zarzadzaj-rezerwacja" element={<ManageBooking />} />
          <Route path="/wyniki-wyszukiwania" element={<SearchResults />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
