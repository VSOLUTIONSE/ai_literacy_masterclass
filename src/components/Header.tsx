import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Cpu className="h-8 w-8 text-blue-600 mr-2" />
          <span className="font-bold text-xl text-gray-900">AI Masterclass</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button 
            onClick={() => scrollToSection('benefits')} 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Benefits
          </button>
          <button 
            onClick={() => scrollToSection('outcomes')} 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Learning Outcomes
          </button>
          <button 
            onClick={() => scrollToSection('why-ai')} 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Why AI?
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')} 
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Success Stories
          </button>
        </nav>

        <button 
          onClick={() => scrollToSection('register')} 
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
        >
          Register Now
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white absolute w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('outcomes')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Learning Outcomes
            </button>
            <button 
              onClick={() => scrollToSection('why-ai')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Why AI?
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-gray-700 hover:text-blue-600 transition-colors py-2"
            >
              Success Stories
            </button>
            <button 
              onClick={() => scrollToSection('register')} 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors font-medium"
            >
              Register Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;