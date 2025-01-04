import React from 'react'
import Link from 'next/link'
function Kys2() {
  return (
    <div className="lg:flex py-8 lg:justify-center space-y-5 lg:space-y-0">
 
 <div className=" md:w-1/4 mx-4 p-6 bg-[#F8F8F8] rounded-lg shadow-md">
        <div className='space-y-2 mb-16'>
        <p className="text-[#0B5E41] text-xs">Why should you take the KYS test?</p>
        <p className="text-black text-lg font-bold">Identify your strengths &
        blindspots</p>
        <p className="text-black text-sm mb-60">Understand which product skills you haveand take roles suited to your strengths. Build
    your confidence and perform well.</p>
    </div>
    {/* <div className="px-3 py-2 bg-white text-[#0B5E41] rounded-full  text-center mb-1 border-[#00B5E41]">
    <Link href="*" >See Sample Skill Result</Link>
      </div> */}
      <div className="px-3 py-2 bg-white text-[#0B5E41] rounded-full text-center mb-1 border border-[#0B5E41]">
  <Link href="*" className="text-[#0B5E41] hover:underline">
    See Sample Skill Result
  </Link>
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
        <div className="flex items-start mb-4 space-x-2">
          <img src='/images/kys/icon1.png'></img>
          <div>
            <p className="text-[##A7A7A7] text-sm">Text Format</p>
            <p className="text-black font-bold text-sm">49 Questions </p>
          </div>
        </div>
        <div className="flex items-start mb-4 space-x-2">
        <img src='/images/kys/icon2.png'></img>
          <div>
            <p className="text-[##A7A7A7] text-sm">Question Format</p>
            <p className="text-sm text-black  font-bold">Case Studies as MCQ's</p>
          </div>
        </div>
        <div className="flex items-start mb-4 space-x-2">
        <img src='/images/kys/icon3.png'></img>
          <div>
            <p className="text-[##A7A7A7] text-sm">Duration </p>
            <p className="text-sm text-black  font-bold">50 minutes</p>
          </div>
        </div>
        <div className="flex items-start space-x-2">
        <img src='/images/kys/icon4.png'></img>
          <div>
            <p className="text-[##A7A7A7] text-sm">Level</p>
            <p className="text-sm text-black  font-bold">Beginner as well as
            Intermediate </p>
          </div>
        </div>
        </div>
      </div>
  </div>


  )
}

export default Kys2