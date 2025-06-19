import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import Image from 'next/image'
import { CODING_INSTRUCTORS_DATA_LIST } from '../../../utils/helper'

const OurCoding = () => {
  return (
    <div className='max-md:bg-light-purple sm:py-20 py-[60px] relative bg-our-coding bg-full max-lg:!bg-cover'>
      <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto '>
        <Title
          text="Our Coding Instructors"
          className="text-center mb-2"
        />
        <Description
          text="Our instructors are rigorously selected from top universities and institutions around the world. With experience in coding, teaching, and mentoring, they bring out the best in every learner."
          className="text-center max-w-[566px] mx-auto sm:pb-10 pb-7"
        />
        <Image width={849} height={271} src="/assets/images/svg/our-coding-group.svg" alt='our-coding-group' className='mx-auto lg:block hidden' />
        <div className='lg:hidden flex flex-wrap sm:gap-10 gap-6 justify-center'>
          {CODING_INSTRUCTORS_DATA_LIST.map((obj, i) => (
            <div key={i}>
              <Image width={102} height={102} src={obj} alt='coding-instructors' className='rounded-full max-w-[102px] h-[102px] object-cover object-top'/>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default OurCoding