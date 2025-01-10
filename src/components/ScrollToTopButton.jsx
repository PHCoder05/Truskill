'use client';

import React, { useState, useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-[#3B9B72] text-white  px-4 py-2 rounded-md  focus:outline-none focus:ring focus:ring-blue-300"
        >
         <FaLongArrowAltUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
