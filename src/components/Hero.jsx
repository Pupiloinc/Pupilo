'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import CustomButton from "./common/CustomButton";
import Header from "./common/Header";
import Icons from "./common/Icons";

const Hero = ({ badgeText, blackText, purpleText, heroImg }) => {
  const pathName = usePathname()
  const router = useRouter()
  return <div className="bg-[url(/assets/images/webp/bg-hero.webp)] bg-cover bg-no-repeat bg-center relative">
    <Header />
    <div className="container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto">
      <div className="flex justify-between mt-[40px] lg:mt-[60px] pb-[60px] md:pb-[100px] lg:pb-[120px] max-lg:flex-col max-lg:items-center">
        <div className="w-full lg:w-1/2 lg:mt-6">
          <div className={`max-lg:mx-auto py-2 lg:py-[11.2px] border border-purple/15 px-4 lg:px-5 rounded-full bg-purple/10 w-fit  lg:w-full font-semibold text-sm md:text-base leading-100 text-nowrap text-purple ${pathName === '/learn-with-pupilo' && 'lg:max-w-[245px]'} ${pathName === '/' && "lg:max-w-[239px]"} ${pathName === '/courses' && "lg:max-w-[253px]"} ${pathName === '/why-pupilo' && "lg:max-w-[245px]"}`}>{badgeText}</div>
          <h2 className="max-lg:text-center font-semibold text-[38px] sm:text-[43px] md:text-5xl lg:text-[58px] xl:text-custom-[60px] leading-120 text-dark-black mt-4 relative z-10 lg:max-w-[502px]">{blackText} <span className="text-purple block">{purpleText}</span></h2>
          <div className="mt-4 sm:mt-5 md:mt-6 flex gap-3 relative z-10 max-lg:justify-center items-center">
            <CustomButton href="/contact-form" iconColor="#010101" text="Try a Free Lesson" />
            <Link href="https://wa.me/+27738649689" target="_blank">
              <div className="min-w-[41px] h-[41px] lg:min-w-[52px] lg:h-[52px] bg-dark-black rounded-full flex justify-center items-center duration-300 ease-linear transition-all hover:opacity-50">
                <Icons icon="whatsappIcon" />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end max-lg:mt-8">
          {heroImg}
        </div>
      </div>
    </div>
    <Image className="absolute top-[51%] left-[4%]  min-[1700px]:left-[15%] max-lg:hidden pointer-events-none" src="/assets/images/svg/hero-purple-ellipse.svg" width={240} height={240} alt="purple-ellipse" />
    <Image className={`${pathName === '/learn-with-pupilo' && "!top-[29%]"} absolute right-[3%] 2xl:right-[6%] top-[30%] min-[1700px]:right-[18%] max-lg:hidden pointer-events-none`} src="/assets/images/svg/hero-yellow-ellipse.svg" width={240} height={240} alt="yellow-ellipse" />
  </div>
};

export default Hero;
