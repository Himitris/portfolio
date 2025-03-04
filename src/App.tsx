import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import { About, Projects } from './components/Sections';
import { Contact, Footer } from './components/ContactFooter';
import { CursorBlob } from './components/animations';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  // Scroll to section smoothly
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50 relative">
        {/* Cursor blob effect */}
        <CursorBlob />

        {/* Header/Navigation */}
        <Header scrollToSection={scrollToSection} />

        <main>
          {/* Hero Section */}
          <Hero scrollToSection={scrollToSection} />

          {/* About Section */}
          <About />

          {/* Projects Section */}
          <Projects />

          {/* Contact Section */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;