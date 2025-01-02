import React from 'react'

function Home7() {
  return (
    <>
<div className='flex flex-col justify-center items-center text-center px-6 mt-20'>

<p className="text-xs md:text-2xl  text-[#A7A7A7]">
Impact Created
 </p>
<p className="text-lg md:text-xl font-semibold text-gray-600">
Those who have completed our course
</p>

</div>


    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-6">
   
        <div className="w-64 h-64 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/Home/review1.png"
            alt="Card 1"
            className="w-full h-full object-cover"
          />
        </div>

      
        <div className="w-64 h-64 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/Home/review2.png"
            alt="Card 2"
            className="w-full h-full object-cover"
          />
        </div>


        <div className="w-64 h-64 bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="/images/Home/review3.png"
            alt="Card 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>




</>
  )
}

export default Home7