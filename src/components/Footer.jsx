import React from 'react';
import { ArrowUp, Mail, FileDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ theme = 'light' }) {
  const isLight = theme === 'light';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-white dark:bg-[#040508] border-t border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-400 py-12 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-200 dark:border-white/5">
          {/* Brand */}
          <div className="text-center md:text-left">
            <a href="#home" className="inline-block focus:outline-none">
              <span className="text-2xl font-black tracking-wider text-slate-900 dark:text-white font-display hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                {portfolioData.personal.brand}
              </span>
            </a>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-sm">
              {portfolioData.personal.name} • {portfolioData.personal.title} & CSE Undergrad at KIT Coimbatore.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-bold tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-slate-950 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href={portfolioData.personal.resumeUrl}
              download="Ajo_Limis_Resume.pdf"
              className="text-slate-900 dark:text-cyan-400 hover:underline transition-colors flex items-center gap-1 font-bold"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
              }`}
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
              }`}
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              className={`p-2.5 rounded-xl transition-colors ${
                isLight ? 'bg-slate-100 hover:bg-slate-200 text-slate-800' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white'
              }`}
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className={`p-2.5 rounded-xl transition-colors ml-2 ${
                isLight
                  ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm'
                  : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20'
              }`}
              aria-label="Scroll back to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} {portfolioData.personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-medium">
            Formal Corporate Portfolio • React, Tailwind CSS & Framer Motion.
          </p>
        </div>

      </div>
    </footer>
  );
}
