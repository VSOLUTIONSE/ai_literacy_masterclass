import React, { useState, useEffect } from "react";
import { Menu, X, Cpu } from "lucide-react";

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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between px-4 mx-auto md:px-6">
        <div className="flex items-center">
          <Cpu className="w-8 h-8 mr-2 text-blue-600" />
          <div className="flex flex-col md:items-center md:flex-row">
            <span className="text-xl font-bold text-gray-900">
              AI Literacy Masterclass
            </span>
            <p className="md:mt-8 text-[12px]">
              <span className="text-blue-600">powered</span> by AI Drive
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          <button
            onClick={() => scrollToSection("benefits")}
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            Benefits
          </button>
          <button
            onClick={() => scrollToSection("outcomes")}
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            Learning Outcomes
          </button>
          <button
            onClick={() => scrollToSection("why-ai")}
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            Why AI?
          </button>
          <button
            onClick={() => scrollToSection("testimonials")}
            className="text-gray-700 transition-colors hover:text-blue-600"
          >
            Success Stories
          </button>
        </nav>

        <button
          onClick={() => scrollToSection("register")}
          className="hidden px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md md:block hover:bg-blue-700"
        >
          Register Now
        </button>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-700 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute w-full bg-white shadow-lg md:hidden">
          <div className="container flex flex-col px-4 py-4 mx-auto space-y-4">
            <button
              onClick={() => scrollToSection("benefits")}
              className="py-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              Benefits
            </button>
            <button
              onClick={() => scrollToSection("outcomes")}
              className="py-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              Learning Outcomes
            </button>
            <button
              onClick={() => scrollToSection("why-ai")}
              className="py-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              Why AI?
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="py-2 text-gray-700 transition-colors hover:text-blue-600"
            >
              Success Stories
            </button>
            <button
              onClick={() => scrollToSection("register")}
              className="px-6 py-2 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
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
