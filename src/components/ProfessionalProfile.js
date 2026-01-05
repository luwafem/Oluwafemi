import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiTarget, FiUsers, FiCode, FiGlobe } from 'react-icons/fi';

const ProfessionalProfile = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    {
      icon: FiTarget,
      title: 'End-to-End Delivery',
      description: 'Full project lifecycle from concept to optimization',
      gradient: 'from-purple to-purple-light'
    },
    {
      icon: FiUsers,
      title: 'Cross-Functional Leadership',
      description: 'Leading engineers, designers & operations teams',
      gradient: 'from-purple-dark to-purple'
    },
    {
      icon: FiCode,
      title: 'Technical Foundation',
      description: 'Developer background enables accurate planning',
      gradient: 'from-purple to-purple-dark'
    },
    {
      icon: FiGlobe,
      title: 'Digital Products',
      description: 'Fintech, e-commerce & SaaS solutions',
      gradient: 'from-purple-light to-purple'
    }
  ];

  return (
    <section id="profile" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
            <h2 className="text-4xl font-bold text-center">
              <span className="text-gradient">Professional</span> Profile
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
          </div>
          
          <div className="glass-card rounded-2xl p-8 mb-8">
            <div className="prose prose-invert max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Project Manager with <span className="text-purple font-semibold">5+ years of experience</span> delivering 
                digital products, MVPs, and technology enabled business solutions across 
                <span className="text-purple font-semibold"> fintech, e-commerce, and SaaS environments</span>.
              </p>
              
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="overflow-hidden"
                >
                  <p className="text-lg leading-relaxed mb-6">
                    Proven background as Overall Project Manager and CTO, leading cross-functional teams, 
                    managing scope, timelines, risks, and stakeholders from concept through launch. 
                    Strong technical foundation enables accurate planning, effective communication 
                    with engineering teams, and reduced delivery risk.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Specialized in translating business requirements into actionable technical plans, 
                    optimizing development workflows, and ensuring alignment between business objectives 
                    and technical execution.
                  </p>
                </motion.div>
              )}
            </div>
            
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-6 flex items-center gap-2 text-purple font-medium hover:text-purple-light transition-colors"
            >
              {isExpanded ? (
                <>
                  <FiChevronUp /> Read Less
                </>
              ) : (
                <>
                  <FiChevronDown /> Read More
                </>
              )}
            </button>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl p-6 relative group"
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${item.gradient} flex items-center justify-center mb-4`}>
                      <Icon className="text-white text-xl" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;