import React from "react";
import { Cpu, Mail, Phone, MapPin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-gray-900">
      <div className="container px-4 py-12 mx-auto md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center">
              <Cpu className="w-8 h-8 mr-2 text-blue-600" />
              <div className="flex flex-col md:items-center md:flex-row">
                <span className="text-xl font-bold">
                  AI Literacy Masterclass
                </span>
                <p className="md:mt-8 text-[12px]">
                  <span className="text-blue-600">powered</span> by AI Drive
                </p>
              </div>
            </div>
            <p className="mt-2 mb-6 text-gray-400">
              Empowering individuals and businesses with the AI literacy skills
              needed to thrive in the digital age.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 transition-colors hover:text-white"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#benefits"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#outcomes"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Learning Outcomes
                </a>
              </li>
              <li>
                <a
                  href="#why-ai"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Why AI?
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Success Stories
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail
                  size={18}
                  className="text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-400">info@aimasterclass.com</span>
              </li>
              <li className="flex items-start">
                <Phone
                  size={18}
                  className="text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-400">+234 (901) 535-419</span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="text-gray-400 mr-3 mt-0.5 flex-shrink-0"
                />
                <span className="text-gray-400">
                  {" "}
                  5 Isibor Street, Benin-city Edo state, Nigeria
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-12 text-center border-t border-gray-800">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AI Literacy Masterclass. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
