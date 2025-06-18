import CustomButton from "@/components/common/CustomButton";
import Header from "@/components/common/Header";
import Hero from "@/components/Hero";
import PupiloDelivers from "@/components/PupiloDelivers";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <CustomButton text={"Try a Free Lesson"} />
      <PupiloDelivers />
    </>
  );
}
