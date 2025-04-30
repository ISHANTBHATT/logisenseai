import React from "react";
import { CalendarClock, Mail, ArrowRight } from "lucide-react";

const ComingSoonContent = ({ title, subtitle, description, ctaText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for subscribing! We'll notify you when we launch.");
  };

  return (
    <div className="coming-soon-content max-w-2xl mx-auto text-center px-4 z-10 relative">
      <div className="mb-8">
        <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
          {title}
        </h2>
        <p className="text-xl md:text-2xl font-medium text-yellow-500 mb-4">
          {subtitle}
        </p>
        <p className="text-gray-100  text-lg leading-relaxed mb-8">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center mb-8">
        <div className="countdown-item mx-2">
          <div className="bg-gray-800 shadow-lg rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">12</span>
          </div>
          <p className="text-sm mt-1 text-gray-400">Days</p>
        </div>
        <div className="countdown-item mx-2">
          <div className="bg-gray-800 shadow-lg rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">07</span>
          </div>
          <p className="text-sm mt-1 text-gray-400">Hours</p>
        </div>
        <div className="countdown-item mx-2">
          <div className="bg-gray-800 shadow-lg rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">23</span>
          </div>
          <p className="text-sm mt-1 text-gray-400">Minutes</p>
        </div>
        <div className="countdown-item mx-2">
          <div className="bg-gray-800 shadow-lg rounded-lg p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">42</span>
          </div>
          <p className="text-sm mt-1 text-gray-400">Seconds</p>
        </div>
      </div>

      <div className="subscription-form bg-gray-800 rounded-lg shadow-xl p-6 transform hover:scale-105 transition-transform">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Get Notified When We Launch
        </h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <div className="flex-grow relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 bg-gray-700 text-white"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            {ctaText} <ArrowRight size={16} className="ml-1" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ComingSoonContent;
