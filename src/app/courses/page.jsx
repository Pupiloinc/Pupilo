import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Reviews from "@/components/common/Reviews";
import AddOnCourses from "@/components/courses/AddOnCourses";
import CourseHero from "@/components/courses/CourseHero";
import PupiloCurriculum from "@/components/courses/pupiloCurriculum";
import TechJourney from "@/components/courses/TechJourney";
import BrandMarquee from "@/components/home/BrandMarquee";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[2560px] mx-auto">
      <CourseHero />
      <BrandMarquee />
      <PupiloCurriculum />
      <TechJourney />
      <AddOnCourses />
      <Reviews />
      <GetStarted />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default page;
