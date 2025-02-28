import React from 'react'

const months = {
  'January': 'Jan',
  'February': 'Feb',
  'March': 'Mar',
  'April': 'Apr',
  'May': 'May',
  'June': 'Jun',
  'July': 'Jul',
  'August': 'Aug',
  'September': 'Sept',
  'October': 'Oct',
  'November': 'Nov',
  'December': 'Dec',
}

const today = new Date()
const dayList = ['Sunday', 'Monday', 
  'Tuesday', 'Wednesday', 'Thursday',
  'Friday', 'Saturday']

export default function Calendar() {
  //Initialize a year
  const year = 2025
  const month = 'February'

  // Get the first day of every month
  const thisMonth = new Date(year, Object.keys(months).indexOf(month), 1)
  const firstDayOfMonth = thisMonth.getDay()

  // Get the last day of every month
  const daysInMonth = new Date(year, 
    Object.keys(months).indexOf(month) + 1, 0).getDate()

  // Find out how many days there are in every month
  const daysToDisplay = firstDayOfMonth + daysInMonth

  // Get the number of weeks in every month
  const numRows = (Math.floor(daysToDisplay / 7)) + 
  (daysToDisplay % 7 ? 1 : 0)

  return (
    <div className='flex flex-col overflow-hidden gap-1'>
      {[...Array(numRows).keys()].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='grid grid-cols-7 gap-1'>
            {dayList.map((dayWeek, dayWeekIndex) => {
              
              // Calculate which day each date falls on
              let dayIndex = (rowIndex * 7) + dayWeekIndex 
              - (firstDayOfMonth - 1)

              // Determine which days of the first week to display
              let dayDisplay = dayIndex > daysInMonth ? false :
              (row === 0 && dayWeekIndex < firstDayOfMonth) ? false :
              true
              
              let isToday = dayIndex === today.getDate()
              console.log(isToday)
              
              if (!dayDisplay) {
                return (<div className='bg-white' key={dayWeekIndex} />)
              }


              return (
                <div className={`text-xs sm:text-sm border border-solid
                p-2 flex items-center gap-2 justify-between rounded-lg` +
                (isToday ? 'border-[var(--light-prime)]' : 
                  'border-[var(--light-secondary)]') + (color == 'white' ?
                    'text-[var(--light-prime)]' : 'text-white'
                  )}
                key={dayWeekIndex}>
                  wwdqwq
                </div>
              )
            })}
          </div>
        )
      })}

    </div>
  )
}
