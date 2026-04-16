export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samuel-sholarin",
    handle: "samuel-sholarin",
  },
  {
    label: "GitHub",
    href: "https://github.com/Lilproff",
    handle: "Lilproff",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/samuelsholarin",
    handle: "@samuelsholarin",
  },
];

export const FX_RATE = 1450;

export const services = [
  {
    slug: "ai",
    title: "AI Services",
    shortDescription:
      "Chatbots, voice agents, multi-agent platforms and RAG knowledge bases that solve real business problems.",
    description:
      "We build intelligent AI systems — WhatsApp chatbots, web chat, internal AI tools, voice agents, multi-agent automation platforms, RAG knowledge bases, and custom Claude/GPT-powered agents. Fully integrated with your existing workflows.",
    icon: "solar:cpu-bolt-bold-duotone",
    pricing: { sme: "₦267k–₦410k", enterprise: "₦315k–₦500k+" },
    items: [
      "WhatsApp, web & internal AI chatbots",
      "Voice agents (phone & web)",
      "Multi-agent automation platforms",
      "RAG knowledge bases",
      "n8n & Langflow automation",
      "Custom AI agents (Claude API, OpenRouter)",
    ],
    useCases: [
      "Customer support automation",
      "Lead qualification & follow-up",
      "Internal knowledge retrieval",
      "Operations bot for logistics/field work",
    ],
    techStack: ["LangGraph", "CrewAI", "n8n", "Claude API", "OpenRouter", "Langflow", "Supabase pgvector", "Qdrant"],
  },
  {
    slug: "apps",
    title: "Mobile App Development",
    shortDescription:
      "Cross-platform Flutter apps for iOS and Android — consumer, business, and field worker tools.",
    description:
      "We build polished, production-ready Flutter apps for iOS and Android. From consumer fintech apps to B2B logistics tools and healthcare platforms — we handle design, development, and publishing to both app stores.",
    icon: "solar:smartphone-device-bold-duotone",
    pricing: { sme: "₦461k–₦940k", enterprise: "₦543k–₦1.2M+" },
    items: [
      "Cross-platform iOS + Android apps",
      "Fintech & payment apps (Paystack/Flutterwave)",
      "Healthtech & telemedicine apps",
      "Field worker & logistics tools",
      "Education & e-learning apps",
      "App Store + Play Store publishing",
    ],
    useCases: [
      "Customer-facing mobile product",
      "Field worker tracking & reporting",
      "Mobile payment & wallet apps",
      "Student/learning management",
    ],
    techStack: ["Flutter", "Dart", "Supabase", "Firebase", "Paystack SDK", "REST APIs"],
  },
  {
    slug: "web",
    title: "Web Development",
    shortDescription:
      "Business websites, Next.js web apps, SaaS platforms, and multi-tenant client portals.",
    description:
      "We build fast, SEO-optimized business websites and full-stack web applications using Next.js 14, TypeScript, and Supabase. From company landing pages to multi-tenant SaaS platforms — built to scale.",
    icon: "solar:globus-bold-duotone",
    pricing: { sme: "₦267k–₦617k", enterprise: "₦317k–₦867k+" },
    items: [
      "Business & corporate websites",
      "Next.js SaaS platforms",
      "Client portals & internal tools",
      "Multi-tenant web systems",
      "Landing pages & marketing sites",
      "Progressive Web Apps (PWA)",
    ],
    useCases: [
      "Company website with lead generation",
      "SaaS product frontend",
      "Client-facing portal",
      "Multi-vendor marketplace",
    ],
    techStack: ["Next.js 14", "TypeScript", "TailwindCSS", "Supabase", "PostgreSQL", "Vercel"],
  },
  {
    slug: "dashboards",
    title: "Dashboard & Admin Systems",
    shortDescription:
      "KPI dashboards, operational admin panels, and real-time data visualisation systems.",
    description:
      "We build data-rich operational dashboards and admin panels that give teams real-time visibility into their business. Custom charts, KPI tracking, and role-based access control — all fully integrated with your data sources.",
    icon: "solar:graph-bold-duotone",
    pricing: { sme: "₦188k–₦412k", enterprise: "₦236k–₦572k+" },
    items: [
      "KPI & performance dashboards",
      "Operational control panels",
      "Custom admin panels",
      "Real-time data visualisation",
      "Role-based access control",
      "Multi-source data integration",
    ],
    useCases: [
      "Operations monitoring dashboard",
      "Sales & revenue tracking",
      "Fleet or logistics overview",
      "Agent/team performance panel",
    ],
    techStack: ["Next.js", "Recharts", "Chart.js", "Supabase Realtime", "PostgreSQL", "REST/WebSocket"],
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Solutions",
    shortDescription:
      "Your own online store with Paystack/Flutterwave. No monthly fees. No commission.",
    description:
      "We build fully custom e-commerce stores and multi-vendor marketplaces. You own everything — no Shopify fees, no commission. Integrated with Paystack and Flutterwave for seamless Nigerian payments.",
    icon: "solar:cart-large-bold-duotone",
    pricing: { sme: "₦181k–₦917k", enterprise: "₦213k–₦1.3M+" },
    items: [
      "Online stores (Paystack/Flutterwave)",
      "Multi-vendor marketplaces",
      "B2B order & procurement systems",
      "Product catalogue management",
      "Inventory & order tracking",
      "Customer account portals",
    ],
    useCases: [
      "Retail online store",
      "Multi-vendor marketplace",
      "B2B wholesale ordering",
      "Digital products storefront",
    ],
    techStack: ["Next.js", "Supabase", "Paystack", "Flutterwave", "Stripe", "PostgreSQL"],
  },
  {
    slug: "automation",
    title: "Automation & Workflows",
    shortDescription:
      "n8n automation, API integrations, and business process automation that eliminates repetitive work.",
    description:
      "We automate the repetitive, time-consuming parts of your business — lead follow-up, customer communications, data pipelines, report generation, and API integrations — using n8n, custom Python scripts, and cloud services.",
    icon: "solar:restart-bold-duotone",
    pricing: { sme: "₦187k–₦347k", enterprise: "₦203k–₦443k+" },
    items: [
      "n8n workflow automation",
      "WhatsApp & Telegram bots",
      "API integrations (any platform)",
      "Business process automation",
      "Data pipelines & ETL",
      "Automated reporting & alerts",
    ],
    useCases: [
      "Lead follow-up automation",
      "Customer communication automation",
      "Data sync between platforms",
      "Automated invoice & reporting",
    ],
    techStack: ["n8n", "Python/FastAPI", "WhatsApp Cloud API", "Telegram Bot API", "Google Sheets", "Zapier"],
  },
];

export const caseStudies = [
  {
    id: "kamilight",
    client: "Kamilight Global Logistics",
    type: "Client Project",
    status: "Delivered",
    statusColor: "teal",
    industry: "Pan-African Logistics",
    problem:
      "Kamilight Global Logistics was managing 200+ daily customer communications, driver updates, and lead follow-ups entirely by hand. The operations team was overwhelmed and the business was missing leads daily.",
    solution:
      "We built a complete AI automation infrastructure using n8n, WhatsApp Cloud API, and a Telegram operations bot — all running on their own server, with zero per-message fees.",
    whatWasBuilt: [
      "n8n self-hosted automation platform",
      "WhatsApp Cloud API integration for customer messaging",
      "Telegram operations bot for internal team updates",
      "Google Sheets connected as operations database",
      "Apify-powered lead scraping pipeline",
      "Automated follow-up sequences",
    ],
    techStack: ["n8n", "WhatsApp Cloud API", "Telegram Bot API", "Google Sheets", "Apify", "VPS (Hetzner)"],
    metrics: [
      { value: "↓80%", label: "reduction in manual communication time" },
      { value: "200+", label: "automated messages per day" },
      { value: "100%", label: "lead pipeline fully automated" },
      { value: "0", label: "additional staff hired" },
    ],
  },
  {
    id: "agentdesk-trucksoft",
    client: "AgentDesk @ Trucksoft Limited",
    type: "Internal + Client",
    status: "Production",
    statusColor: "gold",
    industry: "Logistics SaaS",
    problem:
      "Trucksoft needed a multi-tenant AI agent platform to power intelligent features across their logistics management product — agents that could handle documentation, customer queries, and operational decisions.",
    solution:
      "We built a full multi-tenant AI agent platform using Python/FastAPI, LangGraph for agent orchestration, Supabase pgvector for RAG memory, Redis for session state, and Docker/Railway for infrastructure.",
    whatWasBuilt: [
      "Multi-tenant agent orchestration system",
      "LangGraph-powered agent pipelines",
      "Supabase pgvector RAG knowledge base",
      "Redis session state management",
      "Docker containerised deployment",
      "REST API for agent interaction",
    ],
    techStack: ["Python/FastAPI", "LangGraph", "Supabase pgvector", "Redis", "Docker", "Railway"],
    metrics: [
      { value: "Multi-tenant", label: "architecture with tenant isolation" },
      { value: "Production", label: "deployed on Railway" },
      { value: "RAG", label: "knowledge base with pgvector" },
      { value: "Proof-of-concept", label: "for AgentDesk SaaS product" },
    ],
  },
];

export const internalProducts = [
  {
    name: "Jarvis OS",
    description: "Personal AI Business Operating System. Claude Code backbone, C-Suite agents, Telegram interface.",
    status: "In Development",
    category: "AI Platform",
  },
  {
    name: "AgentDesk SaaS",
    description: "Multi-tenant AI agent platform for businesses. Fork of Jarvis OS with commercial features.",
    status: "In Development",
    category: "AI SaaS",
  },
  {
    name: "ReachOS",
    description: "AI-powered CRM platform. 10 sub-agents: lead sourcing, outreach, follow-up, support, reporting.",
    status: "In Development",
    category: "CRM SaaS",
  },
  {
    name: "GrowthOS / PostIT",
    description: "Autonomous content marketing SaaS. AI-generated short-form video, posts, ads on autopilot.",
    status: "In Development",
    category: "Marketing SaaS",
  },
  {
    name: "PAIEOS",
    description: "Portable AI Engineer OS on NVMe/USB. Arch Linux + LUKS2 encryption + Jarvis pre-installed.",
    status: "In Development",
    category: "OS / Tooling",
  },
  {
    name: "Erlivus",
    description: "Nigerian barter and resale PWA. Next.js + Supabase Realtime + Paystack integration.",
    status: "MVP Live",
    category: "Marketplace",
  },
  {
    name: "Pocketwise",
    description: "AI finance coach Flutter app. 11-screen app with Claude Haiku-powered financial coaching.",
    status: "In Development",
    category: "Fintech",
  },
];

export const pricingTable = [
  {
    service: "Web Development",
    sme: "₦267k–₦617k",
    enterprise: "₦317k–₦867k+",
  },
  {
    service: "Mobile App",
    sme: "₦461k–₦940k",
    enterprise: "₦543k–₦1.2M+",
  },
  {
    service: "AI Chatbot",
    sme: "₦181k–₦245k",
    enterprise: "₦229k–₦309k+",
  },
  {
    service: "AI Voice Agent",
    sme: "₦245k+",
    enterprise: "₦309k+",
  },
  {
    service: "Dashboard / Admin Panel",
    sme: "₦188k–₦412k",
    enterprise: "₦236k–₦572k+",
  },
  {
    service: "E-Commerce Store",
    sme: "₦181k–₦917k",
    enterprise: "₦213k–₦1.3M+",
  },
  {
    service: "Automation / Workflows",
    sme: "₦187k–₦347k",
    enterprise: "₦203k–₦443k+",
  },
  {
    service: "Monthly Retainer",
    sme: "₦60k–₦100k/mo",
    enterprise: "₦100k–₦300k/mo",
  },
];

export const retainerPlans = [
  {
    name: "Maintain",
    smePrice: "₦60k–₦80k/mo",
    enterprisePrice: "₦80k–₦130k/mo",
    description: "Bug fixes, minor updates, uptime monitoring, and monthly reporting. Keep your system healthy.",
    features: [
      "Bug fixes & minor updates",
      "Uptime monitoring",
      "Monthly status report",
      "4 hours of included work/month",
      "Email support (48hr SLA)",
    ],
  },
  {
    name: "Growth",
    smePrice: "₦75k–₦110k/mo",
    enterprisePrice: "₦110k–₦200k/mo",
    description: "Active development of new features alongside maintenance. For businesses actively scaling.",
    features: [
      "Everything in Maintain",
      "New feature development",
      "8 hours of included work/month",
      "Priority email support (24hr SLA)",
      "Monthly strategy call",
    ],
    highlight: true,
  },
  {
    name: "Scale",
    smePrice: "₦100k–₦170k/mo",
    enterprisePrice: "₦200k–₦350k/mo",
    description: "Dedicated development capacity. Full feature roadmap execution, infrastructure management, team integration.",
    features: [
      "Everything in Growth",
      "20+ hours included/month",
      "Infrastructure management",
      "WhatsApp + email support",
      "Weekly sync call",
      "Dedicated project manager",
    ],
  },
];

export const coreValues = [
  {
    title: "Outcomes over outputs",
    description:
      "We measure success by what changes for the client — not lines of code shipped or features deployed. Did it solve the problem? Did it grow the business?",
    icon: "Target",
  },
  {
    title: "Build it right the first time",
    description:
      "We write documented, tested, secure code. No shortcuts that become technical debt. Every project is built as if we'll maintain it for 5 years.",
    icon: "Shield",
  },
  {
    title: "Honest communication",
    description:
      "Realistic timelines. We raise problems early. We don't promise what we can't deliver. You'll always know exactly where your project stands.",
    icon: "MessageSquare",
  },
  {
    title: "Africa-first thinking",
    description:
      "We build for Nigerian and African market realities: Paystack, WATI, Termii, NDPR compliance, WhatsApp-first UX, and intermittent connectivity.",
    icon: "Globe",
  },
  {
    title: "Continuous building",
    description:
      "We eat our own cooking. The same AI systems we build for clients power our own internal products. We stay sharp by building constantly.",
    icon: "Code2",
  },
];

export const deliveryProcess = [
  {
    step: 1,
    title: "First Contact",
    description: "Reply within 2 hours. We acknowledge your enquiry and confirm we can help.",
  },
  {
    step: 2,
    title: "Qualification",
    description: "5-question WhatsApp qualifying conversation to understand your needs, timeline, and budget.",
  },
  {
    step: 3,
    title: "Discovery Call",
    description: "30–45 minute video call. We listen, ask the right questions, and understand your business before we say anything about technology.",
  },
  {
    step: 4,
    title: "Intake Form",
    description: "You fill a structured intake form covering goals, current systems, users, and success criteria.",
  },
  {
    step: 5,
    title: "Proposal",
    description: "Within 48 hours you receive a clear proposal: scope, timeline, investment, and payment terms.",
  },
  {
    step: 6,
    title: "Agreement + Deposit",
    description: "Service agreement signed. 50% deposit paid. Work begins immediately.",
  },
  {
    step: 7,
    title: "Build",
    description: "We build your system with weekly Friday progress updates. You're never left wondering what's happening.",
  },
  {
    step: 8,
    title: "Delivery + UAT",
    description: "We deliver the complete system. You test it — User Acceptance Testing — and we fix anything that isn't right.",
  },
  {
    step: 9,
    title: "Handover",
    description: "All credentials, source code, documentation, and live training session. You own everything.",
  },
  {
    step: 10,
    title: "Ongoing",
    description: "Retainer support, maintenance, or return for future projects. Many clients are on monthly retainers.",
  },
];

export const techStack = {
  ai: ["Claude API", "OpenRouter", "LangChain", "LangGraph", "CrewAI", "MCP", "n8n", "Langflow"],
  backend: ["Python 3.12 / FastAPI", "Go", "Node.js / Express"],
  frontend: ["Next.js 14", "React", "TailwindCSS", "ShadCN/ui"],
  mobile: ["Flutter / Dart", "React Native / Expo"],
  database: ["Supabase (pgvector)", "MongoDB Atlas", "Redis (Upstash)", "Qdrant Cloud"],
  infrastructure: ["Docker", "Railway", "Vercel", "Hetzner VPS"],
  payments: ["Paystack", "Flutterwave", "Stripe"],
  communications: ["WhatsApp Cloud API", "WATI", "Termii SMS", "Telegram Bot API"],
};

export const companyInfo = {
  name: "Sastech Consults",
  tagline: "We Build What Matters.",
  description: "Technology & AI Consultancy",
  location: "Lagos, Nigeria (CAC Registered)",
  email: "ayomidesholarin13@gmail.com",
  phone: "+2348022324523",
  website: "sastech.com.ng",
  devSite: "sasdev.com",
  founder: {
    name: "Ayomide Sholarin",
    title: "AI Systems Architect",
    credentials: "First Class BSc CS, Dominion University",
    linkedin: "https://linkedin.com/in/samuel-sholarin",
    github: "https://github.com/Lilproff",
    twitter: "https://twitter.com/samuelsholarin",
  },
};
