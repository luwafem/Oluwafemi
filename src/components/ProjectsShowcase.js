import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const ProjectsShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "AMICA",
      subtitle: "Smart Client & Deal Flow Management Platform",
      role: "Project Manager / Delivery Lead",
      description: "A comprehensive platform for managing client relationships and deal flow processes with AI-powered insights and automation features.",
      technologies: ["React.js", "Node.js", "PostgreSQL", "Firebase", "AWS", "Docker"],
      features: [
        "Real-time deal tracking and analytics",
        "AI-powered client matching",
        "Automated workflow management",
        "Secure document handling",
        "Team collaboration tools"
      ],
      status: "Live",
      color: "from-purple to-indigo-600"
    },
    {
      title: "Fesco Loan Platform",
      subtitle: "Fintech Loan Processing & Payments",
      role: "Project Manager & Technical Lead",
      description: "Digital lending platform for processing loan applications, managing payments, and handling credit scoring with automated decision-making.",
      technologies: ["React Native", "Node.js", "MongoDB", "Payment APIs", "Redis", "Kubernetes"],
      features: [
        "Automated loan application processing",
        "Real-time credit scoring",
        "Secure payment gateway integration",
        "Mobile-first design",
        "Compliance and reporting"
      ],
      status: "Live",
      color: "from-purple-dark to-purple"
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
            <h2 className="text-4xl font-bold text-center">
              <span className="text-gradient">Key</span> Projects
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
          </div>

          {/* Project Cards */}
          <div className="relative h-[500px] mb-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: index === currentIndex ? 1 : 0.5,
                  scale: index === currentIndex ? 1 : 0.9,
                  x: (index - currentIndex) * 40,
                  zIndex: index === currentIndex ? 10 : 1,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 glass-card rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className={`h-32 bg-gradient-to-r ${project.color}`} />
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/60">{project.subtitle}</p>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs border border-green-500/30 text-green-400">
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full text-sm bg-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 rounded-full text-sm bg-white/5">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                  
                  <button className="text-purple flex items-center gap-2 hover:text-purple-light">
                    View Details <FiExternalLink />
                  </button>
                </div>
              </motion.div>
            ))}

            {/* Navigation Controls */}
            <div className="absolute top-1/2 left-4 right-4 transform -translate-y-1/2 flex justify-between z-20">
              <button
                onClick={prevProject}
                className="p-3 rounded-full bg-black/50 border border-white/20 hover:border-purple"
              >
                <FiChevronLeft className="text-xl" />
              </button>
              <button
                onClick={nextProject}
                className="p-3 rounded-full bg-black/50 border border-white/20 hover:border-purple"
              >
                <FiChevronRight className="text-xl" />
              </button>
            </div>
          </div>

          {/* Project Indicators */}
          <div className="flex justify-center gap-2 mb-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-purple w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-r ${selectedProject.color} relative`}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80"
                >
                  <FiX className="text-xl" />
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedProject.title}</h3>
                    <p className="text-xl text-white/60 mb-2">{selectedProject.subtitle}</p>
                    <div className="px-4 py-2 rounded-full bg-purple/20 inline-block">
                      <span className="text-purple font-medium">{selectedProject.role}</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 mt-4 lg:mt-0">
                    <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple to-purple-dark flex items-center gap-2">
                      <FiExternalLink /> Live Demo
                    </button>
                    <button className="px-6 py-3 rounded-lg border border-white/20 hover:border-purple flex items-center gap-2">
                      <FiGithub /> Case Study
                    </button>
                  </div>
                </div>
                
                <p className="text-lg text-white/80 mb-8 leading-relaxed">
                  {selectedProject.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-purple mt-2"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold mb-4">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsShowcase;