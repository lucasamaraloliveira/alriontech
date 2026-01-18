
import React from 'react';
import { X, ExternalLink, MessageCircle, ArrowRight } from 'lucide-react';

interface Project {
    title: string;
    category: string;
    img: string;
    description?: string;
    link?: string;
}

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!project) return null;

    return (
        <div
            className={`fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 transition-all duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Overlay */}
            <div
                className="absolute inset-0 bg-[#262626]/90 backdrop-blur-xl cursor-pointer"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div
                className={`relative w-full max-w-5xl bg-[#262626] border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 transform ${isOpen ? 'translate-y-0 scale-100' : 'translate-y-12 scale-95'
                    }`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 z-10 p-2 bg-black/20 hover:bg-black/40 text-white rounded-lg transition-colors backdrop-blur-md"
                >
                    <X size={24} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-[300px] md:h-auto overflow-hidden group bg-black/20 flex items-center justify-center">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#262626] via-transparent to-transparent md:hidden pointer-events-none"></div>
                    </div>

                    {/* Details Section */}
                    <div className="p-8 md:p-12 flex flex-col justify-center bg-[#262626]">
                        <p className="text-[#85DEF2] text-[10px] md:text-xs uppercase tracking-[0.4em] font-black mb-4">
                            {project.category}
                        </p>
                        <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
                            {project.title}
                        </h2>
                        <p className="text-white/60 font-light leading-relaxed mb-10 text-lg">
                            {project.description || "Uma solução digital de alta performance, unindo design de luxo com tecnologias de ponta para proporcionar uma experiência de marca inigualável."}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                            <a
                                href={project.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-4 px-8 py-4 bg-[#009BDB] text-white rounded-lg text-xs uppercase tracking-widest font-black hover:bg-[#85DEF2] hover:text-[#262626] transition-all duration-500 shadow-xl shadow-[#009BDB]/20 group"
                            >
                                Visualizar Projeto
                                <ExternalLink size={22} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>

                            <button
                                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                                className="flex items-center justify-center gap-4 px-8 py-4 border border-white/10 text-white rounded-lg text-xs uppercase tracking-widest font-bold hover:border-[#85DEF2] hover:text-[#85DEF2] transition-all duration-500 group"
                            >
                                Solicitar Proposta
                                <MessageCircle size={22} fill="white" className="group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
