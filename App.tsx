
import React, { Suspense } from 'react';
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
    <div className="min-h-screen bg-[#F2F0ED] selection:bg-[#B8860B] selection:text-white">
      <Navbar />
      
      {/* Suspense to handle dynamic data from MarketTicker without blocking the main render */}
      <Suspense fallback={<div className="h-14 bg-black fixed top-20 w-full animate-pulse" />}>
        <MarketTicker />
      </Suspense>

      <main className="relative z-10">
        <Hero />
        <Calculator />
        <Features />
        <ChatDemo />
        <Territory />
      </main>

      <Footer />
    </div>
  );
};

export default App;
