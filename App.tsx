import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden font-mono">
      {/* Retro Grid Background - Amber tint */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[linear-gradient(to_right,#f59e0b11_1px,transparent_1px),linear-gradient(to_bottom,#f59e0b11_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main className="border-l border-r border-primary/20 max-w-7xl mx-auto bg-black/80">
          <Hero />
          <div className="h-px w-full bg-primary/20"></div>
          <About />
          <div className="h-px w-full bg-primary/20"></div>
          <Stats />
          <div className="h-px w-full bg-primary/20"></div>
          <Projects />
          <div className="h-px w-full bg-primary/20"></div>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;