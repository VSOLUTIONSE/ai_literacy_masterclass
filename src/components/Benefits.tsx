import React from 'react';
import { TrendingUp, BrainCog, Lightbulb, Clock, Target, Workflow } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="p-6 transition-all duration-300 bg-white shadow-md rounded-xl hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-start">
      <div className="p-3 mr-4 text-blue-600 bg-blue-100 rounded-lg">
        {icon}
      </div>
      <div>
        <h3 className="mb-2 text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp size={24} />,
      title: "Accelerated Career Growth",
      description: "Master AI tools that make you indispensable in your field and open doors to premium opportunities."
    },
    {
      icon: <BrainCog size={24} />,
      title: "Enhanced Productivity",
      description: "Automate repetitive tasks and focus on high-value work that drives meaningful results."
    },
    {
      icon: <Target size={24} />,
      title: "Competitive Edge",
      description: "Stay ahead of peers and competitors by harnessing cutting-edge AI capabilities before they become mainstream."
    },
    {
      icon: <Workflow size={24} />,
      title: "Streamlined Workflows",
      description: "Implement AI-powered processes that save hours of manual effort every week."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "Creative Problem Solving",
      description: "Unlock new approaches to challenges using AI as your collaborative thinking partner."
    },
    {
      icon: <Clock size={24} />,
      title: "Future-Proof Skills",
      description: "Develop adaptable AI literacy that evolves with technology, ensuring long-term relevance."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gray-50">
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Transform Your Capabilities with AI Literacy
          </h2>
          <p className="text-xl text-gray-600">
            Our masterclass delivers tangible advantages that immediately impact your personal and professional growth.
          </p>
        </div>
        
        <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;