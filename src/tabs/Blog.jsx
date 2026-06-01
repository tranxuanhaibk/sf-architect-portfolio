import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Calendar, Clock, ArrowRight, X, AlertCircle, FileCode } from 'lucide-react';
import GlowCard from '../components/GlowCard';

const Blog = () => {
  const [activePostId, setActivePostId] = useState(null);

  const posts = [
    {
      id: 1,
      title: 'Optimizing Salesforce Apex Callouts & Secure File Uploads to AWS S3 using Signature Version 4',
      date: '15 Tháng 5, 2026',
      readTime: '8 phút đọc',
      category: 'AWS & Integration',
      color: 'pink',
      summary: 'Làm thế nào để ký trực tiếp và bảo mật request tải tệp tin lên AWS S3 bằng Apex mà không thông qua server trung gian, tránh Governor Limits và rò rỉ API credentials.',
      content: `### Giới thiệu bài toán
Trong các hệ thống doanh nghiệp lớn, việc lưu trữ tệp tin trực tiếp trên Salesforce thường vấp phải giới hạn về dung lượng lưu trữ (File Storage Limit) cực kỳ đắt đỏ. Phương án tối ưu là chuyển hướng lưu trữ sang AWS S3. Tuy nhiên, việc upload tệp tin cần đảm bảo bảo mật tuyệt đối, không lộ API Access Keys và không làm nghẽn Heap Size của Salesforce Apex.

### Giải pháp kỹ thuật: AWS Signature Version 4
Thay vì gửi tệp tin qua một server trung gian (gây trễ và tốn chi phí vận hành), chúng ta có thể thực hiện **tự ký request (Self-signing API Callouts)** trực tiếp từ Apex code thông qua chuẩn **AWS Signature Version 4**.

#### Lợi ích vượt trội:
1. **Zero-Server Middleware:** Salesforce Apex ký trực tiếp và gửi request thẳng lên AWS S3 Endpoint.
2. **Security-First:** Keys được lưu trữ an toàn trong Named Credentials hoặc Custom Metadata Type (được mã hóa), không bao giờ gửi key thô qua internet.
3. **Heap Size Bypass:** Sử dụng LWC để đọc tệp dưới dạng Blob/Binary tại client, sau đó gửi trực tiếp lên S3 qua Pre-signed URL hoặc ký request đầu cuối để gửi file dung lượng lớn không vượt quá 6MB Apex synchronous heap limit.

---

### Các bước triển khai trong Apex

\`\`\`apex
// Minh họa cấu trúc ký AWS Signature v4 trong Apex
public class AWSS3Service {
    public static HttpRequest createS3PutRequest(String bucketName, String fileName, Blob fileBody) {
        String method = 'PUT';
        String service = 's3';
        String region = 'us-east-1';
        String host = bucketName + '.s3.amazonaws.com';
        String endpoint = 'https://' + host + '/' + fileName;
        
        HttpRequest req = new HttpRequest();
        req.setEndpoint(endpoint);
        req.setMethod(method);
        req.setBodyAsBlob(fileBody);
        req.setHeader('Host', host);
        req.setHeader('Content-Type', 'application/octet-stream');
        
        // Tiến hành tạo chữ ký điện tử AWS v4 Signature
        Map<String, String> signedHeaders = AWSv4Signer.sign(
            req, 
            'YOUR_ACCESS_KEY', 
            'YOUR_SECRET_KEY', 
            region, 
            service
        );
        
        for (String key : signedHeaders.keySet()) {
            req.setHeader(key, signedHeaders.get(key));
        }
        
        return req;
    }
}
\`\`\`

> [!IMPORTANT]
> **Lưu ý tối ưu Heap Size:** Đối với các file lớn hơn 3.5MB, hãy tránh xử lý Base64 trong Apex. Thay vào đó, hãy sử dụng **LWC để sinh Pre-signed URL** thông qua Apex, sau đó LWC sẽ thực hiện \`fetch()\` hoặc \`XMLHttpRequest\` đẩy trực tiếp file nhị phân từ browser lên AWS S3.

### Kết luận
Giải pháp tích hợp AWS S3 sử dụng Signature v4 là mảnh ghép hoàn hảo để tối ưu hóa chi phí lưu trữ cho Salesforce Org cấp doanh nghiệp, đảm bảo hiệu năng và tính bảo mật ở mức cao nhất.`
    },
    {
      id: 2,
      title: 'Designing Scalable Data Models in Salesforce: Best Practices from a Data Architect',
      date: '28 Tháng 4, 2026',
      readTime: '6 phút đọc',
      category: 'Data Architecture',
      color: 'purple',
      summary: 'Kỹ thuật thiết kế mô hình dữ liệu chuẩn hóa, quản lý Large Data Volumes (LDV), xử lý hiện tượng Data Skew và tối ưu hóa hiệu năng câu truy vấn SOQL.',
      content: `### Tầm quan trọng của Kiến trúc Dữ liệu
Khi lượng bản ghi của một Object trong Salesforce vượt ngưỡng 5 triệu bản ghi (Large Data Volume - LDV), hệ thống sẽ bắt đầu xuất hiện tình trạng suy giảm hiệu năng rõ rệt: Các trang hiển thị chậm, các trigger chạy timeout, và các câu truy vấn SOQL bị lỗi Governor Limit. Là một Data Architect, việc thiết kế mô hình dữ liệu ban đầu có tính quyết định đến sự sống còn của dự án.

### 1. Giải quyết triệt để Data Skew
**Data Skew** xảy ra khi một bản ghi mẹ (Parent) liên kết với quá nhiều bản ghi con (Child) - thường là trên 10,000 bản ghi con. Điều này dẫn đến khóa bảng (Record Locking) khi hệ thống tính toán lại quyền chia sẻ (Sharing calculation).

#### Các dạng Data Skew phổ biến:
- **Account Skew:** Quá nhiều Contact hoặc Case thuộc về một Account chung (ví dụ Account "Generic Partner").
- **Lookup Skew:** Hàng triệu bản ghi con liên kết lookup tới một bản ghi tham chiếu duy nhất.

#### Kỹ thuật giảm thiểu:
1. **Phân tán dữ liệu:** Phân chia các bản ghi con sang nhiều tài khoản mẹ ảo khác nhau.
2. **Thiết kế Loose-coupling:** Chuyển đổi liên kết Lookup thành text field nếu không thực sự cần tính toàn vẹn tham chiếu ở mức dữ liệu cứng.

---

### 2. Tối ưu hóa truy vấn SOQL với Custom Indexes

Để đảm bảo các câu lệnh SOQL chạy mượt mà trên hàng chục triệu dòng dữ liệu, bộ tối ưu hóa truy vấn (Query Optimizer) của Salesforce cần có các chỉ mục (Indexes) phù hợp.

> [!TIP]
> Các trường như **External ID**, **Unique**, **Primary Key (Id)**, **Name** mặc định được đánh index tự động. Với các trường custom khác thường xuyên xuất hiện trong điều kiện WHERE, hãy yêu cầu Salesforce Support tạo **Custom Index** để tối ưu hóa thời gian quét bảng.

\`\`\`sql
-- Câu truy vấn SOQL tối ưu tận dụng Index
SELECT Id, Name, Status__c, CreatedDate 
FROM Transaction__c 
WHERE External_Partner_Id__c = 'PARTNER_992' 
  AND CreatedDate = TODAY
\`\`\`

### 3. Vòng đời dữ liệu (Data Archiving Strategy)
Không nên giữ toàn bộ dữ liệu lịch sử trong cơ sở dữ liệu hoạt động chính. Hãy xây dựng cơ chế tự động chuyển đổi dữ liệu lịch sử (Older than 2 years) sang **Salesforce Big Objects** hoặc đồng bộ hóa sang **AWS DynamoDB/S3** để tiết kiệm tài nguyên và giữ cho hệ thống luôn chạy với tốc độ cao nhất.`
    },
    {
      id: 3,
      title: 'Building Dynamic LWC Component Trees & Custom Email Editors: Lessons from Enterprise Projects',
      date: '02 Tháng 4, 2026',
      readTime: '10 phút đọc',
      category: 'Front-end & LWC',
      color: 'cyan',
      summary: 'Kinh nghiệm thiết kế cây phòng ban phức tạp với hiệu năng render cao, xây dựng Email Template Builder kéo thả tùy biến và quản lý state trong LWC.',
      content: `### Bối cảnh ứng dụng
Trong dự án triển khai cho thị trường Nhật Bản, tôi được giao nhiệm vụ thiết kế một màn hình quản lý sơ đồ tổ chức phòng ban dạng cây thư mục (Department Tree) có chiều sâu phân cấp lên tới 10 cấp độ, kết hợp với một trình soạn thảo Email Editor kéo thả trực quan. Đây là những thử thách UX/UI cực hạn trong môi trường Salesforce Lightning.

### 1. Tối ưu hóa render cây thư mục động (Dynamic Component Tree)
Khi xây dựng cấu trúc cây lồng nhau sâu (Nested components) trong LWC, nếu sử dụng đệ quy thông thường một cách ngây thơ, trình duyệt sẽ rất dễ bị treo do lượng DOM node khổng lồ được khởi tạo và render liên tục khi người dùng mở rộng/thu gọn các nhánh.

#### Giải pháp tối ưu:
- **Flattened Data Array:** Biến đổi cấu trúc cây sâu thành một mảng phẳng (Flat Array) chứa thông tin \`parentId\` và \`depth\`.
- **Virtual Scrolling / Lazy Loading:** Chỉ render những phòng ban đang được hiển thị trong khung nhìn (Viewport) hoặc chỉ nạp dữ liệu con khi người dùng click nút mở rộng nhánh (On-demand loading).
- **Custom Event Bubbling:** Sử dụng cơ chế phát sự kiện LWC chuẩn (\`bubbles: true, composed: true\`) để truyền thông tin thay đổi sơ đồ cây lên component quản lý trung tâm một cách nhẹ nhàng.

---

### 2. Thiết kế Email Template Builder kéo thả

Bộ soạn thảo Email Template cần cho phép người dùng kéo thả các khối block nội dung (Ảnh, Text, Nút bấm) và tự động sinh ra mã HTML chuẩn hiển thị tốt trên tất cả các trình đọc email phổ biến (Outlook, Gmail).

#### Kiến trúc triển khai:
1. **LWC Canvas Drag & Drop:** Tận dụng HTML5 Drag and Drop API được bọc trong LWC shadow DOM một cách cẩn thận.
2. **State Management:** Quản lý toàn bộ cấu trúc Email dưới dạng cấu trúc dữ liệu JSON trung tâm. Khi người dùng di chuyển block, chúng ta chỉ thay đổi vị trí phần tử trong mảng JSON, sau đó LWC sẽ tự động re-render canvas dựa trên cơ chế phản xạ (Reactive property).
3. **HTML Generator:** Chuyển đổi schema JSON thành bảng HTML dạng table-based (để tương thích tốt nhất với Microsoft Outlook desktop app).

\`\`\`javascript
// Minh họa cấu trúc dữ liệu của Email Template
const emailSchema = [
  { id: 'block_1', type: 'header', content: 'Bản tin Công Nghệ Salesforce' },
  { id: 'block_2', type: 'image', url: 'https://images.unsplash.com/...', alt: 'AWS S3' },
  { id: 'block_3', type: 'paragraph', text: 'Tích hợp AWS S3 giúp giảm 90% chi phí...' }
];
\`\`\`

> [!WARNING]
> **Shadow DOM Limitation:** Hãy cẩn thận khi import các thư viện bên ngoài (như TinyMCE hoặc CKEditor) vào LWC vì cơ chế bảo mật Locker Service / LWS của Salesforce sẽ chặn các thao tác can thiệp trực tiếp vào DOM bên trong Shadow root. Tốt nhất là tự xây dựng editor tối giản bằng LWC nguyên bản hoặc sử dụng \`lightning-input-rich-text\` tích hợp sẵn.`
    }
  ];

  const activePost = posts.find(p => p.id === activePostId);

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
          Chia Sẻ Kiến Thức (Salesforce Insights)
        </h2>
        <p className="text-gray-400 mt-1 text-sm sm:text-base">Các bài viết phân tích giải pháp kỹ thuật chuyên sâu đúc rút từ quá trình triển khai thực tế.</p>
        <div className="h-1 w-20 bg-gradient-to-r from-cyber-cyan to-nebula-purple mt-2 rounded-full" />
      </div>

      {/* Grid of Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post, idx) => (
          <GlowCard
            key={post.id}
            glowColor={post.color}
            delay={idx * 0.1}
            className="flex flex-col justify-between border border-white/5 h-full p-6 cursor-pointer group hover:bg-white/[0.02]"
          >
            <div className="space-y-4">
              {/* Category tag */}
              <div className="flex justify-between items-center text-xs">
                <span className={`px-2.5 py-0.5 rounded-full font-semibold border ${
                  post.color === 'pink' ? 'bg-neon-pink/10 text-neon-pink border-neon-pink/20'
                    : post.color === 'purple' ? 'bg-nebula-purple/10 text-nebula-purple border-nebula-purple/20'
                    : 'bg-cyber-cyan/10 text-cyber-cyan border-cyber-cyan/20'
                }`}>
                  {post.category}
                </span>
                
                <span className="text-gray-500 font-medium flex items-center gap-1">
                  <Clock size={12} /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white group-hover:text-cyber-cyan transition-colors duration-300 line-clamp-3 font-display">
                {post.title}
              </h3>

              {/* Summary */}
              <p className="text-gray-400 text-sm leading-relaxed line-clamp-4">
                {post.summary}
              </p>
            </div>

            {/* Read action */}
            <div 
              onClick={() => setActivePostId(post.id)}
              className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-cyber-cyan group-hover:text-white transition-colors duration-300"
            >
              <span>Đọc bài viết chi tiết</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>

          </GlowCard>
        ))}
      </div>

      {/* Immersive Glassmorphic Article Drawer Modal */}
      <AnimatePresence>
        {activePostId && activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/60 backdrop-blur-sm">
            
            {/* Modal backdrop close area */}
            <div 
              className="absolute inset-0 cursor-pointer" 
              onClick={() => setActivePostId(null)}
            />

            {/* Slide-in glassmorphic panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 26, stiffness: 200 }}
              className="relative w-full max-w-3xl h-full bg-space-dark/95 border-l border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-y-auto glass-effect flex flex-col"
            >
              {/* Header section with cover simulation */}
              <div className="sticky top-0 z-10 glass-nav p-4 flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-cyber-cyan uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={14} /> Salesforce Insights
                </span>
                
                <button
                  onClick={() => setActivePostId(null)}
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300 cursor-pointer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Content Layout */}
              <div className="p-6 md:p-10 space-y-6 flex-1 text-left">
                {/* Meta details */}
                <div className="space-y-4 border-b border-white/10 pb-6">
                  <div className="flex flex-wrap gap-3 items-center text-xs text-gray-400">
                    <span className="px-2.5 py-0.5 rounded-full font-semibold border bg-white/5 text-gray-300 border-white/10">
                      {activePost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {activePost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {activePost.readTime}
                    </span>
                  </div>

                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight font-display">
                    {activePost.title}
                  </h1>
                </div>

                {/* Rendered content */}
                <div className="prose prose-invert max-w-none text-gray-300 text-sm sm:text-base leading-relaxed space-y-6">
                  {/* Since we have pre-defined markup mock posts, we can display them with simple structures or regex parser */}
                  {activePost.content.split('\n\n').map((paragraph, index) => {
                    // Check if it is a heading
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-xl sm:text-2xl font-bold text-white pt-4 font-display">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith('#### ')) {
                      return (
                        <h4 key={index} className="text-lg font-bold text-cyber-cyan pt-2 font-display">
                          {paragraph.replace('#### ', '')}
                        </h4>
                      );
                    }
                    if (paragraph.startsWith('- ') || paragraph.startsWith('1. ')) {
                      return (
                        <ul key={index} className="list-disc pl-6 space-y-2 text-gray-400">
                          {paragraph.split('\n').map((item, itemIdx) => (
                            <li key={itemIdx}>
                              {item.replace(/^[-\d\.\s]+/, '')}
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    // Check if it is a code block
                    if (paragraph.startsWith('\`\`\`')) {
                      const lines = paragraph.split('\n');
                      const codeLines = lines.slice(1, lines.length - 1).join('\n');
                      return (
                        <div key={index} className="relative rounded-lg overflow-hidden bg-space-black border border-white/10 p-4 font-mono text-xs text-cyber-cyan leading-relaxed">
                          <div className="absolute top-2 right-3 text-[10px] text-gray-500 uppercase flex items-center gap-1"><FileCode size={12} /> APEX/SOQL</div>
                          <pre className="overflow-x-auto whitespace-pre">{codeLines}</pre>
                        </div>
                      );
                    }
                    // Check if it is an alert
                    if (paragraph.includes('> [!IMPORTANT]') || paragraph.includes('> [!TIP]') || paragraph.includes('> [!WARNING]')) {
                      const isImportant = paragraph.includes('IMPORTANT');
                      const isTip = paragraph.includes('TIP');
                      const isWarning = paragraph.includes('WARNING');
                      
                      const alertTitle = isImportant ? 'QUAN TRỌNG' : isTip ? 'GỢI Ý TỐI ƯU' : 'CẢNH BÁO';
                      const alertColor = isImportant ? 'border-l-nebula-purple bg-nebula-purple/5 text-nebula-purple' 
                        : isTip ? 'border-l-cyber-cyan bg-cyber-cyan/5 text-cyber-cyan' 
                        : 'border-l-neon-pink bg-neon-pink/5 text-neon-pink';

                      const alertText = paragraph.replace(/>\s*\[!(IMPORTANT|TIP|WARNING)\]\n>\s*/, '').replace(/>\s*/g, '');

                      return (
                        <div key={index} className={`border-l-4 p-4 rounded-r-lg space-y-1 ${alertColor}`}>
                          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                            <AlertCircle size={14} /> {alertTitle}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-300 italic">{alertText}</p>
                        </div>
                      );
                    }
                    // Standard paragraph
                    return (
                      <p key={index} className="text-gray-300">
                        {/* Bullet highlight check */}
                        {paragraph.split('**').map((chunk, chunkIdx) => 
                          chunkIdx % 2 === 1 
                            ? <strong key={chunkIdx} className="text-white font-semibold">{chunk}</strong>
                            : chunk
                        )}
                      </p>
                    );
                  })}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="sticky bottom-0 glass-nav p-4 text-center text-xs text-gray-500 border-t border-white/5">
                © 2026 Trần Xuân Hải — Chia sẻ kiến thức Salesforce & AWS Cloud Integration.
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </motion.div>
  );
};

export default Blog;
