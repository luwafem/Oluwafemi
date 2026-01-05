import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiChevronRight, FiChevronDown } from 'react-icons/fi';

const ExperienceTimeline = () => {
  const [expandedItem, setExpandedItem] = useState(0);

  const experiences = [
    {
      role: "Chief Technology Officer & Project Manager",
      company: "Heelheid Business",
      period: "May 2024 -- Present",
      location: "Lagos, NG",
      details: [
        "Held dual responsibility for technical leadership and full project delivery across multiple digital initiatives",
        "Owned end-to-end project lifecycle, including planning, execution, tracking, and post-launch optimisation",
        "Led cross-functional teams of engineers, designers, and operations staff to deliver projects aligned with business goals",
        "Implemented Agile workflows, sprint cycles, and delivery reporting to improve visibility and on-time delivery",
        "Acted as primary liaison between founders, stakeholders, and technical teams"
      ],
      tags: ["Leadership", "Strategy", "Agile", "Technical Direction"]
    },
    {
      role: "Project Manager (Overall Delivery Lead)",
      company: "5101Designs",
      period: "2023 -- 2024",
      location: "Remote",
      details: [
        "Served as overall Project Manager for multiple client and internal projects",
        "Defined project scope, timelines, milestones, and deliverables in collaboration with clients and stakeholders",
        "Coordinated designers, developers, and external partners to ensure timely and high-quality delivery",
        "Managed client communication, approvals, and change requests throughout the project lifecycle"
      ],
      tags: ["Project Management", "Client Relations", "Delivery", "Coordination"]
    },
    {
      role: "Freelance Project Manager & Technical Delivery Lead",
      company: "Self-Employed",
      period: "2024 -- Present",
      location: "Global",
      details: [
        "Delivered MVP and digital product projects for startups and small businesses",
        "Gathered requirements, translated business needs into delivery plans, and managed execution",
        "Coordinated contributors, tracked risks and dependencies, and ensured adherence to agreed timelines",
        "Specialized in rapid prototyping and MVP development"
      ],
      tags: ["Freelance", "MVP Development", "Startups", "Consulting"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
            <h2 className="text-4xl font-bold text-center">
              <span className="text-gradient">Professional</span> Experience
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-gradient-to-b from-purple via-purple/50 to-transparent"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-8 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto' : 'md:pl-12 md:ml-0'}`}
                style={{ marginLeft: index % 2 === 0 ? 'auto' : 0 }}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-[-6px]' : 'md:left-[-6px]'} left-[-6px] md:left-auto w-4 h-4 rounded-full bg-purple border-4 border-black`}></div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                  className={`glass-card rounded-xl p-6 cursor-pointer transition-all duration-300 ${expandedItem === index ? 'border-purple/50 purple-glow' : 'border-white/10'}`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className={index % 2 === 0 ? 'md:text-right' : ''}>
                      <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                      <div className="text-purple font-medium mb-2">{exp.company}</div>
                      
                      <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : ''} flex-wrap gap-3 text-sm text-white/60 mb-4`}>
                        <div className="flex items-center gap-1">
                          <FiCalendar /> {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin /> {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <button className="p-2 rounded-lg hover:bg-white/5">
                      {expandedItem === index ? <FiChevronDown /> : <FiChevronRight />}
                    </button>
                  </div>
                  
                  <AnimatePresence>
                    {expandedItem === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 mb-4">
                          {exp.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-purple mt-2 flex-shrink-0"></div>
                              <span className="text-white/80">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs rounded-full border border-purple/30 text-purple bg-purple/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;