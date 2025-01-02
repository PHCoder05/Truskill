import React from 'react';
import { Card } from '../ui/card.js';

const CollegeAssistanceModule = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 md:p-8 bg-white">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-900 mb-6 ">
        College Assistance Module (For Institute Use)
      </h1>

      {/* Main content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left column - text content */}
        <div>
          <p className="text-sm text-gray-600 mb-6">
            Institutions using data-driven analytics see a 45% increase in student success rates.
          </p>

          <p className="text-sm text-gray-700 mb-8 leading-relaxed">
            This function enables institutes to offer personalized support and guidance to their students. It allows institutes to provide detailed reports, efficient batch management, and performance tracking. Educators can obtain valuable insights into student progress and customize their teaching for the best results.
          </p>

          {/* Bullet points */}
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Generate individual student reports that include detailed performance data
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Analyze the overall performance of the class across various test series
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Create thorough college-wide reports with just one click
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Efficiently assign students to different batches and make adjustments based on their performance
            </li>
            <li className="flex items-start">
              <span className="text-green-600 mr-2">•</span>
              Simplify student management tasks to enhance efficiency
            </li>
          </ul>
        </div>

        {/* Right column - images */}
        <div className="space-y-4">
          {/* Top image */}
          <Card className="overflow-hidden">
            <img 
              src="/images/about/about_us_1.jpeg" 
              alt="College hallway"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </Card>

          {/* Bottom image with green overlay */}
          <Card className="relative overflow-hidden">
            <img 
              src="/images/about/about_us_2.jpeg" 
              alt="Students working"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <div className="absolute inset-0 bg-green-50/40"></div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CollegeAssistanceModule;
