import { Fugaz_One, } from 'next/font/google'
import React from 'react'
import Calendar from './Calendar';

const fugaz = Fugaz_One({
  subsets: ["latin"], weight: ['400'],
});

export default function Dashboard() {
  const statuses = {
    num_days: 14,
    time_remaining: '13:14:26',
    date: (new Date()).toDateString()
  }

  const moods = {
    '$*@#$': '🤬',
    'Sad': '😢',
    'Chilling': '😶',
    'Good': '😊',
    'Elated': '😁',
  }

  return (
    <div className=' flex flex-col flex-1 gap-10 sm:gap-14 md:gap-20 '>
      {/* Render date */}
      <div className='p-4 gap-4 grid grid-cols-3 bg-[var(--light-secondary)]
      text-[var(--light-prime)] rounded-lg'>
        {Object.keys(statuses).map((status, statusIndex) => {
          return(
            <div key={statusIndex} className='flex flex-col gap-1 sm:gap-2'>
              <p className = 'font-medium uppercase text-xs sm:text-sm '>{status.replaceAll('_', ' ')}</p>
              <p className={'text-base sm:text-lg ' + fugaz.className}>{statuses[status]}</p>
            </div>
          )
        })}
      </div>

      <h4 className={'text-5xl sm:text-6xl md:text-7xl text-center ' + fugaz.className}>
        How do you <span className="textGradientPrime">feel</span> today?
      </h4>

      {/* Render Mood Buttons*/}
      <div className='grid grid-cols-2 sm:grid-cols-5 gap-4 '>
        {Object.keys(moods).map((mood, moodIndex) => {
          return(<button className={`p-4 rounded-lg purpleShadow duration-200 bg-[var(--light-secondary)]
             hover:bg-[var(--light-accent)] text-center flex flex-col items-center gap-2
             `+ (moodIndex === (Object.keys(moods).length - 1) ?
           'col-span-2 sm:col-span-1' : ' ' )} key={moodIndex}>
            <p className={'text-4xl sm:text-5xl md:text-6xl ' + fugaz.className}>{moods[mood]}</p>
            <p className={'text-[var(--light-prime)] ' + fugaz.className}>{mood}</p>
          </button>)
        })}
      </div>

      <Calendar />
    </div>
  )
}
