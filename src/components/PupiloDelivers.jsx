import React from "react";
import Image from "next/image";

const formats = [
  {
    id: 1,
    image: "/assets/images/webp/private-lessons.webp",
    tag: "Fully flexible schedule",
    tagColor: "bg-pink-100 text-pink-700",
    title: "1-on-1 Private Lessons",
    desc: "Your child gets a dedicated mentor who tailors each lesson to their pace, interests, and goals.",
    cta: "Try a Free Lesson",
  },
  {
    id: 2,
    image: "/assets/images/webp/group-lessons.webp",
    tag: "Group dynamics & teamwork",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Online Live Group Lessons",
    desc: "Interactive, small-group lessons where kids learn coding with peers in real time.",
    cta: "Try a Free Lesson",
  },
  {
    id: 3,
    image: "/assets/images/webp/self-paced-course.webp",
    tag: "Pre-recorded lessons",
    tagColor: "bg-yellow/10 border border-yellow/20 text-yellow/80",
    title: "Self-Paced Courses",
    desc: "Learn anytime, anywhere. Your pace, your path. Best for independent learners with busy schedules.",
    cta: "Try a Free Lesson",
  },
  {
    id: 4,
    image: "/assets/images/webp/virtual-coding-camps.webp",
    tag: "Game Jam",
    tagColor: "bg-purple-100 text-purple-700",
    title: "Virtual Coding Camps",
    desc: "Exciting week-themed programs packed with creativity, problem-solving, and teamwork.",
    cta: "Try a Free Lesson",
  },
];

const PupiloDelivers = () => {
  return (
    <div className="py-[60px] sm:py-20 bg-white-100 relative">
      <div className="container max-w-[1140px] xl:px-0 px-6 mx-auto">
        <Image
          src="/assets/images/png/pupilo-delivers-right-img.png"
          alt="bg"
          className="absolute pointer-events-none right-0 top-0 max-lg:hidden"
          width={183}
          height={208}
        />
        <Image
          src="/assets/images/png/pupilo-delivers-left-img.png"
          alt="bg"
          className="absolute pointer-events-none left-0 top-[30%] max-lg:hidden"
          width={183}
          height={208}
        />
        <Image
          src="/assets/images/png/pupilo-delivers-bottom-img.png"
          alt="bg"
          className="absolute pointer-events-none right-0 bottom-0 max-lg:hidden"
          width={220}
          height={208}
        />
        <h2 className="text-2xl sm:text-3xl lg:text-custom-5xl font-semibold text-center leading-[120%] mb-6 sm:mb-10 max-sm:px-0 max-lg:px-7">
          Pupilo delivers a flexible, personalized and student-centered learning
          experience through multiple formats that fit every learner’s schedule
          and style.
        </h2>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 mx-auto max-w-[400px] sm:max-w-[800px] relative z-10">
          {formats.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-md p-4 md:p-6 flex flex-col hover:shadow-2xl transition-all ease-in-out duration-500"
            >
              <div className="relative w-full min-h-[220px] rounded-lg overflow-hidden mb-4 sm:mb-6">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover rtext-custom-5xl font-semibold text-center leading-[120%] mb-10ounded-xl"
                />
              </div>
              <div className="flex">
                <span
                  className={`text-base px-3 md:px-5 py-[5.5px] rounded-full text-purple/80 border border-purple/16 bg-purple/10 whitespace-nowrap ${card.tagColor}`}
                >
                  {card.tag}
                </span>
              </div>
              <h3 className="text-lg sm:text-2xl leading-120 font-semibold mt-4">
                {card.title}
              </h3>
              <p className="text-base text-dune mt-3 flex-grow">{card.desc}</p>
              <div className="flex items-center mt-4 gap-2">
                <a
                  href="#"
                  className="text-dark-black text-base font-semibold inline-block underline"
                >
                  {card.cta}
                </a>
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#010101"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PupiloDelivers;
