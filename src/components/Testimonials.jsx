import React from 'react'

const Testimonials = () => {
  return (
    <main className='min-w-full z-50 '>
        
        <div className=' flex flex-col lg:flex-row items-start justify-center  lg:justify-around -mt-[4rem] lg:mt-[4rem] md:mb-[10rem] px-[2rem] md:px-[4rem] ml-[1rem] md:ml-[3rem] relative lg:ml-[1rem] '>
            <article className='flex flex-col items-center lg:items-start pt-[3.5rem] lg:-mt-[4rem] ml-[9rem] md:ml-[12rem] lg:ml-[0rem]'>
                <p className='font-semibold text_fourth'>Testimonials</p>
                <header className='text_primary text-2xl font-bold font-serif lg:text-5xl my-[1rem] text-center lg:text-left'>What people say <br />
                    about Us.</header>

                    <div className='flex items-center justify-center gap-[2rem] mt-[4rem] '>
                        <div className='w-[12px] h-[12px] rounded-full bg-[#181E4B]'></div>
                        <div className='w-[12px] h-[12px] rounded-full bg-[#5E6282] opacity-25'></div>
                        <div className='w-[12px] h-[12px] rounded-full bg-[#5E6282] opacity-25'></div>
                    </div>
                
            </article>
            <div className='scale-[.6] md:scale-[.8] lg:scale-[1] relative'>
                <div className='w-[504px] h-[245px] bg-white rounded-[10px] shadow flex flex-col items-start text_fourth z-10'>
                    <img src="profile.png" alt="profile" className=' absolute -mt-[2rem] -ml-[2rem]'/>
                    <p className=' font-medium m-[2rem] mb-[4rem]'>“On the Windows talking painted pasture yet its <br /> express parties use. Sure last upon he same as <br /> knew next. Of believed or diverted no.”</p>
                    <p className='font-semibold text-[18px] ml-[2rem]'>Mike taylor</p>
                    <p className='font-semibold text-[14px] ml-[2rem]'>Lahore, Pakistan</p>
                </div>

                <div className='w-[504px] h-[245px] bg-white rounded-[10px]  absolute -mt-[10rem] ml-[3rem] flex flex-col items-start text_fourth -z-10 border-[1px] border-[#E5E5E5]'>
                    <p className=' font-medium m-[2rem] mb-[4rem]'>“On the Windows talking painted pasture yet its <br /> express parties use. Sure last upon he same as <br /> knew next. Of believed or diverted no.”</p>
                    <p className='font-semibold text-[18px] ml-[2rem]'>Chris Thomas</p>
                    <p className='font-semibold text-[14px] ml-[2rem]'>CEO of Red Button</p>
                </div>

                <img src="Pagination.svg" alt="" className='absolute -right-[6rem]  -mt-[10rem]'/>
            </div>
        </div>
    </main>
  )
}

export default Testimonials