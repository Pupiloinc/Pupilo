import React from "react";
import Image from "next/image";
import Link from "next/link";
import Icons from "../common/Icons";
import CustomButton from "../common/CustomButton";
import Header from "../common/Header";

const PupiloHero = () => {
    return <div className="bg-[url(/assets/images/webp/bg-hero.webp)] bg-cover bg-no-repeat bg-center relative">
        <Header />
        <div className="container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto">
            <div className="flex justify-between md:mt-[60px] mt-10 pb-[60px] md:pb-[100px] lg:pb-[120px] max-lg:flex-col max-lg:items-center">
                <div className="w-full lg:w-1/2 lg:mt-6">
                    <div className="max-lg:mx-auto py-2 lg:py-[11.2px] border border-purple/15 px-4 lg:px-5 rounded-full bg-purple/10 w-fit lg:max-w-[245px] lg:w-full font-semibold text-sm md:text-base leading-100 text-nowrap text-purple">🌍Reach of 15+Countries</div>
                    <h2 className="max-lg:text-center font-semibold text-[38px] sm:text-[43px] md:text-5xl lg:text-[58px] xl:text-custom-6xl leading-120 text-dark-black mt-4 relative z-10 lg:max-w-[502px]">More Than Coding. Here’s <span className="text-purple block">
                        Why <span className="relative">Pupilo<Icons icon="heroTextEllipse" className="absolute top-7 rotate-[25deg] -right-10 max-lg:hidden" /></span> Exists.</span></h2>
                    <div className="mt-3 sm:mt-5 md:mt-6 flex gap-3 relative z-10 max-lg:justify-center items-center">
                        <CustomButton iconColor="#010101" text="Try a Free Lesson" />
                        <Link href="#">
                            <div className="min-w-[41px] h-[41px] lg:min-w-[52px] lg:h-[52px] bg-dark-black rounded-full flex justify-center items-center duration-300 ease-linear transition-all hover:opacity-50">
                                <Icons icon="whatsappIcon" />
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex max-lg:mt-8 max-lg:justify-center">
                    <Image className="relative z-10 xl:min-h-[558px]" src="/assets/images/png/why-pupilo-hero.png" width={558} height={558} alt="home-hero" />
                </div>
            </div>
        </div>
        <Image className="absolute top-[50%] left-[3.5%] min-[1700px]:left-[15%] max-lg:hidden pointer-events-none" src="/assets/images/svg/hero-purple-ellipse.svg" width={240} height={240} alt="purple-ellipse" />
        <Image className="absolute right-[4%] top-[30%] min-[1700px]:right-[18%] max-lg:hidden pointer-events-none" src="/assets/images/svg/hero-yellow-ellipse.svg" width={240} height={240} alt="yellow-ellipse" />
    </div>;
};

export default PupiloHero;
