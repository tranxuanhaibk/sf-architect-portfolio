import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building2, MapPin, CheckCircle2, Award } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import { useLanguage } from '../context/LanguageContext';

const Experience = () => {
  const [selectedExpId, setSelectedExpId] = useState(1);

  // Tiêu thụ ngôn ngữ hiện tại và bộ dịch thuật từ Context
  const { language, translations } = useLanguage();
  const t = translations && translations[language] ? translations[language] : {};

  // Lấy mảng danh sách kinh nghiệm chính xác từ Context (expList)
  const experiences = t.expList || [];
  
  const activeExp = experiences.find(e => e.id === selectedExpId) || experiences[0];

  // Hàm helper xử lý chuỗi chữ đậm dạng **text** trong bullets nếu có
  const renderTextWithBold = (text) => {
    if (!text) return '';
    return text.split('**').map((chunk, chunkIdx) => 
      chunkIdx % 2 === 1 
        ? <strong key={chunkIdx} className="text-white font-semibold">{chunk}</strong>
        : chunk
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 py-8 md:py-16 text-left"
    >
      {/* Dynamic Title */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
          {t.expTitle || 'Work Experience & Projects'}
        </h2>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          {t.expSubtitle || 'Click on each milestone to view deep technical solutions and contributions.'}
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-nebula-purple mt-2 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Timeline List (1/3 width) */}
        <div className="lg:col-span-5 space-y-4">
          {experiences.map((exp) => {
            const isSelected = selectedExpId === exp.id;
            const glowBorder = isSelected 
              ? exp.color === 'purple' ? 'border-nebula-purple shadow-[0_0_15px_rgba(138,43,226,0.2)]'
                : exp.color === 'cyan' ? 'border-cyber-cyan shadow-[0_0_15px_rgba(0,242,254,0.2)]'
                : 'border-neon-pink shadow-[0_0_15px_rgba(236,72,153,0.2)]'
              : 'border-white/5';

            return (
              <div
                key={exp.id}
                onClick={() => setSelectedExpId(exp.id)}
                className={`group p-5 rounded-xl glass-effect border transition-all duration-300 cursor-pointer hover:bg-white/5 relative ${glowBorder}`}
              >
                {/* Timeline connector visual dot */}
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 rounded-r-md transition-all duration-300 ${
                  isSelected 
                    ? exp.color === 'purple' ? 'bg-nebula-purple' 
                      : exp.color === 'cyan' ? 'bg-cyber-cyan' 
                      : 'bg-neon-pink'
                    : 'bg-transparent group-hover:bg-white/20'
                }`} />
                
                <div className="pl-2 space-y-1.5">
                  <div className="flex justify-between items-center gap-2">
                    <span className="text-xs font-mono font-bold text-gray-400 flex items-center gap-1">
                      <Calendar size={12} /> {exp.duration}
                    </span>
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
                      exp.color === 'purple' ? 'bg-nebula-purple/10 text-nebula-purple border border-nebula-purple/30'
                        : exp.color === 'cyan' ? 'bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/30'
                        : 'bg-neon-pink/10 text-neon-pink border border-neon-pink/30'
                    }`}>
                      {exp.location ? exp.location.split(' ')[0] : 'Remote'}
                    </span>
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300">
                    {exp.role}
                  </h3>

                  <p className="text-sm font-semibold text-gray-300 flex items-center gap-1">
                    <Building2 size={14} className="text-gray-400" /> {exp.company}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Dynamic Deep Details Display Card (2/3 width) */}
        <div className="lg:col-span-7 h-full">
          <AnimatePresence mode="wait">
            {activeExp && (
              <motion.div
                key={activeExp.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full"
              >
                <GlowCard 
                  glowColor={activeExp.color} 
                  className="h-full border border-white/10 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Title & Info */}
                    <div className="border-b border-white/5 pb-4 space-y-2">
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                        {activeExp.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs font-semibold text-gray-400">
                        <span className="flex items-center gap-1 text-cyber-cyan">
                          <Building2 size={14} /> {activeExp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {activeExp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {activeExp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Summary paragraph */}
                    <p className="text-gray-300 text-sm leading-relaxed font-medium">
                      {activeExp.summary}
                    </p>

                    {/* Key Contributions & Solutions */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-bold tracking-wider text-white uppercase font-display flex items-center gap-1.5">
                        <Award size={16} className="text-cyber-cyan" /> {t.expSolutionsTitle || 'Key Solutions & Contributions:'}
                      </h4>
                      <ul className="space-y-2.5">
                        {activeExp.bullets && activeExp.bullets.map((bullet, idx) => (
                          <motion.li 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx} 
                            className="flex items-start gap-2.5 text-gray-400 text-sm leading-relaxed"
                          >
                            <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${
                              activeExp.color === 'purple' ? 'text-nebula-purple'
                                : activeExp.color === 'cyan' ? 'text-cyber-cyan'
                                : 'text-neon-pink'
                            }`} />
                            <span>{renderTextWithBold(bullet)}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Applied Technologies Tech Badges */}
                  <div className="mt-8 pt-4 border-t border-white/5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                      {t.expTechLabel || 'Applied Technologies:'}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeExp.skills && activeExp.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-semibold font-mono px-2.5 py-1 rounded bg-white/5 border border-white/5 text-gray-300 hover:border-cyber-cyan/30 hover:text-cyber-cyan transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </GlowCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </motion.div>
  );
};

export default Experience;