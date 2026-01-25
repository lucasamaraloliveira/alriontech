
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import HamburgerButton from './HamburgerButton';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close menu on scroll
  useEffect(() => {
    const handleScrollClose = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('scroll', handleScrollClose, { passive: true });
    }

    return () => {
      window.removeEventListener('scroll', handleScrollClose);
    };
  }, [isOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
  const secondaryColor = scrolled ? '#85DEF2' : 'rgba(255,255,255,0.9)';

  return (
    <div className="fixed top-0 left-0 w-full z-[10000] flex justify-center p-4 sm:p-6 pointer-events-none text-left">
      <nav
        ref={navRef}
        className={`relative pointer-events-auto transition-[width,background-color,border-radius,border-color,backdrop-filter] duration-500 ease-in-out px-5 sm:px-8 md:px-10 py-3 flex items-center justify-between gap-4 md:gap-10 shadow-2xl ${scrolled
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
              className={`text-[10px] uppercase tracking-[0.2em] font-black transition-all duration-500 hover:text-[#85DEF2] ${scrolled ? 'text-white/95' : 'text-white'
                }`}
              style={{ color: scrolled ? undefined : 'white' }}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5521969630415"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="px-6 py-2.5 bg-[#009BDB] text-white hover:bg-[#85DEF2] hover:text-[#262626] transition-all duration-500 text-[9px] uppercase tracking-widest font-black rounded-lg shadow-lg shadow-[#009BDB]/20"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Tablet & Mobile Menu Button */}
        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          scrolled={scrolled}
        />

        <MobileMenu
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navLinks={navLinks}
          onNavigate={handleNavClick}
        />
      </nav>
    </div>
  );
};

export default Navbar;
