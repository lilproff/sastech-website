import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/shared/Reveal";

// ─── Shared UI atoms ──────────────────────────────────────────────────────────
const inputCls =
  "w-full bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-[#38bdf8]/60 transition-all text-sm";

function Field({ label, required, hint, span2, children }: {
  label: string; required?: boolean; hint?: string; span2?: boolean; children: React.ReactNode;
}) {
  return (
    <div className={span2 ? "sm:col-span-2" : ""}>
      <label className="block text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
        {label}{required && <span className="text-[#38bdf8] ml-1">*</span>}
      </label>
      {children}
      {hint && <p className="text-[10px] text-slate-400 mt-1.5">{hint}</p>}
    </div>
  );
}

function TInput({ v, set, placeholder, type = "text" }: { v: string; set: (x: string) => void; placeholder?: string; type?: string }) {
  return <input type={type} value={v} onChange={e => set(e.target.value)} placeholder={placeholder} className={inputCls} />;
}

function TArea({ v, set, placeholder, rows = 3 }: { v: string; set: (x: string) => void; placeholder?: string; rows?: number }) {
  return <textarea value={v} onChange={e => set(e.target.value)} placeholder={placeholder} rows={rows} className={inputCls + " resize-none"} />;
}

function TSelect({ v, set, opts, placeholder = "Select..." }: { v: string; set: (x: string) => void; opts: string[]; placeholder?: string }) {
  return (
    <select value={v} onChange={e => set(e.target.value)} className={inputCls + " cursor-pointer appearance-none"}>
      <option value="">{placeholder}</option>
      {opts.map(o => <option key={o} value={o} className="bg-white dark:bg-[#0d1117]">{o}</option>)}
    </select>
  );
}

function Toggle({ opts, v, set }: { opts: string[]; v: string; set: (x: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {opts.map(o => (
        <button key={o} type="button" onClick={() => set(o)}
          className={`px-4 py-2 rounded-lg border text-xs font-semibold transition-all ${
            v === o ? "bg-[#38bdf8]/10 border-[#38bdf8] text-[#38bdf8]"
              : "bg-white dark:bg-transparent border-slate-200 dark:border-white/10 text-slate-500 hover:border-[#38bdf8]/40"
          }`}
        >{o}</button>
      ))}
    </div>
  );
}

function Checks({ opts, v, set }: { opts: string[]; v: string[]; set: (x: string[]) => void }) {
  const toggle = (o: string) => set(v.includes(o) ? v.filter(x => x !== o) : [...v, o]);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
      {opts.map(o => {
        const on = v.includes(o);
        return (
          <button key={o} type="button" onClick={() => toggle(o)}
            className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
              on ? "bg-[#38bdf8]/5 border-[#38bdf8]/40" : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/10"
            }`}
          >
            <div className={`w-4 h-4 rounded flex items-center justify-center shrink-0 border transition-all ${on ? "bg-[#38bdf8] border-[#38bdf8]" : "border-slate-300 dark:border-white/20"}`}>
              {on && <Icon icon="solar:check-read-bold" className="text-[9px] text-[#02040a]" />}
            </div>
            <span className={`text-xs font-medium ${on ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400"}`}>{o}</span>
          </button>
        );
      })}
    </div>
  );
}

function FileDrop({ label, accept, files, set }: { label: string; accept: string; files: string[]; set: (x: string[]) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  const [drag, setDrag] = useState(false);
  const add = (fl: FileList | null) => { if (fl) set([...files, ...Array.from(fl).map(f => f.name)]); };
  return (
    <div>
      <div onClick={() => ref.current?.click()}
        onDragOver={e => { e.preventDefault(); setDrag(true); }}
        onDragLeave={() => setDrag(false)}
        onDrop={e => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); }}
        className={`border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all ${drag ? "border-[#38bdf8] bg-[#38bdf8]/5" : "border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02] hover:border-[#38bdf8]/40"}`}
      >
        <Icon icon="solar:upload-minimalistic-bold-duotone" className="text-3xl text-slate-300 dark:text-slate-600 mx-auto mb-2" />
        <p className="text-xs font-semibold text-[#38bdf8]">Click or drag to upload</p>
        <p className="text-[10px] text-slate-400 mt-1">{label}</p>
      </div>
      <input ref={ref} type="file" multiple accept={accept} className="hidden" onChange={e => add(e.target.files)} />
      {files.length > 0 && (
        <div className="mt-2 space-y-1">
          {files.map((name, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
              <Icon icon="solar:file-bold-duotone" className="text-[#38bdf8] text-sm shrink-0" />
              <span className="text-xs text-slate-700 dark:text-slate-300 truncate flex-1">{name}</span>
              <button type="button" onClick={() => set(files.filter((_, j) => j !== i))} className="text-slate-300 hover:text-rose-400 transition-colors">
                <Icon icon="solar:close-circle-linear" className="text-sm" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function Accordion({ num, title, sub, icon, open, toggle, children }: {
  num: number; title: string; sub: string; icon: string; open: boolean; toggle: () => void; children: React.ReactNode;
}) {
  return (
    <div className={`rounded-2xl border overflow-hidden transition-colors ${open ? "border-[#38bdf8]/25" : "border-slate-200 dark:border-white/8"}`}>
      <button type="button" onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white dark:bg-[#0d1117] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-[#38bdf8] flex items-center justify-center text-[#02040a] text-xs font-black shrink-0">
            {String(num).padStart(2, "0")}
          </div>
          <div>
            <p className="font-semibold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <Icon icon={icon} className="text-[#38bdf8]" />{title}
            </p>
            <p className="text-[10px] text-slate-400 mt-0.5">{sub}</p>
          </div>
        </div>
        <Icon icon="solar:alt-arrow-down-linear" className={`text-[#38bdf8] text-lg shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="px-6 pb-6 pt-5 space-y-5 bg-white dark:bg-[#0d1117] border-t border-slate-100 dark:border-white/5">
          {children}
        </div>
      )}
    </div>
  );
}

// ─── Service definitions ──────────────────────────────────────────────────────
const SERVICES = [
  { id: "web",  label: "Website",     icon: "solar:globus-bold-duotone" },
  { id: "app",  label: "Mobile App",  icon: "solar:smartphone-device-bold-duotone" },
  { id: "ai",   label: "AI Services", icon: "solar:cpu-bolt-bold-duotone" },
  { id: "ecom", label: "E-Commerce",  icon: "solar:cart-large-bold-duotone" },
  { id: "dash", label: "Dashboard",   icon: "solar:graph-bold-duotone" },
  { id: "auto", label: "Automation",  icon: "solar:restart-bold-duotone" },
];

// ─── Form state ───────────────────────────────────────────────────────────────
type FS = Record<string, string>;
type FM = Record<string, string[]>;

function useForm() {
  const [s, setS] = useState<FS>({});
  const [m, setM] = useState<FM>({});
  const get = (k: string) => s[k] ?? "";
  const set = (k: string) => (v: string) => setS(p => ({ ...p, [k]: v }));
  const getM = (k: string): string[] => m[k] ?? [];
  const setM_ = (k: string) => (v: string[]) => setM(p => ({ ...p, [k]: v }));
  return { get, set, getM, setM: setM_, raw: s, rawM: m };
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function IntakePage() {
  const [service, setService] = useState("web");
  const [openSec, setOpenSec] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const f = useForm();

  const toggle = (i: number) => setOpenSec(p => p === i ? -1 : i);

  const progress = (() => {
    const req = [f.get("name"), f.get("company"), f.get("email"), f.get("phone")];
    return Math.round((req.filter(v => v.trim()).length / req.length) * 100);
  })();

  function validate() {
    if (!f.get("name") || !f.get("company") || !f.get("email") || !f.get("phone")) {
      setError("Please fill in: Full Name, Company Name, Email Address, and WhatsApp Number.");
      return false;
    }
    setError("");
    return true;
  }

  function buildBody() {
    const svcLabel = SERVICES.find(s => s.id === service)?.label ?? service;
    const lines = [
      `SASTECH CONSULTS — PROJECT INTAKE`,
      `==========================================`,
      `Service: ${svcLabel}`,
      `Date: ${new Date().toLocaleDateString("en-GB")}`,
      ``,
      `CLIENT`,
      `Name: ${f.get("name")}${f.get("jobtitle") ? " (" + f.get("jobtitle") + ")" : ""}`,
      `Company: ${f.get("company")}${f.get("industry") ? " · " + f.get("industry") : ""}`,
      `Email: ${f.get("email")}`,
      `WhatsApp: ${f.get("phone")}`,
      f.get("city") ? `City: ${f.get("city")}` : null,
      f.get("existing") ? `Existing site/app: ${f.get("existing")}` : null,
      f.get("address") ? `Address: ${f.get("address")}` : null,
      f.get("source") ? `Source: ${f.get("source")}` : null,
      ``,
      `BUSINESS`,
      f.get("bizDesc") || "—",
      `Problem: ${f.get("problem") || "—"}`,
      `Target audience: ${f.get("audience") || "—"}`,
      `Competitors: ${f.get("competitors") || "—"}`,
      ``,
      `GOALS`,
      `Purpose: ${f.get("purpose") || "—"}`,
      `Success metric: ${f.get("success") || "—"}`,
      ``,
      `SERVICE-SPECIFIC`,
    ];

    // Append all keyed values not already captured
    const used = new Set(["name","jobtitle","company","industry","email","phone","city","existing","address","source","bizDesc","problem","audience","competitors","purpose","success","budget","launchDate","deadline","payment","maint","integrations","prevDev","notes"]);
    Object.entries(f.raw).filter(([k]) => !used.has(k)).forEach(([k, v]) => v && lines.push(`${k}: ${v}`));
    Object.entries(f.rawM).forEach(([k, v]) => v?.length && lines.push(`${k}: ${v.join(", ")}`));

    lines.push(``, `BUDGET & TIMELINE`);
    lines.push(`Budget: ${f.get("budget") || "—"}`);
    lines.push(`Launch date: ${f.get("launchDate") || "—"}`);
    lines.push(`Deadline: ${f.get("deadline") || "—"}`);
    lines.push(`Payment: ${f.get("payment") || "—"}`);
    lines.push(`Maintenance: ${f.get("maint") || "—"}`);
    lines.push(``, `ADDITIONAL NOTES`);
    lines.push(`Integrations: ${f.get("integrations") || "—"}`);
    lines.push(`Previous dev: ${f.get("prevDev") || "—"}`);
    lines.push(`Notes: ${f.get("notes") || "—"}`);
    lines.push(`==========================================`);
    return lines.filter(l => l !== null).join("\n");
  }

  function sendWA() {
    if (!validate()) return;
    const svcLabel = SERVICES.find(s => s.id === service)?.label ?? service;
    const pages = f.getM("pages");
    const features = f.getM("features");
    const msg = [
      `*SASTECH PROJECT INTAKE*`,
      ``,
      `👤 *Client:* ${f.get("name")}`,
      `🏢 *Company:* ${f.get("company")}`,
      `📧 ${f.get("email")}`,
      `📱 ${f.get("phone")}`,
      ``,
      `🎯 *Service:* ${svcLabel}`,
      `🎯 *Purpose:* ${f.get("purpose") || "—"}`,
      pages.length ? `📄 *Pages/Screens:* ${pages.slice(0, 4).join(", ")}${pages.length > 4 ? " +more" : ""}` : null,
      features.length ? `⚙️ *Features:* ${features.slice(0, 3).join(", ")}${features.length > 3 ? " +more" : ""}` : null,
      `💰 *Budget:* ${f.get("budget") || "To discuss"}`,
      `📅 *Launch:* ${f.get("launchDate") || "To discuss"}`,
      f.get("notes") ? `📝 *Notes:* ${f.get("notes")}` : null,
      ``,
      `_Full intake sent via email._`,
    ].filter(Boolean).join("\n");
    window.open("https://wa.me/2348022324523?text=" + encodeURIComponent(msg), "_blank");
    setSubmitted(true);
  }

  function sendEmail() {
    if (!validate()) return;
    const svcLabel = SERVICES.find(s => s.id === service)?.label ?? service;
    const sub = encodeURIComponent(`Sastech Project Intake: ${f.get("company")} — ${svcLabel}`);
    window.open(`mailto:ayomidesholarin13@gmail.com?subject=${sub}&body=${encodeURIComponent(buildBody())}`, "_blank");
    setSubmitted(true);
  }

  // ── Rendered service-specific middle sections ───────────────────────────────
  // Each returns an array of <Accordion> elements with sequential section numbers
  // starting at 4 (sections 1–3 and 8–10 are universal)

  function renderServiceSections(startNum: number): React.ReactNode[] {
    switch (service) {

      // ── WEBSITE ──────────────────────────────────────────────────────────────
      case "web": return [
        <Accordion key="w1" num={startNum} title="Pages & Content" sub="Structure, design direction, and written content" icon="solar:documents-bold-duotone" open={openSec === startNum} toggle={() => toggle(startNum)}>
          <Field label="Pages needed — select all that apply" span2>
            <Checks opts={["Home","About Us","Services overview","Individual service pages","Portfolio / Case Studies","Team / Staff","Pricing","FAQ","Blog / News","Testimonials","Contact Page","Google Map","Appointment Booking","Client Login / Portal","Gallery","Downloads / Resources"]} v={f.getM("pages")} set={f.setM("pages")} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Other pages not listed"><TInput v={f.get("otherPages")} set={f.set("otherPages")} placeholder="e.g. Careers, Partners" /></Field>
            <Field label="Written content ready?"><Toggle opts={["Yes — all ready","Partially ready","No — Sastech to write"]} v={f.get("contentReady")} set={f.set("contentReady")} /></Field>
            <Field label="Brand assets available?"><Toggle opts={["Yes — logo + brand guide","Logo only","No — Sastech to design"]} v={f.get("brandAssets")} set={f.set("brandAssets")} /></Field>
            <Field label="Preferred colours"><TInput v={f.get("colors")} set={f.set("colors")} placeholder="e.g. Navy, gold, white" /></Field>
            <Field label="Preferred font style"><TInput v={f.get("fonts")} set={f.set("fonts")} placeholder="e.g. Clean, modern, serif" /></Field>
          </div>
          <Field label="Describe the look and feel you want" span2>
            <TArea v={f.get("style")} set={f.set("style")} rows={2} placeholder="e.g. Professional and corporate, dark navy with gold accents — NOT colourful or playful." />
          </Field>
          <Field label="2–3 websites you admire and what you like about each" span2>
            <TArea v={f.get("refs")} set={f.set("refs")} rows={3} placeholder={"1. deloitte.com/ng — dark, professional layout\n2. kpmg.com/ng — services clearly presented"} />
          </Field>
        </Accordion>,

        <Accordion key="w2" num={startNum + 1} title="Features Required" sub="Technical functionality your site needs" icon="solar:settings-bold-duotone" open={openSec === startNum + 1} toggle={() => toggle(startNum + 1)}>
          <Field label="Select all that apply" span2>
            <Checks opts={["Contact form (emails you)","WhatsApp chat button","Online payment (Paystack)","Appointment / booking system","Blog / CMS (self-update)","Photo / video gallery","Google Maps integration","Social media feed","Newsletter signup","Client login / portal","Live chat widget","Multi-language"]} v={f.getM("features")} set={f.setM("features")} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Other features"><TInput v={f.get("otherFeatures")} set={f.set("otherFeatures")} placeholder="e.g. Calculator, job board" /></Field>
            <Field label="Self-manage after delivery?"><Toggle opts={["Yes","No — Sastech manages","Not sure"]} v={f.get("cms")} set={f.set("cms")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="w3" num={startNum + 2} title="Domain, Hosting & Email" sub="Infrastructure setup" icon="solar:server-bold-duotone" open={openSec === startNum + 2} toggle={() => toggle(startNum + 2)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Domain situation"><Toggle opts={["I have a domain","Need a new domain","Not sure"]} v={f.get("domainSit")} set={f.set("domainSit")} /></Field>
            <Field label="Domain name (if existing)"><TInput v={f.get("domainName")} set={f.set("domainName")} placeholder="e.g. yourfirm.com" /></Field>
            <Field label="Hosting situation"><Toggle opts={["I have hosting","Need hosting","Not sure"]} v={f.get("hosting")} set={f.set("hosting")} /></Field>
            <Field label="Corporate email"><Toggle opts={["Zoho Mail Free","Google Workspace","Not needed"]} v={f.get("emailType")} set={f.set("emailType")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="w4" num={startNum + 3} title="SEO & Visibility" sub="Google ranking and analytics" icon="solar:magnifer-bold-duotone" open={openSec === startNum + 3} toggle={() => toggle(startNum + 3)}>
          <Field label="SEO priority"><Toggle opts={["High priority","Nice to have","Not a priority"]} v={f.get("seo")} set={f.set("seo")} /></Field>
          <Field label="Keywords your ideal client would search (list 3–5)">
            <TArea v={f.get("keywords")} set={f.set("keywords")} rows={2} placeholder="e.g. accounting firm Lagos, tax consultant Lekki, auditing services Nigeria" />
          </Field>
          <Field label="Google Business Profile">
            <Toggle opts={["I have one — link it","Set it up for me","Not needed"]} v={f.get("gbp")} set={f.set("gbp")} />
          </Field>
        </Accordion>,
      ];

      // ── MOBILE APP ───────────────────────────────────────────────────────────
      case "app": return [
        <Accordion key="a1" num={startNum} title="Platform & App Type" sub="Target devices and app category" icon="solar:smartphone-device-bold-duotone" open={openSec === startNum} toggle={() => toggle(startNum)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Target platform">
              <Toggle opts={["iOS only","Android only","Both (Flutter / cross-platform)"]} v={f.get("platform")} set={f.set("platform")} />
            </Field>
            <Field label="App category">
              <TSelect v={f.get("appCategory")} set={f.set("appCategory")} opts={["Social / Community","E-Commerce / Marketplace","Booking / Scheduling","Delivery / Logistics","Fintech / Payments","Internal business tool","Health & Wellness","Education","Other"]} />
            </Field>
            <Field label="User login / accounts needed?"><Toggle opts={["Yes","No","Not sure"]} v={f.get("userAuth")} set={f.set("userAuth")} /></Field>
            <Field label="Offline mode needed?"><Toggle opts={["Yes","No","Nice to have"]} v={f.get("offline")} set={f.set("offline")} /></Field>
          </div>
          <Field label="Describe the app in 2–3 sentences — what it does and who uses it">
            <TArea v={f.get("appDesc")} set={f.set("appDesc")} rows={2} placeholder="e.g. A logistics tracking app where drivers log deliveries and managers monitor in real-time." />
          </Field>
        </Accordion>,

        <Accordion key="a2" num={startNum + 1} title="Core Features" sub="Functionality the app must have" icon="solar:settings-bold-duotone" open={openSec === startNum + 1} toggle={() => toggle(startNum + 1)}>
          <Field label="Select all features needed">
            <Checks opts={["User authentication (login/signup)","Push notifications","In-app chat / messaging","Maps & location tracking","Camera / photo uploads","Paystack / payment integration","Admin web dashboard","Third-party API integrations","Real-time data updates","File uploads / downloads","QR code scanner","Barcode scanner","Dark mode"]} v={f.getM("appFeatures")} set={f.setM("appFeatures")} />
          </Field>
          <Field label="Other features">
            <TInput v={f.get("otherAppFeatures")} set={f.set("otherAppFeatures")} placeholder="e.g. Biometric login, AR features, offline sync" />
          </Field>
        </Accordion>,

        <Accordion key="a3" num={startNum + 2} title="UX & Design" sub="Visual style and design assets" icon="solar:palette-bold-duotone" open={openSec === startNum + 2} toggle={() => toggle(startNum + 2)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Do you have existing Figma / designs?"><Toggle opts={["Yes — will share","Partial wireframes","No — start from scratch"]} v={f.get("designs")} set={f.set("designs")} /></Field>
            <Field label="Visual style preference"><Toggle opts={["Minimal & clean","Bold & vibrant","Corporate & professional","Playful & modern"]} v={f.get("appStyle")} set={f.set("appStyle")} /></Field>
            <Field label="Brand colours"><TInput v={f.get("appColors")} set={f.set("appColors")} placeholder="e.g. Blue and white, dark theme" /></Field>
            <Field label="Apps you admire (list their names)"><TInput v={f.get("appRefs")} set={f.set("appRefs")} placeholder="e.g. Bolt, Cowrywise, PiggyVest" /></Field>
          </div>
        </Accordion>,

        <Accordion key="a4" num={startNum + 3} title="Backend & Distribution" sub="Server, APIs, and store publishing" icon="solar:server-bold-duotone" open={openSec === startNum + 3} toggle={() => toggle(startNum + 3)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Backend / API needed?"><Toggle opts={["Yes — build it","I have an existing API","No backend needed","Not sure"]} v={f.get("backend")} set={f.set("backend")} /></Field>
            <Field label="Publish to Apple App Store?"><Toggle opts={["Yes","No","Not sure"]} v={f.get("appStore")} set={f.set("appStore")} /></Field>
            <Field label="Publish to Google Play?"><Toggle opts={["Yes","No","Not sure"]} v={f.get("playStore")} set={f.set("playStore")} /></Field>
            <Field label="Expected number of users at launch"><TSelect v={f.get("userVolume")} set={f.set("userVolume")} opts={["< 100","100–1,000","1,000–10,000","10,000+"]} /></Field>
          </div>
        </Accordion>,
      ];

      // ── AI SERVICES ──────────────────────────────────────────────────────────
      case "ai": return [
        <Accordion key="ai1" num={startNum} title="AI Use Case" sub="What the AI system must do" icon="solar:cpu-bolt-bold-duotone" open={openSec === startNum} toggle={() => toggle(startNum)}>
          <Field label="Type of AI system">
            <Checks opts={["Customer support chatbot","WhatsApp / Telegram AI agent","Document Q&A (ask your documents)","Voice AI agent","Lead qualification bot","Recommendation engine","Image / document analysis","Automated reporting","Autonomous workflow agent","Custom AI model fine-tuning"]} v={f.getM("aiType")} set={f.setM("aiType")} />
          </Field>
          <Field label="Describe the specific AI task in detail">
            <TArea v={f.get("aiTask")} set={f.set("aiTask")} rows={3} placeholder="e.g. A WhatsApp chatbot that answers customer questions about our products 24/7, qualifies leads, and books callbacks for our sales team." />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Who will use the AI?"><Toggle opts={["Customers / public","Internal staff","Both"]} v={f.get("aiUsers")} set={f.set("aiUsers")} /></Field>
            <Field label="Languages required"><Checks opts={["English","Nigerian Pidgin","Yoruba","Hausa","Igbo","French"]} v={f.getM("aiLangs")} set={f.setM("aiLangs")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="ai2" num={startNum + 1} title="Data & Knowledge Base" sub="What the AI will know and learn from" icon="solar:database-bold-duotone" open={openSec === startNum + 1} toggle={() => toggle(startNum + 1)}>
          <Field label="Do you have existing data for the AI?">
            <Toggle opts={["Yes — ready to share","Partially available","No — Sastech to help structure"]} v={f.get("aiData")} set={f.set("aiData")} />
          </Field>
          <Field label="Where is your data stored?">
            <Checks opts={["PDFs / documents","Spreadsheets / CSV","Website / web pages","Database (MySQL, Postgres)","CRM / ERP system","None yet"]} v={f.getM("dataSources")} set={f.setM("dataSources")} />
          </Field>
          <Field label="Data sensitivity">
            <Toggle opts={["Public information only","Internal business data","Sensitive / confidential data"]} v={f.get("dataSensitivity")} set={f.set("dataSensitivity")} />
          </Field>
        </Accordion>,

        <Accordion key="ai3" num={startNum + 2} title="Integrations & Channels" sub="Where the AI will live and what it connects to" icon="solar:link-bold-duotone" open={openSec === startNum + 2} toggle={() => toggle(startNum + 2)}>
          <Field label="Deployment channels — select all">
            <Checks opts={["WhatsApp (WATI / Cloud API)","Telegram","Website chat widget","Mobile app","Voice call","Internal Slack / Teams","Email automation","API endpoint only"]} v={f.getM("aiChannels")} set={f.setM("aiChannels")} />
          </Field>
          <Field label="Systems it needs to connect to">
            <Checks opts={["Your website","CRM (HubSpot, Salesforce)","Google Sheets","Payment system (Paystack)","Email (Gmail, Outlook)","Custom internal database","None"]} v={f.getM("aiIntegrations")} set={f.setM("aiIntegrations")} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Expected query volume per day">
              <TSelect v={f.get("aiVolume")} set={f.set("aiVolume")} opts={["< 50","50–500","500–5,000","5,000+"]} />
            </Field>
            <Field label="Response speed requirement">
              <Toggle opts={["Real-time (< 2 sec)","Near real-time (< 10 sec)","Async is fine"]} v={f.get("aiSpeed")} set={f.set("aiSpeed")} />
            </Field>
          </div>
        </Accordion>,

        <Accordion key="ai4" num={startNum + 3} title="Model & Hosting Preferences" sub="Technical and infrastructure preferences" icon="solar:settings-bold-duotone" open={openSec === startNum + 3} toggle={() => toggle(startNum + 3)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Hosting preference">
              <Toggle opts={["Cloud (Sastech manages)","Your own servers","Hybrid"]} v={f.get("aiHosting")} set={f.set("aiHosting")} />
            </Field>
            <Field label="Data must stay in Nigeria?"><Toggle opts={["Yes — NDPR compliant","No — cloud is fine","Not sure"]} v={f.get("dataNDPR")} set={f.set("dataNDPR")} /></Field>
            <Field label="Human handoff needed?"><Toggle opts={["Yes — escalate to agent","No — fully automated","Configurable"]} v={f.get("humanHandoff")} set={f.set("humanHandoff")} /></Field>
            <Field label="Analytics / monitoring dashboard?"><Toggle opts={["Yes","No","Nice to have"]} v={f.get("aiAnalytics")} set={f.set("aiAnalytics")} /></Field>
          </div>
        </Accordion>,
      ];

      // ── E-COMMERCE ───────────────────────────────────────────────────────────
      case "ecom": return [
        <Accordion key="e1" num={startNum} title="Products & Catalogue" sub="What you're selling and inventory details" icon="solar:box-bold-duotone" open={openSec === startNum} toggle={() => toggle(startNum)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Product type">
              <Toggle opts={["Physical goods","Digital downloads","Services / bookings","Mixed"]} v={f.get("productType")} set={f.set("productType")} />
            </Field>
            <Field label="Number of products">
              <TSelect v={f.get("productCount")} set={f.set("productCount")} opts={["< 50","50–500","500–5,000","5,000+"]} />
            </Field>
            <Field label="Product images / descriptions ready?"><Toggle opts={["Yes — all ready","Partially ready","No — need help"]} v={f.get("productContent")} set={f.set("productContent")} /></Field>
            <Field label="Product variations needed?"><Toggle opts={["Yes (sizes, colours, etc.)","No","Not sure"]} v={f.get("productVariants")} set={f.set("productVariants")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="e2" num={startNum + 1} title="Payment & Checkout" sub="How customers pay and how orders are fulfilled" icon="solar:wallet-money-bold-duotone" open={openSec === startNum + 1} toggle={() => toggle(startNum + 1)}>
          <Field label="Payment methods — select all">
            <Checks opts={["Paystack (card + bank transfer)","Flutterwave","Cash on delivery","Bank transfer (manual)","Pay on pickup","Subscription / recurring"]} v={f.getM("paymentMethods")} set={f.setM("paymentMethods")} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Delivery method">
              <Toggle opts={["Self-delivery","Third-party logistics","Digital (instant download)","Customer pickup","N/A"]} v={f.get("delivery")} set={f.set("delivery")} />
            </Field>
            <Field label="Returns / refund policy needed?"><Toggle opts={["Yes","No","Not sure yet"]} v={f.get("returns")} set={f.set("returns")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="e3" num={startNum + 2} title="Store Features" sub="Advanced commerce functionality" icon="solar:shop-2-bold-duotone" open={openSec === startNum + 2} toggle={() => toggle(startNum + 2)}>
          <Field label="Select all features needed">
            <Checks opts={["Inventory management","Customer accounts","Wishlists / saved items","Reviews & ratings","Promo codes / coupons","Bulk ordering","Multi-vendor / marketplace","WhatsApp cart notifications","Loyalty points program","Abandoned cart recovery","Wholesale / B2B pricing"]} v={f.getM("storeFeatures")} set={f.setM("storeFeatures")} />
          </Field>
          <Field label="Will you sell internationally?">
            <Toggle opts={["Nigeria only","West Africa","International","Not sure"]} v={f.get("market")} set={f.set("market")} />
          </Field>
        </Accordion>,

        <Accordion key="e4" num={startNum + 3} title="Admin & Management" sub="Who manages the store and reporting needs" icon="solar:shield-user-bold-duotone" open={openSec === startNum + 3} toggle={() => toggle(startNum + 3)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Who manages the store?"><Toggle opts={["Just me","Small team (2–5)","Larger team","Third party"]} v={f.get("storeAdmin")} set={f.set("storeAdmin")} /></Field>
            <Field label="Sales analytics needed?"><Toggle opts={["Yes — detailed reports","Basic dashboard","Not needed"]} v={f.get("storeAnalytics")} set={f.set("storeAnalytics")} /></Field>
            <Field label="Mobile app for store management?"><Toggle opts={["Yes","No","Nice to have"]} v={f.get("storeMobile")} set={f.set("storeMobile")} /></Field>
          </div>
        </Accordion>,
      ];

      // ── DASHBOARD ────────────────────────────────────────────────────────────
      case "dash": return [
        <Accordion key="d1" num={startNum} title="Data Sources" sub="Where your data comes from" icon="solar:database-bold-duotone" open={openSec === startNum} toggle={() => toggle(startNum)}>
          <Field label="Where is the data currently?">
            <Checks opts={["PostgreSQL / MySQL database","MongoDB","Google Sheets / Excel","REST APIs / webhooks","CRM (HubSpot, Salesforce)","ERP system","Manual entry","Multiple sources"]} v={f.getM("dataSrc")} set={f.setM("dataSrc")} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="How often is data updated?">
              <Toggle opts={["Real-time","Every hour","Daily","Weekly / manual"]} v={f.get("dataFreq")} set={f.set("dataFreq")} />
            </Field>
            <Field label="Approximate data volume">
              <TSelect v={f.get("dataVolume")} set={f.set("dataVolume")} opts={["< 10,000 records","10K–1M","1M+","Not sure"]} />
            </Field>
          </div>
        </Accordion>,

        <Accordion key="d2" num={startNum + 1} title="Metrics & KPIs" sub="What you need to see and measure" icon="solar:chart-bold-duotone" open={openSec === startNum + 1} toggle={() => toggle(startNum + 1)}>
          <Field label="List the key metrics / KPIs you need to track">
            <TArea v={f.get("kpis")} set={f.set("kpis")} rows={3} placeholder="e.g. Daily revenue, orders by region, driver completion rate, staff productivity, monthly churn rate" />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Who views the dashboard?">
              <Checks opts={["C-Suite / Executives","Operations team","Finance team","Sales team","All staff"]} v={f.getM("dashViewers")} set={f.setM("dashViewers")} />
            </Field>
            <Field label="Comparative analysis needed?"><Toggle opts={["Yes (vs last month, year)","No","Nice to have"]} v={f.get("comparison")} set={f.set("comparison")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="d3" num={startNum + 2} title="Visualisations & Reports" sub="Chart types and export requirements" icon="solar:pie-chart-bold-duotone" open={openSec === startNum + 2} toggle={() => toggle(startNum + 2)}>
          <Field label="Chart types needed — select all">
            <Checks opts={["Line / area charts (trends)","Bar / column charts","Pie / donut charts","KPI metric cards","Data tables","Maps / geolocation","Heat maps","Funnel charts","Scatter plots"]} v={f.getM("chartTypes")} set={f.setM("chartTypes")} />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Export to PDF / Excel?"><Toggle opts={["Yes","No","Nice to have"]} v={f.get("exportReports")} set={f.set("exportReports")} /></Field>
            <Field label="Scheduled email reports?"><Toggle opts={["Yes","No","Nice to have"]} v={f.get("scheduledReports")} set={f.set("scheduledReports")} /></Field>
          </div>
        </Accordion>,

        <Accordion key="d4" num={startNum + 3} title="Access & Deployment" sub="User roles and where it runs" icon="solar:shield-user-bold-duotone" open={openSec === startNum + 3} toggle={() => toggle(startNum + 3)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Multiple roles / permission levels?"><Toggle opts={["Yes","No","Not sure"]} v={f.get("dashRoles")} set={f.set("dashRoles")} /></Field>
            <Field label="Standalone app or embedded?"><Toggle opts={["Standalone web app","Embedded in existing site","Mobile app","All"]} v={f.get("dashDeploy")} set={f.set("dashDeploy")} /></Field>
            <Field label="Mobile-responsive?"><Toggle opts={["Yes — must work on mobile","Desktop only","Nice to have"]} v={f.get("dashMobile")} set={f.set("dashMobile")} /></Field>
            <Field label="Real-time alerts / notifications?"><Toggle opts={["Yes","No","Nice to have"]} v={f.get("dashAlerts")} set={f.set("dashAlerts")} /></Field>
          </div>
        </Accordion>,
      ];

      // ── AUTOMATION ───────────────────────────────────────────────────────────
      case "auto": return [
        <Accordion key="au1" num={startNum} title="Current Manual Workflows" sub="What you want to stop doing by hand" icon="solar:hand-stars-bold-duotone" open={openSec === startNum} toggle={() => toggle(startNum)}>
          <Field label="Describe the manual process you want to automate" span2>
            <TArea v={f.get("manualProcess")} set={f.set("manualProcess")} rows={3} placeholder="e.g. When a new order comes in via WhatsApp, our staff manually types a confirmation, updates a Google Sheet, then sends a delivery notification. We want all of this to happen automatically." />
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="How often does this happen?">
              <TSelect v={f.get("autoFreq")} set={f.set("autoFreq")} opts={["Many times per day","Once a day","Several times a week","Weekly","On demand"]} />
            </Field>
            <Field label="How many people do this manually?">
              <TSelect v={f.get("autoStaff")} set={f.set("autoStaff")} opts={["Just me","2–5 people","5–20 people","20+ people"]} />
            </Field>
            <Field label="How long does it take manually?">
              <TSelect v={f.get("autoTime")} set={f.set("autoTime")} opts={["< 5 minutes","5–30 minutes","30 min – 2 hours","2+ hours"]} />
            </Field>
          </div>
        </Accordion>,

        <Accordion key="au2" num={startNum + 1} title="Tools & Integrations" sub="Systems already in use that must connect" icon="solar:link-bold-duotone" open={openSec === startNum + 1} toggle={() => toggle(startNum + 1)}>
          <Field label="Tools you currently use — select all">
            <Checks opts={["WhatsApp (business or personal)","Gmail / Outlook","Google Sheets","Google Drive","Notion","Airtable","HubSpot CRM","Salesforce","QuickBooks / Xero","Paystack","Telegram","Slack","Custom internal software"]} v={f.getM("currentTools")} set={f.setM("currentTools")} />
          </Field>
          <Field label="Any other tools or systems not listed">
            <TInput v={f.get("otherTools")} set={f.set("otherTools")} placeholder="e.g. Our ERP is SAP, we use Zoho Mail" />
          </Field>
        </Accordion>,

        <Accordion key="au3" num={startNum + 2} title="Triggers & Actions" sub="What starts it and what it must do" icon="solar:bolt-bold-duotone" open={openSec === startNum + 2} toggle={() => toggle(startNum + 2)}>
          <Field label="What triggers the automation?">
            <Checks opts={["New order / purchase","Form submission","Incoming WhatsApp message","Scheduled time / date","New spreadsheet row","Webhook / API event","Manual trigger (button)","New email received"]} v={f.getM("triggers")} set={f.setM("triggers")} />
          </Field>
          <Field label="What should the automation do?">
            <Checks opts={["Send WhatsApp message","Send email","Update spreadsheet / database","Create PDF / document","Notify team (Slack / Telegram)","Add to CRM","Generate report","Make API call","Post to social media","Create invoice"]} v={f.getM("actions")} set={f.setM("actions")} />
          </Field>
        </Accordion>,

        <Accordion key="au4" num={startNum + 3} title="Volume, Scale & Reliability" sub="How critical this automation is to your business" icon="solar:graph-bold-duotone" open={openSec === startNum + 3} toggle={() => toggle(startNum + 3)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Expected daily automation runs">
              <TSelect v={f.get("autoVolume")} set={f.set("autoVolume")} opts={["< 50 runs / day","50–500","500–5,000","5,000+"]} />
            </Field>
            <Field label="Is this mission-critical?">
              <Toggle opts={["Yes — must never fail","Important but can recover","Low risk"]} v={f.get("autoCritical")} set={f.set("autoCritical")} />
            </Field>
            <Field label="What happens if the automation fails?">
              <TArea v={f.get("autoFailure")} set={f.set("autoFailure")} rows={2} placeholder="e.g. Orders won't be confirmed, customers won't get delivery updates." />
            </Field>
          </div>
        </Accordion>,
      ];

      default: return [];
    }
  }

  // ── Universal sections assembly ─────────────────────────────────────────────
  const serviceMiddle = renderServiceSections(4);
  const budgetNum = 4 + serviceMiddle.length;
  const filesNum = budgetNum + 1;
  const notesNum = filesNum + 1;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#080b12] text-slate-900 dark:text-slate-300 transition-colors duration-500">
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
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf]">Project</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-xl mx-auto font-light leading-relaxed">
              The more specific you are, the faster we can prepare your proposal. Takes 5–10 minutes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service Selector */}
      <section className="px-6 pb-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 mb-4 text-center">What are you building?</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {SERVICES.map(svc => (
              <button key={svc.id} type="button" onClick={() => { setService(svc.id); setOpenSec(0); }}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${
                  service === svc.id
                    ? "bg-[#38bdf8]/10 border-[#38bdf8] shadow-sm"
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20"
                }`}
              >
                <Icon icon={svc.icon} className={`text-2xl ${service === svc.id ? "text-[#38bdf8]" : "text-slate-400"}`} />
                <span className={`text-[10px] font-bold leading-tight text-center ${service === svc.id ? "text-[#38bdf8]" : "text-slate-500 dark:text-slate-400"}`}>{svc.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-20 bg-white dark:bg-[#0d1117] rounded-3xl border border-slate-200 dark:border-white/10 px-10">
              <div className="text-5xl mb-5">🎉</div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3" style={{ fontFamily: "var(--font-outfit)" }}>Intake Submitted!</h2>
              <p className="text-slate-500 font-light leading-relaxed max-w-md mx-auto mb-8 text-sm">
                Ayomide will review your intake and send a detailed proposal within 24–48 hours.<br /><br />
                <strong className="text-slate-700 dark:text-white">Don't forget:</strong> Send uploaded files to{" "}
                <span className="text-[#38bdf8]">ayomidesholarin13@gmail.com</span>
              </p>
              <a href="https://wa.me/2348022324523" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#25D366] text-white rounded-xl font-bold text-sm hover:bg-[#1FAD55] transition-colors">
                <Icon icon="solar:chat-round-dots-bold-duotone" className="text-xl" />
                Chat with Ayomide on WhatsApp
              </a>
            </div>
          ) : (
            <>
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">
                  <span>Required fields</span>
                  <span className="text-[#38bdf8]">{progress}%</span>
                </div>
                <div className="h-1 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#38bdf8] to-[#2dd4bf] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="space-y-2">
                {/* ── Section 1: Contact ── */}
                <Accordion num={1} title="Your Contact Details" sub="Who you are and how to reach you" icon="solar:user-bold-duotone" open={openSec === 0} toggle={() => toggle(0)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Full Name" required><TInput v={f.get("name")} set={f.set("name")} placeholder="e.g. Adaeze Okonkwo" /></Field>
                    <Field label="Job Title / Role"><TInput v={f.get("jobtitle")} set={f.set("jobtitle")} placeholder="e.g. CEO, Founder, Manager" /></Field>
                    <Field label="Company / Business Name" required><TInput v={f.get("company")} set={f.set("company")} placeholder="e.g. Okonkwo & Associates" /></Field>
                    <Field label="Industry / Sector"><TInput v={f.get("industry")} set={f.set("industry")} placeholder="e.g. Logistics, Finance, Healthcare" /></Field>
                    <Field label="Email Address" required><TInput v={f.get("email")} set={f.set("email")} type="email" placeholder="hello@yourfirm.com" /></Field>
                    <Field label="WhatsApp Number" required><TInput v={f.get("phone")} set={f.set("phone")} type="tel" placeholder="e.g. 08012345678" /></Field>
                    <Field label="City"><TInput v={f.get("city")} set={f.set("city")} placeholder="e.g. Lagos, Abuja" /></Field>
                    <Field label="Existing website / app (if any)"><TInput v={f.get("existing")} set={f.set("existing")} placeholder="e.g. yourfirm.com" /></Field>
                  </div>
                  <Field label="How did you hear about Sastech Consults?">
                    <TSelect v={f.get("source")} set={f.set("source")} opts={["LinkedIn","Twitter / X","TikTok / Instagram","WhatsApp referral","Google search","Friend or colleague","Other"]} />
                  </Field>
                </Accordion>

                {/* ── Section 2: Business ── */}
                <Accordion num={2} title="Your Business" sub="Who you serve and what problem you're solving" icon="solar:buildings-bold-duotone" open={openSec === 1} toggle={() => toggle(1)}>
                  <Field label="Describe your business in 2–3 sentences">
                    <TArea v={f.get("bizDesc")} set={f.set("bizDesc")} rows={3} placeholder="e.g. We are a certified accounting firm based in Lagos. We provide tax advisory, auditing, and consulting to SMEs and corporates across Nigeria." />
                  </Field>
                  <Field label="What problem does this project solve for your business?">
                    <TArea v={f.get("problem")} set={f.set("problem")} rows={2} placeholder="e.g. We lose potential clients because we have no professional online presence." />
                  </Field>
                  <Field label="Who is your target audience?">
                    <Toggle opts={["Individual consumers","Small businesses (SMEs)","Corporate / enterprise","Government / NGO","Mixed"]} v={f.get("audience")} set={f.set("audience")} />
                  </Field>
                  <Field label="Key competitors or similar businesses">
                    <TInput v={f.get("competitors")} set={f.set("competitors")} placeholder="e.g. Deloitte Nigeria, KPMG Nigeria, smaller local firms" />
                  </Field>
                </Accordion>

                {/* ── Section 3: Goals ── */}
                <Accordion num={3} title="Project Goals" sub="What success looks like for this project" icon="solar:target-bold-duotone" open={openSec === 2} toggle={() => toggle(2)}>
                  <Field label="Primary purpose of this project" required>
                    <TSelect v={f.get("purpose")} set={f.set("purpose")} placeholder="Select the main goal..." opts={[
                      "Get leads and enquiries from potential clients",
                      "Build credibility and professional presence",
                      "Sell products or services online",
                      "Book appointments or consultations",
                      "Automate internal business processes",
                      "Build an AI-powered system or agent",
                      "Internal operations / reporting tool",
                      "All of the above",
                    ]} />
                  </Field>
                  <Field label="What does success look like 3 months after launch? Be specific.">
                    <TArea v={f.get("success")} set={f.set("success")} rows={2} placeholder="e.g. 5+ inbound enquiries per month, ranked on Google for key terms, 80% reduction in manual order processing time." />
                  </Field>
                </Accordion>

                {/* ── Service-specific sections ── */}
                {serviceMiddle}

                {/* ── Budget & Timeline ── */}
                <Accordion num={budgetNum} title="Budget & Timeline" sub="Investment range and launch target" icon="solar:wallet-money-bold-duotone" open={openSec === budgetNum - 1} toggle={() => toggle(budgetNum - 1)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Field label="Budget range" required>
                      <TSelect v={f.get("budget")} set={f.set("budget")} placeholder="Select range..." opts={[
                        "Under ₦200,000","₦200,000 – ₦500,000","₦500,000 – ₦1,000,000",
                        "₦1,000,000 – ₦3,000,000","Above ₦3,000,000","International (USD) — to discuss",
                      ]} />
                    </Field>
                    <Field label="Desired launch date"><TInput v={f.get("launchDate")} set={f.set("launchDate")} type="date" /></Field>
                    <Field label="Deadline flexibility">
                      <Toggle opts={["Hard — cannot move","Flexible ±2 weeks","Quality over speed"]} v={f.get("deadline")} set={f.set("deadline")} />
                    </Field>
                    <Field label="Payment preference">
                      <Toggle opts={["Bank transfer (NGN)","Paystack","USD wire"]} v={f.get("payment")} set={f.set("payment")} />
                    </Field>
                  </div>
                  <Field label="Interested in a monthly maintenance plan after delivery?">
                    <Toggle opts={["Yes — definitely","Maybe — show me options","No"]} v={f.get("maint")} set={f.set("maint")} />
                  </Field>
                </Accordion>

                {/* ── Files & Assets ── */}
                <Accordion num={filesNum} title="Files & Assets" sub="Upload logo, brand guidelines, content, references" icon="solar:paperclip-bold-duotone" open={openSec === filesNum - 1} toggle={() => toggle(filesNum - 1)}>
                  <Field label="Logo file" hint="PNG, SVG, PDF, AI, EPS">
                    <FileDrop label="PNG, SVG, PDF, AI, EPS" accept=".png,.svg,.pdf,.jpg,.jpeg,.ai,.eps" files={f.getM("filesLogo")} set={f.setM("filesLogo")} />
                  </Field>
                  <Field label="Brand guidelines / style guide" hint="PDF, DOCX, PPTX">
                    <FileDrop label="PDF, DOCX, PPTX" accept=".pdf,.docx,.doc,.pptx,.png,.jpg" files={f.getM("filesBrand")} set={f.setM("filesBrand")} />
                  </Field>
                  <Field label="Content documents / copy" hint="Word, PDF, TXT">
                    <FileDrop label="Word, PDF, TXT, CSV" accept=".pdf,.docx,.doc,.txt,.xlsx,.csv" files={f.getM("filesContent")} set={f.setM("filesContent")} />
                  </Field>
                  <Field label="Photos, images, media" hint="JPG, PNG, WEBP, MP4">
                    <FileDrop label="JPG, PNG, WEBP, MP4" accept=".png,.jpg,.jpeg,.webp,.gif,.mp4,.mov" files={f.getM("filesImages")} set={f.setM("filesImages")} />
                  </Field>
                  <p className="text-[10px] text-slate-400 leading-relaxed mt-1">
                    Files cannot be sent through this form. Send them directly to{" "}
                    <span className="text-[#38bdf8] font-semibold">ayomidesholarin13@gmail.com</span> after submitting.
                  </p>
                </Accordion>

                {/* ── Final Notes ── */}
                <Accordion num={notesNum} title="Final Notes" sub="Anything else we should know" icon="solar:notes-bold-duotone" open={openSec === notesNum - 1} toggle={() => toggle(notesNum - 1)}>
                  <Field label="Third-party integrations needed">
                    <TInput v={f.get("integrations")} set={f.set("integrations")} placeholder="e.g. QuickBooks, Calendly, Mailchimp, Paystack, Google Workspace" />
                  </Field>
                  <Field label="Have you worked with a developer before? What happened?">
                    <TArea v={f.get("prevDev")} set={f.set("prevDev")} rows={2} placeholder="e.g. Yes — they took a deposit and disappeared. Or: No — this is our first project." />
                  </Field>
                  <Field label="Anything else — requirements, constraints, or must-haves">
                    <TArea v={f.get("notes")} set={f.set("notes")} rows={3} placeholder="e.g. Must be ready before our product launch in August. Need NDPR compliance. Should beat our competitor's site in load speed." />
                  </Field>
                </Accordion>
              </div>

              {/* Submit */}
              <div className="mt-4 bg-white dark:bg-[#0d1117] rounded-2xl border border-slate-200 dark:border-white/10 p-7">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1" style={{ fontFamily: "var(--font-outfit)" }}>Ready to submit?</h3>
                <p className="text-slate-400 text-sm font-light mb-5">
                  You'll receive a detailed proposal within 24–48 hours.
                </p>
                {error && (
                  <div className="mb-4 p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/5 border border-rose-200 dark:border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm flex items-start gap-3">
                    <Icon icon="solar:danger-circle-bold-duotone" className="text-lg shrink-0 mt-0.5" />
                    {error}
                  </div>
                )}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button type="button" onClick={sendWA}
                    className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#1FAD55] transition-colors">
                    <Icon icon="solar:chat-round-dots-bold-duotone" className="text-xl" />
                    Send via WhatsApp
                  </button>
                  <button type="button" onClick={sendEmail}
                    className="flex-1 flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl border-2 border-[#38bdf8] text-[#38bdf8] font-bold text-sm hover:bg-[#38bdf8]/10 transition-colors">
                    <Icon icon="solar:letter-bold-duotone" className="text-xl" />
                    Send via Email
                  </button>
                </div>
                <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest">
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
