import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Tag, Layers, Lightbulb, Compass } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose, theme = 'light' }) {
  const isLight = theme === 'light';

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 z-10 shadow-2xl ${
            isLight
              ? 'bg-white text-slate-900 border border-slate-200'
              : 'bg-[#212126] text-white border border-[#383940]'
          }`}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-950'
                : 'bg-[#323337] hover:bg-[#3a3b42] text-slate-300 hover:text-white border border-[#383940]'
            }`}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="mb-6 pr-8">
            <span className={`inline-block px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider font-semibold mb-2 ${
              isLight
                ? 'bg-slate-100 text-slate-800 border border-slate-200'
                : 'bg-[#323337] text-[#6dcff6] border border-[#383940]'
            }`}>
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display">
              {project.title}
            </h3>
            <p className={`text-xs sm:text-sm mt-1 ${isLight ? 'text-slate-600' : 'text-slate-400'}`}>
              Role: <strong className={isLight ? 'text-slate-900' : 'text-[#6dcff6]'}>{project.role}</strong> • {project.status}
            </p>
          </div>

          {/* Project Showcase Image */}
          <div className={`relative w-full rounded-2xl overflow-hidden border mb-6 ${
            isLight ? 'border-slate-200' : 'border-[#383940]'
          }`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[340px] object-cover object-center"
            />
          </div>

          {/* Overview */}
          <div className="mb-6">
            <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-2 font-bold ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <Compass className={`w-4 h-4 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
              <span>Project Overview & Context</span>
            </h4>
            <p className={`text-sm leading-relaxed ${isLight ? 'text-slate-700' : 'text-slate-300'}`}>
              {project.longDescription || project.shortDescription}
            </p>
          </div>

          {/* Key Features & Responsibilities */}
          <div className="mb-6">
            <h4 className={`text-xs font-mono uppercase tracking-wider mb-3 flex items-center gap-2 font-bold ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <CheckCircle className={`w-4 h-4 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
              <span>Key Features & Responsibilities (From Resume)</span>
            </h4>
            <div className="space-y-2.5">
              {project.keyFeatures.map((feature, i) => (
                <div 
                  key={i} 
                  className={`flex items-start gap-2.5 p-3 rounded-xl border ${
                    isLight
                      ? 'bg-slate-50 border-slate-200/80 text-slate-800'
                      : 'bg-[#2a2b30] border-[#383940] text-slate-200'
                  }`}
                >
                  <div className={`w-1.5 h-1.5 rounded-full mt-2 shrink-0 ${
                    isLight ? 'bg-slate-900' : 'bg-[#6dcff6]'
                  }`} />
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Project Impact */}
          <div className={`mb-6 p-4 rounded-2xl border ${
            isLight
              ? 'bg-slate-50 border-slate-200 text-slate-800'
              : 'bg-[#2a2b30] border-[#383940] text-slate-300'
          }`}>
            <h4 className={`text-xs font-mono uppercase tracking-wider mb-1 flex items-center gap-2 font-bold ${
              isLight ? 'text-slate-900' : 'text-[#6dcff6]'
            }`}>
              <Lightbulb className="w-4 h-4" />
              <span>Demonstrated Project Impact</span>
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed">
              {project.impact}
            </p>
          </div>

          {/* Technologies Used */}
          <div className="mb-8">
            <h4 className={`text-xs font-mono uppercase tracking-wider mb-2 flex items-center gap-2 font-bold ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              <Tag className={`w-4 h-4 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
              <span>Technologies & Tools</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 text-xs font-mono font-medium rounded-lg ${
                    isLight
                      ? 'bg-slate-100 text-slate-800 border border-slate-200'
                      : 'bg-[#2a2b30] border border-[#383940] text-slate-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className={`flex items-center justify-end gap-3 pt-4 border-t ${
            isLight ? 'border-slate-200' : 'border-[#383940]'
          }`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-xs ${
                isLight
                  ? 'bg-slate-900 text-white hover:bg-slate-800'
                  : 'bg-[#6dcff6] hover:bg-[#5bb8e3] text-[#212126] font-bold shadow-[0_0_15px_rgba(109,207,246,0.3)]'
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
            <button
              onClick={onClose}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  : 'bg-[#323337] hover:bg-[#3a3b42] text-slate-200 hover:text-white border border-[#383940]'
              }`}
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
