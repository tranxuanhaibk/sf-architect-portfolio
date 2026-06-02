import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CanvasStars from './components/CanvasStars';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; 
import About from './tabs/About';
import Experience from './tabs/Experience';
import Certificates from './tabs/Certificates';
import Blog from './tabs/Blog';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // Import thêm HelmetProvider để bọc ngoài cùng nếu index.js chưa bọc
import { LanguageProvider, useLanguage } from './context/LanguageContext'; // Import thêm useLanguage

// Sub-component xử lý SEO Meta động theo ngôn ngữ
function SEOMeta() {
  const { language } = useLanguage();

  return (
    <Helmet>
      {/* Tiêu đề hiển thị trên thanh tab Google - Chứa từ khóa mục tiêu */}
      <title>
        {language === 'en' 
          ? 'Senior Salesforce Developer & Architect Freelancer | Hai Tran Xuan' 
          : 'Chuyên Gia Tối Ưu & Kiến Trúc Salesforce Freelance | Trần Xuân Hải'}
      </title>
      
      {/* Đoạn mô tả ngắn dưới link tìm kiếm (Dưới 160 ký tự) */}
      <meta 
        name="description" 
        content={
          language === 'en'
            ? 'Senior Fullstack Salesforce Developer & Architect with 6+ years of experience. Specializing in enterprise architecture, LWC, Apex optimization, and AWS integrations. Available for global freelance contracts.'
            : 'Chuyên gia Kiến trúc & Lập trình Salesforce Fullstack với hơn 6 năm kinh nghiệm. Chuyên sâu về tối ưu hệ thống, LWC, Apex và tích hợp AWS đám mây. Sẵn sàng nhận dự án freelance toàn cầu.'
        } 
      />
      
      {/* Các từ khóa ngách để bot Google quét định danh lĩnh vực */}
      <meta 
        name="keywords" 
        content="Salesforce freelancer, Salesforce Architect, Senior Salesforce Developer, Freelance Apex LWC, remote Salesforce developer, tuyển Salesforce freelancer, kiến trúc sư Salesforce" 
      />
      
      {/* Thẻ Open Graph cấu hình hiển thị khi chia sẻ link lên LinkedIn/Facebook */}
      <meta property="og:title" content="Hai Tran Xuan | Senior Salesforce Developer & Architect Freelancer" />
      <meta property="og:description" content="Looking for a Salesforce Specialist? Check out my live architectural showcase and project portfolio." />
      <meta property="og:image" content="/myAvatar.jpeg" /> {/* Trỏ trực tiếp đến ảnh chân dung trong folder public */}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

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
    <HelmetProvider> {/* Đảm bảo có HelmetProvider bọc ngoài để tránh lỗi runtime của react-helmet */}
      <LanguageProvider>
        
        {/* KÍCH HOẠT SEO META ĐỘNG TẠI ĐÂY (NẰM TRONG PROVIDER) */}
        <SEOMeta />

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

          {/* 5. Space Glass Footer (Đã bọc trong Provider, dịch thuật chuẩn xác) */}
          <Footer />

        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;