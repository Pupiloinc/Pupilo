import React from 'react'
import Title from '../common/Title'
import Image from 'next/image';
import { LEARN_OUR_LIST } from '../../../utils/helper';
const LearnOurDifference = () => {
  return (
    <div className="md:py-20 py-[60px] learn-bg bg-cover bg-no-repeat bg-center">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto text-center">
        <Title text="Learn Our Difference: Why Pupilo?" className="text-center md:!leading-[160%] max-[580px]:max-w-[420px] mx-auto" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1200px]:gap-6 gap-x-3 gap-y-4 md:mt-10 mt-6">
          {LEARN_OUR_LIST.map((item, index) => (
            <div
              key={index}
              className="bg-white md:p-6 p-4 md:rounded-[24px] rounded-2xl hover:shadow-2xl transition-all ease-in-out duration-500 flex flex-col md:gap-4 gap-3"
            >
              <div className='flex items-center md:gap-5 gap-3'>
                <div
                  className={`md:size-[52px] size-[44px] p-3 rounded-full flex bg-[#8C52FF1A] items-center justify-center`}
                >
                  <Image src={item.icon} alt={item.title} width={28} height={28} className="size-[28px] rounded-full" />
                </div>
                <h3 className="md:text-2xl text-xl font-medium text-left  leading-120 max-[460px]:max-w-[230px] md:max-w-[217px] text-[#010101]">
                  {item.title}
                </h3>
              </div>
              <p className="text-dark-grey xl:max-w-[303px] w-full md:text-base text-sm font-normal spacing-150 text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default LearnOurDifference