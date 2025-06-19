import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import PupiloCard from '../common/PupiloCard'
import { PUPILO_CURRICULUM_LIST } from '../../../utils/helper'

const PupiloCurriculum = () => {
    return (
      <div className='py-[160px] max-lg:py-[100px] max-md:py-[60px]'>
        <div className="container max-w-[1140px] xl:px-0 px-6 max-sm:px-4 mx-auto">
          <div className="pb-10">
            <Title
              text={
                "Pupilo’s Curriculum: A Transformative Tech Journey from Curiosity to Innovation."
              }
              className={"max-w-[1140px] mx-auto  text-center pb-4"}
            />
            <p className="font-semibold text-2xl max-lg:text-xl text-center max-md:text-lg leading-120 text-dark-grey">
              Choose Your Learning Path
            </p>
          </div>
          <div className="flex flex-col gap-6 max-lg:gap-5 max-md:gap-4">
            {PUPILO_CURRICULUM_LIST.map((item, index) => (
              <PupiloCard
                key={index}
                title={item.title}
                headingClass={`max-w-[433px]`}
                descriptionClass={`max-w-[523px]`}
                cardTheme={`bg-${item.cardTheme}`}
                description={item.description}
                imageClass={'max-lg:translate-y-7 max-md:translate-y-6 max-sm:translate-y-4 bottom-0'}
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
                buttonClass={`${
                  item.buttonTheme === "white"
                    ? "!bg-white !text-dark-black"
                    : "!bg-dark-black !text-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default PupiloCurriculum