import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact({ theme = 'light' }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const isLight = theme === 'light';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: ''
  });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setFormStatus({ submitting: false, submitted: false, error: 'Please fill in all required fields.' });
      return;
    }

    setFormStatus({ submitting: true, submitted: false, error: '' });

    setTimeout(() => {
      setFormStatus({ submitting: false, submitted: true, error: '' });
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 },
        colors: isLight ? ['#0f172a', '#3b82f6', '#64748b'] : ['#6dcff6', '#323337', '#ffffff']
      });

      const mailtoLink = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formState.subject || `Portfolio Contact from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
      )}`;
      
      window.location.href = mailtoLink;
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 sm:py-32 bg-slate-50/60 dark:bg-[#1d1d22] border-t border-slate-200/80 dark:border-[#323337] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
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
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white font-display">
            Let's <span className={isLight ? 'text-slate-900 underline decoration-slate-400 underline-offset-8' : 'text-gradient-cyan'}>Connect</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Open for internships, corporate software developer roles, academic collaborations, and technical discussions.
          </p>
        </motion.div>

        {/* 2-Column Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <div className="corporate-card rounded-3xl p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white mb-2 font-display">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Feel free to reach out directly via email, phone, or professional networks.
              </p>

              <div className="space-y-3.5">
                {/* Email Item */}
                <div className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                  isLight ? 'bg-slate-50 border-slate-200/80 hover:border-slate-400' : 'bg-[#212126] border-[#383940] hover:border-[#6dcff6]'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${
                      isLight ? 'bg-white text-slate-900 border border-slate-200' : 'bg-[#323337] text-[#6dcff6]'
                    }`}>
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Email Address</p>
                      <a
                        href={`mailto:${portfolioData.personal.email}`}
                        className={`text-xs sm:text-sm font-bold transition-colors ${
                          isLight ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-[#6dcff6]'
                        }`}
                      >
                        {portfolioData.personal.email}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                    className={`p-2 rounded-lg transition-colors ${
                      isLight ? 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200' : 'bg-[#323337] hover:bg-[#3a3b42] text-slate-300 hover:text-white border border-[#383940]'
                    }`}
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className={`flex items-center justify-between p-3.5 rounded-2xl border transition-all ${
                  isLight ? 'bg-slate-50 border-slate-200/80 hover:border-slate-400' : 'bg-[#212126] border-[#383940] hover:border-[#6dcff6]'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${
                      isLight ? 'bg-white text-slate-900 border border-slate-200' : 'bg-[#323337] text-[#6dcff6]'
                    }`}>
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Phone</p>
                      <a
                        href={`tel:${portfolioData.personal.phone.replace(/\s+/g, '')}`}
                        className={`text-xs sm:text-sm font-bold font-mono transition-colors ${
                          isLight ? 'text-slate-900 hover:text-blue-600' : 'text-white hover:text-[#6dcff6]'
                        }`}
                      >
                        {portfolioData.personal.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy(portfolioData.personal.phone, 'phone')}
                    className={`p-2 rounded-lg transition-colors ${
                      isLight ? 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200' : 'bg-[#323337] hover:bg-[#3a3b42] text-slate-300 hover:text-white border border-[#383940]'
                    }`}
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className={`flex items-center gap-3 p-3.5 rounded-2xl border ${
                  isLight ? 'bg-slate-50 border-slate-200/80' : 'bg-[#212126] border-[#383940]'
                }`}>
                  <div className={`p-2.5 rounded-xl ${
                    isLight ? 'bg-white text-slate-900 border border-slate-200' : 'bg-[#323337] text-[#6dcff6]'
                  }`}>
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">Location</p>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                      {portfolioData.personal.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Network Links */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-[#383940]">
                <p className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-4 font-bold">
                  Professional Profiles
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-all group ${
                      isLight
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900'
                        : 'bg-[#212126] hover:bg-[#323337] border-[#383940] text-slate-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon className={`w-4 h-4 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={portfolioData.personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs font-bold transition-all group ${
                      isLight
                        ? 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-900'
                        : 'bg-[#212126] hover:bg-[#323337] border-[#383940] text-slate-200'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon className={`w-4 h-4 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Interactive Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="corporate-card rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-2.5 mb-2">
                <MessageSquare className={`w-5 h-5 ${isLight ? 'text-slate-900' : 'text-[#6dcff6]'}`} />
                <h3 className="text-xl sm:text-2xl font-bold text-slate-950 dark:text-white font-display">
                  Send a Direct Message
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mb-6">
                Have a project or looking to recruit? Leave a note and I will get back to you promptly.
              </p>

              {formStatus.submitted ? (
                <div className={`p-8 rounded-2xl text-center my-6 border ${
                  isLight ? 'bg-slate-50 border-slate-200 text-slate-900' : 'bg-[#212126] border-[#383940] text-white'
                }`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 ${
                    isLight ? 'bg-slate-900 text-white' : 'bg-[#323337] text-[#6dcff6]'
                  }`}>
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold mb-1">Message Ready!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    Your email client will open with your drafted message to send to <strong>{portfolioData.personal.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setFormStatus({ submitting: false, submitted: false, error: '' });
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className={`mt-5 px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${
                      isLight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-[#323337] hover:bg-[#3a3b42] text-[#6dcff6]'
                    }`}
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {formStatus.error && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                      {formStatus.error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-bold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Recruiter / Hiring Manager"
                        className="w-full px-4 py-3 rounded-xl corporate-input text-xs sm:text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-bold">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. talent@company.com"
                        className="w-full px-4 py-3 rounded-xl corporate-input text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-bold">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Internship Opportunity / Software Engineering"
                      className="w-full px-4 py-3 rounded-xl corporate-input text-xs sm:text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5 font-bold">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Write your message or inquiry here..."
                      className="w-full px-4 py-3 rounded-xl corporate-input text-xs sm:text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.submitting}
                    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-200 shadow-sm hover:scale-101 active:scale-99 disabled:opacity-50 ${
                      isLight
                        ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/20'
                        : 'bg-[#6dcff6] hover:bg-[#5bb8e3] text-[#212126] font-bold shadow-[0_0_20px_rgba(109,207,246,0.35)]'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>{formStatus.submitting ? 'Preparing Draft...' : 'Send Message'}</span>
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
