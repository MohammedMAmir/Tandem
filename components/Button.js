import { Fugaz_One, Sansita_Swashed } from "next/font/google";
import React from "react";

const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Button(props) {
  const { text, dark, primary, full, clickHandler } = props;

  return (
    <button
      onClick={clickHandler}
      className={
        `rounded-full overflow-hidden border-2 
        duration-200 hover:opacity-60 border-solid lightButton ` +
        (primary ? " lightPrimeButton" : " lightSecButton ") +
        (full ? " Sgrid place-items-center w-full " : " ")
      }
    >
      <p
        className={
          "px-6 sm:px-10 whitespace-nowrap py-2 sm:py-3 " + sansita.className
        }
      >
        {text}
      </p>
    </button>
  );
}
