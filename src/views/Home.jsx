import React from 'react'
import Gallery from '../components/Gallery'
import banner from '../assets/pizzabg2.jpeg'

const Home = () => {
  return (
    <div>
      <div className="position-relative">
        <h1 className='position-absolute z-2 bannerTitle'>Benvenuti a Mamma Mia Pizzeria</h1>
        <div className='bannerContainer position-relative'>
          <div className='h-100 w-100 bg-dark opacity-50'></div>
        </div>
      </div>
      <Gallery />
    </div>
  )
}

export default Home