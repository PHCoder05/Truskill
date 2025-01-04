'use client'

import KYSTestExplainer from '@/src/components/kys/kys5'
import TestimonialsSection from '@/src/components/kys/kys6'
import React from 'react'
import Kys1 from '@/src/components/kys/Kys1'
import Kys2 from '@/src/components/kys/Kys2'
import Kys3 from '@/src/components/kys/Kys3'
import Kys4 from '@/src/components/kys/Kys4'
import KYS7 from '@/src/components/kys/kys7'
import FAQPage from '@/src/components/kys/kys8'

const Kys = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-20 lg:px-40">
        {/* Section 1 */}
        <Kys1 />
        <Kys2 />
        <Kys3 />
        {/* Section 2 */}
        <div className="md:flex py-5 h-auto my-24 justify-between">
          <div className="w-full md:w-1/2 p-5">
            <p className="text-gray-600">
              Know your self test
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4 mt-4">
              Benchmark yourself with top product talent
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Upraised's exclusive and free Know Your Self test assesses six skills every
              product manager should have.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-3 md:p-8">
            <img src="/images/kys/kys1.svg" alt="Image" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
        {/* Section 3 */}
        <div className="md:flex py-5 h-auto my-24 justify-between">
          <div className="w-full md:w-1/2 p-5">
            <p className="text-gray-600">
              Know your self test
            </p>
            <h2 className="text-xl md:text-2xl font-bold mb-4 mt-4">
              Benchmark yourself with top product talent
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Upraised's exclusive and free Know Your Self test assesses six skills every
              product manager should have.
            </p>
          </div>
          <div className="w-full md:w-1/2 p-3 md:p-8">
            <img src="/images/kys/kys2.png" alt="Image" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <KYSTestExplainer />
        <TestimonialsSection />
        <KYS7 />
        <FAQPage />
      </div>
    </div>
  )
}

export default Kys