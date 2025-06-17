import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import akhigbe from '../img/akhigbe.png';
import oloye from '../img/oloye.png';
import zino from '../img/zino.png';


interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  image: string;
  rating: number;
}


const testimonials: TestimonialProps[] = [
  {
    quote: "my experience has been eye-opening,explored various AI tools and techniques that I never knew existed...it has really transform my workflow.",
    name: "Bright Akhigbe",
    title: "Fx Price Speculator",
    image: akhigbe,
    rating: 5
  },
  {
    quote: "I've been on the class from the onset , and i must say it has been a game changer for me, as a content marketer i have been able to employ AI tools in research, content generation and analysis. I can't recommend this enough!",
    name: "Zino ",
    title: "Content Marketer",
    image: zino,
    rating: 5
  },
  {
    quote: "AI drive have provided me with mindblowing tools i never knew existed, it has really transform my workflow...",
    name: "Daniel Oloye",
    title: "Brand Visual identity Designer",
    image: oloye,
    rating: 4
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