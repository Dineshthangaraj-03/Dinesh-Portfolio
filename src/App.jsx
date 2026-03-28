import "./styles/global.css";
import { useScrollSpy } from "./hooks/useScrollSpy";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { active, scrolled } = useScrollSpy();

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar active={active} scrolled={scrolled} onScrollTo={scrollTo} />
      <Hero onScrollTo={scrollTo} />
      <Skills />
      <Projects />
      <Experience />
      
      <Contact />
      <Footer />
    </div>
  );
}
