import React from 'react'
import { AiOutlineRobot } from "react-icons/ai";

export default function Intro() {
  return (
    <div className="container flex max-w-screen-xl items-center justify-between">
      <div className="py-10">
        <h1 className="lg:text-4xl text-2xl font-bold">Yixi (Jesse) Wu</h1>
        <div className="py-5">
          <p className="dark:text-neutral-400 text-zinc-700 max-w-lg mx-auto my-2 relative lg:text-lg sm:text-base z-10">
            Hi! My name is Yixi (Jesse) Wu, a recent graduate from the University of Manitoba majoring in Computer Science. This little website is a portfolio of my past experience, skills and knowledge!
          </p>
        </div>
        
      </div>
      <div className="hidden py-10 md:block">
        <div className="flex items-center justify-center font-mono"><h1 className="dark:text-neutral-400 text-zinc-700 text-xl">I are Programmer</h1></div>
        <div className="flex items-center justify-center font-mono"><AiOutlineRobot className="h-20 w-20"/></div>
        <div className="flex items-center justify-center font-mono"><h1 className="dark:text-neutral-400 text-zinc-700 text-xl">I make computer</h1></div>
        <div className="flex items-center justify-center font-mono"><h1 className="dark:text-neutral-400 text-zinc-700 text-xl">BEEP BOOP BEEP BEEP BOOP</h1></div>
      </div>
    </div>


  )
}
