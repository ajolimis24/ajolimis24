import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ theme = 'light' }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const isLight = theme === 'light';

  return (
    <section 
      id="projects" 
      className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-[#060810] border-y border-slate-200/80 dark:border-white/5 text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-cyan-500/10 border border-slate-200 dark:border-cyan-500/20 text-slate-800 dark:text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display">
            Selected <span className={isLight ? 'text-slate-900 underline decoration-slate-400 underline-offset-8' : 'text-gradient-cyan'}>Projects</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Real academic and engineering projects developed with full-stack web technologies and intelligent system concepts.
          </p>
        </motion.div>

        {/* Simple & Elegant Corporate-Ready Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {portfolioData.projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.4, delay: index * 0.15, ease: 'easeOut' }}
              className={`rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 ${
                isLight
                  ? 'bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-slate-300'
                  : 'glass-card border border-white/10 hover:border-cyan-500/40 shadow-xl hover:shadow-[0_20px_45px_rgba(14,165,233,0.2)]'
              }`}
            >
              {/* Image Preview Container */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-slate-200/80 dark:border-white/10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 ease-out hover:scale-103"
                />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-bold shadow-xs ${
                    isLight 
                      ? 'bg-white text-slate-900 border border-slate-200' 
                      : 'bg-[#070b14]/80 backdrop-blur-md text-cyan-300 border border-cyan-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-[11px] font-medium tracking-wider shadow-xs ${
                    isLight
                      ? 'bg-slate-900 text-white'
                      : 'bg-black/60 backdrop-blur-md text-slate-300 border border-white/10'
                  }`}>
                    {project.role}
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-cyan-400 block mb-1">
                    {project.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-3 font-display">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-5">
                    {project.shortDescription}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2 mb-6">
                    {project.keyFeatures.slice(0, 3).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isLight ? 'text-slate-900' : 'text-cyan-400'
                        }`} />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Impact banner */}
                  <div className={`p-3.5 rounded-xl mb-6 ${
                    isLight
                      ? 'bg-slate-50 border border-slate-200/80 text-slate-800'
                      : 'bg-white/[0.03] border border-white/5 text-slate-300'
                  }`}>
                    <p className="text-[10px] font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-cyan-400 mb-0.5">
                      Demonstrated Impact
                    </p>
                    <p className="text-xs leading-relaxed">{project.impact}</p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-md ${
                          isLight
                            ? 'bg-slate-100 text-slate-800 border border-slate-200'
                            : 'bg-white/5 text-slate-300 border border-white/5'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-5 border-t border-slate-200 dark:border-white/10 flex items-center justify-between gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04, x: 2 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSelectedProject(project)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors duration-200 group/btn shadow-xs ${
                      isLight
                        ? 'bg-slate-900 hover:bg-slate-800 text-white'
                        : 'text-cyan-400 hover:text-cyan-300'
                    }`}
                  >
                    <span>View Architecture & Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2.5 rounded-xl transition-colors ${
                      isLight
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10'
                    }`}
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for full details */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          theme={theme}
        />

      </div>
    </section>
  );
}
