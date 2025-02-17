import { Fugaz_One } from 'next/font/google'
import React from 'react'

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
      <div className='grid grid-cols-2 md:grid-col-5 gap-4 '>
        {Object.keys(moods).map((mood, moodIndex) => {
          return(<button className={' '+ (moodIndex === (Object.keys(moods).length - 1) ? 'col-span-2' : ' ' )} key={moodIndex}>
            <p>{mood}</p>
            <p>{moods[mood]}</p>
          </button>)
        })}
      </div>
    </div>
  )
}
