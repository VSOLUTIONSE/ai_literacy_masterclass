import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "This masterclass transformed my approach to work. I'm now completing projects in half the time while delivering higher quality results. The ROI was immediate and substantial.",
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "As someone with zero technical background, I was worried AI would be too complex. This masterclass broke everything down into simple, actionable steps that I could immediately apply.",
    name: "Michael Chen",
    title: "Small Business Owner",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  },
  {
    quote: "The productivity gains have been astronomical. Tasks that took hours now take minutes, and the quality of my work has improved dramatically. This is the most valuable training I've ever invested in.",
    name: "Elena Rodriguez",
    title: "Project Manager",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from professionals who transformed their careers through AI literacy.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent md:hidden flex items-end">
                  <div className="p-4">
                    <div className="flex mb-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <h3 className="text-white font-semibold">{testimonials[currentIndex].name}</h3>
                    <p className="text-gray-200 text-sm">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                <blockquote>
                  <p className="text-gray-700 text-lg mb-6 italic">
                    "{testimonials[currentIndex].quote}"
                  </p>
                  
                  <div className="hidden md:block">
                    <div className="flex mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonials[currentIndex].name}</h3>
                      <p className="text-gray-600">{testimonials[currentIndex].title}</p>
                    </div>
                  </div>
                </blockquote>
                
                <div className="flex justify-between items-center mt-6">
                  <p className="text-gray-500 text-sm">
                    {currentIndex + 1} of {testimonials.length}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} className="text-gray-700" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight size={20} className="text-gray-700" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;