
import React from 'react';
import { Layout, Smartphone, RefreshCw, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: <Layout className="text-[#009BDB]" size={32} />,
    title: "Sites de Prestígio",
    desc: "Plataformas web exclusivas com animações fluidas e design focado em autoridade e elegância."
  },
  {
    icon: <Smartphone className="text-[#009BDB]" size={32} />,
    title: "Experiências Mobile de Elite",
    desc: "Interfaces responsivas desenvolvidas com tecnologia de ponta para dispositivos premium."
  },
  {
    icon: <RefreshCw className="text-[#009BDB]" size={32} />,
    title: "Redesign & Modernização",
    desc: "Transformação de sites obsoletos em experiências digitais contemporâneas, fluidas e visualmente impactantes."
  },
  {
    icon: <BarChart3 className="text-[#009BDB]" size={32} />,
    title: "Páginas de Alta Conversão",
    desc: "Landing pages estratégicas focadas em transformar visitantes qualificados em clientes de alto ticket."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 bg-[#575759]/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20 reveal">
          <p className="text-[#85DEF2] text-[10px] sm:text-xs uppercase tracking-[0.5em] mb-4 font-bold">Nossa Expertise</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light">O que fazemos por você</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="reveal group p-6 md:p-8 border border-white/5 hover:border-[#009BDB]/30 bg-[#262626] transition-all duration-700 hover:-translate-y-4 shadow-2xl"
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="mb-6 md:mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                {s.icon}
              </div>
              <h3 className="text-lg md:text-xl font-serif mb-4 group-hover:text-[#85DEF2] transition-colors">{s.title}</h3>
              <p className="text-white/75 text-sm leading-relaxed font-light">
                {s.desc}
              </p>
              <div className="mt-8 w-10 h-[2px] bg-[#575759] group-hover:w-full group-hover:bg-[#009BDB] transition-all duration-700 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
