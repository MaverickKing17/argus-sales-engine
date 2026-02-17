
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/122/1600/900" 
          alt="Luxury Estate" 
          className="w-full h-full object-cover opacity-20 grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-zinc-950/0 to-zinc-950/0"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
        <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 rounded-full backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
          <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Exclusive to Top 1% Producers</span>
        </div>
        
        <h1 className="font-semibold text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] tracking-tight">
          Stop Losing <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#FAE088]">Commission</span> to the Response Gap.
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Instant Missed Call Text-Back + AI Concierge for the GTA’s Elite Teams. Recover high-net-worth leads in <span className="text-white font-semibold border-b border-[#D4AF37]/50">6 seconds, 24/7</span>.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a href="#territory" className="w-full sm:w-auto bg-[#D4AF37] text-zinc-950 text-base font-semibold py-4 px-8 hover:bg-[#b5952f] transition-all transform hover:scale-[1.02] shadow-xl shadow-[#D4AF37]/20">
            Check Territory Exclusivity
          </a>
          <a href="#demo" className="w-full sm:w-auto border border-zinc-700 text-white text-base font-medium py-4 px-8 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 group">
            <span>Try Live Demo</span>
            <iconify-icon icon="solar:play-circle-linear" class="text-xl text-[#D4AF37] group-hover:text-white transition-colors" width="24"></iconify-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
