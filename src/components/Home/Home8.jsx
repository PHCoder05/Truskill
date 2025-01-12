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
    <div className="py-8 bg-[#FFFFFF] my-10">
      {/* Trusted Logos Section */}
      <div className="container mx-auto px-4 lg:px-20 ">
        <p className=" text-lg text-[#7A7A7A] mb-4 text-center mb-2">TRUSTED BY TEAMS AT</p>
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
