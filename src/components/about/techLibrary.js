// components/TechLibrary.js
export default function TechLibrary() {
    return (
      <div className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h1 className="text-3xl font-bold mb-4">Tech Powered Resource Library</h1>
            <p className="text-sm text-gray-600 mb-6">
              Fact - Students with structured plan and direction have a 3 times higher Success Rate.
            </p>
            <p className="text-gray-700 mb-4">
            Success rate depends on a structured plan. Our tech-powered resource library aims to provide such structured plans to our students. With our curated learning resources and intelligent study strategy, we aim to provide a 3X success rate with student-focused improvement and a data-driven learning approach.
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• 2000+ exam paper analysis</li>
              <li>• High-yield learning strategy</li>
              <li>• Precision study resources</li>
              <li>• Technology-enabled learning</li>
              <li>•	Focused exam preparation</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              "Tell me and I forget. Teach me and I remember. Involve me and I learn." -{" "}
              <span className="font-medium text-green-600">Benjamin Franklin</span>
            </p>
          </div>
  
          {/* Right Section */}
          <div className="relative">
            {/* <div className="absolute bg-green-100 w-64 h-64 -top-4 -left-8 rounded-lg"></div> */}
            <div className="order-2 md:order-1 relative">
          <div className="absolute left-0 -z-10 w-full h-full " />
          <div className="space-y-6">
            <img 
              src="/images/about/office.svg" 
              alt="Office interior"
              className="w-50 rounded"
            />
           
          </div>
          <div className="mt-8">
            <p className="text-gray-900 text-center">"The best way to predict your future is to create it." -</p>
            <p className="text-[#006241] text-center">Abraham Lincoln</p>
          </div>
        </div>
          </div>
        </div>
      </div>
    );
  }
  