

function Home2() {
  return (
    <div className="flex justify-center items-center px-4 md:px-8 lg:px-16">

    <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg border-[#e9e9e900] overflow-hidden">
    
      <div className="w-full md:w-1/2 p-5 bg-white">
        <p className="text-gray-600">
          Know your self test
        </p>
        <h2 className="text-xl md:text-2xl font-bold mb-4 mt-4">Benchmark yourself with top product talent</h2>
        <p className="text-sm md:text-base text-gray-600">
          Upraised's exclusive and free Know Your Self test assesses six skills every
          product manager should have.
        </p>
      </div>
    
      <div className="w-full md:w-1/4 flex flex-col justify-center items-center p-4">
        <button className="px-4 py-2 bg-[#0B5E41] text-white rounded-full mb-4">Test Yourself Now</button>
        <button className="px-4 py-2 bg-[#3B9B72] text-white rounded">Button 2</button>
      </div>
    
      <div className="w-full md:w-1/4 p-4 md:p-8 bg-white">
        <img src="/Home/kys.jpg" alt="Image" className="w-full h-auto rounded-lg shadow-md" />
      </div>
    
    </div>
    </div>
  )
}

export default Home2