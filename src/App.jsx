import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [theme, setTheme] = useState(() => {
    // Default to clean light portfolio as requested
    const saved = localStorage.getItem('portfolio-theme');
    return saved ? saved : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white dark:bg-[#212126] dark:text-[#ffffff] dark:selection:bg-[#6dcff6]/30 dark:selection:text-[#6dcff6] transition-colors duration-500">
      {/* Background Particles (Subtle in light, ambient in dark) */}
      <ParticlesBackground theme={theme} />

      {/* Main Navigation with Theme Toggle */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Portfolio Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Education theme={theme} />
        <Contact theme={theme} />
      </main>

      {/* Site Footer */}
      <Footer theme={theme} />

      {/* Floating Scroll to Top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 shadow-xl transition-all hover:scale-110 active:scale-95 dark:bg-[#323337] dark:hover:bg-[#6dcff6] dark:text-[#6dcff6] dark:hover:text-[#212126] dark:border-[#3a3b42] dark:shadow-[0_0_20px_rgba(109,207,246,0.3)]"
            aria-label="Scroll back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
