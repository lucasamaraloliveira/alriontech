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
        img: "./blue-horizon.webp",
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
        title: "EcoFlow",
        category: "Clean Energy",
        img: "./ecoflow.png",
        link: "https://ecoflow-psi.vercel.app/",
        description: "A EcoFlow oferece soluções completas em energia solar para sua residência ou empresa. Reduza sua conta de luz em até 95% e contribua para um planeta mais sustentável."
    },
    {
        title: "EcoConsult",
        category: "Ecology Consultancy",
        img: "./ecoconsult.png",
        link: "https://ecoconsult.vercel.app/",
        description: "Ajudamos empresas a navegarem pelas complexidades regulatórias e a implementarem soluções ecológicas que impulsionam o crescimento e a preservação do planeta."
    },
    {
        title: "Gourmet Carioca",
        category: "Restaurant",
        img: "./gourmet-carioca.png",
        link: "https://gourmet-carioca-rj.vercel.app/",
        description: "Resgatamos a essência da culinária de bairro. Ingredientes frescos, porções generosas e o acolhimento que você merece."
    },
    {
        title: "Hype Suplementos",
        category: "Supplements",
        img: "./hype-suplementos.png",
        link: "https://hype-suplementos.vercel.app/",
        description: "Suplementação de elite desenvolvida para atletas que não aceitam o comum. Pureza absoluta e tecnologia suíça em cada dose."
    },
    {
        title: "Mar Vermelho",
        category: "Religious",
        img: "./mar-vermelho.png",
        link: "https://mar-vermelho.vercel.app/",
        description: "Presença digital para consultoria de elite, enfatizando autoridade e resultados através de design limpo."
    },
    {
        title: "Lumina Jewels",
        category: "Luxury Retail",
        img: "./lumina-jewels.png",
        link: "https://lumina-jewel.vercel.app/",
        description: "Boutique online de joias exclusivas, onde cada clique reflete o brilho e a raridade dos produtos."
    },
    {
        title: "Rio Saúde",
        category: "Clinic",
        img: "./rio-saude.png",
        link: "https://rio-saude.vercel.app/",
        description: "Bem-vindo ao centro médico mais exclusivo do Rio. Onde a precisão científica se encontra com o conforto inigualável de um hotel cinco estrelas."
    },
    {
        title: "Med Trab",
        category: "Healthcare",
        img: "./med-trab.png",
        link: "https://med-trab.vercel.app/",
        description: "Garantimos a conformidade legal da sua empresa e o bem-estar dos seus colaboradores através de medicina e segurança do trabalho de excelência."
    },
    {
        title: "Mãos Divinas",
        category: "manicure",
        img: "./maos-divinas.png",
        link: "https://maos-divinas.vercel.app/",
        description: "Onde a arte encontra a exclusividade para realçar a beleza única de cada mulher."
    },
    {
        title: "Silva Studios",
        category: "stattionery store",
        img: "./silva-studio.webp",
        link: "https://silva-studio.vercel.app/",
        description: "Silva Studio: onde a sofisticação encontra a experimentação. Papelaria de vanguarda para quem redefine o amanhã."
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
                                        width={600}
                                        height={400}
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
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
