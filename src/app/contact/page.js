"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  ArrowRight,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

const faqs = [
  {
    question: "How many years of experience does Cargo has?",
    answer:
      "Cargo has been operating in the shipping and logistics industry for over 15 years, providing comprehensive freight forwarding services to clients worldwide.",
  },
  {
    question: "How do you determine your rates?",
    answer:
      "Our rates are determined based on factors including shipment size, weight, destination, shipping method, and current market conditions. We provide transparent pricing with no hidden fees.",
  },
  {
    question: "What are the taxes applicable on sea freight?",
    answer:
      "Sea freight taxes vary by country and include customs duties, VAT, handling fees, and documentation charges. We help you understand all applicable taxes before shipping.",
  },
  {
    question: "How are detention and demurrage charges calculated?",
    answer:
      "Detention charges apply to container usage beyond free time, while demurrage applies to cargo remaining at port terminals. Both are calculated on a per-day basis according to shipping line tariffs.",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [focusedField, setFocusedField] = useState("");

  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="pt-20">
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left side - Contact Info */}
        <div className="w-full lg:w-1/2 bg-gray-50 flex items-center">
          <div className="px-8 md:px-16 lg:px-20 py-16">
            <p className="text-sky-500 font-semibold text-sm uppercase tracking-wider mb-6">
              CONTACT US/
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Contact us<span className="text-sky-500">.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-16 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit mauris
              donec dictum sit consequat auctor enim.
            </p>

            <div className="w-full h-px bg-gray-300 mb-16"></div>

            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Send me an email
                  </p>
                  <button className="group flex items-center text-gray-600 hover:text-sky-500 transition-colors duration-300">
                    <span className="mr-2">info@cargo.com</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mr-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">
                    Give me a call
                  </p>
                  <button className="group flex items-center text-gray-600 hover:text-sky-500 transition-colors duration-300">
                    <span className="mr-2">(414) 946 - 4530</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Contact Form */}
        <div className="w-full lg:w-1/2 bg-black flex items-center">
          <div className="px-8 md:px-16 lg:px-20 py-16 w-full">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto lg:mx-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField("")}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none py-3 text-lg transition-colors duration-300"
                    placeholder="Full Name"
                    required
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-gray-400 ${
                      focusedField === "fullName" || formData.fullName
                        ? "-top-6 text-sm text-blue-500"
                        : "top-3 text-lg"
                    }`}
                  >
                    FULL NAME
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField("")}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none py-3 text-lg transition-colors duration-300"
                    placeholder="Email Address"
                    required
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-gray-400 ${
                      focusedField === "email" || formData.email
                        ? "-top-6 text-sm text-blue-500"
                        : "top-3 text-lg"
                    }`}
                  >
                    EMAIL ADDRESS
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField("")}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none py-3 text-lg transition-colors duration-300"
                    placeholder="Phone Number"
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-gray-400 ${
                      focusedField === "phone" || formData.phone
                        ? "-top-6 text-sm text-blue-500"
                        : "top-3 text-lg"
                    }`}
                  >
                    PHONE NUMBER
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField("")}
                    className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none py-3 text-lg transition-colors duration-300"
                    placeholder="Subject"
                  />
                  <label
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-gray-400 ${
                      focusedField === "subject" || formData.subject
                        ? "-top-6 text-sm text-blue-500"
                        : "top-3 text-lg"
                    }`}
                  >
                    SUBJECT
                  </label>
                </div>
              </div>

              <div className="relative mb-12">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  rows={6}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-600 text-white placeholder-transparent focus:border-blue-500 focus:outline-none py-3 text-lg resize-none transition-colors duration-300"
                  placeholder="Please type your message here..."
                />
                <label
                  className={`absolute left-0 transition-all duration-300 pointer-events-none text-gray-400 ${
                    focusedField === "message" || formData.message
                      ? "-top-6 text-sm text-blue-500"
                      : "top-3 text-lg"
                  }`}
                >
                  PLEASE TYPE YOUR MESSAGE HERE...
                </label>
              </div>

              <button
                type="submit"
                className="group bg-sky-500 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full flex items-center transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
              >
                <span className="mr-3">SEND MESSAGE</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="relative h-screen flex ">
        {/* Left side - Content */}
        <div className="w-full lg:w-1/2 bg-black text-white flex items-center">
          <div className="px-8 md:px-16 lg:px-20">
            <p className="text-sky-500 font-semibold text-sm uppercase tracking-wider mb-6">
              OUR OFFICE/
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Visit our location.
            </h2>
            <p className="text-gray-300 text-lg mb-12 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit tempus
              fringilla enim a eget mi amet viverra lorem.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-300">newyork@cargo.com</p>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-gray-300">(415) 509 - 6995</p>
              </div>
            </div>

            <div className="w-full h-px bg-gray-700 mb-8"></div>

            <button className="group flex items-center text-white hover:text-sky-400 transition-colors duration-300">
              <span className="text-lg font-semibold mr-3">Visit now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="hidden lg:block w-1/2 relative">
          <img
            src="/images/6.jpg"
            alt="Modern office building"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sky-500 font-semibold text-sm uppercase tracking-wider mb-4">
              FAQS/
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions.
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Cursus tincidunt tempor aliquam mattis et mi fames at id venenatis
              massa at egestas egestas dignissim nisl, in ipsum sed consequat in
              viverra.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-md"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItems.includes(index) ? (
                      <ChevronDown className="w-6 h-6 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </button>

                {openItems.includes(index) && (
                  <div className="px-8 pb-6 bg-gray-50">
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
