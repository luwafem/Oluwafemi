import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import ProfessionalProfile from './components/ProfessionalProfile';
import ExperienceTimeline from './components/ExperienceTimeline';
import InteractiveSkills from './components/InteractiveSkills';
import ProjectsShowcase from './components/ProjectsShowcase';
import ToolsMatrix from './components/ToolsMatrix';
import ContactSection from './components/ContactSection';
import FloatingElements from './components/FloatingElements';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      const sections = ['hero', 'profile', 'experience', 'skills', 'projects', 'tools', 'contact'];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-black min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 dot-grid opacity-30"></div>
      <div 
        className="fixed inset-0 transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(139, 92, 246, 0.1), transparent 50%)`
        }}
      />
      
      <FloatingElements />
      
      <div className="relative z-10">
        <Header activeSection={activeSection} />
        <main>
          <Hero />
          <ProfessionalProfile />
          <ExperienceTimeline />
          <InteractiveSkills />
          <ProjectsShowcase />
          <ToolsMatrix />
          <ContactSection />
        </main>
      </div>
      
      {/* Progress Indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-4">
          {['hero', 'profile', 'experience', 'skills', 'projects', 'tools', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
              className="relative group"
            >
              <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section ? 'bg-purple w-3 h-3 purple-glow' : 'bg-white/30'
              }`} />
              <span className="absolute right-8 top-1/2 transform -translate-y-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 px-2 py-1 rounded whitespace-nowrap">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;