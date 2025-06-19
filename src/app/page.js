import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
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
    <>
      <Hero />
      <BrandMarquee />
      <PupiloCurriculum />
      <AddOnCourses />
      <PupiloDelivers />
      <WhyPupilo />
      <OurCoding />
      <Reviews />
      <GetStarted />
      <Footer />
    </>
  );
}
