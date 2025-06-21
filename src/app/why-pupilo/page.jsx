import BackToTop from '@/components/common/BackToTop'
import Footer from '@/components/common/Footer'
import GetStarted from '@/components/common/GetStarted'
import Reviews from '@/components/common/Reviews'
import BrandMarquee from '@/components/home/BrandMarquee'
import FutureInnovators from '@/components/why-pupilo/FutureInnovators'
import LearnOurDifference from '@/components/why-pupilo/LearnOurDifference'
import OurMission from '@/components/why-pupilo/OurMission'
import PupiloHero from '@/components/why-pupilo/PupiloHero'

const page = () => {
  return (
    <div className="max-w-[2560px] mx-auto">
      <PupiloHero />
      <BrandMarquee />
      <FutureInnovators />
      <LearnOurDifference />
      <OurMission />
      <Reviews />
      <GetStarted />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default page