import {
  CssIcon,
  DockerIcon,
  ExpressIcon,
  ExternalLinkIcon,
  FigmaIcon,
  FirebaseIcon,
  FramerMotionIcon,
  GitHubIcon,
  GoIcon,
  GraphQLIcon,
  HtmlIcon,
  JsIcon,
  LinkedInIcon,
  MaterialUIIcon,
  MongoDBIcon,
  MySQLIcon,
  NextjsIcon,
  NodejsIcon,
  PostgreSQLIcon,
  PrismaIcon,
  ReactIcon,
  ReactNativeIcon,
  ReactQueryIcon,
  ReduxIcon,
  StripeIcon,
  TailwindIcon,
  TauriIcon,
  TypeScriptIcon,
} from "@/components/svg-icons";

export const SKILL_DATA = [
  { skill_name: "Framer Motion", icon: FramerMotionIcon, width: 70, height: 70 },
  { skill_name: "Stripe", icon: StripeIcon, width: 70, height: 70 },
];

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    link: "https://www.linkedin.com/in/adarshvinodkumarsingh",
  },
  {
    name: "GitHub",
    icon: GitHubIcon,
    link: "https://github.com/adarsh22-dev",
  },
  {
    name: "Portfolio",
    icon: ExternalLinkIcon,
    link: "https://portfolio-7nhi.vercel.app/",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "HTML", icon: HtmlIcon, width: 70, height: 70 },
  { skill_name: "CSS", icon: CssIcon, width: 70, height: 70 },
  { skill_name: "JavaScript", icon: JsIcon, width: 70, height: 70 },
  { skill_name: "Tailwind CSS", icon: TailwindIcon, width: 70, height: 70 },
  { skill_name: "Material UI", icon: MaterialUIIcon, width: 70, height: 70 },
  { skill_name: "React", icon: ReactIcon, width: 70, height: 70 },
  { skill_name: "Redux", icon: ReduxIcon, width: 70, height: 70 },
  { skill_name: "React Query", icon: ReactQueryIcon, width: 70, height: 70 },
  { skill_name: "TypeScript", icon: TypeScriptIcon, width: 70, height: 70 },
  { skill_name: "Next.js 14", icon: NextjsIcon, width: 70, height: 70 },
];

export const BACKEND_SKILL = [
  { skill_name: "Node.js", icon: NodejsIcon, width: 70, height: 70 },
  { skill_name: "Express.js", icon: ExpressIcon, width: 70, height: 70 },
  { skill_name: "MongoDB", icon: MongoDBIcon, width: 70, height: 70 },
  { skill_name: "Firebase", icon: FirebaseIcon, width: 70, height: 70 },
  { skill_name: "PostgreSQL", icon: PostgreSQLIcon, width: 70, height: 70 },
  { skill_name: "MySQL", icon: MySQLIcon, width: 70, height: 70 },
  { skill_name: "Prisma", icon: PrismaIcon, width: 70, height: 70 },
  { skill_name: "Graphql", icon: GraphQLIcon, width: 70, height: 70 },
];

export const FULLSTACK_SKILL = [
  { skill_name: "React Native", icon: ReactNativeIcon, width: 70, height: 70 },
  { skill_name: "Tauri", icon: TauriIcon, width: 70, height: 70 },
  { skill_name: "Docker", icon: DockerIcon, width: 70, height: 70 },
  { skill_name: "Figma", icon: FigmaIcon, width: 70, height: 70 },
];

export const OTHER_SKILL = [
  { skill_name: "Go", icon: GoIcon, width: 70, height: 70 },
];

export const PROJECTS = [
  {
    title: "MicroGPT Pro - AI Creative Suite",
    description:
      'Full-stack AI platform combining coding, research, and visual generation. Features AI Vision Studio with multiple aspect ratios and style presets (Cyberpunk, Anime, Cinematic), multi-LLM chat system (OpenAI + Gemini), and real-time transformer diagnostics.',
    image: "/projects/project-1.png",
    link: "https://github.com/adarsh22-dev/MicroGPT-Pro",
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion", "Node.js", "Express", "SQLite", "OpenAI", "Gemini"],
    period: "Feb 2026 - Present",
  },
  {
    title: "AstraBharat — Cognitive AI Workspace",
    description:
      'Unified AI-powered productivity platform with multi-model AI chat studio, SEO intelligence, market research engine, creative generation studio, eCommerce automation, and project management. Features serverless SQLite via WebAssembly, multi-AI provider failover, and privacy-first local data persistence.',
    image: "/projects/project-2.png",
    link: "https://github.com/adarsh22-dev/AstraBharat-AI",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "SQLite (sql.js)", "WebAssembly", "Vite"],
    period: "Jan 2026 - Present",
  },
  {
    title: "Shopify AI Assistant",
    description:
      'Embedded Shopify app for conversational commerce. AI-powered product discovery with personalized recommendations, real-time order tracking, automated customer support, smart upselling, customizable chat widget, admin dashboard with analytics, and webhook-based real-time updates.',
    image: "/projects/project-3.png",
    link: "https://github.com/adarsh22-dev/Shopify-AI-Assistant-Embedded-App-for-Conversational-Commerces",
    tech: ["React", "Tailwind CSS", "Shopify Polaris", "Node.js", "Express", "Socket.IO", "Gemini AI", "Recharts"],
    period: "Jan 2026 - Present",
  },
  {
    title: "VitalCare Hospital Management",
    description:
      'AI-powered Hospital Management System automating patient management, appointment scheduling, pharmacy inventory, laboratory operations, bed allocation, and billing. Features AI diagnosis assistant, smart doctor matching, and real-time operational dashboards.',
    image: "/projects/project-4.png",
    link: "https://github.com/adarsh22-dev/VitalCare-Hospital-Management",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AI Integration"],
    period: "Nov 2025 - Feb 2026",
  },
  {
    title: "RiskSphere - Enterprise GRC Platform",
    description:
      'Production-grade Governance, Risk, and Compliance platform with multi-tenant architecture, RBAC security, automated risk scoring, compliance tracking (ISO 27001, SOC 2, GDPR), incident management, and AI Risk Assistant powered by Google Gemini.',
    image: "/projects/project-5.png",
    link: "https://github.com/adarsh22-dev/RiskSphere-Enterprise-Risk-Compliance-Management-Platform",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "RBAC", "Gemini AI"],
    period: "Dec 2025 - Jan 2026",
  },
  {
    title: "NexusAI-OS",
    description:
      'Production-ready AI agent platform with 30+ CrewAI multi-agent projects, interactive Streamlit demos, RAG systems with vector databases, FastAPI backend pipelines, and real-time observability with OpenTelemetry.',
    image: "/projects/project-1.png",
    link: "https://github.com/adarsh22-dev/NexusAI-OS",
    tech: ["Python", "CrewAI", "FastAPI", "RAG", "OpenTelemetry", "Streamlit", "Docker"],
    period: "2025",
  },
  {
    title: "Zabiva - Shopify Migration",
    description:
      'Complete OpenCart to Shopify Plus migration for Zabiva. Custom theme development, data migration via CSV and API, 301 redirects and SEO preservation, custom app integrations, and performance optimization.',
    image: "/projects/project-2.png",
    link: "https://zabiva.com",
    tech: ["Shopify Plus", "Liquid", "TailwindCSS", "JavaScript"],
    period: "Feb 2025 - Present",
  },
  {
    title: "pur-shilajit - Shopify Store",
    description:
      'Shopify store development for pur-shilajit with custom theme, product management, and conversion optimization.',
    image: "/projects/project-3.png",
    link: "https://pur-shilajit.com",
    tech: ["Shopify", "Liquid", "CRO"],
    period: "Sep 2024 - Present",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "GitHub",
    data: [
      {
        name: "Profile",
        icon: GitHubIcon,
        link: "https://github.com/adarsh22-dev",
      },
      {
        name: "Portfolio Repo",
        icon: GitHubIcon,
        link: "https://github.com/adarsh22-dev/space-portfolio",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: LinkedInIcon,
        link: "https://www.linkedin.com/in/adarshvinodkumarsingh",
      },
      {
        name: "Portfolio",
        icon: ExternalLinkIcon,
        link: "https://portfolio-7nhi.vercel.app/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Phone: 8828186537",
        icon: null,
        link: "tel:8828186537",
      },
      {
        name: "Email Me",
        icon: null,
        link: "mailto:adarshsingh55555ac@gmail.com",
      },
    ],
  },
] as const;

export const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "CISAI | Kerala, India",
    period: "Jul 2025 - Present",
    description: "Shipping production web features end-to-end. Handling releases, QA, and post-release support. Building AI-powered workflows, automation systems, and agentic AI features. Integrating LLM-powered decision engines with existing infrastructure.",
    tags: ["React", "Next.js", "TypeScript", "AI Agents", "Automation", "Python", "FastAPI"],
    problem: "Manual SOC operations and security workflows required significant human intervention, leading to slow response times and operational inefficiency.",
    solution: "Designed and deployed AI-driven agentic workflows integrating LLM-powered decision engines with existing security infrastructure. Built RAG pipelines for threat intelligence retrieval and automated incident response.",
    impact: "Reduced manual security operations effort by 70%, automated SOC workflows, and achieved real-time threat detection and response.",
  },
  {
    title: "Software Developer",
    company: "Ergode | India",
    period: "Jan 2025 - Jun 2025",
    description: "Developed scalable frontend features using JavaScript and modern UI patterns. Automated frontend and operational workflows, reducing manual effort by approximately 70%. Built API integrations and data-handling systems.",
    tags: ["JavaScript", "API Integration", "Automation", "React", "Large Datasets"],
    problem: "Manual frontend workflows and operational processes consumed excessive engineering time, slowing delivery cycles.",
    solution: "Built automated frontend pipelines and reusable component systems. Integrated REST APIs with efficient data handling for large datasets.",
    impact: "Reduced manual effort by approximately 70%, accelerated feature delivery, and improved code maintainability.",
  },
  {
    title: "Senior Shopify Developer",
    company: "Semtitans Digital Private Limited | Navi Mumbai",
    period: "Sep 2023 - Oct 2024",
    description: "Led Shopify store development and OpenCart-to-Shopify migrations for multiple clients. Built custom themes, integrated third-party apps, optimized Core Web Vitals, and improved conversion rates through UI/UX enhancements and performance optimization.",
    tags: ["Shopify Plus", "React", "Liquid", "TailwindCSS", "CRO", "Migration"],
    problem: "Ecommerce stores suffered from poor load times, low conversion rates, and inconsistent user experiences across multiple client sites.",
    solution: "Developed optimized Shopify themes using TailwindCSS and React. Built modular, reusable component libraries and automated frontend build pipelines. Led OpenCart-to-Shopify migrations with 301 redirects, data migration, and SEO preservation.",
    impact: "Delivered multiple Shopify stores with improved conversion rates, reduced page load times, and consistent enterprise-grade UX across all client properties.",
  },
  {
    title: "Frontend Developer",
    company: "Biogetica | Mumbai",
    period: "Jan 2020 - Oct 2021",
    description: "Built and maintained frontend interfaces for content-driven and ecommerce websites. Improved UI performance, responsiveness, and resolved integration issues with third-party services.",
    tags: ["WordPress", "PHP", "UI/UX", "Performance", "JavaScript"],
    problem: "Legacy WordPress sites had performance bottlenecks, poor responsiveness, and integration issues with third-party services.",
    solution: "Refactored frontend architecture, optimized asset delivery, and implemented responsive design patterns. Resolved API and plugin integration issues.",
    impact: "Improved site performance scores, delivered seamless mobile experiences, and stabilized third-party integrations.",
  },
] as const;

export const EDUCATION = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bharati Vidyapeeth",
    period: "Jul 2017 - Jul 2021",
    description: "Computer Science program with focus on software development, data structures, and modern computing paradigms.",
  },
] as const;

export const CERTIFICATIONS = [
  {
    title: "Building AI Agents and Agentic Workflows Specialization",
    issuer: "IBM",
    date: "Jun 2026",
    link: "#",
    credentialId: "RDW4KCKRSYK1",
    skills: ["Agentic Systems", "AI Integrations", "RAG", "LLM Application", "Generative AI Agents", "Automation"],
  },
  {
    title: "Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI",
    issuer: "Coursera",
    date: "Jun 2026",
    link: "#",
    skills: ["AI Agents", "LangGraph", "CrewAI", "AutoGen", "BeeAI"],
  },
  {
    title: "Generative AI Mastermind",
    issuer: "Outskill",
    date: "May 2026",
    link: "#",
    skills: ["AI Agents", "Generative AI", "AI Product Development", "Agentic AI Development", "Full-Stack Development"],
  },
  {
    title: "Claude Code in Action",
    issuer: "Anthropic",
    date: "Mar 2026",
    link: "#",
    credentialId: "ckd9j9wnja75",
    skills: ["Artificial Intelligence", "Generative AI", "Prompt Engineering", "AI Coding Assistants", "Software Development"],
  },
  {
    title: "JPMorganChase - Software Engineering Job Simulation",
    issuer: "Forage",
    date: "Mar 2026",
    link: "#",
    credentialId: "sPfyooGS6LD8RKrmh",
    skills: ["Spring Framework", "Java Programming", "REST API", "SQL Database", "Message Queuing"],
  },
  {
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Mar 2026",
    link: "#",
    credentialId: "xkod36pRwEhq7Jttn",
    skills: ["Data Analysis", "Tableau", "Data Visualization", "Microsoft Excel"],
  },
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "May 2024",
    link: "#",
    skills: ["UX Design", "Design Thinking", "Wireframing", "Prototyping"],
  },
  {
    title: "Google Project Management Certificate",
    issuer: "Google",
    date: "Apr 2024",
    link: "#",
    skills: ["Project Management", "Agile", "Risk Management"],
  },
  {
    title: "Complete Generative AI: Build Pro Web, Mobile & SaaS Apps",
    issuer: "Udemy",
    date: "Feb 2025",
    link: "#",
    skills: ["Generative AI", "Web Development", "SaaS Architecture"],
  },
  {
    title: "Python Bootcamp: Master Python Programming in 2024",
    issuer: "Udemy",
    date: "Apr 2024",
    link: "#",
    skills: ["Python", "Programming", "Automation"],
  },
  {
    title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    issuer: "Udemy",
    date: "Mar 2024",
    link: "#",
    credentialId: "UC-93c3f9be-0ec0-42bb-a9e4-c628f92fd9d5",
    skills: ["React.js", "Redux.js", "React Router"],
  },
  {
    title: "Shopify Theme Development: Online Store 2.0 + TailwindCSS",
    issuer: "Udemy",
    date: "2024",
    link: "#",
    credentialId: "UC-2b0b7711-370d-4fbf-a13f-09f3249b5f99",
    skills: ["Shopify", "TailwindCSS", "Performance Optimization", "CRO"],
  },
  {
    title: "Shopify App Development - Vanilla PHP, GraphQL, & REST API",
    issuer: "Udemy",
    date: "2024",
    link: "#",
    credentialId: "UC-b3b31b65-9a27-47b3-8289-db97b71940d1",
    skills: ["Shopify", "PHP", "GraphQL", "REST API"],
  },
  {
    title: "Simplified Magento 2: Video Course - From Beginner To Expert",
    issuer: "Udemy",
    date: "Nov 2023",
    link: "#",
    credentialId: "UC-962b7932-3e6e-400f-8231-c2602623ee54",
    skills: ["Magento 2", "E-Commerce", "PHP"],
  },
  {
    title: "Computer Hardware",
    issuer: "PMKVY SKILL INDIA CENTER",
    date: "2023",
    link: "#",
    skills: ["Hardware", "Troubleshooting"],
  },
];

export const FUTURE_CERTIFICATIONS = [
  {
    title: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Cloud architecture and enterprise infrastructure design.",
  },
  {
    title: "Azure AI Engineer",
    issuer: "Microsoft",
    description: "AI and machine learning solutions on Azure cloud platform.",
  },
  {
    title: "Shopify Partner Certification",
    issuer: "Shopify",
    description: "Advanced Shopify Plus development and ecosystem expertise.",
  },
  {
    title: "Google Cloud AI",
    issuer: "Google Cloud",
    description: "AI/ML engineering on Google Cloud Platform.",
  },
];

export const EXECUTIVE_SUMMARY = {
  tagline: "Senior Software Engineer delivering enterprise-grade ecommerce, AI automation, and digital transformation solutions.",
  highlights: [
    "6+ years building scalable platforms for Shopify Plus, AI Agents, and Enterprise Systems",
    "Architected AI-driven workflows reducing operational effort by 70%",
    "Delivered 50+ high-performance ecommerce stores with measurable conversion improvements",
    "Built production RAG pipelines, LLM orchestration, and agentic AI systems",
  ],
};

export const IMPACT_METRICS = [
  { value: "50+", label: "Websites Delivered", suffix: "" },
  { value: "6", label: "Years Experience", suffix: "+" },
  { value: "70", label: "Workflow Automation", suffix: "%" },
  { value: "500K+", label: "Monthly User Reach", suffix: "" },
  { value: "20+", label: "Enterprise Clients", suffix: "" },
  { value: "100+", label: "Integrations Delivered", suffix: "" },
];

export const CORE_EXPERTISE = [
  {
    category: "Commerce",
    skills: ["Shopify Plus", "CRO", "Headless Commerce", "Checkout Extensions"],
    icon: "BriefcaseIcon",
    description: "Enterprise ecommerce architecture and optimization.",
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    icon: "CodeIcon",
    description: "High-performance, scalable user interfaces.",
  },
  {
    category: "AI",
    skills: ["OpenAI", "Claude", "RAG", "Agentic Workflows", "MCP", "LangChain", "Vector Databases"],
    icon: "BrainIcon",
    description: "Production AI agents and intelligent automation.",
  },
  {
    category: "Cloud",
    skills: ["AWS", "Vercel", "Docker", "CI/CD"],
    icon: "CloudIcon",
    description: "Scalable cloud infrastructure and deployment.",
  },
];

export const SKILLS_MATRIX = [
  { area: "Frontend", skills: "React, Next.js, TypeScript, Tailwind CSS, Redux, Framer Motion" },
  { area: "Commerce", skills: "Shopify Plus, Liquid, Headless Commerce, Checkout Extensions, CRO" },
  { area: "AI", skills: "OpenAI, Claude, LangChain, RAG, Agentic Workflows, MCP, Vector Databases" },
  { area: "Cloud", skills: "AWS, Vercel, Docker, CI/CD, Cloud Architecture" },
  { area: "Databases", skills: "MongoDB, PostgreSQL, MySQL, Prisma, Firebase" },
  { area: "Security", skills: "IAM, OWASP, AI Security, SOC Automation" },
];

export const CASE_STUDIES = [
  {
    title: "NexusAI-OS",
    subtitle: "Multi-Agent AI Platform",
    problem: "Building production-ready AI agent systems requires complex orchestration of multiple AI models, RAG pipelines, and observability infrastructure. Existing solutions lacked integrated demos and real-time monitoring.",
    solution: "Architected a comprehensive AI agent platform with 30+ CrewAI multi-agent projects, FastAPI backend pipelines, interactive Streamlit demos, and real-time observability with OpenTelemetry. Integrated RAG systems with vector databases for contextual retrieval.",
    techStack: ["Python", "CrewAI", "FastAPI", "RAG", "OpenTelemetry", "Streamlit", "Docker"],
    impact: "30+ production-ready AI agent projects delivered with interactive demos, real-time monitoring, and enterprise-grade architecture supporting multiple AI model integrations.",
  },
  {
    title: "AstraBharat-AI",
    subtitle: "Unified AI Workspace for Bharat",
    problem: "Indian users face a gap between cloud AI capabilities and local AI accessibility. Existing tools lack multilingual support, privacy controls, and integrated development workflows for the Bharat context.",
    solution: "Built a unified AI workspace combining cloud AI models (OpenAI, Gemini) with local AI via Ollama. Implemented coding assistants, research automation, design-to-code agents, and strong privacy controls with multilingual support.",
    techStack: ["TypeScript", "React", "Ollama", "OpenAI", "RAG", "Python", "FastAPI"],
    impact: "Delivered a privacy-first AI workspace bridging cloud and local AI with support for coding, research, automation, and design workflows tailored for Indian users.",
  },
  {
    title: "RiskSphere GRC",
    subtitle: "Enterprise Risk Management",
    problem: "Organizations struggle with fragmented risk management, compliance tracking, and incident response across distributed teams and regulatory requirements.",
    solution: "Designed a multi-tenant enterprise GRC platform with RBAC security, automated risk scoring, compliance tracking workflows, real-time incident management, and comprehensive analytics dashboards.",
    techStack: ["TypeScript", "React", "Node.js", "PostgreSQL", "RBAC", "REST API", "Docker"],
    impact: "Enterprise-grade risk and compliance platform with multi-tenant architecture, real-time reporting, and automated compliance workflows.",
  },
];

export const AI_INNOVATION = [
  { title: "AI Agents", description: "Autonomous AI agents for complex task execution and decision-making." },
  { title: "MCP Servers", description: "Model Context Protocol servers for standardized AI tool integration." },
  { title: "RAG Pipelines", description: "Retrieval-Augmented Generation for accurate, context-aware AI responses." },
  { title: "Autonomous Workflows", description: "Self-executing workflow automation with AI-driven decision nodes." },
  { title: "Prompt Engineering", description: "Advanced prompt strategies for optimal LLM outputs." },
  { title: "AI Security", description: "Secure AI implementation with guardrails, monitoring, and compliance." },
  { title: "Agent Orchestration", description: "Multi-agent coordination for complex enterprise workflows." },
];

export const OPEN_SOURCE = [
  {
    name: "AgileMind-AI",
    description: "AI-powered project management platform that transforms requirements into tasks, predicts timelines, and detects bottlenecks.",
    stars: "Public",
    language: "TypeScript",
    link: "https://github.com/adarsh22-dev/AgileMind-AI",
  },
  {
    name: "VitalCare Hospital Management",
    description: "Intelligent HMS streamlining patient records, appointments, pharmacy, labs, and billing with AI-powered scheduling.",
    stars: "Public",
    language: "TypeScript",
    link: "https://github.com/adarsh22-dev/VitalCare-Hospital-Management",
  },
  {
    name: "EmpowerHome Vendor Portal",
    description: "Full-stack multi-vendor e-commerce platform supporting retail, wholesale, and product exchange.",
    stars: "Public",
    language: "TypeScript",
    link: "https://github.com/adarsh22-dev/EmpowerHome-Vendor-Portal",
  },
  {
    name: "ZenithHR",
    description: "Full-stack employee management system with role-based access, leave tracking, and real-time HR dashboards.",
    stars: "Public",
    language: "TypeScript",
    link: "https://github.com/adarsh22-dev/ZenithHR",
  },
  {
    name: "Shopify AI Assistant",
    description: "AI-powered Shopify assistant integrating Google Gemini for conversational commerce.",
    stars: "Public",
    language: "TypeScript",
    link: "https://github.com/adarsh22-dev/Shopify-AI-Assistant-Embedded-App-for-Conversational-Commerces",
  },
  {
    name: "RiskSphere GRC",
    description: "Enterprise risk, compliance, and incident management platform with multi-tenant architecture.",
    stars: "Public",
    language: "TypeScript",
    link: "https://github.com/adarsh22-dev/RiskSphere-Enterprise-Risk-Compliance-Management-Platform",
  },
];

export const COMMUNITY_LEADERSHIP = [
  {
    title: "Technical Mentorship",
    description: "Mentoring junior developers in React, modern frontend practices, and career growth.",
    icon: "UsersIcon",
  },
  {
    title: "Knowledge Sharing",
    description: "Regular technical knowledge-sharing sessions on AI, frontend architecture, and best practices.",
    icon: "BookOpenIcon",
  },
  {
    title: "AYUDH Community",
    description: "Active participation in AYUDH spiritual leadership initiatives and community service programs.",
    icon: "UsersIcon",
  },
  {
    title: "Community Events",
    description: "Organizing and speaking at developer meetups and community technology events.",
    icon: "MessageCircleIcon",
  },
];

export const THOUGHT_LEADERSHIP = [
  {
    title: "Shopify Performance Optimization",
    description: "Core Web Vitals, caching strategies, and enterprise Shopify performance patterns.",
    link: "#",
  },
  {
    title: "Building Production AI Agents",
    description: "Architecture patterns for reliable, scalable agentic AI systems.",
    link: "#",
  },
  {
    title: "Headless Commerce with Next.js",
    description: "Modern ecommerce architecture patterns and implementation guide.",
    link: "#",
  },
  {
    title: "CRO Strategies for Enterprise Ecommerce",
    description: "Data-driven conversion optimization techniques for high-traffic stores.",
    link: "#",
  },
  {
    title: "RAG Systems for Enterprise",
    description: "Building production-grade retrieval-augmented generation pipelines.",
    link: "#",
  },
];

export const TESTIMONIALS = [
  {
    quote: "Adarsh consistently delivers high-quality frontend solutions with exceptional attention to performance and user experience. His expertise in React and modern JavaScript frameworks significantly improved our development velocity.",
    author: "Engineering Manager",
    role: "Previous Organization",
  },
  {
    quote: "Working with Adarsh on Shopify Plus projects was seamless. His deep understanding of ecommerce architecture and ability to optimize for Core Web Vitals resulted in measurable improvements in store performance and conversion rates.",
    author: "Client Partner",
    role: "Digital Agency",
  },
  {
    quote: "Adarsh's work on AI agent systems was impressive. He designed and implemented complex workflows that automated what previously required significant manual effort, demonstrating strong technical leadership.",
    author: "Team Lead",
    role: "CISAI",
  },
];

export const AWARDS = [
  {
    title: "Client Appreciation Award",
    description: "Recognized for exceptional delivery on enterprise Shopify Plus projects.",
    date: "2024",
  },
  {
    title: "Top Performer",
    description: "Acknowledged for outstanding contribution to frontend architecture and team velocity.",
    date: "2023",
  },
  {
    title: "Innovation Recognition",
    description: "Awarded for pioneering AI workflow automation and agentic system implementation.",
    date: "2025",
  },
];

export const CONTACT_INFO = {
  email: "adarshsingh55555ac@gmail.com",
  phone: "8828186537",
  location: "India",
  availability: ["Full-Time", "Consulting", "Contract", "Remote"],
  resumeUrl: "#",
};

export const NAV_LINKS = [
  { title: "About", link: "#about" },
  { title: "Experience", link: "#experience" },
  { title: "Case Studies", link: "#case-studies" },
  { title: "AI Lab", link: "#ai-lab" },
  { title: "Skills", link: "#skills" },
  { title: "Certifications", link: "#certifications" },
  { title: "Contact", link: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/adarsh22-dev/space-portfolio",
};
