import React from 'react';

const PersonalisedDashboard = () => {
  return (
    <div className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
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
          
          <p className="text-gray-600">Our student assistance, enabled by advanced technology, offers adaptive learning approaches, customized exam preparation, along with a performance tracking system that helps each student understand their best potential and strengths.</p>
          
          
          <h2 className="text-xl text-[#0B5E41]">About,</h2>
          
          <p className="text-gray-600">Each student has the main control to personalize their resources for exam preparation.</p>
          
          <p className="text-gray-600">They have video learning platforms targeting various subjects and a mock test simulation to stay updated with their preparation for campus placements and training.</p>
          
          <p className="text-gray-600">A comprehensive student learning solution also provides an engaging platform among the students.</p>
          
          <p className="text-gray-600">Our technology-enabled system has been proven to improve cognitive index up to 3X in PI assessments, unlocking student potential for success with the help of our intelligent educational support.</p>

          <ul className="space-y-3 pt-4">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">	100+ hours of video content</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">11,000+ practice questions</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">150+ mock test platform</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Difficulty-based learning</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Comprehensive exam preparation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PersonalisedDashboard;
