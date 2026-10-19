import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ theme = 'light', toggleTheme }) {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.15 },
      colors: theme === 'light' ? ['#0f172a', '#3b82f6', '#64748b'] : ['#38bdf8', '#818cf8', '#ffffff']
    });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#05070c]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-sm dark:shadow-lg dark:shadow-black/40 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo "LEESHARK" */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span className="text-xl sm:text-2xl font-black tracking-wider text-slate-900 dark:text-white font-display transition-colors group-hover:text-blue-600 dark:group-hover:text-cyan-400">
            {portfolioData.personal.brand}
          </span>
          <span className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-widest uppercase bg-slate-100 text-slate-700 border border-slate-200 rounded-full dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/20">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-2 text-xs lg:text-sm font-semibold tracking-widest transition-colors duration-200 ${
                  isActive
                    ? 'text-slate-950 dark:text-white font-bold'
                    : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-slate-900 dark:bg-gradient-to-r dark:from-cyan-400 dark:to-blue-500 rounded-full shadow-[0_0_8px_rgba(15,23,42,0.3)] dark:shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Header Actions (Theme Toggle & Resume) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle light and dark theme"
            className="p-2 rounded-full border border-slate-200 dark:border-white/15 bg-slate-50 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Clean Light Mode'}
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-slate-700" />
            ) : (
              <Sun className="w-4 h-4 text-amber-300" />
            )}
          </button>

          {/* Resume Download CTA */}
          <a
            href={portfolioData.personal.resumeUrl}
            download="Ajo_Limis_Resume.pdf"
            onClick={handleResumeDownload}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-200 shadow-sm bg-slate-900 text-white hover:bg-slate-800 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 dark:border dark:border-white/15"
          >
            <FileDown className="w-3.5 h-3.5 text-slate-300 dark:text-cyan-400" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle on mobile */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-white/15 text-slate-700 dark:text-slate-200"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-300" />}
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-300 hover:text-black dark:hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-[#070a12]/95 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2 text-sm font-semibold tracking-wider transition-colors ${
                      isActive
                        ? 'text-slate-900 dark:text-cyan-400 pl-2 border-l-2 border-slate-900 dark:border-cyan-400 font-bold'
                        : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
                <a
                  href={portfolioData.personal.resumeUrl}
                  download="Ajo_Limis_Resume.pdf"
                  onClick={() => {
                    handleResumeDownload();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 dark:bg-cyan-500/20 dark:hover:bg-cyan-500/30 dark:border dark:border-cyan-500/40 rounded-xl"
                >
                  <FileDown className="w-4 h-4 text-white dark:text-cyan-400" />
                  <span>Download Resume PDF</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
