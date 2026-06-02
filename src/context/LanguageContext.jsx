import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

// Định nghĩa bộ từ điển dịch thuật tập trung cho toàn bộ ứng dụng
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
    location: 'Da Nang City, Viet Nam',

    // About / Hero Tab
    heroBadge: 'Fullstack Salesforce Architect',
    heroGreeting: 'I am',
    heraFullName: 'Hai, Tran Xuan',
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
    specCloudTitle: 'Fullstack & Salesforce Integration',
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
        role: "Senior Salesforce Developer",
        company: "Capgemini Services",
        duration: "Jan 2024 – Present",
        location: "Singapore",
        color: "purple",
        summary: "Leading the development and technical implementation of large-scale enterprise solutions, ensuring platform health and core scalability across multi-cloud environments.",
        bullets: [
          "Architected complex programmatic workflows and optimized core system components for enterprise clients.",
          "Established code review standards and design patterns to enforce robust Apex and LWC engineering guidelines.",
          "Collaborated closely with cross-functional stakeholders to align custom technical features with global business goals.",
          "Mitigated system blockages and technical debt by refactoring high-frequency integration endpoints."
        ],
        skills: ["Apex Enterprise Patterns", "LWC Engineering", "Solution Design", "Technical Leadership", "Multi-Cloud Integration"]
      },
      {
        id: 2,
        role: "Senior Salesforce Developer - Freelancer",
        company: "Viet Staffing Services",
        duration: "Jan 2026 – May 2026",
        location: "Ireland",
        color: "cyan",
        summary: "Delivered rapid, high-impact consulting services, specialized in deep programmatic customization and complex business logic fulfillment.",
        bullets: [
          "Developed end-to-end custom business processes leveraging advanced Salesforce Flow automations and Apex handlers.",
          "Integrated third-party enterprise APIs securely, processing multi-source data feeds seamlessly.",
          "Tuned execution times of transactional operations, preventing governance limit exceptions under peak workloads.",
          "Translated highly specific client criteria into flexible and reusable declarative/programmatic architectures."
        ],
        skills: ["Advanced Flow Automation", "API Integrations", "Performance Tuning", "Custom Apex Handlers"]
      },
      {
        id: 3,
        role: "Senior Salesforce Developer - Freelancer",
        company: "Hybrid Technologies",
        duration: "Jan 2026 – March 2026",
        location: "Viet Nam",
        color: "pink",
        summary: "Engaged in specialized refactoring initiatives and core frontend performance enhancements under fast-paced Agile sprint frameworks.",
        bullets: [
          "Refactored heavy legacy Apex codebases into modular, scalable service layers, greatly improving testability.",
          "Engineered interactive, modern UI components with Lightning Web Components (LWC) utilizing PubSub and Lightning Message Service (LMS).",
          "Accelerated front-end load times and optimized data caching mechanisms using wire service properties.",
          "Identified and patched critical security vulnerabilities within client-facing portal interfaces."
        ],
        skills: ["Legacy Refactoring", "Modern LWC UI", "Lightning Message Service", "Agile Execution"]
      },
      {
        id: 4,
        role: "Senior Salesforce Developer - Freelancer",
        company: "Lightning Force Solution",
        duration: "April 2025 – June 2025",
        location: "Viet Nam",
        color: "cyan",
        summary: "Designed and implemented bespoke data structures and sophisticated integration flows tailored for cross-departmental operations.",
        bullets: [
          "Architected comprehensive data models and entity relationship diagrams to support niche business logic requirements.",
          "Constructed custom declarative interfaces and managed data pipeline lifecycles.",
          "Automated cross-department approvals and multi-stage status tracking via complex Flows.",
          "Conducted system testing and verified integration integrity with external data warehouses."
        ],
        skills: ["Data Modeling", "Process Automation", "System Testing", "Custom Objects Design"]
      },
      {
        id: 5,
        role: "Lead/Senior Salesforce Developer - Freelancer",
        company: "Vietnam Blockchain Association",
        duration: "Aug 2024 – April 2025",
        location: "Viet Nam",
        color: "purple",
        summary: "Acted as Technical Lead overseeing platform deployment strategies, data security architectures, and visibility governance models.",
        bullets: [
          "Designed comprehensive data sharing models encompassing criteria-based sharing rules, manual sharing triggers, and restriction rules.",
          "Guided system rollout strategies to guarantee zero-downtime data migrations and high user adoption.",
          "Enforced strict field-level security (FLS) and encryption policies to safeguard sensitive organizational data.",
          "Mentored junior team members on system constraints, deployment practices, and proper sandbox lifecycle management."
        ],
        skills: ["Sharing & Visibility", "Data Security Governance", "FLS Encryption", "Deployment Strategies"]
      },
      {
        id: 6,
        role: "Middle Salesforce Developer - Freelancer",
        company: "Kirkendall Dwyer",
        duration: "Dec 2023 – Dec 2024",
        location: "USA",
        color: "emerald",
        summary: "Managed offshore configuration, customizations, and daily CRM operations for US-based Sales and Service Cloud implementation branches.",
        bullets: [
          "Customized Sales and Service Cloud objects, page layouts, and record types to match client operational models.",
          "Maintained and optimized global profile structures, permission sets, and user role hierarchies.",
          "Built intuitive tracking dashboards and operational reports to give stakeholders clear visibility into key performance metrics.",
          "Resolved complex production issues, provided administrative overrides, and patched broken automations remotely."
        ],
        skills: ["Sales & Service Cloud", "User Access Controls", "Analytics & Dashboards", "Production Support"]
      },
      {
        id: 7,
        role: "Fresher/Junior Salesforce Developer",
        company: "CMC Global",
        duration: "Nov 2021 – Dec 2023",
        location: "Japan",
        color: "emerald",
        summary: "Built a rock-solid foundation in core Salesforce development, participating in multi-client project deliveries while mastering programmatic fundamentals.",
        bullets: [
          "Mastered the foundational syntax and application of Apex triggers, controllers, and SOQL query structures.",
          "Wrote rigorous unit tests to achieve over 85% code coverage across all production deployment packages.",
          "Assisted in building custom user interfaces using basic Aura and early LWC framework components.",
          "Executed data load operations using Data Loader, ensuring precise mapping and data hygiene during imports."
        ],
        skills: ["Apex & SOQL Basics", "Unit Testing (Apex)", "Data Loader", "Core CRM Fundamentals"]
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
        title: "Salesforce Certified Experience Cloud Consultant",
        subtitle: "Issued: 05/2025",
        badgeColor: "cyan",
        description: "Validates expertise in designing and deploying scalable, secure digital experiences, community portals, and multi-channel partner ecosystems.",
        validationId: "SF-EXP-202505",
        keyCapabilities: ["Experience Cloud Architecture", "Community Portal Design", "Multi-channel Engagement", "Audience Personalization"]
      },
      {
        id: 2,
        title: "Salesforce Certified Application Architect",
        subtitle: "Issued: 03/2025",
        badgeColor: "purple",
        description: "Recognizes deep expertise in building advanced transactional logic, design patterns, scalable data modeling, and enterprise security sharing models on the Lightning Platform.",
        validationId: "SF-APP-ARCH-202503",
        keyCapabilities: ["Enterprise Security Hierarchy", "Scalable Solution Design", "Platform Best Practices", "Data Tiering Strategy"]
      },
      {
        id: 3,
        title: "Salesforce Certified Data Architect",
        subtitle: "Issued: 03/2025",
        badgeColor: "purple",
        description: "Validates technical proficiency in large-scale data modeling, complex data governance, multi-system integration architecture, and Large Data Volume (LDV) optimization.",
        validationId: "SF-DATA-ARCH-202503",
        keyCapabilities: ["Large Data Volumes (LDV)", "Data Governance & Lifecycle", "Master Data Management", "Data Migration Patterns"]
      },
      {
        id: 4,
        title: "Salesforce Certified AI Associate",
        subtitle: "Issued: 09/2024",
        badgeColor: "pink",
        description: "Demonstrates foundational knowledge of AI ethics, predictive modeling, and data-driven CRM insights powered by Einstein capabilities.",
        validationId: "SF-AI-202409",
        keyCapabilities: ["AI CRM Strategy", "Einstein Analytics Capabilities", "Ethical Data Handling", "Predictive Modeling Basics"]
      },
      {
        id: 5,
        title: "Salesforce Certified Sharing and Visibility Architect",
        subtitle: "Issued: 08/2024",
        badgeColor: "purple",
        description: "Validates the design of complex enterprise sharing models, handling performance-tuned visibility settings, programmatic sharing mechanisms, and regulatory compliance.",
        validationId: "SF-SHARING-202408",
        keyCapabilities: ["Programmatic Sharing", "Implicit Sharing Mechanics", "Performance-Tuned Visibility", "Role Hierarchy Engineering"]
      },
      {
        id: 6,
        title: "Salesforce Certified JavaScript Developer",
        subtitle: "Issued: 03/2024",
        badgeColor: "emerald",
        description: "Certifies advanced JavaScript programming skills applied directly to Lightning Web Components (LWC) design and modern asynchronous Web development.",
        validationId: "SF-JS-202403",
        keyCapabilities: ["Advanced LWC Engineering", "Asynchronous Programming", "Event-Driven Architecture", "DOM manipulation & Testing"]
      },
      {
        id: 7,
        title: "Salesforce Certified Platform App Builder",
        subtitle: "Issued: 04/2023",
        badgeColor: "cyan",
        description: "Validates ability to design custom applications using declarative configuration capabilities, automation tools (Flows), and UI customization.",
        validationId: "SF-APP-BUILDER-202304",
        keyCapabilities: ["Advanced Flow Automation", "Declarative App Customization", "Mobile App UI Design", "Validation & Formulas"]
      },
      {
        id: 8,
        title: "Salesforce Certified Platform Developer II (PD2)",
        subtitle: "Issued: 01/2023",
        badgeColor: "emerald",
        description: "Demonstrates advanced programmatic capabilities, performance tuning of complex Apex logic, asynchronous processing, and robust enterprise integration frameworks.",
        validationId: "SF-PD2-202301",
        keyCapabilities: ["Asynchronous Apex (Batch/Queueable)", "Advanced SOQL/SOSL Tuning", "Integration API Patterns", "Custom Metadata & Tooling"]
      },
      {
        id: 9,
        title: "Salesforce Certified Administrator",
        subtitle: "Issued: 11/2022",
        badgeColor: "cyan",
        description: "Validates foundational administrative knowledge, core system setup, global configuration, user management, and operational analytics.",
        validationId: "SF-ADMIN-202211",
        keyCapabilities: ["User & Security Setup", "Standard Object Analytics", "Basic Flow Configurations", "Data Importing & Maintenance"]
      },
      {
        id: 10,
        title: "Salesforce Certified Platform Developer I (PD1)",
        subtitle: "Issued: 09/2022",
        badgeColor: "emerald",
        description: "Validates fundamental programming skills on the Lightning Platform, including Apex triggers, controllers, SOQL queries, and basic LWC structures.",
        validationId: "SF-PD1-202209",
        keyCapabilities: ["Apex Trigger Frameworks", "SOQL/SOSL Query Basics", "MVC Design Pattern", "Unit Testing & Code Coverage"]
      }
    ],

    // Blog Tab Labels
    blogSectionTitle: 'Salesforce Insights & Case Studies',
    blogSectionDesc: 'In-depth technical writeups and architectural case studies derived from real-world enterprise deployments.',
    blogCategoryLabel: 'Category',
    blogReadMoreLabel: 'Read full article',
    blogDrawerHeader: 'Salesforce Insights',
    blogLabelImportant: 'IMPORTANT',
    blogLabelTip: 'OPTIMIZATION TIP',
    blogLabelWarning: 'WARNING',
    blogFooterStamp: 'Technical Insights on Salesforce & AWS Integration.',
    
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
In large enterprise environments, storing files directly within Salesforce often hits highly expensive File Storage Limits. The optimal solution is to offload storage to AWS S3. However, file uploads must ensure absolute security, avoid exposing API Access Keys, and prevent Salesforce Apex Heap Size congestion.

### Technical Solution: AWS Signature Version 4
Instead of routing files through an intermediate server (which introduces latency and operational costs), we can implement **Self-signing API Callouts** directly within Apex code using the **AWS Signature Version 4** standard.

#### Outstanding Benefits:
- **Zero-Server Middleware:** Salesforce Apex directly signs and transmits requests straight to the AWS S3 Endpoint.
- **Security-First:** Keys are securely stored in Named Credentials or encrypted Custom Metadata Types, never transmitting raw keys over the internet.
- **Heap Size Bypass:** Leverage LWC to read files as Binary/Blob at the client level, then stream directly to S3 via Pre-signed URLs or chunked signing endpoints to bypass the 6MB synchronous Apex heap limit for larger files.

> [!IMPORTANT]
> **Heap Size Optimization Note:** For files larger than 3.5MB, avoid handling Base64 strings inside Apex. Instead, utilize **LWC to generate a Pre-signed URL** via Apex, allowing the LWC layer to execute a native \`fetch()\` or \`XMLHttpRequest\` to upload the raw binary file directly from the browser to AWS S3.

### Implementation Steps in Apex

\`\`\`apex
// Mocking AWS Signature v4 structure in Apex
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
        
        // Generate AWS v4 Signature
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

### Conclusion
Integrating AWS S3 using Signature v4 provides a bulletproof design to optimize storage costs for enterprise-level Salesforce Orgs, guaranteeing top-tier performance and security.`
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
When the record count of a single Salesforce Object surpasses the 5-million threshold (Large Data Volume - LDV), the system inevitably experiences severe degradation: pages load sluggishly, triggers throw timeouts, and SOQL statements hit hard Governor Limits. As a Data Architect, foundational data model design dictates the scalability of the entire project.

### 1. Mitigating Data Skew
**Data Skew** occurs when a single parent record links to an excessive number of child records—typically exceeding 10,000. This triggers extensive Record Locking during asynchronous sharing rule calculations.

#### Common Forms of Data Skew:
- **Account Skew:** Too many Contacts or Cases tied to a single generic Account placeholder.
- **Lookup Skew:** Millions of child records pointing to a single reference lookup master record.

#### Resolution Techniques:
- **Data Distribution:** Distribute child records across multiple virtual or sub-parent accounts.
- **Loose-Coupling Architecture:** Transition rigid Lookup relations into simple Text fields if strict database-level referential integrity isn't mandatory.

### 2. Optimizing SOQL Queries with Custom Indexes
To ensure seamless execution of SOQL statements across tens of millions of data rows, the Salesforce Query Optimizer must be supplied with appropriate indexes.

> [!TIP]
> Standard fields like **External ID**, **Unique**, **Primary Key (Id)**, and **Name** are automatically indexed. For custom fields frequently utilized inside WHERE filters, request a **Custom Index** from Salesforce Support to prevent full-table scans.

\`\`\`sql
-- Optimized SOQL Query leveraging custom indexing
SELECT Id, Name, Status__c, CreatedDate 
FROM Transaction__c 
WHERE External_Partner_Id__c = 'PARTNER_992' 
  AND CreatedDate = TODAY
\`\`\`

### 3. Data Archiving Strategy
Avoid preserving multi-year historical logs inside the primary transactional database. Architect an automated archiving pipeline to shift old transactional records (older than 2 years) into **Salesforce Big Objects** or sync them out to **AWS DynamoDB/S3** to keep the core infrastructure lean and high-performing.`
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
In a large-scale project for the Japanese market, I engineered a highly interactive organizational Department Tree layout navigating deep hierarchies up to 10 nested levels, coupled with a customized responsive drag-and-drop Email Editor. These interface requirements push web capabilities to the edge within the Salesforce Lightning container.

### 1. Optimizing Deeply Nested Component Render Tree
When rendering multi-layered tree nodes recursively via standard LWC structures, browser main threads easily choke due to the massive volume of DOM elements instantiation when expanding nodes.

#### Optimization Architecture:
- **Flattened Data Array:** Convert hierarchical deep JSON payloads into a single flat array embedded with \`parentId\` and \`depth\` flags.
- **Lazy Loading & Virtualization:** Render only the nodes currently in the Viewport, and fetch sub-branches on-demand upon node expansion click.
- **Custom Event Bubbling:** Dispatch standard LWC events (\`bubbles: true, composed: true\`) to pass state alterations up to the centralized orchestrator efficiently.

### 2. Crafting a Drag-and-Drop Email Template Builder
The editor canvas must allow business operators to seamlessly reposition text blocks, layout grids, or media assets, converting structural blueprints into pixel-perfect table-based HTML compatible with strict email clients like Outlook Desktop.

#### Structural Execution:
1. **LWC Canvas Drag & Drop:** Utilize the HTML5 Drag and Drop API, securely isolated inside LWC Shadow DOM.
2. **State Management:** Hold the complete template state inside a reactive central JSON array. Drag motions simply shuffle elements inside the array, letting LWC automatically trigger UI re-renders via reactivity.
3. **HTML Generator Engine:** Transform JSON components into legacy table-based HTML templates for universal display across email clients.

\`\`\`javascript
// Sample JSON state representation for the Email Builder
const emailSchema = [
  { id: 'block_1', type: 'header', content: 'Salesforce Tech Insights Newsletter' },
  { id: 'block_2', type: 'image', url: 'https://images.unsplash.com/...', alt: 'AWS S3' },
  { id: 'block_3', type: 'paragraph', text: 'AWS S3 integration reduces operational data overhead by 90%...' }
];
\`\`\`

> [!WARNING]
> **Shadow DOM Restrictions:** Exercise extreme caution when embedding external rich-text platforms (e.g., TinyMCE, CKEditor) into LWC. Salesforce Locker Service / LWS restricts third-party scripts from parsing across the Shadow Root boundary. Building lightweight native LWC input blocks or wrapping around \`lightning-input-rich-text\` is recommended.`
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
    heraFullName: 'Trần Xuân Hải',
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
    specCloudTitle: 'Tích Hợp Salesforce & Cloud',
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
        role: "Senior Salesforce Developer",
        company: "Capgemini Services",
        duration: "Tháng 1 2024 – Hiện tại",
        location: "Singapore",
        color: "purple",
        summary: "Dẫn dắt phát triển và triển khai kỹ thuật các giải pháp doanh nghiệp quy mô lớn, bảo đảm sức khỏe hệ thống và khả năng mở rộng trên môi trường Multi-Cloud.",
        bullets: [
          "Thiết kế kiến trúc các luồng xử lý bằng code phức tạp và tối ưu hóa các thành phần cốt lõi cho khách hàng doanh nghiệp.",
          "Xây dựng tiêu chuẩn rà soát mã nguồn (code review) và mẫu thiết kế để áp dụng nghiêm ngặt các quy chuẩn Apex và LWC.",
          "Hợp tác chặt chẽ với các bên liên quan để đồng bộ hóa các tính năng kỹ thuật tùy biến với mục tiêu kinh doanh toàn cầu.",
          "Giảm thiểu tắc nghẽn hệ thống và nợ kỹ thuật bằng cách tái cấu trúc các điểm cuối tích hợp (integration endpoints) tần suất cao."
        ],
        skills: ["Mẫu Apex Doanh Nghiệp", "Lập Trình LWC", "Thiết Kế Giải Pháp", "Dẫn Dắt Kỹ Thuật", "Tích Hợp Multi-Cloud"]
      },
      {
        id: 2,
        role: "Senior Salesforce Developer - Freelancer",
        company: "Viet Staffing Services",
        duration: "Tháng 1 2026 – Tháng 5 2026",
        location: "Việt Nam",
        color: "cyan",
        summary: "Cung cấp các dịch vụ tư vấn tác động cao và nhanh chóng, chuyên sâu về tùy biến lập trình nâng cao và đáp ứng logic kinh doanh phức tạp.",
        bullets: [
          "Phát triển quy trình kinh doanh tùy biến toàn diện tận dụng tự động hóa nâng cao của Salesforce Flow và các bộ xử lý Apex.",
          "Tích hợp an toàn các API doanh nghiệp của bên thứ ba, xử lý mượt mà các luồng dữ liệu từ nhiều nguồn.",
          "Tối ưu hóa thời gian thực thi của các thao tác giao dịch, ngăn chặn các ngoại lệ giới hạn (governance limits) khi tải cao điểm.",
          "Chuyển đổi các tiêu chí cụ thể của khách hàng thành các kiến trúc cấu hình/lập trình linh hoạt và có thể tái sử dụng."
        ],
        skills: ["Tự Động Hóa Flow Nâng Cao", "Tích Hợp API", "Tối Ưu Hiệu Năng", "Bộ Xử Lý Apex Tùy Biến"]
      },
      {
        id: 3,
        role: "Senior Salesforce Developer - Freelancer",
        company: "Hybrid Technologies",
        duration: "Tháng 1 2026 – Tháng 3 2026",
        location: "Nhật Bản",
        color: "pink",
        summary: "Tham gia vào các sáng kiến tái cấu trúc chuyên sâu và nâng cao hiệu năng frontend cốt lõi trong mô hình sprint Agile tốc độ cao.",
        bullets: [
          "Tái cấu trúc các kho mã nguồn Apex cũ cồng kềnh thành các lớp dịch vụ (service layers) mô-đun, dễ mở rộng và cải thiện khả năng kiểm thử.",
          "Xây dựng các thành phần giao diện hiện đại, tương tác bằng LWC sử dụng PubSub và Lightning Message Service (LMS).",
          "Tăng tốc thời gian tải trang frontend và tối ưu hóa cơ chế lưu trữ dữ liệu đệm bằng cách tận dụng wire service.",
          "Xác định và khắc phục các lỗ hổng bảo mật nghiêm trọng trong các giao diện cổng thông tin (portal) phục vụ khách hàng."
        ],
        skills: ["Tái Cấu Trúc Mã Nguồn", "Giao Diện LWC Hiện Đại", "Lightning Message Service", "Vận Hành Agile"]
      },
      {
        id: 4,
        role: "Senior Salesforce Developer - Freelancer",
        company: "Lightning Force Solution",
        duration: "Tháng 4 2025 – Tháng 6 2025",
        location: "Ireland",
        color: "cyan",
        summary: "Thiết kế và triển khai các cấu trúc dữ liệu đặc thù và các luồng tích hợp tinh vi được tinh chỉnh cho các hoạt động liên phòng ban.",
        bullets: [
          "Thiết kế mô hình dữ liệu toàn diện và sơ đồ quan hệ thực thể để hỗ trợ các yêu cầu logic kinh doanh ngách.",
          "Xây dựng các giao diện cấu hình tùy biến và quản lý vòng đời của các đường ống dữ liệu (data pipelines).",
          "Tự động hóa các quy trình phê duyệt liên phòng ban và theo dõi trạng thái nhiều giai đoạn thông qua các hệ thống Flow phức tạp.",
          "Tiến hành kiểm thử hệ thống và xác minh tính toàn vẹn khi tích hợp với các kho dữ liệu (data warehouses) bên ngoài."
        ],
        skills: ["Mô Hình Hóa Dữ Liệu", "Tự Động Hóa Quy Trình", "Kiểm Thử Hệ Thống", "Thiết Kế Custom Objects"]
      },
      {
        id: 5,
        role: "Lead/Senior Salesforce Developer - Freelancer",
        company: "Vietnam Blockchain Association",
        duration: "Tháng 8 2024 – Tháng 4 2025",
        location: "Việt Nam",
        color: "purple",
        summary: "Đóng vai trò Trưởng nhóm kỹ thuật giám sát chiến lược triển khai nền tảng, kiến trúc bảo mật dữ liệu và mô hình quản trị hiển thị.",
        bullets: [
          "Thiết kế mô hình chia sẻ dữ liệu toàn diện bao gồm các quy tắc chia sẻ theo tiêu chí (criteria-based), trigger chia sẻ thủ công và quy tắc hạn chế.",
          "Định hướng chiến lược triển khai hệ thống để bảo đảm di trú dữ liệu không có thời gian dừng (zero-downtime) và tỷ lệ chấp nhận của người dùng cao.",
          "Áp dụng nghiêm ngặt chính sách bảo mật cấp trường (FLS) và mã hóa để bảo vệ các dữ liệu nhạy cảm của tổ chức.",
          "Cố vấn cho các thành viên cấp dưới về các giới hạn hệ thống, thực hành triển khai và quản lý vòng đời sandbox đúng chuẩn."
        ],
        skills: ["Chia Sẻ & Hiển Thị Dữ Liệu", "Quản Trị Bảo Mật", "Mã Hóa FLS", "Chiến Lược Triển Khai"]
      },
      {
        id: 6,
        role: "Middle Salesforce Developer - Freelancer",
        company: "Kirkendall Dwyer",
        duration: "Tháng 12 2023 – Tháng 12 2024",
        location: "Hoa kỳ",
        color: "emerald",
        summary: "Quản lý cấu hình, tùy biến và vận hành CRM hàng ngày cho các nhánh triển khai Sales và Service Cloud có trụ sở tại Mỹ từ xa.",
        bullets: [
          "Tùy biến các đối tượng Sales và Service Cloud, bố cục trang (page layouts) và loại bản ghi (record types) phù hợp với mô hình vận hành của khách hàng.",
          "Duy trì và tối ưu hóa cấu trúc profile toàn cục, các bộ quyền (permission sets) và phân cấp vai trò người dùng (user role hierarchies).",
          "Xây dựng các dashboard theo dõi trực quan và báo cáo vận hành để cung cấp cho các bên liên quan cái nhìn rõ ràng về các chỉ số hiệu suất chính.",
          "Giải quyết các sự cố production phức tạp, thực hiện ghi đè quản trị và vá các lỗi tự động hóa từ xa."
        ],
        skills: ["Sales & Service Cloud", "Kiểm Soát Quyền Truy Cập", "Báo Cáo & Dashboard", "Hỗ Trợ Production"]
      },
      {
        id: 7,
        role: "Fresher/Junior Salesforce Developer",
        company: "CMC Global",
        duration: "Tháng 11 2021 – Tháng 12 2023",
        location: "Nhật Bản",
        color: "emerald",
        summary: "Xây dựng nền tảng vững chắc về phát triển Salesforce cốt lõi, tham gia bàn giao dự án cho nhiều khách hàng và làm chủ các kiến thức lập trình cơ bản.",
        bullets: [
          "Làm chủ cú pháp nền tảng và ứng dụng của Apex triggers, controllers, và các cấu trúc truy vấn SOQL.",
          "Viết các bộ kiểm thử đơn vị (unit tests) nghiêm ngặt để đạt độ phủ mã nguồn (code coverage) trên 85% cho tất cả các gói triển khai production.",
          "Hỗ trợ xây dựng giao diện người dùng tùy biến sử dụng cấu trúc Aura cơ bản và các thành phần framework LWC ban đầu.",
          "Thực hiện các thao tác tải dữ liệu bằng Data Loader, bảo đảm ánh xạ chính xác và vệ sinh dữ liệu sạch sẽ trong quá trình import."
        ],
        skills: ["Cơ Bản Apex & SOQL", "Kiểm Thử Đơn Vị (Apex)", "Data Loader", "Nền Tảng Core CRM"]
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
        title: "Salesforce Certified Experience Cloud Consultant",
        subtitle: "Cấp tháng: 05/2025",
        badgeColor: "cyan",
        description: "Chứng nhận năng lực thiết kế và triển khai cổng thông tin (Portals), hệ sinh thái khách hàng, đối tác toàn diện và cá nhân hóa trải nghiệm đa kênh.",
        validationId: "SF-EXP-202505",
        keyCapabilities: ["Kiến trúc Experience Cloud", "Thiết kế Cổng cộng đồng", "Tương tác Đa kênh", "Cá nhân hóa Đối tượng"]
      },
      {
        id: 2,
        title: "Salesforce Certified Application Architect",
        subtitle: "Cấp tháng: 03/2025",
        badgeColor: "purple",
        description: "Chứng nhận chuyên gia am hiểu sâu sắc về kiến trúc ứng dụng, quy chuẩn thiết kế tối ưu logic, mô hình phân cấp bảo mật dữ liệu doanh nghiệp phức tạp trên hệ sinh thái Salesforce.",
        validationId: "SF-APP-ARCH-202503",
        keyCapabilities: ["Phân cấp Bảo mật Doanh nghiệp", "Thiết kế Giải pháp Quy mô lớn", "Quy chuẩn Nền tảng Tối ưu", "Chiến lược Phân tầng Dữ liệu"]
      },
      {
        id: 3,
        title: "Salesforce Certified Data Architect",
        subtitle: "Cấp tháng: 03/2025",
        badgeColor: "purple",
        description: "Khẳng định năng lực thiết kế mô hình dữ liệu lớn (LDV), thiết lập quy trình quản trị dữ liệu (Data Governance), tích hợp đa hệ thống và tối ưu hóa hiệu năng truy vấn.",
        validationId: "SF-DATA-ARCH-202503",
        keyCapabilities: ["Xử lý Dữ liệu Lớn (LDV)", "Quản trị & Vòng đời Dữ liệu", "Quản lý Dữ liệu Master (MDM)", "Mô hình Di trú Dữ liệu"]
      },
      {
        id: 4,
        title: "Salesforce Certified AI Associate",
        subtitle: "Cấp tháng: 09/2024",
        badgeColor: "pink",
        description: "Chứng nhận kiến thức nền tảng về đạo đức AI, mô hình dự đoán và khai thác dữ liệu thông minh dựa trên các tính năng của Salesforce Einstein.",
        validationId: "SF-AI-202409",
        keyCapabilities: ["Chiến lược AI trong CRM", "Tính năng Phân tích Einstein", "Xử lý Dữ liệu Đạo đức", "Nền tảng Mô hình Dự đoán"]
      },
      {
        id: 5,
        title: "Salesforce Certified Sharing and Visibility Architect",
        subtitle: "Cấp tháng: 08/2024",
        badgeColor: "purple",
        description: "Chứng nhận năng lực thiết kế kiến trúc phân quyền bảo mật chuyên sâu, xử lý hiệu năng hiển thị bản ghi lớn, cơ chế chia sẻ bằng code và tuân thủ bảo mật dữ liệu.",
        validationId: "SF-SHARING-202408",
        keyCapabilities: ["Cơ chế Chia sẻ bằng Code (Programmatic)", "Cơ chế Chia sẻ Ngầm định", "Tối ưu Hiệu năng Hiển thị", "Cấu trúc Phân cấp Vai trò"]
      },
      {
        id: 6,
        title: "Salesforce Certified JavaScript Developer",
        subtitle: "Cấp tháng: 03/2024",
        badgeColor: "emerald",
        description: "Chứng nhận kỹ năng lập trình JavaScript nâng cao ứng dụng chuyên sâu trong phát triển cấu trúc Lightning Web Components (LWC) và lập trình bất đồng bộ.",
        validationId: "SF-JS-202403",
        keyCapabilities: ["Phát triển LWC Nâng cao", "Lập trình Bất đồng bộ", "Kiến trúc Hướng Sự kiện", "Thao tác DOM & Kiểm thử Code"]
      },
      {
        id: 7,
        title: "Salesforce Certified Platform App Builder",
        subtitle: "Cấp tháng: 04/2023",
        badgeColor: "cyan",
        description: "Chứng nhận năng lực xây dựng ứng dụng tùy biến bằng công cụ cấu hình kéo thả nâng cao và các luồng tự động hóa quy trình (Salesforce Flow).",
        validationId: "SF-APP-BUILDER-202304",
        keyCapabilities: ["Tự động hóa bằng Salesforce Flow", "Cấu hình Ứng dụng Kéo thả", "Thiết kế Giao diện Mobile App", "Ràng buộc Dữ liệu & Công thức"]
      },
      {
        id: 8,
        title: "Salesforce Certified Platform Developer II (PD2)",
        subtitle: "Cấp tháng: 01/2023",
        badgeColor: "emerald",
        description: "Chứng nhận năng lực lập trình Apex nâng cao, tối ưu hóa thuật toán xử lý bất đồng bộ quy mô cực lớn, xây dựng API và các cổng tích hợp doanh nghiệp phức tạp.",
        validationId: "SF-PD2-202301",
        keyCapabilities: ["Apex Bất đồng bộ (Batch/Queueable)", "Tối ưu Truy vấn SOQL/SOSL", "Kiến trúc API Tích hợp", "Custom Metadata & Công cụ Hệ thống"]
      },
      {
        id: 9,
        title: "Salesforce Certified Administrator",
        subtitle: "Cấp tháng: 11/2022",
        badgeColor: "cyan",
        description: "Khẳng định kiến thức nền tảng về quản trị hệ thống, thiết lập cấu hình tổng thể, quản lý người dùng và xây dựng báo cáo phân tích vận hành.",
        validationId: "SF-ADMIN-202211",
        keyCapabilities: ["Quản trị Hệ thống & Bảo mật", "Xây dựng Báo cáo & Dashboard", "Cấu hình Luồng cơ bản", "Bảo trì & Xuất nhập Dữ liệu"]
      },
      {
        id: 10,
        title: "Salesforce Certified Platform Developer I (PD1)",
        subtitle: "Cấp tháng: 09/2022",
        badgeColor: "emerald",
        description: "Chứng nhận kỹ năng lập trình nền tảng trên Lightning Platform bao gồm Apex Triggers, Apex Controllers, câu lệnh SOQL và cấu trúc cơ bản của LWC.",
        validationId: "SF-PD1-202209",
        keyCapabilities: ["Xây dựng Apex Trigger", "Truy vấn Dữ liệu SOQL/SOSL", "Mô hình Thiết kế MVC", "Viết Unit Test & Đạt Độ phủ Code"]
      }
    ],

    // Blog Tab Labels
    blogSectionTitle: 'Chia Sẻ Kiến Thức (Salesforce Insights)',
    blogSectionDesc: 'Các bài viết phân tích giải pháp kỹ thuật chuyên sâu đúc rút từ quá trình triển khai thực tế.',
    blogCategoryLabel: 'Chuyên mục',
    blogReadMoreLabel: 'Đọc bài viết chi tiết',
    blogDrawerHeader: 'Salesforce Insights',
    blogLabelImportant: 'QUAN TRỌNG',
    blogLabelTip: 'GỢI Ý TỐI ƯU',
    blogLabelWarning: 'CẢNH BÁO',
    blogFooterStamp: 'Chia sẻ kiến thức Salesforce & AWS Cloud Integration.',
    
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
- **Zero-Server Middleware:** Salesforce Apex ký trực tiếp và gửi request thẳng lên AWS S3 Endpoint.
- **Security-First:** Keys được lưu trữ an toàn trong Named Credentials hoặc Custom Metadata Type (được mã hóa), không bao giờ gửi key thô qua internet.
- **Heap Size Bypass:** Sử dụng LWC để đọc tệp dưới dạng Blob/Binary tại client, sau đó gửi trực tiếp lên S3 qua Pre-signed URL hoặc ký request đầu cuối để gửi file dung lượng lớn không vượt quá 6MB Apex synchronous heap limit.

> [!IMPORTANT]
> **Lưu ý tối ưu Heap Size:** Đối với các file lớn hơn 3.5MB, hãy tránh xử lý Base64 trong Apex. Thay vào đó, hãy sử dụng **LWC để sinh Pre-signed URL** thông qua Apex, sau đó LWC sẽ thực hiện \`fetch()\` hoặc \`XMLHttpRequest\` đẩy trực tiếp file nhị phân từ browser lên AWS S3.

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
- **Phân tán dữ liệu:** Phân chia các bản ghi con sang nhiều tài khoản mẹ ảo khác nhau.
- **Thiết kế Loose-coupling:** Chuyển đổi liên kết Lookup thành text field nếu không thực sự cần tính toàn vẹn tham chiếu ở mức dữ liệu cứng.

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

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = (lang) => {
    if (lang === 'en' || lang === 'vi') {
      setLanguage(lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};