
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


const LazySection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { rootMargin: '200px' }); // Começa a baixar 200px antes de chegar

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="reveal">
      {isVisible ? children : <div className="h-96" />}
    </div>
  );
};

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

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-96 bg-[#262626]"></div>}>
        <LazySection><About /></LazySection>
        <LazySection><Services /></LazySection>
        <LazySection><Portfolio /></LazySection>
        <LazySection><Contact /></LazySection>
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
