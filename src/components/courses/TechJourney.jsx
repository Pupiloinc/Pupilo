import React from "react";
import Title from "../common/Title";
import TechJourneyCards from "../common/TechJourneyCards";
import { TECH_JOURNEY_CARDS_LIST } from "../../../utils/helper";
import Image from "next/image";

const TechJourney = () => {
  return (
    <div>
      <div className="pb-[60px] pt-40 px-5 2xl:px-0">
        <Title
          text={
            "Pupilo’s Curriculum: A Transformative Tech Journey from Curiosity to Innovation."
          }
          className={"max-w-[1140px] mx-auto  text-center pb-4"}
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
          descriptionClass={`max-w-[523px] max-lg:mx-auto`}
          skills={
            <ul className="list-disc">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          }
          toolsImage={item.tools.map((obj, index) => (
            <Image
              width={164}
              height={27}
              src={obj}
              alt="tools-img"
              key={index}
            />
          ))}
          cardTheme={`bg-${item.cardTheme}`}
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
