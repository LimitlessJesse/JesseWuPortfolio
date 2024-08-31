import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'

export default function page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto">
        <Intro />
      </div>
    </div>
  )
}
