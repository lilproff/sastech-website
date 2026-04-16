import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-slate-500 hover:text-[#38bdf8] hover:border-[#38bdf8]/30 transition-all duration-300 active:scale-95 cursor-pointer group"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <Icon 
        icon={isDark ? "solar:sun-bold-duotone" : "solar:moon-bold-duotone"} 
        className="text-xl group-hover:scale-110 transition-transform" 
      />
    </button>
  );
}
