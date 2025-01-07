"use client";

import Link from "next/link";

const Card = ({ cardItem }) => {
  return (
    <div className="card bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Card Image */}
      {cardItem.image && (
        <img
          src={`http://localhost:1337${cardItem.image.url}`}
          alt={cardItem.heading}
          className="w-full h-40 object-cover rounded-t-lg p-4"
        />
      )}

      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-800">{cardItem.heading}</h3>

        {/* Additional Fields */}
        {cardItem.duration && (
          <p className="text-gray-700 mt-2">
            <strong>Duration:</strong> {cardItem.duration}
          </p>
        )}
        {cardItem.rating && (
          <p className="text-gray-700 mt-2">
            <strong>Rating:</strong> {cardItem.rating}
          </p>
        )}
        {cardItem.reviews && (
          <p className="text-gray-700 mt-2">
            <strong>Reviews:</strong> {cardItem.reviews}
          </p>
        )}
        {cardItem.price && (
          <p className="text-gray-700 mt-2">
            <strong>Price:</strong> ${cardItem.price}
          </p>
        )}
 {cardItem.description && (
          <p className="text-gray-700 mt-2">
            <strong>Price:</strong> ${cardItem.description}
          </p>
        )}

        {/* Link to Course Page */}
        {cardItem.slug && (
          <Link
            href={`/course-pages/${cardItem.slug}`}
            className="mt-4 inline-block bg-[#3FC89E] text-white py-2 px-4 rounded-md hover:bg-[#0e362a] transition-colors duration-300"
          >
            View Course
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
