import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Cloud, ArrowUpRight, Cpu } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import AnimatedCounter from '../components/AnimatedCounter';
import { useLanguage } from '../context/LanguageContext'; // 1. Import Hook ngôn ngữ

const About = ({ setActiveTab }) => {
  // 2. Lấy ngôn ngữ và bộ từ điển dịch thuật từ Context
  const { language, translations } = useLanguage();
  const t = translations && translations[language] ? translations[language] : {};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  // Node graph animation helper for architectural visualization
  const nodeVariants = {
    animate: (i) => ({
      y: [0, -8, 0],
      transition: {
        delay: i * 0.4,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-16 py-8 md:py-16"
    >
      {/* 1. Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left column: Text Content */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 text-cyber-cyan text-xs font-semibold uppercase tracking-wider shadow-[0_0_15px_rgba(0,242,254,0.1)]">
            <Cpu size={14} /> {t.heroBadge || 'Fullstack Salesforce Architect'}
          </motion.div>

          <div className="w-50 h-50 rounded-full border-2 border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.4)] overflow-hidden mb-4">
            <img src="/myAvatar.jpeg" alt="Hai Tran Xuan" className="w-full h-full object-cover" />
          </div>

          <motion.h1 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            {t.heroGreeting || 'Tôi là'} <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-nebula-purple font-display text-glow-cyan">{t.heraFullName || 'Trần Xuân Hải'}</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants} 
            className="text-xl sm:text-2xl font-semibold text-gray-200 border-l-4 border-nebula-purple pl-4 italic"
          >
            "{t.heroTagline || 'Architecting Scalable Salesforce Ecosystems. Bridging Code and Cloud Architecture.'}"
          </motion.p>

          <motion.p 
            variants={itemVariants} 
            className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            {/* Sử dụng chuỗi động từ context dịch thuật */}
            {t.heroBio}
          </motion.p>

          {/* Action buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setActiveTab('experience')}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-cyber-cyan to-cyber-blue text-space-black font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:shadow-[0_0_30px_rgba(0,242,254,0.5)] cursor-pointer flex items-center gap-1.5"
            >
              {t.btnViewExp || 'Xem Kinh Nghiệm'} <ArrowUpRight size={16} />
            </button>
            <a
              href="mailto:tranxuanhai.bkdn@gmail.com"
              className="px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:border-nebula-purple/50 text-white font-semibold text-sm hover:bg-white/10 transition-all duration-300 flex items-center gap-2 shadow-inner"
            >
              {t.btnContactDirect || 'Liên Hệ Trực Tiếp'}
            </a>
          </motion.div>
        </div>

        {/* Right column: Interactive Salesforce Nodes Graphic */}
        <motion.div 
          variants={itemVariants}
          className="lg:col-span-5 flex justify-center items-center relative h-[350px] md:h-[400px]"
        >
          {/* Neon Glow Orbit Lines */}
          <div className="absolute inset-0 border border-white/5 rounded-full scale-75 animate-pulse-slow -z-10" />
          <div className="absolute inset-0 border border-cyber-cyan/5 rounded-full scale-50 rotate-45 -z-10" />

          {/* Sơ đồ Salesforce Core Cloud Node Concept (Immersive SVG) */}
          <svg className="w-full h-full max-w-[400px]" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            
            {/* Core Node: Salesforce */}
            <motion.g custom={0} variants={nodeVariants} animate="animate" className="cursor-pointer">
              <circle cx="200" cy="200" r="48" fill="url(#coreGradient)" className="filter drop-shadow-[0_0_30px_rgba(138,43,226,0.6)]" />
              <text x="200" y="204" textAnchor="middle" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="var(--font-display)">Salesforce</text>
              <circle cx="200" cy="200" r="47" stroke="#00f2fe" strokeWidth="1" strokeDasharray="4 4" />
            </motion.g>

            {/* Sub-node 1: Apex & LWC */}
            <line x1="  00" y1="200" x2="80" y2="120" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <motion.g custom={1} variants={nodeVariants} animate="animate">
              <circle cx="80" cy="120" r="32" fill="#0d0d15" stroke="#00f2fe" strokeWidth="1.5" className="filter drop-shadow-[0_0_15px_rgba(0,242,254,0.3)]" />
              <text x="80" y="124" textAnchor="middle" fill="#00f2fe" fontSize="10" fontWeight="bold">Apex / Lwc / API / Flow</text>
            </motion.g>

            {/* Sub-node 2: Cloud Architect */}
            <line x1="200" y1="200" x2="320" y2="130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <motion.g custom={2} variants={nodeVariants} animate="animate">
              <circle cx="320" cy="130" r="32" fill="#0d0d15" stroke="#8a2be2" strokeWidth="1.5" className="filter drop-shadow-[0_0_15px_rgba(138,43,226,0.3)]" />
              <text x="320" y="134" textAnchor="middle" fill="#e066ff" fontSize="10" fontWeight="bold">Salesforce Architect</text>
            </motion.g>

            {/* Sub-node 3: AWS Integration */}
            <line x1="200" y1="200" x2="130" y2="300" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <motion.g custom={3} variants={nodeVariants} animate="animate">
              <circle cx="130" cy="300" r="28" fill="#0d0d15" stroke="#ec4899" strokeWidth="1.5" className="filter drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]" />
              <text x="130" y="304" textAnchor="middle" fill="#ec4899" fontSize="9" fontWeight="bold">Sales / Service Cloud</text>
            </motion.g>

            {/* Sub-node 4: Ruby on Rails */}
            <line x1="200" y1="200" x2="270" y2="290" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            <motion.g custom={4} variants={nodeVariants} animate="animate">
              <circle cx="270" cy="290" r="24" fill="#0d0d15" stroke="#4facfe" strokeWidth="1.5" className="filter drop-shadow-[0_0_10px_rgba(79,172,254,0.3)]" />
              <text x="270" y="294" textAnchor="middle" fill="#4facfe" fontSize="8" fontWeight="bold">Experience Cloud</text>
            </motion.g>

            {/* Gradients definitions */}
            <defs>
              <linearGradient id="coreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8a2be2" />
                <stop offset="100%" stopColor="#00f2fe" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </section>

      {/* 2. Stats Grid Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlowCard glowColor="purple" delay={0.2} className="flex flex-col items-center justify-center text-center p-8 border border-white/5">
          <Award className="text-nebula-purple mb-3" size={36} />
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white text-glow-purple">
            <AnimatedCounter end={6} suffix="+" />
          </h3>
          <p className="text-gray-400 mt-2 text-sm font-semibold tracking-wide uppercase">
            {t.statsExp || 'Năm Kinh Nghiệm Thực Chiến'}
          </p>
        </GlowCard>

        <GlowCard glowColor="cyan" delay={0.3} className="flex flex-col items-center justify-center text-center p-8 border border-white/5">
          <Code2 className="text-cyber-cyan mb-3" size={36} />
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white text-glow-cyan">
            <AnimatedCounter end={10} suffix="+" />
          </h3>
          <p className="text-gray-400 mt-2 text-sm font-semibold tracking-wide uppercase">
            {t.statsCerts || 'Chứng Chỉ Salesforce Cao Cấp'}
          </p>
        </GlowCard>

        <GlowCard glowColor="pink" delay={0.4} className="flex flex-col items-center justify-center text-center p-8 border border-white/5">
          <Cloud className="text-neon-pink mb-3" size={36} />
          <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white">
            <AnimatedCounter end={10} suffix="+" />
          </h3>
          <p className="text-gray-400 mt-2 text-sm font-semibold tracking-wide uppercase">
            {t.statsProjects || 'Dự Án Toàn Cầu (Ireland, Japan, Asia)'}
          </p>
        </GlowCard>
      </section>

      {/* 3. Core Specialties Showcasing */}
      <section className="space-y-6">
        <div className="text-left">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
            {t.capabilitiesTitle || 'Năng Lực Thiết Kế & Phát Triển'}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-nebula-purple mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          
          {/* Card 1: Salesforce Architecture */}
          <GlowCard glowColor="purple" delay={0.4} className="border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-nebula-purple/10 flex items-center justify-center mb-4 text-nebula-purple">
              <Award size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              {t.specArchTitle || 'Salesforce Architecture'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.specArchDesc}
            </p>
            <ul className="text-xs text-cyber-cyan font-mono mt-4 space-y-1">
              <li>• Large Data Volume (LDV) Design</li>
              <li>• Complex Sharing & Security Models</li>
              <li>• Salesforce Org Strategy</li>
            </ul>
          </GlowCard>

          {/* Card 2: Deep System Coding */}
          <GlowCard glowColor="cyan" delay={0.5} className="border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-cyber-cyan/10 flex items-center justify-center mb-4 text-cyber-cyan">
              <Code2 size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              {t.specCodingTitle || 'Deep System Coding'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.specCodingDesc}
            </p>
            <ul className="text-xs text-cyber-cyan font-mono mt-4 space-y-1">
              <li>• Apex Optimization & Async Processing</li>
              <li>• LWC Custom Component Trees</li>
              <li>• Performance Tuning & Governor Limits</li>
            </ul>
          </GlowCard>

          {/* Card 3: Fullstack & AWS Integration */}
          <GlowCard glowColor="pink" delay={0.6} className="border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-neon-pink/10 flex items-center justify-center mb-4 text-neon-pink">
              <Cloud size={20} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 font-display">
              {t.specCloudTitle || 'Fullstack & Salesforce Integration'}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.specCloudDesc}
            </p>
            <ul className="text-xs text-cyber-cyan font-mono mt-4 space-y-1">
              <li>• Salesforce Integration and Configuration</li>
              <li>• REST/SOAP Integrations & JWT</li>
              <li>• Salesforce Fullstack Development</li>
            </ul>
          </GlowCard>

        </div>
      </section>

    </motion.div>
  );
};

export default About;