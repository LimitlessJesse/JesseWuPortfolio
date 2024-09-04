import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams";

export default function page() {
  return (
    
      <div className="min-h-screen">
        <Navbar />
        <BackgroundBeamsWithCollision>
          <div className="max-w-7xl mx-auto">
          <Intro />
        </div>
        </BackgroundBeamsWithCollision>       
      </div>
    
  )
}
