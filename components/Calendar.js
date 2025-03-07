import React from 'react'
import { gradients } from '@/utils'
import { baseRating } from '@/utils'

const data =  {
  "15": 2, "16": 4, "17": 1, "18": 3, "19": 5,
  "20": 2, "21": 4, "22": 1, "23": 3, "24": 5,
}

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

export default function Calendar(props) {

  const { demo } = props

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
    <div className='flex flex-col overflow-hidden gap-2 '>
      {[...Array(numRows).keys()].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='grid grid-cols-7 gap-2 '>
            {dayList.map((dayWeek, dayWeekIndex) => {
              
              // Calculate which day each date falls on
              let dayIndex = (rowIndex * 7) + dayWeekIndex 
              - (firstDayOfMonth - 1)

              // Determine which days of the first week to display
              let dayDisplay = dayIndex > daysInMonth ? false :
              (row === 0 && dayWeekIndex < firstDayOfMonth) ? false :
              true
              
              let isToday = dayIndex === today.getDate()
              
              if (!dayDisplay) {
                return (<div className='bg-white' key={dayWeekIndex} />)
              }

              let color = demo ? 
              gradients.indigo[baseRating[dayIndex]] : 
              dayIndex in data ? 
                gradients.indigo[data[dayIndex]] : 
                'white '

              return (
                <div style={{background: color}} className={`text-lg sm:text-xl border 
                  border-solid p-2 flex items-center gap-2 justify-between rounded-lg ` +
                (isToday ? 'border-indigo-400 ' : 
                  'border-indigo-100 ') + (color == 'white ' ?
                    'text-indigo-400 ' : 'text-white '
                  )}
                key={dayWeekIndex}>
                  <p>{dayIndex}</p>
                </div>
              )
            })}
          </div>
        )
      })}

    </div>
  )
}
