import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Defaults to English 'en'

  const toggleLanguage = (lang) => {
    if (lang === 'en' || lang === 'vi') {
      setLanguage(lang);
    }
  };

  const translations = {
    en: {
      // Navbar
      navAbout: 'About Me',
      navExperience: 'Experience',
      navCertificates: 'Certifications',
      navBlog: 'Insights',
      navContact: 'Contact',
      
      // Footer
      footerBio: 'Fullstack Salesforce Architect & Senior Developer. Specialized in designing and building scalable enterprise Salesforce ecosystems with secure AWS Cloud integrations.',
      footerContactTitle: 'Contact Information',
      footerResourcesTitle: 'Resources',
      footerDownloadResume: 'Download Resume PDF (EN)',
      footerResumeAlert: 'Resume PDF is being generated. Demo download is ready in the official release.',
      footerCopyright: 'Tran Xuan Hai. All rights reserved. Architected with React, Tailwind CSS v4 & Framer Motion.',
      location: 'Ho Chi Minh City, Vietnam',

      // About / Hero Tab
      heroBadge: 'Fullstack Salesforce Architect',
      heroGreeting: 'I am',
      heroTagline: 'Architecting Scalable Salesforce Ecosystems. Bridging Code and Cloud Architecture.',
      heroBio: 'With 6 years of hands-on experience, I specialize in architectural consulting, enterprise Salesforce deployments, and cloud integrations. I combine system architectural thinking (Data & System Architect) with deep coding capabilities (Apex, LWC, AWS/External API integrations) to build highly scalable cloud ecosystems for global clients.',
      btnViewExp: 'View Experience',
      btnContactDirect: 'Contact Directly',
      statsExp: 'Years of Experience',
      statsCerts: 'Salesforce Credentials',
      statsProjects: 'Global Projects (Ireland, Japan, Asia)',
      capabilitiesTitle: 'Design & Development Capabilities',
      
      // Specialties
      specArchTitle: 'Salesforce Architecture',
      specArchDesc: 'Consulting on Large Data Volumes (LDV), designing strict enterprise sharing models, and optimizing org-wide structures to prevent data skew.',
      specCodingTitle: 'Deep System Coding',
      specCodingDesc: 'Developing high-performance logic in Apex Callouts, robust Trigger frameworks, and highly custom LWC dynamic interfaces.',
      specCloudTitle: 'Fullstack & AWS Integration',
      specCloudDesc: 'Building secure REST/SOAP connections, signing requests with AWS Signature v4 natively in Apex, and scaling Rails backends.',

      // Experience Tab
      expTitle: 'Work Experience & Projects',
      expSubtitle: 'Click on each milestone to view deep technical solutions and contributions.',
      expLocationLabel: 'Location',
      expDurationLabel: 'Duration',
      expSolutionsTitle: 'Key Solutions & Contributions:',
      expTechLabel: 'Applied Technologies:',
      
      expList: [
        {
          id: 1,
          role: 'Salesforce Architect / Developer',
          company: 'Capgemini Singapore',
          duration: '2023 - Present',
          location: 'Singapore (Remote / Hybrid)',
          color: 'purple',
          summary: 'Focusing on architectural consulting and enterprise-grade Salesforce deployments for global multi-billion dollar clients.',
          bullets: [
            'Consulted on multi-org strategy designs to ensure high availability and disaster recovery across business units.',
            'Designed enterprise-grade security and sharing models, including complex public groups and territory rules.',
            'Optimized asynchronous Apex processing (Batch, Queueable, Future), cutting down overall transaction execution time by 50%.',
            'Collaborated with international Product Owners to translate complex business workflows into elegant technical architectures.'
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
          summary: 'Led the development of complex financial forecasting modules and core operational automation within the Salesforce ecosystem.',
          bullets: [
            'Designed and built a complex Financial Forecasting Module using LWC, enabling real-time multi-dimensional cash flow analytics.',
            'Engineered an Automated Invoice Processing Engine using Apex and LWC, reducing manual operations by 80% for accountants.',
            'Tuned Salesforce Lightning Record Pages performance, improving average page load times from 6.5s to under 2.2s.',
            'Mentored and coached a team of 4 developers to deliver key milestones on schedule.'
          ],
          skills: ['Tech Lead', 'Lightning Web Components (LWC)', 'Financial Forecasting', 'Process Automation', 'Performance Tuning']
        },
        {
          id: 3,
          role: 'Fullstack Developer',
          company: 'Animate Project (Japan)',
          duration: '2020 - 2021',
          location: 'Tokyo, Japan (Remote)',
          color: 'pink',
          summary: 'Developed complex fullstack features and built combined hybrid storage structures between Salesforce and AWS Cloud.',
          bullets: [
            'Built a highly interactive drag-and-drop Department Tree component using React and LWC to manage complex structural hierarchies.',
            'Created a custom HTML Drag-and-Drop Email Template Builder, allowing responsive email layouts natively within Salesforce.',
            'Integrated AWS S3 storage securely by implementing native AWS Signature Version 4 request signing directly in Apex callouts.',
            'Developed serverless microservices with AWS Lambda and structured unstructured data in DynamoDB.'
          ],
          skills: ['Ruby on Rails', 'AWS S3 Integration', 'AWS Signature v4', 'AWS Lambda', 'DynamoDB', 'Drag & Drop Editors']
        }
      ],

      // Certificates Tab
      certsTitle: 'Architectural Credentials',
      certsSubtitle: 'Salesforce architect-level and consultant credentials validating enterprise-grade system designs.',
      certValidation: 'Verified Credential',
      certCapabilitiesHeader: 'Core Validated Capabilities:',
      
      certsList: [
        {
          id: 1,
          title: 'Salesforce Certified Data Architect',
          subtitle: 'Enterprise Data Modeling Expert',
          badgeColor: 'cyan',
          validationId: 'SEC-DATA-88392',
          description: 'Validates capabilities in designing scalable enterprise data models, handling Large Data Volumes (LDV), implementing secure sharing rules, and building data archiving lifecycles to avoid Data Skew.',
          keyCapabilities: [
            'Designing robust Large Data Volume (LDV) architectures.',
            'Optimizing SOQL query performance and preventing table lockups.',
            'Formulating archiving and purging strategies (Big Objects/DynamoDB).',
            'Master Data Management (MDM) and enterprise data synchronization.'
          ]
        },
        {
          id: 2,
          title: 'Salesforce Certified Experience Cloud Consultant',
          subtitle: 'Digital Community Portal Expert',
          badgeColor: 'purple',
          validationId: 'SEC-EXP-28391',
          description: 'Proves capabilities in designing secure external portals (Communities) for partners and customers, optimizing digital UX/UI, and integrating Salesforce business logic with LWC components.',
          keyCapabilities: [
            'Configuring secure customer and partner portals (Experience Cloud).',
            'Implementing external user security and sharing architectures.',
            'Optimizing responsive layouts using standard and custom Lightning templates.',
            'Integrating custom LWC forms and automated Approval Workflows.'
          ]
        },
        {
          id: 3,
          title: 'Salesforce Certified Application Architect',
          subtitle: 'Senior Application Designer',
          badgeColor: 'pink',
          validationId: 'SEC-APP-99831',
          description: 'Validates deep expertise in configuring clean, declarative, and programmatic application designs within a Salesforce Org, adhering to security standards and maintaining a highly scalable org architecture.',
          keyCapabilities: [
            'Designing robust multi-hierarchy Org structures.',
            'Configuring enterprise-grade sharing models (Role Hierarchy, Territory).',
            'Balancing declarative automation with custom Apex code.',
            'Maintaining clean application architectures that are easy to upgrade.'
          ]
        },
        {
          id: 4,
          title: 'Salesforce Certified Integration Architecture Designer',
          subtitle: 'System Integration Specialist',
          badgeColor: 'emerald',
          validationId: 'SEC-INT-33928',
          description: 'Validates capabilities in designing secure, reliable, and high-performance system integrations between Salesforce and third-party enterprise platforms (AWS, Azure, ERP, SAP).',
          keyCapabilities: [
            'Designing real-time and asynchronous API integration patterns.',
            'Implementing secure request signing (AWS Signature v4, OAuth JWT).',
            'Formulating event-driven messaging structures (Pub/Sub API).',
            'Optimizing high-throughput data pipelines across hybrid clouds.'
          ]
        }
      ],

      // Blog Tab
      blogTitle: 'Salesforce Insights & Case Studies',
      blogSubtitle: 'In-depth technical writeups and architectural case studies derived from real-world enterprise deployments.',
      blogCategoryLabel: 'Category',
      blogReadText: 'Read full article',
      blogReadTime: 'min read',
      blogAlertTitle: 'IMPORTANT',
      blogTipTitle: 'OPTIMIZATION TIP',
      blogWarningTitle: 'WARNING',
      blogFooterText: '© 2026 Tran Xuan Hai — Technical Insights on Salesforce & AWS Integration.',
      
      postsList: [
        {
          id: 1,
          title: 'Optimizing Salesforce Apex Callouts & Secure File Uploads to AWS S3 using Signature Version 4',
          date: 'May 15, 2026',
          readTime: '8 min read',
          category: 'AWS & Integration',
          color: 'pink',
          summary: 'How to sign and secure file uploads to AWS S3 natively in Apex without middleware, bypassing Governor Limits and protecting secret API credentials.',
          content: `### Problem Overview
In large enterprise systems, storing files directly inside Salesforce can quickly exceed the built-in storage quotas, which are extremely expensive to expand. The optimal solution is to offload binary storage to AWS S3. However, file uploads must remain highly secure, without exposing API Access Keys or overloading Salesforce Apex Heap Limits.

### Solution: Native AWS Signature Version 4
Instead of proxying file uploads through a custom middleman server (which adds network latency and operational costs), we can calculate the **AWS Signature Version 4 request signing** natively inside Apex.

#### Key Benefits:
1. **Zero-Server Middleware:** Salesforce Apex signs requests and uploads binaries directly to AWS S3.
2. **Security-First:** Secret keys are stored securely in Named Credentials or encrypted Custom Metadata, never sent over the wire.
3. **Heap Size Bypass:** Using LWC on the frontend to read files as binary blobs, then uploading directly to S3 via pre-signed URLs or signing headers, bypassing the 6MB Apex synchronous heap size limit.

---

### Apex Implementation Steps

\`\`\`apex
// Apex structure for signing S3 PUT requests with AWS v4
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
        
        // Compute AWS v4 HMAC-SHA256 signature
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
> **Heap Size Warning:** For files exceeding 3.5MB, avoid converting files to Base64 inside Apex. Instead, use LWC to query a **Pre-signed URL** generated by Apex, then let LWC perform the \`fetch()\` or \`XMLHttpRequest\` binary upload directly from the browser to S3.

### Conclusion
Deploying native AWS Signature v4 integrations within Apex is the gold standard for secure, low-latency, and cost-effective file management in enterprise Salesforce orgs.`
        },
        {
          id: 2,
          title: 'Designing Scalable Data Models in Salesforce: Best Practices from a Data Architect',
          date: 'Apr 28, 2026',
          readTime: '6 min read',
          category: 'Data Architecture',
          color: 'purple',
          summary: 'Advanced techniques in database normalization, handling Large Data Volumes (LDV), mitigating Data Skew, and boosting SOQL query performance.',
          content: `### Why Data Architecture Matters
When database tables (Objects) in Salesforce exceed 5 million records (Large Data Volumes - LDV), search and transactional operations degrade. Pages load slowly, triggers timeout, and SOQL queries hit Governor Limits. As a Data Architect, modeling relationships correctly is crucial to the long-term success of the system.

### 1. Mitigating Data Skew
**Data Skew** occurs when a parent record is associated with too many children - typically over 10,000 child records. This causes heavy transactional blockages (Record Locking) during security sharing recalculations.

#### Common Data Skew Forms:
- **Account Skew:** Too many Contacts or Cases under a single generic parent Account.
- **Lookup Skew:** Millions of child records lookup to one single reference record.

#### Prevention Strategies:
1. **Data Distribution:** Distribute child records among multiple virtual, rotating parents.
2. **Loose-Coupling:** Use text fields to store record relationships if database referential integrity is not strictly needed.

---

### 2. Boosting SOQL Queries with Custom Indexes

To ensure SOQL queries run efficiently on objects with tens of millions of records, Salesforce’s Query Optimizer needs to scan indexes instead of entire tables.

> [!TIP]
> Standard fields like **External ID**, **Unique**, **Primary Key (Id)**, and **Name** are indexed automatically. For other custom fields queried frequently in WHERE clauses, request a **Custom Index** from Salesforce Support to prevent full table scans.

\`\`\`sql
-- High-performance indexed SOQL query
SELECT Id, Name, Status__c, CreatedDate 
FROM Transaction__c 
WHERE External_Partner_Id__c = 'PARTNER_992' 
  AND CreatedDate = TODAY
\`\`\`

### 3. Dynamic Data Archiving
Keep your production environment lightweight. Establish scheduled pipelines to offload historical records (e.g., older than 2 years) to **Salesforce Big Objects** or external clouds like **AWS DynamoDB/S3**.`
        },
        {
          id: 3,
          title: 'Building Dynamic LWC Component Trees & Custom Email Editors: Lessons from Enterprise Projects',
          date: 'Apr 2, 2026',
          readTime: '10 min read',
          category: 'Front-end & LWC',
          color: 'cyan',
          summary: 'Practical experience building complex department trees with high render speeds, custom drag-and-drop email builders, and efficient state management.',
          content: `### The Business Challenge
In a system built for the Japanese market, we had to implement a hierarchical structural organizational editor (Department Tree) extending up to 10 levels deep, combined with a custom drag-and-drop HTML Email Template Builder. These pushed Salesforce Lightning UI capabilities to their absolute limits.

### 1. High-Performance Render of Recursive Component Trees
When rendering deep nested components in LWC, standard naive recursion quickly freezes the browser tab due to the massive volume of DOM nodes generated and modified when nodes expand or collapse.

#### Optimized Design:
- **Flattened Data Array:** Flatten the deep nested tree into a single-level array where each item stores its \`parentId\` and \`depth\`.
- **Lazy Loading / Virtual Scrolling:** Only render expanded departments and load child records asynchronously when a user expands a parent node.
- **Custom Event Bubbling:** Use standard event propagation (\`bubbles: true, composed: true\`) to dispatch tree state changes to the master controller component smoothly.

---

### 2. Creating a Custom Drag-and-Drop Email Template Builder

The Email Builder must allow end-users to drag-and-drop blocks (images, text paragraphs, buttons) and generate clean, responsive HTML that displays correctly on desktop Outlook and mobile Gmail.

#### Architecture:
1. **LWC Canvas Drag & Drop:** Utilize the HTML5 Drag and Drop API safely wrapped inside LWC’s Shadow DOM boundaries.
2. **State Management:** Model the email as a central JSON data structure. Moving elements merely updates the JSON array. LWC’s reactive property model then redraws the canvas.
3. **HTML Generator:** Parse the JSON structure into a table-based HTML layout (essential for desktop Microsoft Outlook compatibility).

\`\`\`javascript
// Structure of the Email Template state
const emailSchema = [
  { id: 'block_1', type: 'header', content: 'Salesforce Tech Insights Newsletter' },
  { id: 'block_2', type: 'image', url: 'https://images.unsplash.com/...', alt: 'AWS S3' },
  { id: 'block_3', type: 'paragraph', text: 'AWS S3 integrations can save up to 90%...' }
];
\`\`\`

> [!WARNING]
> **Shadow DOM Limitation:** Be careful when importing external JS editors (like TinyMCE) into LWC because Salesforce’s Locker Service / LWS prevents direct DOM manipulations across shadow boundaries. It is recommended to use native LWC rich-text components or lightweight custom editors.`
        }
      ]
    },
    vi: {
      // Navbar
      navAbout: 'Về Tôi',
      navExperience: 'Kinh Nghiệm',
      navCertificates: 'Chứng Chỉ',
      navBlog: 'Insights',
      navContact: 'Liên hệ',
      
      // Footer
      footerBio: 'Kiến trúc sư hệ thống Salesforce & Chuyên viên lập trình Fullstack cấp cao. Hơn 6 năm kinh nghiệm thực chiến tư vấn mô hình dữ liệu lớn, triển khai Salesforce và tích hợp hệ thống AWS Cloud.',
      footerContactTitle: 'Thông Tin Liên Hệ',
      footerResourcesTitle: 'Tài Nguyên',
      footerDownloadResume: 'Tải Resume PDF (EN)',
      footerResumeAlert: 'Resume PDF đang được tạo. Tính năng demo sẵn sàng tải về trong phiên bản chính thức.',
      footerCopyright: 'Trần Xuân Hải. Tất cả quyền được bảo lưu. Thiết kế bằng React, Tailwind CSS v4 & Framer Motion.',
      location: 'TP. Hồ Chí Minh, Việt Nam',

      // About / Hero Tab
      heroBadge: 'Fullstack Salesforce Architect',
      heroGreeting: 'Tôi là',
      heroTagline: 'Architecting Scalable Salesforce Ecosystems. Bridging Code and Cloud Architecture.',
      heroBio: 'Với 6 năm kinh nghiệm thực chiến, tôi chuyên tư vấn kiến trúc, triển khai hệ thống Salesforce toàn diện và tích hợp điện toán đám mây Cloud. Tôi kết hợp nhuần nhuyễn giữa tư duy Kiến trúc dữ liệu (Data Architect) và năng lực Lập trình chuyên sâu (Apex, LWC, AWS/External API integrations) để xây dựng các giải pháp có khả năng mở rộng vượt trội cho các đối tác quốc tế.',
      btnViewExp: 'Xem Kinh Nghiệm',
      btnContactDirect: 'Liên Hệ Trực Tiếp',
      statsExp: 'Năm Kinh Nghiệm Thực Chiến',
      statsCerts: 'Chứng Chỉ Salesforce Cao Cấp',
      statsProjects: 'Dự Án Toàn Cầu (Ireland, Japan, Asia)',
      capabilitiesTitle: 'Năng Lực Thiết Kế & Phát Triển',
      
      // Specialties
      specArchTitle: 'Kiến Trúc Salesforce',
      specArchDesc: 'Tư vấn mô hình dữ liệu quy mô lớn (LDV), thiết kế cấu trúc bảo mật phân quyền nghiêm ngặt (Sharing Rules), và tối ưu hóa hệ thống tổng thể tránh hiện tượng Data Skew.',
      specCodingTitle: 'Lập Trình Chuyên Sâu',
      specCodingDesc: 'Phát triển logic nghiệp vụ tối ưu trong Apex Callouts, Trigger framework bền vững và các component giao diện tùy biến cực mạnh bằng LWC.',
      specCloudTitle: 'Tích Hợp AWS & Cloud',
      specCloudDesc: 'Tích hợp hệ thống bên ngoài bảo mật cao, kết nối trực tiếp AWS (S3, Lambda, DynamoDB) sử dụng chữ ký AWS Signature v4 và lập trình Rails.',

      // Experience Tab
      expTitle: 'Kinh Nghiệm Làm Việc & Dự Án',
      expSubtitle: 'Click vào từng cột mốc để xem chi tiết các giải pháp kỹ thuật cụ thể đã triển khai.',
      expLocationLabel: 'Địa điểm',
      expDurationLabel: 'Thời gian',
      expSolutionsTitle: 'Giải Pháp & Đóng Góp Chính:',
      expTechLabel: 'Công nghệ áp dụng:',
      
      expList: [
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
            'Tích hợp hạ tầng lưu trữ **AWS S3** bảo mật cao bằng kỹ thuật tự ký request sử dụng **AWS Signature Version 4** trực tiếp từ Apex callouts.',
            'Viết các dịch vụ serverless trên AWS Lambda và lưu trữ dữ liệu phi cấu trúc trên DynamoDB.'
          ],
          skills: ['Ruby on Rails', 'AWS S3 Integration', 'AWS Signature v4', 'AWS Lambda', 'DynamoDB', 'Drag & Drop Editors']
        }
      ],

      // Certificates Tab
      certsTitle: 'Chứng Chỉ & Năng Lực Kiến Trúc',
      certsSubtitle: 'Các chứng chỉ Salesforce Architect-level danh giá bảo chứng cho năng lực thiết kế hệ thống cấp doanh nghiệp.',
      certValidation: 'Xác Minh Chứng Chỉ',
      certCapabilitiesHeader: 'Năng lực cốt lõi được bảo chứng:',
      
      certsList: [
        {
          id: 1,
          title: 'Salesforce Certified Data Architect',
          subtitle: 'Kiến trúc sư dữ liệu chuyên sâu',
          badgeColor: 'cyan',
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
          validationId: 'SEC-INT-33928',
          description: 'Bảo chứng kiến thức chuyên sâu về thiết kế tích hợp bảo mật, đáng tin cậy giữa Salesforce với các hệ thống doanh nghiệp (AWS, Azure, ERP, SAP) sử dụng các mẫu tích hợp tối ưu.',
          keyCapabilities: [
            'Thiết kế hệ thống tích hợp API thời gian thực và bất đồng bộ.',
            'Giải pháp ký chữ ký điện tử AWS Signature v4 và OAuth JWT.',
            'Xử lý lỗi truyền tin cậy (Event-driven with Pub/Sub API).',
            'Tối ưu hóa băng thông truyền dữ liệu lớn giữa các Cloud.'
          ]
        }
      ],

      // Blog Tab
      blogTitle: 'Chia Sẻ Kiến Thức (Salesforce Insights)',
      blogSubtitle: 'Các bài viết phân tích giải pháp kỹ thuật chuyên sâu đúc rút từ quá trình triển khai thực tế.',
      blogCategoryLabel: 'Chuyên mục',
      blogReadText: 'Đọc bài viết chi tiết',
      blogReadTime: 'phút đọc',
      blogAlertTitle: 'QUAN TRỌNG',
      blogTipTitle: 'GỢI Ý TỐI ƯU',
      blogWarningTitle: 'CẢNH BÁO',
      blogFooterText: '© 2026 Trần Xuân Hải — Chia sẻ kiến thức Salesforce & AWS Cloud Integration.',
      
      postsList: [
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
      ]
    }
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
