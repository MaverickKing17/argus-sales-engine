
import React from 'react';

interface NavbarProps {
  onHomeClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onHomeClick }) => {
  const scrollTo = (id: string) => {
    if (onHomeClick) onHomeClick();
    // Use a slight delay if switching from legal view back to home to ensure elements exist
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 group cursor-pointer" 
          onClick={() => {
            if (onHomeClick) onHomeClick();
            window.scrollTo({top: 0, behavior: 'smooth'});
          }}
        >
          <div className="w-10 h-10 border-2 border-[#B8860B] flex items-center justify-center rotate-45 group-hover:bg-[#B8860B] transition-all duration-500">
            <div className="w-5 h-5 bg-[#B8860B] group-hover:bg-white -rotate-45 transition-colors"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl tracking-[0.25em] font-black text-zinc-900 uppercase leading-none mb-1">ARGUS</span>
            <span className="text-[9px] tracking-[0.45em] text-[#B8860B] font-black uppercase leading-none">Intelligence</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-800">
          <button onClick={() => scrollTo('calculator')} className="hover:text-[#B8860B] transition-colors relative group">
            GCI Calculator
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => scrollTo('technology')} className="hover:text-[#B8860B] transition-colors relative group">
            Technology
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => scrollTo('demo')} className="hover:text-[#B8860B] transition-colors relative group">
            Concierge Demo
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] group-hover:w-full transition-all"></span>
          </button>
          <button onClick={() => scrollTo('territory')} className="hover:text-[#B8860B] transition-colors relative group">
            Territory
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#B8860B] group-hover:w-full transition-all"></span>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => scrollTo('territory')}
            className="hidden sm:block btn-luxury !py-3 !px-8 !text-[11px] rounded-lg shadow-lg"
          >
            Reserved Access
          </button>
          <button className="lg:hidden text-zinc-900 flex items-center">
            <iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
