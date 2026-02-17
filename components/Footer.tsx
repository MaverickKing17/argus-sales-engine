
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white pt-32 pb-12 border-t border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#B8860B] flex items-center justify-center rotate-45">
                <div className="w-4 h-4 bg-[#B8860B] -rotate-45"></div>
              </div>
              <span className="text-2xl tracking-[0.1em] font-black text-zinc-900">ARGUS</span>
            </div>
            <p className="text-zinc-500 leading-relaxed font-medium text-sm">
              Empowering the Greater Toronto Area's most successful real estate advisors with autonomous sales intelligence.
            </p>
            <div className="flex gap-4">
              {['logo-linkedin', 'logo-instagram', 'logo-twitter'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 border border-zinc-100 flex items-center justify-center rounded-lg text-zinc-400 hover:text-[#B8860B] hover:border-[#B8860B] transition-all">
                  <iconify-icon icon={`ion:${icon}`} width="20"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-900 font-bold mb-8 tracking-widest uppercase text-[10px]">Territories</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              {['The Bridle Path', 'Rosedale & Moore Park', 'Yorkville / Annex', 'King City / Oakville'].map((m) => (
                <li key={m} className="hover:text-zinc-900 cursor-pointer transition-colors flex items-center gap-2">
                   {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-900 font-bold mb-8 tracking-widest uppercase text-[10px]">Trust & Legal</h4>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:shield-check-bold" className="text-[#B8860B]"></iconify-icon> 
                TRESA / RECO Compliant
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:lock-bold" className="text-[#B8860B]"></iconify-icon> 
                PIPEDA Certified
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:globus-bold" className="text-[#B8860B]"></iconify-icon> 
                Canadian Residency
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-zinc-900 font-bold mb-8 tracking-widest uppercase text-[10px]">Contact Desk</h4>
            <div className="space-y-4 text-zinc-500 text-sm font-medium">
              <p>First Canadian Place, 57th Floor<br />Toronto, ON M5X 1C7</p>
              <p className="text-zinc-900 font-bold">concierge@argus.ai</p>
              <p className="text-zinc-900 font-bold">416.555.0198</p>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          <p>Copyright 2026. ARGUS Elite, Inc. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Service Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
