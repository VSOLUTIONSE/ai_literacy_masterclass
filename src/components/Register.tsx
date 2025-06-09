import React, { useState } from "react";

const Register: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [isRegistering, setIsRegistering] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);

  // const handleRegister = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsRegistering(true);
  //   // Simulate API call
  //   setTimeout(() => {
  //     setIsRegistering(false);
  //     // Success feedback would go here
  //     setEmail("");
  //     setName("");
  //     alert("Registration successful! We will contact you with more details.");
  //   }, 1000);
  // };

  const handleEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsMessageSent(true);
      setMessage("");
      setEmail("");
      setName("");
    }, 1000);
  };

  return (
    <section id="register" className="py-16 bg-white md:py-24">
      <div className="container px-4 mx-auto md:px-6">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Registration Form */}
          <div className="p-6 h-[50%] shadow-md bg-gray-50 rounded-2xl md:p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
              Reserve Your Spot
            </h2>
            <p className="mb-6 text-gray-600">
              The next masterclass starts soon. Secure your place to transform
              your AI capabilities.
            </p>
            <div className="pt-2">
              <button
                type="submit"
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors font-medium flex items-center justify-center ${
                   "opacity-75 cursor-wait"
                }`}
                // disabled={isRegistering}
              >
                {
                   "Register for the Masterclass"}
              </button>
            </div>

            <p className="mt-4 text-sm text-center text-gray-500">
              Limited seats available
            </p>

            <div className="pt-6 mt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    Reg Fee:
                  </div>
                </div>
                <p className="font-bold text-gray-900">
                  $3{" "}
                  <span className="font-normal text-gray-400 line-through">
                    $20
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div id="enquiry">
            {!isMessageSent ? (
              <div className="p-6 bg-white border border-gray-200 shadow-sm rounded-2xl md:p-8">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
                  Have Questions?
                </h2>
                <p className="mb-6 text-gray-600">
                  Send us your enquiry or discuss how the
                  AI Literacy Masterclass can specifically benefit you or your
                  organization.
                </p>

                <form onSubmit={handleEnquiry} className="space-y-4">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="enquiry-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none "
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-email"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="enquiry-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none "
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-1 text-sm font-medium text-gray-700"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
                      placeholder="Tell us about your specific needs or questions"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 font-medium text-blue-600 transition-colors bg-white border border-blue-600 rounded-md hover:bg-gray-50"
                    >
                      Get in touch
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white border border-gray-200 shadow-sm rounded-2xl md:p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-green-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  Message Sent!
                </h3>
                <p className="mb-6 text-gray-600">
                  Thank you for your interest! Our team will contact you within
                  24 hours to schedule your consultation.
                </p>
                <button
                  onClick={() => setIsMessageSent(false)}
                  className="font-medium text-blue-600 hover:text-blue-700"
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
