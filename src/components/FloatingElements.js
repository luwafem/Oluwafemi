import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    // Position these strategically (not random)
    { id: 0, x: 10, y: 20, size: 60, delay: 0 },
    { id: 1, x: 85, y: 40, size: 40, delay: 1 },
    { id: 2, x: 20, y: 70, size: 50, delay: 2 },
    { id: 3, x: 70, y: 80, size: 30, delay: 3 },
    { id: 4, x: 50, y: 30, size: 45, delay: 1.5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft purple glow in corners */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-purple-400/10 rounded-full blur-3xl"></div>

      {/* Bright floating orbs */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute rounded-full"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(168, 85, 247, 0.7) 50%, transparent 80%)',
            filter: 'blur(2px)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4 + (el.id * 0.5),
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;