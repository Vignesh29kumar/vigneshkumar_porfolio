import React, { useRef } from 'react';
import { useCursor } from './hooks/useCursor';
import { useReveal } from './hooks/useReveal';

import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import Skills     from './components/Skills';
import Education  from './components/Education';
import Projects   from './components/Projects';
import Experience from './components/Experience';
import Art        from './components/Art';
import Contact    from './components/Contact';

export default function App() {
  const { cursorRef, ringRef } = useCursor();
  useReveal();

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />

      <Navbar />

      <main>
        <Hero />
        <Skills />
        <Education />
        <Projects />
        <Experience />
        <Art />
        <Contact />
      </main>

      <footer>
        <p>© 2026 Vignesh Kumar MR</p>
        <p>Thank you!.</p>
      </footer>
    </>
  );
}
