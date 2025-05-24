import React from 'react';
import { CheckCircle } from 'lucide-react';

const Outcomes: React.FC = () => {
  const learningOutcomes = [
    "Master essential AI tools for business, creativity, and productivity",
    "Create effective prompts that generate high-quality AI outputs",
    "Implement AI workflows that save hours of manual work every week",
    "Identify the right AI tools for specific tasks and challenges",
    "Develop strategies for keeping up with rapidly evolving AI capabilities",
    "Apply ethical considerations and best practices when using AI tools",
    "Turn AI from a buzzword into a practical, everyday advantage"
  ];

  return (
    <section id="outcomes" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Learn
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our comprehensive curriculum is designed to transform beginners into confident AI practitioners and help professionals reach new heights.
            </p>
            
            <ul className="space-y-4">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-2xl p-8 text-white relative z-10">
              <h3 className="text-2xl font-bold mb-4">Masterclass Highlights</h3>
              
              <div className="space-y-6">
                <div className="bg-blue-500/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Interactive Workshops</h4>
                  <p className="text-blue-50">Hands-on sessions where you'll apply AI tools to real-world scenarios</p>
                </div>
                
                <div className="bg-blue-500/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Expert Guidance</h4>
                  <p className="text-blue-50">Learn from industry practitioners with experience implementing AI across various fields</p>
                </div>
                
                <div className="bg-blue-500/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Resource Library</h4>
                  <p className="text-blue-50">Gain lifetime access to our curated collection of AI tools, tutorials, and templates</p>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 h-32 w-32 bg-purple-600 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -top-4 -left-4 h-24 w-24 bg-blue-400 rounded-full opacity-50 blur-xl"></div>
            </div>
            
            <div className="absolute top-8 left-8 right-8 bottom-8 border-2 border-dashed border-blue-300 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;