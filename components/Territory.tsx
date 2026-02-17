
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
    <section id="territory" className="relative py-32 bg-[#F2F0ED] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-10">
          <h2 className="font-extrabold text-5xl md:text-6xl text-zinc-900 tracking-tight leading-none">
            TERRITORY <br /><span className="text-[#B8860B]">EXCLUSIVITY.</span>
          </h2>
          <p className="text-zinc-600 text-xl font-medium leading-relaxed">
            We partner with one elite team per core neighborhood. Secure your market dominance before the competition locks you out.
          </p>
          
          <div className="space-y-3">
            {statusData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-5 bg-white/60 border border-zinc-200/50 rounded-xl hover:border-[#B8860B] transition-all group backdrop-blur-sm">
                <span className="text-zinc-800 font-bold tracking-tight text-lg group-hover:text-zinc-900">{item.name}</span>
                <span className={`text-[10px] font-black uppercase tracking-widest border-2 px-3 py-1.5 rounded-md ${
                  item.status === 'Locked' ? 'text-[#B8860B] border-[#B8860B] bg-[#B8860B]/5' :
                  item.status === 'Waitlist' ? 'text-zinc-400 border-zinc-200' :
                  'text-emerald-600 border-emerald-100 bg-emerald-50'
                }`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full btn-luxury rounded-lg shadow-lg">
            Check Market Availability
          </button>
        </div>

        <div className="relative p-2 bg-white/40 border border-zinc-200/50 rounded-[2.5rem] shadow-2xl group overflow-hidden">
           <img 
             src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop" 
             alt="Elite Real Estate" 
             className="w-full h-[600px] object-cover rounded-[2rem] group-hover:scale-105 transition-transform duration-[4s]"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
           <div className="absolute bottom-10 left-10 right-10 text-center">
             <p className="text-[10px] uppercase tracking-[0.4em] text-white font-black mb-2">NEIGHBORHOOD SPOTLIGHT</p>
             <p className="text-3xl font-black text-white tracking-tight">THE BRIDLE PATH</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Territory;
