import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import Image from 'next/image'
import { TOP_RATED_LIST } from '../../../utils/helper'

const WhyPupilo = () => {
    return (
        <div className="py-40 max-lg:py-[100px] max-md:py-[60px]">
            <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto'>
                <div className="flex justify-between gap-5 max-lg:flex-col mb-6 max-lg:pb-5 items-center">
                    <div className="max-w-[627px] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center">
                        <Title text="Learn our Difference:
                            Why Pupilo?" className="max-w-[506px] max-lg:mx-auto max-lg:text-center" />
                        <Description text="Pupilo goes beyond teaching syntax and commands. Pupilo nurtures cognitive development and life skills that shape confident, adaptable learners." className="opacity-80 mt-2 max-lg:text-center" />
                        <CustomButton iconColor="#010101" text="Learn More" className="mt-6" />
                    </div>
                    <div className="max-lg:w-full max-lg:flex max-lg:justify-center">
                        <Image
                            src="/assets/images/webp/why-pupilo.webp"
                            alt='why-pupilo'
                            width="364"
                            height="272"
                            className='max-lg:max-w-[600px] max-lg:w-full'
                        />
                    </div>
                </div>
                <div className="flex justify-between max-lg:flex-col gap-5">
                    <div className="max-w-[364px] max-lg:max-w-full max-lg:justify-center max-lg:items-center max-lg:flex-col max-lg:flex w-full py-[30.49px] px-[52px] bg-white shadow-light-dark rounded-3xl">
                        <p className='font-medium text-custom-4xl leading-120 text-center text-dark-black'>Top Rated</p>
                            <div className='flex mt-6 max-lg:mt-5 max-md:mt-4'>
                                {TOP_RATED_LIST.map((item , index) => (
                                <Image src={item} alt={`top-rated-${index}`} key={index} className={`size-[71px] border-solid border-4 border-white rounded-full ${index !== 0 && 'ml-[-25px]'}`} width={71} height={71}/> 
                            ))}
                            </div>
                        <p className='font-normal text-base leading-150 text-dark-black opacity-80 mt-6 text-center'>Over 2000 happy parents reviews.</p>
                    </div>
                    <div className="max-w-[752px] max-sm:pb-3 max-sm:flex-col relative max-lg:max-w-full w-full bg-white shadow-light-dark rounded-3xl flex gap-[6px] overflow-hidden">
                        <div className="py-14 max-sm:pt-6 max-sm:pl-6 pl-8 ">
                            <p className='font-medium text-custom-4xl leading-120 text-dark-black max-w-[344px] pb-3 max-md:pb-2'>Fun, Culturally-Relevant Learning</p>
                            <p className='font-normal text-base leading-150 text-dark-black opacity-80 max-[1100px]:max-w-[254px] max-lg:max-w-[400px] max-md:max-w-[350px] max-w-[344px]'>We blend storytelling, games, and projects that reflect African stories, heroes, and settings.</p>
                        </div>
                        <div>
                            <div className="w-[370px] h-[100px] max-sm:hidden bg-[linear-gradient(0deg,_#FFFFFF00_0%,_#FFFFFF_100%)] absolute top-0 right-0 z-10"></div>
                            <div className="w-[370px] h-[100px] max-sm:hidden bg-[linear-gradient(180deg,_#FFFFFF00_0%,_#FFFFFF_100%)] absolute bottom-0 right-0 z-10"></div>
                            <div>
                                <Image src={'/assets/images/webp/why-pupilo-icon.webp'} width={210} height={476} alt='why-pupilo-icon' className='absolute right-[9%] max-md:right-[1%] max-sm:hidden top-[-42%] rotate-15'/>
                                <Image width={863} height={208} className='sm:hidden scale-[1.6] max-[400px]:scale-[1.9] max-[400px]:translate-y-[-29px] max-sm:translate-y-[-23px]' src={'/assets/images/webp/why-pupilo-icon-small-scrren-image.webp'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyPupilo