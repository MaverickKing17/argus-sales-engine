
import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Good evening. This is the ARGUS Concierge Desk for Toronto's premier real estate teams. To ensure I provide the most relevant listings for your portfolio, are you currently focused on a specific neighborhood like The Bridle Path, and what is your anticipated capital range for this acquisition?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await generateChatResponse(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently attending to a high-priority closing. One moment, please." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-32 bg-[#F2F0ED]/80 border-y border-zinc-200/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B8860B]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 border border-[#B8860B]/40 bg-white px-5 py-2 rounded-full shadow-lg">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-900 font-black">Bespoke AI Interface</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[0.9] drop-shadow-sm">
              WHITE-GLOVE <br /><span className="text-[#B8860B]">ACQUISITION.</span>
            </h2>
            
            <p className="text-zinc-700 text-xl leading-relaxed font-medium max-w-xl">
              Witness the precision of our Private Client Advisor. ARGUS doesn't just respond—it qualifies, identifies intent, and schedules high-value consultations for your team.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center rounded-2xl group-hover:border-[#B8860B] transition-all shadow-md">
                  <iconify-icon icon="solar:crown-minimalistic-bold" class="text-2xl text-[#B8860B]"></iconify-icon>
                </div>
                <div>
                  <p className="text-zinc-900 font-black text-[11px] uppercase tracking-[0.2em]">HNW protocol</p>
                  <p className="text-zinc-900 text-[10px] font-bold uppercase tracking-widest mt-1">Sophisticated Dialect</p>
                </div>
              </div>
              <div className="flex items-start gap-5 group">
                <div className="w-14 h-14 bg-white border border-zinc-200 flex-shrink-0 flex items-center justify-center rounded-2xl group-hover:border-[#B8860B] transition-all shadow-md">
                  <iconify-icon icon="solar:routing-2-bold" class="text-2xl text-[#B8860B]"></iconify-icon>
                </div>
                <div>
                  <p className="text-zinc-900 font-black text-[11px] uppercase tracking-[0.2em]">Strategic Steering</p>
                  <p className="text-zinc-900 text-[10px] font-bold uppercase tracking-widest mt-1">Autonomous Conversion</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-[#B8860B]/15 blur-[120px] opacity-40 rounded-full"></div>
            
            <div className="relative bg-[#0a0a0a] rounded-[3.5rem] overflow-hidden flex flex-col h-[780px] shadow-[0_60px_140px_-30px_rgba(0,0,0,0.6)] border-[14px] border-[#1a1a1a]">
              {/* Device Header */}
              <div className="bg-[#1a1a1a] p-8 border-b border-[#2a2a2a] flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#0a0a0a] rounded-2xl border-2 border-[#B8860B]/50 p-1.5">
                      <div className="w-full h-full bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-inner">
                        <iconify-icon icon="solar:user-speak-bold" class="text-zinc-900 text-3xl"></iconify-icon>
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-[4px] border-[#1a1a1a] rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-black tracking-[0.35em] uppercase">ARGUS | ADVISOR</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-[9px] text-[#B8860B] font-black tracking-[0.4em]">SYSTEM OPERATIONAL</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                  <div className="w-2 h-2 rounded-full bg-zinc-800"></div>
                </div>
              </div>

              {/* Chat Content Area */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-12 bg-[#fafaf9] scrollbar-hide">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-revealUp`}>
                    <div className={`max-w-[85%] p-8 text-[16px] leading-[1.6] shadow-2xl relative ${
                      msg.role === 'user' 
                      ? 'bg-[#B8860B] text-white rounded-[2.2rem] rounded-tr-none font-bold' 
                      : 'bg-white text-zinc-950 border border-zinc-100 rounded-[2.2rem] rounded-tl-none font-medium'
                    }`}>
                      {msg.text}
                      <p className={`text-[9px] uppercase tracking-[0.2em] mt-5 opacity-70 font-black ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.role === 'user' ? 'PROSPECTIVE CLIENT' : 'ARGUS ADVISORY'}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-6 rounded-3xl rounded-tl-none border border-zinc-200 flex gap-2.5 shadow-md">
                      <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full animate-bounce"></span>
                      <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full animate-bounce delay-150"></span>
                      <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Section */}
              <form onSubmit={handleSend} className="p-10 bg-white border-t border-zinc-200">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search luxury GTA inventory..."
                    className="w-full bg-zinc-50 border-2 border-zinc-200 rounded-[2rem] py-6 pl-10 pr-32 text-[16px] text-zinc-900 focus:outline-none focus:border-[#B8860B] placeholder:text-zinc-400 transition-all font-bold shadow-inner"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-4 w-16 h-16 bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-2xl flex items-center justify-center text-white hover:scale-105 transition-all disabled:opacity-50 shadow-xl active:scale-95 group"
                  >
                    <iconify-icon icon="solar:arrow-up-linear" width="36" stroke-width="4" className="group-hover:-translate-y-1 transition-transform"></iconify-icon>
                  </button>
                </div>
                <div className="mt-6 flex justify-center items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                   <p className="text-[9px] text-zinc-400 font-bold uppercase tracking-[0.4em]">Encrypted Session Secure</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
