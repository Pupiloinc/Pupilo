import Header from "@/components/common/Header";
import PupiloCard from "@/components/common/PupiloCard";
import Hero from "@/components/Hero";
import PupiloCurriculum from "@/components/home/PupiloCurriculum";
import PupiloDelivers from "@/components/PupiloDelivers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PupiloCard/>
      <PupiloCurriculum/>
      <PupiloDelivers />

    </>
  );
}
