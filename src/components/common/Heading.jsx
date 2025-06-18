import React from 'react'

const Heading = ({text}) => {
  return (
    <h2 className={`text-5xl font-semibold leading-120`}>
        {text}
    </h2>
  )
}

export default Heading