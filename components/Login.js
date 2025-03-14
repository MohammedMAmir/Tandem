'use client'
import React, { useState } from 'react'
import { Fugaz_One, Sansita_Swashed } from 'next/font/google'
import Button from './Button';

const fugaz = Fugaz_One({
  subsets: ["latin"], weight: ['400'],
});

const sansita = Sansita_Swashed({
  subsets: ["latin"], weight: ['700'],
});


export default function Login() {
  return (
    <div className='flex flex-col flex-1 justify-center
    items-center gap-6'>
      <h3 className={"text-4xl sm:text-5xl md:text-6xl " + 
        sansita.className}>Log In / Register</h3>
      <p>You're one step away from being in-step everyday!</p>
      <input className='w-full max-w-[400px] mx-auto px-3 py-2
      sm:py-3 lightInput duration-200' 
      placeholder='Email'/>
      <input className='w-full max-w-[400px] mx-auto px-3 py-2
      sm:py-3 lightInput duration-200' 
      placeholder='Password' type='password'/>
      <div className='max-w-[400px] w-full mx-auto '>
        <Button text="Login" full/>
      </div>
      <p className="text-center">Don't have an account? <span className="text-[var(--light-prime)]">Sign up</span></p>
    </div>
  )
}
