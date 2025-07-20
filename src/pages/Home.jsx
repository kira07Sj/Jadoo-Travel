import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Category from '../components/Category'
import TopSelling from '../components/TopSelling'
import BookAtrip from '../components/BookAtrip'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center overflow-x-clip'>
        <Navigation/>
        <Hero/>
        <Category/>
        <TopSelling/>
        <BookAtrip/>
        <Testimonials/>
    </div>
  )
}

export default Home