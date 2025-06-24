import React from "react";
import Image from "next/image";
import Title from "../common/Title";
import Icons from "../common/Icons";
import Link from "next/link";
import CustomButton from "../common/CustomButton";
import { GENERAL_PUPILO_LIST } from "../../../utils/helper";

// Utility to convert title to slug
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')      // Remove all non-word chars
    .replace(/\-\-+/g, '-')        // Replace multiple - with single -
    .replace(/^-+/, '')              // Trim - from start of text
    .replace(/-+$/, '');             // Trim - from end of text
}

const GeneralPupiloTopic = ({
  viewMoreBtn = "",
  heading,
  headingClass = "",
  paragraphClass = "",
  seeAllBtn = "",
  className = "",
}) => {
  return (
    <div className="lg:pt-[160px] md:pt-[100px] pt-[60px] px-4">
      <div className="max-w-[1140px] mx-auto">
        <div
          className={`${className} flex flex-col items-center`}
        >
          <Title
            text={heading}
            className={`${headingClass} text-center md:!leading-[121%]`}
          />
          <p
            className={`${paragraphClass} text-dark-grey max-w-[490px] text-base text-center font-normal mx-auto mb-6 lg:mb-10 mt-3`}
          >
            In this section, we cover a wide range of topics to support every
            learner on their coding journey.
          </p>
          <CustomButton
            iconColor="#010101"
            text="See all"
            className={`${seeAllBtn} !bg-yellow !px-[22px]`}
          />
        </div>
        <div className="grid xl:gap-6 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GENERAL_PUPILO_LIST.map((general) => (
            <div
              key={general.id}
              className="bg-white md:rounded-[24px] rounded-xl shadow-light-dark hover:shadow-2xl transition-all duration-300 xl:p-4 max-sm:py-4 max-sm:px-3 text-left"
            >
              <div className="w-full relative overflow-hidden mb-4">
                <Image
                  src={general.image}
                  alt={general.title}
                  width={332}
                  height={220}
                  className="object-cover lg:max-w-[332px] xl:min-h-[220px] w-full rounded-xl"
                />
              </div>
              <p className="text-base text-purple font-normal lg:mb-4 mb-2">
                By {general.author} on {general.date}
              </p>
              <h3 className="md:text-2xl text-xl font-semibold spacing-120 md:mb-3 mb-2">
                {general.title}
              </h3>
              <p className="md:text-base text-sm text-dark-black lg:mb-4 mb-3 font-normal spacing-150">
                {general.description}
              </p>
              <Link
                href={`/blog/${slugify(general.title)}`}
                className="flex items-center group gap-1 text-base font-semibold underline transition-all duration-300"
              >
                Learn More{" "}
                <span className="group-hover:translate-x-2 transition-all duration-300">
                  <Icons icon="blackBtnArrow" />
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className={`${viewMoreBtn} mt-6 lg:mt-10 flex justify-center`}>
          <CustomButton
            iconColor="#010101"
            text="View More"
            className="!bg-yellow !px-[22px]"
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralPupiloTopic;
