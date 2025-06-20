import React from "react";
import StarRating from "./StarRating";
import Title from "../common/Title";

const ComparisonTable = () => {

  const FORMAT_COMPARISON_DATA_LIST = [
    {
      format: "1-on-1",
      personalization: 5,
      collaboration: 1,
      structure: 5,
      flexibility: 2,
      bestFor: "Focused learners & passion projects.",
    },
    {
      format: "Group",
      personalization: 2,
      collaboration: 5,
      structure: 3,
      flexibility: 1,
      bestFor: "Social learners, teamwork fans.",
    },
    {
      format: "Self-Paced",
      personalization: 4,
      collaboration: 2,
      structure: 4,
      flexibility: 5,
      bestFor: "Independent explorers.",
    },
    {
      format: "Camps",
      personalization: 2,
      collaboration: 4,
      structure: 3,
      flexibility: 5,
      bestFor: "High-energy kids, quick wins.",
    },
  ];

  const FIND_BEST_HEADING_DATA_LIST = [
    "Format",
    "Personalization",
    "Collaboration",
    "Structure",
    "Flexibility",
    "Best For",
  ];

  return (
    <div className="max-md:bg-fade-purple bg-find-best  bg-full max-lg:!bg-cover relative sm:pt-20 sm:pb-[64px] py-[60px]">

      <div className="container max-w-[1140px] xl:px-0 sm:px-6 px-4 mx-auto">
        <Title
          text="Find What Fits Best"
          className="text-center !leading-[160%] xl:mb-[60px] lg:mb-10 mb-7"
        />
        <div className="overflow-x-scroll scrollbar-custom xl:ps-4">
          <div className="xl:max-w-[1124px] mx-auto">
            {/* <div className="flex items-center gap-[33px]  font-semibold text-sm sm:text-base text-dark-black lg:pb-6 pb-5">
              <p className="font-semibold text-xl leading-120 text-dark-black xl:min-w-[157px] min-w-[90px]">Format</p>
              <p className="font-semibold text-xl leading-120 text-dark-black text-start min-w-[157px]">Personalization</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Collaboration</p>
              <p className="font-semibold text-xl leading-120 text-dark-black xl:min-w-[157px] min-w-[110px]">Structure</p>
              <p className="font-semibold text-xl leading-120 text-dark-black xl:min-w-[157px] min-w-[110px]">Flexibility</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Best For</p>
            </div> */}
          <div className="flex items-center gap-[33px] font-semibold text-sm sm:text-base text-dark-black lg:pb-6 pb-5">
            {FIND_BEST_HEADING_DATA_LIST.map((heading, index) => (
              <p
                key={index}
                className={`font-semibold text-xl leading-120 text-dark-black text-start
        ${heading === "Format"
                    ? "xl:min-w-[157px] min-w-[90px]"
                    : heading === "Structure" || heading === "Flexibility"
                      ? "xl:min-w-[157px] min-w-[110px]"
                      : "min-w-[157px]"}
       
      `}
              >
                {heading}
              </p>
            ))}
          </div>
          {FORMAT_COMPARISON_DATA_LIST.map((row, i) => (
            <div key={i} className={`flex items-center gap-[33px] pb-3`}>
              <p className="font-normal text-base leading-150 text-dark-black  xl:min-w-[157px] min-w-[90px]">{row.format}</p>
              <StarRating count={row.personalization} />
              <StarRating className="" count={row.collaboration} />
              <StarRating className="xl:!min-w-[157px] !min-w-[110px]" count={row.structure} />
              <StarRating className="xl:!min-w-[157px] !min-w-[110px]" count={row.flexibility} />
              <p className="font-normal text-base leading-150 text-dark-black min-w-[157px]">{row.bestFor}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      </div>

  );
};

export default ComparisonTable;
