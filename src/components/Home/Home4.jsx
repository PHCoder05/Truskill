import React from 'react'

function Home4() {
  return (

<div className="mt-10 flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-10">

{/* Left Section: Without Truskill */}
<div className="flex flex-col items-center w-full max-w-md p-6 rounded-lg space-y-10">
  <button className="mb-4 px-6 py-2 text-black rounded-full border-4">
    Without Truskill
  </button>
  <img
    src="/Home/Home2.png"
    alt="Without Truskill"
    className="w-full h-auto mb-4 rounded-lg"
  />
  <ol className="list-disc pl-5 text-black space-y-3 text-lg">
    <li>Information Overload with No Structure & Direction, makes you Overwhelmed.</li>
    <li>No tool to Track Progress and Set Goals.</li>
    <li>Lack of Required modern Tech Solution.</li>
    <li>All these make the already tough even more, tougher.</li>
  </ol>
</div>

{/* Right Section: With Truskill */}
<div className="flex flex-col items-center w-full max-w-md p-6  rounded-lg space-y-10">
  <button className="mb-4 px-6 py-2 bg-black text-white rounded-full border-4">
    With Truskill
  </button>
  <img
    src="/Home/Home3.png"
    alt="With Truskill"
    className="w-full h-auto mb-4 rounded-lg"
  />
  <ol className="list-disc pl-5 space-y-3 text-black text-lg">
    <li>Lacking direction? Stuck with a random study plan that's not working?</li>
    <li>Unlock Truskill as your True Companion.</li>
    <li>Grow faster & head toward the goal in a real demonstrated manner.</li>
  </ol>
</div>

</div>

  )
}

export default Home4