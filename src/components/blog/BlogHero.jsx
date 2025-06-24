'use client'
import Image from "next/image";
import Header from "../common/Header";
import Icons from "../common/Icons";

const BlogHero = () => {
  return <div className="bg-[url(/assets/images/webp/bg-hero.webp)] bg-cover bg-no-repeat bg-center relative">
    <div className="max-sm:mb-[10px]">
      <Header />
    </div>
    <div className="container max-w-[1140px] xl:px-0 px-4 md:px-6 mx-auto">
      <div className="pt-[230px] pb-[326px] relative">
        <h2 className="text-center font-semibold text-[38px] sm:text-[43px] md:text-5xl lg:text-[58px] xl:text-custom-6xl leading-120 text-dark-black relative z-10">Our<span className="text-purple relative"> Blogs<Icons icon="heroTextEllipse" className="absolute top-2 -right-8 max-lg:hidden" /></span></h2>
        <Image src="/assets/images/webp/blog-1.webp" alt="blog-1" width={214} height={166} className="absolute top-[8%] md:top-[14%] left-[5%] -rotate-[20deg] max-sm:w-[144px] rounded-xl" />
        <div className="absolute top-[8%] md:top-[12%] right-[4%] ">
          <div className="relative">
            <Image src="/assets/images/webp/blog-2.webp" alt="blog-2" width={228} height={178} className="rotate-[30deg] max-sm:w-[138px] rounded-xl" />
            <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute right-[-17%] md:right-[-22%] top-[19%] rotate-[2deg] z-10">
              <Image src="/assets/images/svg/sublime.svg" width={30} height={30} alt="sublime" />
            </div>
          </div>
        </div>
        <Image src="/assets/images/webp/blog-3.webp" alt="blog-3" width={155} height={121} className="absolute bottom-[14%] left-0 md:bottom-[25%] md:left-[20.39%] rotate-[10deg] rounded-xl" />
        <Image src="/assets/images/webp/blog-4.webp" alt="blog-4" width={166} height={129} className="absolute bottom-[10%] right-0 md:bottom-[21%] md:right-[15.39%] -rotate-[11deg] rounded-xl" />
        {/* icon images */}
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute -left-2 md:-left-3 top-[25%] rotate-[15deg]">
          <Image src="/assets/images/svg/html.svg" width={21} height={24} alt="html-img" />
        </div>
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute left-[10%] bottom-[39%] rotate-[-30deg] z-10">
          <Image src="/assets/images/svg/bitbucket.svg" width={21} height={24} alt="html-img" />
        </div>
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute left-[10%] md:left-[34%] lg:left-[28%] top-[2%] md:top-[14%] rotate-[14deg] z-10">
          <Image src="/assets/images/svg/css.svg" width={24} height={28} alt="html-img" />
        </div>
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute left-[49%] max-sm:bottom-[31%] bottom-[28%] rotate-[-30deg] z-10">
          <Image src="/assets/images/svg/js.svg" width={25} height={25} alt="html-img" className="max-w-[25px] h-[25px]" />
        </div>
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute right-[38%] top-[24%] md:top-[13%] rotate-[2deg] z-10">
          <Image src="/assets/images/svg/python.svg" width={30} height={30} alt="html-img" />
        </div>
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute right-0 md:right-[23%] top-[40%] rotate-[2deg] z-10">
          <Image src="/assets/images/svg/vs-code.svg" width={27} height={27} alt="html-img" />
        </div>
        <div className="min-w-10 sm:min-w-12 h-10 sm:h-12 bg-white border border-black/10 shadow-light-dark rounded-full flex justify-center items-center absolute right-[7%] bottom-[34%] rotate-[2deg] z-10">
          <Image src="/assets/images/svg/wordpress.svg" width={24} height={24} alt="html-img" />
        </div>
      </div>
    </div>
    <Image className="absolute top-[54%] left-[7%]  min-[1700px]:left-[18%] max-lg:hidden pointer-events-none" src="/assets/images/svg/hero-purple-ellipse.svg" width={191} height={191} alt="purple-ellipse" />
    <Image className="absolute right-[8%] 2xl:right-[9%] top-[46%] min-[1700px]:right-[18%] max-lg:hidden pointer-events-none" src="/assets/images/svg/hero-yellow-ellipse.svg" width={190} height={190} alt="yellow-ellipse" />
  </div>;
};

export default BlogHero;
