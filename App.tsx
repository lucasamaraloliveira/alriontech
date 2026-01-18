
import React, { useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFAB from './components/WhatsAppFAB';

import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

// Lazy loading components for performance
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const Portfolio = lazy(() => import('./components/Portfolio'));
const Contact = lazy(() => import('./components/Contact'));
const AllProjects = lazy(() => import('./components/AllProjects'));


const LandingPage: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to section if path is not root
    if (pathname !== '/') {
      const sectionId = pathname.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        // Delay scroll slightly to ensure content is rendered
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
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal, .reveal-left');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-96 bg-[#262626]"></div>}>
        <div className="reveal"><About /></div>
        <div className="reveal"><Services /></div>
        <div className="reveal"><Portfolio /></div>
        <div className="reveal"><Contact /></div>
      </Suspense>
      <Footer />
      <ScrollToTop />
      <WhatsAppFAB />
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
