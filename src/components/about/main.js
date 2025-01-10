import React from 'react'

const main = () => {
    return (
<div className="min-h-screen bg-[#C3F2E5] bg-hero-pattern bg-cover bg-blend-lighten mt-20">    <main className="max-w-4xl mx-auto px-4 py-12 ">
      <div className="text-center space-y-8">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-wider font-work font-regular ">ABOUT US</p>
          <div className="flex justify-center">
            <div className="w-12 h-px bg-gray-400 my-4"></div>
          </div>
        </div>
        <h1 className="text-4xl  text-gray-800  font-poppins font-semibold">

          <span>TruSkill Academy</span>
          <span className="text-emerald-600 font-poppins font-semibold"> is your valuable partner for</span>
          <br />
          <span>Campus </span>
          <span className="text-emerald-600 font-poppins font-semibold" >Placements </span>
          <span>Training.</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        We transform student potential into professional excellence by providing the best campus placement training programs and skill enhancements along with professional career guidance.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="space-y-4">
            <h2 className="text-4xl font-large  text-gray-800 font-poppins font-semibold">Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to cultivate critical thinking, problem-solving, creativity, 
              and effective communication skills in our students. Through our unique 
              coursework, expert instructions, and best-in-class facilities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-large text-gray-800 font-poppins font-semibold">Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower every student to achieve their full potential in this 
              competitive and contemporary world by providing thorough 
              guidance and support.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
    );
};

export default main