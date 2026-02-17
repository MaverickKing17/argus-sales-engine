
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="technology" className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-20 space-y-4">
        <h2 className="font-semibold text-4xl md:text-5xl text-white tracking-tight">Proprietary Technology</h2>
        <p className="text-zinc-400 max-w-xl mx-auto text-lg">Not a chatbot. A sophisticated AI sales infrastructure designed for high-compliance luxury real estate.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 group hover:bg-zinc-900 transition-colors duration-500 border border-zinc-800 hover:border-[#D4AF37]/30">
          <div className="w-14 h-14 bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-8 group-hover:border-[#D4AF37] transition-colors">
            <iconify-icon icon="solar:smartphone-linear" class="text-3xl text-zinc-300 group-hover:text-[#D4AF37]" stroke-width="1.5"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">Instant Text-Back</h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Triggers a personalized SMS within 3 seconds of a missed call. Stops the lead from dialing the next competitor in Google results.
          </p>
        </div>

        <div className="glass-panel p-8 group hover:bg-zinc-900 transition-colors duration-500 border border-zinc-800 hover:border-[#D4AF37]/30">
          <div className="w-14 h-14 bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-8 group-hover:border-[#D4AF37] transition-colors">
            <iconify-icon icon="solar:user-speak-linear" class="text-3xl text-zinc-300 group-hover:text-[#D4AF37]" stroke-width="1.5"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">AI Sales Concierge</h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Autonomous lead qualification. The AI engages in natural conversation, qualifies intent (buyer/seller/budget), and books appointments.
          </p>
        </div>

        <div className="glass-panel p-8 group hover:bg-zinc-900 transition-colors duration-500 border border-zinc-800 hover:border-[#D4AF37]/30">
          <div className="w-14 h-14 bg-zinc-900 border border-zinc-700 flex items-center justify-center mb-8 group-hover:border-[#D4AF37] transition-colors">
            <iconify-icon icon="solar:shield-check-linear" class="text-3xl text-zinc-300 group-hover:text-[#D4AF37]" stroke-width="1.5"></iconify-icon>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4 tracking-tight">TRESA & CASL Vault</h3>
          <p className="text-zinc-400 leading-relaxed text-sm">
            Built for Canadian compliance. Secure data residency, automated opt-outs, and audit trails to meet strict anti-spam and RECO regulations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
