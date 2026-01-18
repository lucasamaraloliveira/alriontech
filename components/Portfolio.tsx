
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectModal from './ProjectModal';
import { ArrowDownRight } from 'lucide-react';

const projects = [
  {
    title: "Blue Horizon",
    category: "Architecture & Design",
    img: "./blue-horizon.png",
    link: "https://blue-horizon-ten.vercel.app/",
    description: "Plataforma digital para um escritório de arquitetura de luxo, focada em visualização imersiva e minimalismo sofisticado."
  },
  {
    title: "Pure Elegance",
    category: "Fashion & Beauty",
    img: "./pure-elegance.png",
    link: "https://pure-elegance.vercel.app/",
    description: "Uma casa de moda boutique dedicada à precisão arquitetônica da silhueta e à alma poética de quem a veste."
  },
  {
    title: "Silva Studio",
    category: "stattionery store",
    img: "./silva-studio.png",
    link: "https://silva-studio.vercel.app/",
    description: "Silva Studio: onde a sofisticação encontra a experimentação. Papelaria de vanguarda para quem redefine o amanhã."
  }
];

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section id="portfolio" className="py-20 md:py-32 bg-[#262626] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-12 md:mb-16 gap-6 sm:gap-8 text-center sm:text-left">
          <div>
            <p className="text-[#85DEF2] text-[10px] sm:text-xs uppercase tracking-[0.5em] mb-4 font-bold">Trabalhos Recentes</p>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-light text-white">Curadoria de Excelência</h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[#009BDB] text-[10px] sm:text-xs uppercase tracking-widest border-b border-[#009BDB] pb-1 hover:text-[#85DEF2] hover:border-[#85DEF2] transition-all font-bold whitespace-nowrap"
          >
            Ver Todos os Projetos
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {projects.map((p, idx) => (
            <div key={idx} className="group cursor-pointer" onClick={() => setSelectedProject(p)}>
              <div className="overflow-hidden mb-5 md:mb-6 relative bg-[#575759] rounded-2xl">
                <img
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-[#009BDB]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="px-5 py-2.5 bg-white text-[#262626] text-[9px] md:text-[10px] font-bold uppercase tracking-widest shadow-xl rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Ver Projeto</span>
                </div>
              </div>
              <p className="text-[#85DEF2] text-[9px] md:text-[10px] uppercase tracking-widest mb-2 font-bold">{p.category}</p>
              <h3 className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-[#009BDB] transition-colors">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Portfolio;
