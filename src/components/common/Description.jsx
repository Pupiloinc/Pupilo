import React from 'react'

const Description = ({ className, text }) => {
  return (
    <p className={`leading-150 text-dark-black ${className}`}>{text}</p>
  )
}

export default Description