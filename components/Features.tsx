
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="technology" className="relative py-32 overflow-hidden bg-[#F2F0ED]">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24 space-y-6">
          <h2 className="font-extrabold text-5xl md:text-6xl text-zinc-900 tracking-tight">
            The <span className="text-[#B8860B]">Infrastructure</span> of Success.
          </h2>
          <div className="w-20 h-1.5 bg-[#B8860B] mx-auto rounded-full"></div>
          <p className="text-zinc-600 max-w-2xl mx-auto text-xl font-medium">
            Architected specifically for the nuances of Toronto's high-stakes real estate market.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: 'solar:smartphone-2-bold-duotone',
              title: 'Instant Text-Back',
              desc: 'SMS automation that bridges the missed call gap in seconds, ensuring you never lose a hot luxury lead.'
            },
            {
              icon: 'solar:hand-stars-bold-duotone',
              title: 'Concierge Logic',
              desc: 'Sophisticated AI that qualifies high-net-worth inquiries with white-glove conversational standards.'
            },
            {
              icon: 'solar:vault-bold-duotone',
              title: 'Data Sovereignty',
              desc: 'TRESA compliant, PIPEDA secure, and locally hosted data infrastructure for elite brokerage peace of mind.'
            }
          ].map((f, i) => (
            <div key={i} className="bg-white/60 backdrop-blur-sm p-12 group border border-zinc-200/50 shadow-sm hover:shadow-xl hover:border-[#B8860B]/20 transition-all duration-500 rounded-2xl">
              <div className="w-16 h-16 bg-white border border-zinc-100 flex items-center justify-center mb-8 rounded-xl group-hover:scale-110 transition-transform">
                <iconify-icon icon={f.icon} class="text-4xl text-[#B8860B]"></iconify-icon>
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">{f.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-medium text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative architectural image */}
      <div className="mt-32 max-w-7xl mx-auto px-6">
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className="w-full h-[500px] object-cover rounded-3xl shadow-2xl brightness-105"
        />
      </div>
    </section>
  );
};

export default Features;
