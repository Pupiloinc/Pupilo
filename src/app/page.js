"use client";
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
import { useEffect, useState } from "react";
const HERO_GIF_DATA = [
  { src: "assets/gif/hero-fourth-video.gif", duration: 3000 },
  { src: "assets/gif/hero-third-video.gif", duration: 4500 },
  { src: "assets/gif/home-hero.gif", duration: 4000 },
  { src: "assets/gif/hero-second-video.gif", duration: 3500 },
];
export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex + 1 < HERO_GIF_DATA.length ? prevIndex + 1 : 0
      );
    }, HERO_GIF_DATA[currentIndex].duration);

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="max-w-[2560px] mx-auto">
      <Hero
        badgeText="🏆Top-Rated by Parents"
        blackText="Where Every Child can"
        purpleText={
          <>
            Code,
            <span className="relative">
              {" "}
              Create{" "}
              <Icons
                icon="heroTextEllipse"
                className="absolute top-2 -right-8 max-lg:hidden"
              />
            </span>
            and Thrive.
          </>
        }
        heroImg={
          <div className="relative w-[550px] h-[527px]">
            {HERO_GIF_DATA.map((obj, index) => (
              <img
                key={index}
                src={obj.src}
                loading="eager"
                width={550}
                height={527}
                alt={`hero-gif-${index + 1}`}
                className={`absolute top-0 left-0 h-full w-full transition-opacity duration-700 ease-in-out rounded-3xl object-cover ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              />
            ))}
            <Icons
              icon="htmlIcon"
              className="absolute top-[-10%] -left-7 z-20 max-lg:hidden"
            />
            <Icons
              icon="pythonIcon"
              className="absolute bottom-[-10%] -right-5 xl:-right-13 z-20 max-lg:hidden"
            />
          </div>
        }
      />
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
            {" "}
            Personalized session with a vetted instructor.
            <br /> Watch your child build their first project in 45 minutes.{" "}
          </>
        }
      />
      <Footer />
      <BackToTop />
    </div>
  );
}
