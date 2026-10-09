import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { spokenLanguages, softSkills } from "../data/profile";

const levelWidth = {
  Native: "100%",
  C2: "95%",
  C1: "85%",
  B2: "70%",
  B1: "55%",
  A2: "40%",
  A1: "25%",
};

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

export default function LanguagesAndSoftSkills() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-12">
      <div className="grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-2">
        <Reveal>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">
            Spoken languages
          </h3>
          <div className="space-y-3">
            {spokenLanguages.map((lang, i) => (
              <div key={lang.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-ink">{lang.name}</span>
                  <span className="text-xs font-medium text-ink-faint">{lang.level}</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-pink))" }}
                    initial={{ width: 0 }}
                    whileInView={{ width: levelWidth[lang.level] ?? "50%" }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-faint">
            Working style
          </h3>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={tagGroup}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {softSkills.map((skill) => (
              <motion.span
                key={skill}
                variants={tagItem}
                whileHover={{ y: -2, scale: 1.06 }}
                className="cursor-default rounded-full bg-accent-tint px-3 py-1.5 text-xs font-medium text-accent-dark transition-colors duration-200 hover:bg-accent hover:text-white"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
