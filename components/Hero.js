import React from "react";
import { Fugaz_One, Sansita_Swashed } from "next/font/google";
import Button from "./Button";
import Calendar from "./Calendar";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["800"],
});

const sansitaLight = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Hero() {
  return (
    <div className="py-4 md:py-10 flex flex-col gap-6 sm:gap-10">
      <h1
        className={
          "text-5xl sm:text-6xl md:textxl text-center " + sansitaLight.className
        }
      >
        <span className={"textGradientPrime " + sansita.className}>Tandem</span>{" "}
        keeping partners in step,
        <span className={"textGradientPrime " + sansita.className}>
          {" "}
          no matter the distance
        </span>
      </h1>
      <p
        className="text-lg sm:text-xl md:text2xl text-center w-full mx-auto 
        max-width-[600px]"
      >
        An all-in-one couple's app to share
        <span className="font-semibold"> calendars</span>,{" "}
        <span className="font-semibold">lists</span>,{" "}
        <span className="font-semibold">notes</span>,
        <span className="font-semibold"> photos</span>, and
        <span className="font-semibold"> more</span>!
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Button text="Sign Up" />
        <Button text="Login" primary />
      </div>
      <Calendar demo />
    </div>
  );
}
