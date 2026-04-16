interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  splitRight?: string;
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  centered = false,
  light = false,
  splitRight,
}: SectionHeaderProps) {
  if (splitRight) {
    return (
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div className="max-w-2xl">
          {label && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-medium tracking-wide mb-6">
              {label}
            </span>
          )}
          <h2
            className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] text-slate-900 dark:text-white"
            style={{ fontFamily: 'var(--font-outfit)' }}
          >
            {title}
          </h2>
        </div>
        <div className="md:w-[40%] md:text-right">
          <p className="text-base text-slate-500 dark:text-white/60 leading-relaxed max-w-md ml-auto">
            {splitRight}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={['mb-12', centered ? 'text-center' : ''].filter(Boolean).join(' ')}>
      {label && (
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/20 text-[#38bdf8] text-xs font-medium tracking-wide mb-6">
          {label}
        </span>
      )}
      <h2
        className={[
          'text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] mb-4',
          light ? 'text-white' : 'text-slate-900 dark:text-white',
        ].join(' ')}
        style={{ fontFamily: 'var(--font-outfit)' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={[
            'text-lg leading-relaxed max-w-2xl',
            centered ? 'mx-auto' : '',
            light ? 'text-white/70' : 'text-slate-500 dark:text-white/60',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
