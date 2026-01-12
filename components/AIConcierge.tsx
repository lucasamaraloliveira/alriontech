
import React, { useState } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';
import { getConciergeResponse } from '../services/geminiService';

const AIConcierge: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
    { role: 'bot', text: 'Seja bem-vindo à Alrion Tech. Sou seu concierge digital. Como posso auxiliá-lo em sua jornada de luxo hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResp = await getConciergeResponse(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResp || '' }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      {isOpen ? (
        <div className="bg-[#262626] border border-[#009BDB]/30 w-80 md:w-96 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-slideUp shadow-[#009BDB]/10">
          <div className="bg-[#009BDB] p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} className="text-white" />
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Concierge Alrion</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:rotate-90 transition-transform">
              <X size={20} />
            </button>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-[#262626] scrollbar-thin scrollbar-thumb-[#575759]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-xl text-[13px] ${m.role === 'user'
                  ? 'bg-[#009BDB] text-white font-medium rounded-br-none'
                  : 'bg-[#575759]/30 text-white font-light rounded-bl-none border border-white/5'
                  }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 rounded-xl flex gap-1">
                  <div className="w-1 h-1 bg-[#85DEF2] rounded-sm animate-bounce"></div>
                  <div className="w-1 h-1 bg-[#85DEF2] rounded-sm animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-[#85DEF2] rounded-sm animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-3 border-t border-white/10 flex gap-2 bg-[#262626]">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Sua pergunta..."
              className="flex-1 bg-transparent border-none text-white text-sm focus:outline-none"
            />
            <button onClick={handleSend} className="text-[#009BDB] p-2 hover:bg-[#009BDB]/10 rounded-xl transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#262626] border border-[#009BDB] text-[#009BDB] p-4 rounded-2xl shadow-lg hover:scale-110 transition-transform flex items-center gap-3 group shadow-[#009BDB]/10"
        >
          <Sparkles size={24} className="group-hover:rotate-12 transition-transform text-[#85DEF2]" />
          <span className="text-[10px] uppercase tracking-widest font-bold pr-2 hidden md:block">Concierge AI</span>
        </button>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default AIConcierge;
