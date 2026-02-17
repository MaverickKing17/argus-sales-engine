
import React from 'react';

const Navbar: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

        <div className="hidden lg:flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
          <button onClick={() => scrollTo('calculator')} className="hover:text-[#D4AF37] transition-colors relative group">
            GCI Calculator
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => scrollTo('technology')} className="hover:text-[#D4AF37] transition-colors relative group">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => scrollTo('demo')} className="hover:text-[#D4AF37] transition-colors relative group">
            Concierge Demo
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => scrollTo('territory')} className="hover:text-[#D4AF37] transition-colors relative group">
            Territory
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] group-hover:w-full transition-all"></span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollTo('territory')}
            className="hidden sm:block btn-gold py-2.5 px-6 text-[10px]"
          >
            Reserved Access
          </button>
          <button className="lg:hidden text-white">
            <iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
