import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { services, FX_RATE } from "@/lib/data";
import { formatNGNtoUSD } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";

const service = services.find(s => s.slug === 'apps')!;

export default function AppsServicePage() {
  return (
    <div className="bg-off-white dark:bg-[#02040a] min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Mobile App Development | Sastech Consults</title>
        <meta name="description" content="Cross-platform Flutter apps for iOS and Android — consumer, business, and field worker tools." />
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
              <Icon icon="solar:smartphone-device-bold-duotone" className="text-4xl text-[#38bdf8]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-3xl leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Native Performance. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Single Codebase.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10">
              We build high-performance Flutter apps for iOS and Android. Polished UI, robust backends, and full App Store lifecycle management.
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
          <SectionHeader label="What We Build" title="Product Versatility" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Fintech & Payments",
                desc: "Wallets, savings tools, and payment gateways. Paystack and Flutterwave native integrations.",
                items: ["Transaction history", "Biometric auth", "Push notifications", "KYC flows"],
                icon: "solar:wad-of-money-bold-duotone"
              },
              {
                title: "Logistics & Ops",
                desc: "Driver tracking, delivery reporting, and fleet management tools for African logistics.",
                items: ["GPS tracking", "Offline sync", "Photo proof", "Real-time routing"],
                icon: "solar:delivery-bold-duotone"
              },
              {
                title: "Healthtech",
                desc: "Telemedicine, patient tracking, and health record platforms for modern clinics.",
                items: ["Video calls", "Scheduling", "Record privacy", "Health trends"],
                icon: "solar:heart-pulse-bold-duotone"
              },
              {
                title: "E-Learning",
                desc: "Course platforms, testing engines, and student management for digital academies.",
                items: ["Video streaming", "Quiz engine", "Certification", "Progress sync"],
                icon: "solar:notebook-bold-duotone"
              },
              {
                title: "Consumer SaaS",
                desc: "Social marketplaces and retail apps optimized for bandwidth and engagement.",
                items: ["Social graph", "Push engine", "In-app commerce", "Engagement API"],
                icon: "solar:users-group-rounded-bold-duotone"
              },
              {
                title: "B2B Dashboards",
                desc: "Internal operations tools for teams, with inventory and role management.",
                items: ["RBAC access", "Data exports", "Admin control", "Multi-tenant"],
                icon: "solar:graph-bold-duotone"
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="glass-panel p-10 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 h-full flex flex-col group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:bg-[#38bdf8]/10 transition-colors">
                    <Icon icon={item.icon} className="text-3xl text-[#38bdf8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow font-light">{item.desc}</p>
                  <ul className="space-y-3 pt-6 border-t border-slate-200 dark:border-white/5">
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
          <SectionHeader label="Blueprint" title="Mobile Engineering Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-12">
            {["Flutter", "Dart", "Supabase", "Firebase", "Paystack", "Flutterwave", "GetX", "BLoC", "Hive", "PostgreSQL", "Google Maps", "OneSignal"].map((tech) => (
              <div key={tech} className="px-4 py-3 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:border-[#38bdf8]/30 transition-all">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#090c14]/30 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Handoff" title="End-to-End Ownership" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {[
              { title: "Source Code", desc: "100% ownership of Flutter and Backend code.", icon: "solar:code-bold-duotone" },
              { title: "Store Management", desc: "Full handling of App Store & Play Store publishing.", icon: "solar:upload-track-2-bold-duotone" },
              { title: "Technical Docs", desc: "Complete architecture and deployment blueprints.", icon: "solar:documents-bold-duotone" },
              { title: "Team Training", desc: "Live strategy and handover session for your team.", icon: "solar:users-group-two-rounded-bold-duotone" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 hover:border-[#38bdf8]/20 transition-all group">
                  <Icon icon={item.icon} className="text-3xl text-[#38bdf8] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-slate-900 dark:text-white font-bold mb-2 uppercase tracking-widest text-[10px]">{item.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
