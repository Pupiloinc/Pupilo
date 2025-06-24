import React from 'react'
import CustomButton from '../common/CustomButton'
import { GENERAL_PUPILO_LIST } from '../../../utils/helper'
import Image from 'next/image'
import Link from 'next/link'
import Icons from '../common/Icons'

const YouMayLike = () => {
    return (
        <div className="pt-[160px]">
            <div className='container max-w-[1140px] xl:px-0  px-4 mx-auto'>
                <div className="flex justify-between flex-col lg:flex-row items-start max-lg:gap-3">
                    <h2 className='font-semibold text-3xl lg:text-5xl leading-120 text-dark-black'>You May Also Like</h2>
                    <CustomButton
                        text="See All" />
                </div>
                <div className="grid xl:gap-6 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-6 lg:mt-10 pb-4">
                    {GENERAL_PUPILO_LIST.map((general) => (
                        <div key={general.id} className="bg-white md:rounded-[24px] rounded-xl shadow-light-dark hover:shadow-2xl transition-all duration-300 sm:p-3 xl:p-4 max-sm:py-4 max-sm:px-3 text-left">
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
                            <h3 className="md:text-2xl text-xl font-semibold spacing-120 md:mb-3 mb-2">{general.title}</h3>
                            <p className="md:text-base text-sm text-dark-black lg:mb-4 mb-3 font-normal spacing-150">{general.description}</p>
                            <Link href="#" className='flex items-center group gap-1 text-base font-semibold underline transition-all duration-300'>Learn More <span className='group-hover:translate-x-2 transition-all duration-300' ><Icons icon="blackBtnArrow" /></span></Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default YouMayLike