import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Reviews from "@/components/common/Reviews";
import FindWhatBest from "@/components/learn-with-pupilo/FindWhatBest";
import Gallery from "@/components/learn-with-pupilo/Gallery";
import React from "react";

const page = () => {
  return (
    <div>
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
