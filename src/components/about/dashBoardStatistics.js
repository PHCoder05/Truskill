'use client'
import React, { useState } from "react";

const statisticsImages = [
  "/images/about/about_us_1.jpeg", // Replace with your first image path
  "/images/about/about_us_2.jpeg", // Replace with your second image path
  "/images/about/about_us_1.jpeg", // Replace with your third image path
];

const DashboardStatistics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? statisticsImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === statisticsImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-16 bg-[#FFFFFF]">
      {/* Dashboard Preview Section */}
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-center text-3xl  text-gray-800 mb-8 font-poppins font-semibold">
          Preview of Our Dashboard
        </h2>
        <div className="flex justify-center gap-6 flex-wrap">
          <img
            src="/images/about/dashboard.png"
            alt="Dashboard 1"
            className="rounded-lg shadow-md w-full sm:w-1/3"
          />
          <img
            src="/images/about/about_us_2.jpeg"
            alt="Dashboard 2"
            className="rounded-lg shadow-md w-full sm:w-1/3"
          />
          <img
            src="/images/about/about_us_1.jpeg"
            alt="Dashboard 3"
            className="rounded-lg shadow-md w-full sm:w-1/3"
          />
        </div>
      </div>

      {/* Statistics Section */}
      <div className="container mx-auto px-4 lg:px-20 mt-16">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">
          Statistics
        </h2>
        <div className="relative flex justify-center items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          {/* Statistics Image */}
          <img
            src={statisticsImages[currentIndex]}
            alt={`Statistics ${currentIndex + 1}`}
            className="rounded-lg shadow-md w-full sm:w-2/3"
          />

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 bg-white border border-gray-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatistics;
