import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Info_Section from "./components/Info_Section";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    window.AOS.init();
  }, []);

  return (
    <div className="container">
      <video
        className="back-vid"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/galaxy.mp4"
      />

      <Header />
      <Sidebar />
      <Hero />
      <Info_Section/>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

