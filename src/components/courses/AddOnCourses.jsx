import React from "react";
import Title from "../common/Title";
import { ADD_ON_COURSES_DATA } from "../../../utils/helper";
import TechJourneyCards from "../common/TechJourneyCards";

const AddOnCourses = () => {
  return (
    <div className="pt-[60px] sm:pt-[100px] lg:pt-32 xl:pt-40">
      <Title
        text={"Add-on Courses"}
        className={"md:px-6 px-4 pb-10 md:pb-[60px] text-center"}
      />
      {ADD_ON_COURSES_DATA.map((item, index) => (
        <TechJourneyCards
          id={item.id}
          key={index}
          badge={item.grade}
          title={item.title}
          headingClass={`max-lg:mx-auto`}
          descriptionClass={`max-w-[606px] max-lg:mx-auto`}
          skills={
            <ul className="list-disc pl-3 marker:text-sm">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          }
          cardTheme={item.cardTheme}
          description={item.description}
          buttonText={item.buttonText}
          imageSrc={item.image}
          levelCircle="hidden"
          buttonIconcolor={item.buttonTheme === "white" ? "#010101" : "#FFFFFF"}
          badgeBorder={`border-${item.badgeBorder}`}
          textColor={`text-${item.textColor}`}
          levelTextTheme={item.levelTextTheme}
          level={index + 1}
          starVectorClass={
            index === 1 || index === 3
              ? "opacity-75"
              : "opacity-20 sm:opacity-35"
          }
          buttonClass={`${item.buttonTheme === "white"
              ? "!bg-white !text-dark-black"
              : "!bg-dark-black !text-white"
            }  w-full text-center justify-center`}
          ourTools="hidden"
        />
      ))}
    </div>
  );
};

export default AddOnCourses;
