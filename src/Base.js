import React from 'react'
import Profile from './Profile';
import About from './About';
import Education from './Education';
import WorkExp from './WorkExp';
import Contact from './Contact';
import Min_Profile from './Min_prof';
// import Routerlayout from './Routerlayout';
import {Routes,Route} from 'react-router-dom'
import Navbar from './Navbar';


const Base = () => {
  // const router_layout=createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element={<Routerlayout/>}>
  //     <Routet path='About' element={<About/>}/>
  //     <Route path='Education' element={<Education/>}/>
  //     <Route path='WorkEXP' element={<WorkExp/>}/>
  //     <Route path='Contact' element={<Contact/>}/>
  //   </Route>
  // ))

  return (
    <div className='min-w-full w-full min-h-screen h-auto bg-smoky-black md:px-16 md:pt-16 md:pb-4 flex gap-8 flex-col md:flex-row font-poppins'>
      <div className='profile-left w-1/5 h-full bg-page border-[1px] border-br rounded-lg p-6 hidden md:block box'>
        <Profile/>
      </div>
      <div className='pages-right md:grid grid-rows-12 md:w-3/4 w-full md:min-h-full min-h-screen h-auto bg-page border-[1px] border-br md:rounded-lg flex flex-col '>
        <div className='w-full p-2 md:p-6 mt-2 h-auto md:row-span-12 md:hidden'>
          {
           window.innerWidth <770 &&<Min_Profile/>
          }
        </div> 
        <div className='W-full md:row-span-1 sticky bottom-0 border border-white justify-center py-2 md:block hidden'>
         <Navbar/>
        </div>
        <div className='W-full md:row-span-11'>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/workexp" element={<WorkExp />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
        {/* <RouterProvider router={router_layout}/> */}
      </div>
      <div className='W-full sticky bottom-0 justify-center md:relative md:hidden bg-pages py-2 px-3 bg-smoky-black'>
         <Navbar/>
      </div>
    </div>
  )
}
export default Base;


