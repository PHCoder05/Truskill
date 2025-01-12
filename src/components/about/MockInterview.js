export default function MockInterview() {
  return (
    <div className="bg-[#FFFFFF] px-6 md:px-8 py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 items-center">
        {/* Right Section (Text Content) */}
        <div className="space-y-6 p-8 bg-white rounded-lg ">
          <h1 className="text-3xl md:text-3xl font-poppins font-semibold text-gray-800 mb-4 tracking-wide">
            AI Enabled Real Mock Interview
          </h1>
          <p className="text-gray-600 text-sm md:text-base mb-4 font-medium">
            Fact - 70%: The best way to prepare for an interview is to practice, practice, practice.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
          It's true when they say, “Practice makes a man perfect.” The key to acing an interview is practice. With our AI-powered mock interviews, we provide diverse and realistic interview simulations along with an interview preparation platform. With an adaptive mock interview platform, it will help students work on their soft skills through regular feedback-driven interview training. Students will build their confidence through practice interviews and refine their answers for better interview outcomes.
          </p>
          
          {/* List of Features with Icons */}
          <ul className="list-none space-y-6 text-gray-700 mb-6">
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4H5v-6h4V3l7 7-7 7v-4H9z"></path></svg>
              <span>Experience realistic interview scenarios tailored to your profile and job requirements.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-4H5v-6h4V3l7 7-7 7v-4H9z"></path></svg>
              <span>Receive instant feedback and ratings on your answers and overall performance.</span>
            </li>
            <li className="flex items-start space-x-3">
              <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M10 14h2v4h-2zm0 0V6m2 8V6"></path></svg>
              <span>Practice with a diverse range of interviews.</span>
            </li>
          </ul>

          <p className="text-gray-600 text-sm italic">
            "The best way to prepare for an interview is to practice, practice, practice."
          </p>
        </div>

        {/* Left Section (Image) */}
        <div className="relative flex flex-col items-center md:order-first">
          {/* Background Shapes */}
          <div className="absolute top-0 left-0 bg-gradient-to-r from-purple-100 to-blue-50 w-72 h-72 rounded-full -z-10 transform translate-y-12 translate-x-12"></div>
          <div className="absolute bottom-0 right-0 bg-gradient-to-r from-purple-100 to-blue-50 w-72 h-72 rounded-full -z-10 transform -translate-y-12 -translate-x-12"></div>

          {/* Image with Hover Effect */}
          <div className="space-y-6 md:space-y-0">
            <img
              src="/images/about/about_us_2.jpeg"
              alt="Office"
              className="w-full max-w-lg rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
