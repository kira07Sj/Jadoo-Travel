import React from 'react'

const Booking = ({title, imgUrl}) => {
  return (
    <div className='flex items-center justify-center gap-3'>
        <img src={imgUrl} alt="booking a trip" />
        <div className='flex flex-col items-start justify-center text_fourth font-sans my-[1rem]'>
            <h1 className='font-bold'>{title}</h1>
            <p className='w-[60%]'>Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Urna, tortor tempus. </p>
        </div>
    </div>
  )
}

export default Booking