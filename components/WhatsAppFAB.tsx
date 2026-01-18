
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFAB: React.FC = () => {
  const openWhatsApp = () => {
    window.open('https://wa.me/5521969630415', '_blank');
  };

  return (
    <button
      onClick={openWhatsApp}
      aria-label="Abrir WhatsApp"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-2xl hover:scale-110 transition-transform active:scale-95 group shadow-[#25D366]/30 border border-white/20"
    >
      <div className="absolute -left-32 bg-white text-[#262626] px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border-b-2 border-[#009BDB]">
        Fale Conosco
      </div>
      <MessageCircle size={28} fill="white" />
    </button>
  );
};

export default WhatsAppFAB;
