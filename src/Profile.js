import React from 'react'
import {motion} from 'framer-motion'




const Profile = () => {
  return (
    <div className='w-full h-full py-6 overflow-hidden text-c'>
      <div className='w-full p-1 border-b-[1px] border-br'>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.25,type:'spring',stiffness:120}} className='pic p-5 h-40 w-3/5 rounded-lg mx-auto border-[1px] border-br overflow-hidden'>
          {/* <img src='/home/naveen/Desktop/Portfolio/portfolio_app/src/mypic.png'/> */}
        </motion.div>
        <motion.h3 initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.5,type:'spring',stiffness:120}} className=' text-4xl font-medium  text-center mt-7 text-heading'>Naveen kumar</motion.h3>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.75,type:'spring',stiffness:120}} className='skill mt-10 w-full h-auto mb-8'>
          <span className='bg-icon shadow-icon-sd p-3 rounded-full font-semibold text-cus-yell'>Exp:8 Months</span>
        </motion.div>
      </div>
      <div className='profile_details mt-6 w-full h-full p-4 font-semibold flex flex-col gap-6 text-light-gray'>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1,type:'spring',stiffness:120}} className='phone w-full h-30 p-2 flex gap-12'>
          <span className='relative icon-box w-12 h-12 bg-icon p-1 rounded-md text-cus-yell shadow-icon-sd flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </span>
          <h3 className='text-start'>Phone<br/>+91 9042007613</h3>
        </motion.div>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.25,type:'spring',stiffness:120}} className='Mail w-full h-30 p-2 flex gap-12'>
          <span className='w-12 h-12 bg-icon p-1 rounded-md text-cus-yell shadow-icon-sd flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
              <path stroke-linecap="round" stroke-linejoin="round" 
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
          </span>
          <h3 className='text-start'>Mail<br/>naveenkumarnk..</h3>
        </motion.div>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.5,type:'spring',stiffness:120}} className='Birthday w-full h-30 p-2 flex gap-12'>
          <span className='w-12 h-12 bg-icon p-1 rounded-md text-cus-yell shadow-icon-sd flex justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
          </span>
          <h3 className='text-start'>Birthday<br/>28 Oct,2000</h3>
        </motion.div>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:1.75,type:'spring',stiffness:120}} className='Location w-full h-30 p-2 flex gap-12 border-b-[1px] border-card-br'>
          <span className='w-12 h-12 bg-icon p-1 rounded-md text-cus-yell shadow-icon-sd flex justify-center items-center mb-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </span>
          <h3 className='text-start'>Location<br/>Madurai</h3>
        </motion.div>
        <motion.div initial={{opacity:0,scale:1,y:-50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:2,type:'spring',stiffness:120}} className='Social_links flex flex-row gap-3 mt-2 '>
          <span className='text-center w-1/3 text-cus-yell'>
              <svg fill='hsl(45, 100%, 72%)' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="facebook" class="size-8">
                <path d="M17.9902344,1.5957031c-1.0087891-0.1067505-2.0227051-0.1586304-3.0371094-0.1552734C11.5898438,1.4404297,9.5,3.5819702,9.5,7.0302734v2.3408203H6.6748047c-0.276001-0.0001831-0.4998779,0.2234497-0.5,0.4994507v3.8511353c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5H9.5v7.71875c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5h3.9780884c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507v-7.7192993h2.8164673c0.2512207-0.000061,0.463501-0.1864014,0.4960938-0.4355469l0.4970703-3.8505859c0.0357056-0.2736816-0.1572266-0.5245361-0.4309692-0.5602417c-0.0216064-0.0028076-0.043335-0.0042114-0.0651245-0.0042114h-3.3135376V7.4121094c0-0.9697266,0.1953125-1.375,1.4082031-1.375l2.0390625-0.0009766c0.276001,0.0001221,0.4998169-0.2234497,0.5-0.4994507V2.0917969C18.4248657,1.8408203,18.2390137,1.6286621,17.9902344,1.5957031z M17.4248047,5.0361328l-1.5390625,0.0009766c-2.1582031,0-2.4082031,1.3554688-2.4082031,2.375v2.4590454c-0.0001221,0.2759399,0.2234497,0.4998169,0.4994507,0.499939h3.2456665l-0.3681641,2.8505859h-2.8769531c-0.276001-0.0001221-0.4998169,0.2234497-0.5,0.4994507v7.7192993H10.5v-7.71875c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5H7.1748047v-2.8505859H10c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507V7.0302734c0-2.8740234,1.664978-4.5898438,4.453125-4.5898438c1.0087891,0,1.9199219,0.0546875,2.4716797,0.1025391V5.0361328z"></path>
             </svg>
          </span>
          <span className='text-center w-1/3 text-cus-yell'>
              <svg fill='hsl(45, 100%, 72%)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="linkedin" class="size-6">
                <path d="M3 6.002c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-5c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2zM5.5 24.002h-5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zm-4.5-1h4v-14H1v14zM23.5 24.002h-5a.5.5 0 0 1-.5-.5v-9c0-1.135-.473-1.987-1.299-2.336-.853-.362-1.894-.14-2.701.556v10.78a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .484.375c1.604-1.154 4.276-1.796 6.413-1.064 1.613.553 3.546 2.073 3.603 6.183v10.007a.5.5 0 0 1-.5.499zm-4.5-1h4v-9.5c-.038-2.785-1.051-4.601-2.927-5.243-2.33-.798-5.266.407-6.183 1.555a.501.501 0 0 1-.89-.312v-.5H9v14h4v-10.5a.5.5 0 0 1 .151-.358c1.118-1.086 2.667-1.436 3.939-.899 1.214.514 1.91 1.701 1.909 3.257v8.5z"></path>
              </svg>
          </span>
          <span className='text-center w-1/3 text-cus-yell'>
             <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
               <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z"/>
             </svg>
          </span>
        </motion.div>
      </div>
      
    </div>
    
  )
}

export default Profile;