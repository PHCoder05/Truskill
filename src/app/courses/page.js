"use client";

import { gql, useQuery } from "@apollo/client";
import Card from "@/src/components/Card/Card";

// GraphQL Query
const GET_LANDING_PAGES = gql`
  query {
    landingPages {
      blocks {
        ... on ComponentBlocksRow {
          card {
            image {
              url
            }
            heading
            description
            duration
            category
            rating
            reviews
            price
            slug
          }
        }
      }
    }
  }
`;

const Course = () => {
  const { loading, error, data } = useQuery(GET_LANDING_PAGES);

  // Debugging output
  console.log("Loading:", loading);
  console.log("Error:", error);
  console.log("Data:", data);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Handle fetched data
  const landingPages = data?.landingPages || [];

  if (!landingPages.length) {
    return <div>No courses available</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold text-center text-black mt-28">
        Start Your Journey with our Courses
      </h1>

      <div className="max-w-7xl mx-auto mt-8 px-4">
        <input
          type="text"
          placeholder="Search for a course..."
          className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 p-3 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-[#3FC89E] focus:border-[#3FC89E] transition duration-200"
        />
      </div>

      <section className="p-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {landingPages.map((page, pageIndex) =>
              page.blocks?.map((block, blockIndex) =>
                block.card?.map((cardItem, cardIndex) => (
                  <Card
                    key={`${pageIndex}-${blockIndex}-${cardIndex}`}
                    cardItem={cardItem}
                  />
                ))
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Course;
