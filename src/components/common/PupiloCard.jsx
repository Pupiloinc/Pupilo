import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import Icons from './Icons'
import Image from 'next/image'
import Description from './Description'

const PupiloCard = ({ title, description, buttonText, buttonClass, buttonIconcolor, imageWidth, imageAlt, imageSrc, cardTheme, textColor, rightPosition, learnMoreLink, learnMoreIcon, imageClass, headingClass, descriptionClass }) => {
    return (
        <div className='overflow-hidden '>
            <div className={`p-8 max-lg:p-7 max-md:p-6 max-sm:p-4 relative rounded-3xl max-md:rounded-2xl max-sm:rounded-xl flex max-lg:flex-col max-lg:gap-6 max-md:gap-3 ${cardTheme || 'bg-light-purple'}`}>
                <div className={`w-full`}>
                    <div className={`flex flex-col gap-6`}>
                        <div className='flex flex-col gap-3'>
                            <h3 className={`text-custom-5xl max-lg:text-4xl max-lg:text-center max-md:text-custom-4xl max-sm:text-3xl leading-120 font-semibold ${headingClass} ${textColor || 'text-white'}`}>{title}</h3>
                            <Description className={`${descriptionClass} ${textColor || 'text-white'} opacity-80 max-lg:text-center`} text={description} />
                        </div>
                        <div className='flex gap-10 max-sm:gap-4 max-lg:justify-center items-center'>
                            <CustomButton iconColor={buttonIconcolor || '#010101'} text={buttonText} className={buttonClass || 'bg-white'} />
                            <Link className={`font-bold flex group underline items-center ${textColor || 'text-white'}`} href={learnMoreLink || '#learn-more'}>Learn More <span className='flex size-6 group-hover:translate-x-2 transition-all duration-300 max-sm:size-4 justify-center items-center'> <Icons fill={learnMoreIcon} icon={'arrowIcon'} /> </span> </Link>
                        </div>
                    </div>
                </div>
                <Image width={584} height={460} alt='layer' className='absolute pointer-events-none top-10 z-10 -right-[50px] max-lg:bottom-0' src={'/assets/images/png/pupilo-card-layer.png'} />
                <Image className={`absolute z-20 max-lg:relative max-lg:mx-auto max-lg:!right-0 max-sm:w-full ${imageClass}`} style={{ right: rightPosition || '20px' }} width={imageWidth} height={290} alt={imageAlt} src={imageSrc} />
            </div>
        </div>
    )
}

export default PupiloCard