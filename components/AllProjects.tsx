import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'; // Added Navbar import
import Footer from './Footer'; // Added Footer import
import ProjectModal from './ProjectModal';

const allProjects = [
    {
        title: "Blue Horizon",
        category: "Architecture & Design",
        img: "https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&q=80&w=2070",
        description: "Plataforma digital para um escritório de arquitetura de luxo, focada em visualização imersiva e minimalismo sofisticado."
    },
    {
        title: "Skyline Assets",
        category: "Corporate Finance",
        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2070",
        description: "Dashboard exclusivo para gestão de ativos de alto patrimônio, unindo segurança bancária com estética de alto nível."
    },
    {
        title: "Urban Pure",
        category: "Luxury Tech",
        img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=2069",
        description: "Ecommerce de dispositivos inteligentes premium, priorizando a experiência do usuário e a fluidez de navegação."
    },
    {
        title: "Oasis Real Estate",
        category: "Hospitality",
        img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2070",
        description: "Um portal de reservas para resorts de luxo, focado em converter visitantes através de elegância visual e processos simplificados."
    },
    {
        title: "Vanguard Logistics",
        category: "Industrial Solutions",
        img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
        description: "Modernização da presença digital de uma gigante da logística, trazendo clareza e tecnologia para operações complexas."
    },
    {
        title: "Pure Elegance",
        category: "Fashion & Beauty",
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=2070",
        description: "Brandbook digital para uma marca de moda boutique, utilizando tipografia clássica e layouts assimétricos modernos."
    },
    {
        title: "Vertex Consulting",
        category: "Corporate Strategy",
        img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2070",
        description: "Presença digital para consultoria de elite, enfatizando autoridade e resultados através de design limpo."
    },
    {
        title: "Lumina Jewels",
        category: "Luxury Retail",
        img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2070",
        description: "Boutique online de joias exclusivas, onde cada clique reflete o brilho e a raridade dos produtos."
    },
    {
        title: "Titanium Aero",
        category: "Aerospace",
        img: "https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=2070",
        description: "Site corporativo para tecnologia aeroespacial, traduzindo precisão técnica em uma interface futurista."
    },
    {
        title: "Aether Wellness",
        category: "Healthcare & Spa",
        img: "https://images.unsplash.com/photo-1540555700478-4be289a5090a?auto=format&fit=crop&q=80&w=2070",
        description: "Portal de bem-estar de alto padrão, focado em serenidade visual e facilidade de agendamento."
    },
    {
        title: "Nordic Homes",
        category: "Real Estate",
        img: "https://images.unsplash.com/photo-1512918766671-ad6507962077?auto=format&fit=crop&q=80&w=2070",
        description: "Catálogo imobiliário minimalista para propriedades escandinavas de alto valor."
    },
    {
        title: "Nebula Systems",
        category: "Software Engineering",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
        description: "Hub tecnológico para soluções em nuvem, destacando escalabilidade e infraestrutura robusta."
    }
];

const PROJECTS_PER_PAGE = 6;

const AllProjects: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentPage]);

    const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    const currentProjects = allProjects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-[#262626] pt-24 sm:pt-32 pb-24 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 text-[#009BDB] text-xs uppercase tracking-widest font-black mb-12 hover:text-[#85DEF2] transition-colors group"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-2 transition-transform" />
                        Voltar para Home
                    </Link>

                    <header className="mb-20">
                        <p className="text-[#85DEF2] text-xs uppercase tracking-[0.5em] mb-4 font-bold">Portfólio Completo</p>
                        <h1 className="text-4xl md:text-7xl font-serif text-white leading-tight">
                            Nossa Jornada Criativa <br />
                            <span className="italic text-[#009BDB]">em detalhes.</span>
                        </h1>
                    </header>

                    {/* Projects Grid - Removed reveal class for instant visibility */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {currentProjects.map((p, idx) => (
                            <div
                                key={idx}
                                className="group cursor-pointer animate-fade-in"
                                style={{ animationDelay: `${idx * 0.1}s` }}
                                onClick={() => setSelectedProject(p)}
                            >
                                <div className="overflow-hidden mb-5 md:mb-6 relative bg-[#575759] rounded-2xl">
                                    <img
                                        src={p.img}
                                        alt={p.title}
                                        className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                                    />
                                    <div className="absolute inset-0 bg-[#262626]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="px-6 py-3 bg-[#009BDB] text-white text-[10px] font-black uppercase tracking-widest shadow-2xl rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">Ver Projeto</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-end">
                                    <div>
                                        <p className="text-[#85DEF2] text-[9px] md:text-[10px] uppercase tracking-widest mb-2 font-bold">{p.category}</p>
                                        <h3 className="text-xl md:text-2xl font-serif text-white/90 group-hover:text-[#009BDB] transition-colors">{p.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Buttons */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex justify-center items-center gap-8">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`flex items-center gap-2 text-xs uppercase tracking-widest font-black transition-all ${currentPage === 1 ? 'text-white/10 cursor-not-allowed' : 'text-[#009BDB] hover:text-[#85DEF2]'
                                    }`}
                            >
                                <ChevronLeft size={20} />
                                Anterior
                            </button>

                            <div className="flex gap-4">
                                {Array.from({ length: totalPages }).map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentPage(i + 1)}
                                        className={`w-10 h-10 rounded-lg border text-[10px] font-black transition-all ${currentPage === i + 1
                                            ? 'bg-[#009BDB] border-[#009BDB] text-white shadow-lg shadow-[#009BDB]/20'
                                            : 'border-white/10 text-white/40 hover:border-[#85DEF2] hover:text-[#85DEF2]'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`flex items-center gap-2 text-xs uppercase tracking-widest font-black transition-all ${currentPage === totalPages ? 'text-white/10 cursor-not-allowed' : 'text-[#009BDB] hover:text-[#85DEF2]'
                                    }`}
                            >
                                Próxima
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}
                </div>

                <ProjectModal
                    project={selectedProject}
                    isOpen={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            </div>
            <Footer />
        </>
    );
};

export default AllProjects;
