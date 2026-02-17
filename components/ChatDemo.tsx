
import React, { useState, useRef, useEffect } from 'react';
import { generateChatResponse } from '../services/geminiService';
import { Message } from '../types';

const ChatDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to the ARGUS Concierge demo. How can I assist your luxury real estate needs today?" }
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
      setMessages(prev => [...prev, { role: 'model', text: "I'm currently attending to a high-profile client. One moment, please." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold">Live Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Interact with ARGUS</h2>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Experience the "white-glove" sophistication of our AI Concierge. This isn't a basic chatbot; it's a context-aware sales infrastructure trained on elite luxury standards.
          </p>
          <ul className="space-y-4 text-sm font-medium text-zinc-300">
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:check-circle-linear" class="text-[#D4AF37] text-xl"></iconify-icon>
              Multi-turn natural conversation
            </li>
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:check-circle-linear" class="text-[#D4AF37] text-xl"></iconify-icon>
              High-net-worth lead qualification
            </li>
            <li className="flex items-center gap-3">
              <iconify-icon icon="solar:check-circle-linear" class="text-[#D4AF37] text-xl"></iconify-icon>
              Neighborhood & Market expertise
            </li>
          </ul>
        </div>

        <div className="glass-panel rounded-xl overflow-hidden flex flex-col h-[500px] border border-zinc-800">
          <div className="bg-zinc-900/50 p-4 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border border-[#D4AF37]/50 rounded-full flex items-center justify-center bg-zinc-950">
                <iconify-icon icon="solar:user-speak-linear" class="text-[#D4AF37] text-xl"></iconify-icon>
              </div>
              <div>
                <p className="text-white text-sm font-semibold">ARGUS AI Concierge</p>
                <p className="text-xs text-emerald-500 flex items-center gap-1">
                   <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                   Online & Ready
                </p>
              </div>
            </div>
            <iconify-icon icon="solar:settings-linear" class="text-zinc-500 text-xl cursor-pointer hover:text-white transition-colors"></iconify-icon>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                  ? 'bg-[#D4AF37] text-zinc-950 rounded-2xl rounded-tr-none font-medium' 
                  : 'bg-zinc-900 text-zinc-300 border border-zinc-800 rounded-2xl rounded-tl-none shadow-xl'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-zinc-900 p-4 rounded-2xl rounded-tl-none border border-zinc-800 flex gap-1">
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSend} className="p-4 border-t border-zinc-800 bg-zinc-900/30">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your inquiry..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-full py-3 px-6 text-sm text-white focus:outline-none focus:border-[#D4AF37]/50 placeholder:text-zinc-600"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="absolute right-2 w-8 h-8 bg-[#D4AF37] rounded-full flex items-center justify-center text-zinc-950 hover:bg-[#b5952f] transition-colors disabled:opacity-50"
              >
                <iconify-icon icon="solar:arrow-up-linear" width="18"></iconify-icon>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChatDemo;
