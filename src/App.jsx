import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import BackgroundEffect from './components/BackgroundEffect';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="app">
      <BackgroundEffect />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </main>
      </div>
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
