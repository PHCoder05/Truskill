"use client";

import React from 'react'

function page() {
const searchText=logical
    const GET_LANDING_PAGES = gql`
  query GetLandingPages($searchText: String!) {
    landingPages(filters: { blocks: { card: { heading: { contains: ${searchText} } } } }) {
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
const { loading, error, data } = useQuery(GET_LANDING_PAGES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const landingPages = data.landingPages;
  console.log(landingPages);

  return (
    <div>search</div>
  )
}

export default page