import React from "react";
import CustomButton from "./CustomButton";
import Link from "next/link";
import Icons from "./Icons";
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
  descriptionClass,
}) => {
  return (
    <div className="overflow-hidden ">
      <div className={`py-[68px] px-5 relative ${cardTheme || "bg-blue"}`}>
        <div className={`max-w-[1140px] mx-auto px-5 2xl:px-0 relative z-15`}>
          <div className="flex flex-row flex-wrap">
            <div className={`w-6/12 flex flex-col gap-7`}>
              <div className="flex flex-col gap-2">
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
                    } size-14 rounded-full flex items-center justify-center`}
                  >
                    <p
                      className={`${
                        levelTextTheme || "text-white"
                      } font-semibold leading-none text-custom-4xl `}
                    >
                      {level}
                    </p>
                  </div>
                  <h3
                    className={`text-custom-5xl max-lg:text-4xl max-lg:text-center max-md:text-custom-4xl max-sm:text-3xl leading-120 font-semibold ${headingClass} ${
                      textColor || "text-white"
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <Description
                  className={`${descriptionClass} ${
                    textColor || "text-white"
                  } opacity-80 max-lg:text-center`}
                  text={description}
                />
              </div>
              <div className="flex flex-col gap-3">
                <p
                  className={`${
                    textColor || "text-white"
                  } text-dark-black leading-120 font-semibold capitalize text-custom-4xl`}
                >
                  Skills Developed
                </p>
                <div
                  className={`${
                    textColor || "text-white"
                  } flex flex-col text-base leading-normal font-normal pl-5`}
                >
                  {skills}
                </div>
              </div>
              <div>
                <p
                  className={`${
                    textColor || "text-white"
                  } text-dark-black leading-120 font-semibold capitalize text-custom-4xl`}
                >
                  Tools Used
                </p>
                <div>{toolsImage}</div>
                {/* <Image
                  width={164}
                  height={27}
                  src={}
                  alt="tools-images"
                  className="w-full h-full object-contain"
                /> */}
              </div>
            </div>
            <div className={`w-6/12 flex justify-end`}>
              <div className={`w-full max-w-[347px] flex flex-col gap-6`}>
                <Image
                  width={347}
                  height={447}
                  src={imageSrc}
                  alt="journey-cards-image"
                  className={`${imageClass} w-full max-w-[347px] h-[447px] rounded-3xl`}
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
          width={584}
          height={460}
          alt="layer"
          className="absolute pointer-events-none top-10 z-10 -right-[50px] max-lg:bottom-0"
          src={"/assets/images/png/pupilo-card-layer.png"}
        />
        {/* <Image
          className={`absolute z-20 max-lg:relative max-lg:mx-auto max-lg:!right-0 max-sm:w-full ${imageClass}`}
          style={{ right: rightPosition || "20px" }}
          width={imageWidth}
          height={290}
          alt={imageAlt}
          src={imageSrc}
        /> */}
      </div>
    </div>
  );
};

export default PupiloCard;
