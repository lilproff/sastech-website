import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import { services, FX_RATE } from "@/lib/data";
import { formatNGNtoUSD } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";

export default function ServicesPage() {
  return (
    <div className="bg-off-white dark:bg-navy min-h-screen text-slate-900 dark:text-slate-300">
      <Helmet>
        <title>Our Services | Sastech Consults</title>
        <meta name="description" content="Explore our AI, mobile, web, and automation services built for Nigeria and the world." />
      </Helmet>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Capabilities
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white max-w-3xl leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Everything you need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">build and scale</span> with technology.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
              Six core services. One reliable team. We cover the full technology stack — AI, mobile, web, dashboards, e-commerce, and automation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── SERVICE CARDS ── */}
      <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.1}>
                <div className="glass-panel group relative overflow-hidden rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500">
                  <div className="p-10 flex flex-col sm:flex-row gap-8">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-[#38bdf8]/10 transition-all duration-500">
                      <Icon icon={service.icon} className="text-3xl text-[#38bdf8]" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#38bdf8] transition-colors" style={{ fontFamily: 'var(--font-outfit)' }}>
                        {service.title}
                      </h2>
                      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 font-light">
                        {service.shortDescription}
                      </p>

                      <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-slate-200 dark:border-white/5">
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#2dd4bf] mb-1">SME</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {service.pricing.sme} <span className="text-slate-500 font-medium ml-1">({formatNGNtoUSD(service.pricing.sme, FX_RATE)})</span>
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#2dd4bf] mb-1">Enterprise</span>
                          <span className="text-sm font-bold text-slate-900 dark:text-white">
                            {service.pricing.enterprise} <span className="text-slate-500 font-medium ml-1">({formatNGNtoUSD(service.pricing.enterprise, FX_RATE)})</span>
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link
                          to={`/services/${service.slug}`}
                          className="px-6 py-2.5 rounded-full border border-slate-300 dark:border-white/10 hover:border-[#38bdf8]/40 text-xs font-bold text-slate-900 dark:text-white transition-all flex items-center gap-2 group/btn"
                        >
                          Explore Stack
                          <Icon icon="solar:arrow-right-linear" className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── NOT SURE SECTION ── */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#2dd4bf]/20 bg-[#2dd4bf]/5 text-[#2dd4bf] text-[10px] font-bold uppercase tracking-widest">
                Guidance
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>
                Not sure where to start?
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-10 font-light max-w-2xl mx-auto">
                Tell us your bottleneck, and we&apos;ll design the architectural solution together. No sales pressure, just a systems-first conversation.
              </p>
              <a
                href="mailto:ayomidesholarin13@gmail.com?subject=Discovery Call Request"
                className="btn-primary inline-flex items-center gap-3 px-10 py-4 rounded font-bold text-[#02040a] tracking-wide transition-all scale-110"
              >
                Book Strategy Session
                <Icon icon="solar:calendar-bold-duotone" className="text-lg" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
