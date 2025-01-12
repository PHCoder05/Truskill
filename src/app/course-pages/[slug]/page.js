"use client";

import { gql, useQuery } from '@apollo/client';
import { useRouter,useParams } from "next/navigation"; 
import { useState,useEffect } from "react";

import Link from 'next/link';
import ScrollToTopButton from '@/src/components/ScrollToTopButton';
// const GET_COURSE_BY_SLUG = gql`
//   query GetCoursePages {
//     coursePages {
//       title
//       description
//       rating
//       price {
//         original
//       }
//       language
//       level
//       students_enrolled
//       image {
//         url
//       }
//     }
//   }
// `;



const CoursePage = () => {
  const {slug} = useParams();

  // const { loading, error, data } = useQuery(GET_COURSE_BY_SLUG, {
  //   variables: { slug },  // Pass the slug to the GraphQL query
  //   skip: !slug,  // Skip the query if slug is not available yet
  // });

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? "text-yellow-500" : "text-gray-300"}>
          ★
        </span>
      );
    }
    return stars;
  };



  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  const [facebook,setFacebook]=useState("https://www.facebook.com");
const [twitter,setTwitter]=useState("https://www.facebook.com");
const [email,setEmail]=useState("https://www.facebook.com");
const [whatsapp,setWhatsapp]=useState("https://www.facebook.com")
  useEffect(() => {
    if (!slug) return;
    const fetchCourseData = async () => {
      try {
        const response = await fetch(
          `http://localhost:1337/api/course-pages/${slug}?populate=*`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        setCourse(data.data); 
        if (data.data.share_links) {
          setFacebook(data.data.share_links.facebook || facebook);
          setTwitter(data.data.share_links.twitter || twitter);
          setEmail(data.data.share_links.email || email);
          setWhatsapp(data.data.share_links.whatsapp || whatsapp);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourseData();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // const course = data.coursePage;

  const data1 = [
    {
      id: "1",
      image: "/images/perCoursePage/icon1.jpg",
      title: "duration",
      info: course.duration,
    },
    {
      id: "2",
      image: "/images/perCoursePage/icon2.png",
      title: "course_level",
      info: course.level,
    },
    {
      id: "3",
      image: "/images/perCoursePage/icon3.png",
      title: "students_enrolled",
      info: course.students_enrolled,
    },
    {
      id: "4",
      image: "/images/perCoursePage/icon4.png",
      title: "language",
      info: course.language,
    },
    {
      id: "5",
      image: "/images/perCoursePage/icon5.png",
      title: "subtitle_language",
      info: course.subtitle_language,
    },
  ];

  console.log(course); // Log the course data to see the structure

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied to clipboard!'))
      .catch((err) => alert('Failed to copy link: ' + err));
  };
  return (
    <section className="lg:mx-44 mx-3 mb-10">
  
      
        <div className="lg:flex lg:justify-between">
           <div className="lg:w-2/3">
                   <div className="max-w-4xl mx-auto px-4 mt-24">
          <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
          <div className="mb-4">
          {course.rating && (
          <div className="flex items-center mt-2">
            {renderStars(Math.round(course.rating))} {/* Convert rating to whole number */}
          </div>
        )}
          </div>
          <div className="mb-4">
          
          <img
            src={`http://localhost:1337${course.image.formats.thumbnail.url}`}
             className='w-full p-3'
            alt={course.title}
          />
        </div>

        {course.video_preview?.url && (
  <div className="mb-4">
    <video
      src={`http://localhost:1337${course.video_preview.url}`}
      className="w-full p-3"
      controls
      alt={course.title}
    >
      Your browser does not support the video tag.
    </video>
  </div>
)}
        
          <p className="mb-2">{course.description}</p>
          
          <div className="mb-11">
         
            <h1>{course.category}</h1>
           
          </div>
       
        
          </div>
          </div>
        
         <div className="w-full lg:w-1/3 bg-white p-4 rounded-lg shadow-md border border-gray-200 mt-28 h-auto">
              {/* Course Details */}
   
              <div className=" flex  justify-center border border-gray-200 p-4">
                    <p className="text-2xl">
                     <strong>{course.price.currency}{course.price.current}</strong> 
                     </p>
                     <p className="ml-7 line-through"> {course.price.currency}{course.price.original} 
                     </p>
              </div>

               {data1.map((item)=>( <div key={item.id} className="flex p-2 justify-between">
                <div className='flex space-x-3'>
                 <div>
                    <img src={item.image}></img>
                  </div> 
                   <div>{item.title}</div>
                   </div>
                     <div>{item.info}</div>
                </div>))}
     
   

    {/* Buttons */}
                   <div className="mt-6 flex flex-col gap-4">
                       <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700  transition duration-300">
                         Add to Cart
                       </button>
                         <button className="w-full bg-[#EFFFE8] text-green-700 py-2 px-4 rounded-md hover:bg-[#cbf1ba] transition duration-300">
                           Buy Now
                      </button>
                     </div>

      {course.features &&( <div className="p-2 border border-gray-200 mt-4">
        <h2 className="text-xl mb-4">This Course Includes</h2>
        <ol className="list-disc list-inside">
        {course.features.map((feature, index) => (
          <li key={index} className="p-3 text-sm font-semibold">
            {feature.name}
          </li>
        ))}
        </ol>
      </div>
      )
}
      <div className="w-full mx-auto mt-8 px-4 flex justify-between items-center bg-gray-100 p-4 rounded-lg">
  {/* Copy Link Section */}
  <button
    className="bg-white text-black px-2 py-1 rounded-lg shadow-md hover:bg-[#366053] transition duration-200"
    onClick={handleCopyLink}
  >
    Copy Link
  </button>

  {/* Social Media Icons */}
  <div className="flex space-x-4">
    <Link
      href={facebook}
      target="_blank"
      rel="noopener noreferrer"
      
    >
      <img src='/images/perCoursePage/facebook.png'></img>
    </Link>

    <Link
      href={twitter}
      target="_blank"
      rel="noopener noreferrer"
      
    >
 <img src='/images/perCoursePage/Twitter.png'></img>
    </Link>

    <Link
      href={email}
      target="_blank"
      rel="noopener noreferrer"
     
    >
      <img src='/images/perCoursePage/Email.png'></img>
    </Link>
    <Link
      href={whatsapp}
      target="_blank"
      rel="noopener noreferrer"
     
    >
      <img src='/images/perCoursePage/Whatsapp.png'></img>
    </Link>

  </div>
</div>

    


          </div>    
          </div>
          
       

        
      <ScrollToTopButton/>
    </section>
  );
};

export default CoursePage;
