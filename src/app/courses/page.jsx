import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Reviews from "@/components/common/Reviews";
import CourseHero from "@/components/courses/CourseHero";
import PupiloCurriculum from "@/components/courses/PupiloCurriculum";
import TechJourney from "@/components/courses/TechJourney";
import BrandMarquee from "@/components/home/BrandMarquee";
import React from "react";

const page = () => {
  return (
    <div>
      <CourseHero />
      <BrandMarquee />
      <PupiloCurriculum />
      <TechJourney />
      <Reviews />
      <GetStarted />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default page;
