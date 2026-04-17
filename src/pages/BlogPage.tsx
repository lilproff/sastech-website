import { Helmet } from "react-helmet-async";
import { Icon } from "@iconify/react";
import CTABanner from "@/components/shared/CTABanner";
import { Reveal } from "@/components/shared/Reveal";

interface BlogPost {
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
}

const placeholderPosts: BlogPost[] = [
  {
    category: "Nigeria Tech",
    title: "How Much Does a Website Cost in Nigeria? (2025 Complete Guide)",
    excerpt: "From a simple business landing page (₦80k) to a full SaaS platform (₦2M+), here's every pricing tier, what's included, and how to avoid overpaying — with real quotes from Lagos developers.",
    readTime: "7 min read",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    imageAlt: "Business website on laptop",
  },
  {
    category: "AI for Business",
    title: "AI Chatbot for Nigerian Businesses: WhatsApp, Websites & Beyond",
    excerpt: "How Nigerian SMEs are using AI chatbots to handle customer enquiries 24/7 — on WhatsApp, websites, and Instagram DMs — without hiring extra staff. Real use cases, real ROI.",
    readTime: "6 min read",
    date: "Apr 2025",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    imageAlt: "AI chatbot conversation",
  },
  {
    category: "Growth Strategy",
    title: "Why Your WhatsApp Business Number Needs a Proper Website in 2025",
    excerpt: "If your only online presence is a WhatsApp number and an Instagram page, you're leaving serious money on the table. Here's why a website is your single best ROI move — and how to get one that actually converts.",
    readTime: "5 min read",
    date: "Mar 2025",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113",
    imageAlt: "WhatsApp and website integration",
  },
];

export default function BlogPage() {
  return (
    <div className="bg-off-white dark:bg-navy min-h-screen text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Insights | Sastech Consults</title>
        <meta name="description" content="Insights on AI systems, web development, and building in public from the Sastech Consults team." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Intel Stream
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white max-w-4xl leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Ideas, Systems & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Public R&D.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              Engineering insights on AI architecture, software infrastructure, and what we&apos;re learning while building our own internal products.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="py-6 px-6 bg-[#38bdf8]/5 border-y border-slate-200 dark:border-white/5 relative group">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 rounded-xl bg-[#38bdf8]/10 flex items-center justify-center">
               <Icon icon="solar:letter-bold-duotone" className="text-xl text-[#38bdf8]" />
             </div>
             <p className="text-slate-900 dark:text-white font-bold text-sm tracking-widest uppercase">Stream launching soon. Subscribe for updates.</p>
          </div>
          <a href="mailto:ayomidesholarin13@gmail.com?subject=Insights Subscription" className="btn-primary px-8 py-3 rounded-xl font-black text-[10px] text-[#02040a] tracking-widest group-hover:scale-105 transition-transform">
            SUBSCRIBE TO INTEL
          </a>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#090c14]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholderPosts.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.1}>
                <article className="glass-panel overflow-hidden rounded-[40px] border border-slate-200 dark:border-white/10 hover:border-[#38bdf8]/30 transition-all duration-500 group cursor-pointer h-full flex flex-col">
                   <div className="relative aspect-video overflow-hidden">
                      <img 
                        src={`${post.image}?w=800&q=80&auto=format&fit=crop`} 
                        alt={post.imageAlt}
                        className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                      />
                      <div className="absolute top-6 left-6">
                         <span className="px-3 py-1 rounded-full bg-off-white dark:bg-navy/80 backdrop-blur-md border border-white/10 text-[9px] font-black text-white uppercase tracking-widest text-[#2dd4bf]">
                           {post.category}
                         </span>
                      </div>
                      <div className="absolute bottom-6 right-6">
                         <span className="px-3 py-1 rounded-full bg-[#38bdf8] text-[#02040a] text-[9px] font-black uppercase tracking-widest shadow-xl">
                           {post.date}
                         </span>
                      </div>
                   </div>
                   
                   <div className="p-10 flex flex-col flex-grow">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-[#38bdf8] transition-colors leading-[1.3]" style={{ fontFamily: 'var(--font-outfit)' }}>{post.title}</h3>
                      <p className="text-slate-500 text-sm font-light leading-relaxed mb-8 flex-grow">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between pt-8 border-t border-slate-200 dark:border-white/5">
                         <div className="flex items-center gap-2 text-slate-700 font-bold uppercase tracking-widest text-[9px]">
                            <Icon icon="solar:clock-circle-bold-duotone" className="text-lg" />
                            {post.readTime}
                         </div>
                         <div className="text-slate-900 dark:text-white font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-2 flex items-center gap-1 transition-all">
                            ACCESS LOG <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-lg text-[#38bdf8]" />
                         </div>
                      </div>
                   </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dynamic Tags */}
      <section className="py-24 px-6 bg-off-white dark:bg-navy border-t border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-black text-[#38bdf8] uppercase tracking-[0.4em] mb-12 text-center">Protocol Subject Matters</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AI Systems Architecture", "LangGraph Pipelines", "n8n Automation", "Flutter Engineering", 
              "Next.js Systems", "Public R&D", "Nigeria Tech", "API Hardening", "Infrastructure Scaling"
            ].map((cat) => (
              <span
                key={cat}
                className="px-6 py-4 rounded-2xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] text-[10px] font-bold text-slate-500 uppercase tracking-widest hover:border-[#38bdf8]/30 hover:bg-white/[0.04] transition-all cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}
