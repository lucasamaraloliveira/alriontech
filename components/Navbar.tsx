
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home', type: 'anchor' },
    { name: 'Sobre', href: '#about', type: 'anchor' },
    { name: 'Serviços', href: '#services', type: 'anchor' },
    { name: 'Portfólio', href: '#portfolio', type: 'anchor' },
    { name: 'Contato', href: '#contact', type: 'anchor' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    const isHome = window.location.hash === '#/' || window.location.hash === '' || window.location.hash.startsWith('#/?');
    if (!isHome) {
      // If not on the home page, redirect to home and then scroll
      const targetPath = hash === '#home' ? '' : hash.substring(1);
      window.location.href = window.location.pathname + '#/' + targetPath;
    } else {
      // Smooth scroll on the same page
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false); // Close mobile menu after click
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, type: string) => {
    if (type === 'anchor') {
      handleAnchorClick(e, href);
    } else {
      setIsOpen(false);
    }
  };

  // Cores dinâmicas para a logo e links
  const primaryColor = scrolled ? '#009BDB' : '#FFFFFF';
  const secondaryColor = scrolled ? '#85DEF2' : 'rgba(255,255,255,0.7)';

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-4 sm:p-6 pointer-events-none text-left">
      <nav
        className={`pointer-events-auto transition-all duration-700 ease-in-out px-5 sm:px-8 md:px-10 py-3 flex items-center justify-between gap-4 md:gap-10 shadow-2xl ${scrolled
          ? 'w-full md:w-[95%] lg:w-[85%] max-w-6xl bg-[#262626]/85 backdrop-blur-2xl rounded-2xl border border-white/10'
          : 'w-full max-w-7xl bg-transparent rounded-none border-transparent'
          }`}
      >
        {/* Logo Reutilizável com Cores Dinâmicas */}
        <div
          className="cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={(e) => handleAnchorClick(e as unknown as React.MouseEvent<HTMLAnchorElement>, '#home')}
        >
          <Logo
            className="h-10 sm:h-12 md:h-14"
            colorPrimary={primaryColor}
            colorSecondary={secondaryColor}
          />
        </div>

        {/* Desktop Links - Cores Dinâmicas */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.type)}
              className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 hover:text-[#85DEF2] ${scrolled ? 'text-white/70' : 'text-white'
                }`}
              style={{ color: scrolled ? undefined : 'white' }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#/contato"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 bg-[#009BDB] text-white hover:bg-[#85DEF2] hover:text-[#262626] transition-all duration-500 text-[9px] uppercase tracking-widest font-black rounded-lg shadow-lg shadow-[#009BDB]/20"
          >
            Consultoria
          </a>
        </div>

        {/* Tablet & Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#262626] z-[60] lg:hidden transition-all duration-500 flex flex-col items-center justify-center ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-10'
        }`}>
        <button
          className="absolute top-8 right-8 text-white p-2"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>

        <div className="flex flex-col items-center space-y-8 w-full px-6">
          <Logo className="h-16 mb-4" colorPrimary="#009BDB" colorSecondary="#85DEF2" />

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.type)}
              className="text-2xl sm:text-3xl font-serif text-white hover:text-[#009BDB] transition-colors tracking-widest text-center"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#/contato"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs px-10 py-4 bg-[#009BDB] text-white text-[10px] uppercase tracking-widest font-black rounded-lg mt-4 text-center"
          >
            Consultoria Especializada
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
