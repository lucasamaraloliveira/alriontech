
import React, { useState, useEffect, useRef, memo } from 'react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import HamburgerButton from './HamburgerButton';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Portfólio', href: '#portfolio' },
    { name: 'Contato', href: '#contact' },
  ];

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 w-full z-[10000] flex justify-center px-6 transition-all duration-500 pointer-events-none ${scrolled ? 'py-4' : 'py-8'}`}>
      {/* Scroll Background - Agora no topo para ficar atrás no DOM */}
      <div className={`absolute inset-0 bg-[#1A1A1A]/95 backdrop-blur-md transition-opacity duration-700 pointer-events-none border-b border-white/5 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>

      <nav
        ref={navRef}
        className="relative z-10 w-full max-w-7xl flex items-center justify-between pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] opacity-0 animate-[revealDown_1s_forwards]"
      >
        {/* Logo - Minimalist approach */}
        <div
          className="cursor-pointer transition-transform duration-500 hover:scale-105"
          onClick={(e) => handleAnchorClick(e as any, '#home')}
        >
          <Logo
            className={`transition-all duration-500 ${scrolled ? 'h-8 md:h-10' : 'h-10 md:h-12'}`}
            colorPrimary="#FFFFFF"
            colorSecondary={scrolled ? '#009BDB' : 'rgba(255,255,255,0.5)'}
          />
        </div>

        {/* Desktop Links - Ultra Light & Spaced */}
        <div className="hidden lg:flex items-center gap-16">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className={`text-[10px] uppercase tracking-[0.4em] font-black transition-all duration-300 hover:text-white hover:tracking-[0.6em] ${scrolled ? 'text-white/80' : 'text-white/40'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <a
            href="https://wa.me/5521969630415"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-3 bg-white text-[#1A1A1A] text-[10px] uppercase tracking-[0.3em] font-black rounded-sm transition-all duration-500 hover:bg-[#009BDB] hover:text-white"
          >
            Orçamento
            <div className="w-6 h-[1px] bg-[#1A1A1A] group-hover:bg-white transition-colors duration-500"></div>
          </a>
        </div>

        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          scrolled={scrolled}
        />

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navLinks={navLinks}
          onNavigate={(e, href) => handleAnchorClick(e, href)}
        />
      </nav>
    </div>
  );
};

export default memo(Navbar);
