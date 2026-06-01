import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CanvasStars from './components/CanvasStars';
import Navbar from './components/Navbar';
import About from './tabs/About';
import Experience from './tabs/Experience';
import Certificates from './tabs/Certificates';
import Blog from './tabs/Blog';
import { Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  // Page Transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
      y: 15,
      scale: 0.98,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      scale: 0.98,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'about':
        return <About setActiveTab={setActiveTab} />;
      case 'experience':
        return <Experience />;
      case 'certificates':
        return <Certificates />;
      case 'blog':
        return <Blog />;
      default:
        return <About setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="relative min-h-screen text-gray-100 flex flex-col justify-between selection:bg-cyber-cyan/35 selection:text-white">
      
      {/* 1. Immersive Interactive Starry Canvas Background */}
      <CanvasStars />

      {/* 2. Floating Space Nebula Ambient Glows */}
      <div className="glow-orb w-[400px] h-[400px] top-[10%] left-[-100px] bg-cyber-cyan/10 animate-float" />
      <div className="glow-orb w-[500px] h-[500px] bottom-[15%] right-[-150px] bg-nebula-purple/10 animate-pulse-slow" />
      <div className="glow-orb w-[300px] h-[300px] top-[50%] left-[45%] bg-neon-pink/5 animate-float" style={{ animationDelay: '-3s' }} />

      {/* 3. Glassmorphic Fixed Navigation Bar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 4. Main Tab Container with Acceleration Transitions */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 py-8 w-full flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full"
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 5. Space Glass Footer */}
      <footer className="w-full bg-space-black/80 border-t border-white/5 py-8 px-4 md:px-8 mt-16 glass-effect">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-sm text-gray-400">
          
          {/* Col 1: Bio Branding */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base">Trần Xuân Hải</h4>
            <p className="text-gray-400 leading-relaxed text-xs">
              Fullstack Salesforce Architect & Senior Developer. Chuyên thiết kế và phát triển hệ sinh thái Salesforce quy mô lớn tích hợp điện toán đám mây Cloud bảo mật cao.
            </p>
          </div>

          {/* Col 2: Direct Contact */}
          <div className="space-y-2">
            <h4 className="font-display font-bold text-white text-base">Thông Tin Liên Hệ</h4>
            <div className="space-y-1.5 text-xs">
              <a href="mailto:tranxuanhai@outlook.com" className="flex items-center gap-2 hover:text-cyber-cyan transition-colors">
                <Mail size={14} /> tranxuanhai.bkdn@gmail.com
              </a>
              <a href="tel:+8490000000" className="flex items-center gap-2 hover:text-cyber-cyan transition-colors">
                <Phone size={14} /> +84 (0) 865 787 769
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={14} /> Da Nang City, Vietnam
              </div>
            </div>
          </div>

          {/* Col 3: External Links / Resume */}
          <div className="space-y-3">
            <h4 className="font-display font-bold text-white text-base">Tài Nguyên</h4>
            <div className="flex flex-col gap-2 text-xs">
              {/* Premium interactive Resume Download Link */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Resume PDF đang được tạo. Tính năng demo sẵn sàng tải về trong phiên bản chính thức.');
                }}
                className="inline-flex items-center gap-2 text-cyber-cyan hover:text-white transition-colors duration-300 font-semibold cursor-pointer w-fit"
              >
                <Download size={14} /> Tải Resume PDF (English)
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
          © {new Date().getFullYear()} Tran Xuan Hai. All rights reserved. Architected with React, Tailwind CSS v4 & Framer Motion.
        </div>
      </footer>

    </div>
  );
}

export default App;
