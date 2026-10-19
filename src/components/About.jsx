import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Target, Cpu, Code2, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ theme = 'light' }) {
  const isLight = theme === 'light';

  const stats = [
    { label: "Degree & Major", value: "B.E. CSE", detail: "Computer Science & Engineering" },
    { label: "Current Institution", value: "KIT", detail: "Kalaignar Karunanidhi Inst. of Tech." },
    { label: "Academic CGPA", value: "6.9 / 10", detail: "Expected Grad: 2029" },
    { label: "Java Certification", value: "Certified", detail: "OOP & Algorithmic Problem Solving" },
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-[#1d1d22] border-y border-slate-200/80 dark:border-[#323337] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-[#323337] border border-slate-200 dark:border-[#383940] text-slate-800 dark:text-[#6dcff6] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display">
            About <span className={isLight ? 'text-slate-900 underline decoration-slate-400 underline-offset-8' : 'text-gradient-cyan'}>Me</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Dedicated Computer Science undergraduate and software developer focused on engineering reliable, structured software applications and clean user experiences.
          </p>
        </motion.div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Bio strictly based on resume */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="corporate-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-4 flex items-center gap-2.5 font-display">
                <GraduationCap className={`w-6 h-6 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
                <span>Academic & Engineering Background</span>
              </h3>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {portfolioData.about.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Problem Solving & Philosophy */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#383940]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-[#6dcff6] font-mono mb-3">
                  Problem-Solving Approach
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#212126] border border-slate-200/80 dark:border-[#383940]">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-slate-800' : 'text-[#6dcff6]'}`} />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-200">Analytical Decomposition</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Deconstructing complex requirements into structured, testable modules.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 dark:bg-[#212126] border border-slate-200/80 dark:border-[#383940]">
                    <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? 'text-slate-800' : 'text-[#6dcff6]'}`} />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-200">User-Centric Architecture</p>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-0.5">Ensuring every interaction and data endpoint is intuitive and accessible.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action links */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-900 dark:text-[#6dcff6] hover:underline transition-colors"
              >
                <span>View Technical Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-400">•</span>
              <a
                href="#education"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-slate-200 transition-colors"
              >
                <span>View Education & Timeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Stats & Highlights Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="corporate-card rounded-xl p-4 sm:p-5"
                >
                  <p className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1 line-clamp-1">
                    {stat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Personal Highlights Cards */}
            <div className="space-y-3.5">
              {portfolioData.about.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="corporate-card rounded-xl p-4 sm:p-5 flex items-start gap-3.5"
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isLight 
                      ? 'bg-slate-100 text-slate-900 border border-slate-200' 
                      : 'bg-[#323337] border border-[#383940] text-[#6dcff6]'
                  }`}>
                    {index === 0 && <Code2 className="w-4 h-4" />}
                    {index === 1 && <Cpu className="w-4 h-4" />}
                    {index === 2 && <Award className="w-4 h-4" />}
                    {index === 3 && <Target className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-950 dark:text-white mb-1 font-display">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
