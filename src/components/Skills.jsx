import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Wrench, 
  Code2, 
  FileCode, 
  Terminal, 
  Atom, 
  Layout, 
  Palette, 
  Layers, 
  Smartphone, 
  Globe, 
  Network, 
  GitPullRequest, 
  GitBranch, 
  Bug, 
  Database, 
  Sparkles, 
  Search, 
  Cpu, 
  Zap, 
  Target, 
  Smile 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2,
  FileCode,
  Terminal,
  Atom,
  Layout,
  Palette,
  Layers,
  Smartphone,
  Globe,
  Network,
  GitPullRequest,
  GitBranch,
  Bug,
  Database,
  Sparkles,
  Search,
  Cpu,
  Zap,
  Target,
  Smile,
};

export default function Skills({ theme = 'light' }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const isLight = theme === 'light';

  const filterTabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'web-dev', label: 'Web & APIs' },
    { id: 'tools', label: 'CI/CD & Tools' },
    { id: 'engineering', label: 'Data & Core' },
    { id: 'soft-skills', label: 'Soft Skills' },
  ];

  const filteredCategories = selectedFilter === 'all'
    ? portfolioData.skills.categories
    : portfolioData.skills.categories.filter((c) => c.id === selectedFilter);

  return (
    <section 
      id="skills" 
      className="relative py-24 sm:py-32 bg-white dark:bg-[#212126] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#323337] border border-slate-200 dark:border-[#383940] text-slate-800 dark:text-[#6dcff6] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <Wrench className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display">
            Skills & <span className={isLight ? 'text-slate-900 underline decoration-slate-400 underline-offset-8' : 'text-gradient-cyan'}>Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Validated technical proficiencies extracted directly from active projects, academic coursework, and certifications.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {filterTabs.map((tab) => {
              const isSelected = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wider rounded-xl transition-all duration-200 ${
                    isSelected
                      ? isLight
                        ? 'bg-slate-900 text-white shadow-sm scale-105'
                        : 'bg-[#6dcff6] text-[#212126] font-bold shadow-[0_0_15px_rgba(109,207,246,0.35)] scale-105'
                      : isLight
                        ? 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
                        : 'bg-[#2a2b30] text-slate-300 hover:text-white hover:bg-[#323337] border border-[#383940]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Categories Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredCategories.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="corporate-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-slate-950 dark:text-white font-display">
                      {category.name}
                    </h3>
                    <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded-full ${
                      isLight
                        ? 'bg-slate-100 text-slate-700 border border-slate-200'
                        : 'bg-[#323337] text-[#6dcff6] border border-[#383940]'
                    }`}>
                      {category.items.length} Skills
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills item list inside card */}
                  <div className="space-y-2.5">
                    {category.items.map((skill, sIdx) => {
                      const IconComponent = iconMap[skill.icon] || Code2;
                      return (
                        <div
                          key={sIdx}
                          className={`flex items-center justify-between p-3 rounded-xl transition-all duration-200 ${
                            isLight
                              ? 'bg-slate-50 hover:bg-slate-100 border border-slate-200/80'
                              : 'bg-[#212126] hover:bg-[#323337] border border-[#383940] hover:border-[#6dcff6]/40'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-lg ${
                              isLight ? 'bg-white text-slate-800 border border-slate-200' : 'bg-[#323337] text-[#6dcff6]'
                            }`}>
                              <IconComponent className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-xs font-bold text-slate-900 dark:text-slate-100">
                                {skill.name}
                              </p>
                              <p className="text-[10px] text-slate-500 dark:text-slate-400 line-clamp-1">
                                {skill.highlight}
                              </p>
                            </div>
                          </div>

                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md shrink-0 ${
                            isLight ? 'bg-white text-slate-600 border border-slate-200' : 'text-slate-300 bg-[#323337] border border-[#383940]'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
