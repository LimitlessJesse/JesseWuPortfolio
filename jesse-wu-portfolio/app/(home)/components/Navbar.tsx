import React from 'react'
import { ModeToggle } from './ModeToggler'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-zinc-200 dark:bg-slate-900">
      <div className="container flex h-12 max-w-screen-xl items-center">
        <div className="mr-4 md:flex">
          <nav className="flex items-center gap-4 text-sm lg:gap-6 ">
            <a className="px-2 py-1 transition-colors rounded-md hover-text-foreground/80 text-forground/60 hover:bg-stone-500/50" href="/">About me</a>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <nav className="flex items-center">
            <ModeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
