"use client";
import { useState } from "react";
import BackToTop from "@/components/common/BackToTop";
import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Icons from "@/components/common/Icons";
import Reviews from "@/components/common/Reviews";
import Hero from "@/components/Hero";
import AddOnCourses from "@/components/home/AddOnCourses";
import BrandMarquee from "@/components/home/BrandMarquee";
import OurCoding from "@/components/home/OurCoding";
import PupiloCurriculum from "@/components/home/PupiloCurriculum";
import PupiloDelivers from "@/components/home/PupiloDelivers";
import WhyPupilo from "@/components/home/WhyPupilo";
import { HERO_VIDEO_DATA } from "../../utils/helper";
import JoinTheWaitList from "@/components/common/JoinTheWaitList";
import { ToastContainer } from "react-toastify";
import NewsLetterPopUp from "@/components/common/NewsLetterPopUp";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [hasSwitched, setHasSwitched] = useState(false);

  const handleVideoEnd = () => {
    if (isFading) return;

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev + 1 < HERO_VIDEO_DATA.length ? prev + 1 : 0
      );

      setTimeout(() => {
        setIsFading(false);
        setHasSwitched(false);
      }, 300);
    }, 300);
  };

  return (
    <div className="max-w-[2560px] mx-auto">
      <ToastContainer />
      <Hero
        badgeText="🏆 Top-Rated by Parents"
        blackText="Where Every Child can" purpleText={<>Code,<span className="relative"> Create <Icons icon="heroTextEllipse" className="absolute top-2 -right-8 max-lg:hidden" /></span>and Thrive.</>}
        heroImg={
          <div className="relative z-10 w-[550px] max-sm:h-[300px] h-[527px]">
            <div
              className="absolute top-0 left-0 h-full bg-transparent z-30 w-full rounded-3xl"
              style={{
                backdropFilter: isFading ? "blur(10px)" : "blur(0px)",
                transition: "backdrop-filter 0.5s ease-in-out",
              }}
            ></div>
            <video
              key={currentIndex}
              src={HERO_VIDEO_DATA[currentIndex].src}
              width={550}
              height={527}
              autoPlay
              muted
              playsInline
              format="webm"
              preload="auto"
              onTimeUpdate={(e) => {
                const video = e.target;
                const timeLeft = video.duration - video.currentTime;

                if (timeLeft <= 1.2 && !hasSwitched) {
                  setHasSwitched(true);
                  setIsFading(true);
                  setTimeout(() => {
                    handleVideoEnd();
                  }, 100);
                }
              }}
              className="h-full w-full rounded-3xl max-sm:rounded-2xl object-cover z-20"
            />
            <Icons
              icon="htmlIcon"
              className="absolute top-[-10%] -left-7 z-30 max-lg:hidden"
            />
            <Icons
              icon="pythonIcon"
              className="absolute bottom-[-10%] -right-5 xl:-right-13 z-30 max-lg:hidden"
            />
          </div>
        }
      />
      <NewsLetterPopUp />
      {/* Remaining Sections */}
      <BrandMarquee />
      <PupiloCurriculum />
      <AddOnCourses />
      <PupiloDelivers />
      <WhyPupilo />
      <OurCoding />
      <Reviews />
      <GetStarted
        headingText={
          <>
            Start Your Child’s <br className="max-md:hidden" /> Coding Journey
            Today!
          </>
        }
        paragraph={
          <>
            Personalized session with a vetted instructor.
            <br /> Watch your child build their first project in 45 minutes.
          </>
        }
      />
      <Footer />
      <BackToTop />
      <JoinTheWaitList />
    </div>
  );
}
