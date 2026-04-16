import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/shared/Reveal";
import CTABanner from "@/components/shared/CTABanner";

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[Sastech Enquiry] ${formData.service || "General"} — ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nService Interest: ${formData.service}\n\nMessage:\n${formData.message}`;
    window.location.href = `mailto:ayomidesholarin13@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className="bg-off-white dark:bg-navy min-h-screen text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Contact Us | Sastech Consults</title>
        <meta name="description" content="Get in touch with Sastech Consults for your next AI, web, or mobile project." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Communications Hub
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white max-w-4xl leading-[1.1] mb-8" style={{ fontFamily: 'var(--font-outfit)' }}>
              Let&apos;s Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Better Logic.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
              We respond to every serious inquiry within 2 business hours. Start with the form or initiate via specific channels.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6 relative bg-slate-50 dark:bg-[#090c14]/30 border-y border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Info Side */}
            <div className="space-y-12">
               <Reveal>
                 <div className="space-y-8">
                    {[
                      { icon: "solar:letter-bold-duotone", title: "Email Intake", detail: "ayomidesholarin13@gmail.com", sub: "General & Technical Enquiries" },
                      { icon: "solar:chat-round-dots-bold-duotone", title: "WhatsApp Direct", detail: "+234 [WhatsApp Available]", sub: "Qualifying Conversations" },
                      { icon: "solar:clock-circle-bold-duotone", title: "SLA Response", detail: "Within 120 Minutes", sub: "Priority Business Hours (WAT)" },
                    ].map(item => (
                      <div key={item.title} className="flex items-start gap-6 group">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-[#38bdf8]/10 transition-colors">
                           <Icon icon={item.icon} className="text-2xl text-[#38bdf8]" />
                        </div>
                        <div>
                           <p className="text-slate-900 dark:text-white font-bold text-sm mb-1">{item.title}</p>
                           <p className="text-slate-800 dark:text-slate-200 text-lg font-bold mb-1">{item.detail}</p>
                           <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                 </div>
               </Reveal>

               <Reveal delay={0.2}>
                  <div className="p-10 rounded-[40px] glass-panel border border-slate-200 dark:border-white/10 relative overflow-hidden group">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#38bdf8]/5 blur-3xl" />
                     <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>Book a Consultation</h3>
                     <p className="text-slate-500 text-sm font-light leading-relaxed mb-8">
                       Prefer a high-bandwidth conversation? Book a zero-pressure 30-minute video call to discuss your project.
                     </p>
                     <button
                       onClick={() => {
                         const subject = encodeURIComponent("Discovery Call Request — Book Consultation");
                         const body = encodeURIComponent(`Hi Ayomide,

I'd like to book a free 30-minute discovery call to discuss my project.

My Name:
My Company:
Project Type:
Best Time to Reach Me:

Looking forward to speaking with you.

---
Sent from Sastech Consults Contact Page`);
                         window.location.href = `mailto:ayomidesholarin13@gmail.com?subject=${subject}&body=${body}`;
                       }}
                       className="w-full flex items-center justify-center gap-3 bg-[#38bdf8] text-[#02040a] py-4 rounded-2xl font-bold text-[11px] tracking-widest uppercase hover:bg-[#2dd4bf] transition-all"
                     >
                       <Icon icon="solar:calendar-bold-duotone" className="text-xl" />
                       BOOK CONSULTATION
                     </button>
                  </div>
               </Reveal>

               {/* Socials */}
               <Reveal delay={0.3}>
                  <div className="flex gap-4">
                     {[
                       { icon: "solar:globus-bold-duotone", label: "LinkedIn", href: "https://linkedin.com/in/samuel-sholarin" },
                       { icon: "solar:code-bold-duotone", label: "GitHub", href: "https://github.com/Lilproff" },
                       { icon: "solar:star-bold-duotone", label: "X", href: "https://twitter.com/samuelsholarin" },
                     ].map(social => (
                       <a
                         key={social.label}
                         href={social.href}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="w-10 h-10 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center hover:bg-[#38bdf8]/10 hover:border-[#38bdf8]/30 transition-all cursor-pointer"
                         aria-label={social.label}
                       >
                          <Icon icon={social.icon} className="text-slate-500 dark:text-white/60 text-lg" />
                       </a>
                     ))}
                  </div>
               </Reveal>
            </div>

            {/* Form Side */}
            <Reveal delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] rounded-[48px] blur opacity-10" />
                <div className="relative glass-panel rounded-[40px] border border-slate-200 dark:border-white/10 p-10 md:p-14">
                  {submitted ? (
                    <div className="text-center py-20">
                      <div className="w-20 h-20 rounded-full bg-[#2dd4bf]/10 border border-[#2dd4bf]/20 flex items-center justify-center mx-auto mb-8">
                        <Icon icon="solar:check-circle-bold-duotone" className="text-4xl text-[#2dd4bf]" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: 'var(--font-outfit)' }}>Payload Sent</h3>
                      <p className="text-slate-500 text-sm font-light max-w-xs mx-auto">
                        Your inquiry has been processed. Our engineers will review and acknowledge within the next 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Identity</label>
                           <input 
                            required
                            type="text" 
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-all"
                           />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Reach Protocol</label>
                           <input 
                            required
                            type="email" 
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-all"
                           />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Entity</label>
                           <input 
                            type="text" 
                            placeholder="Company Name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-all"
                           />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Intent</label>
                          <select 
                            required
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white outline-none focus:border-[#38bdf8]/50 transition-all appearance-none"
                          >
                            <option value="" className="bg-[#02040a]">Select System...</option>
                            <option value="AI Engineering" className="bg-[#02040a]">AI Engineering</option>
                            <option value="Mobile/Flutter" className="bg-[#02040a]">Mobile/Flutter</option>
                            <option value="Web/SaaS" className="bg-[#02040a]">Web/SaaS</option>
                            <option value="Automation/n8n" className="bg-[#02040a]">Automation/n8n</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-black text-slate-600 uppercase tracking-widest ml-1">Mission Details</label>
                        <textarea 
                          required
                          rows={4}
                          placeholder="Tell us what you're building..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-2xl px-6 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-all resize-none"
                        />
                      </div>

                      <button type="submit" className="w-full btn-primary py-5 rounded-2xl font-black text-[#02040a] text-xs tracking-widest group">
                        INITIATE DEPLOYMENT
                        <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="inline text-xl ml-2 group-hover:translate-x-2 transition-transform" />
                      </button>
                      <p className="text-[9px] text-slate-600 text-center font-black uppercase tracking-[0.2em]">Enquiry opens in your secure email client</p>
                    </form>
                  )}
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
