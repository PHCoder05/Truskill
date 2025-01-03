// app/kys/page.js
"use client";
import React from 'react';
import Kys1 from '@/src/components/kys/Kys1';
import Kys2 from '@/src/components/kys/Kys2';
import Kys3 from '@/src/components/kys/Kys3';
import Kys4 from '@/src/components/kys/Kys4';
const Kys = () => {
  return (
    <div className='px-6 md:px-20 lg:px-40'>


    <Kys1/>
    <Kys2/>
     <Kys3/>
    


    </div>
  );
};

export default Kys;
