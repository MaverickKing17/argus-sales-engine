
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black pt-32 pb-16 border-t border-white/10 overflow-hidden">
      {/* Architecture background */}
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
        alt="Toronto Skyline Facade" 
        className="section-bg-image opacity-[0.1]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#D4AF37] flex items-center justify-center rotate-45">
                <div className="w-4 h-4 bg-[#D4AF37] -rotate-45"></div>
              </div>
              <span className="text-2xl tracking-[0.25em] font-black text-white italic">ARGUS</span>
            </div>
            <p className="text-zinc-400 leading-relaxed font-light text-base italic">
              Empowering Toronto's most successful real estate advisors with autonomous sales intelligence. Precision. Privacy. Prestige.
            </p>
            <div className="flex gap-6">
              {['logo-linkedin', 'logo-instagram', 'logo-twitter'].map((icon) => (
                <a key={icon} href="#" className="text-zinc-500 hover:text-[#D4AF37] transition-all transform hover:scale-125">
                  <iconify-icon icon={`ion:${icon}`} width="24"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#FAE088] font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Elite Markets</h4>
            <ul className="space-y-4 text-zinc-500 font-medium">
              {['The Bridle Path', 'Rosedale & Moore Park', 'Forest Hill South', 'Yorkville / Annex', 'King City / Oakville'].map((m) => (
                <li key={m} className="hover:text-white cursor-pointer transition-colors flex items-center gap-3 group italic">
                  <span className="w-1 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all"></span> {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#FAE088] font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Strategic Compliance</h4>
            <ul className="space-y-6 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              <li className="flex items-center gap-4 border-b border-white/5 pb-2">
                <iconify-icon icon="solar:shield-check-bold-duotone" className="text-[#D4AF37] text-xl"></iconify-icon> 
                TRESA / RECO Compliant
              </li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-2">
                <iconify-icon icon="solar:lock-password-bold-duotone" className="text-[#D4AF37] text-xl"></iconify-icon> 
                PIPEDA Secure
              </li>
              <li className="flex items-center gap-4 border-b border-white/5 pb-2">
                <iconify-icon icon="solar:server-bold-duotone" className="text-[#D4AF37] text-xl"></iconify-icon> 
                CDN Data Residency
              </li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[#FAE088] font-black mb-8 tracking-[0.3em] uppercase text-[10px]">Toronto HQ</h4>
            <div className="space-y-6 text-zinc-400 font-light italic">
              <p className="leading-relaxed">
                First Canadian Place, 57th Floor<br />
                100 King Street West<br />
                Toronto, ON M5X 1C7
              </p>
              <div className="pt-6 border-t border-white/10 space-y-4 not-italic">
                <p className="flex items-center gap-4 group">
                  <iconify-icon icon="solar:phone-bold-duotone" className="text-[#D4AF37] text-xl group-hover:scale-125 transition-transform"></iconify-icon> 
                  <span className="text-white font-bold tracking-tight">416.555.0198</span>
                </p>
                <p className="flex items-center gap-4 group">
                  <iconify-icon icon="solar:letter-bold-duotone" className="text-[#D4AF37] text-xl group-hover:scale-125 transition-transform"></iconify-icon> 
                  <span className="text-white font-bold tracking-tight">concierge@argus.ai</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600">
          <p>© 2024 ARGUS AI SYSTEMS INC. | PRIVACY IS LUXURY.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">DDF Registry</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
