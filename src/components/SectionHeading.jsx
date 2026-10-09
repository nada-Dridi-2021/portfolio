import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function SectionHeading({ number, title, note }) {
  return (
    <Reveal className="relative mb-10 flex items-end justify-between gap-4 border-b border-line pb-4">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-8 min-w-8 items-center justify-center rounded-md px-2 text-sm font-bold tabular-nums tracking-wider text-white"
          style={{ background: "linear-gradient(135deg, var(--color-accent), var(--color-pink))" }}
        >
          {number}
        </span>
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-[28px]">
          {title}
        </h2>
      </div>
      {note && (
        <span className="hidden text-xs font-semibold uppercase tracking-wider text-ink-faint sm:block">
          {note}
        </span>
      )}
      <motion.span
        className="absolute -bottom-px left-0 h-[2px] w-16"
        style={{ background: "linear-gradient(90deg, var(--color-accent), var(--color-pink))" }}
        initial={{ width: 0 }}
        whileInView={{ width: 64 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />
    </Reveal>
  );
}
