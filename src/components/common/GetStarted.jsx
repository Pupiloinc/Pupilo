import React from "react";
import Heading from "./Title";
import Paragraph from "./Description";
import CustomButton from "./CustomButton";

const GetStarted = () => {
  return (
    <div className="container max-w-[1140px] xl:px-0 px-6 mx-auto py-[60px] sm:py-40">
      <div className=" bg-purple rounded-3xl min-h-[352px] py-[52px]">
        <Heading
          className={"text-center text-white max-w-[573px] mx-auto"}
          text={"Start Your Child’s Coding Journey Today!"}
        />
        <Paragraph
          className={"text-center text-white/80 max-w-[420px] mx-auto pt-2"}
          text={
            "Personalized session with a vetted instructor. Watch your child build their first project in 45 minutes."
          }
        />
        <CustomButton className={"mx-auto mt-6 !bg-white text-purple"} text={"Get Started"} />
      </div>
    </div>
  );
};

export default GetStarted;
