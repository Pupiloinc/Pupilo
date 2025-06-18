import React from 'react'
import Paragraph from './Paragraph'
import CustomButton from './CustomButton'
import Link from 'next/link'
import Icons from './Icons'

const PupiloCard = () => {
  return (
    <div className='container p-4 max-w-[1140px] mx-auto'>
        <div className='p-8 max-sm:p-4 bg-yellow rounded-3xl flex flex-wrap'>
            <div className='w-1/2 max-lg:w-full'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <h3 className={`text-custom-5xl max-lg:text-4xl max-md:text-custom-4xl max-sm:text-3xl leading-120 font-semibold text-white`}>Coding Fundamental</h3>
                        <Paragraph className={'text-white'} text={`Young learners begin their journey with visual tools like ScratchJr and Blockly. Focus on basic logic, sequences, loops, and cause-effect thinking. Students build interactive animations, tell stories through code, and develop foundational logic.`}/>
                    </div> 
                    <div className='flex gap-10 max-sm:gap-4 items-center'>
                        <CustomButton text={'Try a Free Lesson'} className={'!bg-white'}/>
                        <Link className='font-bold flex group items-center text-white' href={'#learn-more'}>Learn More <span className='flex size-6 group-hover:translate-x-2 transition-all duration-300 max-sm:size-4 justify-center items-center'> <Icons icon={'arrowIcon'} /> </span> </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PupiloCard