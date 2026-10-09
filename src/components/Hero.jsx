import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { profile } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";
import DownloadCv from "./DownloadCv";
import portrait from "../assets/my picture/photo-transparent.png";

const roles = ["Software Engineer", "Full-Stack Developer", "Problem Solver", "Lifelong Learner"];

export default function Hero() {
  const typed = useTypewriter(roles);
  const sectionRef = useRef(null);
  const portraitRef = useRef(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${mx}% ${my}%, rgba(109,40,246,0.14), transparent 70%)`;

  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springTiltX = useSpring(tiltX, { stiffness: 150, damping: 15 });
  const springTiltY = useSpring(tiltY, { stiffness: 150, damping: 15 });
  const rotateX = useTransform(springTiltY, [-0.5, 0.5], [16, -16]);
  const rotateY = useTransform(springTiltX, [-0.5, 0.5], [-16, 16]);
  const shadowX = useTransform(springTiltX, [-0.5, 0.5], [18, -18]);
  const shadowY = useTransform(springTiltY, [-0.5, 0.5], [38, 10]);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 100);
    my.set(((e.clientY - rect.top) / rect.height) * 100);

    const pRect = portraitRef.current.getBoundingClientRect();
    tiltX.set((e.clientX - pRect.left) / pRect.width - 0.5);
    tiltY.set((e.clientY - pRect.top) / pRect.height - 0.5);
  };

  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden"
    >
      {/* animated gradient mesh backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-bg">
        <div
          className="absolute -left-24 -top-32 h-[32rem] w-[32rem] rounded-full opacity-70 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-accent-tint), transparent 70%)", animation: "blob-drift 16s ease-in-out infinite" }}
        />
        <div
          className="absolute -right-20 top-10 h-[26rem] w-[26rem] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(255,61,138,0.25), transparent 70%)", animation: "blob-drift 20s ease-in-out infinite reverse" }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[22rem] w-[22rem] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.22), transparent 70%)", animation: "blob-drift 24s ease-in-out infinite" }}
        />
        <motion.div className="absolute inset-0" style={{ background: spotlight }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-20 sm:pb-32 sm:pt-28">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto] lg:gap-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-good/20 bg-good-tint px-3 py-1 text-xs font-medium text-good"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-good opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-good" />
              </span>
              Open to new roles
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl font-black leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
            >
              <span className="text-ink">Dridi</span>
              <br />
              <span className="text-gradient">Nada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 h-9 text-2xl font-bold text-ink sm:text-3xl"
            >
              {typed}
              <span className="ml-0.5 inline-block w-[3px] animate-pulse bg-accent align-middle" style={{ height: "0.9em" }} />
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-dim"
            >
              {profile.summary} I'm looking for a role where I can keep learning,
              grow my skills, and contribute meaningfully to ambitious projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href={`mailto:${profile.email}`}
                className="group relative overflow-hidden rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/35"
              >
                <span className="relative z-10">Email me</span>
                <span
                  className="absolute inset-0 -z-0 translate-x-[-100%] transition-transform duration-500 group-hover:translate-x-0"
                  style={{ background: "linear-gradient(90deg, var(--color-pink), var(--color-cyan))" }}
                />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-line px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border-2 border-line px-6 py-3 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                GitHub
              </a>
              <DownloadCv />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -4 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-first flex justify-center sm:order-last"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={portraitRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTilt}
              className="relative w-72 sm:w-[22rem] lg:w-[26rem]"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <motion.div
                className="absolute -inset-6 rounded-full"
                style={{ rotateX, rotateY, translateZ: -40 }}
              >
                <motion.div
                  className="h-full w-full rounded-full opacity-90 blur-xl"
                  style={{
                    background: "conic-gradient(from 180deg, var(--color-accent), var(--color-pink), var(--color-cyan), var(--color-accent))",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              <motion.div
                className="absolute -inset-2 rounded-full bg-bg"
                style={{ rotateX, rotateY, translateZ: -20 }}
              />
              <motion.div
                aria-hidden
                className="absolute -inset-4 -z-10 rounded-full bg-ink/20 blur-2xl"
                style={{ x: shadowX, y: shadowY, opacity: 0.35 }}
              />
              <motion.img
                src={portrait}
                alt="Portrait of Dridi Nada"
                className="relative w-full drop-shadow-2xl"
                style={{ rotateX, rotateY, translateZ: 30 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
