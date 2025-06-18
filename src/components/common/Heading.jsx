import React from 'react'

const Heading = ({text , className}) => {
  return (
    <h2 className={`text-5xl font-semibold text-dark-black leading-120 max-lg:text-4xl max-md:text-custom-4xl max-sm:text-3xl ${className} `}>
        {text}
    </h2>
  )
}

export default Heading