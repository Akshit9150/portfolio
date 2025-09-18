import React from 'react';
import CustomCursor from './components/CustomCursor';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 pattern-dots cursor-none">
      <CustomCursor />
      <Navigation />
      <Hero />
      <Projects />
      <Certificates />
      <Experience />
      <Education />
      <Contact />
      
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Akshit Verma. Designed with <span className="text-yellow-600">❤</span> and built with React.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;