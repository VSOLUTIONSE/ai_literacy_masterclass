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
      <div className="container px-4 mx-auto md:px-6">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            Hear from people who are transforming their careers through AI literacy.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="md:flex">
              <div className="relative md:w-1/3">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="object-cover object-center w-full h-full"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-gray-900/70 to-transparent md:hidden">
                  <div className="p-4">
                    <div className="flex mb-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <h3 className="font-semibold text-white">{testimonials[currentIndex].name}</h3>
                    <p className="text-sm text-gray-200">{testimonials[currentIndex].title}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col justify-between p-6 md:w-2/3 md:p-8">
                <blockquote>
                  <p className="mb-6 text-lg italic text-gray-700">
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
                
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-gray-500">
                    {currentIndex + 1} of {testimonials.length}
                  </p>
                  
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevTestimonial}
                      className="p-2 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft size={20} className="text-gray-700" />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 transition-colors bg-gray-100 rounded-full hover:bg-gray-200"
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