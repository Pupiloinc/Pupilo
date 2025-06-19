import React from 'react'

const OurMission = () => {

const features = [
  {
    title: "Whole-Child Learning",
    description:
      "We go beyond teaching syntax and commands. Pupilo nurtures cognitive development and life skills that shape confident, adaptable learners.",
    icon:  "/assets/images/svg/child-learning.svg",
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
    icon:  "/assets/images/svg/fun.svg",
  },
  {
    title: "Mission-Driven for Africa",
    description:
      "Pupilo envisions an Africa where every child has the opportunity to thrive in a tech-enabled world—not just by consuming technology, but by creating it.",
    icon:"/assets/images/svg/mission-driven.svg",
  },
];
  return (
    <section className="bg-[#f3edff] py-16 px-4">
      <div className="max-w-[1140px] mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
          Learn Our Difference: Why Pupilo?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[24px] hover:shadow-lg flex flex-col gap-4"
            >
              <div className='flex gap-5'>

              <div
                className={`w-[52px] h-[52px] rounded-full flex bg-[#8C52FF1A] items-center justify-center`}
              >
                <img src={item.icon} alt={item.title} className="size-[28px]  rounded-full" />

              </div>
              <h3 className="text-2xl font-medium text-left leading-[120%] max-w-[220px] text-gray-800">
                {item.title}
              </h3>
              </div>
              <p className="text-[#4E4E4E] max-w-[316px] text-base font-normal leading-[150%] text-left">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurMission