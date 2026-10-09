import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#skills", label: "Skills", id: "skills" },
  { href: "#projects", label: "Projects", id: "projects" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#contact", label: "Contact", id: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState("");
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 120);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -80 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md"
    >
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(90deg, var(--color-accent), var(--color-pink), var(--color-cyan))",
        }}
      />
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" className="text-[15px] font-extrabold tracking-tight text-gradient">
          Nada Dridi
        </a>
        <ul className="flex flex-wrap gap-x-7 gap-y-1 text-sm font-medium text-ink-dim">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative transition-colors hover:text-accent ${
                  active === link.id ? "text-accent" : ""
                }`}
              >
                {link.label}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-[17px] left-0 right-0 h-0.5 bg-accent"
                    transition={{ duration: 0.25 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
