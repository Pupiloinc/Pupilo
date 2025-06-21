import React from "react";
import CustomButton from "./CustomButton";
import Image from "next/image";
import Description from "./Description";

const PupiloCard = ({
  title,
  badge,
  description,
  skills,
  buttonText,
  buttonClass,
  buttonIconcolor,
  badgeBorder,
  levelCircle,
  level,
  levelTextTheme,
  toolsImage,
  imageSrc,
  cardTheme,
  textColor,
  imageClass,
  headingClass,
  ourTools,
  descriptionClass,
}) => {
  return (
    <div className="overflow-hidden ">
      <div
        className={`py-10 lg:py-[68px] md:px-6 px-4 relative ${
          cardTheme || "bg-off-purple"
        }`}
      >
        <div className={`max-w-[1140px] mx-auto relative z-15`}>
          <div className="flex flex-row flex-wrap items-center">
            <div
              className={`w-full lg:w-[60%] flex flex-col gap-7 max-lg:items-center`}
            >
              <div className="flex flex-col gap-6 md:gap-7">
                <div className="flex flex-col gap-2 max-lg:items-start">
                  <div
                    className={`${
                      badgeBorder || "border-white"
                    } py-2 px-5 rounded-full border border-solid mb-2 w-max`}
                  >
                    <p
                      className={`${
                        textColor || "text-white"
                      } text-base leading-none font-semibold`}
                    >
                      {badge}
                    </p>
                  </div>
                  <div className="flex gap-4 items-center">
                    <div
                      className={`${
                        levelCircle || "bg-white"
                      } size-10 md:size-12 lg:size-14 rounded-full flex items-center justify-center`}
                    >
                      <p
                        className={`${
                          levelTextTheme || "text-white"
                        } font-semibold leading-none text-2xl sm:text-3xl lg:text-custom-4xl`}
                      >
                        {level}
                      </p>
                    </div>
                    <h3
                      className={`text-5xl max-lg:text-4xl max-md:text-custom-4xl max-sm:text-3xl leading-120 font-semibold ${headingClass} ${
                        textColor || "text-white"
                      }`}
                    >
                      {title}
                    </h3>
                  </div>
                  <Description
                    className={`${descriptionClass} ${
                      textColor || "text-white"
                    } opacity-80`}
                    text={description}
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p
                    className={`${
                      textColor || "text-white"
                    } text-dark-black leading-120 font-semibold capitalize text-2xl sm:text-3xl lg:text-custom-4xl`}
                  >
                    Skills Developed
                  </p>
                  <div
                    className={`${
                      textColor || "text-white"
                    } opacity-80 flex flex-col text-base leading-normal font-normal pl-5`}
                  >
                    {skills}
                  </div>
                </div>
                <div className={`${ourTools} flex gap-[13px] flex-col`}>
                  <p
                    className={`${
                      textColor || "text-white"
                    } text-dark-black leading-120 font-semibold capitalize text-2xl sm:text-3xl lg:text-custom-4xl`}
                  >
                    Tools Used
                  </p>
                  <div className="flex flex-wrap gap-6 md:gap-8 items-center">
                    {toolsImage}
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`w-full lg:w-[40%] flex justify-center max-lg:pt-10 lg:justify-end`}
            >
              <div
                className={`w-full max-w-[480px] lg:max-w-[347px] flex flex-col gap-6`}
              >
                <Image
                  width={347}
                  height={447}
                  src={imageSrc}
                  alt="journey-cards-image"
                  className={`${imageClass} w-full max-lg:object-center max-lg:object-cover max-w-[480px] lg:max-w-[347px] h-[380px] lg:h-[447px] md:rounded-3xl rounded-2xl`}
                />
                <CustomButton
                  iconColor={buttonIconcolor || "#010101"}
                  text={buttonText}
                  className={buttonClass || "bg-white"}
                />
              </div>
            </div>
          </div>
        </div>
        <Image
          width={322}
          height={322}
          alt="layer"
          className="absolute pointer-events-none size-[322px] opacity-60 top-1/2 -translate-y-1/2 z-10 left-0 max-lg:bottom-0"
          src={"/assets/images/svg/star-vector-1.svg"}
        />
        <Image
          width={322}
          height={322}
          alt="layer"
          className="absolute pointer-events-none size-[322px] opacity-60 -top-32 -translate-x-1/2 z-10 left-1/2 max-lg:bottom-0"
          src={"/assets/images/svg/star-vector-2.svg"}
        />
        <Image
          width={322}
          height={322}
          alt="layer"
          className="absolute pointer-events-none size-[322px] opacity-60 bottom-0 z-10 right-0 max-lg:bottom-0"
          src={"/assets/images/svg/star-vector-3.svg"}
        />
      </div>
    </div>
  );
};

export default PupiloCard;
