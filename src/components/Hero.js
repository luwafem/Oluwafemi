import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiDownload, FiChevronDown } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const [text, setText] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Define roles array with useMemo to prevent unnecessary re-renders
  const roles = React.useMemo(() => 
    ['Fullstack Developer','Frontend Developer','Project Manager', 'Technical Lead', 'Digital Strategist', 'CTO'], 
    []
  );

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setText(currentRole.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex >= 0) {
        setText(currentRole.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      } else if (isDeleting && charIndex < 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      } else if (!isDeleting && charIndex > currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible(v => !v);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8">
                <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-black to-black border border-purple/30 mb-6">
                  <span className="text-sm font-mono text-purple">FULLSTACK DEVELOPER & PROJECT MANAGER</span>
                </div>
                
                <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tighter">
                  <span className="block">OLUWAFEMI</span>
                  <span className="text-gradient">AYEDOGBON</span>
                </h1>
                
                <div className="flex items-center text-2xl font-mono mb-8 h-12">
                  <span className="text-white/80">I AM A </span>
                  <span className="text-gradient ml-2 min-w-[300px]">
                    {text}
                    <span className={`inline-block w-[2px] h-8 bg-purple ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
                  </span>
                </div>
              </div>
              
              <p className="text-white/70 text-lg mb-12 max-w-xl leading-relaxed">
                Delivering digital products, MVPs, and technology solutions across 
                fintech, e-commerce, and SaaS environments with 5+ years of leadership experience.
              </p>
              
              {/* Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:oluwafemiemmanuelayedogbon@gmail.com"
                  className="flex items-center gap-3 p-4 rounded-lg glass-card hover:border-purple/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-purple/20">
                    <FiMail className="text-purple" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Email</div>
                    <div className="font-mono text-sm truncate">oluwafemiemmanuelayedogbon@gmail.com</div>
                  </div>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+2347081793436"
                  className="flex items-center gap-3 p-4 rounded-lg glass-card hover:border-purple/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-purple/20">
                    <FiPhone className="text-purple" />
                  </div>
                  <div>
                    <div className="text-sm text-white/60">Phone</div>
                    <div className="font-mono">+234 708 179 3436</div>
                  </div>
                </motion.a>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple to-purple-dark font-medium flex items-center gap-2"
                >
                  <FiMail /> Get In Touch
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://linkedin.com/in/Oluwafem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 rounded-lg border border-white/20 hover:border-purple font-medium flex items-center gap-2"
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
              </div>
            </motion.div>
          </div>
          
          {/* Right Column - Animated Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { label: 'Years Experience', value: '5+', color: 'from-purple to-purple-light' },
              { label: 'Projects Delivered', value: '50+', color: 'from-purple-dark to-purple' },
              { label: 'Teams Led', value: '15+', color: 'from-purple to-purple-dark' },
              { label: 'Client Satisfaction', value: '100%', color: 'from-purple-light to-purple' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="glass-card rounded-xl p-6"
              >
                <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
            
            {/* Code Snippet Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="col-span-2 glass-card rounded-xl p-6 font-mono"
            >
              <div className="text-purple mb-2">// Current Focus</div>
              <div className="text-white/90">
                <span className="text-purple">delivering</span>(
                <span className="text-green-400">'digital-products'</span>,<br />
                <span className="text-purple ml-4">scope=</span>
                <span className="text-yellow-400">'mvp-to-scale'</span>,<br />
                <span className="text-purple ml-4">methodology=</span>
                <span className="text-blue-400">'agile'</span>
                );
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <button
          onClick={() => document.getElementById('profile')?.scrollIntoView({ behavior: 'smooth' })}
          className="p-3 rounded-full border border-white/20 hover:border-purple transition-colors"
        >
          <FiChevronDown className="text-xl" />
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;