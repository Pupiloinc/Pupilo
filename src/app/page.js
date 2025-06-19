import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Header from "@/components/common/Header";
import PupiloCard from "@/components/common/PupiloCard";
import Reviews from "@/components/common/Reviews";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import PupiloCurriculum from "@/components/home/PupiloCurriculum";
import WhyPupilo from "@/components/home/WhyPupilo";
import PupiloDelivers from "@/components/home/PupiloDelivers";
import OurCoding from "@/components/home/OurCoding";
import AddOnCourses from "@/components/home/AddOnCourses";
import BackToTop from "@/components/common/BackToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <PupiloCurriculum />
      <AddOnCourses />
      <PupiloDelivers />
      <WhyPupilo />
      <OurCoding />
      <Reviews />
      <WhyPupilo />
      <GetStarted />
      <Footer />
      <BackToTop />
    </>
  );
}
