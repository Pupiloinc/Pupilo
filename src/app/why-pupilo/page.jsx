import BackToTop from '@/components/common/BackToTop'
import Footer from '@/components/common/Footer'
import GetStarted from '@/components/common/GetStarted'
import Icons from '@/components/common/Icons'
import Reviews from '@/components/common/Reviews'
import Hero from '@/components/Hero'
import BrandMarquee from '@/components/home/BrandMarquee'
import FutureInnovators from '@/components/why-pupilo/FutureInnovators'
import LearnOurDifference from '@/components/why-pupilo/LearnOurDifference'
import OurMission from '@/components/why-pupilo/OurMission'
import Image from 'next/image'

const page = () => {
  return (
    <div className="max-w-[2560px] mx-auto">
      <Hero badgeText="🌍Reach of 15+ Countries"  blackText="More Than Coding. Here’s" purpleText={<>Why <span className="relative">Pupilo<Icons icon="heroTextEllipse" className="absolute top-7 rotate-[25deg] -right-10 max-lg:hidden" /></span> Exists</>} heroImg={<Image className="relative z-10 xl:min-h-[558px]" src="/assets/images/png/why-pupilo-hero.png" width={558} height={558} alt="home-hero" />}/>
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