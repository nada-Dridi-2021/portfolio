import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { timeline } from "../data/profile";

function TimelineList({ items }) {
  return (
    <ol className="relative ml-1 space-y-8 border-l border-line pl-8">
      {items.map((item, i) => (
        <motion.li
          key={item.title}
          className="relative"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, delay: Math.min(i * 0.08, 0.4), ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="absolute -left-[37px] top-1 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.08, 0.4) + 0.15 }}
          />
          <p className="font-mono text-xs text-ink-faint">{item.date}</p>
          <h3 className="mt-1 text-[15px] font-semibold tracking-tight text-ink">{item.title}</h3>
          <p className="text-sm text-ink-faint">{item.org}</p>
        </motion.li>
      ))}
    </ol>
  );
}

export default function Experience() {
  const experience = timeline.filter((item) => item.type === "experience");
  const education = timeline.filter((item) => item.type === "education");

  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHeading number="03" title="Experience & education" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Experience</h3>
          </Reveal>
          <TimelineList items={experience} />
        </div>

        <div>
          <Reveal className="mb-6">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Education</h3>
          </Reveal>
          <TimelineList items={education} />
        </div>
      </div>
    </section>
  );
}
