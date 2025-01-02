import React from 'react'
import Link from 'next/link';

function Home1() {
  return (
    <div>
      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center h-auto pt-24 pb-20 px-4">
        <div className="md:w-1/2 text-center md:text-left md:pl-12">
          <p className="text-lg text-gray-700">WELCOME TO TRUSKILL ACADEMY</p>
          <h1 className="text-2xl md:text-4xl font-bold mb-6 mt-6">We focus on fostering essential skills for growth and innovation.</h1>
          <p className="text-lg text-gray-700">Our goal is to empower individuals with practical, future-ready abilities.</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-6 mt-4">
            <Link href="/courses" className="px-4 py-2 bg-[#3B9B72] text-white rounded">Explore</Link>
            <Link href="/kys" className="px-4 py-2 text-[#3B9B72] bg-white border border-[#3B9B72] rounded">Know Yourself</Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
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
