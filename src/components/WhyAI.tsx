import React from "react";
import { ArrowUpRight } from "lucide-react";

const WhyAI: React.FC = () => {
  return (
    <section
      id="why-ai"
      className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-blue-50"
    >
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
            Why AI Literacy Is No Longer Optional
          </h2>
          <p className="text-xl text-gray-600">
            In today's rapidly evolving digital landscape, AI literacy has
            become as fundamental as computer literacy was in the early 2000s.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="relative overflow-hidden shadow-xl rounded-2xl">
              <img
                src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="AI Technology Innovation"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-blue-900/70 to-transparent">
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-white">
                    The AI Revolution is Here
                  </h3>
                  <p className="text-blue-50">
                    AI is transforming every industry at an unprecedented pace
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                AI is Redefining Job Markets
              </h3>
              <p className="mb-4 text-gray-600">
                By 2025, 85% of jobs that will exist haven't been invented yet,
                and most will require AI literacy. Those who adapt will thrive;
                those who don't risk obsolescence.
              </p>
              <a
                href="#register"
                className="flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Secure your future <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Productivity Multiplier
              </h3>
              <p className="mb-4 text-gray-600">
                AI-literate professionals are achieving in hours what used to
                take days or weeks. This efficiency gap is creating a widening
                divide between organizations and individuals.
              </p>
              <a
                href="#register"
                className="flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Multiply your output <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>

            <div className="p-6 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Competitive Necessity
              </h3>
              <p className="mb-4 text-gray-600">
                Your competitors are already investing in AI capabilities. Our
                masterclass provides the quickest path to matching and exceeding
                their capabilities.
              </p>
              <a
                href="#register"
                className="flex items-center font-medium text-blue-600 transition-colors hover:text-blue-700"
              >
                Stay ahead of the curve{" "}
                <ArrowUpRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAI;
