import React from 'react'
import Title from '../common/Title'
import Image from 'next/image';
import { LEARN_OUR_LIST } from '../../../utils/helper';
const LearnOurDifference = () => {
  return (
    <div className="md:py-20 py-14 learn-bg bg-cover bg-no-repeat bg-center">
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto text-center">
        <Title text="Learn Our Difference: Why Pupilo?" className="text-center md:!leading-[160%]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1200px]:gap-6 gap-x-3 gap-y-4 mt-10">
          {LEARN_OUR_LIST.map((item, index) => (
            <div
              key={index}
              className="bg-white md:p-6 p-4 rounded-[24px] hover:shadow-lg transition-all duration-500 flex flex-col gap-4"
            >
              <div className='flex items-center md:gap-5 gap-3'>
                <div
                  className={`w-[52px] h-[52px] p-3 rounded-full flex bg-[#8C52FF1A] items-center justify-center`}
                >
                  <Image src={item.icon} alt={item.title} width={28} height={28} className="size-[28px] rounded-full" />
                </div>
                <h3 className="md:text-2xl text-xl font-medium text-left  spacing-120 max-[460px]:max-w-[230px] md:max-w-[220px] text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-dark-grey xl:max-w-[301px] w-full md:text-base text-sm font-normal spacing-150 text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default LearnOurDifference