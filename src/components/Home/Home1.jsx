import React from 'react'
import Link from 'next/link';

function Home1() {
  return (
    <div>
      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between items-center mt-24 lg:mt-12">
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-12 h-1/2">
          <p className="text-lg text-gray-700">WELCOME TO TRUSKILL ACADEMY</p>
          <h1 className="text-4xl lg:text-5xl font-medium mb-6 mt-6">We focus on fostering essential skills for growth and innovation.</h1>
          <p className="text-xl text-gray-700 font-normal">Our goal is to empower individuals with practical, future-ready abilities.</p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-4 mt-4">
            <Link href="/courses" className="px-2 md:px-4 py-1 md:py-2 bg-[#3B9B72] text-white rounded text-lg">Explore Courses</Link>
            <Link href="/kys" className="px-2 md:px-4 py-1 md:py-2 text-[#3B9B72] bg-white border border-[#3B9B72] rounded text-lg">Know Your self</Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 mt-2 md:mt-6 lg:mt-0 p-11">
          <img
            src='/Home/Home1.png'
            alt="Description"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
   

 


  )
}

export default Home1;
