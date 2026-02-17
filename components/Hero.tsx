
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center space-y-10">
        <div className="inline-flex items-center gap-3 border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-2 rounded-full backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]"></span>
          <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold">Premier GTA Sales Infrastructure</span>
        </div>
        
        <div className="space-y-6">
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight">
            Elevate Every <br className="hidden md:block" /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FAE088] to-[#D4AF37]">Lead Interaction</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-zinc-300 max-w-3xl mx-auto font-light leading-relaxed">
            Instant missed call response and white-glove AI concierge for the 1%. 
            <span className="text-white font-medium"> Recover $1M+ in annual GCI</span> with zero latency engagement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
          <a href="#territory" className="w-full sm:w-auto bg-[#D4AF37] text-zinc-950 text-base font-bold py-5 px-10 hover:bg-[#FAE088] transition-all transform hover:-translate-y-1 shadow-2xl shadow-[#D4AF37]/20 uppercase tracking-widest">
            Check Exclusivity
          </a>
          <a href="#demo" className="w-full sm:w-auto glass-panel text-white text-base font-semibold py-5 px-10 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group border border-white/10">
            <span>Live System Demo</span>
            <iconify-icon icon="solar:round-alt-arrow-right-bold" class="text-2xl text-[#D4AF37] group-hover:translate-x-1 transition-transform"></iconify-icon>
          </a>
        </div>
        
        <div className="pt-16 flex justify-center gap-12 opacity-40 grayscale hover:opacity-100 transition-opacity duration-700">
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold text-white">Top 1%</span>
             <span className="text-[10px] uppercase tracking-tighter">Producers Only</span>
           </div>
           <div className="w-[1px] h-10 bg-zinc-800"></div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold text-white">6 Sec</span>
             <span className="text-[10px] uppercase tracking-tighter">Avg Response</span>
           </div>
           <div className="w-[1px] h-10 bg-zinc-800"></div>
           <div className="flex flex-col items-center">
             <span className="text-2xl font-bold text-white">24/7</span>
             <span className="text-[10px] uppercase tracking-tighter">Availability</span>
           </div>
        </div>
      </div>
      
      {/* Decorative gradient for the bottom of the hero */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-zinc-950/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
