// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file — the pages update.
// ─────────────────────────────────────────────────────────────

export type Project = {
  slug: string;
  title: string;
  category: string;
  year?: string;
  role: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string;
  description: string[];
  highlights: string[];
  stack: string[];
  links?: { label: string; href: string }[];
};

export type Experience = {
  period: string;
  title: string;
  org: string;
  note: string;
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const profile = {
  name: "Gideon Kiprotich",
  initials: "GK",
  role: "Software Developer",
  location: "Kenya",
  timezone: "Africa/Nairobi",
  available: true,
  status: "Open to opportunities",
  email: "gideonkipro001@gmail.com",
  resumeUrl: "/resume", // in-browser CV viewer
  resumePdf: "/resume.pdf", // direct download
  photo: "", // e.g. "/gideon.jpg" — drop the image in /public
  socials: [
    { label: "GitHub", href: "https://github.com/kiprotichg" },
  ],

  headline: "I build web applications, automate workflows, and connect business systems using Python, PHP, and JavaScript.",

  about: [
    "I am an Information Technology graduate from Kabarak University with hands-on exposure to software development, networking, cybersecurity, and geospatial technology gained through academic projects, mentorships, AI training, and hackathons.",
    "I enjoy solving real-world problems by translating technical requirements into usable, business-focused solutions. My work spans digital systems, GIS-driven analysis, and process automation, with a strong interest in building tools that improve efficiency and decision-making.",
  ],

  education: {
    school: "Kabarak University",
    degree: "Bachelor's Degree in Information Technology",
    period: "2022 — 2025",
  },

  // Keep these honest — recruiters check.
  stats: [
    { value: "6", label: "Projects" },
    { value: "3", label: "Certifications" },
    { value: "3+", label: "Hackathons & bootcamps" },
    { value: "2025", label: "Graduated" },
  ],

  // Short list shown in the scrolling strip and on the hero card.
  tech: [
    "Python",
    "PHP",
    "JavaScript",
    "Business Central",
    "QGIS",
    "Remote Sensing",
    "Machine Learning",
    "Cisco CCNA",
    "Cybersecurity",
    "Git",
  ],

  skillGroups: [
    {
      title: "Software Development",
      items: ["Python", "PHP", "JavaScript", "Web Applications", "Automation Scripts", "Git"],
    },
    {
      title: "Business Systems",
      items: ["Dynamics 365 Business Central", "System Integration", "Data Mapping", "Process Alignment"],
    },
    {
      title: "GIS & Remote Sensing",
      items: ["QGIS", "Digital Mapping", "Spatial Data Analysis", "Satellite & Drone Imagery"],
    },
    {
      title: "Networking & Security",
      items: ["Cisco CCNA 1 & 2", "Network Configuration", "Cybersecurity Principles", "Safe Coding Practices"],
    },
    {
      title: "AI & Data",
      items: ["Machine Learning Basics", "Data Preprocessing", "Model Evaluation"],
    },
    {
      title: "Professional",
      items: ["Teamwork", "Rapid Prototyping", "Technical Presentation", "Problem Solving"],
    },
  ],
};

export const projects: Project[] = [
  {
    slug: "ipoa-portal-integration",
    title: "IPOA Portal Integration with Dynamics 365 Business Central",
    category: "Enterprise / ERP",
    year: "2025",
    role: "Developer · Systems Integration",
    summary: "Integrated a portal-based workflow with Dynamics 365 Business Central to improve data exchange and business process efficiency.",
    problem:
      "Information captured on the IPOA portal needed to flow reliably into back-office processes running on Dynamics 365 Business Central.",
    solution:
      "Mapped operational requirements and business data to system workflows, supporting the integration between the portal and Business Central.",
    impact:
      "Smoother, more consistent information exchange between the digital platform and enterprise processes.",
    description: [
      "Worked on the integration between the IPOA portal and Microsoft Dynamics 365 Business Central, enabling smoother flow of information between a digital platform and enterprise business processes.",
      "The work focused on understanding operational requirements, aligning business data with system workflows, and supporting information exchange across portal and back-office functions.",
      "This project strengthened my understanding of business system integration, operational workflow mapping, and data consistency in enterprise environments.",
    ],
    highlights: [
      "System integration between a web portal and Business Central",
      "Business process alignment and data mapping",
      "Improved visibility and consistency across digital and enterprise workflows",
    ],
    stack: ["Dynamics 365 Business Central", "Portal Integration", "Data Mapping", "Microsoft ERP"],
  },
  {
    slug: "alip-suppliers",
    title: "Alip Suppliers",
    category: "Business Website / Agriculture",
    role: "Web Development",
    summary: "A business website presenting agricultural and veterinary supplies, crop clinic services, and customer enquiry options.",
    problem: "Help visitors find agricultural products, understand available services, and contact the supplier.",
    solution: "Organise product information, crop clinic guidance, news, and contact details in a single website.",
    impact: "A live website where visitors can explore the catalogue and reach the business for enquiries.",
    description: [
      "Alip Suppliers presents crop protection products, fertilizers, and veterinary supplies for Kenyan farmers.",
      "The website includes product categories, a crop clinic section, agricultural articles, and a contact form for customer enquiries.",
    ],
    highlights: [
      "Product catalogue with enquiry options",
      "Crop clinic and service information",
      "Agricultural news and articles",
      "Business contact details and enquiry form",
    ],
    stack: [],
    links: [{ label: "Visit live website", href: "https://www.alipsuppliers.co.ke/" }],
  },
  {
    slug: "gis-mapping",
    title: "GIS & Remote Sensing",
    category: "Geospatial",
    year: "2026",
    role: "Mentee · e4impact Kenya",
    summary: "Mapping and satellite/drone imagery for land and environmental monitoring.",
    problem:
      "Land and environmental decisions are hard to make well without clear, location-based data.",
    solution:
      "Collected, visualised and interpreted spatial data in QGIS, and applied satellite and drone imagery to monitoring scenarios.",
    impact:
      "Practical GIS workflows for impact-oriented projects, shaped with guidance from industry mentors.",
    description: [
      "Through the e4impact Kenya GIS Mentorship Program I collected, visualised and interpreted spatial data in QGIS to support location-based decision making.",
      "I applied remote sensing principles — using satellite and drone-captured imagery — to land and environmental monitoring scenarios, with guidance from industry mentors on structuring GIS projects for real-world impact.",
    ],
    highlights: [
      "Spatial data collection, visualisation and interpretation",
      "Satellite and drone imagery analysis",
      "Impact-oriented project scenarios with fellow mentees",
    ],
    stack: ["QGIS", "Remote Sensing", "Spatial Data"],
  },
  {
    slug: "hackathon-prototypes",
    title: "Hackathon Prototypes",
    category: "Rapid Prototyping",
    year: "2022 — 2025",
    role: "Team Developer",
    summary: "Functional prototypes built under tight deadlines in interschool hackathons.",
    problem: "Deliver a working solution to a set challenge within hours, as a team.",
    solution:
      "Designed and built functional prototypes in shared, version-controlled codebases during team sprints.",
    impact: "Working demos pitched to judging panels, with clear, concise technical storytelling.",
    description: [
      "In fast-paced interschool hackathons I designed and built working prototypes with my team, contributing to shared, version-controlled codebases.",
      "Each sprint ended with a pitch — presenting working solutions to judging panels and translating technical work into clear, concise stories.",
    ],
    highlights: [
      "Rapid prototyping in team sprints",
      "Version-controlled collaborative development",
      "Pitching working solutions to judges",
    ],
    stack: ["JavaScript", "PHP", "Git"],
  },
  {
    slug: "ai-models",
    title: "AI Bootcamp Models",
    category: "Machine Learning",
    year: "2024 — 2025",
    role: "Participant",
    summary: "Small-scale machine learning models, from data preprocessing to evaluation.",
    problem: "Turn core AI and machine learning theory into models that actually work.",
    solution: "Built and tested small-scale models, practising data preprocessing and model evaluation.",
    impact: "Improved prediction accuracy through iteration, delivered with cross-functional teams.",
    description: [
      "In structured AI bootcamps I built and tested small-scale models, turning core AI and machine learning concepts into working solutions.",
      "I practised data preprocessing and model evaluation to improve prediction accuracy, working in cross-functional teams to scope problems and present outcomes.",
    ],
    highlights: [
      "Data preprocessing pipelines",
      "Model training and evaluation",
      "Cross-functional team delivery",
    ],
    stack: ["Python", "Machine Learning"],
  },
  {
    slug: "web-apps",
    title: "Web Applications",
    category: "Web Development",
    year: "2022 — 2025",
    role: "Developer",
    summary: "Small-scale web apps covering front-end interfaces and back-end logic.",
    problem: "Build complete, working web tools end to end — interface, logic and data.",
    solution:
      "Developed web applications in PHP and JavaScript, plus Python scripts for automation and data handling.",
    impact: "Solid full-stack foundations with safe coding practices and vulnerability awareness.",
    description: [
      "Academic and personal web applications built with PHP and JavaScript, covering both the interface and the server-side logic.",
      "Alongside these I wrote Python scripts for automation and data handling, and configured test networks to apply Cisco CCNA fundamentals.",
    ],
    highlights: [
      "Full front-end + back-end builds",
      "Python automation scripts",
      "Safe coding practices and vulnerability awareness",
    ],
    stack: ["PHP", "JavaScript", "Python"],
  },
];

export const experience: Experience[] = [
  {
    period: "2026",
    title: "GIS Mentorship Program",
    org: "e4impact Kenya",
    note: "GIS fundamentals, digital mapping and remote sensing with industry mentors — collecting, visualising and interpreting spatial data for location-based decisions.",
  },
  {
    period: "2024 — 2025",
    title: "AI Bootcamps",
    org: "Structured training",
    note: "Built and tested small-scale AI models; practised data preprocessing and model evaluation in cross-functional teams.",
  },
  {
    period: "2022 — 2025",
    title: "Interschool Hackathons",
    org: "Team competitions",
    note: "Designed and built functional prototypes under tight deadlines and pitched working solutions to judging panels.",
  },
  {
    period: "2022 — 2025",
    title: "BSc. Information Technology",
    org: "Kabarak University",
    note: "Programming, networking, cybersecurity and information systems.",
  },
];

export const certifications: Certification[] = [
  { title: "CCNA Networking — Modules 1 & 2", issuer: "Cisco Networking Academy", year: "Certified" },
  { title: "Cybersecurity Track", issuer: "Skies Mentorship Program", year: "Certified" },
  { title: "GIS Mentorship Program", issuer: "e4impact Kenya", year: "2026" },
];
