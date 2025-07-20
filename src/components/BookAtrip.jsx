import Booking from "./UI/Booking"
import { Bookings } from "../constants"

const BookAtrip = () => {
  return (
     <main className='min-w-fit'>
        
        <div className=' flex flex-col lg:flex-row items-start justify-center  lg:justify-around mt-[4rem] px-[2rem] md:px-[4rem] mb-[2rem] relative lg:ml-[5rem]'>
            <article className='flex flex-col items-center lg:items-start pt-[3.5rem] lg:mt-[2rem]'>
                <p className='font-semibold text_fourth'>Easy and Fast</p>
                <header className='text_primary text-2xl font-bold font-serif lg:text-5xl my-[1rem] text-center lg:text-left'>Book your next trip <br />
                    in 3 easy steps</header>
                {Bookings.map((items)=>(
                    <Booking key={items.id}
                        title={items.title}
                        imgUrl={items.imgUrl}/>
                ))}
            </article>
            <img src="./Trip.svg" alt="Travel Image" className=' -mt-[1rem] md:-mt-[5rem]'/>
        </div>
    </main>
  )
}

export default BookAtrip