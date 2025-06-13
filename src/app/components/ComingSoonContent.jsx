import React from "react";
import { CalendarClock, Mail, ArrowRight } from "lucide-react";

const ComingSoonContent = ({ title, subtitle, description, ctaText }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert("Thank you for subscribing! We'll notify you when we launch.");
  };

  return (
    <div className="coming-soon-content w-full mx-auto text-center px-4 z-10 relative flex justify-between ">
      <div className="mb-8 flex-1">
        <h2 className="w-2xl font-extrabold text-4xl md:text-5xl lg:text-7xl mb-2 text-neutral-800">
          {title}
        </h2>
      </div>

      <div className="mt-20">
        <p className="text-xl md:text-2xl text-left font-medium text-neutral-800 mb-4">
          {subtitle}
        </p>
        <p className="max-w-md text-neutral-500 text-left  leading-relaxed mb-8 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ComingSoonContent;
