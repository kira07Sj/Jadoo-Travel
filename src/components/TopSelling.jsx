import TopSellingCard from "./UI/TopSellingCard"
import { TopSellingCards } from "../constants"

const TopSelling = () => {
  return (
    <main className='min-w-fit flex flex-col items-center justify-center -mt-[3rem] lg:mt-[3rem]'>
        <img src="./Decore2.svg" alt="effects" className='w-[50px] md:w-[96px] absolute -z-10 right-[3rem] md:right-[12.5rem]  mt-[12rem]'/>
        <p className='font-semibold text_fourth'>Top Selling</p>
        <header className='text_primary text-2xl font-bold font-serif lg:text-5xl mt-[1rem]'>Top Destinations</header>
        <div className='w-full p-2 grid grid-cols-1 lg:grid-cols-3 mt-[4rem] mb-[3rem] gap-[4rem]'>
            {TopSellingCards.map((items)=>(
                <TopSellingCard key={items.id}
                    imgUrl={items.imgUrl}
                    title={items.title}
                    price={items.price}
                    time={items.time}/>
            ))}
        </div>
    </main>
  )
}

export default TopSelling