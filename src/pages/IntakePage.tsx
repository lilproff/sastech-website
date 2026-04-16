import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/shared/Reveal";

// ─── Types ───────────────────────────────────────────────────────────────────
interface FormState {
  // Section 1 – Contact
  name: string; title: string; company: string; industry: string;
  email: string; phone: string; city: string; existing: string;
  address: string; source: string;
  // Section 2 – Business
  bizDesc: string; problem: string; audience: string; competitors: string;
  // Section 3 – Goals
  purpose: string; success: string;
  // Section 4 – Pages & Content
  pages: string[]; otherPages: string; content: string; brand: string;
  colors: string; fonts: string; style: string; refs: string;
  // Section 5 – Features
  features: string[]; otherFeatures: string; cms: string;
  // Section 6 – Domain
  domainSit: string; domainName: string; domainExt: string;
  hosting: string; emailType: string; emailCount: string;
  // Section 7 – SEO
  seo: string; keywords: string; gbp: string;
  // Section 8 – Budget
  budget: string; launchDate: string; deadline: string;
  payment: string; maint: string;
  // Section 9 – Files (just names for display)
  filesLogo: string[]; filesBrand: string[]; filesContent: string[]; filesImages: string[];
  // Section 10 – Notes
  integrations: string; prevDev: string; notes: string;
}

const EMPTY: FormState = {
  name:"",title:"",company:"",industry:"",email:"",phone:"",city:"",existing:"",address:"",source:"",
  bizDesc:"",problem:"",audience:"",competitors:"",
  purpose:"",success:"",
  pages:[],otherPages:"",content:"",brand:"",colors:"",fonts:"",style:"",refs:"",
  features:[],otherFeatures:"",cms:"",
  domainSit:"",domainName:"",domainExt:"",hosting:"",emailType:"",emailCount:"",
  seo:"",keywords:"",gbp:"",
  budget:"",launchDate:"",deadline:"",payment:"",maint:"",
  filesLogo:[],filesBrand:[],filesContent:[],filesImages:[],
  integrations:"",prevDev:"",notes:"",
};

const SERVICES = [
  { id:"web",   label:"Website",     icon:"solar:globus-bold-duotone",       badge:"Form available" },
  { id:"app",   label:"Mobile App",  icon:"solar:smartphone-device-bold-duotone", badge:"Form available" },
  { id:"ai",    label:"AI Services", icon:"solar:cpu-bolt-bold-duotone",     badge:"Form available" },
  { id:"ecom",  label:"E-Commerce",  icon:"solar:cart-large-bold-duotone",   badge:"Form available" },
  { id:"dash",  label:"Dashboard",   icon:"solar:graph-bold-duotone",        badge:"Form available" },
  { id:"auto",  label:"Automation",  icon:"solar:restart-bold-duotone",      badge:"Form available" },
];

const PAGE_OPTIONS = [
  "Home","About Us","Services (overview)","Individual service pages",
  "Portfolio / Case Studies","Team / Meet the Staff","Pricing Page","FAQ",
  "Blog / News","Testimonials / Reviews","Contact Page with Form",
  "Location / Google Map","Appointment Booking","Client Login / Portal",
  "Gallery","Downloads / Resources",
];

const FEATURE_OPTIONS = [
  "Contact form (emails you)","WhatsApp chat button","Online payment (Paystack)",
  "Appointment / booking system","Blog / CMS (self-update)","Photo / video gallery",
  "Google Maps integration","Social media links / feed","Newsletter signup",
  "Password-protected client area","Live chat widget","Multi-language support",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Field({ label, required, hint, children }: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">
        {label} {required && <span className="text-[#38bdf8]">*</span>}
      </label>
      {children}
      {hint && <p className="text-[10px] text-slate-400">{hint}</p>}
    </div>
  );
}

const inputCls = "w-full bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/50 transition-all text-sm";

function TextInput({ value, onChange, placeholder, type="text" }: { value: string; onChange:(v:string)=>void; placeholder?:string; type?:string }) {
  return <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className={inputCls} />;
}

function TextArea({ value, onChange, placeholder, rows=3 }: { value: string; onChange:(v:string)=>void; placeholder?:string; rows?:number }) {
  return <textarea value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} rows={rows} className={inputCls + " resize-none"} />;
}

function Select({ value, onChange, options, placeholder="Select..." }: { value:string; onChange:(v:string)=>void; options:string[]; placeholder?:string }) {
  return (
    <select value={value} onChange={e=>onChange(e.target.value)} className={inputCls + " appearance-none cursor-pointer"}>
      <option value="">{placeholder}</option>
      {options.map(o => <option key={o} value={o} className="bg-slate-100 dark:bg-[#090c14]">{o}</option>)}
    </select>
  );
}

function ToggleGroup({ options, value, onChange }: { options:string[]; value:string; onChange:(v:string)=>void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => (
        <button key={opt} type="button" onClick={() => onChange(opt)}
          className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all duration-150 ${
            value === opt
              ? "bg-[#38bdf8]/10 border-[#38bdf8] text-[#38bdf8]"
              : "bg-slate-50 dark:bg-transparent border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-[#38bdf8]/40"
          }`}
        >{opt}</button>
      ))}
    </div>
  );
}

function CheckGroup({ options, selected, onChange }: { options:string[]; selected:string[]; onChange:(v:string[])=>void }) {
  const toggle = (opt: string) => {
    onChange(selected.includes(opt) ? selected.filter(x=>x!==opt) : [...selected, opt]);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {options.map(opt => {
        const checked = selected.includes(opt);
        return (
          <button key={opt} type="button" onClick={() => toggle(opt)}
            className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all duration-150 ${
              checked
                ? "bg-[#38bdf8]/5 border-[#38bdf8]/40"
                : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
            }`}
          >
            <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all ${
              checked ? "bg-[#38bdf8] border-[#38bdf8]" : "border-slate-300 dark:border-white/20"
            }`}>
              {checked && <Icon icon="solar:check-read-bold" className="text-[10px] text-[#02040a]" />}
            </div>
            <span className={`text-xs font-medium ${checked ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

function FileDropZone({ label, accept, fileList, onChange }: { label:string; accept:string; fileList:string[]; onChange:(names:string[])=>void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    onChange([...fileList, ...Array.from(files).map(f=>f.name)]);
  };

  return (
    <div>
      <div
        onClick={() => ref.current?.click()}
        onDragOver={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => { e.preventDefault(); setDrag(false); handleFiles(e.dataTransfer.files); }}
        className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all ${
          drag ? "border-[#38bdf8] bg-[#38bdf8]/5" : "border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:border-[#38bdf8]/40"
        }`}
      >
        <Icon icon="solar:upload-minimalistic-bold-duotone" className="text-3xl text-slate-400 mx-auto mb-2" />
        <p className="text-xs font-semibold text-[#38bdf8]">Click or drag to upload</p>
        <p className="text-[10px] text-slate-400 mt-1">{label}</p>
      </div>
      <input ref={ref} type="file" multiple accept={accept} className="hidden" onChange={e => handleFiles(e.target.files)} />
      {fileList.length > 0 && (
        <div className="mt-2 space-y-1">
          {fileList.map((name, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-100 dark:bg-white/5">
              <Icon icon="solar:file-bold-duotone" className="text-[#38bdf8] text-sm shrink-0" />
              <span className="text-xs text-slate-700 dark:text-slate-300 truncate flex-1">{name}</span>
              <button type="button" onClick={() => onChange(fileList.filter((_,j)=>j!==i))} className="text-slate-400 hover:text-rose-400 transition-colors">
                <Icon icon="solar:close-circle-linear" className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionPanel({ num, title, sub, icon, open, onToggle, children }: {
  num: number; title: string; sub: string; icon: string; open: boolean; onToggle: ()=>void; children: React.ReactNode
}) {
  return (
    <div className={`rounded-2xl border overflow-hidden transition-all duration-300 ${open ? "border-[#38bdf8]/30 shadow-lg shadow-[#38bdf8]/5" : "border-slate-200 dark:border-white/10"}`}>
      <button type="button" onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-50 dark:hover:bg-white/[0.02] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#38bdf8] flex items-center justify-center text-[#02040a] text-xs font-black shrink-0">
            {String(num).padStart(2,"0")}
          </div>
          <div>
            <p className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Icon icon={icon} className="text-[#38bdf8]" /> {title}
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">{sub}</p>
          </div>
        </div>
        <Icon icon="solar:alt-arrow-down-linear" className={`text-[#38bdf8] text-lg transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="px-5 pb-6 space-y-5 border-t border-slate-100 dark:border-white/5 pt-5 animate-in fade-in slide-in-from-top-2 duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function IntakePage() {
  const [service, setService] = useState("web");
  const [open, setOpen] = useState<number>(0);
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const set = (key: keyof FormState) => (val: string | string[]) =>
    setForm(prev => ({ ...prev, [key]: val }));

  const toggle = (sec: number) => setOpen(prev => prev === sec ? -1 : sec);

  // Progress: count required fields filled
  const progress = (() => {
    const reqs = [form.name, form.company, form.email, form.phone];
    const filled = reqs.filter(v => v.trim()).length;
    return Math.round((filled / reqs.length) * 100);
  })();

  function validate() {
    if (!form.name || !form.company || !form.email || !form.phone) {
      setError("Please fill in required fields: Full Name, Company Name, Email Address, and WhatsApp Number.");
      return false;
    }
    setError("");
    return true;
  }

  function buildText() {
    const pg = form.pages.length ? form.pages.join(", ") : "None selected";
    const ft = form.features.length ? form.features.join(", ") : "None selected";
    return `SASTECH CONSULTS — PROJECT INTAKE
==========================================
Service: ${SERVICES.find(s=>s.id===service)?.label || service}
Date: ${new Date().toLocaleDateString("en-GB")}

CLIENT INFORMATION
Name: ${form.name}${form.title ? " ("+form.title+")" : ""}
Company: ${form.company}${form.industry ? " · "+form.industry : ""}
Email: ${form.email}
WhatsApp: ${form.phone}${form.city ? "\nCity: "+form.city : ""}${form.existing ? "\nExisting site: "+form.existing : ""}${form.address ? "\nAddress: "+form.address : ""}${form.source ? "\nSource: "+form.source : ""}

BUSINESS OVERVIEW
${form.bizDesc || "—"}
Problem: ${form.problem || "—"}
Target audience: ${form.audience || "—"}
Competitors: ${form.competitors || "—"}

PROJECT GOALS
Purpose: ${form.purpose || "—"}
Success metric: ${form.success || "—"}

PAGES REQUIRED
${pg}${form.otherPages ? " | Other: "+form.otherPages : ""}

CONTENT & DESIGN
Content ready: ${form.content || "—"}
Brand assets: ${form.brand || "—"}
Colours: ${form.colors || "—"}
Fonts: ${form.fonts || "—"}
Style/feel: ${form.style || "—"}
References: ${form.refs || "—"}

FEATURES REQUIRED
${ft}${form.otherFeatures ? " | Other: "+form.otherFeatures : ""}
Self-manage: ${form.cms || "—"}

DOMAIN, HOSTING & EMAIL
Domain: ${form.domainSit || "—"}${form.domainName ? " ("+form.domainName+")" : form.domainExt ? " ("+form.domainExt+")" : ""}
Hosting: ${form.hosting || "—"}
Corporate email: ${form.emailType || "—"}${form.emailCount ? " — "+form.emailCount+" accounts" : ""}

SEO & VISIBILITY
SEO priority: ${form.seo || "—"}
Keywords: ${form.keywords || "—"}
Google Business: ${form.gbp || "—"}

BUDGET & TIMELINE
Budget: ${form.budget || "—"}
Launch date: ${form.launchDate || "—"}
Deadline: ${form.deadline || "—"}
Payment: ${form.payment || "—"}
Maintenance plan: ${form.maint || "—"}

ADDITIONAL NOTES
Integrations: ${form.integrations || "—"}
Previous developer: ${form.prevDev || "—"}
Other notes: ${form.notes || "—"}
==========================================`;
  }

  function sendWA() {
    if (!validate()) return;
    const svc = SERVICES.find(s=>s.id===service)?.label || service;
    const short = `*SASTECH PROJECT INTAKE*\n\n👤 *Client:* ${form.name}\n🏢 *Company:* ${form.company}\n📧 ${form.email}\n📱 ${form.phone}\n\n🎯 *Service:* ${svc}\n🎯 *Purpose:* ${form.purpose || "—"}\n📄 *Pages:* ${form.pages.length ? form.pages.slice(0,4).join(", ")+(form.pages.length>4?" +more":"") : "Not specified"}\n⚙️ *Features:* ${form.features.length ? form.features.slice(0,3).join(", ")+(form.features.length>3?" +more":"") : "None"}\n💰 *Budget:* ${form.budget || "To discuss"}\n📅 *Launch:* ${form.launchDate || "To discuss"}\n\n📝 *Notes:* ${form.notes || "None"}\n\n_Full intake sent via email. Files to follow._`;
    window.open("https://wa.me/2348022324523?text="+encodeURIComponent(short), "_blank");
    setSubmitted(true);
  }

  function sendEmail() {
    if (!validate()) return;
    const subject = encodeURIComponent(`Sastech Project Intake: ${form.company} — ${form.name}`);
    const body = encodeURIComponent(buildText());
    window.open(`mailto:ayomidesholarin13@gmail.com?subject=${subject}&body=${body}`, "_blank");
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-off-white dark:bg-[#02040a] text-slate-900 dark:text-slate-300 transition-colors duration-500">
      <Helmet>
        <title>Start Your Project | Sastech Consults</title>
        <meta name="description" content="Fill in our project intake form so we can prepare a detailed proposal within 24–48 hours." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-10 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#38bdf8]/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-[#38bdf8]/20 bg-[#38bdf8]/5 text-[#38bdf8] text-[10px] font-bold uppercase tracking-widest">
              Project Intake
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Project</span> with Sastech
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
              Fill in this intake form so we can prepare a detailed proposal for you. The more specific you are, the faster we can get started.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Selector */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-500 mb-4 text-center">Select Your Service</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
            {SERVICES.map(svc => (
              <button
                key={svc.id}
                type="button"
                onClick={() => setService(svc.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all duration-200 ${
                  service === svc.id
                    ? "bg-[#38bdf8]/10 border-[#38bdf8] shadow-[0_0_20px_rgba(56,189,248,0.1)]"
                    : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <Icon icon={svc.icon} className={`text-2xl ${service === svc.id ? "text-[#38bdf8]" : "text-slate-400"}`} />
                <span className={`text-[10px] font-bold ${service === svc.id ? "text-[#38bdf8]" : "text-slate-500 dark:text-slate-400"}`}>{svc.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">

          {submitted ? (
            <div className="text-center py-24 glass-panel rounded-[40px] border border-slate-200 dark:border-white/10 px-10">
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4" style={{ fontFamily: "var(--font-outfit)" }}>Intake Submitted!</h2>
              <p className="text-slate-500 dark:text-slate-400 font-light leading-relaxed max-w-md mx-auto mb-8">
                Ayomide will review your intake and send a detailed proposal within 24–48 hours.<br /><br />
                <strong className="text-slate-900 dark:text-white">Don't forget:</strong> Send any uploaded files to{" "}
                <span className="text-[#38bdf8]">ayomidesholarin13@gmail.com</span>
              </p>
              <a
                href="https://wa.me/2348022324523"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-2xl font-bold text-sm hover:bg-[#1FAD55] transition-colors"
              >
                <Icon icon="solar:chat-round-dots-bold-duotone" className="text-xl" />
                Chat with Ayomide on WhatsApp
              </a>
            </div>
          ) : (
            <>
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">
                  <span>Progress</span>
                  <span className="text-[#38bdf8]">{progress}%</span>
                </div>
                <div className="h-1.5 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-3">

                {/* 1 – Contact */}
                <SectionPanel num={1} title="Your Contact Details" sub="Who you are and how to reach you" icon="solar:user-bold-duotone" open={open===0} onToggle={()=>toggle(0)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required><TextInput value={form.name} onChange={set("name")} placeholder="e.g. Adaeze Okonkwo" /></Field>
                    <Field label="Job Title / Role"><TextInput value={form.title} onChange={set("title")} placeholder="e.g. CEO, Founder, Manager" /></Field>
                    <Field label="Company / Business Name" required><TextInput value={form.company} onChange={set("company")} placeholder="e.g. Okonkwo & Associates" /></Field>
                    <Field label="Industry / Sector"><TextInput value={form.industry} onChange={set("industry")} placeholder="e.g. Accounting, Logistics" /></Field>
                    <Field label="Email Address" required><TextInput value={form.email} onChange={set("email")} placeholder="hello@yourfirm.com" type="email" /></Field>
                    <Field label="WhatsApp Number" required><TextInput value={form.phone} onChange={set("phone")} placeholder="e.g. 08012345678" type="tel" /></Field>
                    <Field label="City / Location"><TextInput value={form.city} onChange={set("city")} placeholder="e.g. Lagos" /></Field>
                    <Field label="Existing Website (if any)"><TextInput value={form.existing} onChange={set("existing")} placeholder="e.g. yourfirm.com" /></Field>
                  </div>
                  <Field label="Full Business Address">
                    <TextInput value={form.address} onChange={set("address")} placeholder="e.g. 5 Marina Road, Victoria Island, Lagos" />
                  </Field>
                  <Field label="How did you hear about Sastech Consults?">
                    <Select value={form.source} onChange={set("source")} options={["LinkedIn","Twitter / X","TikTok / Instagram","WhatsApp referral","Google search","Friend or colleague","Other"]} />
                  </Field>
                </SectionPanel>

                {/* 2 – Business */}
                <SectionPanel num={2} title="Your Business" sub="Who you serve and what you want to achieve" icon="solar:buildings-bold-duotone" open={open===1} onToggle={()=>toggle(1)}>
                  <Field label="Describe your business in 2–3 sentences">
                    <TextArea value={form.bizDesc} onChange={set("bizDesc")} rows={3} placeholder="e.g. We are a certified accounting firm based in Lagos. We provide tax advisory, auditing, and consulting to SMEs and corporates across Nigeria." />
                  </Field>
                  <Field label="What problem is your lack of digital presence causing your business?">
                    <TextArea value={form.problem} onChange={set("problem")} rows={2} placeholder="e.g. Potential clients Google us and find nothing. We lose deals to competitors with a professional online presence." />
                  </Field>
                  <Field label="Who is your ideal client?">
                    <ToggleGroup options={["Individual consumers","Small businesses (SMEs)","Corporate / enterprise","Government / NGO","Mixed / all of the above"]} value={form.audience} onChange={set("audience")} />
                  </Field>
                  <Field label="List 2–3 key competitors or similar businesses">
                    <TextInput value={form.competitors} onChange={set("competitors")} placeholder="e.g. Deloitte Nigeria, KPMG Nigeria, smaller local firms" />
                  </Field>
                </SectionPanel>

                {/* 3 – Goals */}
                <SectionPanel num={3} title="Project Goals" sub="What this system must do for you" icon="solar:target-bold-duotone" open={open===2} onToggle={()=>toggle(2)}>
                  <Field label="Primary purpose" required>
                    <Select value={form.purpose} onChange={set("purpose")} placeholder="Select the main goal..." options={[
                      "Get leads and enquiries from potential clients",
                      "Build credibility and professional presence",
                      "Sell products or services online",
                      "Book appointments or consultations",
                      "Serve as a client portal or member area",
                      "Automate internal business processes",
                      "Build an AI-powered system or agent",
                      "All of the above",
                    ]} />
                  </Field>
                  <Field label="What would success look like 3 months after launch? Be specific.">
                    <TextArea value={form.success} onChange={set("success")} rows={2} placeholder="e.g. At least 5 enquiry form submissions per month from corporate clients. Rank on Google when people search 'accounting firm Lagos'." />
                  </Field>
                </SectionPanel>

                {/* 4 – Pages & Content */}
                <SectionPanel num={4} title="Pages & Content" sub="Structure, content, and design direction" icon="solar:documents-bold-duotone" open={open===3} onToggle={()=>toggle(3)}>
                  <Field label="Pages needed — select all that apply">
                    <CheckGroup options={PAGE_OPTIONS} selected={form.pages} onChange={val => setForm(p=>({...p, pages: val as string[]}))} />
                  </Field>
                  <Field label="Other pages not listed above">
                    <TextInput value={form.otherPages} onChange={set("otherPages")} placeholder="e.g. Careers page, Partners page" />
                  </Field>
                  <div className="border-t border-slate-100 dark:border-white/5 pt-5 space-y-4">
                    <Field label="Is your written content (text for each page) ready?">
                      <ToggleGroup options={["Yes — all ready","Partially ready","No — Sastech to write it"]} value={form.content} onChange={set("content")} />
                    </Field>
                    <Field label="Do you have a logo and brand colours?">
                      <ToggleGroup options={["Yes — logo + full brand guide","Logo only","No — Sastech to design/recommend"]} value={form.brand} onChange={set("brand")} />
                    </Field>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Field label="Preferred colours (if any)"><TextInput value={form.colors} onChange={set("colors")} placeholder="e.g. Navy blue, gold, white" /></Field>
                      <Field label="Preferred font style"><TextInput value={form.fonts} onChange={set("fonts")} placeholder="e.g. Clean, modern, serif, bold" /></Field>
                    </div>
                    <Field label="Describe the look and feel you want">
                      <TextArea value={form.style} onChange={set("style")} rows={2} placeholder="e.g. Professional and corporate, dark navy with gold accents, serious, trustworthy, clean." />
                    </Field>
                    <Field label="List 2–3 websites you like and what you like about each">
                      <TextArea value={form.refs} onChange={set("refs")} rows={3} placeholder={"1. deloitte.com/ng — dark professional layout\n2. kpmg.com/ng — services clearly presented\n3. ..."} />
                    </Field>
                  </div>
                </SectionPanel>

                {/* 5 – Features */}
                <SectionPanel num={5} title="Features Required" sub="Technical functionality your system needs" icon="solar:settings-bold-duotone" open={open===4} onToggle={()=>toggle(4)}>
                  <Field label="Select all that apply">
                    <CheckGroup options={FEATURE_OPTIONS} selected={form.features} onChange={val => setForm(p=>({...p, features: val as string[]}))} />
                  </Field>
                  <Field label="Other features not listed above">
                    <TextInput value={form.otherFeatures} onChange={set("otherFeatures")} placeholder="e.g. Calculator, job board, member directory" />
                  </Field>
                  <Field label="Do you need to update the system yourself after delivery?">
                    <ToggleGroup options={["Yes — I want to update it myself","No — Sastech manages it","Not sure"]} value={form.cms} onChange={set("cms")} />
                  </Field>
                </SectionPanel>

                {/* 6 – Domain, Hosting & Email */}
                <SectionPanel num={6} title="Domain, Hosting & Email" sub="Infrastructure and professional email setup" icon="solar:server-bold-duotone" open={open===5} onToggle={()=>toggle(5)}>
                  <Field label="Domain name situation">
                    <ToggleGroup options={["I already have a domain","I need a new domain","Not sure what a domain is"]} value={form.domainSit} onChange={set("domainSit")} />
                  </Field>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="If you have a domain — what is it?"><TextInput value={form.domainName} onChange={set("domainName")} placeholder="e.g. yourfirm.com" /></Field>
                    <Field label="Preferred domain extension (if new)">
                      <Select value={form.domainExt} onChange={set("domainExt")} options={[".com (recommended)",".ng",".com.ng",".org",".io","No preference"]} />
                    </Field>
                  </div>
                  <Field label="Web hosting situation">
                    <ToggleGroup options={["I already have hosting","I need hosting set up","Not sure"]} value={form.hosting} onChange={set("hosting")} />
                  </Field>
                  <Field label="Corporate email (e.g. name@yourcompany.com)">
                    <ToggleGroup options={["Zoho Mail Free (up to 5 accounts)","Google Workspace (paid)","Not needed right now"]} value={form.emailType} onChange={set("emailType")} />
                  </Field>
                  <Field label="If you need corporate email — how many accounts?" hint="e.g. info@, sales@, yourname@">
                    <TextInput value={form.emailCount} onChange={set("emailCount")} placeholder="e.g. 3" type="number" />
                  </Field>
                </SectionPanel>

                {/* 7 – SEO */}
                <SectionPanel num={7} title="SEO & Visibility" sub="Google ranking and analytics" icon="solar:magnifer-bold-duotone" open={open===6} onToggle={()=>toggle(6)}>
                  <Field label="Do you want to appear in Google search results for specific terms?">
                    <ToggleGroup options={["Yes — this matters a lot","Nice to have","Not a priority"]} value={form.seo} onChange={set("seo")} />
                  </Field>
                  <Field label="What would your ideal client search to find you? List 3–5 phrases.">
                    <TextArea value={form.keywords} onChange={set("keywords")} rows={2} placeholder="e.g. accounting firm Lagos, tax consultant Lekki, auditing services Nigeria" />
                  </Field>
                  <Field label="Google Business Profile (your Google Maps business listing)">
                    <ToggleGroup options={["I have one — link it","I don't have one — set it up","Not needed"]} value={form.gbp} onChange={set("gbp")} />
                  </Field>
                </SectionPanel>

                {/* 8 – Budget & Timeline */}
                <SectionPanel num={8} title="Budget & Timeline" sub="Investment range and launch date" icon="solar:wallet-money-bold-duotone" open={open===7} onToggle={()=>toggle(7)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Budget range" required>
                      <Select value={form.budget} onChange={set("budget")} placeholder="Select range..." options={[
                        "Under ₦200,000","₦200,000 – ₦500,000","₦500,000 – ₦1,000,000",
                        "₦1,000,000 – ₦3,000,000","Above ₦3,000,000","International (USD) — to discuss",
                      ]} />
                    </Field>
                    <Field label="Desired launch date"><TextInput value={form.launchDate} onChange={set("launchDate")} type="date" /></Field>
                  </div>
                  <Field label="Is this launch date flexible?">
                    <ToggleGroup options={["Hard deadline — cannot move","Preferred — flexible by 1–2 weeks","Flexible — quality over speed"]} value={form.deadline} onChange={set("deadline")} />
                  </Field>
                  <Field label="Payment preference">
                    <ToggleGroup options={["Bank transfer (NGN)","Paystack (card/bank)","USD wire (international)"]} value={form.payment} onChange={set("payment")} />
                  </Field>
                  <Field label="Are you interested in a monthly maintenance plan after delivery?">
                    <ToggleGroup options={["Yes — definitely","Maybe — tell me the options","No — I'll manage it myself"]} value={form.maint} onChange={set("maint")} />
                  </Field>
                </SectionPanel>

                {/* 9 – Files & Assets */}
                <SectionPanel num={9} title="Files & Assets" sub="Upload your logo, content, images, and references" icon="solar:paperclip-bold-duotone" open={open===8} onToggle={()=>toggle(8)}>
                  <Field label="Logo file" hint="PNG, SVG, PDF, AI, EPS">
                    <FileDropZone label="PNG, SVG, PDF, AI, EPS" accept=".png,.svg,.pdf,.jpg,.jpeg,.ai,.eps" fileList={form.filesLogo} onChange={val=>setForm(p=>({...p,filesLogo:val}))} />
                  </Field>
                  <Field label="Brand guidelines / style guide" hint="PDF, DOCX, PPTX">
                    <FileDropZone label="PDF, DOCX, PPTX" accept=".pdf,.docx,.doc,.pptx,.png,.jpg" fileList={form.filesBrand} onChange={val=>setForm(p=>({...p,filesBrand:val}))} />
                  </Field>
                  <Field label="Website content documents" hint="Word, PDF, Google Docs export, TXT">
                    <FileDropZone label="Word, PDF, TXT, CSV" accept=".pdf,.docx,.doc,.txt,.xlsx,.csv" fileList={form.filesContent} onChange={val=>setForm(p=>({...p,filesContent:val}))} />
                  </Field>
                  <Field label="Photos, images, and other media" hint="JPG, PNG, WEBP, MP4">
                    <FileDropZone label="JPG, PNG, WEBP, MP4 (team photos, office photos, product images)" accept=".png,.jpg,.jpeg,.webp,.gif,.mp4,.mov" fileList={form.filesImages} onChange={val=>setForm(p=>({...p,filesImages:val}))} />
                  </Field>
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    * Files cannot be sent through WhatsApp or the email link. Please send them separately to{" "}
                    <span className="text-[#38bdf8] font-bold">ayomidesholarin13@gmail.com</span> or WhatsApp after submitting.
                  </p>
                </SectionPanel>

                {/* 10 – Final Notes */}
                <SectionPanel num={10} title="Final Notes" sub="Anything else we should know" icon="solar:notes-bold-duotone" open={open===9} onToggle={()=>toggle(9)}>
                  <Field label="Third-party integrations this system needs to connect to">
                    <TextInput value={form.integrations} onChange={set("integrations")} placeholder="e.g. QuickBooks, Calendly, Mailchimp, Paystack, your accounting software" />
                  </Field>
                  <Field label="Have you worked with a developer before? If yes, what went wrong?">
                    <TextArea value={form.prevDev} onChange={set("prevDev")} rows={2} placeholder="e.g. Yes — they took payment and disappeared. Or: No — this is our first project." />
                  </Field>
                  <Field label="Anything else important — requirements, concerns, or must-haves">
                    <TextArea value={form.notes} onChange={set("notes")} rows={3} placeholder="e.g. The site must be ready before our company's 10th anniversary in June. We want it to feel more prestigious than our competitors." />
                  </Field>
                </SectionPanel>

              </div>

              {/* Submit */}
              <div className="mt-6 glass-panel rounded-2xl border border-slate-200 dark:border-white/10 p-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2" style={{ fontFamily: "var(--font-outfit)" }}>Ready to send your intake?</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-light leading-relaxed mb-6">
                  Your responses will be sent to Ayomide at Sastech Consults. You'll receive a detailed proposal within 24–48 hours.
                </p>

                {error && (
                  <div className="mb-4 p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 text-rose-400 text-sm flex items-start gap-3">
                    <Icon icon="solar:danger-circle-bold-duotone" className="text-lg shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={sendWA}
                    className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1FAD55] transition-colors"
                  >
                    <Icon icon="solar:chat-round-dots-bold-duotone" className="text-xl" />
                    Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={sendEmail}
                    className="flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-2xl border-2 border-[#38bdf8] text-[#38bdf8] font-bold text-sm hover:bg-[#38bdf8]/10 transition-colors"
                  >
                    <Icon icon="solar:letter-bold-duotone" className="text-xl" />
                    Send via Email
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 text-center mt-4 uppercase tracking-widest font-bold">
                  Confidential · Used only for project scoping
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
