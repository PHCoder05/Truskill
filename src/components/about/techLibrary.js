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
              Let's dive deep into truskills' highly curated collection of resources which are
              structured and designed to make you an exam master. By leveraging technology we have
              analyzed over 2,000 exam papers, pinpointing the most critical concepts and question
              types. As a result, you'll be able to focus all your energy on the most high-yield areas
              and practice strategically.
            </p>
            <ul className="text-gray-700 mb-6 space-y-2">
              <li>• 10,000+ practice questions classified in terms of difficulty, type, and exam readiness</li>
              <li>• 500+ in-depth video tutorials covering complex concepts</li>
              <li>• AI-powered recommendations for targeted study</li>
              <li>• Company-specific preparation materials to help you land your dream role</li>
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
  