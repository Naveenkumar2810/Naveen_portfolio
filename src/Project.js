import React from 'react'

const Project = () => {
  return (
    <div className='w-full h-full flex justify-center items-center flex-col gap-5'>
        <h1 initial={{opacity:0,scale:1,y:50}} animate={{opacity:1,scale:1,y:0}} transition={{delay:0.25,type:'spring',stiffness:120}} className='bg-icon shadow-icon-sd text-xl text-cus-yell text-bold mt-2 w-fit rounded-lg'>Food ordering web application</h1>
        <div className='w-4/5 md:w-2/3 h-80 md:h-2/3 rounded-lg p-2 border-[1px] border-br'>
          <a className='w-full h-full' href='https://naveenkumar2810.github.io/Dj_react/' target="_blank" rel="noreferrer">
           <img className='w-full h-full overflow-hidden rounded-lg object-cover' src='https://naveen28.s3.eu-north-1.amazonaws.com/Food_order.png' alt='Project'></img>
          </a>
        </div>
    </div>
  )
}

export default Project