import React from 'react';
import { Card } from '../ui/card.js';

const CollegeAssistanceModule = () => {
  return (
    <div className="bg-[#FFFFFF] px-4 py-8 md:px-8 md:py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        {/* Left column - text content */}
        <div className="space-y-6 md:ml-8"> {/* Increased left margin on larger screens */}
          <h1 className="text-3xl md:text-3xl font-poppins font-semibold text-gray-900 mb-6 tracking-wide">
            College Assistance Module (For Institute Use)
          </h1>
          <p className="text-base text-gray-600 mb-6 ">
            Institutions using data-driven analytics see a 45% increase in student success rates.
          </p>

          <p className="text-gray-700 mb-8 leading-relaxed">
            This function enables institutes to offer personalized support and guidance to their students. It allows institutes to provide detailed reports, efficient batch management, and performance tracking. Educators can obtain valuable insights into student progress and customize their teaching for the best results.
          </p>

          {/* Bullet points with hover effect */}
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-start hover:text-green-600 transition-all">
              <span className="text-green-600 mr-3">•</span>
              Generate individual student reports that include detailed performance data
            </li>
            <li className="flex items-start hover:text-green-600 transition-all">
              <span className="text-green-600 mr-3">•</span>
              Analyze the overall performance of the class across various test series
            </li>
            <li className="flex items-start hover:text-green-600 transition-all">
              <span className="text-green-600 mr-3">•</span>
              Create thorough college-wide reports with just one click
            </li>
            <li className="flex items-start hover:text-green-600 transition-all">
              <span className="text-green-600 mr-3">•</span>
              Efficiently assign students to different batches and make adjustments based on their performance
            </li>
            <li className="flex items-start hover:text-green-600 transition-all">
              <span className="text-green-600 mr-3">•</span>
              Simplify student management tasks to enhance efficiency
            </li>
          </ul>
        </div>

        {/* Right column - Image */}
        <div className="flex justify-center items-center md:mr-4"> {/* Reduced right margin */}
          <Card className="overflow-hidden max-w-md rounded-2xl shadow-xl hover:shadow-2xl transition-all">
            <img 
              src="/images/about/about_us_1.jpeg" 
              alt="College hallway"
              className="w-full max-w-full rounded-lg shadow-xl transition-transform transform hover:scale-105 duration-300"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollegeAssistanceModule;
