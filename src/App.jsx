import { useEffect } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import TeckStack from "./sections/TeckStack";
import Projects from "./sections/Projects";
import ContactMe from "./sections/ContactMe";
import Achievement from "./sections/Achievement";

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className="">
      <div className="fixed w-screen h-[10%]">
        <Navbar />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="achievements">
        <Achievement/>
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="tech-stack">
        <TeckStack />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact-me">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
