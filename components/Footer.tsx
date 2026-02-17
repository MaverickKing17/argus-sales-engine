
import React from 'react';
import { AppView } from '../types';

interface FooterProps {
  onNavigate: (view: AppView) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-[#F2F0ED] pt-32 pb-16 border-t border-zinc-200/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border-2 border-[#B8860B] flex items-center justify-center rotate-45">
                <div className="w-4 h-4 bg-[#B8860B] -rotate-45"></div>
              </div>
              <span className="text-2xl tracking-[0.1em] font-black text-zinc-900">ARGUS</span>
            </div>
            <p className="text-zinc-950 leading-relaxed font-bold text-base">
              Empowering the Greater Toronto Area's most successful real estate advisors with autonomous sales intelligence. Verified by TRESA and RECO standards.
            </p>
            <div className="flex gap-4">
              {['logo-linkedin', 'logo-instagram', 'logo-twitter'].map((icon) => (
                <a key={icon} href="#" className="w-11 h-11 bg-white border border-zinc-200 flex items-center justify-center rounded-lg text-zinc-900 hover:text-[#B8860B] hover:border-[#B8860B] transition-all shadow-sm">
                  <iconify-icon icon={`ion:${icon}`} width="24"></iconify-icon>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-zinc-950 font-black mb-8 tracking-widest uppercase text-[12px]">Elite Postcodes</h4>
            <ul className="space-y-4 text-zinc-950 text-base font-bold">
              {['The Bridle Path', 'Rosedale & Moore Park', 'Yorkville / Annex', 'King City / Oakville'].map((m) => (
                <li key={m} className="hover:text-[#B8860B] cursor-pointer transition-colors flex items-center gap-2">
                   {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-zinc-950 font-black mb-8 tracking-widest uppercase text-[12px]">Compliance Desk</h4>
            <ul className="space-y-4 text-zinc-950 text-base font-bold">
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:shield-check-bold" className="text-[#B8860B] text-xl"></iconify-icon> 
                TRESA / RECO Compliant
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:lock-bold" className="text-[#B8860B] text-xl"></iconify-icon> 
                PIPEDA Certified (Canada)
              </li>
              <li className="flex items-center gap-3">
                <iconify-icon icon="solar:globus-bold" className="text-[#B8860B] text-xl"></iconify-icon> 
                Ontario Privacy Act (OPA)
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-zinc-950 font-black mb-8 tracking-widest uppercase text-[12px]">Corporate Office</h4>
            <div className="space-y-4 text-zinc-950 text-base font-bold">
              <p>First Canadian Place, 57th Floor<br />Toronto, ON M5X 1C7</p>
              <p className="text-[#B8860B] font-black underline decoration-2 underline-offset-4">concierge@argus.ai</p>
              <p className="text-zinc-950 font-black">416.555.0198</p>
            </div>
          </div>
        </div>

        {/* Detailed Legal Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-zinc-200 text-zinc-950">
          <div className="space-y-6">
            <h5 className="uppercase tracking-[0.3em] font-black text-[#B8860B] text-[13px]">Disclaimer & MLS® Compliance</h5>
            <p className="leading-relaxed font-bold text-base opacity-90">
              The information provided on this platform is for general informational purposes only. ARGUS Intelligence is an AI sales infrastructure provider and is not a licensed real estate brokerage. All MLS® listings and data provided are subject to the data integrity rules and regulations of TRREB and CREA®. We do not guarantee the absolute accuracy of AI-generated property insights or market valuations.
            </p>
          </div>
          <div className="space-y-6">
            <h5 className="uppercase tracking-[0.3em] font-black text-[#B8860B] text-[13px]">Privacy & Lead Sovereignty</h5>
            <p className="leading-relaxed font-bold text-base opacity-90">
              We adhere strictly to the Personal Information Protection and Electronic Documents Act (PIPEDA) of Canada. All lead data, recordings, and transcriptions are encrypted with 256-bit protocols and housed exclusively on Canadian-based servers to ensure total data sovereignty for Toronto brokerages and elite teams.
            </p>
          </div>
        </div>

        {/* Reorganized Fine Print and Legal Links */}
        <div className="pt-12 border-t border-zinc-200">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">
            <div className="space-y-2">
              <p className="text-[13px] font-black uppercase tracking-[0.4em] text-zinc-950">
                © 2026. ARGUS Elite Intelligence Systems. All Rights Reserved.
              </p>
              <p className="text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
                Designed for the Top 1% of the Greater Toronto Area.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-x-12 gap-y-6 items-center">
              <div className="flex flex-col gap-3">
                <h6 className="text-[10px] font-black text-[#B8860B] uppercase tracking-[0.3em] mb-1">Legal Protocols</h6>
                <div className="flex gap-8">
                  <button onClick={() => onNavigate('privacy')} className="text-zinc-950 font-black uppercase tracking-[0.2em] text-[12px] hover:text-[#B8860B] transition-colors border-b-2 border-transparent hover:border-[#B8860B]">Privacy Policy</button>
                  <button onClick={() => onNavigate('terms')} className="text-zinc-950 font-black uppercase tracking-[0.2em] text-[12px] hover:text-[#B8860B] transition-colors border-b-2 border-transparent hover:border-[#B8860B]">Terms of Service</button>
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <h6 className="text-[10px] font-black text-[#B8860B] uppercase tracking-[0.3em] mb-1">User Agreements</h6>
                <div className="flex gap-8">
                  <button onClick={() => onNavigate('cookies')} className="text-zinc-950 font-black uppercase tracking-[0.2em] text-[12px] hover:text-[#B8860B] transition-colors border-b-2 border-transparent hover:border-[#B8860B]">Cookie Policy</button>
                  <button onClick={() => onNavigate('dmca')} className="text-zinc-950 font-black uppercase tracking-[0.2em] text-[12px] hover:text-[#B8860B] transition-colors border-b-2 border-transparent hover:border-[#B8860B]">DMCA Notice</button>
                  <button onClick={() => onNavigate('accessibility')} className="text-zinc-950 font-black uppercase tracking-[0.2em] text-[12px] hover:text-[#B8860B] transition-colors border-b-2 border-transparent hover:border-[#B8860B]">Accessibility</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
