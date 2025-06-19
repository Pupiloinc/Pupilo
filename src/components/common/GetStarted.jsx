import React from "react";
import Heading from "./Title";
import Paragraph from "./Description";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Description from "./Description";

const GetStarted = () => {
  return (
    <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto py-[60px] sm:py-[100px] lg:py-40">
      <div className=" bg-purple rounded-3xl min-h-auto sm:min-h-[352px] py-10 sm:py-[52px] max-sm:px-4 relative">
        <Image
          src="/assets/images/png/get-started-right-icon.png"
          alt="bg"
          className="absolute pointer-events-none right-0 top-0 max-lg:hidden"
          width={270}
          height={208}
        />
        <Image
          src="/assets/images/png/get-started-top-icon.png"
          alt="bg"
          className="absolute pointer-events-none left-[7%] top-0 max-lg:hidden"
          width={450}
          height={208}
        />
        <Image
          src="/assets/images/png/get-started-bottom-icon.png"
          alt="bg"
          className="absolute pointer-events-none left-0 bottom-0 max-lg:hidden"
          width={330}
          height={100}
        />
        <Heading
          className={"text-center text-white max-w-[573px] mx-auto"}
          text={"Start Your Child’s Coding Journey Today!"}
        />
        <p className="text-center text-white/80 leading-normal px-[1.1px] font-normal mx-auto pt-2">
          Personalized session with a vetted instructor. <br /> Watch your child
          build their first project in 45 minutes.
        </p>
        <CustomButton
          className={"mx-auto mt-6 !bg-white text-purple"}
          iconColor={"#8C52FF"}
          text={"Get Started"}
        />
      </div>
    </div>
  );
};

export default GetStarted;
