import React, { useState } from 'react'
import {headerLogo} from '../assets/images'
import {hamburger, close} from "../assets/icons"
import { navLinks } from '../constants'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href="/">
            <img src={headerLogo}
             alt="headerLogo"
             width={130}
             height={29}/>
        </a>

        {/* Desktop navlinks */}
        <ul className="flex-1 flex justify-center items center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
               href={item.href}
               className="font-montserrat leading-normal text-lg text-slate-gray">
                {item.label}
               </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu buttons */}
        <div className='hidden max-lg:block cursor-pointer z-30' onClick={toggleMenu}>
          <img 
           src={menuOpen ? close : hamburger}
           alt={menuOpen ? "close menu" : "hamburger menu"}
           width={25}
           height={25}/>
        </div>
      </nav>

      {/* Mobile navlinks */}
      {menuOpen && (
          <ul className="fixed top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-white gap-10 z-10 ${menuOpen ? 'translate-x-0' : '-translate-x-full}">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                href={item.href}
                className="font-montserrat text-slate-gray text-lg leading-normal"
                onClick={toggleMenu}>
                  {item.label}
                </a>
              </li>
            ))}
        </ul>
      )}
    </header>
  )
}

export default Nav












