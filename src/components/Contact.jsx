import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-[400px] flex items-center justify-center flex-col gap-4 mt-[8rem] mb-[4rem] relative -ml-[2rem] lg:-ml-[4rem]'>
        <img src="./subscribe.png" alt="contact" className=' w-[80%]  left-[2rem]  ' />
        <img src="./plusEffects.svg" alt="effects" className='w-[60px] md:w-[154px] absolute -z-10 right-[1rem] md:right-[3rem] -mb-[27rem]  rotate-x-180'/>
        <h1 className=' absolute -mt-[3rem] text-[11px] md:text-[18px] lg:text-[34px] ml-[2rem] lg:-mt-[4em] lg:ml-[4rem] font-semibold text_primary text-center'>Subscribe to get information, latest news and other <br /> interesting offers about Jadoo</h1>
        <img src="./telegram.svg" alt="telegram" className=' absolute -mt-[13rem] w-[50px] lg:w-[70px] right-[4rem] lg:right-[8rem] lg:-mt-[26rem] hidden md:flex' />
        <div className='flex flex-col items-center justify-center gap-4 mt-[6rem] ml-[3rem] absolute lg:mt-[12rem] md:flex-row lg:gap-8'>
           <div className='w-[240px] h-[38px] md:w-[340px] md:h-[56px] lg:w-[421px] bg-white rounded-[10px] flex flex-row items-center justify-center gap-1.5 pl-5'><img src="./email.svg" alt="" /> 
           <input type="email" placeholder='your email' className='text_primary outline-0 w-full'/></div>
           <button type='submit' className=' w-[240px] h-[38px] md:w-[120px] md:h-[56px] lg:w-[180px] bg-gradiant rounded-[5px] font-sans text-white font-semibold'>Subscribe</button>
        </div>
        
    </div>
  )
}

export default Contact