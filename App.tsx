
import React from 'react';
import Navbar from './components/Navbar';
import MarketTicker from './components/MarketTicker';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Features from './components/Features';
import Territory from './components/Territory';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <MarketTicker />
      <Hero />
      <div className="relative z-10">
        <Calculator />
        <Features />
        <ChatDemo />
        <Territory />
      </div>
      <Footer />
    </div>
  );
};

export default App;
