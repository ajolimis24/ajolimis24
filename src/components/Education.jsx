import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education({ theme = 'light' }) {
  const isLight = theme === 'light';

  return (
    <section 
      id="education" 
      className="relative py-24 sm:py-32 bg-white dark:bg-[#212126] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#323337] border border-slate-200 dark:border-[#383940] text-slate-800 dark:text-[#6dcff6] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display">
            Education & <span className={isLight ? 'text-slate-900 underline decoration-slate-400 underline-offset-8' : 'text-gradient-cyan'}>Certifications</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Formal engineering education, academic standing, and specialized technical certifications.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Line */}
          <div className={`absolute top-0 bottom-0 left-4 sm:left-1/2 -translate-x-1/2 w-0.5 ${
            isLight
              ? 'bg-slate-200'
              : 'bg-gradient-to-b from-[#6dcff6]/60 via-[#323337] to-transparent'
          }`} />

          {/* Item 1: Degree (B.E. Computer Science and Engineering) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative mb-12 sm:mb-16 pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 items-center"
          >
            {/* Timeline Node Icon */}
            <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 ${
              isLight
                ? 'bg-white border-2 border-slate-900 text-slate-900 shadow-md'
                : 'bg-[#212126] border-2 border-[#6dcff6] text-[#6dcff6] shadow-[0_0_15px_rgba(109,207,246,0.5)]'
            }`}>
              <GraduationCap className="w-4 h-4" />
            </div>

            {/* Left Column (Content card for large screens) */}
            <div className="sm:text-right sm:pr-8">
              <div className="corporate-card rounded-2xl p-6 text-left">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full ${
                    isLight ? 'bg-slate-100 text-slate-800 border border-slate-200' : 'text-[#6dcff6] bg-[#323337] border border-[#383940]'
                  }`}>
                    {portfolioData.education[0].status}
                  </span>
                  <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md border ${
                    isLight ? 'bg-slate-900 text-white border-slate-900' : 'text-white bg-[#323337] border-[#383940]'
                  }`}>
                    {portfolioData.education[0].metrics}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display">
                  {portfolioData.education[0].degree}
                </h3>
                <p className={`text-sm font-semibold mt-0.5 ${isLight ? 'text-slate-700' : 'text-[#6dcff6]'}`}>
                  {portfolioData.education[0].field}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium mt-1">
                  {portfolioData.education[0].institution}
                </p>

                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mt-2 mb-4 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {portfolioData.education[0].period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    {portfolioData.education[0].location}
                  </span>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-200 dark:border-[#383940]">
                  {portfolioData.education[0].details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                        isLight ? 'text-slate-900' : 'text-[#6dcff6]'
                      }`} />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column (Timeline note on right) */}
            <div className="hidden sm:block pl-8">
              <div className={`p-4 rounded-xl max-w-xs border ${
                isLight ? 'bg-slate-50 border-slate-200/80 text-slate-700' : 'bg-[#2a2b30] border-[#383940] text-slate-300'
              }`}>
                <p className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Institution</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 mt-1">KIT – Kalaignar Karunanidhi Institute of Technology</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Focus on algorithms, databases, modern web tech, and ADAS concepts.</p>
              </div>
            </div>
          </motion.div>

          {/* Item 2: Certifications (Java Programming Certification) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative pl-12 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 items-center"
          >
            {/* Timeline Node Icon */}
            <div className={`absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full flex items-center justify-center z-10 ${
              isLight
                ? 'bg-white border-2 border-slate-900 text-slate-900 shadow-md'
                : 'bg-[#212126] border-2 border-[#6dcff6] text-[#6dcff6] shadow-[0_0_15px_rgba(109,207,246,0.5)]'
            }`}>
              <Award className="w-4 h-4" />
            </div>

            {/* Left Column (Badge indicator on desktop) */}
            <div className="hidden sm:block text-right pr-8">
              <div className={`inline-block p-4 rounded-xl text-right max-w-xs border ${
                isLight ? 'bg-slate-50 border-slate-200/80 text-slate-700' : 'bg-[#2a2b30] border-[#383940] text-slate-300'
              }`}>
                <p className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500 dark:text-[#6dcff6]">Coursework Completed</p>
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-200 mt-1">Object-Oriented Programming</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Data abstraction, inheritance, polymorphism, and problem-solving application development.</p>
              </div>
            </div>

            {/* Right Column (Certification Card) */}
            <div className="sm:pl-8">
              <div className="corporate-card rounded-2xl p-6 text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider rounded-full ${
                    isLight ? 'bg-slate-100 text-slate-800 border border-slate-200' : 'text-[#6dcff6] bg-[#323337] border border-[#383940]'
                  }`}>
                    {portfolioData.certifications[0].badge}
                  </span>
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    {portfolioData.certifications[0].date}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-950 dark:text-white font-display">
                  {portfolioData.certifications[0].title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Issued by: {portfolioData.certifications[0].issuer}
                </p>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mt-4 pt-3 border-t border-slate-200 dark:border-[#383940]">
                  {portfolioData.certifications[0].description}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
