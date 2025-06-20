import React from 'react';
import Image from 'next/image';
import Title from '../common/Title';

const FutureInnovators = () => {
  return (
    <div className='lg:py-[160px] md:py-20 py-[60px]'>
      <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto max-[790px]:max-w-[650px]">
        <Title text="Future Innovators are Born Here!" className="text-center md:!leading-[160%] max-[580px]:max-w-[420px] mx-auto" />
      <div className="w-full md:my-10 my-6">
        <Image
          src="/assets/images/webp/future-innovators.webp"
          alt="Girl learning online"
          width={1140}
          height={555}
          className="max-w-[1140px] md:rounded-[24px] rounded-2xl w-full xl:min-h-[555px] h-auto pointer-events-auto"
        />
      </div>
      <div className="flex max-[892px]:flex-wrap justify-between md:gap-5 gap-3">
        <Title text="About Pupilo" />
        <div>
            <p className="text-dark-grey min-[892px]:max-w-[566px] max-lg:w-full lg:text-base text-sm spacing-150 font-normal md:mb-4 mb-3">
            Pupilo is a visionary online learning platform where children and
            teens aged 7 to 18 learn computer programming and coding in a way
            that is engaging, fun, and future-focused. Beyond simply learning
            to code, Pupilo’s students develop essential life skills such as
            critical thinking, communication, problem-solving, creativity, and
            curiosity.
          </p>
            <p className="text-dark-grey min-[892px]:max-w-[566px] w-full lg:text-base text-sm spacing-150 font-normal">
            At the heart of Pupilo is a scalable and socially impactful
            after-school program that equips learners with essential digital and
            computational thinking and life skills—while solving the urgent
            shortage of qualified computer science educators across the
            continent.
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FutureInnovators;
