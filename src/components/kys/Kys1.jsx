import React from 'react'
import Link from 'next/link'
function kys1() {
  return (
<div>
<div className='md:flex py-5 h-auto mt-16 mb-8 justify-between'>

<div className="w-full md:w-1/2 p-5 bg-white">
  <p className="text-gray-600">
    Know your self test
  </p>
  <h2 className="text-xl md:text-2xl font-bold mb-4 mt-4">Benchmark yourself with top product talent</h2>
  <p className="text-sm md:text-base text-gray-600">
    Upraised's exclusive and free Know Your Self test assesses six skills every
    product manager should have.
  </p>
  <div className='mx-10 lg:mx-0 lg:flex mt-5 md:justify-start items-center p-4 space-y-4 md:space-y-0 '>
  <Link href="*" className=" px-2 py-2  md:px-4 md:py-2 bg-[#0B5E41] text-white rounded-full mb-8 md:mb-0">Test Yourself Now</Link>
  <div className=" md:px-4 py-2 bg-white text-black rounded flex space-x-2 md:mt-9 lg:mt-0">
          <img src="Home/playbutton.png"></img>
          <p>Learn About<br></br>
          KYS in 2 mins</p>
        </div>
  </div>
 
</div>

<div className="w-full md:w-1/2 p-3 md:p-8 bg-white">
  <img src="images/kys/kys1.png" alt="Image" className="w-full h-auto rounded-lg shadow-md" />
</div>



</div>
</div>
  )
}

export default kys1