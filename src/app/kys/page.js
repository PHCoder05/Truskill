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
        <Kys4/>

      
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
