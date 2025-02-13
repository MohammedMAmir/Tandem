import { Fugaz_One } from 'next/font/google';
import React from 'react';

const fugaz = Fugaz_One({subsets: ["latin"], weight: ['400']});

export default function Button(props) {
    const { text, dark, primary, full } = props

    return (
    <button className={`rounded-full overflow-hidden border-2 
        duration-200 hover:opacity-60 border-solid lightButton `
     + (primary ? ' lightPrimeButton' : ' lightSecButton ')
     + (full ? ' Sgrid place-items-center w-full ' : ' ')} >
        <p className={'px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 ' 
            + fugaz.className}>{text}</p>
    </button>
  )
}
