import React from 'react'

function Home7() {
  return (
    <>
    
<div className="flex flex-col justify-center items-center text-center px-6 mt-20">
  <p className="text-xs md:text-lg text-[#A7A7A7] ">
  Impact Created
  </p>
  <div className='my-6'>
  <p className="text-xl md:text-3xl font-bold text-black">
  Those who have completed our course
 
  </p>
 
  </div>
  </div>

   
<div className="flex justify-center items-center  bg-gray-100 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Testimonial 1 */}
        <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/Home/review1.png" // Replace with your image URL
            alt="User 1"
            className="w-full h-full object-cover"
          />
         
        </div>

        {/* Testimonial 2 */}
        <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/Home/review2.png" 
            alt="User 2"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
           
          </div> */}
        </div>

        {/* Testimonial 3 */}
        <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg">
          <img
            src="/Home/review3.png" // Replace with your image URL
            alt="User 3"
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <p className="text-white text-center px-4 text-sm">
            
            </p>
          </div> */}
        </div>
      </div>
    </div>






</>
  )
}

export default Home7