import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";

type StatusColor = "teal" | "gold";

interface Metric {
  value: string;
  label: string;
}

interface CaseStudy {
  id: string;
  client: string;
  type: string;
  industry: string;
  status: string;
  statusColor: StatusColor;
  problem: string;
  solution: string;
  whatWasBuilt: string[];
  techStack: string[];
  metrics: Metric[];
  image: string;
  imageAlt: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "kamilight",
    client: "Kamilight Global Logistics",
    type: "Client Project",
    industry: "Pan-African Logistics",
    status: "Delivered",
    statusColor: "teal",
    problem:
      "Kamilight Global Logistics was managing 200+ daily customer communications, driver updates, and lead follow-ups entirely by hand. The operations team was overwhelmed and leads were being missed daily.",
    solution:
      "We built a complete AI automation infrastructure using n8n, WhatsApp Cloud API, and a Telegram operations bot — all running on their own server, with zero per-message fees.",
    whatWasBuilt: [
      "n8n self-hosted automation platform",
      "WhatsApp Cloud API integration for customer messaging",
      "Telegram operations bot for internal team updates",
      "Google Sheets connected as operations database",
      "Apify-powered lead scraping pipeline",
      "Automated follow-up message sequences",
    ],
    techStack: ["n8n", "WhatsApp Cloud API", "Telegram Bot API", "Google Sheets", "Apify", "VPS (Hetzner)"],
    metrics: [
      { value: "↓80%", label: "reduction in manual communication time" },
      { value: "200+", label: "automated messages per day" },
      { value: "100%", label: "lead pipeline fully automated" },
      { value: "0", label: "additional staff hired" },
    ],
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "Shipping containers — logistics Africa",
  },
  {
    id: "agentdesk-trucksoft",
    client: "AgentDesk @ Trucksoft Limited",
    type: "Internal + Client",
    industry: "Logistics SaaS",
    status: "Production",
    statusColor: "gold",
    problem:
      "Trucksoft needed a multi-tenant AI agent platform to power intelligent features across their logistics management product — agents that could handle documentation, customer queries, and operational decisions at scale.",
    solution:
      "We built a full multi-tenant AI agent platform using Python/FastAPI, LangGraph for agent orchestration, Supabase pgvector for RAG memory, Redis for session state, and Docker/Railway for infrastructure.",
    whatWasBuilt: [
      "Multi-tenant agent orchestration architecture",
      "LangGraph-powered agent pipelines",
      "Supabase pgvector RAG knowledge base",
      "Redis session state management",
      "Docker containerised deployment on Railway",
      "REST API for agent interaction",
    ],
    techStack: ["Python/FastAPI", "LangGraph", "Supabase pgvector", "Redis", "Docker", "Railway"],
    metrics: [
      { value: "Multi-tenant", label: "architecture with full tenant isolation" },
      { value: "Production", label: "deployed and running on Railway" },
      { value: "RAG", label: "knowledge base with semantic search" },
      { value: "Proof-of-concept", label: "for AgentDesk SaaS commercial product" },
    ],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85&auto=format&fit=crop",
    imageAlt: "AI neural visualization — multi-agent platform",
  },
];

interface InternalProduct {
  name: string;
  description: string;
  status: string;
  category: string;
  icon: string;
}

const internalProducts: InternalProduct[] = [
  {
    name: "Jarvis OS",
    description: "Personal AI Business Operating System. Claude Code backbone, C-Suite agents, Telegram interface.",
    status: "In Development",
    category: "AI Platform",
    icon: "solar:cpu-bolt-bold-duotone",
  },
  {
    name: "AgentDesk SaaS",
    description: "Multi-tenant AI agent platform for businesses. Fork of Jarvis OS with commercial features.",
    status: "In Development",
    category: "AI SaaS",
    icon: "solar:users-group-rounded-bold-duotone",
  },
  {
    name: "ReachOS",
    description: "AI-powered CRM marketing platform. 10 sub-agents: lead sourcing, outreach, follow-up, support.",
    status: "In Development",
    category: "CRM SaaS",
    icon: "solar:target-bold-duotone",
  },
  {
    name: "GrowthOS / PostIT",
    description: "Autonomous content marketing SaaS. AI-generated video and ads on autopilot.",
    status: "In Development",
    category: "Marketing SaaS",
    icon: "solar:restart-bold-duotone",
  },
  {
    name: "PAIEOS",
    description: "Portable AI Engineer OS on NVMe/USB. Arch Linux + LUKS2 encryption + Jarvis pre-installed.",
    status: "In Development",
    category: "OS / Tooling",
    icon: "solar:ssd-round-bold-duotone",
  },
  {
    name: "Erlivus",
    description: "Nigerian resale PWA. Next.js + Supabase Realtime + Paystack checkout.",
    status: "MVP Live",
    category: "Marketplace",
    icon: "solar:globus-bold-duotone",
  },
  {
    name: "Pocketwise",
    description: "AI finance coach app. Claude Haiku-powered coaching for personal finance management.",
    status: "In Development",
    category: "Fintech",
    icon: "solar:wallet-bold-duotone",
  },
];

export default function WorkPage() {
  return (
    <div className="bg-off-white dark:bg-navy min-h-screen text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Our Work | Sastech Consults</title>
        <meta name="description" content="Case studies and internal products from Sastech Consults." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Deployment History
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white max-w-4xl leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Systems in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Production.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              From mission-critical logistics pipelines to autonomous AI agent platforms. We build architectural solutions that stay in production.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Portfolio" title="Delivered Systems" />
          <div className="space-y-24 mt-20">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.id} delay={i * 0.1}>
                <article className="glass-panel overflow-hidden rounded-[48px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 group">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Visual side */}
                    <div className="relative h-[400px] lg:h-auto overflow-hidden">
                      <img
                        src={cs.image}
                        alt={cs.imageAlt}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-60" />
                      
                      <div className="absolute top-8 left-8 flex flex-col gap-2">
                         <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${
                           cs.statusColor === "gold" ? "bg-amber-400/20 text-amber-400 border-amber-400/30" : "bg-[#2dd4bf]/20 text-[#2dd4bf] border-[#2dd4bf]/30"
                         }`}>
                           {cs.status}
                         </span>
                         <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[9px] font-bold uppercase tracking-[0.2em] backdrop-blur-md">
                           {cs.industry}
                         </span>
                      </div>
                    </div>

                    {/* Content side */}
                    <div className="p-10 lg:p-16 flex flex-col justify-center">
                      <div className="mb-10">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>{cs.client}</h2>
                        <div className="space-y-6">
                           <div>
                             <p className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.2em] mb-2">The Challenge</p>
                             <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light">{cs.problem}</p>
                           </div>
                           <div>
                             <p className="text-[10px] font-black text-[#2dd4bf] uppercase tracking-[0.2em] mb-2">The Architectural Solution</p>
                             <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-light mb-6">{cs.solution}</p>
                             <div className="grid grid-cols-2 gap-3">
                               {cs.whatWasBuilt.slice(0, 4).map(item => (
                                 <div key={item} className="flex items-center gap-2">
                                   <Icon icon="solar:check-circle-bold-duotone" className="text-[#2dd4bf] text-sm shrink-0" />
                                   <span className="text-[11px] text-slate-500 font-medium truncate">{item}</span>
                                 </div>
                               ))}
                             </div>
                           </div>
                        </div>
                      </div>

                      {/* Outcomes */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto pt-10 border-t border-slate-200 dark:border-white/5">
                        {cs.metrics.map(metric => (
                          <div key={metric.label}>
                            <p className="text-xl font-black text-slate-900 dark:text-white">{metric.value}</p>
                            <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Building in Public */}
      <section className="py-32 px-6 bg-off-white dark:bg-navy">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            label="Internal R&D"
            title="Building the Future Platform"
            subtitle="We use the same stack for our own products. These are our high-impact Internal systems currently in development."
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {internalProducts.map((product, i) => (
              <Reveal key={product.name} delay={i * 0.1}>
                <div className="p-8 rounded-[32px] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 hover:border-[#38bdf8]/30 hover:bg-white/[0.04] transition-all duration-300 group">
                  <div className="flex items-start justify-between gap-4 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center shrink-0 border border-[#38bdf8]/20 group-hover:scale-110 transition-transform">
                      <Icon icon={product.icon} className="text-2xl text-[#38bdf8]" />
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest ${
                      product.status === "MVP Live" ? "bg-[#2dd4bf]/20 text-[#2dd4bf]" : "bg-white/5 text-slate-600"
                    }`}>
                      {product.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-widest font-black text-[#2dd4bf] mb-4">{product.category}</p>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{product.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Reveal delay={0.5}>
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center gap-3 px-12 py-5 rounded font-black text-[#02040a] tracking-widest text-xs transition-all scale-105"
              >
                REQUEST CUSTOM BUILD
                <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-xl" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
