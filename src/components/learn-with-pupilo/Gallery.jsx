import React from 'react'
import Title from '../common/Title'
import { FORMAT_GALLERY_DATA_LIST } from '../../../utils/helper'
import Icons from '../common/Icons'
import Image from 'next/image'
import Link from 'next/link'

const Gallery = () => {
    return (
        <div className='lg:py-40 md:py-28 sm:py-16 py-10'>
            <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto '>
                <Title
                    text="Learning Formats Gallery"
                    className="text-center lg:mb-[60px] md:mb-10 sm:mb-8 mb-6"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-4">
                    {FORMAT_GALLERY_DATA_LIST.map((card, i) => (
                        <div
                            key={i}
                            className={`${card.bgColor} rounded-3xl lg:py-8 lg:ps-8 lg:pe-[60px] md:p-6 p-5 mx-auto w-full relative flex flex-col max-sm:min-h-[255px]`}
                        >
                            <Image className='absolute top-0 right-0 pointer-events-none max-lg:size-[200px]' width={270} height={220} src={card.ellipseImage} alt='gallery-ellipse' />
                            <h2 className={`font-semibold lg:text-custom-4xl md:text-2xl text-xl leading-120 lg:max-w-[360px] lg:mb-4 mb-2  ${i === 1 || i === 2 ? "text-dark-black" : "text-white"}`}>{card.title}</h2>
                            <ul className="list-disc pl-5 lg:mb-6 sm:mb-4 mb-3">
                                {card.points.map((point, index) => (
                                    <li key={index} className={`font-normal md:text-base text-sm leading-150  ${i === 1 || i === 2 ? "text-dark-grey" : "text-white/80"}`}>{point}</li>
                                ))}
                            </ul>

                            <div className='flex flex-col grow h-full justify-end'>
                                <Link className={`font-semibold md:text-base text-sm leading-150 flex group underline items-center w-fit ${i === 1 || i === 2 ? "text-dark-black" : "text-white"}`} href="#" >Try a Free Lesson <span className='flex size-6 group-hover:translate-x-2 transition-all duration-300 max-sm:size-4 justify-center items-center'>
                                    <Icons icon={i === 1 || i === 2 ? "blackBtnArrow" : "btnArrow"} />
                                </span>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery