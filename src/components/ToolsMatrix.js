import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiGrid, 
  FiCpu, 
  FiSmartphone, 
  FiDatabase,
  FiCloud,
  FiTool,
  FiLayout,
  FiGlobe,
  FiCode,
  FiPenTool,
  FiMessageSquare,
  FiUsers
} from 'react-icons/fi';
import { 
  DiReact, 
  DiNodejs, 
  DiFirebase, 
  DiJavascript1, 
  DiHtml5, 
  DiCss3,
  DiGit,
  DiPostgresql
} from 'react-icons/di';
import { 
  SiNextdotjs,
  SiJira,
  SiFigma,
  SiTailwindcss,
  SiSolidity,
  SiGithub,
  SiTrello,
  SiNotion,
  SiSlack,
  SiGooglemeet
} from 'react-icons/si';

const ToolsMatrix = () => {
  const [activeTool, setActiveTool] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const toolsByCategory = {
    frontend: {
      name: 'Frontend Development',
      icon: FiLayout,
      color: 'from-purple to-purple-light',
      tools: [
        { name: 'React.js', icon: DiReact, description: 'Component-based UI library' },
        { name: 'Next.js', icon: SiNextdotjs, description: 'Full-stack React framework' },
        { name: 'JavaScript', icon: DiJavascript1, description: 'Programming language' },
        { name: 'HTML5', icon: DiHtml5, description: 'Markup language' },
        { name: 'CSS3', icon: DiCss3, description: 'Styling language' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, description: 'Utility-first CSS framework' },
      ]
    },
    mobile: {
      name: 'Mobile Development',
      icon: FiSmartphone,
      color: 'from-purple-light to-purple',
      tools: [
        { name: 'React Native', icon: DiReact, description: 'Cross-platform mobile framework' },
      ]
    },
    blockchain: {
      name: 'Blockchain',
      icon: FiCpu,
      color: 'from-purple to-purple-dark',
      tools: [
        { name: 'Solidity', icon: SiSolidity, description: 'Smart contract language' },
      ]
    },
    backend: {
      name: 'Backend & Databases',
      icon: FiDatabase,
      color: 'from-purple-dark to-purple',
      tools: [
        { name: 'Node.js', icon: DiNodejs, description: 'JavaScript runtime' },
        { name: 'Firebase', icon: DiFirebase, description: 'Backend-as-a-Service' },
        { name: 'PostgreSQL', icon: DiPostgresql, description: 'Relational database' },
      ]
    },
    tools: {
      name: 'Development Tools',
      icon: FiTool,
      color: 'from-purple to-purple-light',
      tools: [
        { name: 'Git', icon: DiGit, description: 'Version control' },
        { name: 'GitHub', icon: SiGithub, description: 'Code collaboration' },
      ]
    },
    project: {
      name: 'Project Management',
      icon: FiUsers,
      color: 'from-purple-light to-purple-dark',
      tools: [
        { name: 'Jira', icon: SiJira, description: 'Agile project tracking' },
        { name: 'Trello', icon: SiTrello, description: 'Task management' },
        { name: 'Notion', icon: SiNotion, description: 'Documentation & planning' },
      ]
    },
    design: {
      name: 'Design Tools',
      icon: FiPenTool,
      color: 'from-purple-dark to-purple',
      tools: [
        { name: 'Figma', icon: SiFigma, description: 'UI/UX design' },
      ]
    },
    communication: {
      name: 'Communication',
      icon: FiMessageSquare,
      color: 'from-purple to-purple-light',
      tools: [
        { name: 'Slack', icon: SiSlack, description: 'Team communication' },
        { name: 'Google Meet', icon: SiGooglemeet, description: 'Video conferencing' },
      ]
    }
  };

  // Flatten all tools for the main matrix view
  const allTools = Object.values(toolsByCategory).flatMap(category => 
    category.tools.map(tool => ({
      ...tool,
      category: category.name,
      categoryColor: category.color,
      categoryIcon: category.icon
    }))
  );

  const getToolExperience = (toolName) => {
    const experience = {
      'React.js': '5+ years',
      'React Native': '3+ years',
      'Next.js': '2+ years',
      'JavaScript': '5+ years',
      'HTML5': '5+ years',
      'CSS3': '5+ years',
      'Tailwind CSS': '3+ years',
      'Solidity': '1+ year',
      'Node.js': '3+ years',
      'Firebase': '3+ years',
      'PostgreSQL': '2+ years',
      'Git': '5+ years',
      'GitHub': '5+ years',
      'Figma': '3+ years',
    };
    return experience[toolName] || 'Regular use';
  };

  return (
    <section id="tools" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
            <h2 className="text-4xl font-bold text-center">
              <span className="text-gradient">Technology</span> Stack
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
          </div>

          {/* Categories Bar */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex space-x-4 min-w-max">
              {Object.entries(toolsByCategory).map(([key, category]) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={key}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onMouseEnter={() => setHoveredCategory(key)}
                    onMouseLeave={() => setHoveredCategory(null)}
                    onClick={() => setActiveTool(key === activeTool ? null : key)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-3 whitespace-nowrap ${
                      activeTool === key
                        ? `bg-gradient-to-r ${category.color} border-transparent`
                        : 'border-white/20 hover:border-purple/50'
                    }`}
                  >
                    <Icon className="text-lg" />
                    <span className="font-medium">{category.name}</span>
                    <span className="text-xs opacity-75">({category.tools.length})</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Main Tools Matrix - Grid Layout */}
          <div className="relative">
            {/* Hexagon Grid Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="h-full w-full" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.2) 0%, transparent 55%),
                                radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.2) 0%, transparent 55%)`
              }}></div>
            </div>

            {/* Tools Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 relative z-10">
              {allTools.map((tool, index) => {
                const ToolIcon = tool.icon;
                const CategoryIcon = tool.categoryIcon;
                const isActiveCategory = !activeTool || 
                  (activeTool && tool.category === toolsByCategory[activeTool]?.name);
                const isHoveredCategory = hoveredCategory && 
                  tool.category === toolsByCategory[hoveredCategory]?.name;

                if (activeTool && !isActiveCategory) return null;

                return (
                  <motion.div
                    key={`${tool.name}-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: isHoveredCategory ? 5 : 0
                    }}
                    className="relative group"
                  >
                    <button
                      onClick={() => setActiveTool(prev => prev === tool.name ? null : tool.name)}
                      onMouseEnter={() => setHoveredCategory(
                        Object.keys(toolsByCategory).find(key => 
                          toolsByCategory[key].name === tool.category
                        )
                      )}
                      onMouseLeave={() => setHoveredCategory(null)}
                      className={`w-full h-full aspect-square rounded-2xl flex flex-col items-center justify-center p-4 transition-all duration-300 relative overflow-hidden ${
                        activeTool === tool.name
                          ? 'bg-gradient-to-br from-purple/20 to-purple-dark/20 border-2 border-purple shadow-lg'
                          : 'glass-card hover:bg-white/10'
                      }`}
                    >
                      {/* Background glow on hover */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${tool.categoryColor} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                      
                      {/* Tool Icon */}
                      <div className={`p-4 rounded-xl mb-3 transition-all duration-300 ${
                        activeTool === tool.name 
                          ? 'bg-gradient-to-br from-purple to-purple-dark' 
                          : 'bg-white/10 group-hover:bg-white/20'
                      }`}>
                        <ToolIcon className={`text-2xl ${
                          activeTool === tool.name ? 'text-white' : 'text-purple'
                        }`} />
                      </div>
                      
                      {/* Tool Name */}
                      <div className="text-center">
                        <div className="font-semibold text-sm mb-1">{tool.name}</div>
                        <div className="text-xs text-white/50">{getToolExperience(tool.name)}</div>
                      </div>
                      
                      {/* Category Indicator */}
                      <div className="absolute top-2 right-2">
                        <CategoryIcon className="text-xs text-white/30" />
                      </div>
                    </button>

                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                      <div className="bg-gray-900 border border-white/10 rounded-lg px-3 py-2 whitespace-nowrap shadow-xl">
                        <div className="text-sm font-medium">{tool.name}</div>
                        <div className="text-xs text-white/60">{tool.description}</div>
                      </div>
                      <div className="w-2 h-2 bg-gray-900 border-r border-b border-white/10 transform rotate-45 absolute -bottom-1 left-1/2 -translate-x-1/2"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-12 glass-card rounded-xl p-6 max-w-3xl mx-auto">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple to-purple-light"></div>
                  <span className="text-white/60 text-sm">Frontend Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-light to-purple"></div>
                  <span className="text-white/60 text-sm">Mobile Development</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple to-purple-dark"></div>
                  <span className="text-white/60 text-sm">Blockchain</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-dark to-purple"></div>
                  <span className="text-white/60 text-sm">Backend & Databases</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-3 gap-6"
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                  <FiGrid className="text-purple text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">8</div>
                  <div className="text-white/60">Categories</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                  <FiCode className="text-purple text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">19</div>
                  <div className="text-white/60">Primary Tools</div>
                </div>
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                  <FiGlobe className="text-purple text-xl" />
                </div>
                <div>
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-white/60">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Active Tool Details Modal */}
          <AnimatePresence>
            {activeTool && typeof activeTool === 'string' && toolsByCategory[activeTool] && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                onClick={() => setActiveTool(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-gradient-to-br from-gray-900 to-black rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-white/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className={`h-32 bg-gradient-to-r ${toolsByCategory[activeTool].color} relative`}>
                    <button
                      onClick={() => setActiveTool(null)}
                      className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/80"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                        {React.createElement(toolsByCategory[activeTool].icon, { className: "text-purple text-xl" })}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{toolsByCategory[activeTool].name}</h3>
                        <p className="text-white/60">{toolsByCategory[activeTool].tools.length} tools</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {toolsByCategory[activeTool].tools.map((tool, index) => {
                        const ToolIcon = tool.icon;
                        return (
                          <div key={index} className="glass-card rounded-xl p-4">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-white/10">
                                <ToolIcon className="text-purple" />
                              </div>
                              <div>
                                <div className="font-semibold">{tool.name}</div>
                                <div className="text-sm text-white/60">{tool.description}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ToolsMatrix;