export default function ProgressTracker() {
  return (
    <div className="bg-[#FFFFFF] px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Images Section - Appears second on mobile, first on desktop */}
        <div className="order-2 md:order-1 relative">
          <div className="absolute left-0 -z-10 w-full h-full " />
          <div className="space-y-6">
            <img 
              src="/images/about/office.svg" 
              alt="Office interior"
              className="w-auto rounded"
            />
          </div>
          <div className="mt-8">
            <p className="text-gray-900 text-center">"A goal without a plan is just a wish." - Antoine de Saint-Exupéry" -</p>
            <p className="text-[#006241] text-center">Abraham Lincoln</p>
          </div>
        </div>

        {/* Text Content - Appears first on mobile, second on desktop */}
        <div className="order-1 md:order-2 space-y-6">
          <h1 className="text-3xl font-bold">Truskill Progress Tracker</h1>
          <p className="text-gray-600 text-sm mb-6">
            Fact - Students who set goals and track their progress are 82% more
            likely to achieve their academic goals.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
          With structured plans and goals, achieving academic goals tends to increase effectively. Our progress tracker analyse overall exam preparation effectiveness by tracking performances at every stage of learning and helps students visualize strong and weak areas in their studies. It provides customized study plans with personalized learning strategies, giving each student a clear and goal-oriented study planner curated as per their learning potential.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Analyze your overall preparation.</li>
            <li>Create custom company-specific study plans.</li>
            <li>Track yourself at every point.</li>
            <li>Visualize your strong and weak areas.</li>
            <li>
              Receive a personalized action plan customized to your chosen
              company and the amount of time you can commit each week.
            </li>
          </ul>

        </div>
      </div>
    </div>
  );
}
