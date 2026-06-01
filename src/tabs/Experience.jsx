import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Building2, MapPin, CheckCircle2, ChevronRight, Award } from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Experience = () => {
  const [selectedExpId, setSelectedExpId] = useState(1);

  const experiences = [
    {
      id: 1,
      role: 'Salesforce Architect / Developer',
      company: 'Capgemini Singapore',
      duration: '2023 - Hiện tại',
      location: 'Singapore (Remote / Hybrid)',
      color: 'purple',
      summary: 'Tập trung tư vấn kiến trúc, triển khai hệ thống Salesforce toàn diện quy mô lớn cho các tập đoàn đa quốc gia.',
      bullets: [
        'Tư vấn thiết kế kiến trúc hệ thống Salesforce (Multi-org Strategy) đảm bảo tính sẵn sàng cao và khả năng phục hồi dữ liệu.',
        'Thiết kế mô hình bảo mật cấp doanh nghiệp (Enterprise Security Sharing Rules), phân chia nhóm quyền phức tạp.',
        'Tối ưu hóa các tiến trình xử lý bất đồng bộ Apex (Batch, Queueable, Future) giảm 50% thời gian xử lý giao dịch.',
        'Hợp tác chặt chẽ với các Product Owners quốc tế để chuyển hóa yêu cầu nghiệp vụ phức tạp thành kiến trúc kỹ thuật tối giản.'
      ],
      skills: ['Salesforce Architecture', 'Enterprise Security', 'Apex Optimization', 'Multi-Org Strategy', 'Integration Patterns']
    },
    {
      id: 2,
      role: 'Tech Lead / Senior Developer',
      company: 'ORS Building Consultants (Ireland)',
      duration: '2021 - 2023',
      location: 'Dublin, Ireland (Remote)',
      color: 'cyan',
      summary: 'Dẫn dắt kỹ thuật phát triển các giải pháp tài chính và tự động hóa vận hành chuyên sâu trong hệ sinh thái Salesforce.',
      bullets: [
        'Thiết kế và phát triển phân hệ **Dự báo Tài chính Phức tạp (Financial Forecasting Module)** bằng LWC, cho phép tự động tính toán dòng tiền đa chiều theo thời gian thực.',
        'Xây dựng hệ thống **Tự động Import & Xử lý Hóa đơn (Invoice Processing Engine)** bằng Apex và LWC, giảm 80% thao tác thủ công của kế toán viên.',
        'Tối ưu hóa tốc độ tải trang Salesforce Lightning Record Pages từ 6.5 giây xuống dưới 2.2 giây nhờ cấu hình component thông minh.',
        'Đào tạo và dẫn dắt đội ngũ 4 lập trình viên triển khai thành công hệ thống đúng tiến độ.'
      ],
      skills: ['Tech Lead', 'Lightning Web Components (LWC)', 'Financial Forecasting', 'Process Automation', 'Performance Tuning']
    },
    {
      id: 3,
      role: 'Fullstack Developer',
      company: 'Animate Project (Japan)',
      duration: '2020 - 2021',
      location: 'Tokyo, Nhật Bản (Remote)',
      color: 'pink',
      summary: 'Phát triển các tính năng Fullstack phức tạp và xây dựng hạ tầng lưu trữ kết hợp Salesforce - AWS Cloud.',
      bullets: [
        'Xây dựng tính năng quản lý phân cấp **Cây Phòng Ban (Department Tree)** chuyên sâu bằng React và LWC hỗ trợ thao tác kéo thả động.',
        'Phát triển bộ soạn thảo **Custom Email Editor** mạnh mẽ, cho phép kéo thả template HTML phức tạp trực tiếp trên Salesforce Cloud.',
        'Tích hợp hạ tầng lưu trữ **AWS S3** bảo mật cao bằng kỹ thuật tự ký request sử dụng **AWS Signature Version 4** trực tiếp từ Apex Apex callouts.',
        'Viết các dịch vụ serverless trên AWS Lambda và lưu trữ dữ liệu phi cấu trúc trên DynamoDB.'
      ],
      skills: ['Ruby on Rails', 'AWS S3 Integration', 'AWS Signature v4', 'AWS Lambda', 'DynamoDB', 'Drag & Drop Editors']
    }
  ];

  const activeExp = experiences.find(e => e.id === selectedExpId) || experiences[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="space-y-12 py-8 md:py-16 text-left"
    >
      {/* Title */}
      <div className="text-left">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
          Kinh Nghiệm Làm Việc & Dự Án
        </h2>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">Click vào từng cột mốc để xem chi tiết các giải pháp kỹ thuật cụ thể đã triển khai.</p>
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

            const activeText = isSelected 
              ? exp.color === 'purple' ? 'text-nebula-purple'
                : exp.color === 'cyan' ? 'text-cyber-cyan'
                : 'text-neon-pink'
              : 'text-gray-400';

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
                      {exp.location.split(' ')[0]}
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
                      <Award size={16} className="text-cyber-cyan" /> Giải Pháp & Đóng Góp Chính:
                    </h4>
                    <ul className="space-y-2.5">
                      {activeExp.bullets.map((bullet, idx) => (
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
                          <span>{bullet}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="mt-8 pt-4 border-t border-white/5">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Công nghệ áp dụng:</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeExp.skills.map((skill, idx) => (
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
          </AnimatePresence>
        </div>

      </div>

    </motion.div>
  );
};

export default Experience;
