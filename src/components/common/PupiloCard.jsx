import React from 'react'
import CustomButton from './CustomButton'
import Link from 'next/link'
import Icons from './Icons'
import Image from 'next/image'
import Description from './Description'

const PupiloCard = () => {
    return (
        <div className='container p-4 max-w-[1140px] mx-auto'>
            <div className='p-8 max-lg:p-7 max-md:p-6 max-sm:p-4 relative bg-blue rounded-3xl flex flex-wrap'>
                <div className='w-1/2 max-lg:w-full'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex flex-col gap-3'>
                            <h3 className={`text-custom-5xl max-lg:text-4xl max-lg:text-center max-md:text-custom-4xl max-sm:text-3xl leading-120 font-semibold text-white`}>Coding Fundamental</h3>
                            <Description className={'text-white max-lg:text-center'} text={`Young learners begin their journey with visual tools like ScratchJr and Blockly. Focus on basic logic, sequences, loops, and cause-effect thinking. Students build interactive animations, tell stories through code, and develop foundational logic.`} />
                        </div>
                        <div className='flex gap-10 max-sm:gap-4 max-lg:justify-center items-center'>
                            <CustomButton iconColor={'#010101'} text={'Try a Free Lesson'} className={'!bg-white'} />
                            <Link className='font-bold flex group items-center text-white' href={'#learn-more'}>Learn More <span className='flex size-6 group-hover:translate-x-2 transition-all duration-300 max-sm:size-4 justify-center items-center'> <Icons icon={'arrowIcon'} /> </span> </Link>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 max-lg:w-full max-lg:justify-center max-lg:flex'>
                    <Image width={584} height={400} className='absolute bottom-0 z-10 right-0' src={'/assets/images/png/pupilo-card-layer.png'} />
                    <Image className='absolute bottom-0 z-20 right-5 max-lg:relative max-lg:right-0 max-lg:translate-y-7 max-md:translate-y-6 max-sm:translate-y-4 max-sm:w-full' width={434} height={290} alt='conding-functional' src={'/assets/images/png/coding-fundamental.png'} />
                </div>
            </div>
        </div>
    )
}

export default PupiloCard