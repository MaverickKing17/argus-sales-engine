
import React, { Suspense, useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import MarketTicker from './components/MarketTicker';
import Hero from './components/Hero';
import Calculator from './components/Calculator';
import Features from './components/Features';
import Territory from './components/Territory';
import ChatDemo from './components/ChatDemo';
import Footer from './components/Footer';
import LegalView from './components/LegalView';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('home');

  const handleNavigate = useCallback((view: AppView) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBackToHome = useCallback(() => {
    setCurrentView('home');
  }, []);

  return (
    <div className="min-h-screen bg-[#F2F0ED] selection:bg-[#B8860B] selection:text-white">
      <Navbar onHomeClick={handleBackToHome} />
      
      {/* Suspense to handle dynamic data from MarketTicker without blocking the main render */}
      <Suspense fallback={<div className="h-14 bg-black fixed top-20 w-full animate-pulse" />}>
        <MarketTicker />
      </Suspense>

      <main className="relative z-10">
        {currentView === 'home' ? (
          <>
            <Hero />
            <Calculator />
            <Features />
            <ChatDemo />
            <Territory />
          </>
        ) : (
          <LegalView view={currentView} onBack={handleBackToHome} />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
