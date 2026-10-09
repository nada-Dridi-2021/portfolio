import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { BrowserChassis, PhoneChassis } from "./DeviceFrame";

function FeaturedProject({ project, index, eyebrow, primary = true, onImageClick }) {
  const Chassis = project.imageFrame === "phone" ? PhoneChassis : BrowserChassis;

  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 50% at 15% 10%, var(--color-accent-tint) 0%, transparent 60%), radial-gradient(45% 40% at 100% 100%, rgba(255,61,138,0.08) 0%, transparent 60%)",
          }}
        />

        <div className={`relative px-6 sm:px-10 ${primary ? "pt-7 sm:pt-10" : "pt-6 sm:pt-8"}`}>
          <div className="flex items-baseline justify-between gap-4">
            <span
              className="text-sm font-black italic"
              style={{
                background: "linear-gradient(135deg, var(--color-accent), var(--color-pink))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {String(index).padStart(2, "0")}
            </span>
            {eyebrow && (
              <span className="hidden text-xs font-semibold uppercase tracking-wider text-ink-faint sm:block">
                {eyebrow}
              </span>
            )}
          </div>

          <h3 className={`mt-2 font-extrabold tracking-tight text-ink ${primary ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"}`}>
            {project.title}
          </h3>
          {project.subtitle && <p className="mt-1 text-sm font-medium text-ink-dim">{project.subtitle}</p>}
        </div>

        <div
          className={`relative pb-7 pt-5 ${primary ? "px-4 sm:px-10 sm:pb-9 sm:pt-6" : "px-4 sm:px-8 sm:pb-7 sm:pt-5"}`}
          style={{ perspective: 1400 }}
        >
          <div
            className={`relative mx-auto ${
              project.imageFrame === "phone" ? "w-[160px]" : primary ? "max-w-xl" : "max-w-sm"
            }`}
          >
            <motion.button
              type="button"
              onClick={() => onImageClick(project.image, `${project.title} screenshot`)}
              className="group relative z-10 block w-full -rotate-2 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-[1.02]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Chassis
                src={project.image}
                alt={`${project.title} screenshot`}
                className="shadow-[0_30px_60px_-20px_rgba(109,40,246,0.3)]"
              />
            </motion.button>

            {project.imageSecondary && (
              <motion.button
                type="button"
                onClick={() => onImageClick(project.imageSecondary, `${project.title} secondary screenshot`)}
                className={`group absolute bottom-0 right-0 z-20 translate-x-[28%] rotate-3 transition-transform duration-500 ease-out hover:rotate-0 hover:scale-105 ${
                  project.imageSecondaryFrame === "phone" ? "w-[42%]" : "w-[48%]"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {project.imageSecondaryFrame === "phone" ? (
                  <PhoneChassis
                    src={project.imageSecondary}
                    alt={`${project.title} secondary screenshot`}
                    className="shadow-[0_20px_45px_-15px_rgba(109,40,246,0.3)]"
                  />
                ) : (
                  <BrowserChassis
                    src={project.imageSecondary}
                    alt={`${project.title} secondary screenshot`}
                    className="shadow-[0_20px_45px_-15px_rgba(109,40,246,0.3)]"
                  />
                )}
              </motion.button>
            )}
          </div>
        </div>

        <div className="relative flex flex-col gap-5 border-t border-line px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="max-w-xl text-sm leading-relaxed text-ink-dim">{project.description}</p>

          <div className="flex items-center gap-5">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-accent-tint px-2 py-0.5 text-[11px] font-medium text-accent-dark"
                >
                  {tag}
                </span>
              ))}
            </div>
            <button
              type="button"
              onClick={() => onImageClick(project.image, `${project.title} screenshot`)}
              className="group inline-flex flex-shrink-0 items-center gap-1.5 text-sm font-semibold text-accent"
            >
              View Project
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectIndexItem({ index, project, delay }) {
  return (
    <Reveal delay={delay}>
      <button type="button" className="group relative block w-full py-6 text-left">
        <span
          aria-hidden
          className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-accent to-pink transition-transform duration-[400ms] ease-out group-hover:scale-x-100"
          style={{ transformOrigin: "left" }}
        />
        <span
          aria-hidden
          className="absolute inset-y-0 -inset-x-4 -z-10 rounded-xl bg-accent-tint opacity-0 transition-opacity duration-[350ms] ease-out group-hover:opacity-60 sm:-inset-x-6"
        />

        <div className="flex items-start justify-between gap-6">
          <div className="flex gap-4 sm:gap-6">
            <span
              className="mt-0.5 font-mono text-sm font-bold text-ink-faint transition-colors duration-300 group-hover:text-accent"
            >
              {String(index).padStart(2, "0")}
            </span>
            <div>
              <h4 className="text-base font-bold tracking-tight text-ink transition-transform duration-300 ease-out sm:text-lg sm:group-hover:translate-x-1">
                {project.title}
              </h4>
              <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-ink-dim">
                {project.description}
              </p>
              <p className="mt-2.5 font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                {project.tags.join(" · ")}
              </p>
            </div>
          </div>

          <span className="mt-0.5 flex-shrink-0 text-ink-faint transition-all duration-300 ease-out group-hover:translate-x-1.5 group-hover:text-accent">
            →
          </span>
        </div>
      </button>
      <div className="h-px bg-line" />
    </Reveal>
  );
}

export default function SelectedWork({ items, onImageClick }) {
  const [featured, secondFeatured, ...indexItems] = items;
  const startIndex = 3;

  return (
    <div>
      <Reveal className="mb-8">
        <span className="font-mono text-xs font-bold uppercase tracking-wider text-accent">
          Experiments &amp; Selected Work
        </span>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-dim">
          Academic projects and self-driven experiments that helped me explore different areas of
          software engineering.
        </p>
      </Reveal>

      {featured && (
        <FeaturedProject
          project={featured}
          index={1}
          eyebrow="Academic Project"
          primary
          onImageClick={onImageClick}
        />
      )}

      {secondFeatured && (
        <div className="mt-6">
          <FeaturedProject
            project={secondFeatured}
            index={2}
            eyebrow="Academic Project"
            primary={false}
            onImageClick={onImageClick}
          />
        </div>
      )}

      <div className="mt-2">
        {indexItems.map((project, i) => (
          <ProjectIndexItem
            key={project.title}
            index={i + startIndex}
            project={project}
            delay={0.05 * i}
          />
        ))}
      </div>
    </div>
  );
}
