
import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Good evening. This is the ARGUS Concierge Desk for Toronto's premier real estate teams. How can I assist you with your portfolio today?" }
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
    <section id="demo" className="py-32 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-24 items-center">
        <div className="space-y-10">
          <div className="inline-flex items-center gap-3 border border-[#D4AF37]/30 bg-black/40 px-5 py-2 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#FAE088] font-bold">Live AI Interaction</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tighter leading-none">
            MEET THE <br /><span className="text-[#D4AF37]">CONCIERGE.</span>
          </h2>
          
          <p className="text-zinc-400 text-xl leading-relaxed font-light">
            Interact with our autonomous sales agent. Trained on the nuances of Toronto's high-net-worth market, ARGUS qualifies leads with elite sophistication.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass-panel flex items-center justify-center border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all">
                <iconify-icon icon="solar:chat-round-bold" class="text-xl text-[#D4AF37]"></iconify-icon>
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-widest">Multi-Turn</p>
                <p className="text-zinc-500 text-[10px] font-medium uppercase">Natural Conversation</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 glass-panel flex items-center justify-center border border-[#D4AF37]/30 group-hover:border-[#D4AF37] transition-all">
                <iconify-icon icon="solar:shield-user-bold" class="text-xl text-[#D4AF37]"></iconify-icon>
              </div>
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-widest">Lead Qual</p>
                <p className="text-zinc-500 text-[10px] font-medium uppercase">Dynamic Logic</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#FAE088] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
          <div className="relative glass-panel rounded-2xl overflow-hidden flex flex-col h-[600px] border border-white/10 shadow-2xl">
            <div className="bg-black/60 p-6 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border-2 border-[#D4AF37] rounded-full flex items-center justify-center bg-zinc-950 p-1">
                  <div className="w-full h-full bg-[#D4AF37] rounded-full flex items-center justify-center">
                    <iconify-icon icon="solar:user-speak-bold" class="text-zinc-950 text-2xl"></iconify-icon>
                  </div>
                </div>
                <div>
                  <p className="text-white text-sm font-black tracking-widest uppercase">ARGUS | CONCIERGE</p>
                  <p className="text-[10px] text-[#FAE088] font-bold tracking-[0.2em] flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-[#FAE088] animate-pulse"></span>
                     OPERATIONAL
                  </p>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide bg-black/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-5 text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-[#D4AF37] text-zinc-950 rounded-2xl rounded-tr-none font-bold shadow-xl' 
                    : 'glass-panel text-zinc-100 border border-white/10 rounded-2xl rounded-tl-none shadow-2xl'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="glass-panel p-5 rounded-2xl rounded-tl-none border border-white/10 flex gap-1.5">
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce delay-150"></span>
                    <span className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-bounce delay-300"></span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-6 border-t border-white/10 bg-black/40">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire about our elite services..."
                  className="w-full bg-black/60 border border-white/10 rounded-full py-4 px-8 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 placeholder:text-zinc-600 transition-all"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2.5 w-11 h-11 bg-[#D4AF37] rounded-full flex items-center justify-center text-zinc-950 hover:bg-[#FAE088] transition-all disabled:opacity-50 shadow-lg"
                >
                  <iconify-icon icon="solar:arrow-up-linear" width="22" stroke-width="3"></iconify-icon>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
