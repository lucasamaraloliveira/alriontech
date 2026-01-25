
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
      const isScrolled = window.scrollY > 20;
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
    <div className="fixed top-0 left-0 w-full z-[10000] flex justify-center p-3 sm:p-4 pointer-events-none">
      <nav
        ref={navRef}
        className={`relative pointer-events-auto transition-all duration-300 ease-out px-6 sm:px-8 py-2.5 flex items-center justify-between shadow-2xl transform-gpu will-change-transform ${scrolled
          ? 'w-full md:w-[90%] lg:w-[75%] max-w-5xl bg-[#262626]/80 backdrop-blur-xl rounded-lg border border-white/10'
          : 'w-full max-w-7xl bg-[#262626]/40 backdrop-blur-md md:bg-transparent md:backdrop-blur-none rounded-lg border border-white/5 md:border-transparent shadow-none'
          }`}
      >
        <div
          className="cursor-pointer transition-transform duration-300 hover:scale-105 transform-gpu"
          onClick={(e) => handleAnchorClick(e as any, '#home')}
        >
          <Logo
            className="h-10 sm:h-12"
            colorPrimary={scrolled ? '#009BDB' : '#FFFFFF'}
            colorSecondary={scrolled ? '#85DEF2' : 'rgba(255,255,255,0.9)'}
          />
        </div>

        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleAnchorClick(e, link.href)}
              className="text-[10px] uppercase tracking-[0.2em] font-black text-white transition-colors duration-300 hover:text-[#85DEF2]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5521969630415"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-[#009BDB] text-white hover:bg-[#85DEF2] hover:text-[#262626] transition-all duration-300 text-[9px] uppercase tracking-widest font-black rounded-lg shadow-lg shadow-[#009BDB]/20 transform-gpu hover:-translate-y-0.5"
          >
            Solicitar Orçamento
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
