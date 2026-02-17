
import React from 'react';
import Navbar from './components/Navbar';
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
      <Hero />
      <Calculator />
      <Features />
      <ChatDemo />
      <Territory />
      <Footer />
    </div>
  );
};

export default App;
