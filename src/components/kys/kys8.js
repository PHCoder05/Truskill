"use client";

import { useState } from "react";

const faqs = [
  { question: "What skills are tested in the KYS test?", answer: "The KYS test assesses coding, aptitude, and analytical skills." },
  { question: "What is the format of the KYS test?", answer: "The test consists of multiple-choice and coding questions." },
  { question: "How should I prepare for the KYS test?", answer: "Practice coding challenges and brush up on core concepts." },
  { question: "How long is the KYS test?", answer: "The test duration is approximately 2 hours." },
  { question: "What happens if I perform well in the KYS test?", answer: "You may receive offers for advanced programs or job interviews." },
  { question: "How many times can I take the KYS test?", answer: "You can attempt the test once every 6 months." },
  { question: "What are the charges to take the KYS test?", answer: "The test is free of charge for the first attempt." },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4">
          Frequently Asked <span className="text-green-600">Questions</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Can't find what you're looking for?{" "}
          <a href="/chat" className="text-blue-500 underline hover:text-blue-700">
            Chat With Us
          </a>
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full border border-green-600 text-green-600 text-xl font-bold transition-transform ${
                    activeIndex === index ? "rotate-0" : ""
                  }`}
                >
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
    </div>
  );
}
