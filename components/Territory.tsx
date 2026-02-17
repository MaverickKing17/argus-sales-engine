
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
          <div className="space-y-4">
            <p className="text-[#B8860B] font-black uppercase tracking-[0.4em] text-[10px]">Strategic Market Placement</p>
            <h2 className="font-extrabold text-5xl md:text-6xl text-zinc-900 tracking-tight leading-none">
              TERRITORY <br /><span className="text-[#B8860B]">EXCLUSIVITY.</span>
            </h2>
          </div>
          <p className="text-zinc-600 text-xl font-medium leading-relaxed">
            We partner with one elite team per core neighborhood. Secure your market dominance before the competition locks you out of the city's most lucrative postcodes.
          </p>
          
          <div className="space-y-3">
            {statusData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-5 bg-white border border-zinc-200 rounded-xl hover:border-[#B8860B] transition-all group shadow-sm hover:shadow-md">
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

          <button className="w-full btn-luxury rounded-lg shadow-xl !py-6">
            Check Market Availability
          </button>
        </div>

        <div className="relative p-3 bg-white border border-zinc-200 rounded-[3rem] shadow-2xl group overflow-hidden">
           {/* Sun-drenched luxury home image for Bridle Path context */}
           <img 
             src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2000&auto=format&fit=crop" 
             alt="Luxury Bridle Path Estate" 
             className="w-full h-[650px] object-cover rounded-[2.5rem] group-hover:scale-105 transition-transform duration-[8s] ease-out"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
           <div className="absolute bottom-12 left-12 right-12 text-center">
             <div className="inline-block px-5 py-2 bg-[#B8860B] text-white text-[10px] font-black uppercase tracking-[0.3em] mb-4 rounded-full shadow-lg">
               Market Leader Spotlight
             </div>
             <p className="text-[12px] uppercase tracking-[0.5em] text-white font-bold mb-2 drop-shadow-md">EXCLUSIVE LISTING TERRITORY</p>
             <p className="text-5xl font-black text-white tracking-tighter drop-shadow-lg">THE BRIDLE PATH</p>
             <div className="mt-6 flex items-center justify-center gap-6">
               <div className="text-center">
                 <p className="text-[#B8860B] text-[10px] font-black uppercase tracking-widest">Avg Price</p>
                 <p className="text-white font-bold text-xl">$18.5M</p>
               </div>
               <div className="w-[1px] h-10 bg-white/20"></div>
               <div className="text-center">
                 <p className="text-[#B8860B] text-[10px] font-black uppercase tracking-widest">Status</p>
                 <p className="text-white font-bold text-xl uppercase">Locked</p>
               </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Territory;
