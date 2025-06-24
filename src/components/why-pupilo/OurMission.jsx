"use client";
import React, { useState } from "react";
import Image from "next/image";

const OurMission = () => {
  const [selectedCard, setSelectedCard] = useState("mission"); // default card

  return (
    <div className="lg:pt-[160px] md:pt-20 pt-14">
      <div className="flex max-[790px]:flex-wrap max-[790px]:max-w-[650px] gap-6 items-center container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto">
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
          <div
            onMouseEnter={() => setSelectedCard("mission")}
            className={`xl:p-6 p-4 transition-all duration-500 md:rounded-3xl rounded-2xl ${selectedCard === "mission"
              ? "bg-[#875BF7] text-white shadow-lg"
              : "bg-white text-black"
              }`}
          >
            <h2 className="md:text-[32px] text-2xl font-semibold leading-120 xl:mb-3 mb-[6px] transition-all duration-500">
              Our Mission
            </h2>
            <p
              className={`xl:text-base text-sm leading-150 font-normal transition-all duration-500 ${selectedCard === "mission" ? "text-white/80" : "text-dark-grey"
                }`}
            >
              Pupilo is on mission to become Africa’s most loved & trusted coding
              education platform – a place where every child, regardless of
              background, can access the tools to not only succeed in school but
              to thrive in an evolving digital world.
            </p>
          </div>
          <div
            onMouseEnter={() => setSelectedCard("vision")}
            className={`xl:p-6 p-4 transition-all duration-500 md:rounded-3xl rounded-2xl ${selectedCard === "vision"
              ? "bg-[#875BF7] text-white shadow-lg"
              : "bg-white text-dark-black"
              }`}
          >
            <h2 className="md:text-[32px] text-2xl font-semibold spacing-120 xl:mb-3 mb-[6px] transition-all duration-500">
              Our Vision
            </h2>
            <p
              className={`xl:text-base text-sm spacing-150 font-normal transition-all duration-500 ${selectedCard === "vision" ? "text-white" : "text-dark-grey"
                }`}
            >
              We believe in an African education system that no longer teaches
              just to pass exams, but one that empowers children to create, lead,
              and thrive. Pupilo is helping reshape what education can look
              like—dynamic, digital, and deeply personal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
