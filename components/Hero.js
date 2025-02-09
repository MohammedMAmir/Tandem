import React from 'react'
import { Fugaz_One } from 'next/font/google';

const fugaz = Fugaz_One({
  subsets: ["latin"], weight: ['400'],
});

export default function Hero() {
  return (
    <div className='py-10 sm:py-14 md:py-20'>
      <h1 className={'text-5xl sm:text-6xl md:textxl text-center ' + fugaz.className}><span className='textGradient '>Tandem</span> keeping partners in sync, <span className='textGradient '>no matter the distance</span></h1>
    </div>
  )
}
