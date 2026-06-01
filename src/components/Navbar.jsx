import React from 'react';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, BookOpen } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'about', label: 'Về Tôi', icon: User },
    { id: 'experience', label: 'Kinh Nghiệm', icon: Briefcase },
    { id: 'certificates', label: 'Chứng Chỉ', icon: Award },
    { id: 'blog', label: 'Insights', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-nav px-4 md:px-8 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => setActiveTab('about')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyber-cyan to-nebula-purple flex items-center justify-center font-display font-bold text-space-black shadow-[0_0_15px_rgba(0,242,254,0.3)] group-hover:scale-105 transition-transform duration-300">
            H
          </div>
          <span className="hidden sm:inline-block font-display font-semibold tracking-wide text-lg text-white bg-clip-text group-hover:text-cyber-cyan transition-colors duration-300">
            XUAN HAI
          </span>
        </motion.div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 bg-space-black/50 p-1.5 rounded-full border border-white/5 relative">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full flex items-center gap-2 text-xs md:text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isActive ? 'text-space-black font-semibold' : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Active Indicator Bubble (Sliding background) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabBubble"
                    className="absolute inset-0 bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full -z-10 shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon size={16} />
                <span className="hidden md:inline-block">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Social / Contact Icons */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <a
            href="https://linkedin.com/in/tranxuanhai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyber-cyan hover:scale-110 transition-all duration-300 p-1.5 rounded-lg hover:bg-white/5"
            aria-label="LinkedIn"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a
            href="https://github.com/tranxuanhai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-nebula-purple hover:scale-110 transition-all duration-300 p-1.5 rounded-lg hover:bg-white/5"
            aria-label="GitHub"
          >
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <a
            href="mailto:tranxuanhai@outlook.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-cyber-cyan/50 hover:bg-cyber-cyan/10 transition-all duration-300 text-white cursor-pointer hover:shadow-[0_0_15px_rgba(0,242,254,0.1)]"
          >
            Liên hệ
          </a>
        </motion.div>

      </div>
    </header>
  );
};

export default Navbar;
