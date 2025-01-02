import React from 'react';

const PersonalisedDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Images Section - Appears second on mobile, first on desktop */}
        <div className="order-2 md:order-1 relative">
          <div className="absolute left-0 -z-10 w-full h-full " />
          <div className="space-y-6">
            <img 
              src="/images/about/office.svg" 
              alt="Office interior"
              className="w-full rounded"
            />
           
          </div>
          <div className="mt-8">
            <p className="text-gray-900 text-center">"The best way to predict your future is to create it." -</p>
            <p className="text-[#006241] text-center">Abraham Lincoln</p>
          </div>
        </div>

        {/* Text Content - Appears first on mobile, second on desktop */}
        <div className="order-1 md:order-2 space-y-6">
          <h1 className="text-3xl font-bold">Personalised Dashboard</h1>
          
          <p className="text-gray-600">Our highly tech-enabled system offers comprehensive student assistance, allowing us to understand individual strengths and</p>
          
          <p className="text-gray-600">Fact - Personalized Dashboard learning has been shown to increase student engagement by up to 70%.</p>
          
          <h2 className="text-xl text-[#0B5E41]">About,</h2>
          
          <p className="text-gray-600">Your main control center for efficient exam preparation. You have access to specially picked videos, practice questions, and mock tests to address your needs and your abilities. Stay on top of your learning, carry out performance analysis, and be successful in exams.</p>
          
          <p className="text-gray-600">to create customized strategies for maximum success.</p>
          
          <p className="text-gray-600">Our unique, one-of-a-kind model has been tested and proven to improve students' cognitive index up to three times in PI Assessments,</p>
          
          <p className="text-gray-600">making it a unique and effective solution for skill development.</p>

          <ul className="space-y-3 pt-4">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Access to 100+ hours of targeted video content</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">11,000+ practice questions categorized by difficulty and topic</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">150+ mock tests simulating real exam conditions</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Personalized progress tracking and performance analysis</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalisedDashboard;
