
import React, { useEffect } from 'react';
import { AppView } from '../types';

interface LegalViewProps {
  view: AppView;
  onBack: () => void;
}

const LegalView: React.FC<LegalViewProps> = ({ view, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const renderContent = () => {
    switch (view) {
      case 'privacy':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">PRIVACY POLICY</h1>
            <div className="prose prose-zinc prose-lg max-w-none font-bold text-zinc-950 leading-relaxed">
              <p className="text-xl text-[#B8860B]">Updated: January 2026 | PIPEDA & OPA Compliance</p>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">1. Data Sovereignty for Toronto Elite Teams</h2>
                <p>ARGUS Intelligence recognizes the sensitive nature of high-net-worth lead data. In strict accordance with the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and the <strong>Ontario Privacy Act</strong>, all data captured—including CRM entries, audio recordings, and transcriptions—is stored on Tier-1 Canadian data centers located within the Greater Toronto Area. We do not export lead data to foreign jurisdictions.</p>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">2. HNW Identity Protection</h2>
                <p>To protect the privacy of ultra-high-net-worth individuals, our AI concierge utilizes "Zero-Knowledge" protocols for non-essential personal identifiers. 256-bit encryption is standard for all data at rest and in transit.</p>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">3. Lead Retention</h2>
                <p>Personal data is retained only as long as necessary to facilitate the concierge hand-off to your licensed real estate team. Once a lead is unqualified or manually closed, all PII (Personally Identifiable Information) is scrubbed from our active sales nodes within 48 hours.</p>
              </section>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">TERMS OF SERVICE</h1>
            <div className="prose prose-zinc prose-lg max-w-none font-bold text-zinc-950 leading-relaxed">
              <p className="text-xl text-[#B8860B]">Standard Sales Infrastructure Agreement (Toronto / GTA)</p>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">1. TRESA & RECO Compliance</h2>
                <p>ARGUS Intelligence provides a technology layer. Users of the ARGUS system are responsible for ensuring their use of AI concierge services complies with the <strong>Trust in Real Estate Services Act (TRESA)</strong> and <strong>RECO</strong> advertising guidelines. ARGUS does not act as a licensed broker and does not provide "trading in real estate" services directly.</p>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">2. Accuracy of AI Output</h2>
                <p>While ARGUS utilizes advanced LLM technology (Gemini 3 Pro), all automated communications should be monitored. The "Principal Private Client Advisor" persona is a functional AI tool designed for initial engagement and qualification. Final property advice must be rendered by the licensed registrant on your team.</p>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">3. Territory Exclusivity</h2>
                <p>Our exclusivity agreements for specific postcodes (e.g., M4W, M5R) are strictly enforced. We guarantee that your custom-tuned ARGUS instance will only serve leads specifically captured via your designated marketing channels.</p>
              </section>
            </div>
          </div>
        );
      case 'cookies':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">COOKIE POLICY</h1>
            <div className="prose prose-zinc prose-lg max-w-none font-bold text-zinc-950 leading-relaxed">
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">1. Performance Tracking</h2>
                <p>We use essential cookies to track lead attribution across your luxury marketing campaigns. This allows ARGUS to understand if a lead originated from a targeted Yorkville ad vs. a Google Search for "Bridle Path off-market listings."</p>
              </section>
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">2. Session Persistence</h2>
                <p>Concierge chat sessions use secure session tokens to ensure the AI maintains context if a high-intent buyer returns to the landing page within the same browsing window.</p>
              </section>
            </div>
          </div>
        );
      case 'dmca':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">DMCA & INTELLECTUAL PROPERTY</h1>
            <div className="prose prose-zinc prose-lg max-w-none font-bold text-zinc-950 leading-relaxed">
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">1. Image Rights (TRREB & CREA®)</h2>
                <p>All property images used within the ARGUS interface are sourced via authorized IDX/DDF® feeds. If you believe your copyrighted architectural photography has been used without authorization, please contact our legal desk at <strong>legal@argus.ai</strong> with the specific listing URL.</p>
              </section>
            </div>
          </div>
        );
      case 'accessibility':
        return (
          <div className="space-y-12">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter">ACCESSIBILITY (AODA)</h1>
            <div className="prose prose-zinc prose-lg max-w-none font-bold text-zinc-950 leading-relaxed">
              <section className="space-y-6">
                <h2 className="text-2xl font-black uppercase tracking-widest border-b border-zinc-300 pb-2">1. Inclusive Concierge Services</h2>
                <p>In compliance with the <strong>Accessibility for Ontarians with Disabilities Act (AODA)</strong>, ARGUS is designed to support screen readers and keyboard navigation. Our AI concierge supports text-to-speech interaction for users with visual impairments, ensuring elite real estate access for all.</p>
              </section>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-40 pb-32 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-zinc-400 hover:text-[#B8860B] font-black uppercase tracking-[0.3em] text-[11px] mb-16 transition-colors group"
        >
          <iconify-icon icon="solar:arrow-left-linear" class="text-xl group-hover:-translate-x-1 transition-transform"></iconify-icon>
          Return to Sales Infrastructure
        </button>
        
        {renderContent()}

        <div className="mt-24 pt-12 border-t border-zinc-200 text-center">
          <button 
            onClick={onBack}
            className="btn-luxury rounded-lg text-sm px-16"
          >
            Acknowledge & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalView;
