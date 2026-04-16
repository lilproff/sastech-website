import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import CTABanner from '@/components/shared/CTABanner';
import SectionHeader from '@/components/shared/SectionHeader';
import { pricingTable, retainerPlans, FX_RATE } from '@/lib/data';
import { formatNGNtoUSD } from '@/lib/utils';
import { Reveal } from '@/components/shared/Reveal';

export default function PricingPage() {
  return (
    <div className="bg-off-white dark:bg-navy min-h-screen text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Pricing & Plans | Sastech Consults</title>
        <meta name="description" content="Transparent, outcome-based pricing for AI systems, mobile apps, and web platforms. No hidden fees, full ownership." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4" />
        <div className="max-w-7xl mx-auto text-center relative">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Investment Guide
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 leading-tight" style={{ fontFamily: 'var(--font-outfit)' }}>
              Transparent Pricing.<br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Built for Growth.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              We don&apos;t sell hours. We sell outcomes. Whether you&apos;re a lean startup or a scaling enterprise, our pricing is designed to deliver maximum ROI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="Service Packages" 
            title="Development Estimates" 
            subtitle="Fixed-scope projects based on complexity. For a custom breakdown, use our instant quote tool."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {pricingTable.map((item, i) => {
              let icon = "solar:globus-bold-duotone";
              if (item.service.includes('App')) icon = "solar:smartphone-device-bold-duotone";
              if (item.service.includes('AI Chat')) icon = "solar:cpu-bolt-bold-duotone";
              if (item.service.includes('AI Voice')) icon = "solar:clappe-bold-duotone";
              if (item.service.includes('Dashboard')) icon = "solar:graph-bold-duotone";
              if (item.service.includes('E-Commerce')) icon = "solar:cart-large-bold-duotone";
              if (item.service.includes('Automation')) icon = "solar:restart-bold-duotone";
              if (item.service.includes('Monthly')) icon = "solar:calendar-bold-duotone";

              return (
                <Reveal key={item.service} delay={i * 0.1}>
                  <div className="glass-panel p-10 rounded-[32px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 flex flex-col h-full group">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-[#38bdf8]/10 transition-all duration-500">
                      <Icon icon={icon} className="text-3xl text-[#38bdf8]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>{item.service}</h3>
                    
                    <div className="space-y-6 mb-10 flex-grow">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#2dd4bf] mb-2">Startup / SME</div>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">{item.sme}</div>
                        <div className="text-xs text-slate-500 mt-1 font-medium italic">{formatNGNtoUSD(item.sme, FX_RATE)} USD equivalent</div>
                      </div>
                      <div className="pt-6 border-t border-slate-200 dark:border-white/5">
                        <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#38bdf8] mb-2">Enterprise</div>
                        <div className="text-2xl font-bold text-slate-700 dark:text-white/90">{item.enterprise}</div>
                        <div className="text-xs text-slate-500 mt-1 font-medium italic">{formatNGNtoUSD(item.enterprise, FX_RATE)} USD equivalent</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-4 border-t border-slate-200 dark:border-white/5">
                      <Link
                        to={`/intake?service=${encodeURIComponent(item.service.split(' ')[0].toLowerCase())}`}
                        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#38bdf8] text-[#02040a] text-[10px] font-black uppercase tracking-widest hover:bg-[#2dd4bf] transition-all"
                      >
                        Get Started on My Project
                        <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-lg" />
                      </Link>
                      <Link to="/quote" className="flex items-center justify-between group/link py-2 px-2 hover:px-4 transition-all duration-300">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest group-hover/link:text-slate-700 dark:group-hover/link:text-white">or Get Instant Quote</span>
                        <Icon icon="solar:arrow-right-linear" className="text-xl text-[#38bdf8] group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Retainer Plans */}
      <section className="py-32 px-6 relative overflow-hidden bg-white dark:bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            label="Ongoing Support" 
            title="Maintain & Scale" 
            subtitle="Continuous development capacity and proactive infrastructure management for growing businesses."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
            {retainerPlans.map((plan, i) => (
              <Reveal key={plan.name} delay={i * 0.1}>
                <div className={`relative p-12 rounded-[40px] border transition-all duration-500 h-full flex flex-col ${
                  plan.highlight 
                    ? 'bg-[#090c14] border-[#38bdf8]/40 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-10 scale-105' 
                    : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 hover:border-white/20'
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-4 left-10 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] text-[#02040a] text-[10px] font-black uppercase tracking-widest shadow-lg">
                      Recommended
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>{plan.name}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-10 leading-relaxed font-light">{plan.description}</p>
                  
                  <div className="mb-10">
                    <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">{plan.smePrice}</div>
                    <div className="text-[10px] text-slate-500 uppercase font-black tracking-[0.2em] mt-2">Starting rate / mo</div>
                  </div>

                  <ul className="space-y-5 mb-12 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-4">
                        <Icon icon="solar:check-circle-bold-duotone" className="text-[#2dd4bf] text-xl shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 dark:text-slate-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="mailto:ayomidesholarin13@gmail.com"
                    className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] text-center transition-all ${
                    plan.highlight
                      ? 'bg-white text-[#02040a] hover:bg-[#38bdf8] shadow-xl shadow-white/5'
                      : 'border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white/10'
                  }`}>
                    Activate Plan
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Advantage */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#090c14] border-t border-slate-200 dark:border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <SectionHeader 
                label="The Sastech Edge" 
                title="Investment Logic" 
                subtitle="One-time architectural cost. Lifetime operational efficiency. Zero platform tax."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-16">
                {[
                  { icon: "solar:shield-check-bold-duotone", title: "Zero Commission", desc: "Keep 100% of your revenue. No hidden transaction fees." },
                  { icon: "solar:layers-minimalistic-bold-duotone", title: "Full IP Ownership", desc: "You own all source code and infrastructure credentials. Forever." },
                  { icon: "solar:bolt-bold-duotone", title: "Atomic Speed", desc: "Next.js performance built for speed. No bloated templates." },
                  { icon: "solar:globus-bold-duotone", title: "Market Optimized", desc: "Built with Paystack, Termii, and Nigerian local cloud native." },
                ].map((item) => (
                  <div key={item.title} className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center">
                      <Icon icon={item.icon} className="text-2xl text-[#38bdf8]" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-900 dark:text-white" style={{ fontFamily: 'var(--font-outfit)' }}>{item.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <Reveal delay={0.3}>
              <div className="glass-panel p-12 rounded-[48px] border border-slate-200 dark:border-white/10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/10 blur-3xl" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10" style={{ fontFamily: 'var(--font-outfit)' }}>Comparative ROI</h3>
                <div className="space-y-10">
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      <span>Sastech Build (Year 1-3)</span>
                      <span className="text-[#2dd4bf]">1.0x</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] w-full" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-slate-500">
                      <span>Platform SaaS Subscription (Year 1-3)</span>
                      <span className="text-rose-500">2.4x</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-rose-500 w-[85%]" />
                    </div>
                  </div>
                  
                  <div className="mt-12 p-8 rounded-3xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                    <p className="text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest mb-3">Impact Highlight</p>
                    <p className="text-slate-700 dark:text-white font-light text-sm leading-relaxed italic">
                      &ldquo;Transitioning from a commission-heavy marketplace to our own custom infrastructure saved our pilot logistics client over ₦3.8M in first-year operational overhead.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
