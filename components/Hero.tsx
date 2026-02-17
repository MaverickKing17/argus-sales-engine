
import React from 'react';

const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Toronto Daytime Hero Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover brightness-[0.85]"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-toronto-city-skyline-during-the-day-27414-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pt-32 pb-20">
        <div className="inline-flex items-center gap-3 border border-zinc-300 bg-white/70 px-6 py-2 rounded-full backdrop-blur-md mb-12 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#B8860B] shadow-[0_0_8px_#B8860B]"></span>
          <span className="text-[11px] uppercase tracking-[0.4em] text-zinc-800 font-black">Elite GTA Sales Infrastructure</span>
        </div>
        
        <h1 className="font-extrabold text-6xl md:text-8xl lg:text-9xl text-zinc-900 leading-[0.95] tracking-tight mb-8">
          OWN THE <br />
          <span className="text-[#B8860B]">MARKET.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-zinc-700 max-w-4xl mx-auto font-medium leading-relaxed mb-12 bg-white/20 backdrop-blur-[2px] rounded-xl py-2">
          Precision AI for Toronto's top 1% real estate producers. <br className="hidden md:block" /> 
          Engage luxury leads in <span className="text-[#B8860B] font-bold">under 6 seconds</span>—24/7.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={() => scrollTo('territory')}
            className="w-full sm:w-auto btn-luxury rounded-lg text-sm"
          >
            Claim Exclusivity
          </button>
          <button 
            onClick={() => scrollTo('demo')}
            className="w-full sm:w-auto glass-panel text-zinc-900 text-sm font-bold py-5 px-12 hover:bg-white transition-all flex items-center justify-center gap-3 group border border-zinc-200 uppercase tracking-widest rounded-lg"
          >
            <span>Live System Demo</span>
            <iconify-icon icon="solar:play-bold" class="text-xl text-[#B8860B]"></iconify-icon>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
