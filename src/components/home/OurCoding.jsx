import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import Image from 'next/image'

const OurCoding = () => {
  return (
    <div className='max-md:bg-fade-purple bg-our-coding bg-full max-lg:!bg-cover'>
      <div className='relative max-w-[1920px] sm:pt-20 pt-[60px] xl:pb-[357px] sm:pb-20 pb-10 mx-auto'>
        <div className='container max-w-[1140px] xl:px-0 sm:px-6 px-4 mx-auto '>
          <Title
            text="Our Coding Instructors"
            className="text-center mb-2"
          />
          <Description
            text="Our instructors are rigorously selected from top universities and institutions around the world. With experience in coding, teaching, and mentoring, they bring out the best in every learner."
            className="text-center max-w-[566px] mx-auto sm:pb-10 pb-7"
          />
          <div className='max-xl:flex flex-wrap  justify-center sm:gap-10 gap-5'>
            <Image width={68} height={68} className='object-cover rounded-full xl:w-[68px] xl:h-[68px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute left-[20.5%] top-[44%]' src="/assets/images/webp/coding-one.webp" alt='coding-one' />
            <Image width={102} height={102} className='object-cover rounded-full sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute left-[27.5%] top-[50.5%]' src="/assets/images/webp/coding-two.webp" alt='coding-two' />
            <Image width={102} height={102} className='object-cover rounded-full sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute left-[37.2%] top-[42%]' src="/assets/images/webp/coding-three.webp" alt='coding-three' />
            <Image width={102} height={102} className='object-cover rounded-full sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute min-[1325px]:left-[55.5%] left-[54%] top-[42%] ' src="/assets/images/webp/coding-four.webp" alt='coding-four' />
            <Image width={102} height={102} className='object-cover rounded-full sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute left-[65%] top-[49%]' src="/assets/images/webp/coding-five.webp" alt='coding-five' />
            <Image width={68} height={68} className='object-cover rounded-full xl:w-[68px] xl:h-[68px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute left-[74.5%] top-[49%]' src="/assets/images/webp/coding-six.webp" alt='coding-six' />
            <Image width={68} height={68} className='object-cover rounded-full xl:w-[68px] xl:h-[68px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute bottom-[17%] left-[26%]' src="/assets/images/webp/coding-seven.webp" alt='coding-seven' />
            <Image width={146} height={146} className='object-cover rounded-full min-[1325px]:!w-[146px] min-[1325px]:!h-[146px] xl:w-[120px] xl:h-[120px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute bottom-[15%] left-[34%]' src="/assets/images/webp/coding-eight.webp" alt='coding-eight' />
            <Image width={146} height={146} className='object-cover rounded-full min-[1325px]:!w-[146px] min-[1325px]:!h-[146px] xl:w-[120px] xl:h-[120px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute bottom-[25%] left-[44.5%]' src="/assets/images/webp/coding-nine.webp" alt='coding-nine' />
            <Image width={146} height={146} className='object-cover rounded-full min-[1325px]:!w-[146px] min-[1325px]:!h-[146px] xl:w-[120px] xl:h-[120px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute bottom-[16%] left-[55%]' src="/assets/images/webp/coding-ten.webp" alt='coding-ten' />
            <Image width={68} height={68} className='object-cover rounded-full xl:w-[68px] xl:h-[68px] sm:w-[102px] sm:h-[102px] w-[90px] h-[90px] xl:absolute bottom-[20%] left-[67%]' src="/assets/images/webp/coding-eleven.webp" alt='coding-eleven' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurCoding