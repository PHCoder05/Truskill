import React from 'react'
import Link from 'next/link'
function Kys2() {
  return (
    <div className="md:flex py-8 justify-center">
 
 <div className=" my-5 md:my-0 md:w-1/4 mx-4 p-6 bg-[#F8F8F8] rounded-lg shadow-md">
        <div className='space-y-2 mb-16'>
        <p className="text-[#0B5E41] text-xs">Why should you take the KYS test?</p>
        <p className="text-black text-lg font-bold">Identify your strengths &
        blindspots</p>
        <p className="text-black text-sm mb-60">Understand which product skills you haveand take roles suited to your strengths. Build
    your confidence and perform well.</p>
    </div>
    <div className="px-3 py-2 bg-white text-[#0B5E41] rounded-full  text-center mb-1 border-[#00B5E41]">
    <Link href="*" >See Sample Skill Result</Link>
      </div>
      </div>
 
     <div className="md:w-1/4 mx-4 p-6 bg-[#F8F8F8] rounded-lg shadow-md">
     <div className='space-y-2'>
        <p className="text-[#0B5E41] text-xs">Why should you take the KYS test?</p>
        <p className="text-black text-lg font-bold">Identify your strengths &
        blindspots</p>
        <p className="text-black text-sm mb-60">Understand which product skills you haveand take roles suited to your strengths. Build
    your confidence and perform well.</p>
    </div>
    <div>
      <img src='images/kys/kys3.png'></img>
    </div>

    </div>

    <div className="md:w-1/4 mx-4 p-6 bg-[#FFF8F2] rounded-lg shadow-md">
    <p className="text-[#0B5E41] text-xs">Why should you take the KYS test?</p>
<div className='mt-2'>
        <div className="flex items-start mb-4">
          <img src='/images/kys/icon1.png'></img>
          <div>
            <p className="text-gray-700">Text Format</p>
            <p className="text-gray-500">49 Questions </p>
          </div>
        </div>
        <div className="flex items-start mb-4">
        <img src='/images/kys/icon2.png'></img>
          <div>
            <p className="text-gray-700">Question Format</p>
            <p className="text-gray-500">Case Studies as MCQ's</p>
          </div>
        </div>
        <div className="flex items-start mb-4">
        <img src='/images/kys/icon3.png'></img>
          <div>
            <p className="text-gray-700">Duration </p>
            <p className="text-gray-500">50 minutes</p>
          </div>
        </div>
        <div className="flex items-start">
        <img src='/images/kys/icon4.png'></img>
          <div>
            <p className="text-gray-700">Level</p>
            <p className="text-gray-500">Beginner as well as
            Intermediate </p>
          </div>
        </div>
        </div>
      </div>
  </div>
  )
}

export default Kys2