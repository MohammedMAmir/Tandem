import React from 'react'

export default function Loading() {
  return (
    <div className='flex flex-col flex-1 justify-center
    items-center'>
        <i className='fa fa-solid fa-spinner fa-5x text-[var(--light-bold)] fa-pulse'></i>
    </div>
  )
}
