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

export default function Home() {
  return (
    <div className="max-w-[2560px] mx-auto">
      <Hero badgeText="🏆Top-Rated by Parents" blackText="Where Every Child can" purpleText={<>Code,<span className="relative"> Create <Icons icon="heroTextEllipse" className="absolute top-2 -right-8 max-lg:hidden" /></span>and Thrive.</>} heroImg={<div className="relative"> <img
        src="/assets/gif/home-hero.gif"
        width={550}
        height={527}
        alt="home-hero"
        className="relative z-10 lg:min-h-[527px] rounded-3xl object-cover"
      />
      <Icons icon="htmlIcon" className="absolute top-[-10%] -left-7 z-20 max-lg:hidden" />
      <Icons icon="pythonIcon" className="absolute bottom-[-10%] -right-9 xl:-right-13 z-20 max-lg:hidden" />
      </div>} />
      < BrandMarquee />
      <PupiloCurriculum />
      <AddOnCourses />
      <PupiloDelivers />
      <WhyPupilo />
      <OurCoding />
      <Reviews />
      <GetStarted headingText={<>Start Your Child’s <br className="max-md:hidden" /> Coding Journey Today!</>} paragraph={<> Personalized session with a vetted instructor.<br /> Watch your child build their first project in 45 minutes. </>} />
      <Footer />
      <BackToTop />
    </div >
  );
}
