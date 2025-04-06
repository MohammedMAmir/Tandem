"use client";
import React, { useState } from "react";
import { gradients } from "@/utils";
import { baseRating } from "@/utils";
import { Fugaz_One, Sansita_Swashed } from "next/font/google";

const months = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sept",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

const today = new Date();

const dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const sansita = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["800"],
});

const sansitaLight = Sansita_Swashed({
  subsets: ["latin"],
  weight: ["600"],
});


export default function Calendar(props) {
  // Initialize Calendar State for setting selectedMonth and selectedYear
  const now = new Date();
  const currMonth = now.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(
    Object.keys(months)[currMonth],
  );
  const { demo, completeData, handleSetMood } = props;
  const [selectedYear, setSelectedYear] = useState(now.getFullYear());

  const numericMonth = Object.keys(months).indexOf(selectedMonth)
  const data = completeData?.[selectedYear]?.[numericMonth] || {}

  // Get the first day of every selectedMonth
  const thisMonth = new Date(
    selectedYear,
    Object.keys(months).indexOf(selectedMonth),
    1,
  );
  const firstDayOfMonth = thisMonth.getDay();

  // Get the last day of every selectedMonth
  const daysInMonth = new Date(
    selectedYear,
    Object.keys(months).indexOf(selectedMonth) + 1,
    0,
  ).getDate();

  // Find out how many days there are in every selectedMonth
  const daysToDisplay = firstDayOfMonth + daysInMonth;

  // Get the number of weeks in every selectedMonth
  const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

  function handleIncDecMonth(val) {
    // val can equal +1 or -1
    // if we hit boundary of months, adjust year
    if(numericMonth + val < 0) {
      // if we're in Jan set month value to 11 and decrement the year
      setSelectedYear(curr => curr - 1)
      setSelectedMonth(Object.keys(months)[Object.keys(months).length - 1])
    } else if(numericMonth + val > 11){
      // if we're in Dec set month value to 0 and increment the year
      setSelectedYear(curr => curr + 1)
      setSelectedMonth(Object.keys(months)[0])
    } else {
      setSelectedMonth(Object.keys(months)[numericMonth + val]  )
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-5 gap-4 '>
        <button onClick={() => 
          handleIncDecMonth(-1)
        }
        className='mr-auto text-xl sm:text-2xl p-2 '>
          <i className="fa fa-solid fa-chevron-left textGradientPrime duration-200 hover:opacity-60 "></i>
        </button>
        <p className={'whitespace-nowrap col-span-3 text-center capitalized textGradientPrime ' + sansita.className}>
          {selectedMonth}, {selectedYear}
        </p>
        <button onClick={() => 
          handleIncDecMonth(+1)
        } className='ml-auto text-xl sm:text-2xl p-2 '>
          <i className="fa fa-solid fa-chevron-right textGradientPrime duration-200 hover:opacity-60  "></i>
        </button>
      </div>
      <div className="flex flex-col overflow-hidden gap-2 ">
        {[...Array(numRows).keys()].map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="grid grid-cols-7 gap-2 ">
              {dayList.map((dayWeek, dayWeekIndex) => {
                // Calculate which day each date falls on
                let dayIndex =
                  rowIndex * 7 + dayWeekIndex - (firstDayOfMonth - 1);

                // Determine which days of the first week to display
                let dayDisplay =
                  dayIndex > daysInMonth
                    ? false
                    : row === 0 && dayWeekIndex < firstDayOfMonth
                      ? false
                      : true;

                let isToday = dayIndex === today.getDate();

                if (!dayDisplay) {
                  return <div className="bg-white" key={dayWeekIndex} />;
                }

                let color = demo
                  ? gradients.indigo[baseRating[dayIndex]]
                  : dayIndex in data
                    ? gradients.indigo[data[dayIndex]]
                    : "white ";

                return (
                  <div
                    style={{ background: color }}
                    className={
                      `text-lg sm:text-xl border 
                    border-solid p-2 flex items-center gap-2 justify-between rounded-lg ` +
                      (isToday ? "border-indigo-400 " : "border-indigo-100 ") +
                      (color == "white " ? "text-indigo-400 " : "text-white ")
                    }
                    key={dayWeekIndex}
                  >
                    <p>{dayIndex}</p>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
