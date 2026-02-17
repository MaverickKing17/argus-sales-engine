
import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Good evening. This is the ARGUS Concierge Desk for Toronto's premier real estate teams. To better assist your portfolio search, are you looking within a specific neighborhood like Rosedale or The Bridle Path today?" }
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
    <section id="demo" className="py-32 bg-[#F2F0ED]/50 border-y border-zinc-200/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 border border-[#B8860B]/30 bg-white px-5 py-2 rounded-full shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-800 font-black">Live Concierge Interface</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold text-zinc-900 tracking-tight leading-[0.95]">
              WHITE-GLOVE <br /><span className="text-[#B8860B]">AI ENGAGEMENT.</span>
            </h2>
            
            <p className="text-zinc-600 text-xl leading-relaxed font-medium">
              Experience the future of lead qualification. ARGUS engages your high-net-worth inquiries with the precision of a seasoned private broker, autonomously qualifying budget, location, and timeline.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white border border-zinc-200 flex items-center justify-center rounded-2xl group-hover:border-[#B8860B] transition-all shadow-sm">
                  <iconify-icon icon="solar:chat-round-bold" class="text-2xl text-[#B8860B]"></iconify-icon>
                </div>
                <div>
                  <p className="text-zinc-900 font-black text-[11px] uppercase tracking-[0.2em]">Contextual Logic</p>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Multi-Turn Awareness</p>
                </div>
              </div>
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white border border-zinc-200 flex items-center justify-center rounded-2xl group-hover:border-[#B8860B] transition-all shadow-sm">
                  <iconify-icon icon="solar:shield-user-bold" class="text-2xl text-[#B8860B]"></iconify-icon>
                </div>
                <div>
                  <p className="text-zinc-900 font-black text-[11px] uppercase tracking-[0.2em]">Lead Authority</p>
                  <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-1">Qualification Protocol</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Visual Frame */}
            <div className="absolute -inset-10 bg-[#B8860B]/10 blur-[100px] opacity-40 rounded-full"></div>
            
            <div className="relative bg-[#1a1a1a] rounded-[3rem] overflow-hidden flex flex-col h-[750px] shadow-[0_50px_120px_-20px_rgba(0,0,0,0.5)] border-[12px] border-[#2a2a2a]">
              {/* Top Notch Area */}
              <div className="h-6 w-full flex justify-center items-center">
                <div className="w-24 h-1.5 bg-[#333] rounded-full mt-2"></div>
              </div>

              {/* Header */}
              <div className="bg-[#222]/80 backdrop-blur-xl p-8 border-b border-[#333] flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#1a1a1a] rounded-2xl border-2 border-[#B8860B] p-1.5 shadow-2xl">
                      <div className="w-full h-full bg-gradient-to-br from-[#B8860B] to-[#D4AF37] rounded-xl flex items-center justify-center">
                        <iconify-icon icon="solar:user-speak-bold" class="text-zinc-900 text-3xl"></iconify-icon>
                      </div>
                    </div>
                    <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-4 border-[#222] rounded-full"></span>
                  </div>
                  <div>
                    <p className="text-white text-[13px] font-black tracking-[0.35em] uppercase">ARGUS | CONCIERGE</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <p className="text-[10px] text-[#D4AF37] font-black tracking-[0.4em]">SYSTEM ACTIVE</p>
                    </div>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-500 cursor-pointer hover:bg-zinc-800 transition-colors">
                  <iconify-icon icon="solar:settings-bold" class="text-xl"></iconify-icon>
                </div>
              </div>

              {/* Chat Body */}
              <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-12 bg-[#fdfdfc] scrollbar-hide">
                {messages.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-revealUp`}>
                    <div className={`max-w-[88%] p-8 text-[16px] leading-relaxed shadow-xl relative ${
                      msg.role === 'user' 
                      ? 'bg-[#B8860B] text-white rounded-[2rem] rounded-tr-none font-bold' 
                      : 'bg-white text-zinc-800 border border-zinc-100 rounded-[2rem] rounded-tl-none font-medium'
                    }`}>
                      {msg.text}
                      {/* Sub-label for timestamp feel */}
                      <p className={`text-[9px] uppercase tracking-widest mt-4 opacity-40 font-black ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                        {msg.role === 'user' ? 'Client Message' : 'ARGUS Agent'}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white p-6 rounded-3xl rounded-tl-none border border-zinc-200 flex gap-2 shadow-md">
                      <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full animate-bounce"></span>
                      <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full animate-bounce delay-150"></span>
                      <span className="w-2.5 h-2.5 bg-[#B8860B] rounded-full animate-bounce delay-300"></span>
                    </div>
                  </div>
                )}
              </div>

              {/* Input Area - Fixed visibility issue by adding pr-20 to input */}
              <form onSubmit={handleSend} className="p-10 bg-white border-t border-zinc-100 shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.05)]">
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Search GTA luxury inventory..."
                    className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-3xl py-6 pl-10 pr-24 text-[16px] text-zinc-900 focus:outline-none focus:border-[#B8860B]/40 placeholder:text-zinc-400 transition-all font-bold shadow-inner"
                  />
                  <button 
                    type="submit"
                    disabled={isLoading}
                    className="absolute right-4 w-14 h-14 bg-[#B8860B] rounded-2xl flex items-center justify-center text-white hover:bg-[#D4AF37] transition-all disabled:opacity-50 shadow-xl active:scale-95 group"
                  >
                    <iconify-icon icon="solar:arrow-up-linear" width="30" stroke-width="4" className="group-hover:-translate-y-1 transition-transform"></iconify-icon>
                  </button>
                </div>
                <p className="text-center text-[9px] text-zinc-400 uppercase tracking-[0.3em] mt-6 font-bold">
                  Protected by ARGUS Security Infrastructure
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
