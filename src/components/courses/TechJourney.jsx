import React from "react";
import Title from "../common/Title";
import TechJourneyCards from "../common/TechJourneyCards";
import { TECH_JOURNEY_CARDS_LIST } from "../../../utils/helper";
import Image from "next/image";

const TechJourney = () => {
  return (
    <div>
      <div className="md:py-[60px] pb-6 pt-[60px] sm:pt-[100px] lg:pt-32 xl:pt-40 md:px-6 px-4 2xl:px-0">
        <Title
          text={
            "Pupilo’s Curriculum: A Transformative Tech Journey from Curiosity to Innovation."
          }
          className={"max-w-[1140px] mx-auto text-center pb-4"}
        />
        <p className="font-semibold text-2xl max-lg:text-xl text-center max-md:text-lg leading-120 text-dark-grey">
          Choose Your Learning Path
        </p>
      </div>
      {TECH_JOURNEY_CARDS_LIST.map((item, index) => (
        <TechJourneyCards
          key={index}
          badge={item.grade}
          title={item.title}
          headingClass={`max-w-[510px] max-lg:mx-auto`}
          descriptionClass={`max-w-[606px] max-lg:mx-auto`}
          skills={
            <ul className="list-disc">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          }
          toolsImage={item.tools.map((obj, index) => {
            let width = 164;
            let height = 27;
            if (item.title === "Little Explorers") {
              if (index === 0) {
                width = 124;
                height = 34;
              } else if (index === 1) {
                width = 164;
                height = 27;
              } else if (index === 2) {
                width = 99;
                height = 33;
              }
            } else if (item.title === "Little Creators") {
              if (index === 0) {
                width = 35;
                height = 35;
              } else if (index === 1) {
                width = 124;
                height = 34;
              } else if (index === 2) {
                width = 136;
                height = 34;
              }
            } else if (item.title === "Little Programmers") {
              if (index === 0) {
                width = 68;
                height = 32;
              } else if (index === 1) {
                width = 98;
                height = 32;
              } else if (index === 2) {
                width = 143;
                height = 55;
              }
            } else if (item.title === "Master Programmers") {
              if (index === 0) {
                width = 38;
                height = 34;
              } else if (index === 1) {
                width = 92;
                height = 34;
              } else if (index === 2) {
                width = 125;
                height = 34;
              }
            }
            return (
              <Image
                width={width}
                height={height}
                src={obj}
                alt="tools-img"
                key={index}
              />
            );
          })}
          cardTheme={item.cardTheme}
          description={item.description}
          buttonText={item.buttonText}
          imageSrc={item.image}
          levelCircle={`bg-${item.buttonTheme}`}
          buttonIconcolor={item.buttonTheme === "white" ? "#010101" : "#FFFFFF"}
          badgeBorder={`border-${item.badgeBorder}`}
          textColor={`text-${item.textColor}`}
          levelTextTheme={item.levelTextTheme}
          level={index + 1}
          buttonClass={`${
            item.buttonTheme === "white"
              ? "!bg-white !text-dark-black"
              : "!bg-dark-black !text-white"
          }  w-full text-center justify-center`}
        />
      ))}
    </div>
  );
};

export default TechJourney;
