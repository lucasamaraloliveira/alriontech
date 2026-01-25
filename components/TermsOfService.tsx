
import React, { useEffect } from 'react';

const TermsOfService: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#262626] text-white/95">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-12">Termos de <span className="italic text-[#009BDB]">Serviço</span></h1>

                <div className="space-y-10 font-light leading-relaxed text-lg">
                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">1. Escopo</h2>
                        <p>Estes termos regem o uso do site da Alrion Tech e a contratação de nossos serviços de desenvolvimento web de elite e design de luxo.</p>
                    </section>

                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">2. Propriedade Intelectual</h2>
                        <p>Todo o código, design e conteúdo criativo desenvolvido pela Alrion Tech são obras de autoria protegidas, sendo transferidos ao cliente conforme acordado em contrato individual.</p>
                    </section>

                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">3. Conduta</h2>
                        <p>Utilizamos tecnologias de ponta para garantir a estabilidade absoluta. O uso indevido de nossas plataformas ou tentativas de engenharia reversa são estritamente proibidos.</p>
                    </section>

                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">4. Alterações</h2>
                        <p>A Alrion Tech reserva-se o direito de atualizar estes termos para refletir a evolução de nossa busca constante pela perfeição técnica.</p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5">
                    <a href="/" className="text-[#009BDB] text-xs uppercase tracking-widest font-bold hover:text-[#85DEF2] transition-colors border-b border-transparent hover:border-[#85DEF2]">← Voltar para o Início</a>
                </div>
            </div>
        </main>
    );
};

export default TermsOfService;
