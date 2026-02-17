
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="technology" className="relative py-32 overflow-hidden bg-zinc-950">
      {/* Background architectural detail */}
      <img 
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
        alt="Luxury Penthouse Interior" 
        className="section-bg-image"
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-bold text-5xl md:text-7xl text-white tracking-tighter italic">
            Precision <span className="text-[#D4AF37]">Infrastructure.</span>
          </h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          <p className="text-zinc-400 max-w-2xl mx-auto text-xl font-light italic">
            Not a chatbot. A sophisticated sales ecosystem built for Toronto's high-compliance, high-stakes luxury market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: 'solar:smartphone-2-bold-duotone',
              title: 'Instant Text-Back',
              desc: 'SMS triggered within 3 seconds of a missed call. Stops the lead from dialing the next competitor.'
            },
            {
              icon: 'solar:hand-stars-bold-duotone',
              title: 'White-Glove AI',
              desc: 'Autonomous lead qualification. Converses with elite sophistication, qualifies budget, and books viewings.'
            },
            {
              icon: 'solar:vault-bold-duotone',
              title: 'TRESA Compliance',
              desc: 'Secure Canadian data residency with full audit trails for RECO and anti-spam regulatory adherence.'
            }
          ].map((f, i) => (
            <div key={i} className="glass-panel p-10 group hover:border-[#D4AF37]/50 transition-all duration-700 hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-zinc-900 to-black border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:border-[#D4AF37] transition-all">
                <iconify-icon icon={f.icon} class="text-4xl text-[#D4AF37]"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight luxury-font">{f.title}</h3>
              <p className="text-zinc-400 leading-relaxed font-light">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
