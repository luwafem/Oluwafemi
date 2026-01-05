import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiTarget, 
  FiUsers, 
  FiTrendingUp, 
  FiZap,
  FiChevronRight,
  FiStar
} from 'react-icons/fi';

const InteractiveSkills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('all');

  const skillSets = {
    management: {
      title: 'Project Management',
      icon: FiTarget,
      color: 'from-purple to-purple-light',
      skills: [
        {
          name: 'End-to-End Delivery',
          level: 95,
          description: 'Managing complete project lifecycle from inception to deployment',
          examples: ['MVP Development', 'Product Scaling', 'Launch Coordination'],
          impact: 'Delivered 50+ projects on time and within budget'
        },
        {
          name: 'Agile Methodologies',
          level: 92,
          description: 'Implementing Scrum, Kanban, and hybrid agile frameworks',
          examples: ['Sprint Planning', 'Retrospectives', 'Backlog Grooming'],
          impact: 'Increased team velocity by 40% through process optimization'
        },
        {
          name: 'Risk Management',
          level: 88,
          description: 'Proactive identification and mitigation of project risks',
          examples: ['Risk Registers', 'Mitigation Strategies', 'Contingency Planning'],
          impact: 'Reduced project delays by 60% through early risk intervention'
        },
        {
          name: 'Scope & Budget Control',
          level: 90,
          description: 'Managing project scope creep and financial constraints',
          examples: ['Change Control', 'Budget Tracking', 'Resource Allocation'],
          impact: 'Maintained 95% of projects within original budget'
        }
      ]
    },
    leadership: {
      title: 'Leadership & Strategy',
      icon: FiUsers,
      color: 'from-purple-light to-purple',
      skills: [
        {
          name: 'Cross-Functional Leadership',
          level: 92,
          description: 'Leading diverse teams of engineers, designers, and stakeholders',
          examples: ['Team Building', 'Conflict Resolution', 'Mentorship'],
          impact: 'Built and led 15+ high-performing cross-functional teams'
        },
        {
          name: 'Stakeholder Management',
          level: 94,
          description: 'Aligning technical delivery with business objectives',
          examples: ['Executive Reporting', 'Client Communication', 'Expectation Setting'],
          impact: 'Maintained 100% client satisfaction rate across all projects'
        },
        {
          name: 'Strategic Planning',
          level: 89,
          description: 'Translating business goals into technical roadmaps',
          examples: ['Roadmapping', 'Milestone Planning', 'Success Metrics'],
          impact: 'Increased product adoption by 200% through strategic planning'
        },
        {
          name: 'Decision Making',
          level: 91,
          description: 'Data-driven decision making under uncertainty',
          examples: ['Cost-Benefit Analysis', 'Trade-off Evaluation', 'Risk Assessment'],
          impact: 'Made critical decisions saving 30% project costs'
        }
      ]
    },
    technical: {
      title: 'Technical Expertise',
      icon: FiZap,
      color: 'from-purple to-purple-dark',
      skills: [
        {
          name: 'Technical Architecture',
          level: 90,
          description: 'Designing scalable and maintainable technical solutions',
          examples: ['System Design', 'Tech Stack Selection', 'Architecture Patterns'],
          impact: 'Designed architectures supporting 1M+ users'
        },
        {
          name: 'Development Coordination',
          level: 93,
          description: 'Bridging gap between business requirements and technical implementation',
          examples: ['Technical Specifications', 'Code Reviews', 'Quality Assurance'],
          impact: 'Reduced production bugs by 70% through effective coordination'
        },
        {
          name: 'Quality Assurance',
          level: 87,
          description: 'Ensuring product quality through rigorous testing processes',
          examples: ['Test Planning', 'Automation Strategies', 'Performance Testing'],
          impact: 'Achieved 99.9% uptime for critical applications'
        },
        {
          name: 'Technical Documentation',
          level: 85,
          description: 'Creating comprehensive technical documentation',
          examples: ['API Documentation', 'System Manuals', 'Process Guides'],
          impact: 'Reduced onboarding time for new developers by 50%'
        }
      ]
    }
  };

  const tabs = [
    { id: 'all', label: 'All Skills', count: 12, icon: FiStar },
    { id: 'management', label: 'Project Management', count: 4, icon: FiTarget },
    { id: 'leadership', label: 'Leadership', count: 4, icon: FiUsers },
    { id: 'technical', label: 'Technical', count: 4, icon: FiZap }
  ];

  const getLevelColor = (level) => {
    if (level >= 90) return 'text-green-400';
    if (level >= 80) return 'text-purple';
    return 'text-blue-400';
  };

  const getLevelDescription = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 85) return 'Advanced';
    if (level >= 80) return 'Proficient';
    return 'Competent';
  };

  const getLevelIcon = (level) => {
    if (level >= 90) return <FiStar className="text-yellow-400" />;
    if (level >= 85) return <FiTrendingUp className="text-green-400" />;
    if (level >= 80) return <FiChevronRight className="text-purple" />;
    return <FiChevronRight className="text-blue-400" />;
  };

  // Get skills based on active tab
  const getSkills = () => {
    if (activeTab === 'all') {
      return Object.values(skillSets).flatMap(set => set.skills);
    }
    return skillSets[activeTab]?.skills || [];
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
            <h2 className="text-4xl font-bold text-center">
              <span className="text-gradient">Professional</span> Skills
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg border transition-all duration-300 font-medium flex items-center gap-3 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${skillSets[tab.id]?.color || 'from-purple to-purple-light'} border-transparent`
                      : 'border-white/20 hover:border-purple/50 glass-card'
                  }`}
                >
                  <Icon className="text-lg" />
                  {tab.label}
                  <span className="text-sm opacity-75">({tab.count})</span>
                </motion.button>
              );
            })}
          </div>

          {/* Skills Showcase */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skillSets).map(([key, skillSet]) => {
              const Icon = skillSet.icon;
              const isActive = activeTab === 'all' || activeTab === key;
              
              if (!isActive) return null;

              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skillSet.color} opacity-10`}></div>
                  <div className="glass-card rounded-2xl p-6 relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${skillSet.color}`}>
                        <Icon className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{skillSet.title}</h3>
                        <div className="text-sm text-white/60">{skillSet.skills.length} key skills</div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {skillSet.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          whileHover={{ x: 5 }}
                          className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                          onClick={() => setExpandedSkill(expandedSkill === skill.name ? null : skill.name)}
                        >
                          <div className="flex items-center gap-3">
                            {getLevelIcon(skill.level)}
                            <div>
                              <div className="font-medium">{skill.name}</div>
                              <div className="text-xs text-white/60">{getLevelDescription(skill.level)}</div>
                            </div>
                          </div>
                          <div className={`font-bold ${getLevelColor(skill.level)}`}>{skill.level}%</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Expanded Skill Details */}
          {expandedSkill && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-16"
            >
              <div className="glass-card rounded-2xl p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{expandedSkill}</h3>
                    <p className="text-white/70">
                      {getSkills().find(s => s.name === expandedSkill)?.description}
                    </p>
                  </div>
                  <button
                    onClick={() => setExpandedSkill(null)}
                    className="p-2 rounded-lg hover:bg-white/5"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <FiTarget /> Key Applications
                    </h4>
                    <ul className="space-y-2">
                      {getSkills().find(s => s.name === expandedSkill)?.examples.map((example, index) => (
                        <li key={index} className="flex items-center gap-2 text-white/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple"></div>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-3 flex items-center gap-2">
                      <FiTrendingUp /> Impact & Results
                    </h4>
                    <p className="text-white/70">
                      {getSkills().find(s => s.name === expandedSkill)?.impact}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Skill Radar Chart Visualization */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="text-gradient">Skill</span> Proficiency Radar
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative">
                {/* Radar Chart Visualization */}
                <div className="relative w-64 h-64 mx-auto">
                  {/* Radar Grid */}
                  <div className="absolute inset-0 border border-white/10 rounded-full"></div>
                  <div className="absolute inset-8 border border-white/10 rounded-full"></div>
                  <div className="absolute inset-16 border border-white/10 rounded-full"></div>
                  <div className="absolute inset-24 border border-white/10 rounded-full"></div>
                  
                  {/* Radar Lines */}
                  {[0, 60, 120, 180, 240, 300].map((angle) => (
                    <div
                      key={angle}
                      className="absolute top-1/2 left-1/2 w-px h-32 bg-white/10 origin-top"
                      style={{ transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
                    ></div>
                  ))}
                  
                  {/* Skill Points */}
                  {getSkills().slice(0, 6).map((skill, index) => {
                    const angle = (index * 60) * (Math.PI / 180);
                    const radius = (skill.level / 100) * 100;
                    const x = 50 + Math.cos(angle) * radius;
                    const y = 50 + Math.sin(angle) * radius;
                    
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-purple to-purple-light transform -translate-x-1/2 -translate-y-1/2"
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-xs font-medium">
                          {skill.name}
                        </div>
                      </motion.div>
                    );
                  })}
                  
                  {/* Skill Area */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <polygon
                      points={getSkills().slice(0, 6).map((skill, index) => {
                        const angle = (index * 60) * (Math.PI / 180);
                        const radius = (skill.level / 100) * 50;
                        const x = 50 + Math.cos(angle) * radius;
                        const y = 50 + Math.sin(angle) * radius;
                        return `${x},${y}`;
                      }).join(' ')}
                      className="fill-purple/20 stroke-purple"
                      strokeWidth="0.5"
                    />
                  </svg>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Project Delivery</span>
                      <span className="text-purple font-bold">95%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple to-purple-light rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Team Leadership</span>
                      <span className="text-purple font-bold">92%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple to-purple-light rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Stakeholder Management</span>
                      <span className="text-purple font-bold">94%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple to-purple-light rounded-full" style={{ width: '94%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Technical Architecture</span>
                      <span className="text-purple font-bold">90%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple to-purple-light rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Competencies Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-6"
          >
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">95%</div>
              <div className="text-white/60">Project Success Rate</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">40%</div>
              <div className="text-white/60">Process Efficiency Gain</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">70%</div>
              <div className="text-white/60">Bug Reduction</div>
            </div>
            
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-white/60">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkills;