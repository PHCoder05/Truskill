export default function MockInterview() {
    return (
      <div className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="relative flex flex-col items-center">
            {/* Background Shape */}
            <div className="absolute top-0 left-0 bg-purple-100 w-64 h-64 rounded-lg -z-10 transform translate-y-8 translate-x-8"></div>
            {/* Image 1 */}
            <img
              src="/images/about/about_us_2.jpeg"
              alt="Office"
              className="w-64 h-64 rounded-lg shadow-lg mb-8"
            />
            {/* Background Shape */}
            <div className="absolute bottom-0 right-0 bg-purple-100 w-64 h-64 rounded-lg -z-10 transform -translate-y-8 -translate-x-8"></div>
            {/* Image 2 */}
            <img
              src="/images/about/about_us_1.jpeg"
              alt="Analysis"
              className="w-64 h-64 rounded-lg shadow-lg mt-8"
            />
          </div>
  
          {/* Right Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              AI Enabled Real Mock Interview
            </h1>
            <p className="text-gray-600 text-sm mb-6">
              Fact - 70%: The best way to prepare for an interview is to practice,
              practice, practice.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Practice makes perfect. Our AI-powered mock interviews simulate the
              real interview experience. You can experience an interview crafted
              on your profile as well as the job you are applying for, giving you
              an opportunity to refine your answers, build confidence, and gain
              insight into your performance. Get personalized feedback and
              identify areas for improvement.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>
                Experience realistic interview scenarios tailored to your profile
                and job requirements.
              </li>
              <li>
                Receive instant feedback and ratings on your answers and overall
                performance.
              </li>
              <li>Practice with a diverse range of interviews.</li>
            </ul>
            <p className="text-gray-600 text-sm italic">
              "The best way to prepare for an interview is to practice, practice,
              practice."
            </p>
          </div>
        </div>
      </div>
    );
  }
  