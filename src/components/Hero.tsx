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
    <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-purple-50 pt-16">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Struggling to keep up with AI advancements?
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-6">
              In a world where AI is reshaping every industry, falling behind isn't an option.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Our AI Literacy Masterclass empowers you with the knowledge and skills to harness AI tools for unprecedented growth, productivity, and profit—regardless of your current expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToRegister}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors font-medium flex items-center justify-center"
              >
                Register Now <ArrowRight size={18} className="ml-2" />
              </button>
              <button 
                onClick={() => document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-8 py-3 rounded-md transition-colors font-medium"
              >
                Book a Consultation
              </button>
            </div>
          </div>
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="AI Literacy Workshop" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900/80 to-transparent p-6">
                <p className="text-white font-semibold text-lg">Next masterclass starts in:</p>
                <div className="flex gap-4 mt-2">
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 text-white">
                    <span className="block text-2xl font-bold">{timeLeft.days}</span>
                    <span className="text-xs">Days</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 text-white">
                    <span className="block text-2xl font-bold">{timeLeft.hours}</span>
                    <span className="text-xs">Hours</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 text-white">
                    <span className="block text-2xl font-bold">{timeLeft.minutes}</span>
                    <span className="text-xs">Minutes</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-md px-3 py-2 text-white">
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