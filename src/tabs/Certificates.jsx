import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Database, Share2, Layers, Cpu, CheckSquare } from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Certificates = () => {
  const certs = [
    {
      id: 1,
      title: 'Salesforce Certified Data Architect',
      subtitle: 'Kiến trúc sư dữ liệu chuyên sâu',
      badgeColor: 'cyan',
      icon: Database,
      validationId: 'SEC-DATA-88392',
      description: 'Chứng minh năng lực thiết kế mô hình dữ liệu quy mô lớn (Large Data Volumes), xử lý phân cấp chia sẻ bảo mật dữ liệu phức tạp, quản lý vòng đời và lưu trữ lâu dài tránh hiện tượng Data Skew.',
      keyCapabilities: [
        'Thiết kế kiến trúc lưu trữ dữ liệu quy mô lớn (LDV).',
        'Giải pháp tối ưu hóa tốc độ truy vấn & tránh Lock bảng.',
        'Xây dựng chiến lược lưu trữ (Archiving & Purging).',
        'Quản lý chất lượng dữ liệu và đồng bộ hóa Master Data.'
      ]
    },
    {
      id: 2,
      title: 'Salesforce Certified Experience Cloud Consultant',
      subtitle: 'Chuyên gia tư vấn cổng thông tin đối tác',
      badgeColor: 'purple',
      icon: Share2,
      validationId: 'SEC-EXP-28391',
      description: 'Bảo chứng năng lực thiết kế và triển khai cổng thông tin (Portals) bảo mật cho đối tác, khách hàng, tối ưu trải nghiệm người dùng (UX/UI) và tích hợp các quy trình nghiệp vụ LWC mượt mà.',
      keyCapabilities: [
        'Cấu hình cổng thông tin bảo mật cho khách hàng (Portals).',
        'Phân quyền đối tác và bảo mật tài khoản bên ngoài.',
        'Tối ưu hóa giao diện đa thiết bị sử dụng Lightning Templates.',
        'Tích hợp LWC và quy trình duyệt tự động (Approval Process).'
      ]
    },
    {
      id: 3,
      title: 'Salesforce Certified Application Architect',
      subtitle: 'Kiến trúc sư ứng dụng cấp cao',
      badgeColor: 'pink',
      icon: Layers,
      validationId: 'SEC-APP-99831',
      description: 'Đánh giá chuyên sâu về thiết kế giải pháp tổng thể trong Salesforce Org, đảm bảo tuân thủ các quy tắc bảo mật chuẩn quốc tế, tận dụng tối đa tính năng Standard kết hợp Custom Code thông minh.',
      keyCapabilities: [
        'Thiết kế cấu trúc Org phân cấp vững chắc.',
        'Thiết lập mô hình bảo mật chuẩn quốc tế (Role Hierarchy, Sharing).',
        'Tận dụng tự động hóa declarative kết hợp Apex.',
        'Quản lý kiến trúc ứng dụng bền vững, dễ bảo trì.'
      ]
    },
    {
      id: 4,
      title: 'Salesforce Certified Integration Architecture Designer',
      subtitle: 'Kiến trúc sư tích hợp hệ thống',
      badgeColor: 'emerald',
      icon: Cpu,
      validationId: 'SEC-INT-33928',
      description: 'Bảo chứng kiến thức chuyên sâu về thiết kế tích hợp bảo mật, đáng tin cậy giữa Salesforce với các hệ thống doanh nghiệp (AWS, Azure, ERP, SAP) sử dụng các mẫu tích hợp tối ưu.',
      keyCapabilities: [
        'Thiết kế hệ thống tích hợp API thời gian thực và bất đồng bộ.',
        'Giải pháp ký chữ ký điện tử AWS Signature v4 và OAuth JWT.',
        'Xử lý lỗi truyền tin cậy (Event-driven with Pub/Sub API).',
        'Tối ưu hóa băng thông truyền dữ liệu lớn giữa các Cloud.'
      ]
    }
  ];

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
          Chứng Chỉ & Năng Lực Kiến Trúc
        </h2>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">Các chứng chỉ Salesforce Architect-level danh giá bảo chứng cho năng lực thiết kế hệ thống cấp doanh nghiệp.</p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-nebula-purple mt-2 rounded-full" />
      </div>

      {/* Grid of Tech Passports */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certs.map((cert, idx) => {
          const Icon = cert.icon;
          
          // Select colors based on badgeColor
          const colorStyles = {
            cyan: 'from-cyber-cyan/20 to-cyber-blue/10 border-cyber-cyan/30 text-cyber-cyan shadow-[0_0_20px_rgba(0,242,254,0.05)]',
            purple: 'from-nebula-purple/20 to-nebula-pink/10 border-nebula-purple/30 text-nebula-purple shadow-[0_0_20px_rgba(138,43,226,0.05)]',
            pink: 'from-neon-pink/20 to-rose-500/10 border-neon-pink/30 text-neon-pink shadow-[0_0_20px_rgba(236,72,153,0.05)]',
            emerald: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.05)]'
          };
          
          const glowClass = cert.badgeColor === 'cyan' ? 'text-glow-cyan'
            : cert.badgeColor === 'purple' ? 'text-glow-purple'
            : '';

          return (
            <GlowCard
              key={cert.id}
              glowColor={cert.badgeColor}
              delay={idx * 0.1}
              className="flex flex-col justify-between border border-white/5 h-full relative group overflow-hidden"
            >
              {/* Holographic background glow effect on card hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out pointer-events-none" />

              <div className="space-y-6">
                
                {/* Card Header (Technology Passport design) */}
                <div className="flex items-start justify-between border-b border-white/5 pb-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">
                      SALESFORCE ARCHITECT CREDENTIAL
                    </span>
                    <h3 className="text-lg sm:text-xl font-extrabold text-white leading-tight font-display">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-400 font-semibold">{cert.subtitle}</p>
                  </div>
                  
                  {/* Badge Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colorStyles[cert.badgeColor]} flex items-center justify-center shrink-0 border`}>
                    <Icon size={24} />
                  </div>
                </div>

                {/* Main Body */}
                <div className="space-y-4">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Core capabilities verified */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">Năng lực bảo chứng:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {cert.keyCapabilities.map((cap, capIdx) => (
                        <div key={capIdx} className="flex items-start gap-2 text-xs text-gray-400">
                          <CheckSquare size={14} className="shrink-0 mt-0.5 text-cyber-cyan" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Passport Footer stamp */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500 uppercase">
                <span className="flex items-center gap-1">
                  <ShieldCheck size={12} className="text-cyber-cyan" /> Verified Credential
                </span>
                <span>ID: {cert.validationId}</span>
              </div>

            </GlowCard>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Certificates;
