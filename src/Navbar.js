import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full md:row-span-1 text-heading text-bold md:rounded-full font-semibold mx-auto items-center justify-center md:flex'>
            <ul className='flex flex-row justify-around items-center gap-4 md:gap-14 p-2 md:p-4 md:bg-card shadow-card-sd z-10'>
              <Link to='Naveen_portfolio'><li className='inline-block md:text-sm text-xs'>About</li></Link>
              <Link to='Education'><li className='inline-block md:text-sm text-xs'>Education</li></Link>
              <Link to='WorkEXP'><li className='inline-block md:text-sm text-xs'>Experience</li></Link>
              <Link to='Project'><li className='inline-block md:text-sm text-xs'>Projects</li></Link>
              <Link to='Contact'><li className='inline-block md:text-sm text-xs'>Contact</li></Link>
            </ul>
   </div>
  )
}

export default Navbar;