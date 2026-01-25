
import React from 'react';
import { ArrowDownRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const handlePhilosophyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#262626] pt-32 md:pt-40">
      {/* Background elements - Otimizados para Performance */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#009BDB]/20 rounded-full blur-[120px] animate-blob will-change-transform"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#85DEF2]/15 rounded-full blur-[120px] animate-blob animation-delay-4000 will-change-transform"></div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#262626]/0 via-[#262626]/40 to-[#262626]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        {/* Floating Badge */}
        <div className="mb-10 opacity-0 animate-fade-in animation-delay-300">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-2xl">
            <Sparkles size={14} className="text-[#85DEF2] animate-pulse" />
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">
              A Excelência em Código e Design
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-[1] mb-10 tracking-tight">
            <span className="block opacity-0 animate-fade-in-up animation-delay-500">
              Transformamos visão
            </span>
            <span className="block opacity-0 animate-fade-in-up animation-delay-700 mt-2">
              em <span className="italic text-[#009BDB] relative inline-block">
                Legado Digital
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#009BDB]/50 to-transparent scale-x-0 animate-expand-width animation-delay-1000"></span>
              </span>
            </span>
          </h1>

          <p className="text-[#85DEF2]/80 text-sm md:text-xl font-light tracking-[0.15em] uppercase mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in animation-delay-1200">
            Onde a <span className="text-white font-medium">sofisticação</span> encontra a potência do código puro.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-fade-in animation-delay-1500">
          <a
            href="#portfolio"
            className="group relative px-10 py-5 bg-[#006DA1] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#009BDB] transition-all duration-500 rounded-lg shadow-[0_10px_30px_rgba(0,109,161,0.3)] hover:shadow-[0_15px_40px_rgba(0,155,219,0.4)] hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Portfólio
              <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-500" size={18} />
            </span>
          </a>

          <a
            href="#about"
            onClick={handlePhilosophyClick}
            className="px-10 py-5 border border-white/10 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/20 rounded-lg transition-all duration-500 backdrop-blur-sm"
          >
            Nossa Filosofia
          </a>
        </div>

        {/* Dynamic Scroll Indicator - Posicionado no fluxo para evitar sobreposição */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-0 animate-fade-in animation-delay-2000">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#009BDB] via-[#85DEF2]/20 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 animate-[scrollLine_2s_infinite]"></div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-light translate-x-[0.25em]">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
