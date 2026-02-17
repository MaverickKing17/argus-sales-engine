
import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
  const [price, setPrice] = useState(2.5);
  const [calls, setCalls] = useState(12);

  const recoveredGCI = useMemo(() => {
    const priceInDollars = price * 1_000_000;
    const annualMissedCalls = calls * 12;
    const recoveredLeads = annualMissedCalls * 0.02; 
    const avgCommission = priceInDollars * 0.025; 
    return recoveredLeads * avgCommission;
  }, [price, calls]);

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <section id="calculator" className="relative py-32 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-bold text-4xl md:text-5xl text-white tracking-tight">The GCI Recovery <span className="text-[#D4AF37]">Engine</span></h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Most luxury teams lose 20-30% of their GCI simply because high-net-worth leads don't leave voicemails. They dial the next competitor. ARGUS captures them in seconds.
              </p>
            </div>

            <div className="space-y-10 glass-panel p-10 border-l-2 border-l-[#D4AF37]">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">Avg Portfolio Price</label>
                  <span className="text-3xl font-bold text-white tracking-tighter">${price}M</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="15" 
                  step="0.5" 
                  value={price} 
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex justify-between items-end">
                  <label className="text-xs font-black text-zinc-500 uppercase tracking-[0.2em]">Monthly Missed Opportunities</label>
                  <span className="text-3xl font-bold text-white tracking-tighter">{calls}</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="100" 
                  step="1" 
                  value={calls} 
                  onChange={(e) => setCalls(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-[120px] opacity-10 group-hover:opacity-20 transition-opacity duration-1000"></div>
            <div className="relative glass-panel p-16 text-center border border-white/10 flex flex-col items-center justify-center min-h-[450px] shadow-2xl">
              <div className="w-20 h-20 bg-zinc-950 border border-[#D4AF37]/30 rounded-full flex items-center justify-center mb-10 shadow-inner">
                <iconify-icon icon="solar:cash-out-bold" class="text-3xl text-[#D4AF37]"></iconify-icon>
              </div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 mb-6 font-bold">Annual GCI Leakage Prevented</p>
              <div className="font-bold text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter">
                {formatCurrency(recoveredGCI)}
              </div>
              <p className="mt-8 text-zinc-500 text-sm max-w-sm mx-auto leading-relaxed italic">
                "Speed to lead is the only differentiator left in luxury real estate."
              </p>
              <div className="mt-12">
                <a href="#territory" className="inline-flex items-center gap-3 text-[#D4AF37] border-b border-[#D4AF37]/50 pb-2 hover:border-[#D4AF37] transition-all font-bold uppercase tracking-widest text-xs">
                  <span>Reclaim This Capital</span>
                  <iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
