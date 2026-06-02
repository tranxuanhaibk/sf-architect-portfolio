import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import { useLanguage } from '../context/LanguageContext';

const Certificates = () => {
  // Lấy ngôn ngữ và bộ dịch từ LanguageContext
  const { language, translations } = useLanguage();
  const t = translations && translations[language] ? translations[language] : {};

  // Lấy mảng chứng chỉ chính xác từ certsList trong Context
  const certificates = t.certsList || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 py-8 md:py-16 text-left"
    >
      {/* Title section */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
          {t.certsTitle || 'Architectural Credentials'}
        </h2>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          {t.certsSubtitle || 'Salesforce architect-level and consultant credentials validating enterprise system designs.'}
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-nebula-purple mt-2 rounded-full" />
      </div>

      {/* Grid Layout of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates.map((cert, index) => (
          <GlowCard
            key={cert.id}
            glowColor={cert.badgeColor}
            delay={index * 0.1}
            className="flex flex-col justify-between border border-white/5 h-full p-6 space-y-6"
          >
            <div className="space-y-4">
              {/* Badge info header */}
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white leading-tight font-display">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    {cert.subtitle}
                  </p>
                </div>
                <div className={`p-2 rounded-lg shrink-0 border ${
                  cert.badgeColor === 'cyan' ? 'bg-cyber-cyan/10 border-cyber-cyan/30 text-cyber-cyan'
                    : cert.badgeColor === 'purple' ? 'bg-nebula-purple/10 border-nebula-purple/30 text-nebula-purple'
                    : cert.badgeColor === 'pink' ? 'bg-neon-pink/10 border-neon-pink/30 text-neon-pink'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                }`}>
                  <Award size={20} />
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>

              {/* Capabilities List - Lấy trực tiếp từ mảng keyCapabilities trong phần tử */}
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white/70 flex items-center gap-1.5">
                  <ShieldCheck size={13} className="text-cyber-cyan" />
                  {t.certCapabilitiesHeader || 'Core Validated Capabilities:'}
                </h4>
                <ul className="grid grid-cols-1 gap-1.5 pl-1">
                  {cert.keyCapabilities && cert.keyCapabilities.map((capability, capIdx) => (
                    <li key={capIdx} className="text-xs text-gray-300 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                      <span>{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verification Footer Link */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-gray-500 font-mono">ID: {cert.validationId}</span>
              <a
                href="https://trailhead.salesforce.com/en/credentials/verification/"
                target="_blank"
                rel="noreferrer"
                className="text-cyber-cyan hover:text-white font-semibold flex items-center gap-1 transition-colors duration-200"
              >
                {t.certValidation || 'Verified Credential'}
                <ExternalLink size={12} />
              </a>
            </div>
          </GlowCard>
        ))}
      </div>
    </motion.div>
  );
};

export default Certificates;