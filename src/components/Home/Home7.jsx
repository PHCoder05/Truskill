"use client"
import React from "react";

// Data object containing testimonials
const data = [
  {
    id: 1,
    image: "/Home/review1.jpg",
    alt: "User 1",
    text: "Amazing platform for upskilling!",
  },
  {
    id: 2,
    image: "/Home/review2.jpg",
    alt: "User 2",
    text: "Highly recommend for learners!",
  },
  {
    id: 3,
    image: "/Home/review3.jpg",
    alt: "User 3",
    text: "Amazing platform for upskilling!",
  },
];

function Home7() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center px-6 ">
        <p className="text-lg text-[#A7A7A7]">IMPACT CREATED</p>
        <div className="my-6">
          <p className="text-4xl font-medium text-black">
            Those who have completed our course
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
              {/* Text at the bottom */}
              <div className="absolute bottom-0 w-full bg-[#0B5E41] bg-opacity-70 text-white text-center py-1 text-sm">
               <div className="flex">
                <img src="/Home/icon.png" className="pl-3 h-5"></img>
                {item.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home7;
