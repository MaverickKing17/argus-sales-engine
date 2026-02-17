
import React, { useEffect, useState } from 'react';
import { fetchMarketTrends } from '../services/geminiService';

const MarketTicker: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      const trends = await fetchMarketTrends();
      setData(trends);
    };
    getData();
  }, []);

  if (!data) return null;

  const items = [
    { label: 'Detached Avg', value: data.detachedAvg },
    { label: 'Semi-Detached Avg', value: data.semiAvg },
    { label: 'Condo Avg', value: data.condoAvg },
    { label: 'Sales Volume', value: data.salesVolume },
    { label: 'Market Status', value: data.trendDirection },
    { label: 'Source', value: `TRREB ${data.reportMonth}` },
  ];

  return (
    <div className="fixed top-20 w-full z-40 bg-black/80 backdrop-blur-md border-b border-white/5 h-10 overflow-hidden flex items-center">
      <div className="flex items-center gap-4 px-6 border-r border-white/10 h-full bg-[#D4AF37]/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#D4AF37] whitespace-nowrap">Market Live</span>
      </div>
      
      <div className="relative flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker py-2">
          {[...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-10 border-r border-white/5 last:border-r-0">
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">{item.label}</span>
              <span className="text-xs font-black text-white">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 40s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
