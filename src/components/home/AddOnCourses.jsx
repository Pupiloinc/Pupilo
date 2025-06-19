import React from "react";
import Title from "../common/Title";
import { ADD_ON_COURSES_LIST } from "../../../utils/helper";
import PupiloCard from "../common/PupiloCard";

const AddOnCourses = () => {
  return <div className="pb-[160px] max-lg:pb-[100px] max-md:pb-[60px]">
    <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto">
      <Title
        text={
          "Add-on Courses"
        }
        className={"max-w-[1140px] mx-auto text-center pb-10"}
      />
      <div className="flex flex-col gap-6 max-lg:gap-5 max-md:gap-5">
        {ADD_ON_COURSES_LIST.map((item, index) => (
          <PupiloCard
            key={index}
            title={item.title}
            headingClass={`max-w-[692px] max-[1100px]:max-w-[690px] max-lg:mx-auto`}
            descriptionClass={`max-w-[472px] max-lg:mx-auto`}
            cardTheme={`bg-${item.cardTheme}`}
            description={item.description}
            imageClass={'lg:-translate-y-1/2 top-1/2 max-sm:w-[90%]'}
            buttonText={item.buttonText}
            imageSrc={item.image}
            imageAlt={item.title}
            imageWidth={item.imageWeight}
            rightPosition={`${item.rightPosition}px`}
            buttonIconcolor={
              item.buttonTheme === "white" ? "#010101" : "#FFFFFF"
            }
            learnMoreIcon={
              item.buttonTheme === "white" ? "#fff" : "#010101"
            }
            textColor={`text-${item.textColor}`}
            buttonClass={`${item.buttonTheme === "white"
                ? "!bg-white !text-dark-black"
                : "!bg-dark-black !text-white"
              }`}
          />
        ))}
      </div>

    </div>
  </div>;
};

export default AddOnCourses;
