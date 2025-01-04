'use client'
import React, { useState } from "react";

const faqData = [
  { question: "Who is this community for?", answer: "This community is for ... (answer here)." },
  { question: "What are the most successful placements?", answer: "The most successful placements are ... (answer here)." },
  { question: "How do I get more details about the upcoming courses?", answer: "To get details, ... (answer here)." },
  { question: "What are the popular courses?", answer: "Popular courses include ... (answer here)." },
];

const logos = [
  "/images/about/logo1.svg", // Replace with your logo paths
  "/images/about/logo2.svg",
  "/images/about/logo3.svg",
  "/images/about/logo3.svg",
  "/images/about/logo3.svg",
  "/images/about/logo3.svg",
  "/images/about/logo3.svg",
  "/images/about/logo4.svg",
  "/images/about/logo4.svg",
  // "/images/about/logo5.svg",
  "/images/about/logo6.svg",
  "/images/about/logo6.svg",
  "/images/about/logo1.svg",
  "/images/about/logo2.svg",
];

const FAQWithScrollingLogos = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-[#FFFFFF]">
      {/* Trusted Logos Section */}
      <div className="container mx-auto px-4 lg:px-20 mb-16">
        <p className="text-center text-lg text-gray-500 mb-4 font-poppins font-semibold">Trusted by teams at</p>
        <div className="overflow-hidden relative">
          <div
            className="flex space-x-12 animate-scroll"
            style={{ animation: "scroll 10s linear infinite" }}
          >
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index}`}
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Can't find what you are looking for?
        </h2>
        <h3 className="text-4xl font-bold text-green-600 mb-8">Frequently Asked Questions.</h3>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-medium text-gray-800">
                  {faq.question}
                </h4>
                <span className="text-gray-500">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes for Scrolling */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          display: inline-flex;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
};

export default FAQWithScrollingLogos;
