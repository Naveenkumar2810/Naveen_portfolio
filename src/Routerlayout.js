import React from 'react'
import {Link,Outlet} from 'react-router-dom'


const Routerlayout = () => {
  return (
    <div className='pages-right w-full min-h-full md:grid grid-rows-12 bg-gray2 rounded-lg border border-green-600 p-3 relative'>
        <div className='md:relative w-full md:flex row-span-1 text-white-2 text-bold rounded-full font-semibold mx-auto items-center justify-center mt-3 border border-red-600 sticky bottom-0'>
          <ul className='flex flex-row justify-center items-center gap-4 md:gap-14 bg-highlight1 p-2 md:p-4 rounded-lg border-[1px] border-br '>
            <Link to='About'><li className='inline-block text-sm'>About</li></Link>
            <Link to='Education'><li className='inline-block text-sm'>Education</li></Link>
            <Link to='WorkEXP'><li className='inline-block text-sm'>Experience</li></Link>
            <Link to='Contact'><li className='inline-block text-sm'>Contact</li></Link>
          </ul>
        </div>
        <div className='w-full row-span-11 text-white-2 rounded-lg border border-white'>
          <Outlet/>
        </div>
    </div>
  )
}

export default Routerlayout;
