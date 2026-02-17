
import React from 'react';
import { TerritoryStatus } from '../types';

const statusData: TerritoryStatus[] = [
  { name: 'The Bridle Path', status: 'Locked' },
  { name: 'Forest Hill South', status: 'Waitlist' },
  { name: 'Rosedale', status: 'Limited' },
];

const Territory: React.FC = () => {
  return (
    <section id="territory" className="py-24 bg-zinc-900/30 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8 order-2 lg:order-1">
          <h2 className="font-semibold text-4xl md:text-5xl text-white tracking-tight">Territory Availability</h2>
          <p className="text-zinc-400 text-lg">We strictly limit ARGUS access to non-competing teams in specific high-value GTA neighborhoods to maintain your competitive advantage.</p>
          
          <div className="space-y-4">
            {statusData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-zinc-800 bg-zinc-950/50">
                <span className="text-white font-medium">{item.name}</span>
                <span className={`text-xs font-bold uppercase tracking-wider border px-2 py-1 ${
                  item.status === 'Locked' ? 'text-[#D4AF37] border-[#D4AF37]' :
                  item.status === 'Waitlist' ? 'text-zinc-500 border-zinc-700' :
                  'text-emerald-500 border-emerald-900/50 bg-emerald-900/10'
                }`}>
                  Status: {item.status}
                </span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#D4AF37] text-zinc-950 text-base font-semibold py-4 px-8 hover:bg-[#b5952f] transition-all mt-4 tracking-wide shadow-lg shadow-[#D4AF37]/20">
            Verify Your Territory
          </button>
        </div>

        <div className="relative order-1 lg:order-2 h-[400px] lg:h-[500px] glass-panel border border-zinc-800 p-8 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="relative z-10 w-full h-full max-w-sm mx-auto">
            <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-[#D4AF37] bg-[#D4AF37]/10 flex items-center justify-center">
              <iconify-icon icon="solar:lock-password-linear" class="text-[#D4AF37] text-2xl"></iconify-icon>
            </div>
            <div className="absolute top-[22%] left-[22%] text-xs text-[#D4AF37] font-mono tracking-widest uppercase">Bridle Path</div>

            <div className="absolute bottom-1/3 right-1/4 w-32 h-20 border border-zinc-700 bg-zinc-800/20 flex items-center justify-center animate-pulse">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            </div>
            <div className="absolute bottom-[30%] right-[20%] text-xs text-zinc-500 font-mono tracking-widest uppercase">Rosedale</div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <line x1="30%" y1="30%" x2="70%" y2="60%" stroke="white" strokeWidth="1" strokeDasharray="5,5"></line>
              <circle cx="30%" cy="30%" r="3" fill="#D4AF37"></circle>
              <circle cx="70%" cy="60%" r="3" fill="#555"></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Territory;
