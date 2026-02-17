
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border border-[#D4AF37] flex items-center justify-center rotate-45">
            <div className="w-4 h-4 bg-[#D4AF37] -rotate-45"></div>
          </div>
          <span className="text-lg tracking-widest font-semibold text-white ml-2">ARGUS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#calculator" className="hover:text-[#D4AF37] transition-colors">GCI Calculator</a>
          <a href="#technology" className="hover:text-[#D4AF37] transition-colors">Technology</a>
          <a href="#territory" className="hover:text-[#D4AF37] transition-colors">Territory</a>
          <a href="#demo" className="hover:text-[#D4AF37] transition-colors">Live Demo</a>
        </div>
        <a href="#territory" className="bg-[#D4AF37] text-zinc-950 text-sm font-semibold py-2.5 px-6 hover:bg-[#b5952f] transition-colors shadow-[0_0_15px_rgba(212,175,55,0.3)] tracking-wide">
          Check Availability
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
