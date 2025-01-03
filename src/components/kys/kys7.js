// src/components/kys/kys7.js
export default function KYS7() {
    return (
      <div className="bg-[#FDF7F3] py-16">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <div className="text-emerald-700 text-sm mb-3">
            What are you waiting for?
          </div>
          
          <h2 className="text-[32px] leading-tight font-semibold mb-2">
            Measure your growth potential.
          </h2>
          
          <div className="text-[32px] leading-tight font-semibold mb-8">
            Know Your Self.
          </div>
  
          <div className="flex items-center justify-center gap-4">
            <button 
              className="bg-emerald-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors"
            >
              Test Yourself, Now
            </button>
            
            <button 
              className="border border-emerald-700 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium hover:bg-emerald-50 transition-colors"
            >
              Set a Reminder
            </button>
          </div>
        </div>
      </div>
    )
  }