;

import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Static color lookups to avoid Tailwind purging dynamic classes
const avatarColors: Record<string, string> = {
  teal: 'bg-teal-50 dark:bg-teal-900/30 border-teal-200/50 dark:border-teal-500/30 text-teal-600 dark:text-teal-400',
  blue: 'bg-blue-50 dark:bg-blue-900/30 border-blue-200/50 dark:border-blue-500/30 text-blue-600 dark:text-blue-400',
  indigo: 'bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200/50 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400',
};

// Pure SVG sparkline — no Chart.js dependency (avoids Turbopack incompatibility)
function Sparkline() {
  const data = [4200, 5800, 5100, 8400, 7900, 10500, 12450];
  const W = 230, H = 52;
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => ({
    x: (i / (data.length - 1)) * W,
    y: H - ((v - min) / (max - min)) * H,
  }));

  // Smooth path via midpoint quadratic beziers
  const mids = pts.slice(0, -1).map((p, i) => ({
    x: (p.x + pts[i + 1].x) / 2,
    y: (p.y + pts[i + 1].y) / 2,
  }));

  let d = `M ${pts[0].x} ${pts[0].y}`;
  mids.forEach((m, i) => {
    d += ` Q ${pts[i].x} ${pts[i].y} ${m.x} ${m.y}`;
  });
  d += ` Q ${pts[pts.length - 2].x} ${pts[pts.length - 2].y} ${pts[pts.length - 1].x} ${pts[pts.length - 1].y}`;

  const fill = d + ` L ${W} ${H} L 0 ${H} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" className="w-full h-full overflow-visible">
      <defs>
        <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00B4C8" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#00B4C8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#sg)" />
      <path d={d} fill="none" stroke="#00B4C8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DashboardMockup() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="hidden lg:block relative w-full h-[580px]">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/15 via-transparent to-cyan-300/10 blur-3xl rounded-full pointer-events-none -translate-x-10 translate-y-10" />

      {/* Main dashboard window */}
      <motion.div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="flex flex-col overflow-hidden absolute top-0 right-0 w-[680px] h-[500px] bg-gradient-to-b from-white to-slate-50 dark:from-navy-mid dark:to-navy border border-slate-200/60 dark:border-white/10 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12),inset_0_2px_4px_rgba(255,255,255,0.8)] dark:shadow-2xl"
      >
        {/* Browser bar */}
        <div className="h-11 bg-gradient-to-b from-slate-50/90 to-slate-100/50 dark:from-white/10 dark:to-transparent border-b border-slate-200/80 dark:border-white/10 flex items-center px-4 shrink-0">
          <div className="flex gap-1.5 w-16">
            <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-white/20" />
            <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-white/20" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-slate-100/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 rounded-xl py-1.5 px-4 flex items-center gap-2 w-[260px] justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-slate-400 dark:text-white/40"
              >
                <rect width="11" height="11" x="3" y="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span className="text-xs text-slate-400 dark:text-white/40">system.sastech.com.ng</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex-1 p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full pulse-dot" style={{ backgroundColor: '#00B4C8' }} />
                <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-medium">
                  Sastech Hub
                </span>
              </div>
              <h2
                className="text-3xl font-normal text-slate-900 dark:text-white tracking-tight"
                style={{ fontFamily: 'var(--font-outfit)' }}
              >
                AI Operations
              </h2>
            </div>
            <div className="text-right">
              <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-medium mb-1">
                Automated Tasks
              </p>
              <p className="text-2xl font-normal tracking-tight text-slate-900 dark:text-white">
                8,420
              </p>
            </div>
          </div>

          {/* Metric strip */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Agent Queries', value: '1.2K Today' },
              { label: 'Active Systems', value: '24 Deployed' },
              { label: 'Avg Resp Time', value: '45ms' },
            ].map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-gradient-to-b from-white to-slate-50/80 dark:from-white/10 dark:to-transparent px-4 py-3 shadow-sm"
              >
                <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 mb-1">
                  {m.label}
                </p>
                <p className="text-base text-slate-900 dark:text-white tracking-tight">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="rounded-[1.5rem] border border-slate-200/60 dark:border-white/10 bg-gradient-to-b from-white to-slate-50/30 dark:from-white/5 dark:to-transparent overflow-hidden shadow-sm">
            <div className="grid grid-cols-12 gap-3 px-5 py-3 text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 border-b border-slate-200/60 dark:border-white/10 bg-slate-100/50 dark:bg-white/5">
              <div className="col-span-5">Client / Service</div>
              <div className="col-span-3">Type</div>
              <div className="col-span-2 text-right">Status</div>
              <div className="col-span-2 text-right">Uptime</div>
            </div>
            {[
              {
                name: 'Kamilight',
                sub: 'Logistics AI',
                type: 'Multi-Agent',
                status: 'Active',
                uptime: '99.9%',
                color: 'teal',
              },
              {
                name: 'Trucksoft',
                sub: 'AgentDesk',
                type: 'AI Platform',
                status: 'Active',
                uptime: '100%',
                color: 'blue',
              },
              {
                name: 'RetailPro',
                sub: 'E-Commerce',
                type: 'Web + AI',
                status: 'Active',
                uptime: '99.8%',
                color: 'indigo',
              },
            ].map((row) => (
              <div
                key={row.name}
                className="grid grid-cols-12 gap-3 px-5 py-4 items-center border-b border-slate-100/80 dark:border-white/5 hover:bg-slate-50/50 dark:hover:bg-white/5 transition-colors"
              >
                <div className="col-span-5 flex items-center gap-3">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold border ${
                      avatarColors[row.color] ?? avatarColors['teal']
                    }`}
                  >
                    {row.name[0]}
                  </div>
                  <div>
                    <p className="text-slate-900 dark:text-white text-sm font-medium leading-none">
                      {row.name}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-white/40 mt-0.5">{row.sub}</p>
                  </div>
                </div>
                <div className="col-span-3 text-slate-500 dark:text-white/50 text-sm">{row.type}</div>
                <div className="col-span-2 text-right text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                  {row.status}
                </div>
                <div className="col-span-2 text-right text-slate-900 dark:text-white text-sm">
                  {row.uptime}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating metric card */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -10, transition: { duration: 0.2 } }}
        className="glass absolute top-10 left-0 w-[280px] rounded-[1.75rem] px-6 py-6 cursor-pointer shadow-lg"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-base font-medium tracking-tight text-slate-900 dark:text-white">
              Processing Automation
            </h3>
            <p className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-white/40 font-medium mt-0.5">
              System Health
            </p>
          </div>
          <div className="w-6 h-6 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200/60 dark:border-emerald-500/30 flex items-center justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </div>
        <p className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white leading-none mb-1">
          4,250
          <span className="text-lg text-slate-400 dark:text-white/40"> ops/s</span>
        </p>
        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded-md border border-emerald-200/50 dark:border-emerald-500/30">
            ↑ 84.2%
          </span>
          <span className="text-xs text-slate-400 dark:text-white/40">efficiency gain</span>
        </div>
        <div className="h-14 w-full mb-4 -ml-1">
          <Sparkline />
        </div>
        <div className="space-y-2 text-sm">
          {[
            { label: 'Active Agents', value: '12 Nodes' },
            { label: 'Engine', value: 'n8n + AI' },
          ].map((item) => (
            <div
              key={item.label}
              className="flex justify-between items-center py-2 border-t border-slate-200/60 dark:border-white/10"
            >
              <span className="text-slate-500 dark:text-white/50">{item.label}</span>
              <span className="font-medium text-slate-900 dark:text-white text-xs">{item.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
