import React from 'react'
import { blogs } from '../../../utils/helper'
import Image from 'next/image'
import Title from '../common/Title'
import Description from '../common/Description'
import CustomButton from '../common/CustomButton'
import Link from 'next/link'
import Icons from '../common/Icons'

const OurLatestBlogs = () => {
  return (
    <div className='sm:py-20 py-[60px] bg-our-blog bg-full max-lg:!bg-cover max-md:bg-purple'>
      <div className="container max-w-[1140px] xl:px-0 sm:px-6 px-4 mx-auto">
        <Title
          text="Our Latest Blogs"
          className="text-center lg:mb-10 mb-8 !text-white"
        />

        <div className="mx-auto flex md:flex-row flex-col justify-center gap-6">
          {/* Left Highlighted Blog */}
          {blogs
            .filter((b) => b.highlight)
            .map((blog) => (
              <div
                key={blog.id}
                className="bg-white md:rounded-3xl rounded-2xl blure-2xl sm:p-5 p-4 sm:!pb-6 flex flex-col lg:!max-w-[556px] min-[800px]:!max-w-[410px] md:max-w-[335px]"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={520}
                  height={301}
                  className="md:max-w-[520px] lg:h-[301px] md:h-[170px] sm:h-[250px] rounded-xl object-cover object-top w-full lg:mb-5 mb-4"
                />
                <Description
                  text={`By ${blog.author} on ${blog.date}`}
                  className="!text-purple font-medium lg:mb-3.5 mb-2"
                />
                <h3 className="font-semibold lg:text-custom-3xl text-2xl leading-120 text-dark-black lg:mb-4 md:mb-2 mb-2">{blog.title}</h3>
                <p className="font-normal sm:text-base text-sm leading-160 text-dark-grey lg:mb-7 mb-5 font-inter ">{blog.description}</p>

                <button className="bg-yellow text-dark-black font-semibold lg:text-base text-sm leading-150 sm:py-3.5 py-3 px-8 rounded-full w-fit cursor-pointer hover:shadow-lg transition-all ease-linear duration-300">
                  Learn More
                </button>
              </div>
            ))}

          {/* Right Blog List */}
          <div className="flex flex-col gap-6">
            {blogs
              .filter((b) => !b.highlight)
              .map((blog) => (
                <div
                  key={blog.id}
                  className="bg-white border border-solid border-light-black lg:rounded-3xl rounded-2xl xl:items-start items-center lg:px-4 lg:py-[15px] p-3.5 flex xl:gap-6 gap-4 lg:!max-w-[556px] min-[800px]:!max-w-[410px] md:max-w-[335px]"
                >
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={177}
                    height={184}
                    className="xl:max-w-[177px] md:max-w-[100px] sm:max-w-[140px] max-w-[100px] h-[184px] w-full rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <Description
                      text={`By ${blog.author} on ${blog.date}`}
                      className="!text-purple lg:!text-sm md:text-xs text-sm font-medium xl:mb-4 lg:mb-2 md:mb-1 sm:mb-2 mb-1"
                    />
                    <h4 className="font-medium xl:text-xl lg:text-lg md:text-base sm:text-lg text-base leading-120 text-dark-black xl:mb-4 lg:mb-2 md:mb-1 sm:mb-2 mb-1">{blog.title}</h4>
                    <p className="font-normal lg:text-sm text-xs leading-150 text-dark-grey xl:mb-4 lg:mb-2 md:mb-1 sm:mb-2 mb-1 ellipsis-text">{blog.description}</p>
                    <Link className={`font-semibold xl:text-base lg:text-sm text-xs leading-150 flex group underline items-center w-fit`} href="#" >Learn More<span className='flex size-6 group-hover:translate-x-2 transition-all duration-300 max-sm:size-4 justify-center items-center'>
                      <Icons icon="blackBtnArrow"/>
                    </span>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <CustomButton iconColor="#010101" text="View More" className="!bg-white" />
        </div>
      </div>
    </div>
  )
}

export default OurLatestBlogs