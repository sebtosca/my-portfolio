import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="bg-gradient-to-b from-black to-gray-900">
      <Navbar />
      <div className="bg-black text-white">
        <Hero />
      </div>
      <div className="bg-white text-black">
        <Experience />
      </div>
      <div className="bg-black text-white">
        <Education />
      </div>
      <div className="bg-white text-black">
        <Projects />
      </div>
      <div className="bg-black text-white">
        <Skills />
      </div>
      <div className="bg-white text-black">
        <Contact />
      </div>
      <div className="bg-black text-white">
        <Footer />
      </div>
    </div>
  );
}

export default App;