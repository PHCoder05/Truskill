import React from 'react';

const ResumeMaker = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16">
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Truskill AI Resume Maker</h1>
          
          <p className="text-gray-600">Fact - Recruiters spend an average of 10 seconds reviewing a resume. Even the average ATS score is as low as 50-55.</p>
          
          <p className="text-gray-700">Have a professional resume with Truskill AI that will personalize it to your profile and the job you are applying for, giving you an impressive first impression. You can now have an aligned resume with 80+ ATS Score under 30 seconds with good attention to kills and experiences that will capture the eye of your recruiters. You don’t need to spend much time on the format or wording since our AI ensures it will provide you with the best outcome with respect to any industry’s requirements.</p>

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