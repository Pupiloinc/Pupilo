import Footer from "@/components/common/Footer";
import GetStarted from "@/components/common/GetStarted";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import PupiloCurriculum from "@/components/home/PupiloCurriculum";
import PupiloDelivers from "@/components/PupiloDelivers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PupiloCurriculum />
      <PupiloDelivers />
      <GetStarted />
      <Footer />
    </>
  );
}
