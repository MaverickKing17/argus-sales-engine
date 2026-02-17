
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#F2F0ED] pt-32 pb-12 border-t border-zinc-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#B8860B] flex items-center justify-center rotate-45">
                <div className="w-4 h-4 bg-[#B8860B] -rotate-45"></div>
              </div>
              <span className="text-2xl tracking-[0.1em] font-black text-zinc-900">ARGUS</span>
            </div>
            <p className="text-zinc-950 leading-relaxed font-bold text-sm">
              Empowering the Greater Toronto Area's most successful real estate advisors with autonomous sales intelligence. Verified by TRESA and RECO standards.
            </p>
            <div className="flex gap-4">
              {['logo-linkedin', 'logo-instagram', 'logo-twitter'].map((icon) => (
                <a key={icon} href="#" className="w-10 h-10 bg-white border border-zinc-200 flex items-center justify-center rounded-lg text-zinc-900 hover:text-[#B8860B] hover:border-[#B8860B] transition-all shadow-sm">
                  <iconify-icon icon={`ion:${icon}`} width="20"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-950 font-black mb-8 tracking-widest uppercase text-[11px]">Elite Postcodes</h4>
            <ul className="space-y-4 text-zinc-950 text-sm font-bold">
              {['The Bridle Path', 'Rosedale & Moore Park', 'Yorkville / Annex', 'King City / Oakville'].map((m) => (
                <li key={m} className="hover:text-[#B8860B] cursor-pointer transition-colors flex items-center gap-2">
                   {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-950 font-black mb-8 tracking-widest uppercase text-[11px]">Compliance Desk</h4>
            <ul className="space-y-4 text-zinc-950 text-sm font-bold">
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:shield-check-bold" className="text-[#B8860B]"></iconify-icon> 
                TRESA / RECO Compliant
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:lock-bold" className="text-[#B8860B]"></iconify-icon> 
                PIPEDA Certified (Canada)
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:globus-bold" className="text-[#B8860B]"></iconify-icon> 
                Ontario Privacy Act (OPA)
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-zinc-950 font-black mb-8 tracking-widest uppercase text-[11px]">Corporate Office</h4>
            <div className="space-y-4 text-zinc-950 text-sm font-bold">
              <p>First Canadian Place, 57th Floor<br />Toronto, ON M5X 1C7</p>
              <p className="text-[#B8860B] font-black underline">concierge@argus.ai</p>
              <p className="text-zinc-950 font-black">416.555.0198</p>
            </div>
          </div>
        </div>

        {/* Legal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 border-y border-zinc-200 text-zinc-950 text-[12px] font-bold">
          <div className="space-y-4">
            <h5 className="uppercase tracking-[0.2em] font-black text-[#B8860B]">Disclaimer & MLS® Compliance</h5>
            <p className="leading-relaxed opacity-80">
              The info provided is for general knowledge. ARGUS is an AI sales platform and not a licensed brokerage. All MLS® listings are subject to TRREB and CREA® data integrity rules. We do not guarantee the accuracy of AI-generated property valuations.
            </p>
          </div>
          <div className="space-y-4">
            <h5 className="uppercase tracking-[0.2em] font-black text-[#B8860B]">Privacy & PIPEDA</h5>
            <p className="leading-relaxed opacity-80">
              We adhere strictly to Canada's Personal Information Protection and Electronic Documents Act (PIPEDA). All lead data is encrypted and housed on Canadian servers to ensure sovereignty for Toronto brokerages.
            </p>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] text-zinc-950">
          <p>© 2026. ARGUS Elite Intelligence Systems. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="hover:text-[#B8860B] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Service Terms</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">DMCA Notice</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-[#B8860B] transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
