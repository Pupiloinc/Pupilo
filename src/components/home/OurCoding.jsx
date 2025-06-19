import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import Image from 'next/image'

const OurCoding = () => {
  return (
    <div className='max-md:bg-light-purple py-20 relative bg-our-coding bg-full max-lg:!bg-cover'>
      <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto '>
        <Title
          text="Our Coding Instructors"
          className="text-center mb-2"
        />
        <Description
          text="Our instructors are rigorously selected from top universities and institutions around the world. With experience in coding, teaching, and mentoring, they bring out the best in every learner."
          className="text-center max-w-[566px] mx-auto pb-10"
        />
        <Image width={849} height={271} src="/assets/images/svg/our-coding-group.svg" alt='our-coding-group' className='mx-auto lg:block hidden' />

        <div className='lg:hidden block'>

          <div className='flex flex-wrap sm:gap-10 gap-6 justify-center'>
            <Image width={102} height={102} src="/assets/images/png/coding-one.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-two.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-three.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-four.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-five.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-six.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-seven.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-eight.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-nine.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-ten.png" alt='coding-one' />
            <Image width={102} height={102} src="/assets/images/png/coding-eleven.png" alt='coding-one' />
          </div>
        </div>
        {/* {CODING_INSTRUCTORS_DATA_LIST.map((obj, i) => (
          <div key={i}>
            <Image width={102} height={102} src="/assets/images/png/coding-one.png" alt='coding-one' />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default OurCoding