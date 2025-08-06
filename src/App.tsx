import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Destinations from './components/Destinations';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Destinations />
      <About />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
