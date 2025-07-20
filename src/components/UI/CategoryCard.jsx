import React from 'react'

const CategoryCard = ({imgSrc, title, desc, width, }) => {
  return (
    <div className=' hover:-translate-y-3 card overflow-visible'>
        <div className='w-[267px] h-[314px] flex flex-col items-center justify-between rounded-[36px] hover:shadow-2xl pt-[2rem] bg-white pb-4 overflow-clip '>
        <div className='w-[166px] h-[154px] flex items-center justify-center'>
            <img src={imgSrc} alt="plane" className={width}/>
        </div>
        <div className='flex flex-col items-center justify-start'>
            <h1 className={`text_primary text-[16px] font-semibold font-sans md:text-[20px] mt-4`}>{title}</h1>
            <p className='text_fourth text-[14px] md:text-[16px] text-center w-[60%]'>{desc}</p>
        </div>
        <div className='w-[100px] h-[100px] rounded-tl-[30px] rounded-br-[30px] opacity-0 bg-[#DF6951] absolute mt-[13rem] mr-[15rem] -z-10 hoverEffect'/>
    </div>
    </div>
  )
}

export default CategoryCard