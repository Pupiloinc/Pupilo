import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Header from "@/components/common/Header";
import PupiloCard from "@/components/common/PupiloCard";
import Reviews from "@/components/common/Reviews";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/home/BrandMarquee";
import PupiloCurriculum from "@/components/home/PupiloCurriculum";
import WhyPupilo from "@/components/home/WhyPupilo";
import PupiloDelivers from "@/components/PupiloDelivers";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <PupiloCurriculum />
      <PupiloDelivers />
      <WhyPupilo />
      <Reviews />
      <GetStarted />
      <Footer />
    </>
  );
}
