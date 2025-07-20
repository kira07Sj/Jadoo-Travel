import React from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className='h-screen flex flex-col items-center overflow-x-clip'>
        <Navigation/>
        <Hero/>
    </div>
  )
}

export default Home