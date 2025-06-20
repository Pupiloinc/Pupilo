import React from 'react'
import Title from '../common/Title'
import { FORMAT_GALLERY_DATA_LIST } from '../../../utils/helper'
import Icons from '../common/Icons'
import Image from 'next/image'

const Gallery = () => {
    return (
        <div className='container max-w-[1140px] xl:px-0 px-6 mx-auto '>
            <Title
                text="Learning Formats Gallery"
                className="text-center mb-[60px]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                {FORMAT_GALLERY_DATA_LIST.map((card, idx) => (
                    <div
                        key={idx}
                        className={`${card.bgColor} ${card.textColor} rounded-3xl py-8 ps-8 pe-[60px] mx-auto w-full relative`}
                    >
                        <Image className='absolute top-0 right-0' width={270} height={220} src="/assets/images/svg/gallery-ellipse.svg" alt='gallery-ellipse'/>
                        <h2 className="font-semibold text-custom-4xl leading-120 text-white mb-4">{card.title}</h2>
                        <ul className="list-disc pl-5 mb-6">
                            {card.points.map((point, index) => (
                                <li key={index} className="font-normal text-base leading-150 text-white/80">{point}</li>
                            ))}
                        </ul>
                        <button href="#" className="font-semibold text-base leading-100 text-white underline flex items-center gap-2.5">
                            Try a Free Lesson

                            <Icons icon="btnArrow" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery