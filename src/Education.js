import React from 'react'
import {motion} from 'framer-motion'

const Education = () => {

  const bef_line =window.innerWidth<700?"before:content-[''] before:absolute before:top-2 before:left-[-20px]  before:h-[343px] before:h-[290px] before:w-[1px] before:bg-cus-yel":''
  const bef_dot = window.innerWidth<700?"before:content-[''] before:absolute before:top-2 before:left-[-23px]  before:h-[8px] before:w-[8px] before:bg-cus-yell before:rounded-full before:shadow-dot":''
  return (
    <div className='w-full min-h-full p-1'>
        <div className='Edu-cards w-full min-h-3/5 flex flex-row flex-wrap'>
            <motion.div initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.25,type:'spring',stiffness:120}} className='Edu-icon w-full h-full p-3 flex flex-row'>
              <span className='w-14 h-14 bg-icon p-1 rounded-lg text-cus-yell shadow-icon-sd flex justify-center items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              </span>
              <h1 className='p-4 text-2xl font-bold text-heading'>Education</h1>
            </motion.div> 
            <ul className='text-white-1 h-full flex flex-col gap-6 text-light-gray rounded-md md:w-1/2 w-full p-4 '>
              <motion.li initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.5,type:'spring',stiffness:120}} className={` sslc md:w-4/5 w-full h-full mx-auto flex flex-row relative bg-card shadow-card-sd p-4 rounded-md gap-1 justify-center`}>
                <div className='w-1/4 h-full '>
                  <span className='w-1/3 h-full text-cus-yell flex justify-center items-center mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </span>
                </div>
                <div className='w-3/4 flex flex-col text-left '>
                  <h1 className={`font-bold text-heading relative `}>Secondary School Leaving Certificate</h1>
                  <span>2015-2016</span>
                  <span>Percentage :94%</span>
                  <span>E.B.G Matric hr secondary school,Madurai</span>
                </div>
              </motion.li>
              <motion.li initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.75,type:'spring',stiffness:120}} className={` hsc md:w-4/5 w-full h-full mx-auto flex flex-row relative bg-card shadow-card-sd p-4 rounded-md gap-1 justify-center `}>
                <div className='w-1/4 h-full '>
                  <span className='w-1/3 h-full text-cus-yell flex justify-center items-center mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </span>
                </div>
                <div className='w-3/4 flex flex-col text-left '>
                  <h1 className={`font-bold text-heading relative `}>Higher Secondary Certificate</h1>
                  <span>2017-2018</span>
                  <span>Percentage :75%</span>
                  <span>E.B.G Matric hr secondary school,Madurai</span>
                </div>
              </motion.li>
              <motion.li initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1,type:'spring',stiffness:120}} className={`Graduate md:w-4/5 w-full h-full mx-auto flex flex-row relative bg-card shadow-card-sd p-4 rounded-md gap-1 justify-center`}>
                <div className='w-1/4 h-full '>
                  <span className='w-1/3 h-full text-cus-yell flex justify-center items-center mx-auto'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-24">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>
                  </span>
                </div>
                <div className='w-3/4 flex flex-col text-left '>
                  <h1 className={`font-bold text-heading relative `}>Graduate(B.E)</h1>
                  <span>2018-2022</span>
                  <span>Percentage :83%</span>
                  <span>Sethu Institute of Technology</span>
                </div>
              </motion.li>  
            </ul>
            {/* <div className='reason w-full md:w-1/2  p-6'>
              <motion.p initial={{opacity:0,scale:1,y:100}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.25,type:'spring',stiffness:120}} className='h-full md:w-3/4 text-left md:text-base font-thin text-light-gray md:leading-8 leading-7 md:p-6 p-4 mx-auto bg-card shadow-card-sd rounded-md'>
                Coming from an agricultural background, some may wonder why I chose a career in IT. While agriculture shaped my roots, I was drawn to IT's dynamic nature and its potential to revolutionize industries. Inspired by this, I immersed myself in learning emerging technologies, built a strong foundation with guidance from experts, and honed my skills through hands-on projects. This blend of my upbringing's discipline with technology's innovation fueled my passion for problem-solving and creating impactful solutions.
              </motion.p>
            </div> */}
        </div>
        <div className='Resume w-full min-h-2/5'>
            <div className='w-full  p-3 flex flex-row'>
               <motion.span initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.5,type:'spring',stiffness:120}} className='w-14 h-14 bg-icon p-1 rounded-lg text-cus-yell shadow-icon-sd flex justify-center items-center'>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                 </svg>
               </motion.span>
               <motion.h1 initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.5,type:'spring',stiffness:120}} className='p-3 text-2xl font-bold text-heading'>Resume</motion.h1>
            </div>
            <div className='Resume-download md:w-1/2 w-full h-38 mx-auto my-auto items-center md:p-4 flex p-4 '>
               <motion.span initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.75,type:'spring',stiffness:120}} className='md:w-fit w-full h-auto text-cus-yell p-3 mx-auto flex justify-center rounded-md bg-card shadow-card-sd flex-col '>
                  <h1 className='text-heading text-xl font-bold text-left'>click to download resume </h1>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-20">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9 13.5 3 3m0 0 3-3m-3 3v-6m1.06-4.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                 </svg>
               </motion.span>
            </div>
        </div>
    </div>
  )
}

export default Education;


