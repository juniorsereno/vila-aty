import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './sections/Hero';
import Comparison from './sections/Comparison';
import Expeditions from './sections/Expeditions';
import ROI from './sections/ROI';
import CRM from './sections/CRM';
import WhyUs from './sections/WhyUs';
import CTA from './sections/CTA';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app-container">
      {/* Fixed Header with Logo */}
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 2rem',
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, rgba(15,34,30,0.9) 0%, rgba(15,34,30,0) 100%)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Vila Aty Logo SVG - White/Gold */}
          <img
            src="https://vilaaty.com.br/wp-content/uploads/2020/06/Page-11.svg"
            alt="Vila Aty Logo"
            style={{
              height: '70px',
              filter: 'brightness(0) invert(1)', // Make white to contrast with dark green
              opacity: 0.9
            }}
          />
        </div>

        <div style={{ opacity: 0.9 }}>
          <img
            src="/vila-aty/Creativa-logo-completa.png"
            alt="Criativa + AI"
            style={{ height: '50px' }} // Adjust height to match Vila Aty logo
          />
        </div>
      </header>

      <Navigation activeId={activeSection} />

      <main>
        <Hero />
        <WhyUs /> {/* Moved Up for storytelling flow */}
        <Comparison />
        <Expeditions />
        <CRM />
        <ROI />
        <CTA />
      </main>

      {/* Global Background Elements (Sophisticated Nature) */}
      <div style={{
        position: 'fixed',
        bottom: '-20%',
        left: '-10%',
        width: '60vw',
        height: '60vw',
        background: 'radial-gradient(circle, rgba(86, 194, 168, 0.08) 0%, rgba(0,0,0,0) 70%)', // Soft Teal
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed',
        top: '-10%',
        right: '-10%',
        width: '50vw',
        height: '50vw',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, rgba(0,0,0,0) 70%)', // Gold
        borderRadius: '50%',
        zIndex: -1,
        pointerEvents: 'none'
      }} />
    </div>
  )
}

export default App
