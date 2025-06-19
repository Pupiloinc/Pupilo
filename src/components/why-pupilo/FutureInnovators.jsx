'use client';

import React from 'react';
import Image from 'next/image';
import Title from '../common/Title';

const FutureInnovators = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-4 lg:py-[160px] md:py-20 py-14">
      {/* Heading */}
      <Title text="Future Innovators are Born Here!" className="text-center" />

      {/* Image */}
      <div className="w-full md:my-10 my-5">
        <Image
          src="/assets/images/webp/future-innovators.webp"
          alt="Girl learning online"
          width={1140}
          height={555}
          className="max-w-[1140px] rounded w-full xl:min-h-[555px] h-auto"
        />
      </div>

      {/* About Section */}
      <div className="flex max-md:flex-wrap justify-between md:gap-16 sm:gap-5 gap-2">
        <Title text="About Pupilo" />

        <div>
          <p className="text-[#4E4E4E] min-[800px]:max-w-[566px] max-lg:w-full lg:text-base text-sm leading-[150%] font-normal mb-4">
            Pupilo is a visionary online learning platform where children and
            teens aged 7 to 18 learn computer programming and coding in a way
            that is engaging, fun, and future-focused. Beyond simply learning
            to code, Pupilo’s students develop essential life skills such as
            critical thinking, communication, problem-solving, creativity, and
            curiosity.
          </p>
          <p className="text-[#4E4E4E] min-[800px]:max-w-[566px] w-full lg:text-base text-sm leading-[150%] font-normal">
            At the heart of Pupilo is a scalable and socially impactful
            after-school program that equips learners with essential digital and
            computational thinking and life skills—while solving the urgent
            shortage of qualified computer science educators across the
            continent.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FutureInnovators;
