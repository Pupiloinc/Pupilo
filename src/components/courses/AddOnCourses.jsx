import React from "react";
import Title from "../common/Title";
import { ADD_ON_COURSES_DATA } from "../../../utils/helper";
import TechJourneyCards from "../common/TechJourneyCards";

const AddOnCourses = () => {
  return (
    <div className="pt-[60px] sm:pt-20 lg:pt-32 xl:pt-40 ">
      <Title text={"Add-on Courses"} className={"px-5 pb-[60px] text-center"} />
      {ADD_ON_COURSES_DATA.map((item, index) => (
        <TechJourneyCards
          key={index}
          badge={item.grade}
          title={item.title}
          headingClass={`max-lg:mx-auto`}
          descriptionClass={`max-w-[606px] max-lg:mx-auto`}
          skills={
            <ul className="list-disc">
              {item.skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          }
          cardTheme={`bg-${item.cardTheme}`}
          description={item.description}
          buttonText={item.buttonText}
          imageSrc={item.image}
          levelCircle="hidden"
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
          ourTools="hidden"
        />
      ))}
    </div>
  );
};

export default AddOnCourses;
