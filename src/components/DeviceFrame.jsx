export function PhoneChassis({ src, alt, className = "" }) {
  return (
    <div className={`relative rounded-[1.6rem] border-2 border-ink bg-ink p-[3px] shadow-2xl ${className}`}>
      <div className="absolute left-1/2 top-[3px] z-10 h-2.5 w-12 -translate-x-1/2 rounded-full bg-ink" />
      <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.4rem] bg-bg-alt">
        <img src={src} alt={alt} className="h-full w-full object-cover object-top" loading="lazy" />
      </div>
    </div>
  );
}

export function BrowserChassis({ src, alt, className = "" }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-line bg-surface shadow-2xl ${className}`}>
      <div className="flex items-center gap-1.5 border-b border-line bg-bg-alt px-3.5 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-faint/40" />
        <span className="ml-2 h-5 flex-1 rounded-full bg-bg" />
      </div>
      <img src={src} alt={alt} className="w-full object-cover object-top" loading="lazy" />
    </div>
  );
}
