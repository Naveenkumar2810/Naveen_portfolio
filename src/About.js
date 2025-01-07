import React from 'react'
import {motion} from 'framer-motion'

export const About = () => {
 

  return (
    <div className='w-full h-full flex flex-col p-3 px-5 gap-5 md:overflow-hidden'>
        <div className='About w-full h-auto md:h-1/4 flex flex-col md:justify-start md:p-4 md:gap-1 gap-4 px-6 '>
          <motion.h1 initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.25,type:'spring',stiffness:120}} className='bg-icon shadow-icon-sd text-xl text-cus-yell text-bold mt-2 w-fit rounded-lg'>About myself</motion.h1>
          <motion.p initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.50,type:'spring',stiffness:120}} className='h-auto md:h-full w-auto text-left md:text-base font-light text-white-1 md:mt-4 leading-7 text-wrap text-light-gray'>
           I'm Naveen Kumar, a results-driven developer with expertise in React, Python Full-Stack Development, and Data Engineering. I build dynamic web apps,design efficient backend systems, and create scalable data solutions. As a Data Engineer, I specialize in robust data pipelines, optimizing ETL processes, and extracting actionable insights from complex datasets. With a solid foundation in both front-end and back-end, I bring ideas to life through clean code and innovative design. Let's create something amazing together!
          </motion.p>
        </div>
        <div className='Doing w-full h-auto md:h-2/4 flex flex-row flex-wrap gap-4 py-2 md:px-6 px-1 justify-around'>
          <motion.h1 initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.75,type:'spring'}} className='bg-icon shadow-icon-sd text-xl text-cus-yell text-bold mt-2 w-fit md:w-5/6 rounded-md ml-0'>What im doing</motion.h1>
          <motion.div initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1,type:'spring',stiffness:120}} className='card1 w-full md:max-w-xl h-auto bg-card shadow-card-sd rounded-md py-2'>
              <div className='w-full md:w-3/4 h-full flex flex-row mx-auto' style={{ gap: '5%' }}>
                  <span className='w-1/3 text-cus-yell flex justify-center items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="size-20">
                        <path d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                      </svg>
                  </span>
                  <div className='flex flex-col justify-center md:gap-1 gap-1 '>
                    <h1 className='text-heading font-bold text-left'>Python full stack </h1>
                    <p className='text-light-gray text-left font-thin text-sm md:text-base md:font-normal leading-6 md:leading-0'>A full-stack Python app with Django handles backend logic, while the frontend uses HTML, CSS, and JavaScript.</p>
                  </div>
              </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.25,type:'spring',stiffness:120}} className='card2 w-full md:max-w-xl h-auto bg-card shadow-card-sd rounded-md py-2'>
              <div className='w-full md:w-3/4 h-full flex flex-row mx-auto' style={{ gap: '6%' }}>
                  <span className='w-1/3 h-full text-cus-yell flex justify-center items-center '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="size-20">
                      <path  d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
                    </svg>
                  </span> 
                  <div className='flex flex-col justify-center md:gap-1 gap-1 '>
                    <h1 className='text-heading font-bold text-left'>React web applications</h1>
                    <p className='text-light-gray text-left font-thin text-sm md:text-base md:font-normal leading-6 md:leading-0'>Creating React web applications involves building dynamic UIs using components and managing state with JavaScript.</p>
                  </div>
              </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.50,type:'spring',stiffness:120}} className='card3 w-full md:max-w-xl h-auto bg-card shadow-card-sd rounded-md py-3'>
              <div className='w-full md:w-3/4 h-full flex flex-row mx-auto' style={{ gap: '4%' }}>
                  <span className='w-1/3 h-full text-cus-yell flex justify-center items-center '>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="size-20">
                        <path  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                      </svg>
                  </span>
                  <div className='flex flex-col justify-center md:gap-1 gap-1 '>
                    <h1 className='text-heading font-bold text-left'>Data Engineering</h1>
                    <p className='text-light-gray text-left font-thin text-sm md:text-base md:font-normal leading-6 md:leading-0'>Data engineering designs and manages systems to collect, store, and process data for analysis and insights..</p>
                  </div>
              </div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.75,type:'spring',stiffness:120}} className='card4 w-full md:max-w-xl h-auto bg-card shadow-card-sd rounded-md py-3'>
              <div className='w-full md:w-3/4 h-full flex flex-row mx-auto' style={{ gap: '3%' }}>
                  <span className='w-1/3 h-full text-cus-yell flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="size-20">
                        <path  d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </span>
                  <div className='flex flex-col justify-center md:gap-1 gap-1'>
                    <h1 className='text-heading font-bold text-left'>ETL Creation</h1>
                    <p className='text-light-gray text-left font-thin text-sm md:text-base md:font-normal leading-6 md:leading-0'>Creating ETL involves extracting, transforming, and loading data into a target system for analysis.</p>
                  </div>
              </div>
          </motion.div>
        </div>
        <div className='Reasons w-full md:h-1/4 flex flex-row'>
          {/* <div className='w-1/4 h-full hidden md:block'>
            <img className='w-52 h-44' src='portfolio_app/src/Assets/Images/Think.jpg'/>
          </div> */}
          <div className='w-full md:w-full h-auto mx-auto my-auto'>
            <h1 className='bg-icon shadow-icon-sd md:hidden text-xl text-cus-yell text-bold mt-2 w-fit px-2 mx-auto rounded-lg'>Why i chose ?</h1>
            <motion.p initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:2,type:'spring'}} className='h-auto md:h-full text-left md:text-base font-thin text-light-gray md:leading-8 leading-7 md:p-4 p-6'>
              I am passionate about emerging technologies and staying updated with industry trends. Eager to integrate innovative solutions, I continuously enhance my skills to drive efficiency and support business growth. I thrive in dynamic environments, quickly adapting to new tools and technologies. Committed to delivering impactful results, I seek to contribute to cutting-edge projects.
            </motion.p>
          </div>
        </div>
    </div>
  )
}

export default About; 



