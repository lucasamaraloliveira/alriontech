
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 bg-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative order-2 lg:order-1 reveal-left">
          <div className="absolute -top-10 -left-6 sm:-left-10 text-[6rem] sm:text-[10rem] font-serif text-[#009BDB]/10 leading-none select-none">A</div>
          <div className="relative z-10 overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=75&w=1200"
              srcSet="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=75&w=600 600w,
                      https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=75&w=1200 1200w"
              sizes="(max-width: 768px) 600px, 1200px"
              alt="Office Minimalist"
              width={800}
              height={1000}
              loading="lazy"
              decoding="async"
              className="w-full aspect-[4/5] object-cover border-l-4 border-[#009BDB] p-3 sm:p-4 bg-[#575759]/20 transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-32 sm:w-48 h-32 sm:h-48 border border-[#85DEF2]/30 hidden sm:block animate-pulse"></div>
        </div>

        <div className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left reveal">
          <div className="inline-block border-b-2 border-[#009BDB] pb-2 mx-auto lg:mx-0">
            <span className="text-[#009BDB] text-[10px] sm:text-xs uppercase tracking-[0.4em] font-bold">Nossa História</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-light leading-tight">
            Não apenas códigos, mas <br />
            <span className="italic text-[#85DEF2]">Obras de Arte Digitais.</span>
          </h2>
          <p className="text-white/60 leading-relaxed text-base sm:text-lg font-light max-w-2xl mx-auto lg:mx-0">
            A Alrion Tech nasceu da necessidade de elevar o padrão do desenvolvimento web. Em um mundo saturado de templates genéricos, nós oferecemos o bespoke — o desenvolvimento sob medida, onde cada pixel é meticulosamente planejado.
          </p>

          <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 max-w-md mx-auto lg:mx-0">
            {[
              { num: "01.", label: "Exclusividade" },
              { num: "02.", label: "Performance" },
              { num: "03.", label: "Inovação" },
              { num: "04.", label: "Elegância" }
            ].map((item, idx) => (
              <div key={idx} className="group reveal" style={{ transitionDelay: `${400 + (idx * 100)}ms` }}>
                <p className="text-2xl sm:text-3xl font-serif text-[#009BDB] group-hover:text-[#85DEF2] transition-colors duration-500">{item.num}</p>
                <h3 className="text-white uppercase text-[8px] sm:text-[10px] tracking-widest mt-2 font-bold group-hover:tracking-[0.3em] transition-all duration-500">{item.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
