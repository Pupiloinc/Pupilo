import React from 'react'
import Title from '../common/Title'
import Image from 'next/image';
const LearnOurDifference = () => {
  const  LEARN_LIST = [
    {
      title: "Whole-Child Learning",
      description:
        "We go beyond teaching syntax and commands. Pupilo nurtures cognitive development and life skills that shape confident, adaptable learners.",
      icon: "/assets/images/svg/child-learning.svg",
    },
    {
      title: "Future-Ready Pathways",
      description:
        "Our courses span from Scratch and Python to AI, Data Science, Robotics, and App Development—preparing learners not just for jobs, but for entrepreneurship, leadership, and innovation.",
      icon: "/assets/images/svg/future-ready.svg",
    },
    {
      title: "Solving the CS Teacher Gap",
      description:
        "Pupilo’s hybrid learning model leverages AI tutors, pre-recorded expert sessions, and trained digital coaches—bridging the shortage of computer science educators while maintaining quality and consistency.",
      icon: "/assets/images/svg/teacher-gap.svg",
    },
    {
      title: "Fun, Culturally-Relevant Learning",
      description:
        "Our storytelling-driven, gamified lessons and localized project themes foster deeper engagement and cultural pride, making learning stick.",
      icon: "/assets/images/svg/fun.svg",
    },
    {
      title: "Mission-Driven for Africa",
      description:
        "Pupilo envisions an Africa where every child has the opportunity to thrive in a tech-enabled world—not just by consuming technology, but by creating it.",
      icon: "/assets/images/svg/mission-driven.svg",
    },
  ];
  return (
    <div className="md:py-20 py-14 px-4 learn-bg bg-cover bg-no-repeat bg-center">
      <div className="max-w-[1140px] mx-auto text-center">
        <Title text="Learn Our Difference: Why Pupilo?" className="text-center md:!leading-[160%]" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 min-[1200px]:gap-6 gap-x-3 gap-y-4 mt-10">
          {LEARN_LIST.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[24px] hover:shadow-lg flex flex-col gap-4"
            >
              <div className='flex items-center md:gap-5 gap-3'>
                <div
                  className={`w-[52px] h-[52px] p-3 rounded-full flex bg-[#8C52FF1A] items-center justify-center`}
                >
                  <Image src={item.icon} alt={item.title} width={28} height={28} className="size-[28px]  rounded-full" />
                </div>
                <h3 className="md:text-2xl text-xl font-medium text-left leading-[120%] md:max-w-[220px] text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-[#4E4E4E] xl:max-w-[301px] w-full md:text-base text-sm font-normal leading-[150%] text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LearnOurDifference