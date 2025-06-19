import React from 'react'
import Image from 'next/image'
const OurMission = () => {
  return (
    <section className="max-w-[1200px] mx-auto px-4 lg:py-[160px] md:py-20 py-14 flex flex-col md:flex-row gap-10 items-center">
      {/* Left: Image */}
      <div className="w-full md:w-1/2 rounded-[20px] overflow-hidden">
        <Image
          src="/assets/images/webp/our-mission.webp"
          alt="Girl coding on laptop"
          width={558}
          height={412}
          className="rounded-[20px] w-full max-w-[558px] xl:h-[412px] h-auto object-cover"
        />
      </div>

      {/* Right: Text Content */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Mission */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-2">Our Mission</h2>
          <p className="text-gray-700 text-[16px] leading-relaxed">
            Pupilo is on mission to become Africa’s most loved & trusted coding
            education platform – a place where every child, regardless of
            background, can access the tools to not only succeed in school but
            to thrive in an evolving digital world.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-[#875BF7] text-white p-6 rounded-[30px]">
          <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
          <p className="text-[16px] leading-relaxed">
            We believe in an African education system that no longer teaches
            just to pass exams, but one that empowers children to create, lead,
            and thrive. Pupilo is helping reshape what education can look
            like—dynamic, digital, and deeply personal.
          </p>
        </div>
      </div>
    </section>
  )
}

export default OurMission