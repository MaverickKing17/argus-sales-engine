
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 pt-20 pb-12 border-t border-white/10 text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 border border-[#D4AF37] flex items-center justify-center rotate-45">
                <div className="w-3 h-3 bg-[#D4AF37] -rotate-45"></div>
              </div>
              <span className="text-base tracking-widest font-semibold text-white ml-2">ARGUS</span>
            </div>
            <p className="text-zinc-500 leading-relaxed">
              The premier AI sales infrastructure for Toronto's top-producing real estate teams. Automating lead engagement with white-glove precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-[#D4AF37] transition-colors"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
              <a href="#" className="text-zinc-400 hover:text-[#D4AF37] transition-colors"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
              <a href="#" className="text-zinc-400 hover:text-[#D4AF37] transition-colors"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-xs">Primary Markets</h4>
            <ul className="space-y-4 text-zinc-500">
              {['The Bridle Path', 'Rosedale & Moore Park', 'Forest Hill', 'Yorkville', 'King City Estates', 'Oakville Gold Coast'].map((m) => (
                <li key={m} className="hover:text-[#D4AF37] cursor-pointer transition-colors flex items-center gap-2 group">
                  <span className="w-1 h-1 bg-[#D4AF37]/30 rounded-full group-hover:bg-[#D4AF37]"></span> {m}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-xs">Compliance</h4>
            <ul className="space-y-4 text-zinc-500">
              <li className="flex items-center gap-2"><iconify-icon icon="solar:shield-check-linear" className="text-zinc-600"></iconify-icon> TRESA Compliant (2024)</li>
              <li className="flex items-center gap-2"><iconify-icon icon="solar:document-text-linear" className="text-zinc-600"></iconify-icon> PIPEDA & CASL Adherence</li>
              <li className="flex items-center gap-2"><iconify-icon icon="solar:server-square-linear" className="text-zinc-600"></iconify-icon> Canadian Data Residency</li>
              <li className="flex items-center gap-2"><iconify-icon icon="solar:database-linear" className="text-zinc-600"></iconify-icon> CREA DDF® Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 tracking-wide uppercase text-xs">Headquarters</h4>
            <div className="space-y-4 text-zinc-500">
              <p className="leading-relaxed">
                First Canadian Place<br />
                100 King Street West, Suite 5700<br />
                Toronto, ON M5X 1C7
              </p>
              <div className="pt-4 border-t border-zinc-900 space-y-2">
                <p className="flex items-center gap-3"><iconify-icon icon="solar:phone-linear" className="text-[#D4AF37]"></iconify-icon> +1 (416) 555-0198</p>
                <p className="flex items-center gap-3"><iconify-icon icon="solar:letter-linear" className="text-[#D4AF37]"></iconify-icon> concierge@argus.ai</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2024 ARGUS AI Systems Inc. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
