import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  
  const [fields,setField]=useState({
    name:false,
    email:false,
    message:false,
  })

  const [validate,setValidate] =useState({
    color:'',
    text:''
  })
  console.log(fields)

  const Check_input = (e)=>{
   const {name,value} =e.target;
   if(name ==='fname'){
       if(value.length>2){
         e.target.style.border ='1px solid green'
         setField({...fields,name:true})
      }
      else{
       e.target.style.border ='1px solid red'
       setField({...fields,name:false})
     }
   }
   else if (name ==='email') {
      if(value.includes('@gmail.com')){
          e.target.style.border ='1px solid green'
          setField({...fields,email:true})
        }
      else {
          e.target.style.border ='1px solid red'
          setField({...fields,email:false})
        }
   }
  else{
      if(value.length>10){
      e.target.style.border ='1px solid green'
      setField({...fields,message:true})
      }
    else {
      e.target.style.border ='1px solid red'
      setField({...fields,message:false})
    } 
  }
  }
  
  const form_submit =(e)=>{
    e.preventDefault();
    const allKeysTrue = Object.values(fields).every(value => value === true);
    if (allKeysTrue){
      emailjs.sendForm('service_b36a43c','template_x58euvv',e.target,'KoTxSGd3eT2Y01rGf')
      setValidate({color:'text-green-600',text:'Successfully Send'})
    }
    else{
      setValidate({color:'text-red-600',text:'Enter Valid Details'})
    }
    setTimeout(()=>{
      console.log('Inside the Interval block')
      setValidate({color:'',text:''})
    },3000)
   
  }

  return (
    <div className='w-full min-h-full flex flex-col justify-center items-center mt-5 md:mt-0'>
        <h1 className='w-full md:w-1/2 md:text-4xl text-xl text-cus-yell items-center'>Contact Form</h1>
        <form onSubmit={(e)=> form_submit(e)}  className=' w-full md:w-1/2 h-full md:h-1/2 justify-center text-white-1 p-5 px-8 flex flex-row flex-wrap md:gap-2 gap-5 '>
            <input onChange={(e)=>Check_input(e)} name='fname' className='w-full md:w-72 bg-highlight1 md:p-5 p-3 border-b-[1px] border-br rounded-lg focus:outline-none focus:border-cus-yell' type='text' placeholder='Full Name'/>
            <input onChange={(e)=>Check_input(e)} name='email' className='w-full md:w-1/2 bg-highlight1 md:p-5 p-3 border-b-[1px] border-br rounded-lg focus:outline-none focus:border-cus-yell' type='Email' placeholder='Email'/>
            <input onChange={(e)=>Check_input(e)} name='message' className='w-full md:w-full bg-highlight1 md:p-6 p-4 border-b-[1px] border-br rounded-lg h-32 focus:outline-none focus:border-cus-yell md:mt-2' type='text' placeholder='Message'/>
            <div className='phone w-full h-30 p-2 flex justify-center md:justify-start'>
              <span className='w-1/2 md:w-1/4 md:h-16 h-12 p-1 rounded-lg text-cus-yell  flex justify-center items-center gap-4 bg-icon shadow-icon-sd'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="size-6">
                  <path d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                <button className='md:text-xl text-base'>Send</button>
              </span>
              <span className={`text-sm ${validate.color} block md:ml-64`} id='error'>{`${validate.text}`}</span>
           </div>
        </form>
    </div>
  )
}

export default Contact;



