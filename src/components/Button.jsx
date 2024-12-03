import React from 'react'

const Button = ({label,iconURl,backgroundColor,
  borderColor,textColor,fullWidth}) => {
  return (
    <button className={`flex justify-center     items-center px-7 py-4 border font-montserrat  text-lg leading-none rounded-full ${fullWidth && 'w-full'} 
    ${backgroundColor?`${backgroundColor} ${borderColor} ${textColor}`:`bg-coral-red text-white border-coral-red`}
    
    `}>
        {label}
        {iconURl &&
        <img src={iconURl} alt="arrowright" className='ml-2 rounded-full w-5 h-5' />
        }
        </button>
  )
}

export default Button