import React from 'react';
import { Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language, translations } = useLanguage();
  const t = translations && translations[language] ? translations[language] : {};

  return (
    <footer className="w-full bg-space-black/80 border-t border-white/5 py-8 px-4 md:px-8 mt-16 glass-effect">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm text-gray-400">
        
        {/* Col 1: Bio Branding */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-white text-base">Trần Xuân Hải</h4>
          <p className="text-gray-400 leading-relaxed text-xs">
            {t.footerBio || 'Fullstack Salesforce Architect & Senior Developer. Specialized in designing and building scalable enterprise Salesforce ecosystems with secure AWS Cloud integrations.'}
          </p>
        </div>

        {/* Col 2: Direct Contact */}
        <div className="space-y-2">
          <h4 className="font-display font-bold text-white text-base">
            {t.footerContactTitle || 'Contact Information'}
          </h4>
          <div className="space-y-1.5 text-xs">
            <a href="mailto:tranxuanhai.bkdn@gmail.com" className="flex items-center gap-2 hover:text-cyber-cyan transition-colors">
              <Mail size={14} /> tranxuanhai.bkdn@gmail.com
            </a>
            <a href="tel:+84865787769" className="flex items-center gap-2 hover:text-cyber-cyan transition-colors">
              <Phone size={14} /> +84 (0) 865 787 769
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={14} /> {t.location || 'Da Nang City, Viet Nam'}
            </div>
          </div>
        </div>

        {/* Col 3: External Links / Resume */}
        <div className="space-y-3">
          <h4 className="font-display font-bold text-white text-base">
            {t.footerResourcesTitle || 'Resources'}
          </h4>
          <div className="flex flex-col gap-2 text-xs">
            {/* Premium interactive Resume Download Link */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert(t.footerResumeAlert || 'Resume PDF is being generated. Demo download is ready in the official release.');
              }}
              className="inline-flex items-center gap-2 text-cyber-cyan hover:text-white transition-colors duration-300 font-semibold cursor-pointer w-fit"
            >
              <Download size={14} /> {t.footerDownloadResume || 'Download Resume PDF (EN)'}
            </a>
            
            <a
              href="https://linkedin.com/in/tranxuanhai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cyber-cyan transition-colors w-fit"
            >
              LinkedIn Profile <ExternalLink size={12} />
            </a>

            <a
              href="https://github.com/tranxuanhai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-cyber-cyan transition-colors w-fit"
            >
              GitHub Codebase <ExternalLink size={12} />
            </a>
          </div>
        </div>

      </div>

      {/* Legal copyright */}
      <div className="max-w-6xl mx-auto border-t border-white/5 mt-8 pt-4 text-center text-xs text-gray-600 font-mono">
        {t.footerCopyright || `© 2026 Tran Xuan Hai. All rights reserved. Architected with React, Tailwind CSS v4 & Framer Motion.`}
      </div>
    </footer>
  );
};

export default Footer;