import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileDown, Sparkles, Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ theme = 'light' }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % portfolioData.personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: theme === 'light' ? ['#0f172a', '#3b82f6', '#64748b'] : ['#38bdf8', '#818cf8', '#a855f7', '#ffffff']
    });
  };

  const isLight = theme === 'light';

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-white dark:bg-[#05070c] transition-colors duration-300"
    >
      {/* Background Radial Light Accent */}
      {isLight ? (
        <div className="absolute inset-0 pointer-events-none light-hero-spotlight z-0 opacity-70" />
      ) : (
        <>
          <div className="absolute inset-0 pointer-events-none hero-spotlight z-0 opacity-80" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        </>
      )}

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Signature Mockup: Giant PORTFOLIO typography + Overlapping Portrait */}
        <div className="relative w-full flex items-center justify-center my-auto min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px]">
          
          {/* GIANT 'PORTFOLIO' TEXT BEHIND THE PERSON */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
          >
            <h1 className={`text-[16vw] sm:text-[17vw] md:text-[18vw] lg:text-[19vw] font-black tracking-tighter leading-none uppercase font-display text-center select-none ${
              isLight 
                ? 'text-slate-100 drop-shadow-[0_4px_12px_rgba(0,0,0,0.03)]' 
                : 'text-metallic opacity-85 drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]'
            }`}>
              PORTFOLIO
            </h1>
          </motion.div>

          {/* DEVELOPER PORTRAIT IN FOREGROUND */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center justify-end h-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] pt-4"
          >
            {/* Subtle backlight */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 rounded-full pointer-events-none ${
              isLight ? 'bg-slate-200/50 blur-3xl' : 'bg-cyan-500/10 blur-3xl'
            }`} />

            <div className="relative group">
              <img
                src={portfolioData.personal.profileTransparent}
                alt={portfolioData.personal.name}
                className="w-full h-auto object-contain max-h-[360px] sm:max-h-[440px] md:max-h-[500px] lg:max-h-[560px] drop-shadow-[0_20px_30px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-out group-hover:scale-[1.01]"
              />
            </div>
          </motion.div>

          {/* LEFT OVERLAY: "Software Developer" */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="absolute left-2 sm:left-6 md:left-8 bottom-4 sm:bottom-8 z-20 max-w-[280px] sm:max-w-xs text-left"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider font-semibold ${
                isLight ? 'text-slate-600' : 'text-cyan-400'
              }`}>
                Available for Roles
              </span>
            </div>
            <div className="font-display">
              <span className={`text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight block ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}>
                Software
              </span>
              <span className={`text-xl sm:text-3xl md:text-4xl font-light italic font-serif tracking-wide block ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}>
                Developer
              </span>
            </div>
            <p className={`mt-2 text-xs sm:text-sm font-medium line-clamp-2 sm:line-clamp-none hidden sm:block ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}>
              {portfolioData.personal.name} • CSE @ KIT
            </p>
          </motion.div>

          {/* RIGHT OVERLAY: Arrow button & Contact pill */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="absolute right-2 sm:right-6 md:right-8 bottom-4 sm:bottom-8 z-20 flex items-center gap-2 sm:gap-3"
          >
            <a
              href="#projects"
              className={`group p-2.5 sm:p-3 rounded-full transition-all duration-300 shadow-sm hover:scale-105 ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/15 hover:border-cyan-400/60'
              }`}
              aria-label="Scroll to Projects"
            >
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-all duration-300 shadow-sm hover:scale-102 ${
                isLight
                  ? 'bg-slate-900 hover:bg-slate-800 text-white'
                  : 'bg-white/5 hover:bg-white/10 text-slate-200 border border-white/20 hover:border-cyan-400/50'
              }`}
            >
              Contact
            </a>
          </motion.div>
        </div>

        {/* HERO DETAILS & ACTION BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto z-20 px-4"
        >
          {/* Animated Role Cycler Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 shadow-sm ${
            isLight
              ? 'bg-slate-100 border border-slate-200 text-slate-700'
              : 'bg-slate-900/80 border border-white/10 text-slate-400'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-cyan-400'}`} />
            <span className="text-xs sm:text-sm font-medium">Specializing in:</span>
            <span className={`text-xs sm:text-sm font-bold font-mono ${
              isLight ? 'text-slate-900' : 'text-cyan-300'
            }`}>
              {portfolioData.personal.roles[currentRoleIndex]}
            </span>
          </div>

          <p className={`text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Computer Science and Engineering student at <strong className={isLight ? 'text-slate-900' : 'text-white'}>KIT</strong> with skills in <span className={isLight ? 'font-semibold text-slate-900' : 'text-cyan-400 font-medium'}>Java</span>, <span className={isLight ? 'font-semibold text-slate-900' : 'text-cyan-400 font-medium'}>JavaScript</span>, <span className={isLight ? 'font-semibold text-slate-900' : 'text-cyan-400 font-medium'}>Python</span>, and <span className={isLight ? 'font-semibold text-slate-900' : 'text-cyan-400 font-medium'}>React.js</span>. Dedicated to developing formal corporate-ready web solutions, robust database management systems, and intelligent automotive ADAS concepts.
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md hover:scale-105 active:scale-95 ${
                isLight
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                  : 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black shadow-[0_0_25px_rgba(56,189,248,0.4)]'
              }`}
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>

            <a
              href={portfolioData.personal.resumeUrl}
              download="Ajo_Limis_Resume.pdf"
              onClick={handleResumeDownload}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 hover:border-slate-400'
                  : 'bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white border border-white/15 hover:border-cyan-400/60'
              }`}
            >
              <FileDown className={`w-4 h-4 ${isLight ? 'text-slate-700' : 'text-cyan-400'}`} />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Quick Links */}
          <div className={`mt-8 flex items-center justify-center gap-4 ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-white/5 hover:bg-white/10 hover:text-cyan-400'
              }`}
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-white/5 hover:bg-white/10 hover:text-cyan-400'
              }`}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`p-2.5 rounded-lg transition-all duration-200 ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-white/5 hover:bg-white/10 hover:text-cyan-400'
              }`}
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <div className="relative z-10 mt-6 flex justify-center">
        <a
          href="#about"
          className={`transition-colors duration-200 flex flex-col items-center gap-1 ${
            isLight ? 'text-slate-400 hover:text-slate-800' : 'text-slate-500 hover:text-cyan-400'
          }`}
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
