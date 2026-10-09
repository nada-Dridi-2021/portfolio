import { useEffect, useRef, useState } from "react";
import { BrowserChassis, PhoneChassis } from "./DeviceFrame";

function Shot({ src, alt, frame, className = "" }) {
  if (frame === "phone") return <PhoneChassis src={src} alt={alt} className={className} />;
  if (frame === "none") {
    return (
      <img
        src={src}
        alt={alt}
        className={`w-full rounded-lg object-contain drop-shadow-2xl ${className}`}
        loading="lazy"
      />
    );
  }
  return <BrowserChassis src={src} alt={alt} className={className} />;
}

function ProjectVisual({ project, onImageClick }) {
  const narrow = project.imageShape === "narrow";
  const secondaryNarrow = project.imageSecondaryShape === "narrow" || !project.imageSecondaryShape;

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-visible">
      <div className={`relative ${narrow ? "w-[42%] max-w-[170px]" : "w-[82%] max-w-[380px]"}`}>
        <button
          type="button"
          onClick={() => onImageClick(project.image, `${project.title} home screen`)}
          className="group relative z-10 block w-full -rotate-2 transition-transform duration-300 hover:rotate-0 hover:scale-[1.03]"
        >
          <Shot src={project.image} alt={`${project.title} home screen`} frame={project.imageFrame} />
        </button>

        {project.imageSecondary && (
          <button
            type="button"
            onClick={() => onImageClick(project.imageSecondary, `${project.title} feature screen`)}
            className={`group absolute bottom-0 right-0 z-20 translate-x-[30%] rotate-3 transition-transform duration-300 hover:rotate-0 hover:scale-105 ${
              secondaryNarrow ? "w-[52%]" : "w-[46%]"
            }`}
          >
            <Shot
              src={project.imageSecondary}
              alt={`${project.title} feature screen`}
              frame={project.imageSecondaryFrame}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default function ProjectStack({ projects, onImageClick }) {
  const scrollerRef = useRef(null);
  const [progress, setProgress] = useState(1 / Math.max(projects.length, 1));
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? el.scrollTop / max : 0;
      setProgress(Math.min(1, Math.max(0.04, pct)));
      const idx = Math.round(el.scrollTop / el.clientHeight);
      setActiveIndex(Math.min(projects.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [projects.length]);

  const goTo = (i) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ top: i * el.clientHeight, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden rounded-2xl border border-line bg-surface shadow-sm">
      <div className="absolute bottom-4 right-3 top-4 z-10 w-[3px] rounded-full bg-line">
        <div
          className="absolute left-0 top-0 w-full rounded-full bg-accent transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
      </div>

      <div className="absolute right-7 top-4 z-10 font-mono text-[11px] text-ink-faint">
        {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </div>

      <div
        ref={scrollerRef}
        className="scrollbar-thin h-[560px] overflow-y-auto scroll-smooth [scroll-snap-type:y_mandatory] sm:h-[480px]"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid h-[560px] grid-cols-1 [scroll-snap-align:start] sm:h-[480px] sm:grid-cols-2"
          >
            <div className="relative flex items-center justify-center overflow-hidden bg-bg-alt p-6">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, var(--color-accent-tint) 0%, rgba(6,182,212,0.08) 55%, transparent 75%)",
                }}
              />
              <ProjectVisual project={project} onImageClick={onImageClick} />
            </div>

            <div className="flex flex-col justify-center overflow-y-auto p-7 sm:p-9">
              <span className="font-mono text-xs font-bold text-accent">
                {String(projects.indexOf(project) + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-ink sm:text-[26px]">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-ink-dim">{project.subtitle}</p>

              <ul className="mt-4 space-y-1.5">
                {project.description.map((line) => (
                  <li key={line} className="flex gap-2 text-[13.5px] leading-relaxed text-ink-dim">
                    <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {line}
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-accent-tint px-2 py-0.5 text-[10.5px] font-medium text-accent-dark"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-1.5 border-t border-line py-3">
        {projects.map((project, i) => (
          <button
            key={project.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to ${project.title}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? "w-6 bg-accent" : "w-1.5 bg-line hover:bg-ink-faint"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
