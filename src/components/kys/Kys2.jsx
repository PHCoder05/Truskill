import React from 'react'
import Link from 'next/link'
function Kys2() {
  return (
    <div className="lg:flex py-8 lg:justify-center space-y-5 lg:space-y-0">
 
 {/* <div className=" lg:w-1/3 mx-4 p-6 bg-[#F8F8F8] rounded-lg shadow-md">
        <div className='space-y-2 mb-16'>
        <p className="text-[#0B5E41] text-sm font-semibold">Why should you take the KYS test?</p>
        <p className="text-[#4E4E4E] text-2xl font-semibold  font-poppins">Identify your strengths &
        blindspots</p>
        <p className="text-black text-base mb-60">Understand which product skills you haveand take roles suited to your strengths. Build
    your confidence and perform well.</p>
    </div>
   
      <div className="px-3 py-2 bg-white text-[#0B5E41] rounded-full text-center mb-1 border-2 border-[#0B5E41]">
  <Link href="*" className="text-[#0B5E41] ">
    See Sample Skill Result
  </Link>
</div>

      </div> */}
 
  <div className="lg:w-1/3 mx-4 p-6 bg-[#F8F8F8] rounded-lg shadow-md flex flex-col justify-between">
    {/* Content Section */}
    <div className="space-y-2">
      <p className="text-[#0B5E41] text-sm font-semibold">
        Why should you take the KYS test?
      </p>
      <p className="text-[#4E4E4E] text-2xl font-semibold font-poppins">
        Identify your strengths & blindspots
      </p>
      <p className="text-black text-base">
        Understand which product skills you have and take roles suited to your strengths. Build
        your confidence and perform well.
      </p>
    </div>

    {/* Link Section */}
    <div className="mt-5 lg:mt-auto px-3 py-2 bg-white text-[#0B5E41] rounded-full text-center border-2 border-[#0B5E41]">
      <Link href="*" className="text-[#0B5E41]">
        See Sample Skill Result
      </Link>
    </div>
  </div>

 
     <div className="lg:w-1/3 mx-4 p-6 bg-[#F8F8F8] rounded-lg shadow-md">
     <div className='space-y-2'>
        <p className="text-[#0B5E41] text-sm font-bold">Why should you take the KYS test?</p>
        <p className="text-[#4E4E4E] text-2xl font-semibold font-poppins">Identify your strengths &
        blindspots</p>
        <p className="text-black text-base mb-60">Understand which product skills you haveand take roles suited to your strengths. Build
    your confidence and perform well.</p>
    </div>
    <div className='content-center flex justify-center'>
      <img src='images/kys/kys3.png' className='mx-auto'></img>
    </div>

    </div>

    <div className="lg:w-1/3 mx-4 p-6 bg-[#FFF8F2] rounded-lg shadow-md">
    <p className="text-[#0B5E41] text-sm font-bold">Why should you take the KYS test?</p>
<div className='mt-3 space-y-7'>
        <div className="flex items-start space-x-2">
          <img src='/images/kys/icon1.png'></img>
          <div>
            <p className="text-[#A7A7A7] text-base">Text Format</p>
            <p className="text-black font-semibold text-lg">49 Questions </p>
          </div>
        </div>
        <div className="flex items-start  space-x-2">
        <img src='/images/kys/icon2.png'></img>
          <div>
            <p className="text-[#A7A7A7] text-base">Question Format</p>
            <p className=" text-black  font-semibold text-lg">Case Studies as MCQ's</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
        <img src='/images/kys/icon3.png'></img>
          <div>
            <p className="text-[#A7A7A7] text-base">Duration </p>
            <p className=" text-black  font-semibold text-lg">50 minutes</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
        <img src='/images/kys/icon4.png'></img>
          <div>
            <p className="text-[#A7A7A7]text-base">Level</p>
            <p className=" text-black  font-semibold text-lg">Beginner as well as
            Intermediate </p>
          </div>
        </div>
        </div>
      </div>
  </div>


  )
}

export default Kys2