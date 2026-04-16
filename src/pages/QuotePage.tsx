import { Helmet } from 'react-helmet-async';
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { FX_RATE, companyInfo } from '@/lib/data';
import { Reveal } from '@/components/shared/Reveal';

// --- DATA FROM SASTECH-APP.HTML ---
const SERVICES = [
  { id: 'web', icon: 'solar:globus-bold-duotone', name: 'Website', sub: 'Business sites, landing pages, web apps' },
  { id: 'app', icon: 'solar:smartphone-device-bold-duotone', name: 'Mobile App', sub: 'Flutter iOS & Android — cross-platform' },
  { id: 'ai', icon: 'solar:cpu-bolt-bold-duotone', name: 'AI Services', sub: 'Chatbots, voice agents, automation' },
  { id: 'ecom', icon: 'solar:cart-large-bold-duotone', name: 'E-Commerce', sub: 'Online store with Paystack checkout' },
  { id: 'dash', icon: 'solar:graph-bold-duotone', name: 'Dashboard', sub: 'KPI dashboards & admin panels' },
  { id: 'auto', icon: 'solar:restart-bold-duotone', name: 'Automation', sub: 'n8n workflows & process automation' },
];

const PRICING_DATA: any = {
  web: {
    packages: [
      { id: 'land', name: 'Landing Page', detail: '1–2 pages · Product launch or profile', sme: 200000, ent: 250000 },
      { id: 'small', name: 'Small Site', detail: '3–5 pages · SMEs going online', sme: 250000, ent: 350000 },
      { id: 'biz', name: 'Business Site', detail: '6–8 pages · Full professional presence', sme: 300000, ent: 425000 },
      { id: 'large', name: 'Large Website', detail: '9–15 pages · Feature-rich corporate site', sme: 400000, ent: 575000 },
      { id: 'wapp', name: 'Web Application', detail: 'Login, dashboard, complex logic & roles', sme: 550000, ent: 800000 },
    ],
    included: ["WordPress Installation & Configuration", "Theme Setup & Full Customisation", "Essential Plugins (SEO, Security, Cache, Forms, Backup)", "Navigation & Internal Linking", "Performance Optimisation", "Security Configuration", "Basic SEO (Meta Tags, On-page)", "Social Media Links & WhatsApp Button", "Mobile Responsive Design", "Google Analytics Setup", "Contact Forms", "Testing & QA", "1 Month Free Support"],
    addons: [
      { id: 'domain', name: 'Domain Registration (.com, 1yr)', cat: 'Infrastructure', ngn: 25000, note: 'Global TLD registration & management' },
      { id: 'host', name: 'Cloud Hosting + SSL (1yr)', cat: 'Infrastructure', ngn: 42000, note: '₦42k SME / ₦66k Enterprise — high-uptime cloud' },
      { id: 'mail', name: 'Corporate Mail Integration', cat: 'Email', ngn: 42000, note: 'Professional SMTP & IMAP configuration (min)' },
      { id: 'gw', name: 'Google Workspace (Standard)', cat: 'Email', ngn: 150000, note: 'Enterprise productivity & mail (min)' },
      { id: 'vapp', name: 'vApp Hub (Vercel & Supabase)', cat: 'Infrastructure', ngn: 300000, note: 'Premium platform hosting for web systems' },
      { id: 'theme', name: 'Premium UI Framework Licence', cat: 'Content', ngn: 24000, note: 'Architectural templates & components' },
      { id: 'pay', name: 'Payment Integration (Paystack)', cat: 'Feature', ngn: 30000, note: 'Accept payments on your website' },
    ],
  },
  app: {
    packages: [
      { id: 'starter', name: 'Starter App', detail: '5 screens · Auth, core flow, backend', sme: 210000, ent: 290000 },
      { id: 'mvp', name: 'MVP Fast Track', detail: '3 core flows · Market-ready in 3 weeks', sme: 338000, ent: 482000 },
      { id: 'biz', name: 'Business App', detail: '10 screens · Roles, payments, notifs', sme: 370000, ent: 530000 },
      { id: 'full', name: 'Full Product', detail: '15+ screens · AI features · App Store ready', sme: 690000, ent: 1010000 },
    ],
    included: ["Flutter iOS + Android from one codebase", "Supabase backend (database + auth + storage)", "Paystack / Flutterwave payment integration", "Push notifications setup", "App Store & Play Store guide", "Testing & QA on real devices"],
    addons: [
      { id: 'apple', name: 'Apple Developer (App Store)', cat: 'Infrastructure', ngn: 148500, note: 'Annual iOS deployment membership' },
      { id: 'google', name: 'Google Developer (Play Store)', cat: 'Infrastructure', ngn: 37500, note: 'One-time Android deployment fee' },
      { id: 'host', name: 'App Cloud Hosting (1yr)', cat: 'Infrastructure', ngn: 42000, note: '₦42k SME / ₦66k Enterprise — backend hosting' },
      { id: 'design', name: 'Custom UI/UX Design (Figma)', cat: 'Feature', ngn: 80000, note: 'Full Figma screen designs before dev starts' },
      { id: 'airun', name: 'AI Runtime (RAG + Tokens)', cat: 'Feature', ngn: 300000, note: 'Integrated memory and AI processing capacity' },
      { id: 'biom', name: 'Biometric Login (Face/Fingerprint)', cat: 'Feature', ngn: 40000, note: 'Fingerprint & Face ID authentication' },
    ],
  },
  ai: {
    packages: [
      { id: 'basic', name: 'Basic Chatbot', detail: 'FAQ bot · WhatsApp or website · 50 Q&As', sme: 114000, ent: 146000 },
      { id: 'rag', name: 'Smart RAG Chatbot', detail: 'Trained on your docs · Answers from your content', sme: 162000, ent: 218000 },
      { id: 'voice', name: 'Voice Booking Agent', detail: 'Answers calls · Books appointments · FAQ', sme: 178000, ent: 242000 },
      { id: 'agent', name: 'Custom AI Agent', detail: 'Single-purpose autonomous agent', sme: 146000, ent: 194000 },
      { id: 'flows', name: 'n8n Automation (3x)', detail: '3 end-to-end workflows connecting your tools', sme: 130000, ent: 170000 },
    ],
    included: ["AI model setup via OpenRouter (free models)", "WhatsApp / website channel integration", "Knowledge base from your documents", "Human escalation & fallback logic", "All test scenarios covered", "1 month monitoring & adjustments"],
    addons: [
      { id: 'host', name: 'Agent Node Hosting (1yr)', cat: 'Infrastructure', ngn: 105000, note: '₦105k yearly — production-grade n8n/agent server' },
      { id: 'airun', name: 'AI Runtime (RAG + Tokens)', cat: 'Feature', ngn: 300000, note: 'Premium RAG memory and AI token allocation' },
      { id: 'wati', name: 'WATI WhatsApp BSP', cat: 'Infrastructure', ngn: 40000, note: 'Required for official WhatsApp API' },
      { id: 'dashb', name: 'AI Monitoring Dashboard', cat: 'Feature', ngn: 40000, note: 'View all AI conversations and analytics' },
    ],
  },
  ecom: {
    packages: [
      { id: 'starter', name: 'Starter Store', detail: 'Up to 20 products · Paystack checkout', sme: 114000, ent: 146000 },
      { id: 'full', name: 'Full Store', detail: 'Unlimited products · Inventory · Admin panel', sme: 194000, ent: 266000 },
      { id: 'aiecom', name: 'AI-Enhanced Store', detail: 'AI recommendations + chatbot + smart search', sme: 242000, ent: 338000 },
      { id: 'market', name: 'Marketplace', detail: 'Multi-vendor · Commissions · Dashboards', sme: 850000, ent: 1250000 },
    ],
    included: ["Product catalogue & categories", "Paystack / Flutterwave checkout", "Cart & order management", "WhatsApp order notifications", "Admin panel", "Mobile responsive design", "Inventory management"],
    addons: [
      { id: 'domain', name: 'Domain Registration (.com, 1yr)', cat: 'Infrastructure', ngn: 25000, note: 'Global TLD registration & management' },
      { id: 'host', name: 'E-Commerce Cloud Hosting + SSL (1yr)', cat: 'Infrastructure', ngn: 42000, note: '₦42k SME / ₦66k Enterprise — store-optimised' },
      { id: 'vapp', name: 'vApp Hub (Vercel & Supabase)', cat: 'Infrastructure', ngn: 300000, note: 'Premium platform hosting for speed' },
      { id: 'sms', name: 'SMS Order Notifications (Termii)', cat: 'Feature', ngn: 30000, note: 'SMS to customers on order updates' },
      { id: 'ship', name: 'Shipping API (GIG / DHL)', cat: 'Feature', ngn: 40000, note: 'Real-time delivery rates at checkout' },
    ],
  },
  dash: {
    packages: [
      { id: 'kpi', name: 'Basic KPI Dashboard', detail: 'Up to 10 metrics · Charts · Filters', sme: 146000, ent: 194000 },
      { id: 'ops', name: 'Operations Dashboard', detail: 'Multi-page · Roles · Real-time · Exports', sme: 178000, ent: 242000 },
      { id: 'admin', name: 'Admin Panel', detail: 'CRUD for your data · User management', sme: 210000, ent: 290000 },
      { id: 'full', name: 'Enterprise Suite', detail: 'Company-wide analytics · AI summaries', sme: 370000, ent: 530000 },
    ],
    included: ["Supabase real-time data connection", "Role-based access control", "CSV / Excel export", "Email alerts on thresholds", "Mobile responsive layout", "Testing & documentation"],
    addons: [
      { id: 'host', name: 'Dashboard Node Hosting (1yr)', cat: 'Infrastructure', ngn: 42000, note: '₦42k SME / ₦66k Enterprise — backend hosting' },
      { id: 'vapp', name: 'vApp Hub (Vercel & Supabase)', cat: 'Infrastructure', ngn: 300000, note: 'Premium platform for data apps' },
      { id: 'aisum', name: 'AI Narrative Reports', cat: 'Feature', ngn: 60000, note: 'Auto-generated AI summaries of your data' },
      { id: 'pdf', name: 'Automated PDF Reports', cat: 'Feature', ngn: 40000, note: 'Scheduled PDF reports emailed to your team' },
    ],
  },
  auto: {
    packages: [
      { id: 'quick', name: 'Quick Automation', detail: '1 workflow · Connect 2 tools', sme: 82000, ent: 98000 },
      { id: 'three', name: '3-Workflow Pack', detail: '3 complete automations · Full integration', sme: 130000, ent: 170000 },
      { id: 'dept', name: 'Department Auto', detail: 'Automate one department · Up to 5 flows', sme: 210000, ent: 290000 },
      { id: 'full', name: 'Full Business Auto', detail: 'All key processes · n8n self-hosted', sme: 242000, ent: 338000 },
    ],
    included: ["n8n workflow setup & configuration", "All API integrations included", "Error handling & retry logic", "Full workflow documentation", "Training session included", "1 month monitoring"],
    addons: [
      { id: 'host', name: 'n8n Self-Hosted Server (1yr)', cat: 'Infrastructure', ngn: 105000, note: '₦105k yearly — unlimited autonomous workflows' },
      { id: 'vapp', name: 'vApp Hub (Vercel & Supabase)', cat: 'Infrastructure', ngn: 300000, note: 'Multi-tenant automation platform hosting' },
      { id: 'extra', name: 'Additional API Integration (per tool)', cat: 'Feature', ngn: 20000, note: 'Extra tools added to your bundle' },
    ],
  },
};

const STEPS = ["Service", "Configure", "Your Info", "Quote"];

export default function QuoteCalculator() {
  const [step, setStep] = useState(1);
  const [svc, setSvc] = useState<any>(null);
  const [pkg, setPkg] = useState<any>(null);
  const [tier, setTier] = useState<'sme' | 'ent'>('sme');
  const [addons, setAddons] = useState<any[]>([]);
  const [info, setInfo] = useState({ name: '', business: '', email: '', phone: '', note: '' });

  const currentOptions = useMemo(() => (svc ? PRICING_DATA[svc.id] : null), [svc]);

  const totals = useMemo(() => {
    if (!pkg) return { ngn: 0, usd: 0 };
    const baseNGN = tier === 'ent' ? pkg.ent : pkg.sme;
    
    const addonNGN = addons.reduce((sum, a) => {
      let price = a.ngn;
      // Dynamic Hosting Pricing
      if (a.id === 'host') {
        price = tier === 'ent' ? 66000 : 42000;
      }
      return sum + price;
    }, 0);

    const totalNGN = baseNGN + addonNGN;
    return {
      ngn: totalNGN,
      usd: Math.round(totalNGN / FX_RATE),
      baseNGN,
      baseUSD: Math.round(baseNGN / FX_RATE)
    };
  }, [pkg, tier, addons]);

  const toggleAddon = (addon: any) => {
    setAddons(prev => prev.find(a => a.id === addon.id) ? prev.filter(a => a.id !== addon.id) : [...prev, addon]);
  };

  const handleNext = () => {
    if (step === 1 && !svc) return;
    if (step === 2 && !pkg) return;
    if (step === 3 && (!info.name || !info.business || !info.phone)) return;
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => setStep(s => s - 1);

  const formatNGN = (val: number) => {
    if (val >= 1000000) return `₦${(val / 1000000).toFixed(1)}M`;
    return `₦${Math.round(val / 1000)}K`;
  };

  const generateWhatsAppMessage = () => {
    const isEnt = tier === 'ent';
    const ref = `STC-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    
    const lines = [
      `Hello Ayomide (Sastech Consults)! 👋`,
      ``,
      `I just used your quote tool. Here are my details:`,
      ``,
      `👤 *My Details*`,
      `Name: ${info.name}`,
      `Business: ${info.business}`,
      `Email: ${info.email || "—"}`,
      `WhatsApp: ${info.phone}`,
      info.note ? `Notes: ${info.note}` : null,
      ``,
      `📋 *Project*`,
      `Ref: ${ref}`,
      `Service: ${svc.name}`,
      `Package: ${pkg.name} — ${pkg.detail}`,
      `Company Type: ${isEnt ? "Enterprise" : "SME / Small Business"}`,
      ``,
      `💰 *Quote*`,
      `Dev Cost: ₦${totals.baseNGN.toLocaleString()} (~$${totals.baseUSD})`,
      ...addons.map(a => {
        let price = a.ngn;
        if (a.id === 'host') price = tier === 'ent' ? 66000 : 42000;
        return `${a.name}: ₦${price.toLocaleString()} (~$${Math.round(price / FX_RATE)})`;
      }),
      `────────────────────────`,
      `*TOTAL: ₦${totals.ngn.toLocaleString()} (~$${totals.usd} USD)*`,
      ``,
      `Ready to discuss and finalize. Thank you!`,
    ].filter(l => l !== null);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/2348022324523?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-off-white dark:bg-navy text-slate-900 dark:text-slate-300 pt-32 pb-20 px-6">
      <Helmet>
        <title>Instant Quote | Sastech Consults</title>
        <meta name="description" content="Get an instant quote for your software or AI project in seconds with our transparent pricing calculator." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
                Pricing Engine
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>
                Instant Quote Calculator
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-light">
                Architectural estimates in 4 steps. Finalise your investment blueprint.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Progress Bar */}
        <div className="flex items-center justify-between mb-16 max-w-2xl mx-auto border-b border-slate-200 dark:border-white/5 pb-8 relative">
          <div className="absolute bottom-0 left-0 h-[2px] bg-slate-200 dark:bg-white/5 w-full" />
          <div 
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] transition-all duration-500" 
            style={{ width: `${(step / STEPS.length) * 100}%` }}
          />
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-3 relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs transition-all duration-300 shadow-xl ${
                step > i + 1 
                  ? 'bg-[#2dd4bf] text-[#02040a]' 
                  : step === i + 1 
                    ? 'bg-white text-[#02040a] scale-110 shadow-white/5' 
                    : 'bg-slate-100 dark:bg-white/5 text-slate-600 border border-slate-200 dark:border-white/5'
              }`}>
                {step > i + 1 ? <Icon icon="solar:check-read-bold" className="text-xl" /> : i + 1}
              </div>
              <span className={`text-[9px] uppercase tracking-[0.2em] font-black ${step >= i + 1 ? 'text-[#38bdf8]' : 'text-slate-700'}`}>
                {s}
              </span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="glass-panel border border-slate-200 dark:border-white/10 rounded-[48px] p-8 md:p-16 relative overflow-hidden bg-slate-50 dark:bg-[#090c14]/50">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#38bdf8]/5 blur-[100px] rounded-full pointer-events-none" />
          
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
              >
                <div className="col-span-full mb-8">
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>Project Type</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-light">Select the core module for your architectural build.</p>
                </div>
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => { setSvc(s); setPkg(null); setAddons([]); }}
                    className={`flex items-start gap-5 p-7 rounded-3xl border text-left transition-all duration-300 group ${
                      svc?.id === s.id 
                        ? 'bg-[#38bdf8]/5 border-[#38bdf8] shadow-[0_0_30px_rgba(56,189,248,0.1)]' 
                        : 'border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] hover:border-white/20'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 ${svc?.id === s.id ? 'bg-[#38bdf8] text-[#02040a]' : 'bg-slate-100 dark:bg-white/5 text-slate-500 group-hover:bg-slate-200 dark:group-hover:bg-white/10 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                      <Icon icon={s.icon} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 transition-colors ${svc?.id === s.id ? 'text-[#38bdf8]' : 'text-slate-900 dark:text-white'}`}>{s.name}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-medium">{s.sub}</p>
                    </div>
                  </button>
                ))}
              </motion.div>
            )}

            {step === 2 && currentOptions && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>Configuration</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-light">Scale {svc.name} to your organizational requirements.</p>
                </div>

                {/* SME/ENT Toggle */}
                <div className="bg-slate-100 dark:bg-white/5 p-2 rounded-2xl border border-slate-200 dark:border-white/5 flex gap-2">
                  <button
                    onClick={() => setTier('sme')}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 ${
                      tier === 'sme' ? 'bg-[#38bdf8] text-[#02040a] shadow-lg shadow-[#38bdf8]/20' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Startup / SME
                  </button>
                  <button
                    onClick={() => setTier('ent')}
                    className={`flex-1 py-4 px-6 rounded-xl font-bold text-[11px] uppercase tracking-widest transition-all duration-300 ${
                      tier === 'ent' ? 'bg-[#38bdf8] text-[#02040a] shadow-lg shadow-[#38bdf8]/20' : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    Enterprise
                  </button>
                </div>

                {/* Packages */}
                <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 px-2">Base Package</p>
                  {currentOptions.packages.map((p: any) => {
                    const price = tier === 'ent' ? p.ent : p.sme;
                    const isActive = pkg?.id === p.id;
                    return (
                      <button
                        key={p.id}
                        onClick={() => setPkg(p)}
                        className={`w-full flex items-center justify-between p-6 rounded-3xl border transition-all duration-300 text-left ${
                          isActive ? 'bg-[#38bdf8]/5 border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.1)]' : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-white/20'
                        }`}
                      >
                        <div className="flex items-center gap-5">
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? 'border-[#38bdf8]' : 'border-slate-300 dark:border-white/10'}`}>
                            {isActive && <div className="w-3 h-3 rounded-full bg-[#38bdf8]" />}
                          </div>
                          <div>
                            <p className={`font-bold text-lg transition-colors ${isActive ? 'text-[#38bdf8]' : 'text-slate-900 dark:text-white'}`}>{p.name}</p>
                            <p className="text-xs text-slate-500 font-medium">{p.detail}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xl font-black transition-colors ${isActive ? 'text-[#38bdf8]' : 'text-slate-900 dark:text-white'}`}>{formatNGN(price)}</p>
                          <p className="text-[10px] text-slate-600 font-bold tracking-tight">${Math.round(price / FX_RATE)} USD Equivalent</p>
                        </div>
                      </button>
                    )
                  })}
                </div>

                {/* Add-ons */}
                <div className="space-y-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 px-2">Blueprint Expansions</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentOptions.addons.map((a: any) => {
                      const isActive = !!addons.find(x => x.id === a.id);
                      return (
                        <button
                          key={a.id}
                          onClick={() => toggleAddon(a)}
                          className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 text-left ${
                            isActive ? 'bg-[#2dd4bf]/5 border-[#2dd4bf]' : 'bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-white/20'
                          }`}
                        >
                          <div className={`w-6 h-6 rounded-lg border-2 shrink-0 flex items-center justify-center mt-0.5 transition-all duration-300 ${isActive ? 'bg-[#2dd4bf] border-[#2dd4bf]' : 'border-white/10'}`}>
                            {isActive && <Icon icon="solar:check-read-bold" className="text-[#02040a] text-sm" />}
                          </div>
                          <div>
                            <p className={`text-sm font-bold transition-colors ${isActive ? 'text-[#2dd4bf]' : 'text-slate-900 dark:text-white'}`}>{a.name}</p>
                            <p className="text-[10px] text-slate-500 leading-tight mb-2 font-medium">{a.note}</p>
                            <p className="text-[11px] font-black text-slate-400">
                              +{formatNGN(a.id === 'host' ? (tier === 'ent' ? 66000 : 42000) : a.ngn)}
                            </p>
                          </div>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: 'var(--font-outfit)' }}>Project Identity</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-light">Connect your project to your organizational profile.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] ml-2">Lead Architect Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Samuel Sholarin"
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                      value={info.name}
                      onChange={e => setInfo(p => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] ml-2">Organization</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Sastech Co."
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                      value={info.business}
                      onChange={e => setInfo(p => ({ ...p, business: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] ml-2">Email Endpoint</label>
                    <input 
                      type="email" 
                      placeholder="hello@company.com"
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                      value={info.email}
                      onChange={e => setInfo(p => ({ ...p, email: e.target.value }))}
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] ml-2">WhatsApp Channel</label>
                    <input 
                      type="tel" 
                      placeholder="+234..."
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                      value={info.phone}
                      onChange={e => setInfo(p => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                  <div className="col-span-full space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38bdf8] ml-2">System Requirements</label>
                    <textarea 
                      rows={3}
                      placeholder="Any specific architectural goals or integration points?"
                      className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-3xl px-6 py-4 text-slate-900 dark:text-white focus:ring-1 focus:ring-[#38bdf8] focus:border-[#38bdf8] outline-none resize-none transition-all placeholder:text-slate-400 dark:placeholder:text-slate-600 font-medium"
                      value={info.note}
                      onChange={e => setInfo(p => ({ ...p, note: e.target.value }))}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-12"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-slate-100 dark:bg-white/5 text-[#38bdf8] mb-8 border border-slate-200 dark:border-white/10 shadow-2xl">
                    <Icon icon="solar:calculator-minimalistic-bold-duotone" className="text-5xl" />
                  </div>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: 'var(--font-outfit)' }}>Investment Summary</h2>
                  <p className="text-slate-500 dark:text-slate-400 font-light">Architectural blueprint for {svc.name}.</p>
                </div>

                <div className="bg-white dark:bg-[#02040a] border border-slate-200 dark:border-white/10 rounded-[40px] p-10 space-y-8 relative overflow-hidden">
                  <div className="absolute inset-0 grid-pattern opacity-5" />
                  
                  <div className="flex flex-col md:flex-row justify-between gap-10 pb-8 border-b border-slate-200 dark:border-white/5 relative z-10">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 mb-3">Service Module</p>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{svc.name} &middot; {pkg.name}</h3>
                      <p className="text-sm text-slate-500 font-medium">{pkg.detail}</p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 mb-3">Estimated Investment</p>
                      <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">₦{totals.ngn.toLocaleString()}</p>
                      <p className="text-sm text-slate-500 font-bold mt-1">≈ ${totals.usd} USD equiv.</p>
                    </div>
                  </div>

                  <div className="space-y-5 relative z-10">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 px-1">Blueprint Breakdown</p>
                    <div className="flex justify-between items-center text-sm font-medium">
                      <span className="text-slate-400">Core Engineering ({pkg.name})</span>
                      <span className="text-slate-900 dark:text-white font-bold">₦{totals.baseNGN.toLocaleString()}</span>
                    </div>
                     {addons.map(a => {
                       let price = a.ngn;
                       if (a.id === 'host') price = tier === 'ent' ? 66000 : 42000;
                       return (
                         <div key={a.id} className="flex justify-between items-center text-sm font-medium">
                           <span className="text-slate-400">{a.name} Expansion</span>
                           <span className="text-slate-900 dark:text-white font-bold">₦${price.toLocaleString()}</span>
                         </div>
                       );
                     })}
                  </div>

                  <div className="bg-[#38bdf8]/5 border border-[#38bdf8]/20 rounded-3xl p-8 flex items-start gap-5 relative z-10 backdrop-blur-sm">
                    <Icon icon="solar:info-circle-bold-duotone" className="text-[#38bdf8] text-2xl shrink-0 mt-0.5" />
                     <p className="text-sm text-[#38bdf8] leading-relaxed font-medium">
                       This is an architectural estimate based on standard module configurations. Final investment blueprint will be detailed within 48 hours following your strategy session.
                       <b> Note: Tooling costs reflect baseline requirements; final scaling depends on user concurrent volume and architectural needs.</b>
                     </p>
                  </div>
                </div>

                <div className="flex flex-col gap-5 pt-4">
                  <button
                    onClick={generateWhatsAppMessage}
                    className="w-full btn-primary text-[#02040a] py-6 rounded-3xl font-black text-lg flex items-center justify-center gap-4 hover:scale-[1.02] shadow-[0_20px_40px_rgba(56,189,248,0.2)]"
                  >
                    <Icon icon="solar:letter-send-bold-duotone" className="text-2xl" />
                    Send Quote via WhatsApp
                  </button>
                  <a
                    href={`/intake?service=${svc?.id || ''}`}
                    className="w-full bg-gradient-to-r from-[#38bdf8]/20 to-[#2dd4bf]/20 border border-[#38bdf8]/30 text-slate-900 dark:text-white py-5 rounded-3xl font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#38bdf8]/30 transition-all flex items-center justify-center gap-2"
                  >
                    <Icon icon="solar:document-add-bold-duotone" className="text-xl" />
                    Start Full Intake Form
                  </a>
                  <p className="text-center text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 dark:text-white/20">
                    Instant Quote &middot; No Commitment &middot; Direct to Lead Architect
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Navigation Buttons for Footer */}
          {step < 4 && (
            <div className="flex items-center gap-6 mt-16 pt-10 border-t border-slate-200 dark:border-white/5 relative z-10">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all flex items-center gap-2"
                >
                  <Icon icon="solar:arrow-left-linear" className="text-lg" />
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                disabled={(step === 1 && !svc) || (step === 2 && !pkg) || (step === 3 && (!info.name || !info.business || !info.phone))}
                className="flex-1 bg-slate-900 dark:bg-white text-white dark:text-[#02040a] py-5 rounded-3xl font-black text-[11px] uppercase tracking-[0.2em] disabled:opacity-10 disabled:grayscale transition-all flex items-center justify-center gap-2 hover:bg-[#38bdf8] hover:text-[#02040a] shadow-lg shadow-black/10 group active:scale-[0.98]"
              >
                {step === 3 ? 'Finalise Blueprint' : 'Advance Stage'}
                <Icon icon="solar:arrow-right-linear" className="text-lg group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
