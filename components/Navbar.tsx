
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-panel border-b border-white/5 shadow-2xl">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 border-2 border-[#D4AF37] flex items-center justify-center rotate-45 group-hover:bg-[#D4AF37] transition-all duration-500">
            <div className="w-5 h-5 bg-[#D4AF37] group-hover:bg-zinc-950 -rotate-45 transition-colors"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl tracking-[0.25em] font-bold text-white">ARGUS</span>
            <span className="text-[8px] tracking-[0.4em] text-[#D4AF37] font-semibold uppercase leading-none">Intelligence</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-zinc-400">
          <a href="#calculator" className="hover:text-[#D4AF37] transition-colors relative group">
            GCI Calculator
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </a>
          <a href="#technology" className="hover:text-[#D4AF37] transition-colors relative group">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </a>
          <a href="#demo" className="hover:text-[#D4AF37] transition-colors relative group">
            Concierge Demo
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </a>
          <a href="#territory" className="hover:text-[#D4AF37] transition-colors relative group">
            Territory
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a href="#territory" className="hidden sm:block bg-[#D4AF37] text-zinc-950 text-[10px] font-black py-2.5 px-6 hover:bg-[#FAE088] transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)] tracking-[0.2em] uppercase">
            Reserved Login
          </a>
          <button className="lg:hidden text-white">
            <iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
