import React from 'react';
import { TrendingUp, BrainCog, Lightbulb, Clock, Target, Workflow } from 'lucide-react';

interface BenefitProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
    <div className="flex items-start">
      <div className="bg-blue-100 p-3 rounded-lg text-blue-600 mr-4">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Transform Your Capabilities with AI Literacy
          </h2>
          <p className="text-xl text-gray-600">
            Our masterclass delivers tangible advantages that immediately impact your personal and professional growth.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
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