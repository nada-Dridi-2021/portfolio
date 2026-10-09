import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import ProjectStack from "./ProjectStack";
import SelectedWork from "./SelectedWork";
import Lightbox from "./Lightbox";
import Reveal from "./Reveal";
import { projects, sideProjects } from "../data/profile";

const FILTERS = ["All", "Web", "Mobile", "Desktop"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const openLightbox = (image, alt) => setLightbox({ image, alt });

  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHeading number="02" title="Featured projects" note={`${projects.length} shipped`} />

      <Reveal className="mb-6 flex flex-wrap gap-2.5">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-5 py-2 text-sm font-bold transition-all hover:-translate-y-0.5 ${
              filter === f ? "text-white" : "text-ink-dim hover:text-ink"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full shadow-lg shadow-accent/30"
                style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-pink))" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </Reveal>

      <Reveal>
        <ProjectStack key={filter} projects={filtered} onImageClick={openLightbox} />
      </Reveal>

      <div className="mt-20">
        <SelectedWork items={sideProjects} onImageClick={openLightbox} />
      </div>

      <Lightbox image={lightbox?.image} alt={lightbox?.alt} onClose={() => setLightbox(null)} />
    </section>
  );
}
