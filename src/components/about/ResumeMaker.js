import React from 'react';

const ResumeMaker = () => {
  return (
    <div className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Truskill AI Resume Maker</h1>
          
          <p className="text-gray-600">Fact - Recruiters spend an average of 10 seconds reviewing a resume. Even the average ATS score is as low as 50-55.</p>
          
          <p className="text-gray-700">Top MNCs do not review your resume manually. The higher the ATS score of your resume, the higher the chance of recruitment. The resume is the most vital part of the professional world. Our AI Resume Maker will help you achieve an ATS score of 80+ within seconds. We curate your resume and align it with specific job requirements to enhance your job application success rate. We ensure to provide high ATS score resumes with customized formats to stand out in job applications and capture recruiter attention</p>

          <ul className="space-y-3 pt-4">
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Generate a professional, applying job-specific resume in under a minute.</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Choose from a variety of industry-standard templates.</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Create Unlimited resumes for different job applications.</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1 h-1 bg-[#006241] rounded-full"/>
              <span className="text-[#006241]">Download your resume in multiple formats (PDF).</span>
            </li>
          </ul>

          <div className="mt-8">
            <p className="text-gray-900">"A good resume is a silent salesman." –</p>
            <p className="text-[#006241]">Unknown</p>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative">
          <div className="absolute left-0 -z-10 w-full h-full items-center justify-center"/>
          <div className="space-y-6">
            <img 
              src="/images/about/about_us_1.jpeg" 
              alt="Office interior"
              className="w-full rounded"
            />
            {/* <img 
              src="/images/about/about_us_1.jpeg" 
              alt="People working"
              className="w-11/12 rounded"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeMaker;
