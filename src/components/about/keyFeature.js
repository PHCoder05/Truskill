import React from "react";

const features = [
  {
    id: 1,
    title: "Offline + Online Integration",
    description:
      "Transforming Education through Online Integration. Thanks to online integration, reaching out to students in need has never been easier...",
  },
  {
    id: 2,
    title: "Assessment and Monitoring",
    description:
      "Students can assess their knowledge with our testing system that offers assessments in three levels of difficulty - easy, moderate, and difficult...",
  },
  {
    id: 3,
    title: "Structured Training Approach",
    description:
      "Our training program is unique and we are proud to share that it has undergone testing and evaluation over the years...",
  },
  {
    id: 4,
    title: "Continuous Assessment Framework",
    description:
      "Transforming Education through Online Integration. Thanks to online integration, reaching out to students in need has never been easier...",
  },
  {
    id: 5,
    title: "College-tailored Programme",
    description:
      "A pre-assessment process is used to evaluate students based on different parameters, identifying areas of the course that require more emphasis...",
  },
  {
    id: 6,
    title: "Doubt Solving and Support",
    description:
      "The community section with both video or material allows learners to ask questions, and faculty will respond promptly...",
  },
];

const KeyFeatures = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-20">
        <h2 className="text-center text-3xl font-semibold text-gray-800 mb-12">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-green-600">
                  {feature.id.toString().padStart(2, "0")}
                </div>
                <h3 className="ml-4 text-xl font-bold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <a
                href="#"
                className="text-green-600 font-medium hover:underline"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
