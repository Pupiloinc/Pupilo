import React from 'react'
import Image from 'next/image'
const OurMission = () => {
  return (
    <div className="lg:py-[160px] md:py-20 py-14">
      <div className=' flex max-[790px]:flex-wrap gap-6 items-center container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto'>
        <div className="w-full min-[790px]:w-1/2 rounded-[20px] overflow-hidden">
          <Image
            src="/assets/images/webp/our-mission.webp"
            alt="Girl coding on laptop"
            width={558}
            height={412}
            className="rounded-[20px] lg:max-w-[558px] w-full xl:h-[412px] h-auto object-cover pointer-events-none"
          />
        </div>
        <div className="w-full min-[790px]:w-1/2 xl:space-y-6 space-y-4">
          <div className='xl:p-6 p-4 bg-[#875BF7] group rounded-[30px] transition-all duration-500'>
            <h2 className="md:text-[32px] text-3xl font-semibold spacing-120 text-white xl:mb-3 mb-[6px] transition-all duration-500">
              Our Mission
            </h2>
            <p className="text-white xl:text-base text-sm spacing-150 font-normal transition-all duration-500">
              Pupilo is on mission to become Africa’s most loved & trusted coding
              education platform – a place where every child, regardless of
              background, can access the tools to not only succeed in school but
              to thrive in an evolving digital world.
            </p>
          </div>
          <div className='xl:p-6 p-4 bg-white hover:bg-[#875BF7] group rounded-[30px] transition-all duration-500'>
            <h2 className="md:text-[32px] text-3xl font-semibold spacing-120 text-black group-hover:text-white xl:mb-3 mb-[6px] transition-all duration-500">
              Our Vision
            </h2>
            <p className="text-dark-grey group-hover:text-white xl:text-base text-sm spacing-150 font-normal transition-all duration-500">
              We believe in an African education system that no longer teaches just to pass exams, but one that empowers children to create, lead, and thrive. Pupilo is helping reshape what education can look like—dynamic, digital, and deeply personal.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default OurMission