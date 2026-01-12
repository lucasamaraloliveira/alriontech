
import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-[#262626] text-white/80">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-serif text-white mb-12">Política de <span className="italic text-[#009BDB]">Privacidade</span></h1>

                <div className="space-y-10 font-light leading-relaxed text-lg">
                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">1. Introdução</h2>
                        <p>Na Alrion Tech, a privacidade dos nossos clientes é tratada com o mais alto nível de sofisticação e segurança. Esta política detalha como coletamos e protegemos suas informações de elite.</p>
                    </section>

                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">2. Coleta de Dados</h2>
                        <p>Coletamos apenas as informações estritamente necessárias para a prestação de nossos serviços de desenvolvimento sob medida, como nome e e-mail de contato através de nossos formulários exclusivos.</p>
                    </section>

                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">3. Proteção e Sigilo</h2>
                        <p>Seus dados são protegidos por criptografia de ponta e nunca são compartilhados com terceiros sem consentimento explícito. O sigilo é um pilar da nossa ética profissional.</p>
                    </section>

                    <section>
                        <h2 className="text-[#85DEF2] text-xs uppercase tracking-widest font-bold mb-4">4. Seus Direitos</h2>
                        <p>Você possui total controle sobre suas informações, podendo solicitar o acesso, retificação ou exclusão de seus dados a qualquer momento através de nossos canais oficiais.</p>
                    </section>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5">
                    <a href="/" className="text-[#009BDB] text-xs uppercase tracking-widest font-bold hover:text-[#85DEF2] transition-colors border-b border-transparent hover:border-[#85DEF2]">← Voltar para o Início</a>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
