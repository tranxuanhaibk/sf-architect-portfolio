import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, X, AlertCircle, FileCode } from 'lucide-react';
import GlowCard from '../components/GlowCard';
import { useLanguage } from '../context/LanguageContext';

const Blog = () => {
  const [activePostId, setActivePostId] = useState(null);
  
  const { language, translations } = useLanguage();
  const t = translations && translations[language] ? translations[language] : {};
  const posts = t.postsList || [];

  const parseMarkdownContent = (text) => {
    if (!text) return null;
    const tokens = text.split(/(\`\`\`[\s\S]*?\`\`\`)/g);
    
    return tokens.map((token, index) => {
      if (token.startsWith('\`\`\`')) {
        const lines = token.split('\n');
        const lang = lines[0].replace('\`\`\`', '').trim() || 'APEX/SOQL';
        const codeLines = lines.slice(1, lines.length - 1).join('\n');
        return (
          <div key={index} className="relative rounded-lg overflow-hidden bg-space-black border border-white/10 p-4 font-mono text-xs text-cyber-cyan leading-relaxed my-4">
            <div className="absolute top-2 right-3 text-[10px] text-gray-500 uppercase flex items-center gap-1">
              <FileCode size={12} className="pointer-events-none" /> {lang.toUpperCase()}
            </div>
            <pre className="overflow-x-auto whitespace-pre">{codeLines}</pre>
          </div>
        );
      }

      return token.split('\n\n').map((paragraph, pIdx) => {
        const trimmed = paragraph.trim();
        if (!trimmed) return null;

        if (trimmed.startsWith('### ')) {
          return (
            <h3 key={`p-${pIdx}`} className="text-xl sm:text-2xl font-bold text-white pt-6 pb-2 font-display">
              {trimmed.replace('### ', '')}
            </h3>
          );
        }

        if (trimmed.startsWith('#### ')) {
          return (
            <h4 key={`p-${pIdx}`} className="text-lg font-bold text-cyber-cyan pt-4 pb-1 font-display">
              {trimmed.replace('#### ', '')}
            </h4>
          );
        }

        if (trimmed.startsWith('> [!')) {
          const match = trimmed.match(/^>\s*\[!(IMPORTANT|TIP|WARNING)\]\n([\s\S]*)$/i);
          if (match) {
            const type = match[1].toUpperCase();
            const alertText = match[2].replace(/^>\s*/gm, '');
            
            const alertTitle = type === 'IMPORTANT' ? (t.blogLabelImportant || 'IMPORTANT') : type === 'TIP' ? (t.blogLabelTip || 'OPTIMIZATION TIP') : (t.blogLabelWarning || 'WARNING');
            const alertColor = type === 'IMPORTANT' ? 'border-l-nebula-purple bg-nebula-purple/5 text-nebula-purple' 
              : type === 'TIP' ? 'border-l-cyber-cyan bg-cyber-cyan/5 text-cyber-cyan' 
              : 'border-l-neon-pink bg-neon-pink/5 text-neon-pink';

            return (
              <div key={`p-${pIdx}`} className={`border-l-4 p-4 rounded-r-lg space-y-1 my-4 ${alertColor}`}>
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  <AlertCircle size={14} className="pointer-events-none" /> {alertTitle}
                </div>
                <p className="text-xs sm:text-sm text-gray-300 italic whitespace-pre-line">{alertText}</p>
              </div>
            );
          }
        }

        if (trimmed.startsWith('- ') || /^\d+\.\s/.test(trimmed)) {
          return (
            <ul key={`p-${pIdx}`} className="list-disc pl-6 space-y-2 text-gray-300 my-3">
              {trimmed.split('\n').map((item, itemIdx) => {
                const itemContent = item.replace(/^[-\d\.\s]+/, '');
                return (
                  <li key={itemIdx}>
                    {renderTextWithBold(itemContent)}
                  </li>
                );
              })}
            </ul>
          );
        }

        return (
          <p key={`p-${pIdx}`} className="text-gray-300 text-sm sm:text-base leading-relaxed my-3">
            {renderTextWithBold(trimmed)}
          </p>
        );
      });
    });
  };

  const renderTextWithBold = (text) => {
    return text.split('**').map((chunk, chunkIdx) => 
      chunkIdx % 2 === 1 
        ? <strong key={chunkIdx} className="text-white font-semibold">{chunk}</strong>
        : chunk
    );
  };

  // Tìm kiếm linh hoạt, chấp nhận cả so sánh chuỗi lẫn số bằng toán tử ==
  const activePost = posts.find(p => p.id == activePostId);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 py-8 md:py-16 text-left relative"
    >
      {/* Title */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
          {t.blogSectionTitle || 'Salesforce Insights & Case Studies'}
        </h2>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">
          {t.blogSectionDesc || 'In-depth technical writeups and architectural case studies.'}
        </p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-nebula-purple mt-2 rounded-full" />
      </div>

      {/* Grid of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <GlowCard
            key={post.id}
            glowColor={post.color}
            delay={idx * 0.1}
            className="border border-white/5 h-full relative"
          >
            {/* Tạo một phân vùng tương tác bao phủ z-index cao hẳn lên trên */}
            <div 
              onClick={() => {
                console.log("Đang click chọn bài viết ID:", post.id);
                setActivePostId(post.id);
              }}
              className="absolute inset-0 z-30 cursor-pointer rounded-xl"
            />

            <div className="flex flex-col justify-between h-full p-6 relative z-10 min-h-[300px]">
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs">
                  <span className={`px-2.5 py-0.5 rounded-full font-semibold border ${
                    post.color === 'pink' ? 'bg-neon-pink/10 text-neon-pink border-neon-pink/20'
                      : post.color === 'purple' ? 'bg-nebula-purple/10 text-nebula-purple border-nebula-purple/20'
                      : 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20'
                  }`}>
                    {post.category}
                  </span>
                  
                  <span className="text-gray-500 font-medium flex items-center gap-1">
                    <Clock size={12} className="pointer-events-none" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display line-clamp-3">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                  {post.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyber-cyan">
                <span>{t.blogReadMoreLabel || 'Read full article'}</span>
                <ArrowRight size={14} className="pointer-events-none" />
              </div>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Article Drawer Modal */}
      <AnimatePresence>
        {activePostId !== null && activePostId !== undefined && activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-md">
            {/* Nút đóng vùng ngoài */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActivePostId(null)} />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              className="relative w-full max-w-3xl h-full bg-[#0b0f19] border-l border-white/10 shadow-2xl overflow-y-auto flex flex-col z-50"
            >
              <div className="sticky top-0 z-10 bg-[#0b0f19]/90 backdrop-blur-md border-b border-white/5 p-4 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={14} className="pointer-events-none" /> {t.blogDrawerHeader || 'Salesforce Insights'}
                </span>
                <button
                  onClick={() => setActivePostId(null)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200 cursor-pointer"
                >
                  <X size={18} className="pointer-events-none" />
                </button>
              </div>

              <div className="p-6 md:p-10 space-y-6 flex-1 text-left">
                <div className="space-y-4 border-b border-white/10 pb-6">
                  <div className="flex flex-wrap gap-3 items-center text-xs text-gray-400">
                    <span className="px-2.5 py-0.5 rounded-full font-semibold border bg-white/5 text-gray-300 border-white/10">
                      {activePost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="pointer-events-none" /> {activePost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} className="pointer-events-none" /> {activePost.readTime}
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight font-display">
                    {activePost.title}
                  </h1>
                </div>

                <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
                  {parseMarkdownContent(activePost.content)}
                </div>
              </div>

              <div className="sticky bottom-0 bg-[#0b0f19] p-4 text-center text-xs text-gray-500 border-t border-white/5">
                {t.blogFooterStamp || 'Technical Insights on Salesforce & AWS Integration.'}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Blog;