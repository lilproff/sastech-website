import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 z-20 group transition-transform duration-200 active:scale-95"
    >
      <div className="w-8 h-8 bg-gradient-to-br from-[#38bdf8] to-[#2dd4bf] rounded-lg flex items-center justify-center text-[#02040a] shadow-lg shadow-[#38bdf8]/20 group-hover:scale-110 transition-transform duration-300">
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" fill="currentColor" fillOpacity="0.2" />
          <path d="m2.6 13.92 8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9" />
          <path d="m2.6 17.92 8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9" />
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span 
          className="text-lg font-bold tracking-tight text-slate-900 dark:text-white" 
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Sastech
        </span>
        <span 
          className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#38bdf8] mt-0.5"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Consults
        </span>
      </div>
    </Link>
  );
}
