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
    cta: "Try a Free Lesson →",
  },
  {
    id: 2,
    image: "/assets/images/webp/group-lessons.webp",
    tag: "Group dynamics & teamwork",
    tagColor: "bg-blue-100 text-blue-700",
    title: "Online Live Group Lessons",
    desc: "Interactive, small-group lessons where kids learn coding with peers in real time.",
    cta: "Try a Free Lesson →",
  },
  {
    id: 3,
    image: "/assets/images/webp/self-paced-course.webp",
    tag: "Pre-recorded lessons",
    tagColor: "bg-yellow-100 text-yellow-700",
    title: "Self-Paced Courses",
    desc: "Learn anytime, anywhere. Your pace, your path. Best for independent learners with busy schedules.",
    cta: "Try a Free Lesson →",
  },
  {
    id: 4,
    image: "/assets/images/webp/virtual-coding-camps.webp",
    tag: "Game Jam",
    tagColor: "bg-purple-100 text-purple-700",
    title: "Virtual Coding Camps",
    desc: "Exciting week-themed programs packed with creativity, problem-solving, and teamwork.",
    cta: "Try a Free Lesson →",
  },
];

const PupiloDelivers = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container max-w-[1140px] xl:px-0 px-6 mx-auto">
        <h2 className="text-custom-5xl font-semibold text-center leading-[120%] mb-16">
          Pupilo delivers a flexible, personalized and student-centered learning
          experience through multiple formats that fit every learner’s schedule
          and style.
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 mx-auto max-w-[800px]">
          {formats.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col"
            >
              <div className="relative w-full h-[180px] rounded-lg overflow-hidden mb-4">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <span
                className={`text-xs font-medium px-2 py-1 rounded ${card.tagColor}`}
              >
                {card.tag}
              </span>
              <h3 className="text-lg font-semibold mt-3">{card.title}</h3>
              <p className="text-sm text-gray-600 mt-2 flex-grow">
                {card.desc}
              </p>
              <a
                href="#"
                className="text-indigo-600 text-sm font-medium mt-4 inline-block"
              >
                {card.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PupiloDelivers;
