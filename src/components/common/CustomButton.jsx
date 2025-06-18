import React from 'react'
import Icons from './Icons'

const CustomButton = ({ iconClass, text, className, iconColor }) => {
  return (
    <button className={`flex gap-2 py-3.5 px-8 group cursor-pointer bg-yellow rounded-full text-dark-black font-semibold leading-150 max-sm:text-sm max-sm:py-2.5 max-sm:px-6 ${className}`}>
      {text}
      <span className='size-6 max-sm:size-4 flex justify-center transition-all duration-300 group-hover:rotate-45 items-center'><Icons icon={'commonArrow'} className={`${iconClass}`} fill={iconColor} /></span>
    </button>
  )
}

export default CustomButton