
import React from 'react';
import { ArrowDownRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handlePhilosophyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#262626] pt-32 md:pt-40">
      {/* Background elements com animação de flutuação suave */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#009BDB]/15 rounded-full blur-[100px] md:blur-[150px] md:animate-blob transform-gpu will-change-transform"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#85DEF2]/10 rounded-full blur-[100px] md:blur-[150px] md:animate-blob animation-delay-4000 transform-gpu will-change-transform"></div>
        <div className="absolute inset-0 overflow-hidden">

          <div className="absolute inset-0 bg-gradient-to-b from-[#262626]/20 via-[#262626]/60 to-[#262626] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="overflow-hidden mb-6 flex justify-center">
          <div className="md:animate-slide-up inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(0,155,219,0.15)] hover:bg-white/10 transition-colors duration-500">
            <p className="text-white text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] drop-shadow-sm">
              Bem-vindo à Experiência Alrion
            </p>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] mb-8 opacity-100 md:opacity-0 md:animate-fade-in-up animation-delay-500">
          Transformamos visão em <br />
          <span className="italic text-[#009BDB] drop-shadow-[0_0_15px_rgba(0,155,219,0.3)] relative inline-block">
            Legado Digital
            <span className="absolute bottom-1 left-0 w-full h-[1px] bg-[#009BDB]/30 scale-x-100 md:scale-x-0 md:animate-expand-width animation-delay-1500"></span>
          </span>.
        </h1>
        <p className="text-[#85DEF2] text-xs sm:text-sm md:text-lg font-light tracking-[0.1em] sm:tracking-[0.2em] uppercase mb-8 italic opacity-100 md:opacity-0 md:animate-fade-in animation-delay-1000">
          Onde a sofisticação encontra a potência do código puro.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-100 md:opacity-0 md:animate-fade-in animation-delay-1500">
          <a
            href="#portfolio"
            className="w-full sm:w-auto group btn-shine relative px-8 md:px-10 py-4 md:py-5 bg-[#009BDB] text-white font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#85DEF2] hover:text-[#262626] transition-all duration-500 rounded-lg shadow-xl shadow-[#009BDB]/20"
          >
            Ver Portfólio
            <ArrowDownRight className="inline-block ml-2 group-hover:rotate-45 transition-transform duration-300" size={18} />
          </a>
          <a
            href="#about"
            onClick={handlePhilosophyClick}
            className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-white/10 text-white font-medium text-[10px] md:text-xs uppercase tracking-widest hover:border-[#85DEF2] hover:text-[#85DEF2] rounded-lg transition-all duration-500"
          >
            Nossa Filosofia
          </a>
        </div>


        {/* Scroll indicator - Estilizado */}
        <div className="mt-16 sm:mt-24 flex flex-col items-center gap-3 opacity-100 md:opacity-0 md:animate-fade-in animation-delay-2000">
          <span className="text-[8px] uppercase tracking-[0.4em] text-white/40 rotate-90 mb-8 animate-pulse">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#009BDB] to-transparent animate-bounce"></div>
        </div>
      </div>




    </section >
  );
};

export default Hero;
