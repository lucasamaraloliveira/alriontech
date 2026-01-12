import React, { useState } from 'react';
import Toast from './Toast';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir apenas letras e espaços
    if (value === '' || /^[a-zA-ZáàâãéèêíïóôõöúçñÀÁÂÃÈÉÊÍÏÓÔÕÖÚÇÑ\s]+$/.test(value)) {
      setName(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.length < 8) {
      alert("O nome deve ter no mínimo 8 letras.");
      return;
    }
    // Lógica de envio simulada
    setShowToast(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-[#262626] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-light mb-8 text-white">
              Vamos criar algo <br />
              <span className="italic text-[#009BDB]">Inesquecível.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 font-light">
              Estamos prontos para levar sua marca ao próximo nível com o poder da tecnologia de elite.
            </p>

            <div className="space-y-8">
              <div className="flex gap-6 items-start text-left">
                <div className="w-10 h-10 border border-[#85DEF2] rounded-xl flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-[#009BDB] rounded-sm"></div>
                </div>
                <div>
                  <h4 className="text-[#85DEF2] text-[10px] uppercase tracking-widest mb-1 font-bold">Sede</h4>
                  <p className="text-white/80 text-sm">Av. Paulista, 1000 - São Paulo, BR</p>
                </div>
              </div>
              <div className="flex gap-6 items-start text-left">
                <div className="w-10 h-10 border border-[#85DEF2] rounded-full flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 bg-[#009BDB] rounded-full"></div>
                </div>
                <div>
                  <h4 className="text-[#85DEF2] text-[10px] uppercase tracking-widest mb-1 font-bold">Direct</h4>
                  <p className="text-white/80 text-sm">contato@alriontech.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#575759]/10 p-8 md:p-12 border border-white/5 backdrop-blur-sm rounded-2xl">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Nome</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Nome do solicitante"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#009BDB] transition-all text-white placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">E-mail</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor e-mail"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#009BDB] transition-all text-white placeholder:text-white/10"
                />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Mensagem</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Como podemos ajudar sua marca?"
                  className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#009BDB] transition-all resize-none text-white placeholder:text-white/10"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-[#009BDB] text-white uppercase text-[10px] tracking-[0.3em] font-black hover:bg-[#85DEF2] hover:text-[#262626] transition-all duration-300 rounded-lg shadow-lg shadow-[#009BDB]/20"
              >
                Solicitar Proposta
              </button>
            </form>
          </div>
        </div>
        <Toast
          message="Sua proposta foi enviada com sucesso! Em breve entraremos em contato."
          isVisible={showToast}
          onClose={() => setShowToast(false)}
        />
      </div>
    </section>
  );
};

export default Contact;
