import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { services, FX_RATE } from "@/lib/data";
import { formatNGNtoUSD } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";

const service = services.find(s => s.slug === 'automation')!;

export default function AutomationServicePage() {
  return (
    <div className="bg-off-white dark:bg-[#02040a] min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Automation & Workflows | Sastech Consults</title>
        <meta name="description" content="Connect your tools and automate manual tasks with n8n and custom integration pipelines." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#38bdf8] text-xs font-bold uppercase tracking-widest mb-10 hover:gap-3 transition-all duration-300">
              <Icon icon="solar:arrow-left-linear" className="text-lg" /> Back to Services
            </Link>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-16 h-16 rounded-2xl bg-[#38bdf8]/10 border border-[#38bdf8]/20 flex items-center justify-center mb-8">
              <Icon icon="solar:restart-bold-duotone" className="text-4xl text-[#38bdf8]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-3xl leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Scale Automatically.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10">
              We automate the repetitive, mission-critical workflows in your business. Lead follow-up, API scaling, and data pipelines — all running without friction.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                SME: {service.pricing.sme} <span className="text-slate-600 ml-1">({formatNGNtoUSD(service.pricing.sme, FX_RATE)})</span>
              </span>
              <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                Enterprise: {service.pricing.enterprise} <span className="text-slate-600 ml-1">({formatNGNtoUSD(service.pricing.enterprise, FX_RATE)})</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Categories */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader label="What We Automate" title="Blueprint Workflows" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Lead Acquisition",
                desc: "Automatic personalisation and follow-up for new leads across WhatsApp and email.",
                icon: "solar:user-plus-bold-duotone",
                items: ["WhatsApp Auto-reply", "Email Drip Logic", "Lead Scoring", "CRM Auto-sync"]
              },
              {
                title: "Custom Integrations",
                desc: "Connect disparate platforms through custom API pipelines and secure webhook handlers.",
                icon: "solar:link-bold-duotone",
                items: ["API Orchestration", "Data Mapping", "Error Recovery", "Secure Webhooks"]
              },
              {
                title: "Process Control",
                desc: "Convert manual SOPs into automated approval and routing flows for your team.",
                icon: "solar:settings-bold-duotone",
                items: ["Approval Hubs", "Document Routing", "Staff Notification", "Audit History"]
              },
              {
                title: "Data Pipelines",
                desc: "Move, transform, and store cross-platform data automatically into central warehouses.",
                icon: "solar:database-bold-duotone",
                items: ["ETL Workflows", "Database Sync", "Real-time Stream", "Bulk Migration"]
              },
              {
                title: "Auto-Reporting",
                desc: "Scheduled delivery of KPI snapshots and deep-dive reports to executive channels.",
                icon: "solar:document-bold-duotone",
                items: ["PDF Generation", "Telegram Alarms", "KPI Snapshots", "Performance Trends"]
              },
              {
                title: "Operations Bots",
                desc: "Custom operational bots for Telegram and WhatsApp to manage field teams and tasks.",
                icon: "solar:globus-bold-duotone",
                items: ["Field Reporting", "Task Assignment", "Live Status", "Remote Control"]
              }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-panel p-10 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#38bdf8]/10 transition-colors">
                    <Icon icon={item.icon} className="text-3xl text-[#38bdf8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">{item.desc}</p>
                  <ul className="grid grid-cols-1 gap-y-3 pt-6 border-t border-slate-200 dark:border-white/5">
                    {item.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-xs font-medium text-slate-500">
                        <Icon icon="solar:check-circle-bold-duotone" className="text-[#2dd4bf] text-sm" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof Point */}
      <section className="py-24 px-6 bg-white dark:bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="glass-panel p-12 md:p-16 rounded-[48px] border border-[#38bdf8]/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#38bdf8]/5 blur-[100px]" />
              <div className="relative z-10 max-w-3xl">
                <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded bg-[#38bdf8]/10 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest border border-[#38bdf8]/20">
                  Case Impact
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
                  80% Communication <span className="text-[#38bdf8]">Automated</span> for Logistics Pilot.
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 font-light leading-relaxed">
                  We built a proprietary n8n + WhatsApp infrastructure for a Pan-African logistics leader, handling 200+ daily updates automatically. Results: zero new hires needed during 3x scale.
                </p>
                <Link to="/work" className="inline-flex items-center gap-3 text-slate-900 dark:text-white font-bold group">
                  View Full Case Study
                  <Icon icon="solar:arrow-right-linear" className="text-xl text-[#38bdf8] group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#090c14]/30 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Blueprint" title="Automation Engineering Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-12">
            {["n8n (Self-Hosted)", "WhatsApp API", "Telegram API", "Python", "FastAPI", "Apify", "Zapier", "Termii", "Webhooks", "JSON Path", "Docker", "Hetzner"].map((tech) => (
              <div key={tech} className="px-4 py-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:border-[#38bdf8]/30 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
