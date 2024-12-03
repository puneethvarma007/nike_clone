import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
    id='our-values'
    className='flex justify-between item-center max-lg:flex-col gap-10 w-full max-continer'
    >
      <div className='flex flex-1 flex-col'>
      <h2 className='mt-10 text-4xl font-palanquin capitalize font-bold lg:max-w-lg'>
        We Provide You
        <span className='text-coral-red'> Super</span>
        <span className='text-coral-red'> Quality</span> Shoes
        <br />
      </h2>
      <p className='mt-4 lg:max-w-lg info-text'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, provided you with unmatched quality, innovation, and a touch of elagance.</p>
      <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction </p>
      <div className='mt-11'>
      <Button label={'View details'} />
      </div>
      </div>

      <div className='flex flex-1 justify-center items-center'>
      <img src={shoe8} alt="shoe8" height={570} width={522} className='object-right-bottom' />
      </div>


    </section>
  )
}

export default SuperQuality