import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-white dark:bg-[#212126] transition-colors duration-500"
    >
      {/* Background Radial Light Accent */}
      {isLight ? (
        <div className="absolute inset-0 pointer-events-none light-hero-spotlight z-0 opacity-70 transition-opacity duration-500" />
      ) : (
        <>
          <div className="absolute inset-0 pointer-events-none hero-spotlight z-0 opacity-80 transition-opacity duration-500" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-[#6dcff6]/10 via-[#323337]/30 to-transparent blur-[140px] pointer-events-none rounded-full" />
        </>
      )}

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        
        {/* Signature Mockup: Giant PORTFOLIO typography + Overlapping Portrait */}
        <div className="relative w-full flex items-center justify-center my-auto min-h-[380px] sm:min-h-[460px] md:min-h-[520px] lg:min-h-[580px]">
          
          {/* FULL FILLED 'PORTFOLIO' BACKGROUND TEXT WITH SHADOW EFFECT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 px-2 sm:px-4 w-full"
          >
            <svg
              viewBox="0 0 1000 200"
              className="w-full max-w-full h-auto max-h-[300px] sm:max-h-[380px] md:max-h-[440px] select-none overflow-visible"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <filter id="heroDropShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feDropShadow 
                    dx="0" 
                    dy="16" 
                    stdDeviation="16" 
                    floodColor="#000000" 
                    floodOpacity={isLight ? 0.38 : 0.85} 
                  />
                </filter>
                <linearGradient id="metallicGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ffffff" />
                  <stop offset="35%" stopColor="#6dcff6" />
                  <stop offset="70%" stopColor="#323337" />
                  <stop offset="100%" stopColor="#212126" />
                </linearGradient>
              </defs>
              <text
                x="50%"
                y="58%"
                textAnchor="middle"
                dominantBaseline="middle"
                className="select-none"
                style={{
                  fontSize: '158px',
                  fontWeight: '900',
                  letterSpacing: '0.04em',
                  fontFamily: "'Outfit', 'Poppins', 'Inter', system-ui, sans-serif",
                  fill: isLight ? '#000000' : 'url(#metallicGrad)',
                  filter: 'url(#heroDropShadow)',
                }}
              >
                PORTFOLIO
              </text>
            </svg>
          </motion.div>

          {/* DEVELOPER PORTRAIT IN FOREGROUND (WITH GENTLE LUXURIOUS FLOATING MOTION) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -10, 0] 
            }}
            transition={{ 
              opacity: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              scale: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
              y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
            }}
            className="relative z-10 flex flex-col items-center justify-end h-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[540px] pt-4"
          >
            {/* Ambient separation backlight */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 rounded-full pointer-events-none transition-all duration-700 ${
              isLight ? 'bg-white/80 blur-2xl' : 'bg-[#6dcff6]/15 blur-3xl'
            }`} />

            <div className="relative group">
              <motion.img
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                src={portfolioData.personal.profileTransparent}
                alt={portfolioData.personal.name}
                className="w-full h-auto object-contain max-h-[360px] sm:max-h-[440px] md:max-h-[500px] lg:max-h-[560px] drop-shadow-[0_20px_35px_rgba(0,0,0,0.22)] dark:drop-shadow-[0_25px_35px_rgba(0,0,0,0.9)]"
              />
            </div>
          </motion.div>

          {/* LEFT OVERLAY: "Software Developer" */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-2 sm:left-6 md:left-8 bottom-4 sm:bottom-8 z-20 max-w-[280px] sm:max-w-xs text-left p-3.5 sm:p-4 rounded-2xl bg-white/85 dark:bg-[#2a2b30]/90 backdrop-blur-md border border-slate-200/80 dark:border-[#383940] shadow-sm transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className={`text-[11px] sm:text-xs font-mono uppercase tracking-wider font-bold ${
                isLight ? 'text-slate-700' : 'text-[#6dcff6]'
              }`}>
                Available for Roles
              </span>
            </div>
            <div className="font-display">
              <span className={`text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight block ${
                isLight ? 'text-slate-950' : 'text-white'
              }`}>
                Software
              </span>
              <span className={`text-xl sm:text-3xl md:text-4xl font-light italic font-serif tracking-wide block ${
                isLight ? 'text-slate-700' : 'text-slate-300'
              }`}>
                Developer
              </span>
            </div>
            <p className={`mt-2 text-xs sm:text-sm font-medium line-clamp-2 sm:line-clamp-none hidden sm:block ${
              isLight ? 'text-slate-600' : 'text-slate-400'
            }`}>
              {portfolioData.personal.name} • CSE @ KIT
            </p>
          </motion.div>

          {/* RIGHT OVERLAY: Arrow button & Contact pill */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.02, y: -2 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute right-2 sm:right-6 md:right-8 bottom-4 sm:bottom-8 z-20 flex items-center gap-2 sm:gap-3 p-2 rounded-full bg-white/85 dark:bg-[#2a2b30]/90 backdrop-blur-md border border-slate-200/80 dark:border-[#383940] shadow-sm transition-all"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: -45 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className={`p-2.5 sm:p-3 rounded-full transition-colors shadow-xs ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300/80'
                  : 'bg-[#323337] hover:bg-[#3a3b42] text-slate-200 border border-[#3a3b42] hover:border-[#6dcff6]'
              }`}
              aria-label="Scroll to Projects"
            >
              <ArrowDownRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full transition-all shadow-sm ${
                isLight
                  ? 'bg-slate-900 hover:bg-slate-800 text-white'
                  : 'bg-[#323337] hover:bg-[#3a3b42] text-slate-200 border border-[#3a3b42] hover:border-[#6dcff6]'
              }`}
            >
              Contact
            </motion.a>
          </motion.div>
        </div>

        {/* HERO DETAILS & ACTION BUTTONS WITH FLUID TRANSITIONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 sm:mt-12 text-center max-w-3xl mx-auto z-20 px-4"
        >
          {/* Animated Role Cycler Badge with AnimatePresence */}
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-4 shadow-sm transition-all duration-300 ${
            isLight
              ? 'bg-slate-100 border border-slate-200 text-slate-700'
              : 'bg-[#2a2b30] border border-[#383940] text-slate-300'
          }`}>
            <Sparkles className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-[#6dcff6]'}`} />
            <span className="text-xs sm:text-sm font-medium">Specializing in:</span>
            <div className="inline-block min-w-[170px] text-left">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 8, filter: 'blur(3px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -8, filter: 'blur(3px)' }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className={`text-xs sm:text-sm font-bold font-mono inline-block ${
                    isLight ? 'text-slate-900' : 'text-[#6dcff6]'
                  }`}
                >
                  {portfolioData.personal.roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className={`text-sm sm:text-base md:text-lg font-normal leading-relaxed mb-6 transition-colors duration-300 ${
            isLight ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Computer Science and Engineering student at <strong className={isLight ? 'text-slate-900' : 'text-white'}>KIT</strong> with skills in <span className={isLight ? 'font-semibold text-slate-900' : 'text-[#6dcff6] font-medium'}>Java</span>, <span className={isLight ? 'font-semibold text-slate-900' : 'text-[#6dcff6] font-medium'}>JavaScript</span>, <span className={isLight ? 'font-semibold text-slate-900' : 'text-[#6dcff6] font-medium'}>Python</span>, and <span className={isLight ? 'font-semibold text-slate-900' : 'text-[#6dcff6] font-medium'}>React.js</span>. Dedicated to developing formal corporate-ready web solutions, robust database management systems, and intelligent automotive ADAS concepts.
          </p>

          {/* Primary CTA Buttons with Spring Micro-Interactions */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href="#projects"
              className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-md ${
                isLight
                  ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                  : 'bg-[#6dcff6] hover:bg-[#5bb8e3] text-[#212126] font-bold shadow-[0_0_25px_rgba(109,207,246,0.35)]'
              }`}
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              href={portfolioData.personal.resumeUrl}
              download="Ajo_Limis_Resume.pdf"
              onClick={handleResumeDownload}
              className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm ${
                isLight
                  ? 'bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-300 hover:border-slate-400'
                  : 'bg-[#2a2b30] hover:bg-[#323337] text-slate-200 hover:text-white border border-[#383940] hover:border-[#6dcff6]'
              }`}
            >
              <FileDown className={`w-4 h-4 ${isLight ? 'text-slate-700' : 'text-[#6dcff6]'}`} />
              <span>Download Resume</span>
            </motion.a>
          </div>

          {/* Social Quick Links with Spring Hover Transitions */}
          <div className={`mt-8 flex items-center justify-center gap-4 ${
            isLight ? 'text-slate-600' : 'text-slate-400'
          }`}>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-[#2a2b30] hover:bg-[#323337] text-slate-300 hover:text-[#6dcff6] border border-[#383940]'
              }`}
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-lg transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-[#2a2b30] hover:bg-[#323337] text-slate-300 hover:text-[#6dcff6] border border-[#383940]'
              }`}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              href={`mailto:${portfolioData.personal.email}`}
              className={`p-2.5 rounded-lg transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-[#2a2b30] hover:bg-[#323337] text-slate-300 hover:text-[#6dcff6] border border-[#383940]'
              }`}
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Subtle Scroll Down Prompt with Spring Transition */}
      <div className="relative z-10 mt-6 flex justify-center">
        <motion.a
          whileHover={{ y: 3 }}
          href="#about"
          className={`transition-colors duration-200 flex flex-col items-center gap-1 ${
            isLight ? 'text-slate-400 hover:text-slate-800' : 'text-slate-400 hover:text-[#6dcff6]'
          }`}
          aria-label="Scroll down to About section"
        >
          <span className="text-[10px] tracking-widest uppercase font-mono font-medium">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
