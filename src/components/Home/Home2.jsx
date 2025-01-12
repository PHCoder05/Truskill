
import Link from "next/link"
function Home2() {
  return (
    <div className="flex justify-center items-center  md:px-8 lg:px-16 w-full mt-6 lg:mt-0 ">

    <div className="flex flex-col lg:flex-row w-full  shadow-lg rounded-lg overflow-hidden border-2 border-[#504c4c33]">
    
      <div className="w-full lg:w-1/2 px-2 pt-4 pb-2 bg-white">
        <p className="text-gray-600 text-lg">
          Know your self test
        </p>
        <h2 className="text-2xl font-medium mb-3 mt-3">Benchmark yourself with top product talent</h2>
        <p className="text-lg font-normal text-gray-600">
          Upraised's exclusive and free Know Your Self test assesses six skills every
          product manager should have.
        </p>
      </div>
    
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center p-4">
        <Link href="*" className=" px-2 py-2  lg:px-4 lg:py-2 bg-[#0B5E41] text-white rounded-full mb-4">Test Yourself Now</Link>
        <div className="lg:px-4 lg:py-2 bg-white text-black rounded flex space-x-2">
          <img src="Home/playbutton.png"></img>
          <p>Learn About<br></br>
          KYS in 2 mins</p>
        </div>
      </div>
    
      <div className="w-full lg:w-1/4 lg:p-8 bg-white">
        <img src="/Home/kys.jpg" alt="Image" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    
    </div>
    </div>
  )
}

export default Home2