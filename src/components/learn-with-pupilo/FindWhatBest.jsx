// components/ComparisonTable.jsx
import React from "react";
import StarRating from "./StarRating";
import Image from "next/image";
import Title from "../common/Title";

const ComparisonTable = () => {

  const FORMAT_COMPARISON_DATA = [
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



  return (
    <div className="max-md:bg-fade-purple bg-our-coding bg-full relative sm:py-20 py-[60px]">

      <div className="container max-w-[1140px] xl:px-0 sm:px-6 px-4 mx-auto">
        <Title
          text="Find What Fits Best"
          className="text-center !leading-[160%] mb-[60px]"
        />
        <div className="overflow-x-scroll">
          <div className="xl:max-w-[1124px] mx-auto">
            <div className="flex items-center gap-[33px]  font-semibold text-sm sm:text-base text-dark-black pb-6">
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Format</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px] text-start">Personalization</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Collaboration</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Structure</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Flexibility</p>
              <p className="font-semibold text-xl leading-120 text-dark-black min-w-[157px]">Best For</p>
            </div>
            {FORMAT_COMPARISON_DATA.map((row, i) => (
              <div key={i} className={`flex items-center gap-[33px] ${i !== FORMAT_COMPARISON_DATA.length - 1 ? "pb-3" : ""}`}>
                <p className="font-normal text-base leading-150 text-dark-black min-w-[157px]">{row.format}</p>
                <StarRating count={row.personalization} />
                <StarRating count={row.collaboration} />
                <StarRating count={row.structure} />
                <StarRating count={row.flexibility} />
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
