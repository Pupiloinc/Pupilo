import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Reviews from "@/components/common/Reviews";
import Hero from "@/components/Hero";
import FindWhatBest from "@/components/learn-with-pupilo/FindWhatBest";
import Gallery from "@/components/learn-with-pupilo/Gallery";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[2560px] mx-auto">
      <Hero badgeText="🌟Highest Rated in Africa"  blackText="Choose How You Learn. "/>
      <Gallery />
      <FindWhatBest />
      <Reviews />
      <GetStarted />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default page;
