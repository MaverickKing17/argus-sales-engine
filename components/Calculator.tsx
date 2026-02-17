
import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
  const [price, setPrice] = useState(3.5);
  const [calls, setCalls] = useState(15);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

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
            <div className="space-y-6">
              <h2 className="font-bold text-5xl md:text-6xl text-white tracking-tighter leading-none">
                THE REVENUE <br /><span className="text-[#D4AF37]">LEAKAGE.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed font-light">
                In Toronto's high-velocity luxury market, silence is a $1M+ annual cost. When you miss a call, you aren't just missing a conversation—you're losing a listing.
              </p>
            </div>

            <div className="space-y-10 glass-panel p-10 border-l-4 border-l-[#D4AF37]">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Portfolio Median Price</label>
                  <span className="text-3xl font-bold text-white tracking-tighter">${price}M</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  step="0.5" 
                  value={price} 
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="space-y-6 pt-6 border-t border-white/5">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Monthly Missed Enquiries</label>
                  <span className="text-3xl font-bold text-white tracking-tighter">{calls}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="1" 
                  value={calls} 
                  onChange={(e) => setCalls(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#D4AF37] blur-[150px] opacity-20"></div>
            <div className="relative glass-panel p-16 text-center border border-white/10 flex flex-col items-center justify-center min-h-[500px] shadow-2xl rounded-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-bl-full border-l border-b border-[#D4AF37]/20"></div>
              
              <div className="w-20 h-20 bg-black/40 border border-[#D4AF37]/40 rounded-full flex items-center justify-center mb-10">
                <iconify-icon icon="solar:banknote-bold" class="text-4xl text-[#D4AF37]"></iconify-icon>
              </div>
              
              <p className="text-[11px] uppercase tracking-[0.5em] text-[#FAE088] mb-6 font-black">Recoverable Annual Capital</p>
              
              <div className="font-bold text-6xl md:text-8xl text-white tracking-tighter animate-pulse">
                {formatCurrency(recoveredGCI)}
              </div>
              
              <p className="mt-10 text-zinc-400 text-sm max-w-sm mx-auto font-light leading-relaxed">
                Reclaim your market dominance. Secure every enquiry with ARGUS autonomous intelligence.
              </p>
              
              <div className="mt-14 w-full">
                <button 
                  onClick={() => scrollTo('territory')}
                  className="btn-gold w-full py-5 text-sm"
                >
                  Secure My GCI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
