
import React, { useEffect, useState } from 'react';
import { fetchMarketTrends } from '../services/geminiService';

const MarketTicker: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const trends = await fetchMarketTrends();
        setData(trends);
      } catch (e) {
        // Handled silently in service
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const displayData = data || {
    detachedAvg: "$1,495,000",
    semiAvg: "$1,135,000",
    condoAvg: "$732,000",
    salesVolume: "4,900+",
    trendDirection: "Stable-Up",
    reportMonth: "March 2026"
  };

  const items = [
    { label: 'DETACHED AVG', value: displayData.detachedAvg },
    { label: 'SEMI-DETACHED AVG', value: displayData.semiAvg },
    { label: 'CONDO AVG', value: displayData.condoAvg },
    { label: 'SALES VOLUME', value: displayData.salesVolume },
    { label: 'MARKET STATUS', value: displayData.trendDirection },
    { label: 'SOURCE', value: `TRREB ${displayData.reportMonth}` },
  ];

  return (
    <div className="fixed top-20 w-full z-40 bg-[#0035ad] shadow-2xl h-14 overflow-hidden flex items-center border-b border-white/10">
      {/* Fixed Label Section - Darker shade for depth */}
      <div className="flex items-center gap-4 px-8 h-full bg-[#00267d] border-r border-white/20 shrink-0 z-10 shadow-[4px_0_15px_rgba(0,0,0,0.2)]">
        <span className="relative flex h-3 w-3">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${loading ? 'bg-white/30' : 'bg-white'} opacity-75`}></span>
          <span className={`relative inline-flex rounded-full h-3 w-3 ${loading ? 'bg-white/50' : 'bg-white'}`}></span>
        </span>
        <span className="text-[12px] font-black uppercase tracking-[0.25em] text-white whitespace-nowrap" style={{ fontFamily: '"Segoe UI", sans-serif' }}>
          GTA MARKET LIVE
        </span>
      </div>
      
      {/* Scrolling Content */}
      <div className="relative flex-1 overflow-hidden">
        <div className="flex whitespace-nowrap animate-ticker items-center h-full">
          {[...items, ...items, ...items].map((item, i) => (
            <div key={i} className="flex items-center gap-6 px-16 h-full border-r border-white/5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70" style={{ fontFamily: '"Segoe UI", sans-serif' }}>
                {item.label}
              </span>
              <span className="text-lg font-black text-white tracking-tighter" style={{ fontFamily: '"Segoe UI", sans-serif' }}>
                {item.value}
              </span>
              {i % 2 === 0 ? (
                <iconify-icon icon="solar:graph-up-bold" class="text-emerald-300 text-xl"></iconify-icon>
              ) : (
                <iconify-icon icon="solar:graph-down-bold" class="text-rose-300 text-xl"></iconify-icon>
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
          animation: ticker 50s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
