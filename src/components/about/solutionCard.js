// components/SolutionCards.jsx
export default function SolutionCards() {
    const solutions = [
      {
        id: 1,
        title: "Truskill Academy's Launchpad: Engineering Placement Essentials",
        description:
          "Master the foundational concepts and develop your aptitude, problem-solving abilities, and technical skills sought after by the best recruiters. Scale up with engaging self-assessments, tests, and practical skills needed to kickstart your career.",
        bgColor: "bg-green-50",
      },
      {
        id: 2,
        title: "Truskill Academy's Power Up: Mastering Advanced Skills",
        description:
          "Elevate your expertise in your chosen field (MCA, MTech, MBA) through advanced skill development, industry-relevant projects, and interview preparation tailored for postgraduate students.",
        bgColor: "bg-white",
      },
      {
        id: 3,
        title: "Truskill Academy's MBA Launchpad: The Corporate Edge",
        description:
          "Sharpen your competitive edge with this program specifically designed to empower MBA graduates with the technical skills and industry knowledge needed to land their dream jobs.",
        bgColor: "bg-green-50",
      },
      {
        id: 4,
        title: "Truskill Academy's Workforce Advantage: Empower Your Team",
        description:
          "Unlock the full potential of your teams with the Truskill advantage by tapping into our customized training solutions designed to equip executives with the skills they need to excel in their roles and drive business growth.",
        bgColor: "bg-white",
      },
    ];
  
    return (
      <div className="py-16 px-8 bg-gray-100">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">
          Solution For
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className={`p-8 rounded-lg shadow-lg border ${solution.bgColor} transition-transform transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6">
                {solution.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  