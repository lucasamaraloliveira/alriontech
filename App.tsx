import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// Crítico: Hero e Navbar permanecem estáticos para LCP instantâneo
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Componentes Pesados abaixo da dobra: Lazy Loading real
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const WhatsAppFAB = lazy(() => import('./components/WhatsAppFAB'));

// Non-critical components and secondary routes are lazy loaded
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

// Mantemos lazy apenas o que REALMENTE é outra página
const AllProjects = lazy(() => import('./components/AllProjects'));
import { SectionSkeleton } from './components/Skeleton';


const LandingPage: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== '/') {
      const sectionId = pathname.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Selecionamos apenas os elementos que realmente precisam de animação
    const elementsToObserve = document.querySelectorAll('.reveal');
    elementsToObserve.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<SectionSkeleton />}>
        <div id="about" className="reveal"><About /></div>
        <div id="services" className="reveal"><Services /></div>
        <div id="portfolio" className="reveal"><Portfolio /></div>
        <div id="contact" className="reveal"><Contact /></div>
        <Footer />
        <ScrollToTop />
        <WhatsAppFAB />
      </Suspense>
    </div>
  );
};



const App: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-[#262626]"></div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/about" element={<LandingPage />} />
          <Route path="/services" element={<LandingPage />} />
          <Route path="/contact" element={<LandingPage />} />
          <Route path="/privacidade" element={<PrivacyPolicy />} />
          <Route path="/termos" element={<TermsOfService />} />
          <Route path="/portfolio" element={<AllProjects />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
