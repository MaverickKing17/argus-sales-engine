
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
    <section id="calculator" className="relative py-32 bg-[#F2F0ED] border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-extrabold text-5xl md:text-6xl text-zinc-900 tracking-tight leading-none">
                THE REVENUE <br /><span className="text-[#B8860B]">LEAKAGE.</span>
              </h2>
              <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                Missed calls are missed commissions. In Toronto's high-velocity market, every second matters. ARGUS recovers your lost opportunities instantly.
              </p>
            </div>

            <div className="space-y-10 bg-white/40 p-12 rounded-3xl border border-zinc-200/50 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">MEDIAN PORTFOLIO PRICE</label>
                  <span className="text-3xl font-black text-zinc-900 tracking-tighter">${price}M</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="20" 
                  step="0.5" 
                  value={price} 
                  onChange={(e) => setPrice(parseFloat(e.target.value))}
                  className="w-full accent-[#B8860B]"
                />
              </div>

              <div className="space-y-6 pt-6 border-t border-zinc-200/50">
                <div className="flex justify-between items-end">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.3em]">MONTHLY MISSED ENQUIRIES</label>
                  <span className="text-3xl font-black text-zinc-900 tracking-tighter">{calls}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  step="1" 
                  value={calls} 
                  onChange={(e) => setCalls(parseInt(e.target.value))}
                  className="w-full accent-[#B8860B]"
                />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#B8860B] blur-[150px] opacity-10"></div>
            <div className="relative bg-white p-16 text-center border border-zinc-100 flex flex-col items-center justify-center min-h-[500px] shadow-2xl rounded-[3rem]">
              <div className="w-20 h-20 bg-zinc-50 border border-zinc-100 rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                <iconify-icon icon="solar:banknote-bold" class="text-4xl text-[#B8860B]"></iconify-icon>
              </div>
              
              <p className="text-[11px] font-black uppercase tracking-[0.5em] text-zinc-400 mb-6">Recoverable Annual Capital</p>
              
              <div className="font-black text-6xl md:text-8xl text-[#B8860B] tracking-tighter">
                {formatCurrency(recoveredGCI)}
              </div>
              
              <p className="mt-10 text-zinc-600 text-sm max-w-sm mx-auto font-medium leading-relaxed">
                Secure your dominance. Every missed call is a conversation with your competitor.
              </p>
              
              <div className="mt-14 w-full">
                <button 
                  onClick={() => scrollTo('territory')}
                  className="btn-luxury w-full py-5 rounded-xl text-sm"
                >
                  Secure My Territory
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
