import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiCode, FiMail } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Header = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'tools', label: 'Tools' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple to-purple-dark flex items-center justify-center">
              <FiCode className="text-white text-xl" />
            </div>
            <div>
              <div className="font-mono text-lg font-bold tracking-tighter">OLUWAFEMI</div>
              <div className="text-xs text-white/60 font-mono">FULLSTACK DEVELOPER & PROJECT MANAGER</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
                className="relative px-1 py-2 text-sm font-mono"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple to-purple-light"
                  />
                )}
              </motion.button>
            ))}
            
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/Oluwafem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-white/20 hover:border-purple transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-white/20"
          >
            {isMenuOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <div className="flex flex-col space-y-2 py-4 border-t border-white/10">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      setIsMenuOpen(false);
                    }}
                    className="py-3 px-4 text-left rounded-lg hover:bg-white/5 transition-colors font-mono"
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="ml-2 text-purple">●</span>
                    )}
                  </button>
                ))}
                <div className="flex space-x-4 pt-4">
                  <a href="mailto:oluwafemiemmanuelayedogbon@gmail.com" className="flex-1 py-2 px-4 rounded-lg border border-white/20 hover:border-purple flex items-center justify-center gap-2">
                    <FiMail /> Email
                  </a>
                  <a href="https://linkedin.com/in/Oluwafem" target="_blank" rel="noopener noreferrer" className="flex-1 py-2 px-4 rounded-lg border border-white/20 hover:border-purple flex items-center justify-center gap-2">
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;