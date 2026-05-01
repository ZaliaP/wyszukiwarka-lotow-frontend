import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import PopularDestinations from './components/PopularDestinations';
import CheapFlights from './components/CheapFlights';
import AppPromo from './components/AppPromo';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <Hero />
      <Features />
      <PopularDestinations />
      <CheapFlights />
      <AppPromo />
      <Footer />
    </div>
  );
};

export default Home;