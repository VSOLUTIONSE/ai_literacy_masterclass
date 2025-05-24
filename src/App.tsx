import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Outcomes from './components/Outcomes';
import WhyAI from './components/WhyAI';
import Testimonials from './components/Testimonials';
import Register from './components/Register';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update page title
    document.title = "AI Literacy Masterclass | Transform Your Capabilities";
    
    // Update favicon (optional)
    const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (favicon) {
      favicon.href = "https://cdn.icon-icons.com/icons2/1856/PNG/512/artificial-intelligence_116997.png";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Outcomes />
      <WhyAI />
      <Testimonials />
      <Register />
      <Footer />
    </div>
  );
}

export default App;