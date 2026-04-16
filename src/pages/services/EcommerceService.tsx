import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { services, FX_RATE } from "@/lib/data";
import { formatNGNtoUSD } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";

const service = services.find(s => s.slug === 'ecommerce')!;

export default function EcommerceServicePage() {
  return (
    <div className="bg-off-white dark:bg-[#02040a] min-h-screen text-slate-700 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>E-Commerce Solutions | Sastech Consults</title>
        <meta name="description" content="Your own online store with Paystack/Flutterwave. No monthly fees. No commission." />
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
              <Icon icon="solar:cart-large-bold-duotone" className="text-4xl text-[#38bdf8]" />
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-3xl leading-tight mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Your Own Commerce Engine. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Zero Commission.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light mb-10">
              We build fully custom e-commerce stores and marketplaces. You own the code, the data, and the profit — no platform tax.
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
          <SectionHeader label="What We Build" title="Scalable Commerce Architectures" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Retail Stores",
                desc: "High-performance online stores with product discovery, cart, and secure Paystack checkout.",
                icon: "solar:shop-2-bold-duotone",
                items: ["Catalogue Management", "WhatsApp Cart Notify", "Admin Panel", "Customer Accounts"]
              },
              {
                title: "Marketplaces",
                desc: "Multi-vendor platforms with automated commissions and vendor-specific dashboards.",
                icon: "solar:users-group-rounded-bold-duotone",
                items: ["Vendor Onboarding", "Split Payments", "Management Console", "Dispute Logic"]
              },
              {
                title: "B2B Order Portals",
                desc: "Wholesale ordering systems for distributors and resellers with custom credit terms.",
                icon: "solar:bill-list-bold-duotone",
                items: ["Volume Pricing", "Purchase Orders", "Credit Management", "Custom Invoices"]
              }
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

      {/* Advantage */}
      <section className="py-24 px-6 bg-white dark:bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Comparison" title="The Custom Advantage" subtitle="Why world-class brands choose custom engines over platforms." />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16">
            {[
              { title: "No Commission", desc: "Keep 100% of your revenue. No 2% transaction fee on every sale.", icon: "solar:verified-check-bold-duotone" },
              { title: "No Monthly Tax", desc: "Eliminate recurring platform subscriptions that scale with your growth.", icon: "solar:bill-check-bold-duotone" },
              { title: "Data Sovereignty", desc: "You own every byte of customer data. No platform lock-in.", icon: "solar:database-bold-duotone" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/5 group">
                  <Icon icon={item.icon} className="text-3xl text-[#38bdf8] mb-6 group-hover:scale-110 transition-transform" />
                  <h4 className="text-slate-900 dark:text-white font-bold mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#090c14]/30 border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Blueprint" title="Commerce Engineering Stack" />
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-12">
            {["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Paystack", "Flutterwave", "Stripe", "Cloudinary", "Vercel", "TailwindCSS"].map((tech) => (
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
