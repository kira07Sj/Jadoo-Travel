import React from 'react'
import CategoryCard from './UI/CategoryCard'
import { CategoryCards } from '../constants'

const Category = () => {
  return (
    <main className='min-w-fit flex flex-col items-center justify-center -mt-[3rem] lg:mt-[3rem]'>
        <img src="./plusEffects.svg" alt="effects" className='w-[60px] md:w-[154px] absolute -z-10 right-[1rem] md:right-[3rem] mb-[15rem]'/>
        <p className='font-semibold text_fourth'>CATEGORY</p>
        <header className='text_primary text-2xl font-bold font-serif lg:text-5xl mt-[1rem]'>We Offer Best Services</header>
        <div className='w-full p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[4rem] mb-[3rem] gap-[2rem]'>
            {CategoryCards.map((items)=>(
                <CategoryCard key={items.id}
                    imgSrc={items.imgUrl}
                    title={items.title}
                    desc={items.desc}
                    width={items.width}
                    />
            ))}
        </div>
    </main>
  )
}

export default Category