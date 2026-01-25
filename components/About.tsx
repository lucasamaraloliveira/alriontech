
import React, { memo } from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-48 px-6 md:px-12 bg-[#1A1A1A] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Sub-heading Concept */}
        <div className="w-full text-center md:text-left mb-24 opacity-0 animate-[revealUp_1s_forwards]">
          <span className="text-[#009BDB] text-[10px] uppercase tracking-[1em] font-black">Nossa Filosofia</span>
          <div className="w-full h-[1px] bg-white/5 mt-8 animate-[lineExpand_2s_forwards_0.5s]"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          {/* Visual Side */}
          <div className="relative group perspective-1000 opacity-0 animate-[revealUp_1.2s_forwards_0.3s]">
            <div className="relative z-10 overflow-hidden rounded-sm bg-[#262626]">
              <img
                src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=85&w=1200"
                alt="Visionary Artistry"
                width={800}
                height={1000}
                className="w-full aspect-[3/4] object-cover opacity-80 transition-transform duration-1000 group-hover:scale-110 will-change-transform transform-gpu"
                loading="eager"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-60"></div>
            </div>

            {/* Geometric Decoration - Low memory cost */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-white/5 rounded-sm p-4 hidden lg:block">
              <div className="w-full h-full border border-white/10 opacity-20"></div>
            </div>
          </div>

          {/* Textual Side */}
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.1] text-white opacity-0 animate-[revealUp_1.2s_forwards_0.5s]">
              Transformamos <br />
              <span className="italic text-[#009BDB]">Pixel em Legado.</span>
            </h2>

            <p className="text-white/50 leading-relaxed text-lg md:text-xl font-light max-w-xl opacity-0 animate-[revealUp_1.2s_forwards_0.7s]">
              Na Alrion Tech, acreditamos que a tecnologia deve ser invisível, deixando apenas a experiência. Criamos interfaces que respiram, onde cada interação é uma nota em uma sinfonia digital perfeitamente afinada.
            </p>

            <div className="grid grid-cols-2 gap-12 pt-12 border-t border-white/5 opacity-0 animate-[fadeIn_1.5s_forwards_1s]">
              {[
                { label: "Design", val: "Exclusivo" },
                { label: "Código", val: "Puro" },
                { label: "Experiência", val: "Fluida" },
                { label: "Visão", val: "Artística" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-2">
                  <p className="text-[#009BDB] text-[9px] uppercase tracking-[0.4em] font-black">{item.label}</p>
                  <p className="text-white text-xl font-serif italic">{item.val}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
