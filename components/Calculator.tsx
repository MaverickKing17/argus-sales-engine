
import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
  const [price, setPrice] = useState(2.5);
  const [calls, setCalls] = useState(12);

  const recoveredGCI = useMemo(() => {
    // Calculation: Missed Calls * 12 months * 2% conversion * (Price * 1M * 2.5% commission)
    const priceInDollars = price * 1_000_000;
    const annualMissedCalls = calls * 12;
    const recoveredLeads = annualMissedCalls * 0.02; // Conservative 2% recovery to closing
    const avgCommission = priceInDollars * 0.025; // 2.5% standard
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
    <section id="calculator" className="relative py-24 border-y border-white/5 bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <h2 className="font-semibold text-4xl text-white tracking-tight">The Cost of Silence</h2>
              <p className="text-zinc-400 text-lg">Calculate the annual GCI currently slipping through the cracks due to missed calls and delayed responses.</p>
            </div>

            <div className="space-y-8 glass-panel p-8 rounded-none border-l-4 border-l-[#D4AF37]">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Average Listing Price</label>
                  <span className="text-2xl font-semibold text-white tracking-tight">${price}M</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  step="0.1" 
                  value={price} 
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>$1M</span>
                  <span>$10M+</span>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-zinc-700">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-semibold text-zinc-300 uppercase tracking-wide">Monthly Missed Calls</label>
                  <span className="text-2xl font-semibold text-white tracking-tight">{calls}</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="50" 
                  step="1" 
                  value={calls} 
                  onChange={(e) => setCalls(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-zinc-500 font-mono">
                  <span>1 Call</span>
                  <span>50 Calls</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
            <div className="relative glass-panel p-12 text-center border border-[#D4AF37]/30 flex flex-col items-center justify-center min-h-[400px]">
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-400 mb-6 font-semibold">Potential Annual GCI Recovered</p>
              <div className="font-semibold text-6xl md:text-7xl lg:text-8xl text-[#D4AF37] drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] tracking-tight">
                {formatCurrency(recoveredGCI)}
              </div>
              <p className="mt-6 text-zinc-500 text-sm max-w-xs mx-auto">
                Based on a conservative 2% conversion rate from recovered missed calls.
              </p>
              <div className="mt-10">
                <a href="#territory" className="inline-flex items-center gap-2 text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors font-medium">
                  <span>Reclaim This Revenue</span>
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
