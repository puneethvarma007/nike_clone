import React from 'react'

const ShoeCard = ({imageURL,
    changeBigShoeImage,
    bigShowImg}) => {
    const handleClick = () => {
        if(bigShowImg !== imageURL.bigShoe){
            changeBigShoeImage(imageURL.bigShoe)
        }
    }
  return (
    <div className={`border-2 rounded-xl ${
        bigShowImg === imageURL
        ? 'border-coral-red'
        : 'border-transparent'
    } cursor-pointer max-sm:flex-1`}
    onClick={handleClick}
    >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 '>
            <img src={imageURL.thumbnail} alt="shoe collection" width={127} height={103} className='object-contain' />
        </div>

    </div>
  )
}

export default ShoeCard