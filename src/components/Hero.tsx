import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 14,
    hours: 22,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    setIsVisible(true);

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + timeLeft.days);
    targetDate.setHours(targetDate.getHours() + timeLeft.hours);
    targetDate.setMinutes(targetDate.getMinutes() + timeLeft.minutes);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToRegister = () => {
    const element = document.getElementById('register');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex items-center min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container px-4 py-12 mx-auto md:px-6 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Struggling to keep up with AI advancements?
            </h1>
            <p className="mb-6 text-xl text-gray-600 md:text-2xl">
              In a world where AI is reshaping every industry, falling behind isn't an option.
            </p>
            <p className="mb-8 text-lg text-gray-700">
              Our AI Literacy Masterclass empowers you with the knowledge and skills to harness AI tools for unprecedented growth, productivity, and profit—regardless of your current expertise.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button 
                onClick={scrollToRegister}
                className="flex items-center justify-center px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Register Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 font-medium text-blue-600 transition-colors bg-white border border-blue-600 rounded-md hover:bg-gray-100"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative overflow-hidden bg-white shadow-xl rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Literacy Workshop" 
                className="object-cover w-full h-96"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-blue-900/80 to-transparent">
                <p className="text-lg font-semibold text-white">Next masterclass starts in:</p>
                <div className="flex gap-4 mt-2">
                  <div className="px-3 py-2 text-white rounded-md bg-white/20 backdrop-blur-sm">
                    <span className="block text-2xl font-bold">{timeLeft.days}</span>
                    <span className="text-xs">Days</span>
                  </div>
                  <div className="px-3 py-2 text-white rounded-md bg-white/20 backdrop-blur-sm">
                    <span className="block text-2xl font-bold">{timeLeft.hours}</span>
                    <span className="text-xs">Hours</span>
                  </div>
                  <div className="px-3 py-2 text-white rounded-md bg-white/20 backdrop-blur-sm">
                    <span className="block text-2xl font-bold">{timeLeft.minutes}</span>
                    <span className="text-xs">Minutes</span>
                  </div>
                  <div className="px-3 py-2 text-white rounded-md bg-white/20 backdrop-blur-sm">
                    <span className="block text-2xl font-bold">{timeLeft.seconds}</span>
                    <span className="text-xs">Seconds</span>
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

export default Hero;