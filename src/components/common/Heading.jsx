import React from 'react'

const Heading = ({text , className}) => {
  return (
    <h2 className={`text-5xl font-semibold text-dark-black leading-120 max-lg:text-custom-5xl max-md:text-4xl max-sm:text-custom-4xl ${className} `}>
        {text}
    </h2>
  )
}

export default Heading