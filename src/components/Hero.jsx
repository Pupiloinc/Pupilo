import React from "react";
import CustomButton from "./common/CustomButton";
import Image from "next/image";
import Link from "next/link";
import Icons from "./common/Icons";
import Header from "./common/Header";

const Hero = () => {
  return <div className="bg-[url(/assets/images/webp/bg-hero.webp)] bg-cover bg-no-repeat bg-center relative">
    <Header />
    <div className="container max-w-[1140px] xl:px-0 px-6 mx-auto">
      <div className="flex justify-between mt-[60px] pb-[60px] md:pb-[100px] lg:pb-[120px] max-lg:flex-col max-lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="max-lg:mx-auto py-2 lg:py-[11.2px] border border-purple/15 px-4 lg:px-5 rounded-full bg-purple/10 w-fit lg:max-w-[239px] lg:w-full font-semibold text-sm md:text-base leading-100 text-nowrap text-purple">🏆Top-Rated by Parents</div>
          <h2 className="max-lg:text-center font-semibold text-custom-5xl lg:text-custom-6xl leading-120 text-dark-black mt-4 relative z-10">Where Every Child can <span className="text-purple block">
            Code, <span className="relative">Create <Icons icon="heroTextEllipse" className="absolute top-2 -right-8 max-sm:size-7" /></span> and Thrive.</span></h2>
          <div className="mt-6 flex gap-3 relative z-10 max-lg:justify-center">
            <CustomButton iconColor="#FFF" text="Try a Free Lesson" />
            <Link href="#">
              <div className="min-w-[52px] h-[52px] bg-dark-black rounded-full flex justify-center items-center hover:animate-pulse">
                <Icons icon="whatsappIcon" />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-lg:mt-8">
          <Image className="relative z-10" src="/assets/images/webp/home-hero.webp" width={550} height={527} alt="home-hero" />
        </div>
      </div>
    </div>
    <Image className="absolute top-[50%] left-[4%] max-lg:hidden" src="/assets/images/svg/hero-purple-ellipse.svg" width={240} height={240} alt="purple-ellipse" />
    <Image className="absolute right-[4%] top-[30%] max-lg:hidden" src="/assets/images/svg/hero-yellow-ellipse.svg" width={240} height={240} alt="yellow-ellipse" />
  </div>;
};

export default Hero;
