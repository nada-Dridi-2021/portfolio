import Reveal from "./Reveal";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-line bg-bg-alt">
      <Reveal className="mx-auto max-w-5xl px-5 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-ink-dim">
          Open to software engineering roles where I can keep learning and ship
          things that matter. Based in {profile.location} — happy to work
          remote or relocate.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-accent-dark hover:shadow-md"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-faint hover:shadow-sm"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink-faint hover:shadow-sm"
          >
            GitHub
          </a>
        </div>
        <p className="mt-10 text-xs text-ink-faint">
          {profile.location} · +216 {profile.phone}
        </p>
      </Reveal>
    </footer>
  );
}
