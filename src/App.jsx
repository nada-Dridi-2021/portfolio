import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import LanguagesAndSoftSkills from "./components/LanguagesAndSoftSkills";
import Footer from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-bg font-sans text-ink antialiased">
        <Nav />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <LanguagesAndSoftSkills />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
