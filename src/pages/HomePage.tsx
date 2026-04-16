import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Reveal } from "@/components/shared/Reveal";
import Magnetic from "@/components/shared/Magnetic";

const services = [
  {
    icon: "solar:cpu-bolt-bold-duotone",
    title: "AI Services",
    description: "Chatbots, voice agents, multi-agent platforms, RAG knowledge bases, and n8n automation.",
    href: "/services",
    color: "#38bdf8"
  },
  {
    icon: "solar:smartphone-device-bold-duotone",
    title: "Mobile Development",
    description: "Cross-platform Flutter apps for iOS and Android — consumer, business, and field worker tools.",
    href: "/services",
    color: "#2dd4bf"
  },
  {
    icon: "solar:globus-bold-duotone",
    title: "Web Development",
    description: "Business websites, Next.js SaaS platforms, client portals, and multi-tenant systems. Fast & SEO-ready.",
    href: "/services",
    color: "#38bdf8"
  },
  {
    icon: "solar:graph-bold-duotone",
    title: "Dashboard & Admin",
    description: "KPI dashboards, operational panels, real-time data visualisation, and role-based admin systems.",
    href: "/services",
    color: "#2dd4bf"
  },
  {
    icon: "solar:cart-large-bold-duotone",
    title: "E-Commerce",
    description: "Online stores with Paystack & Flutterwave. Multi-vendor marketplaces. No platform commission.",
    href: "/services",
    color: "#38bdf8"
  },
  {
    icon: "solar:restart-bold-duotone",
    title: "Automation",
    description: "n8n automation, API integrations, and data pipelines that eliminate manual repetitive work.",
    href: "/services",
    color: "#2dd4bf"
  },
];

const lifecycleSteps = [
  {
    step: "01",
    title: "Diagnose",
    description: "We audit your current workflows, identify bottlenecks, and map out the data flows.",
    icon: "solar:clappe-bold-duotone"
  },
  {
    step: "02",
    title: "Design",
    description: "We architect the solution blueprint, selecting the best-fit technology stack and integration points.",
    icon: "solar:pen-new-square-bold-duotone"
  },
  {
    step: "03",
    title: "Build",
    description: "We develop the integrations, configure the AI agents, and build the custom dashboards.",
    icon: "solar:layers-minimalistic-bold-duotone"
  },
  {
    step: "04",
    title: "Scale",
    description: "We deploy to production, train your team, and monitor the system for optimization.",
    icon: "solar:rocket-bold-duotone"
  }
];

export default function HomePage() {
  return (
    <div className="bg-off-white dark:bg-navy text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Sastech Consults | Systems Architecture & Software Engineering</title>
        <meta name="description" content="We design intelligent operational systems that connect your tools, automate workflows, and make growth predictable." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Architecture */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 text-[#2dd4bf] text-[10px] font-bold uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] animate-pulse" />
                Systems Architecture Firm
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>
                We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Apps & Software</span> That Work.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-10 max-w-xl">
                I design intelligent operational systems that connect your tools, automate workflows, and make growth predictable.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Magnetic>
                  <Link
                    to="/quote"
                    className="btn-primary text-[#02040a] px-8 py-4 rounded font-bold tracking-wide text-sm text-center flex items-center justify-center gap-2 group"
                  >
                    Get Instant Quote
                    <Icon icon="solar:calculator-minimalistic-bold-duotone" className="text-xl" />
                  </Link>
                </Magnetic>
                <Magnetic>
                  <Link
                    to="/intake"
                    className="px-8 py-4 rounded border border-slate-300 dark:border-white/10 bg-transparent dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium text-sm tracking-wide text-center backdrop-blur-sm transition-all flex items-center justify-center gap-2"
                  >
                    <Icon icon="solar:document-add-bold-duotone" className="text-lg" />
                    Start Project Intake
                  </Link>
                </Magnetic>
              </div>
            </Reveal>
          </div>

          {/* Dashboard Mockup — coded UI, no broken image dependency */}
          <Reveal delay={0.6}>
            <div className="relative group">
              <div className="relative z-10 glass-panel rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden bg-slate-100 dark:bg-[#0a0f1e]">

                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#090c14]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="ml-3 flex gap-2">
                    {["ai-agent.py", "webhook.ts", "n8n-flow"].map((tab, i) => (
                      <span key={tab} className={`text-[10px] px-3 py-1 rounded-t font-mono ${i === 0 ? 'bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-white' : 'text-slate-400 dark:text-slate-500'}`}>{tab}</span>
                    ))}
                  </div>
                </div>

                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3 p-4">
                  {[
                    { label: "Revenue", value: "₦4.2M", delta: "+23%", color: "#38bdf8" },
                    { label: "AI Tasks", value: "2,847", delta: "+847", color: "#2dd4bf" },
                    { label: "Uptime", value: "99.9%", delta: "All OK", color: "#a78bfa" },
                  ].map(m => (
                    <div key={m.label} className="p-3 rounded-xl bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/5">
                      <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-1">{m.label}</p>
                      <p className="text-lg font-black text-slate-900 dark:text-white leading-none mb-1">{m.value}</p>
                      <p className="text-[9px] font-bold" style={{ color: m.color }}>{m.delta} ↑</p>
                    </div>
                  ))}
                </div>

                {/* Fake bar chart */}
                <div className="px-4 pb-1">
                  <p className="text-[9px] uppercase tracking-widest font-bold text-slate-400 mb-2">Weekly Output</p>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 50, 80, 70, 95, 85].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md" style={{ height: `${h}%`, background: i === 5 ? '#38bdf8' : i === 6 ? '#2dd4bf' : 'rgba(56,189,248,0.2)' }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => (
                      <span key={d} className="text-[8px] text-slate-400 flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>

                {/* Status row */}
                <div className="flex items-center gap-4 px-4 py-3 mt-1 border-t border-slate-200 dark:border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400">Agent Active</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-[#38bdf8]" />
                    <span className="text-[9px] font-bold text-slate-500 dark:text-slate-400">3 Models Running</span>
                  </div>
                  <div className="ml-auto text-[9px] font-mono text-slate-400 dark:text-slate-500">v2.4.1 · WAT</div>
                </div>
              </div>

              {/* Decorative Glows */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#38bdf8]/20 to-[#2dd4bf]/20 blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#38bdf8]/10 rounded-full blur-[80px] animate-pulse" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CAPABILITIES GRID ── */}
      <section className="py-32 px-6 relative overflow-hidden bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#2dd4bf]/5 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            label="Capabilities"
            title="System Capabilities"
            subtitle="Modular architecture designed to scale with your organization. Integrated and production-grade."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.1}>
                <div className="glass-panel p-8 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/50 transition-all duration-500 flex flex-col h-full group">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon icon={service.icon} className="text-3xl" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>{service.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>
                  <Link
                    to={service.href}
                    className="text-xs font-bold text-slate-700 dark:text-white flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity"
                  >
                    Learn more <Icon icon="solar:arrow-right-linear" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYSTEMS LIFECYCLE ── */}
      <section className="py-32 px-6 bg-white dark:bg-[#02040a] relative border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 text-balance">
            <span className="text-[#2dd4bf] text-[10px] font-bold uppercase tracking-[0.2em] mb-3 block">Methodology</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-outfit)' }}>The Systems Lifecycle</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[2.25rem] left-0 w-full h-px bg-slate-200 dark:bg-white/10 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {lifecycleSteps.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.1}>
                  <div className="relative group text-center lg:text-left">
                    <div className="w-10 h-10 bg-white dark:bg-[#02040a] border border-slate-200 dark:border-white/10 text-slate-400 dark:text-slate-500 rounded-lg flex items-center justify-center font-bold font-display mb-6 relative z-10 group-hover:border-[#38bdf8] group-hover:text-[#38bdf8] transition-all mx-auto lg:mx-0">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>{step.title}</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── QUOTE CALCULATOR CTA ── */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white dark:from-[#02040a] dark:to-[#090c14]/50 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 text-[#2dd4bf] text-[10px] font-bold uppercase tracking-widest">
              <Icon icon="solar:calculator-minimalistic-bold-duotone" className="text-lg" />
              Instant Pricing
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>
              Get an <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Instant Quote</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg font-light mb-10 max-w-xl mx-auto">
              Our transparent pricing calculator lets you configure your project and get an estimate in 60 seconds. No email required.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/quote"
                className="btn-primary text-[#02040a] px-10 py-5 rounded-2xl font-bold tracking-wide text-sm text-center flex items-center justify-center gap-3 group"
              >
                <Icon icon="solar:calculator-minimalistic-bold-duotone" className="text-xl" />
                Launch Quote Calculator
                <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/pricing"
                className="px-10 py-5 rounded-2xl border border-slate-300 dark:border-white/10 bg-transparent dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium text-sm text-center backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <Icon icon="solar:tag-price-bold-duotone" className="text-lg" />
                View Pricing Guide
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── IMPACT DELIVERED (CASE STUDY) ── */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#090c14]/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-slate-200 dark:border-white/5 pb-10">
            <div>
              <span className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-[0.2em] mb-2 block">Case Study</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-outfit)' }}>Impact Delivered</h2>
            </div>
            <Link
              to="/work"
              className="mt-6 md:mt-0 flex items-center gap-2 text-sm font-bold text-[#38bdf8] hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              Enterprise Success Stories <Icon icon="solar:arrow-right-linear" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { metric: "80%", label: "Manual Comms Reduction", sub: "Kamilight Global Logistics" },
              { metric: "12h", label: "Recovered per employee/week", sub: "Revenue Engines" },
              { metric: "5:1", label: "Tool Consolidation", sub: "Operational Efficiency" }
            ].map((stat) => (
              <Reveal key={stat.label}>
                <div className="group">
                  <span className="text-[10px] uppercase tracking-widest text-[#2dd4bf] font-bold mb-4 block">{stat.sub}</span>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">{stat.label}</h4>
                  <div className="text-6xl font-black text-slate-900 dark:text-white group-hover:text-[#38bdf8] transition-colors duration-500" style={{ fontFamily: 'var(--font-outfit)' }}>
                    {stat.metric}
                  </div>
                  <div className="h-px w-12 bg-slate-200 dark:bg-white/10 mt-6 group-hover:w-full group-hover:bg-[#38bdf8] transition-all duration-1000" />
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
