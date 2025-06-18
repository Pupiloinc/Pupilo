import React from 'react'

const Paragraph = ({className , text }) => {
  return (
    <p className={`leading-150 text-dark-black max-sm:text-sm ${className}`}>{text}</p>
  )
}

export default Paragraph