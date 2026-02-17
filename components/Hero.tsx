
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-12">
        <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-black/40 px-6 py-2.5 rounded-full backdrop-blur-xl animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_12px_#D4AF37]"></span>
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] text-[#FAE088] font-black">Elite Toronto Sales Infrastructure</span>
        </div>
        
        <div className="space-y-8">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-9xl text-white leading-[0.95] tracking-tighter">
            THE ART OF <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAE088] via-[#D4AF37] to-[#FAE088]">CLOSING.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-200 max-w-3xl mx-auto font-light leading-relaxed">
            Eliminate the response gap. Capture, qualify, and convert luxury leads in 
            <span className="text-white font-semibold border-b border-[#D4AF37]/40 px-1 ml-1">under 6 seconds</span> 
            with AI-powered precision.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button 
            onClick={() => scrollTo('territory')}
            className="w-full sm:w-auto btn-gold py-5 px-12 text-sm"
          >
            Claim Your Territory
          </button>
          <button 
            onClick={() => scrollTo('demo')}
            className="w-full sm:w-auto glass-panel text-white text-sm font-bold py-5 px-12 hover:bg-white/5 transition-all flex items-center justify-center gap-3 group border border-white/10 uppercase tracking-widest"
          >
            <span>Live Experience</span>
            <iconify-icon icon="solar:round-alt-arrow-right-bold" class="text-2xl text-[#D4AF37] group-hover:translate-x-1 transition-transform"></iconify-icon>
          </button>
        </div>
        
        <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 opacity-60">
           <div className="flex flex-col items-center gap-1">
             <span className="text-3xl font-bold text-white tracking-tighter">Top 1%</span>
             <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Market Share</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <span className="text-3xl font-bold text-white tracking-tighter">6s</span>
             <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Response Time</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <span className="text-3xl font-bold text-white tracking-tighter">24/7</span>
             <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Lead Concierge</span>
           </div>
           <div className="flex flex-col items-center gap-1">
             <span className="text-3xl font-bold text-white tracking-tighter">0%</span>
             <span className="text-[9px] uppercase tracking-[0.2em] font-semibold">Missed Opportunity</span>
           </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#0c0c0e] to-transparent"></div>
    </section>
  );
};

export default Hero;
