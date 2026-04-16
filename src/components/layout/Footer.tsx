import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-[#02040a] border-t border-slate-800 dark:border-white/5 font-inter">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
              I design intelligent operational systems that connect your tools, automate workflows, and make growth predictable. Built for the world, from Lagos.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Icon icon="solar:map-point-wave-bold-duotone" className="text-[#38bdf8] text-lg" />
                <span>Lagos, Nigeria (CAC Registered)</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-sm">
                <Icon icon="solar:letter-bold-duotone" className="text-[#38bdf8] text-lg" />
                <a
                  href="mailto:ayomidesholarin13@gmail.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  ayomidesholarin13@gmail.com
                </a>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: "solar:share-circle-bold-duotone", href: "https://linkedin.com/in/samuel-sholarin", label: "LinkedIn" },
                { icon: "solar:bill-list-bold-duotone", href: "https://twitter.com/samuelsholarin", label: "Twitter" },
                { icon: "solar:code-bold-duotone", href: "https://github.com/Lilproff", label: "GitHub" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#38bdf8]/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon icon={social.icon} className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-[0.2em] mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {[
                "AI Services",
                "Mobile Apps",
                "Web Platforms",
                "Dashboards",
                "E-Commerce",
                "Automation",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-[0.2em] mb-6">
              Agency
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About", href: "/about" },
                { label: "Work", href: "/work" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[10px] font-bold text-[#38bdf8] uppercase tracking-[0.2em] mb-6">
              Legal
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms", href: "#" },
                { label: "Compliance", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-500 hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-600 font-medium">
            &copy; 2026 Sastech Consults. All systems operational.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#2dd4bf]" />
              Built for Scale
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
