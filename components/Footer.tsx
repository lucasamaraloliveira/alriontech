
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    const isHome = window.location.hash === '#/' || window.location.hash === '' || window.location.hash.startsWith('#/?');
    if (!isHome) {
      window.location.href = window.location.origin + window.location.pathname + '#/' + hash;
    } else {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-20 px-6 md:px-12 bg-[#262626] border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
        {/* Brand Column */}
        <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
          <div
            className="cursor-pointer transition-transform duration-500 hover:scale-105"
            onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#home')}
          >
            <Logo className="h-14" />
          </div>
          <p className="text-[#85DEF2] text-[10px] uppercase tracking-[0.4em] font-black italic">
            Arquitetura Digital para Marcas que Exigem o Extraordinário.
          </p>

        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-4 font-bold">
          <h3 className="text-[#85DEF2] text-[10px] uppercase tracking-widest font-black mb-2">Acesso Rápido</h3>
          <a
            href="#about"
            onClick={(e) => handleAnchorClick(e, '#about')}
            className="text-white/60 text-[9px] uppercase tracking-widest hover:text-[#009BDB] transition-colors"
          >
            Sobre Nós
          </a>
          <a
            href="#services"
            onClick={(e) => handleAnchorClick(e, '#services')}
            className="text-white/60 text-[9px] uppercase tracking-widest hover:text-[#009BDB] transition-colors"
          >
            Serviços
          </a>
          <a
            href="#portfolio"
            onClick={(e) => handleAnchorClick(e, '#portfolio')}
            className="text-white/60 text-[9px] uppercase tracking-widest hover:text-[#009BDB] transition-colors"
          >
            Portfólio
          </a>
          <a
            href="#contact"
            onClick={(e) => handleAnchorClick(e, '#contact')}
            className="text-white/60 text-[9px] uppercase tracking-widest hover:text-[#009BDB] transition-colors"
          >
            Contato
          </a>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-[#85DEF2] text-[10px] uppercase tracking-widest font-black mb-2">Jurídico</h3>
          <a href="#/privacidade" className="text-white/60 text-[9px] uppercase tracking-widest hover:text-[#009BDB] transition-colors">Privacidade</a>
          <a href="#/termos" className="text-white/60 text-[9px] uppercase tracking-widest hover:text-[#009BDB] transition-colors">Termos de Uso</a>
          <p className="text-white/40 text-[8px] uppercase tracking-[0.2em] mt-4 pt-4 border-t border-white/5 w-full text-center md:text-left">
            &copy; {new Date().getFullYear()} ALRION TECH
          </p>
        </div>

        {/* Social & Contact */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <h3 className="text-[#85DEF2] text-[10px] uppercase tracking-widest font-black mb-2">Conecte-se</h3>
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-[#009BDB] transition-colors uppercase text-[9px] tracking-widest font-bold">Instagram</a>
            <a href="#" className="text-white/60 hover:text-[#009BDB] transition-colors uppercase text-[9px] tracking-widest font-bold">LinkedIn</a>
          </div>
          <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] mt-4">
            contato@alriontech.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
