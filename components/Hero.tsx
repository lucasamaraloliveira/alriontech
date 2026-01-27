
import React, { memo } from 'react';
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
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#1A1A1A]">
      {/* Background Silk - Ultra Clean */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,155,219,0.03)_0%,_transparent_70%)]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 md:pt-40 flex flex-col items-center">
        {/* Main Content Group */}
        <div className="max-w-5xl w-full flex flex-col items-center text-center">

          <div className="mb-6 md:mb-8 overflow-hidden">
            <span className="block text-[#009BDB] text-[10px] uppercase tracking-[0.8em] font-black opacity-0 animate-[revealUp_1s_ease-out_forwards]">
              Design Digital de Elite
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-serif font-light leading-[1.1] tracking-tighter text-white mb-8 md:mb-12">
            <span className="block animate-[revealUp_0.8s_cubic-bezier(0.19,1,0.22,1)_forwards]">
              Transformamos Visão em
            </span>
            <span className="block italic text-[#009BDB] animate-[revealUp_1s_cubic-bezier(0.19,1,0.22,1)_forwards_0.2s]">
              Legado Digital
            </span>
          </h1>

          <div className="space-y-12 flex flex-col items-center opacity-0 animate-[fadeIn_1.5s_ease-out_forwards_0.8s]">
            <p className="text-white/40 text-[11px] md:text-xs uppercase tracking-[0.4em] font-light max-w-lg leading-loose">
              Onde a <span className="text-white/80 font-medium">sofisticação</span> encontra <br className="hidden md:block" /> a potência do código puro.
            </p>

            <div className="flex flex-row items-center gap-10 sm:gap-16 pt-4">
              <a
                href="#portfolio"
                className="group flex flex-col items-center gap-3 text-white text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300"
              >
                <span className="group-hover:text-[#009BDB] transition-colors">Portfólio</span>
                <div className="w-8 h-[1px] bg-white/20 group-hover:w-16 group-hover:bg-[#009BDB] transition-all duration-500"></div>
              </a>

              <a
                href="#about"
                onClick={handlePhilosophyClick}
                className="group flex flex-col items-center gap-3 text-white/30 text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300"
              >
                <span className="group-hover:text-white transition-colors">Filosofia</span>
                <div className="w-8 h-[1px] bg-white/10 group-hover:w-16 group-hover:bg-white/40 transition-all duration-500"></div>
              </a>
            </div>

            {/* Scroll Indicator - Agora abaixo dos botões */}
            <div className="pt-4 flex flex-col items-center opacity-0 animate-[fadeIn_1s_forwards_1.5s]">
              <div className="w-[1px] h-12 bg-white/10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[#009BDB] animate-[scrollDash_2.5s_infinite]"></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default memo(Hero);
