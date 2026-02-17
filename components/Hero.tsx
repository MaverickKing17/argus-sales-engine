
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Toronto Skyline Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503106628544-27318fef6252?q=80&w=2000&auto=format&fit=crop" 
          alt="Toronto Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-zinc-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-20">
        <div className="inline-flex items-center gap-3 border border-[#D4AF37]/50 bg-black/50 px-6 py-2 rounded-full backdrop-blur-md mb-12">
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_10px_#D4AF37]"></span>
          <span className="text-[10px] uppercase tracking-[0.5em] text-[#FAE088] font-bold">The Gold Standard in GTA Real Estate AI</span>
        </div>
        
        <h1 className="font-extrabold text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tighter italic mb-8">
          OWN THE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FAE088] via-[#D4AF37] to-[#FAE088]">MARKET.</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-zinc-100 max-w-4xl mx-auto font-light leading-relaxed mb-12">
          Elite sales infrastructure for the GTA's top producers. <br className="hidden md:block" /> 
          Capture luxury leads in <span className="text-[#D4AF37] font-semibold italic">under 6 seconds</span>—24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => scrollTo('territory')}
            className="w-full sm:w-auto btn-luxury"
          >
            Claim Exclusivity
          </button>
          <button 
            onClick={() => scrollTo('demo')}
            className="w-full sm:w-auto glass-panel text-white text-sm font-bold py-5 px-12 hover:bg-white/10 transition-all flex items-center justify-center gap-3 group border border-white/20 uppercase tracking-[0.2em]"
          >
            <span>Live System Demo</span>
            <iconify-icon icon="solar:double-alt-arrow-right-bold-duotone" class="text-2xl text-[#D4AF37] group-hover:translate-x-2 transition-transform"></iconify-icon>
          </button>
        </div>
      </div>
      
      {/* Floating high-end stats overlay */}
      <div className="absolute bottom-12 left-0 w-full z-10 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-4">
           {[
             { label: 'Market Segment', val: 'Luxury Top 1%' },
             { label: 'Response Target', val: '< 6 Seconds' },
             { label: 'GCI Recovery', val: '$1.2M Avg/yr' },
             { label: 'Status', val: 'Locked-In' }
           ].map((stat, i) => (
             <div key={i} className="glass-panel p-6 border-t-2 border-t-[#D4AF37]">
               <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-1">{stat.label}</p>
               <p className="text-xl font-bold text-white tracking-tight">{stat.val}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
