
import React, { memo } from 'react';
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
      {/* Background Otimizado - Apenas o essencial para o visual luxury */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-25%] left-[-25%] w-[100%] h-[100%] bg-[#009BDB]/10 rounded-full blur-[120px] will-change-transform transform-gpu"
          style={{ transform: 'translate3d(0,0,0)' }}></div>
        <div className="absolute bottom-[-25%] right-[-25%] w-[100%] h-[100%] bg-[#85DEF2]/5 rounded-full blur-[120px] will-change-transform transform-gpu"
          style={{ transform: 'translate3d(0,0,0)' }}></div>

        {/* Pattern de Alta Performance */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#262626]/20 to-[#262626]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center">
        {/* Floating Badge - CSS Puro p/ Anim */}
        <div className="mb-10 opacity-0 transform translate-y-4 animate-[fadeInUp_0.8s_ease-out_forwards_0.3s]">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md">
            <Sparkles size={14} className="text-[#85DEF2]" />
            <span className="text-white text-[10px] uppercase tracking-[0.3em] font-medium">
              Excelência Digital
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center max-w-5xl">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-light leading-[1] mb-10 tracking-tight text-white">
            <span className="block opacity-0 transform translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards_0.5s]">
              Transformamos visão
            </span>
            <span className="block opacity-0 transform translate-y-8 animate-[fadeInUp_0.8s_ease-out_forwards_0.7s] mt-2">
              em <span className="italic text-[#009BDB] relative inline-block">
                Legado Digital
                <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#009BDB]/50 to-transparent scale-x-0 animate-[expandWidth_1s_ease-out_forwards_1.2s]"></span>
              </span>
            </span>
          </h1>

          <p className="text-[#85DEF2]/80 text-sm md:text-xl font-light tracking-[0.15em] uppercase mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_forwards_1.4s]">
            Onde a <span className="text-white font-medium">sofisticação</span> encontra a potência do código puro.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-6 opacity-0 animate-[fadeIn_1s_ease-out_forwards_1.6s]">
          <a
            href="#portfolio"
            className="group relative px-10 py-5 bg-[#006DA1] text-white font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#009BDB] transition-all duration-300 rounded-lg shadow-[0_10px_30px_rgba(0,109,161,0.2)] hover:-translate-y-1 transform-gpu"
          >
            <span className="relative z-10 flex items-center gap-2">
              Ver Portfólio
              <ArrowDownRight className="group-hover:rotate-45 transition-transform duration-300" size={18} />
            </span>
          </a>

          <a
            href="#about"
            onClick={handlePhilosophyClick}
            className="px-10 py-5 border border-white/10 text-white font-medium text-xs uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/20 rounded-lg transition-all duration-300 backdrop-blur-sm transform-gpu"
          >
            Nossa Filosofia
          </a>
        </div>

        {/* Scroll Indicator - Ultra Leve */}
        <div className="mt-16 flex flex-col items-center gap-4 opacity-0 animate-[fadeIn_1s_ease-out_forwards_2s]">
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#009BDB] via-[#85DEF2]/20 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white/40 animate-[scrollLine_2s_infinite] will-change-transform"></div>
          </div>
          <span className="text-[9px] uppercase tracking-[0.5em] text-white/40 font-light translate-x-[0.25em]">Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
