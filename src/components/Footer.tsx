import React from 'react';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Cpu className="h-8 w-8 text-blue-400 mr-2" />
              <span className="font-bold text-xl">AI Masterclass</span>
            </div>
            <p className="text-gray-400 mb-6">
              Empowering individuals and businesses with the AI literacy skills needed to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#benefits" className="text-gray-400 hover:text-white transition-colors">Benefits</a>
              </li>
              <li>
                <a href="#outcomes" className="text-gray-400 hover:text-white transition-colors">Learning Outcomes</a>
              </li>
              <li>
                <a href="#why-ai" className="text-gray-400 hover:text-white transition-colors">Why AI?</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#register" className="text-gray-400 hover:text-white transition-colors">Register</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">AI Tools Guide</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">info@aimasterclass.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 AI Boulevard, San Francisco, CA 94105</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AI Literacy Masterclass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;