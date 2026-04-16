import { Helmet } from "react-helmet-async";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import SectionHeader from "@/components/shared/SectionHeader";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/shared/Reveal";

const coreValues = [
  {
    icon: "solar:target-bold-duotone",
    title: "Outcomes over outputs",
    description:
      "We measure success by what changes for the client — not lines of code shipped or features deployed. Did it solve the problem? Did it grow the business?",
  },
  {
    icon: "solar:shield-check-bold-duotone",
    title: "Build it right the first time",
    description:
      "We write documented, tested, secure code. No shortcuts that become technical debt. Every project is built as if we'll maintain it for 5 years.",
  },
  {
    icon: "solar:chat-round-dots-bold-duotone",
    title: "Honest communication",
    description:
      "Realistic timelines. We raise problems early. We don't promise what we can't deliver. You'll always know exactly where your project stands.",
  },
  {
    icon: "solar:globus-bold-duotone",
    title: "Africa-first thinking",
    description:
      "We build for Nigerian and African market realities: Paystack, WATI, Termii, NDPR compliance, WhatsApp-first UX, and intermittent connectivity.",
  },
  {
    icon: "solar:code-bold-duotone",
    title: "Continuous building",
    description:
      "We eat our own cooking. The same AI systems we build for clients power our own internal products. We stay sharp by building constantly.",
  },
];

const deliveryProcess = [
  { step: 1, title: "First Contact", description: "Reply within 2 hours. We acknowledge your enquiry and confirm we can help." },
  { step: 2, title: "Qualification", description: "5-question WhatsApp qualifying conversation to understand your needs, timeline, and budget." },
  { step: 3, title: "Discovery Call", description: "30–45 minute video call. We listen, ask the right questions, and understand your business." },
  { step: 4, title: "Intake Form", description: "You fill a structured intake form covering goals, current systems, users, and success criteria." },
  { step: 5, title: "Proposal", description: "Within 48 hours you receive a clear proposal: scope, timeline, investment, and payment terms." },
  { step: 6, title: "Agreement + Deposit", description: "Service agreement signed. 50% deposit paid. Work begins immediately." },
  { step: 7, title: "Build", description: "We build your system with weekly Friday progress updates. You're never left wondering what's happening." },
  { step: 8, title: "Delivery + UAT", description: "We deliver the complete system. User Acceptance Testing. We fix anything that isn't right." },
  { step: 9, title: "Handover", description: "Credentials, source code, documentation, and a live training session. You own everything." },
  { step: 10, title: "Ongoing", description: "Retainer support, maintenance, or return for future projects. Many clients are on monthly retainers." },
];

const techStack: Record<string, string[]> = {
  "AI & Agents": ["Claude API", "OpenRouter", "LangChain", "LangGraph", "CrewAI", "MCP", "n8n", "Langflow"],
  Backend: ["Python 3.12 / FastAPI", "Go", "Node.js / Express"],
  Frontend: ["Next.js 14", "React", "TailwindCSS", "ShadCN/ui"],
  Mobile: ["Flutter / Dart", "React Native / Expo"],
  Database: ["Supabase (pgvector)", "MongoDB Atlas", "Redis", "Qdrant Cloud"],
  Infrastructure: ["Docker", "Railway", "Vercel", "Hetzner VPS"],
  Payments: ["Paystack", "Flutterwave", "Stripe"],
  Communications: ["WhatsApp Cloud API", "WATI", "Termii SMS", "Telegram Bot API"],
};

export default function AboutPage() {
  return (
    <div className="bg-off-white dark:bg-navy min-h-screen text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>About | Sastech Consults</title>
        <meta name="description" content="Built from Lagos. Built for the World. Learn about Samuel Ayomide Sholarin and Sastech Consults." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Origins
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white max-w-4xl leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Built from Lagos. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Designed for the World.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Sastech Consults is a CAC-registered technology & AI consultancy. We engineer production-grade AI systems, mobile apps, and web platforms for ambitious businesses globally.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] rounded-[48px] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] border border-slate-200 dark:border-white/10 glass-panel">
                  <img
                    src="/founder.jpg"
                    alt="Samuel Ayomide Sholarin"
                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1000&q=80'; }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-[#02040a] via-[#02040a]/50 to-transparent">
                    <p className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-outfit)' }}>Samuel Ayomide Sholarin</p>
                    <p className="text-[#38bdf8] text-xs font-bold uppercase tracking-widest mb-4">Founder & AI Architect</p>
                    <div className="flex flex-wrap gap-2">
                      {["First Class BSc", "Dominion Uni", "Lagos, NG"].map(tag => (
                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-bold text-white/50 uppercase tracking-widest">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="space-y-10">
              <Reveal delay={0.2}>
                <div>
                  <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: 'var(--font-outfit)' }}>The Systems Architect.</h2>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed mb-6">
                    Samuel is a Full-Stack and AI Systems Engineer specialising in high-impact production infrastructure. From autonomous agent orchestration to high-scale logistics pipelines.
                  </p>
                  <p className="text-slate-500 dark:text-slate-400 text-lg font-light leading-relaxed mb-10">
                    Founded Sastech to provide local businesses with absolute world-class AI capability—without the agency bloat or inflated international costs.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { label: "LinkedIn", href: "https://linkedin.com/in/samuel-sholarin" },
                      { label: "GitHub", href: "https://github.com/Lilproff" },
                      { label: "X", href: "https://twitter.com/samuelsholarin" },
                    ].map(social => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-bold text-[10px] tracking-widest uppercase hover:bg-[#38bdf8] hover:text-[#02040a] hover:border-[#38bdf8] transition-all"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: "Mission", content: "Democratise elite AI systems for African growth." },
                  { label: "Vision", content: "An automated future where tech is a silent partner." },
                ].map((item, i) => (
                  <Reveal key={item.label} delay={0.3 + (i * 0.1)}>
                    <div className="p-6 rounded-3xl bg-slate-100 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5">
                      <p className="text-[10px] font-black text-[#38bdf8] uppercase tracking-widest mb-2">{item.label}</p>
                      <p className="text-slate-500 text-xs font-light">{item.content}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 bg-white dark:bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Principles" title="Engineering Ethics" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {coreValues.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.1}>
                <div className="p-8 rounded-[32px] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex flex-col items-start hover:border-[#38bdf8]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center mb-6 border border-[#38bdf8]/20">
                    <Icon icon={value.icon} className="text-2xl text-[#38bdf8]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>{value.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-6 bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Delivery" title="Operational Blueprint" subtitle="Our 10-step precision deployment process." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16">
            {deliveryProcess.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <div className="p-6 rounded-3xl bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5 flex items-start gap-6 group hover:border-[#38bdf8]/20 transition-all">
                  <div className="w-10 h-10 rounded-full bg-[#38bdf8]/10 flex items-center justify-center shrink-0 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-black">
                    {String(step.step).padStart(2, '0')}
                  </div>
                  <div>
                    <h4 className="text-slate-900 dark:text-white font-bold mb-1 text-sm">{step.title}</h4>
                    <p className="text-slate-500 text-xs font-light">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32 px-6 bg-white dark:bg-[#02040a]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader label="Capabilities" title="The Stack Architectural" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {Object.entries(techStack).map(([layer, tools], i) => (
              <Reveal key={layer} delay={i * 0.1}>
                <div className="p-8 rounded-[32px] bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 h-full">
                  <p className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.2em] mb-6 pb-4 border-b border-slate-200 dark:border-white/5">{layer}</p>
                  <ul className="space-y-3">
                    {tools.map(tool => (
                      <li key={tool} className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                        <Icon icon="solar:check-circle-bold-duotone" className="text-[#2dd4bf] text-sm" />
                        {tool}
                      </li>
                    ))}
                  </ul>
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
