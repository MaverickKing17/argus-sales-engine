
import React, { useState, useMemo } from 'react';

const Calculator: React.FC = () => {
  const [clientValue, setClientValue] = useState<string>('10000');
  const [missedCalls, setMissedCalls] = useState<string>('10');
  const [closeRate, setCloseRate] = useState<string>('5');
  const [results, setResults] = useState<{ leftOnTable: number, weCharge: number, roi: number } | null>(null);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const recoveredGCI = useMemo(() => {
    const value = parseFloat(clientValue) || 0;
    const callsPerWeek = parseFloat(missedCalls) || 0;
    const rate = parseFloat(closeRate) || 0;
    
    const annualMissedCalls = callsPerWeek * 52;
    const recoveredLeads = annualMissedCalls * (rate / 100);
    return recoveredLeads * value;
  }, [clientValue, missedCalls, closeRate]);

  const handleCalculate = () => {
    const value = parseFloat(clientValue) || 0;
    const calls = parseFloat(missedCalls) || 0;
    const rate = parseFloat(closeRate) || 0;

    const monthlyLeftOnTable = value * calls * 4 * (rate / 100);
    const charge = 1000; // Fixed charge for the example
    const roi = charge > 0 ? ((monthlyLeftOnTable - charge) / charge) * 100 : 0;

    setResults({
      leftOnTable: monthlyLeftOnTable,
      weCharge: charge,
      roi: roi
    });
  };

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
              <p className="text-zinc-900 text-lg leading-relaxed font-bold">
                Missed calls are missed commissions. In Toronto's high-velocity market, every second matters. ARGUS recovers your lost opportunities instantly.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-zinc-300 shadow-xl backdrop-blur-sm">
              <h3 className="text-3xl font-black text-zinc-950 text-center mb-8">ROI Calculator</h3>
              
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-black text-zinc-950 uppercase tracking-[0.1em]">Average Client Value:</label>
                  <input 
                    type="number" 
                    value={clientValue}
                    onChange={e => setClientValue(e.target.value)}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] text-zinc-900 font-bold text-lg transition-all"
                    placeholder="e.g. 10000"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-black text-zinc-950 uppercase tracking-[0.1em]">Missed Calls per Week:</label>
                  <input 
                    type="number" 
                    value={missedCalls}
                    onChange={e => setMissedCalls(e.target.value)}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] text-zinc-900 font-bold text-lg transition-all"
                    placeholder="e.g. 10"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[13px] font-black text-zinc-950 uppercase tracking-[0.1em]">Average Close Rate (%):</label>
                  <input 
                    type="number" 
                    value={closeRate}
                    onChange={e => setCloseRate(e.target.value)}
                    className="w-full p-4 bg-zinc-50 border border-zinc-200 rounded-xl focus:outline-none focus:border-[#B8860B] focus:ring-1 focus:ring-[#B8860B] text-zinc-900 font-bold text-lg transition-all"
                    placeholder="e.g. 5"
                  />
                </div>

                <button 
                  onClick={handleCalculate}
                  className="w-full bg-[#0035ad] text-white font-black uppercase tracking-[0.2em] py-4 rounded-xl mt-4 hover:bg-[#002a8a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Calculate ROI
                </button>

                {results && (
                  <div className="mt-8 pt-8 border-t border-zinc-200 space-y-4 text-center reveal-up">
                    <h4 className="text-2xl font-black text-zinc-950 mb-4">Results:</h4>
                    <p className="text-zinc-600 font-bold text-lg">Monthly $$$ Left on Table: <span className="font-black text-zinc-950">{formatCurrency(results.leftOnTable)}</span></p>
                    <p className="text-zinc-600 font-bold text-lg">We Charge (per month): <span className="font-black text-zinc-950">{formatCurrency(results.weCharge)}</span></p>
                    <p className="text-zinc-600 font-bold text-lg">ROI: <span className="font-black text-[#B8860B]">{results.roi.toFixed(0)}%</span></p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[#B8860B] blur-[150px] opacity-10"></div>
            <div className="relative bg-white p-16 text-center border-2 border-[#B8860B]/20 flex flex-col items-center justify-center min-h-[500px] shadow-2xl rounded-[3rem]">
              <div className="w-20 h-20 bg-[#B8860B]/10 border border-[#B8860B]/20 rounded-2xl flex items-center justify-center mb-10 shadow-sm">
                <iconify-icon icon="solar:banknote-bold" class="text-4xl text-[#B8860B]"></iconify-icon>
              </div>
              
              <p className="text-[12px] font-black uppercase tracking-[0.5em] text-zinc-950 mb-6">Recoverable Annual Capital</p>
              
              <div className="font-black text-6xl md:text-8xl text-zinc-950 tracking-tighter">
                {formatCurrency(recoveredGCI)}
              </div>
              
              <p className="mt-10 text-zinc-950 text-base max-w-sm mx-auto font-black leading-relaxed">
                Secure your dominance. Every missed call is a conversation with your competitor.
              </p>
              
              <div className="mt-14 w-full">
                <button 
                  onClick={() => scrollTo('territory')}
                  className="btn-luxury w-full py-6 rounded-xl text-sm font-black tracking-[0.3em]"
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
