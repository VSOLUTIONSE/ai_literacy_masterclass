import React, { useState } from 'react';

const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  
  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setIsRegistering(true);
    // Simulate API call
    setTimeout(() => {
      setIsRegistering(false);
      // Success feedback would go here
      setEmail('');
      setName('');
      alert('Registration successful! We will contact you with more details.');
    }, 1000);
  };
  
  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsMessageSent(true);
      setMessage('');
      setEmail('');
      setName('');
    }, 1000);
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Registration Form */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Reserve Your Spot
            </h2>
            <p className="text-gray-600 mb-6">
              The next masterclass starts soon. Secure your place to transform your AI capabilities.
            </p>
            
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div className="pt-2">
                <button
                  type="submit"
                  className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium flex items-center justify-center ${isRegistering ? 'opacity-75 cursor-wait' : ''}`}
                  disabled={isRegistering}
                >
                  {isRegistering ? 'Processing...' : 'Register for the Masterclass'}
                </button>
              </div>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Limited seats available. 100% money-back guarantee if not satisfied.
              </p>
            </form>
            
            <div className="mt-8 border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Limited Time
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">30% Early Bird Discount</span>
                </div>
                <p className="text-gray-900 font-bold">$697 <span className="line-through text-gray-400 font-normal">$997</span></p>
              </div>
            </div>
          </div>
          
          {/* Enquiry Form */}
          <div id="enquiry">
            {!isMessageSent ? (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Have Questions?
                </h2>
                <p className="text-gray-600 mb-6">
                  Book a free consultation call with our team to discuss how the AI Literacy Masterclass can specifically benefit you or your organization.
                </p>
                
                <form onSubmit={handleEnquiry} className="space-y-4">
                  <div>
                    <label htmlFor="enquiry-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="enquiry-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="enquiry-email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="enquiry-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell us about your specific needs or questions"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-white hover:bg-gray-50 text-blue-600 border border-blue-600 py-3 rounded-md transition-colors font-medium"
                    >
                      Book a Consultation
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm h-full flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest! Our team will contact you within 24 hours to schedule your consultation.
                </p>
                <button
                  onClick={() => setIsMessageSent(false)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;