import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Icons from "@/components/common/Icons";
import Reviews from "@/components/common/Reviews";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import FindWhatBest from "@/components/learn-with-pupilo/FindWhatBest";
import Gallery from "@/components/learn-with-pupilo/Gallery";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[2560px] mx-auto">

      <Hero badgeText="🌟Highest Rated in Africa" blackText="Choose How You Learn." purpleText={<>Build What <br className="max-lg:hidden" />You <span className="relative">Dream.<Icons icon="heroTextEllipse" className="absolute top-0 -right-5 max-lg:hidden" /></span></>} heroImg={<Image className="relative z-10 lg:min-h-[550px] lg:object-contain xl:object-fill" src="/assets/images/webp/learn-pupilo.webp" width={566} height={550} alt="home-hero" />} />
      <BrandMarquee />
      <Gallery />
      <FindWhatBest />
      <Reviews />
      <GetStarted headingText={<>Every Learner is Unique.<br className="max-md:hidden" /> So is Every Path.</>} paragraph={<>Browse programs by level, or book a free placement  <br className="max-sm:hidden" /> session to find the perfect fit.</>} />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default page;
