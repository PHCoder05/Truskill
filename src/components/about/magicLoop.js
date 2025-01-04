export default function MagicLoop() {
    return (
      <div className="bg-[#FFFFFF] px-8 py-12">
        <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet the <span className="text-green-600">magic loop.</span>
            </h1>
            <p className="text-gray-700 text-base md:text-lg">
              Focus on <span className="font-semibold">one core skill every week.</span>
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              Learn, apply, get feedback, improve, and repeat.
            </p>
            <p className="text-gray-600 text-sm md:text-base">
              You will have to commit to investing ~6–7 hrs of dedicated time to
              this program every week.
            </p>
          </div>
  
          {/* Right Section */}
          <div className="flex justify-center items-center">
            {/* Placeholder for the image */}
            <div className="w-full max-w-md h-96  rounded-lg flex justify-center items-center">
            <img
  src="/images/about/loop.svg"
  alt="Magic Loop"
  className="w-full max-w-md h-auto"
/>
            </div>
          </div>
        </main>
      </div>
    );
  }
  