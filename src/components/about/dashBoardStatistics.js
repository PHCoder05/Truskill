'use client'
import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Home() {
  const images = [
    '/images/about/1.png',
    '/images/about/2.png',
    '/images/about/3.png',
    '/images/about/1.png',
    '/images/about/2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Default middle index

  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => {
      setCurrentIndex(next); // Update the current index when the slide changes
    },
    prevArrow: (
      <div className="slick-arrow slick-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-3xl text-gray-700 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <FaChevronLeft />
      </div>
    ),
    nextArrow: (
      <div className="slick-arrow slick-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-3xl text-gray-700 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
        <FaChevronRight />
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };

  return (
    <div className="p-6 bg-[#f9f9f9] overflow-x-hidden">
      <h1 className="text-3xl font-semibold text-center mb-10 text-gray-800">Preview of Our Dashboard</h1>
      <div className="relative w-full max-w-6xl mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center items-center">
              <div
                className={`transition-all duration-500 ease-in-out transform ${
                  index === currentIndex
                    ? 'scale-110 rotate-2 shadow-xl border-4 border-indigo-500'
                    : 'scale-90'
                }`} // Apply larger scale and shadow to the center image
              >
                <Image
                  src={image}
                  alt={`image-${index}`}
                  width={350}
                  height={350}
                  className="max-w-full object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
