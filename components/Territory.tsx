
import React from 'react';
import { TerritoryStatus } from '../types';

const statusData: TerritoryStatus[] = [
  { name: 'Yorkville & Annex', status: 'Locked' },
  { name: 'The Bridle Path', status: 'Locked' },
  { name: 'Forest Hill South', status: 'Waitlist' },
  { name: 'Rosedale / Moore Park', status: 'Limited' },
];

const Territory: React.FC = () => {
  return (
    <section id="territory" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Yorkville architectural detail */}
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop" 
        alt="Elite Real Estate" 
        className="section-bg-image opacity-[0.15]"
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-10">
          <h2 className="font-bold text-5xl md:text-6xl text-white tracking-tighter leading-none italic">
            TERRITORY <br /><span className="text-[#D4AF37]">EXCLUSIVITY.</span>
          </h2>
          <p className="text-zinc-400 text-xl font-light italic leading-relaxed">
            We strictly limit ARGUS to non-competing teams. Once a neighborhood is claimed, the infrastructure is locked to your competition.
          </p>
          
          <div className="space-y-4">
            {statusData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-6 glass-panel border-l-4 border-l-[#D4AF37]/50 hover:border-l-[#D4AF37] transition-all">
                <span className="text-white font-bold tracking-tight text-lg">{item.name}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest border-2 px-3 py-1.5 ${
                  item.status === 'Locked' ? 'text-[#D4AF37] border-[#D4AF37] bg-[#D4AF37]/5' :
                  item.status === 'Waitlist' ? 'text-zinc-500 border-zinc-700' :
                  'text-emerald-500 border-emerald-900/50 bg-emerald-900/10'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full btn-luxury shadow-2xl">
            Check My Market Availability
          </button>
        </div>

        <div className="relative glass-panel p-1 border-white/10 rounded-3xl overflow-hidden group shadow-[0_0_100px_rgba(212,175,55,0.1)]">
           <img 
             src="https://images.unsplash.com/photo-1628592102751-ba83b03bc677?q=80&w=1200&auto=format&fit=crop" 
             alt="Toronto Luxury Facade" 
             className="w-full h-[600px] object-cover rounded-3xl group-hover:scale-110 transition-transform duration-[3s]"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
           <div className="absolute bottom-10 left-10 right-10 text-center">
             <p className="text-[10px] uppercase tracking-[0.4em] text-[#FAE088] font-bold mb-2">Neighborhood Spotlight</p>
             <p className="text-3xl font-bold text-white italic tracking-tighter">The Bridle Path Estates</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Territory;
