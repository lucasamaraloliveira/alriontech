import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Components are lazy loaded to improve initial performance
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));

// Non-critical components and secondary routes are lazy loaded
const Footer = lazy(() => import('./components/Footer'));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const WhatsAppFAB = lazy(() => import('./components/WhatsAppFAB'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./components/TermsOfService'));

// Mantemos lazy apenas o que REALMENTE é outra página
const AllProjects = lazy(() => import('./components/AllProjects'));


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
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          // No unobserve yet to ensure stability during dev/hot-reload
        }
      });
    }, observerOptions);

    const observeNewElements = () => {
      document.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active)').forEach(el => {
        observer.observe(el);
      });
    };

    // MutationObserver to catch elements loaded via Suspense/Lazy
    const mutationObserver = new MutationObserver(observeNewElements);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    observeNewElements();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-96 bg-[#262626]"></div>}>
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
