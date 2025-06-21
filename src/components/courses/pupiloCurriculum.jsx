import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Image from "next/image";

const PupiloCurriculum = () => {
  return (
    <div className="max-md:bg-fade-purple bg-pupilo-curriculum bg-full max-lg:!bg-cover sm:py-20 py-[60px] relative mt-[60px] md:mt-[100px] lg:mt-32 xl:mt-40 overflow-hidden">
      <div className="container max-w-[1140px] xl:px-0 sm:px-6 px-4 mx-auto">
        <Title
          text="Pupilo’s Curriculum"
          className="text-center !leading-[160%] mb-1"
        />
        <Description
          text=" A Transformative Tech Journey from Curiosity to Creation"
          className="text-center !text-dark-grey sm:mb-6 mb-4"
        />
        <p className="font-normal sm:text-xl text-base leading-150 text-dark-black max-w-[820px] mx-auto text-center">
          Pupilo’s curriculum is designed as a progressive pathway that guides
          learners from the basics of computer programming to building
          real-world applications in advanced technologies like AI, data
          science, and full-stack development. Through four levels of structured
          learning and engaging add-on programs, Pupilo makes coding accessible,
          exciting, and deeply relevant to African learners.{" "}
          <br className="lg:flex hidden" /> Each course is powered by
          interactive tools, storytelling, game-based learning, and real-world
          problem-solving, ensuring kids and teens not only understand
          concepts—but apply them meaningfully.
        </p>
      </div>
    </div>
  );
};

export default PupiloCurriculum;
