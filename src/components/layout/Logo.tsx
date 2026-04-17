import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link
      to="/"
      className="flex items-center gap-3 z-20 group transition-transform duration-200 active:scale-95"
    >
      <img
        src="/logo-icon.png"
        alt="Sastech Consults"
        className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
      />
      <div className="flex flex-col leading-none">
        <span
          className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
          style={{ fontFamily: 'var(--font-outfit)' }}
        >
          Sastech
        </span>
        <span
          className="text-[11px] uppercase font-bold tracking-[0.2em] text-[#38bdf8] mt-0.5"
          style={{ fontFamily: 'var(--font-inter)' }}
        >
          Consults
        </span>
      </div>
    </Link>
  );
}
