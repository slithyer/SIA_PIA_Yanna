import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/navigation/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FamilyTimeline from './components/sections/FamilyTimeline';
import WorkExperience from './components/sections/WorkExperience';
import Interests from './components/sections/Interests';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/navigation/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <FamilyTimeline />
          <WorkExperience />
          <Interests />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;