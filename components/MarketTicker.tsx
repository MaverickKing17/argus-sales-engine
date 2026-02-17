
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
    { label: 'DETACHED AVG', value: data.detachedAvg },
    { label: 'SEMI-DETACHED AVG', value: data.semiAvg },
    { label: 'CONDO AVG', value: data.condoAvg },
    { label: 'SALES VOLUME', value: data.salesVolume },
    { label: 'MARKET STATUS', value: data.trendDirection },
    { label: 'SOURCE', value: `TRREB ${data.reportMonth}` },
  ];

  return (
    <div className="fixed top-20 w-full z-40 ticker-blue shadow-lg h-12 overflow-hidden flex items-center border-b border-white/10">
      <div className="flex items-center gap-3 px-6 border-r border-white/20 h-full bg-black/20">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </span>
        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white whitespace-nowrap">MARKET LIVE</span>
      </div>
      
      <div className="relative flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker items-center h-full">
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-4 px-12 h-full">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-200/80">{item.label}</span>
              <span className="text-sm font-black text-white">{item.value}</span>
              {i % 2 === 0 ? (
                <iconify-icon icon="solar:graph-up-bold" class="text-green-400 text-lg"></iconify-icon>
              ) : (
                <iconify-icon icon="solar:graph-down-bold" class="text-red-400 text-lg"></iconify-icon>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-ticker {
          animation: ticker 60s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
