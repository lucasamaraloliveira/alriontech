
import React, { memo } from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Imagem Otimizada */}
        <div className="relative order-2 lg:order-1 reveal-left will-change-transform transform-gpu">
          <div className="absolute -top-10 -left-6 text-[8rem] font-serif text-[#009BDB]/5 leading-none select-none pointer-events-none">A</div>
          <div className="relative z-10 overflow-hidden rounded-lg group">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200"
              alt="Alrion Tech Vision"
              width={600}
              height={750}
              className="w-full aspect-[4/5] object-cover border-l-4 border-[#009BDB] p-2 bg-[#575759]/10 transition-transform duration-700 group-hover:scale-105 will-change-transform transform-gpu"
              loading="eager" // Carregamento imediato pois está logo após a primeira dobra
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#85DEF2]/20 hidden sm:block animate-pulse pointer-events-none"></div>
        </div>

        {/* Conteúdo Textual */}
        <div className="space-y-8 order-1 lg:order-2 text-center lg:text-left reveal will-change-transform transform-gpu">
          <div className="inline-block border-b-2 border-[#009BDB] pb-2">
            <span className="text-[#009BDB] text-[10px] uppercase tracking-[0.4em] font-black">Nossa História</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light leading-tight text-white">
            Não apenas códigos, mas <br />
            <span className="italic text-[#85DEF2]">Obras de Arte Digitais.</span>
          </h2>

          <p className="text-white/80 leading-relaxed text-lg font-light max-w-2xl mx-auto lg:mx-0">
            A Alrion Tech nasceu para elevar o padrão do desenvolvimento web. Em um mundo saturado de templates genéricos, oferecemos o <span className="text-[#85DEF2] font-medium italic">bespoke</span> — o desenvolvimento sob medida, onde cada pixel é planejado para converter e impressionar.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-8 max-w-md mx-auto lg:mx-0">
            {[
              { num: "01.", label: "Exclusividade" },
              { num: "02.", label: "Performance" },
              { num: "03.", label: "Inovação" },
              { num: "04.", label: "Elegância" }
            ].map((item, idx) => (
              <div key={idx} className="group">
                <p className="text-2xl font-serif text-[#009BDB] transition-colors duration-300 group-hover:text-[#85DEF2]">{item.num}</p>
                <h3 className="text-white uppercase text-[10px] tracking-[0.2em] mt-2 font-black transition-all duration-300 group-hover:tracking-[0.3em]">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
