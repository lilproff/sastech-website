import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'About', href: '/about' },
  ];

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <nav className="fixed w-full z-50 top-0 flex justify-center pointer-events-none transition-all duration-500 pt-6 px-4">
      <motion.div
        initial={false}
        animate={{
          width: scrolled ? 'auto' : '100%',
          maxWidth: scrolled ? '800px' : '1280px',
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto relative flex items-center justify-between h-16 sm:h-18 px-4 sm:px-8 rounded-full border transition-all duration-500 ${
          isDark
            ? 'bg-[#02040a]/80 border-white/10 backdrop-blur-xl shadow-[0_20px_40px_rgba(0,0,0,0.4)]'
            : 'bg-white/80 border-slate-200/60 backdrop-blur-xl shadow-[0_10px_30px_rgba(15,23,42,0.05)]'
        }`}
      >
        {/* Glow effect on scroll — both themes */}
        {scrolled && (
          <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent pointer-events-none ${
            isDark ? 'via-[#38bdf8]/50' : 'via-[#38bdf8]/30'
          }`} />
        )}

        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 mx-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all relative group ${
                  isActive
                    ? 'text-slate-900 dark:text-white'
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-slate-900/5 dark:bg-white/5 rounded-full -z-10 border border-slate-900/10 dark:border-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-slate-500 hover:text-[#38bdf8] hover:bg-[#38bdf8]/5 border border-transparent hover:border-[#38bdf8]/20 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            <Icon icon={isDark ? "solar:sun-bold-duotone" : "solar:moon-bold-duotone"} className="text-xl" />
          </button>

          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-[#02040a] text-[10px] font-black uppercase tracking-widest hover:bg-[#38bdf8] dark:hover:bg-[#38bdf8] transition-all duration-300 active:scale-95 cursor-pointer shadow-lg shadow-black/10"
          >
            Contact
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white cursor-pointer"
          >
            <Icon icon={mobileOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className={`absolute top-full left-0 right-0 mt-4 p-8 border rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.15)] backdrop-blur-2xl lg:hidden ${
                isDark ? 'bg-[#02040a]/98 border-white/10' : 'bg-white/98 border-slate-200/80'
              }`}
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-2xl font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors py-2 flex items-center justify-between group"
                    style={{ fontFamily: 'var(--font-outfit)' }}
                  >
                    {link.label}
                    <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-xl opacity-0 group-hover:opacity-100 transition-all text-[#38bdf8]" />
                  </Link>
                ))}
                <div className="pt-6 mt-2 border-t border-slate-200 dark:border-white/5">
                  <Link
                    to="/contact"
                    className="flex items-center justify-between p-6 rounded-3xl bg-slate-900 dark:bg-white group text-white dark:text-[#02040a] hover:bg-[#38bdf8] dark:hover:bg-[#38bdf8] dark:hover:text-white transition-all"
                  >
                    <span className="text-xl font-bold" style={{ fontFamily: 'var(--font-outfit)' }}>Start a Project</span>
                    <Icon icon="solar:round-alt-arrow-right-bold-duotone" className="text-3xl" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
