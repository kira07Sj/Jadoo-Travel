import React from 'react'

const Hero = () => {
  return (
    <main className='min-w-full'>
        <img src="./Decore.svg" alt="Decore" className='md:w-[705px] md:h-[724px] absolute top-0 right-0 -z-10'/>
        <div className='w-[480px] h-[496px] bg_blur-effect blur-3xl opacity-40 rounded-full absolute -top-[5rem] -left-[25rem] -z-10'/>

        <div className=' flex flex-col lg:flex-row items-start justify-center  lg:justify-between mt-[4rem] px-[2rem] md:px-[6rem]'>
            <article className='flex flex-col items-center lg:items-start pt-[3.5rem]'>
                <p className='text_third  font-bold text-[16px] md:text-[20px] text-center lg:text-left'>Best Destinations around the world</p>
                <h1 className='text-[43px] font-serif md:text-6xl lg:text-[84px] font-bold text_primary text-center lg:text-left my-4'>Travel, enjoy <br />
                    and live a new <br />
                    and full life
                </h1>
                <p className='text_fourth font-medium text-[14px] text-center md:mt-3 md:w-[80%] lg:w-[60%] lg:text-left lg:text-[16px] my-3'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                <div className='flex items-center justify-center gap-3 flex-col sm:flex-row'>
                    <p className='px-5 py-3 bg-[#F1A501] rounded-[6px] text-white font-medium cursor-pointer'>Find out more</p>
                    <div className='flex flex-row items-center justify-center'>
                        <img src="./Play_button.svg" alt="play" className='w-[100px] -mb-5 cursor-pointer hover:scale-[1.05]'/>
                        <p className='text_fourth'>Play Demo</p>    
                    </div>
                </div>
            </article>
            <img src="./HeroImage.svg" alt="Travel Image" className='w-[764px] h-[764px] -mt-[9rem] md:mt-0'/>
        </div>
    </main>
  )
}

export default Hero