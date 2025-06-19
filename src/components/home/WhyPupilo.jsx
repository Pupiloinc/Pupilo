import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import Image from 'next/image'
import Marquee from "react-fast-marquee";
import { LEARNING_PLATFORM_LOGO_DATA_LIST, LEARNING_PLATFORM_LOGO_DATA_LIST_TWO } from '../../../utils/helper'

const WhyPupilo = () => {
    return (
        <div className="py-40">
            <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto'>
                <div className="flex justify-between gap-5 max-lg:flex-col mb-6 max-lg:pb-5 items-center">
                    <div className="max-w-[627px]">
                        <Title text="Learn our Difference:
                            Why Pupilo?" className="max-w-[506px]" />
                        <Description text="Pupilo goes beyond teaching syntax and commands. Pupilo nurtures cognitive development and life skills that shape confident, adaptable learners." className="opacity-80 mt-2" />
                        <CustomButton iconColor="#010101" text="Learn More" className="mt-6" />
                    </div>
                    <div className="">
                        <Image
                            src="/assets/images/webp/why-pupilo.webp"
                            alt='why-pupilo'
                            width="364"
                            height="272"
                        />
                    </div>
                </div>
                {/* <div className="flex justify-between">
                    <div className="max-w-[364px] w-full py-[30.49px] px-[52px] bg-white shadow-light-dark rounded-3xl">
                        <p className='font-medium text-custom-4xl leading-120 text-center text-dark-black'>Top Rated</p>
                        <Image
                            src="/assets/images/svg/rated-persons.svg"
                            alt='rated-person'
                            width={259}
                            height={71}
                            className='mt-6'
                        />
                        <p className='font-normal text-base leading-150 text-dark-black opacity-80 mt-6 text-center'>Over 2000 happy parents reviews.</p>
                    </div>
                    <div className="max-w-[752px] relative max-lg:max-w-full w-full bg-white shadow-light-dark rounded-3xl flex gap-[6px] overflow-hidden">
                        <div className="py-14 pl-8 ">
                            <p className='font-medium text-custom-4xl leading-120 text-dark-black max-w-[344px]'>Fun, Culturally-Relevant Learning</p>
                            <p className='font-normal text-base leading-150 text-dark-black opacity-80 max-w-[344px]'>We blend storytelling, games, and projects that reflect African stories, heroes, and settings.</p>
                        </div>
                        <div>
                            <div className="w-[370px] h-[100px] bg-[linear-gradient(0deg,_#FFFFFF00_0%,_#FFFFFF_100%)] absolute top-0 right-0 z-10"></div>
                            <div className="w-[370px] h-[100px] bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] absolute bottom-0 right-0 z-10"></div>
                            <div>
                                <div className="flex flex-col gap-[12px] absolute rotate-[15deg] top-[-24%] right-[24%]">
                                    {LEARNING_PLATFORM_LOGO_DATA_LIST.map((obj, i) => (
                                        <div key={i} className="min-w-[66px] h-[66px] flex justify-center items-center bg-white rounded-lg border border-black/10 shadow-light-dark">
                                            <Image
                                                src={obj}
                                                alt='social-icon'
                                                width={42}
                                                height={42}
                                            />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-[12px] absolute rotate-[15deg] top-[-32%] right-[12.5%]">
                                    {LEARNING_PLATFORM_LOGO_DATA_LIST_TWO.map((obj, i) => (
                                        <div key={i} className="min-w-[66px] h-[66px] flex justify-center items-center bg-white rounded-lg border border-black/10 shadow-light-dark">
                                            <Image
                                                src={obj}
                                                alt='social-icon'
                                                width={42}
                                                height={42}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default WhyPupilo