import React from 'react'
import Title from '../common/Title'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import Image from 'next/image'

const WhyPupilo = () => {
    return (
        <div className="py-40">
            <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto'>
                <div className="flex justify-between items-center">
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
                <div className="flex justify-between">
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
                </div>
            </div>
        </div>
    )
}

export default WhyPupilo