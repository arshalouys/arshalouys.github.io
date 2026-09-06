// ==============================================================================
// PORTFOLIO DATA & CONTENT CONFIGURATION
// ==============================================================================

export interface SocialLink {
  platform: string;
  url: string;
  iconName: string;
  label: string;
}

export interface BioData {
  name: string;
  handle: string;
  title: string;
  tagline: string;
  editorialQuote: string;
  bioParagraphs: string[];
  location: string;
  timezone: string;
  availability: string;
  isAvailable: boolean;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  xUrl: string;
  socials: SocialLink[];
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  bentoSpan: 'span-2-row' | 'span-2-col' | 'span-1' | 'span-2-full';
  description: string;
  longDescription: string[];
  metrics: ProjectMetric[];
  techTags: string[];
  liveUrl?: string;
  githubUrl?: string;
  accentColor: string;
  badge?: string;
  year: string;
  architectureHighlights: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  timeline: string;
  type: string;
  coreTech: string[];
  summary: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    highlight: string;
    iconName?: string;
  }[];
}

export interface InteractiveSticker {
  id: string;
  text: string;
  subtext?: string;
  badgeType: 'status' | 'tech' | 'mood' | 'stamp' | 'metric';
  color: string;
  bgGradient: string;
  borderColor: string;
  initialX: number;
  initialY: number;
  rotation: number;
  iconName: string;
}

// ==============================================================================
// 1. DATA BIODATA & PROFIL UTAMA
// ==============================================================================

export const portfolioBio: BioData = {
  name: "Achmad",
  handle: "@achmad_dev",
  title: "Computer Science Graduate & AI Operations Specialist",
  tagline: "Achmad",
  editorialQuote: "",
  bioParagraphs: [
    "Bachelor of Computer Science graduate with a strong foundation in spreadsheet management, data validation, and operational quality control. Experienced in handling systematic inventory tracking, error auditing, and strict adherence to structured operational guidelines. Certified C1 Advanced English proficiency with proven capability to comprehend complex, detailed documentation. Combines technical analytical reasoning with high attention to detail to deliver accurate outputs in AI data annotation, model response evaluation, search quality rating, and remote data operations."
  ],
  location: "Indonesia",
  timezone: "WIB (UTC+7)",
  availability: "Available for Remote Operations & AI Data Quality Roles",
  isAvailable: true,
  email: "achmad.dev@gmail.com",
  githubUrl: "https://github.com",
  linkedinUrl: "https://linkedin.com",
  xUrl: "https://x.com",
  socials: [
    { platform: "GitHub", url: "https://github.com", iconName: "Github", label: "github.com/achmad" },
    { platform: "Email", url: "mailto:achmad.dev@gmail.com", iconName: "Mail", label: "achmad.dev@gmail.com" }
  ]
};

// ==============================================================================
// 2. DAFTAR PROYEK (SIDE PROJECTS)
// ==============================================================================

export const portfolioProjects: Project[] = [
  {
    id: "sales-prediction-naive-bayes",
    title: "Sales Prediction System using Naive Bayes",
    subtitle: "Web-Based Inventory & Sales Forecasting Engine",
    category: "Machine Learning | Academic Project",
    featured: false,
    bentoSpan: "span-1",
    description: "Developed a data-driven web application to predict sales trends and support inventory planning using Naive Bayes classification. Processed historical transaction data to categorize demand volume and mitigate stockout risks.",
    longDescription: [
      "Developed a data-driven web application to predict sales trends and support inventory planning using Naive Bayes classification.",
      "Processed historical transaction data to categorize demand volume, analyze feature probabilities, and mitigate stockout risks in inventory operations."
    ],
    metrics: [
      { label: "Model Accuracy", value: "84%+" },
      { label: "Prediction Output", value: "Real-time" },
      { label: "Data Input", value: "Multi-feature" }
    ],
    techTags: ["Naive Bayes", "Python", "Flask / PHP", "MySQL", "Data Classification"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    accentColor: "#3b82f6",
    badge: "Machine Learning | Academic Project",
    year: "2024",
    architectureHighlights: [
      "Naive Bayes classification algorithm applied to multi-feature sales transaction datasets",
      "Automated probability calculation and stockout risk categorization",
      "Relational database schema in MySQL for high-volume inventory records"
    ]
  }
];

// ==============================================================================
// 3. DAFTAR PENGALAMAN KERJA (EXPERIENCE LEDGER)
// ==============================================================================

export const portfolioExperience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "AI Data Annotator & Quality Evaluator",
    company: "Remote AI Operations & Data Services",
    location: "Remote",
    timeline: "2023 — Present",
    type: "Full-Time / Contract",
    coreTech: ["LLM Evaluation", "Data Annotation", "Quality Rating", "C1 English", "Error Auditing"],
    summary: "Handling systematic AI dataset annotation, model response quality rating, and guideline compliance auditing.",
    highlights: [
      "Evaluated 15,000+ LLM model responses against multi-step safety and accuracy guidelines",
      "Maintained 99.4% quality rating score across complex technical evaluation tasks",
      "Applied C1 English proficiency to audit detailed documentation and instruction guidelines"
    ]
  },
  {
    id: "exp-2",
    role: "Data Validation & Operations Specialist",
    company: "Inventory & Quality Management",
    location: "Indonesia",
    timeline: "2022 — 2023",
    type: "Full-Time",
    coreTech: ["Spreadsheet Management", "Data Validation", "Inventory Tracking", "Quality Control"],
    summary: "Managed systematic inventory tracking, spreadsheet validation rules, and operational error auditing.",
    highlights: [
      "Designed error-proof spreadsheet validation workflows, reducing inventory discrepancies by 45%",
      "Audited daily operational logs for compliance with structured company guidelines",
      "Collaborated with cross-functional teams to streamline data reporting"
    ]
  }
];

// ==============================================================================
// 4. DEK SKILL & KEAHLIAN (SKILLS & CAPABILITIES)
// ==============================================================================

export const portfolioSkills: SkillCategory[] = [
  {
    category: "Languages & Communication",
    description: "Language proficiency & technical communication",
    skills: [
      { name: "English (C1 Advanced)", level: "ADVANCED", highlight: "Certified high proficiency, technical documentation", iconName: "Globe" },
      { name: "Indonesian", level: "NATIVE", highlight: "Native proficiency in professional communication", iconName: "Globe" }
    ]
  },
  {
    category: "Data Operations & Evaluation",
    description: "Data operations & quality evaluation tools",
    skills: [
      { name: "Spreadsheet Management", level: "EXPERT", highlight: "Advanced formulas, VLOOKUP, INDEX/MATCH, Pivot", iconName: "Layers" },
      { name: "Data Validation Rules", level: "EXPERT", highlight: "Schema validation, error taxonomy, auditing", iconName: "Gauge" },
      { name: "AI Annotation Platforms", level: "ADVANCED", highlight: "RLHF rating, text classification, prompt evaluation", iconName: "Zap" },
      { name: "Search Quality Rating", level: "ADVANCED", highlight: "Intent matching, factual accuracy verification", iconName: "Sparkles" }
    ]
  },
  {
    category: "Technical & Machine Learning",
    description: "Operational quality & analytical reasoning",
    skills: [
      { name: "Systematic Inventory Tracking", level: "EXPERT", highlight: "Reconciliation workflows, audit logs", iconName: "Box" },
      { name: "Error Auditing", level: "EXPERT", highlight: "Root-cause anomaly detection, guideline adherence", iconName: "Component" },
      { name: "Technical Reasoning", level: "ADVANCED", highlight: "Computer Science analytical problem solving", iconName: "Cpu" }
    ]
  },
  {
    category: "Tools & Environments",
    description: "Software & collaboration tools",
    skills: [
      { name: "Google Sheets / Excel", level: "EXPERT", highlight: "Data cleaning, reporting dashboards", iconName: "FileCode" },
      { name: "Git & GitHub", level: "ADVANCED", highlight: "Version control, repository management", iconName: "GitBranch" },
      { name: "Google Workspace / MS Office", level: "EXPERT", highlight: "Document preparation, remote collaboration", iconName: "Layers" }
    ]
  }
];

// ==============================================================================
// 5. STIKER INTERAKTIF
// ==============================================================================

export const portfolioStickers: InteractiveSticker[] = [
  {
    id: "sticker-collab",
    text: "Open to Collabs",
    subtext: "Remote Operations",
    badgeType: "status",
    color: "#3b82f6",
    bgGradient: "from-blue-500/20 to-indigo-600/30",
    borderColor: "rgba(59, 130, 246, 0.4)",
    initialX: 20,
    initialY: 40,
    rotation: -4,
    iconName: "Sparkles"
  },
  {
    id: "sticker-english",
    text: "C1 Advanced English",
    subtext: "Certified Proficiency",
    badgeType: "tech",
    color: "#14b8a6",
    bgGradient: "from-teal-500/20 to-emerald-600/30",
    borderColor: "rgba(20, 184, 166, 0.4)",
    initialX: 220,
    initialY: 15,
    rotation: 5,
    iconName: "Zap"
  },
  {
    id: "sticker-cs",
    text: "B.Comp.Sc Graduate",
    subtext: "Computer Science",
    badgeType: "stamp",
    color: "#f3f3f1",
    bgGradient: "from-zinc-700/30 to-zinc-900/50",
    borderColor: "rgba(243, 243, 241, 0.25)",
    initialX: 110,
    initialY: 140,
    rotation: -2,
    iconName: "Compass"
  }
];
