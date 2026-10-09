import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { skills } from "../data/profile";
import { skillIcons } from "../data/skillIcons";

const tagGroup = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045 },
  },
};

const tagItem = {
  hidden: { opacity: 0, y: 8, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-12">
      <SectionHeading number="01" title="Skills" />

      <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([group, items], i) => (
          <Reveal key={group} delay={i * 0.06}>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">
              {group}
            </h3>
            <motion.div
              className="flex flex-wrap gap-2"
              variants={tagGroup}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {items.map((item) => {
                const Icon = skillIcons[item];
                return (
                  <motion.span
                    key={item}
                    variants={tagItem}
                    whileHover={{ y: -2, scale: 1.06 }}
                    className="inline-flex cursor-default items-center gap-2 rounded-md border border-line bg-bg-alt px-3 py-1.5 text-[14px] font-medium text-ink-dim transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white hover:shadow-md hover:shadow-accent/25"
                  >
                    {Icon && <Icon className="h-5 w-5 flex-shrink-0" />}
                    {item}
                  </motion.span>
                );
              })}
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
