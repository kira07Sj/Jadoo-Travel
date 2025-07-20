import React from 'react'

const TopSellingCard = ({imgUrl, title, price, time}) => {
  return (
    <div className='w-[313px] h-[457px] rounded-[24px] flex items-end justify-center overflow-hidden shadow-2xl'>
        <img src={imgUrl} alt="Rome" className=' scale-[1.55] -mb-[4rem]'/>
        <div className='w-[314px] h-[150px] bg-white z-20 absolute rounded-b-[24px] px-[2rem] py-[2rem] flex flex-col items-start justify-center'>
            <div className='flex items-center justify-between w-full  text-[18px] font-medium font-sans text_fourth mb-[1.5rem]'>
                <p>{title}</p>
                <p>{price}</p>
            </div>
            <div className='flex items-center gap-3 w-full   text-[16px] font-medium font-sans text_fourth mb-[1.5rem]'>
                <img src="./navigation.svg" alt="" />
                <p>{time}</p>
            </div>
        </div>
    </div>
  )
}

export default TopSellingCard