import React from "react";
import { CheckCircle } from "lucide-react";

const Outcomes: React.FC = () => {
  const learningOutcomes = [
    "Understand AI & Writing Prompting the Easy Way",
    "Your Own AI WhatsApp Personal Assistant - For Free!",
    "Identify the right AI tools for specific tasks and challenges.",
    "Learn & Create AI Agents.",
    "Turn AI from a buzzword into a practical, everyday advantage",
    "AI for Academic Research & Projects",
  ];

  return (
    <section id="outcomes" className="py-16 bg-white md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              What You'll Learn
            </h2>
            <p className="mb-8 text-xl text-gray-600">
              Our comprehensive curriculum is designed to transform beginners
              into confident AI practitioners and help professionals reach new
              heights.
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
            <div className="relative z-10 p-8 text-white bg-blue-600 rounded-2xl">
              <h3 className="mb-4 text-2xl font-bold">Who this is For ?</h3>

              <div className="space-y-6">
                <div className="p-4 rounded-lg bg-blue-500/50">
                  <h4 className="mb-2 font-semibold">
                    Enterpreneurs or Business Owners
                  </h4>
                  {/* <p className="text-blue-50">
                    Hands-on sessions where you'll apply AI tools to real-world
                    scenarios
                  </p> */}
                </div>
                <div className="p-4 rounded-lg bg-blue-500/50">
                  <h4 className="mb-2 font-semibold">
                    {" "}
                    Virtual Assistants , Personal Assistants or Admin Personnels
                  </h4>
                </div>
                <div className="p-4 rounded-lg bg-blue-500/50">
                  <h4 className="mb-2 font-semibold">
                    Creatives or technical professional
                  </h4>
                  {/* <p className="text-blue-50">
                    Learn from industry practitioners with experience
                    implementing AI across various fields
                  </p> */}
                </div>

                <div className="p-4 rounded-lg bg-blue-500/50">
                  <h4 className="mb-2 font-semibold">Students</h4>
                  {/* <p className="text-blue-50">
                    Gain lifetime access to our curated collection of AI tools,
                    tutorials, and templates
                  </p> */}
                </div>
                <div className="p-4 rounded-lg bg-blue-500/50">
                  <h4 className="mb-2 font-semibold">Anyone who wants to do more with AI</h4>
                  {/* <p className="text-blue-50">
                    Gain lifetime access to our curated collection of AI tools,
                    tutorials, and templates
                  </p> */}
                </div>
              </div>

              <div className="absolute w-32 h-32 bg-purple-600 rounded-full opacity-50 -bottom-4 -right-4 blur-2xl"></div>
              <div className="absolute w-24 h-24 bg-blue-400 rounded-full opacity-50 -top-4 -left-4 blur-xl"></div>
            </div>

            <div className="absolute border-2 border-blue-300 border-dashed top-8 left-8 right-8 bottom-8 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Outcomes;
