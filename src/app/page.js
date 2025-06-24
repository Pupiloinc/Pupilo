import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Reviews from "@/components/common/Reviews";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import PupiloCurriculum from "@/components/home/PupiloCurriculum";
import WhyPupilo from "@/components/home/WhyPupilo";
import PupiloDelivers from "@/components/home/PupiloDelivers";
import BackToTop from "@/components/common/BackToTop";
import OurCoding from "@/components/home/OurCoding";
import AddOnCourses from "@/components/home/AddOnCourses";
import Icons from "@/components/common/Icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[2560px] mx-auto">
      <Hero badgeText="🏆Top-Rated by Parents" blackText="Where Every Child can" purpleText={<>Code,<span className="relative"> Create <Icons icon="heroTextEllipse" className="absolute top-2 -right-8 max-lg:hidden" /></span>and Thrive.</>} heroImg={<Image className="relative z-10" src="/assets/images/webp/home-hero.webp" width={550} height={527} alt="home-hero" />} />
      <BrandMarquee />
      <PupiloCurriculum />
      <AddOnCourses />
      <PupiloDelivers />
      <WhyPupilo />
      <OurCoding />
      <Reviews />
      <GetStarted headingText={<>Start Your Child’s <br className="max-md:hidden"/> Coding Journey Today!</>} paragraph={<> Personalized session with a vetted instructor.<br /> Watch your child build their first project in 45 minutes. </>} />
      <Footer />
      <BackToTop />
    </div>
  );
}
