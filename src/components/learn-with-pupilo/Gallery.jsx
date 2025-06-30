import React from 'react'
import Title from '../common/Title'
import { FORMAT_GALLERY_DATA_LIST } from '../../../utils/helper'
import Icons from '../common/Icons'
import Image from 'next/image'
import Link from 'next/link'

const Gallery = () => {
    return (
        <div className='lg:py-40 md:py-[100px] py-[60px] '>
            <div className='container max-w-[1140px] xl:px-0  px-4 mx-auto '>
                <Title
                    text="Learning Formats Gallery"
                    className="text-center lg:mb-[60px] md:mb-10 sm:mb-8 mb-6"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 gap-4">
                    {FORMAT_GALLERY_DATA_LIST.map((card, i) => (
                        <div
                            key={i}
                            className={`${card.bgColor} md:rounded-3xl rounded-2xl lg:py-8 lg:px-8  md:p-6 p-5 mx-auto w-full relative flex flex-col max-sm:min-h-[215px] hover:shadow-2xl transition-all ease-in-out duration-300`}
                        >
                            <Image className='absolute top-0 right-0 pointer-events-none max-lg:size-[200px] max-sm:size-[150px]' width={270} height={220} src={card.ellipseImage} alt='gallery-ellipse' />
                            <h2 className={`font-semibold z-10 lg:text-custom-4xl md:text-2xl text-xl leading-120 lg:max-w-[360px] lg:mb-4 mb-2  ${i === 1 || i === 2 ? "text-dark-black" : "text-white"}`}>{card.title}</h2>
                            <ul className="lg:mb-6 sm:mb-4 mb-3 ms-2 max-sm:max-w-[290px]">
                                {card.points.map((point, index) => (
                                    <li key={index} className={`relative pl-5 font-normal md:text-base text-sm before:content-[''] before:absolute before:left-0 before:top-[9px] before:rounded-full before:size-[5px]  leading-150  ${i === 1 || i === 2 ? "text-dark-grey before:bg-dark-grey" : "text-white/80 before:bg-white/80"}`}>{point}</li>
                                ))}
                            </ul>

                            <div className='flex  h-full justify-between items-end'>
                                <p className={`text-lg font-semibold ${i === 1 || i === 2 ? "text-dark-black" : "text-white"}`}> {card.price}
                                </p>
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