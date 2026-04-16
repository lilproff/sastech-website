import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { services, FX_RATE } from "@/lib/data";
import { formatNGNtoUSD } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";

const service = services.find(s => s.slug === 'dashboards')!;

export default function DashboardsServicePage() {
  return (
    <div className="bg-off-white dark:bg-[#02040a] min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Dashboard & Admin Systems | Sastech Consults</title>
        <meta name="description" content="KPI dashboards, operational admin panels, and real-time data visualisation systems." />
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
              <Icon icon="solar:graph-bold-duotone" className="text-4xl text-[#38bdf8]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-3xl leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Data That Makes <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Decisions Possible.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10">
              Real-time operational dashboards and admin systems built for speed. Get full visibility into your business metrics and team performance.
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
          <SectionHeader label="What We Build" title="Data Visibility Engines" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {[
              {
                title: "KPI Dashboards",
                desc: "Track critical business metrics in real-time. Sales, revenue, and growth — visualised for clarity.",
                icon: "solar:graph-bold-duotone",
                items: ["Real-time KPI Sync", "Time Comparison", "Threshold Alerts", "Export Suite"]
              },
              {
                title: "Operational Panels",
                desc: "Live visibility for logistics, order status, and field agent performance monitoring.",
                icon: "solar:map-point-bold-duotone",
                items: ["Fleet Tracking", "Status Boards", "Team Isolation", "Command Logic"]
              },
              {
                title: "Admin Systems",
                desc: "Complete CRUD systems for application management — users, orders, and complex permissions.",
                icon: "solar:shield-user-bold-duotone",
                items: ["RBAC Access", "Audit Logs", "Bulk Processing", "Resource Mgmt"]
              },
              {
                title: "Visual Reports",
                desc: "Custom high-density charts and data tables designed for boardrooms and deep dives.",
                icon: "solar:pie-chart-bold-duotone",
                items: ["SVG Visualisation", "Heat Maps", "Funnel Analytics", "PDF Engine"]
              }
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-panel p-10 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 group flex flex-col h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#38bdf8]/10 transition-colors">
                    <Icon icon={item.icon} className="text-3xl text-[#38bdf8]" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">{item.desc}</p>
                  <ul className="grid grid-cols-2 gap-y-3 gap-x-4 pt-6 border-t border-slate-200 dark:border-white/5">
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

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-white dark:bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Blueprint" title="Dashboard Engineering Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-12">
            {["Next.js", "React", "Recharts", "Chart.js", "Supabase", "PostgreSQL", "TailwindCSS", "Prisma", "Redis", "Vercel", "Resend", "WebSocket"].map((tech) => (
              <div key={tech} className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:border-[#38bdf8]/30 transition-all">
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
